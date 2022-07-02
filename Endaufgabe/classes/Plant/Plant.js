var GGSim;
(function (GGSim) {
    class Plant {
        fieldX;
        fieldY;
        pest;
        waterLevelImages = [GGSim.Asset.empty, GGSim.Asset.needWaterOne, GGSim.Asset.needWaterTwo, GGSim.Asset.needWaterThree];
        waterLevelImage = this.waterLevelImages[0];
        constructor(_fieldX, _fieldY) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }
        timeUpdate(_action) {
            switch (_action) {
                case GGSim.TIMEACTION.GROW:
                    this.grow();
                    break;
                case GGSim.TIMEACTION.DRY:
                    this.dry();
                    break;
                case GGSim.TIMEACTION.PEST:
                    this.shrink();
                    break;
            }
            GGSim.Simulation.update();
        }
        playerUpdate() {
            switch (GGSim.Player.action) {
                case GGSim.ACTION.WATER:
                    this.getWaterd();
                    break;
                case GGSim.ACTION.FERTILIZE:
                    this.getFertilized();
                    break;
                case GGSim.ACTION.PESTICIDE:
                    this.getPesticided();
                    break;
                case GGSim.ACTION.HARVEST:
                    this.getHarvested();
                    break;
            }
            GGSim.Simulation.update();
        }
        getWaterd() {
            if (this.pests.length == 0) {
                if (this.waterLevel < this.maxWaterlevel && this.isReady == false) {
                    this.waterLevel++;
                    if (this.waterLevel == Math.round(this.maxWaterlevel / 4)) {
                        this.waterLevelImage = this.waterLevelImages[2];
                    }
                    else if (this.waterLevel == this.maxWaterlevel - 1) {
                        this.waterLevelImage = this.waterLevelImages[1];
                    }
                    else if (this.waterLevel == this.maxWaterlevel) {
                        this.waterLevelImage = this.waterLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel || this.waterLevel > this.maxWaterlevel) {
                    console.log("mucho");
                    this.isReady = false;
                    this.waterLevel++;
                    this.age--;
                }
            }
        }
        getFertilized() {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0 && this.age < this.maxAge) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
            }
            else if (this.fertilizeLevel >= this.maxFertilizeLevel) {
                this.isReady = false;
                this.fertilizeLevel++;
                this.age = this.age - this.fertilizeSteps;
            }
            GGSim.Player.fertilizer--;
        }
        getPesticided() {
            if (this.pests.length > 0) {
                this.pesticideAmount--;
                GGSim.Player.pesticides--;
                this.pests = [];
            }
        }
        getHarvested() {
            if (this.isReady == true) {
                this.priceUpdate();
                GGSim.Player.money = GGSim.Player.money + Math.round(this.priceValue) + 1 * this.fertilizeLevel;
                console.log(this.priceValue);
                if (GGSim.Player.money < 0) {
                    GGSim.Player.money = 0;
                }
            }
        }
        grow() {
            if (this.waterLevel > 0 && this.pests.length == 0) {
                if (this.age < this.maxAge) {
                    this.age++;
                    if (this.age == Math.round(this.maxAge / 2)) {
                        this.image = this.images[1];
                    }
                }
                else {
                    this.image = this.images[2];
                    this.isReady = true;
                }
            }
            else if (this.age > 0 && this.pests.length > 0) {
                this.isReady = false;
                this.age--;
                if (this.age == this.maxAge - 1) {
                    this.image = this.images[1];
                }
                else if (this.age == 0) {
                    this.image = this.images[0];
                }
            }
        }
        shrink() {
            this.pests.push(new GGSim.Pest(this.fieldX, this.fieldY));
        }
        dry() {
            if (this.isReady == false && this.waterLevel > 0 && this.isReady == false) {
                this.waterLevel--;
                if (this.waterLevel == this.maxWaterlevel / 4) {
                    this.waterLevelImage = this.waterLevelImages[1];
                }
                else if (this.waterLevel == Math.round(this.maxWaterlevel / 2)) {
                    this.waterLevelImage = this.waterLevelImages[2];
                }
                else if (this.waterLevel == 0) {
                    this.waterLevelImage = this.waterLevelImages[3];
                }
            }
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(GGSim.Field.size / 2 + GGSim.Field.size * this.fieldX, GGSim.Field.size / 2 + GGSim.Field.size * this.fieldY);
            GGSim.ctx.translate((-GGSim.Field.size / 2), (-GGSim.Field.size / 2));
            GGSim.ctx.drawImage(this.image, 0, 0);
            GGSim.ctx.drawImage(this.waterLevelImage, GGSim.Field.size / 4, GGSim.Field.size / 4);
        }
    }
    GGSim.Plant = Plant;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Plant.js.map