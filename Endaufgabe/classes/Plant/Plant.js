var GGSim;
(function (GGSim) {
    class Plant {
        fieldX;
        fieldY;
        pest;
        waterLevelImages = [GGSim.Asset.empty, GGSim.Asset.needWaterOne, GGSim.Asset.needWaterTwo, GGSim.Asset.needWaterThree];
        waterLevelImage = this.waterLevelImages[0];
        plant;
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
        playerUpdate(_plant) {
            this.plant = _plant;
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
                if (this.waterLevel < this.maxWaterlevel) {
                    this.waterLevel++;
                    if (this.waterLevel == this.maxWaterlevel) {
                        this.waterLevelImage = this.waterLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel) {
                    console.log("mucho");
                    this.isReady = false;
                    this.waterLevel++;
                    if (this.waterLevel > this.maxWaterlevel) {
                        this.die();
                    }
                }
            }
            console.log("After watering: Water: ", this.waterLevel);
        }
        getFertilized() {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
                if (this.age > this.maxAge) {
                    this.age = this.maxAge;
                }
            }
            else if (this.fertilizeLevel == this.maxFertilizeLevel) {
                this.isReady = false;
                this.fertilizeLevel++;
                this.die();
            }
            GGSim.Player.fertilizer--;
            console.log("Fertilizer after Firtilising: ", this.fertilizeLevel, "Age after Firtilizing: ", this.age);
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
            else if (this.age >= 0 && this.pests.length > 0) {
                this.isReady = false;
                this.age--;
                if (this.age == this.maxAge - 1) {
                    this.image = this.images[1];
                }
                else if (this.age == 0) {
                    this.image = this.images[0];
                }
                else if (this.age == -1) {
                    this.die();
                }
            }
            console.log("Age after Growth: ", this.age);
        }
        shrink() {
            this.pests.push(new GGSim.Pest(this.fieldX, this.fieldY));
        }
        dry() {
            if (this.isReady == false && this.waterLevel > 0) {
                this.waterLevel--;
                if (this.waterLevel == this.maxWaterlevel - 1) {
                    this.waterLevelImage = this.waterLevelImages[1];
                }
                if (this.waterLevel == 0) {
                    this.waterLevelImage = this.waterLevelImages[3];
                    this.die();
                }
                console.log("After Dry Water: ", this.waterLevel);
            }
        }
        die() {
            console.log("Die");
            for (let field of GGSim.fields) {
                if (field.positionX == this.fieldX && field.positionY == this.fieldY) {
                    field.clear(this.plant);
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