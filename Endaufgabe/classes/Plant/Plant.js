var GGSim;
(function (GGSim) {
    class Plant {
        fieldX;
        fieldY;
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
                    this.color = this.dryColor[this.waterLevel];
                }
            }
        }
        getFertilized() {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0 && this.age < this.maxAge) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
                GGSim.Player.fertilizer--;
            }
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
                GGSim.Player.money = GGSim.Player.money + Math.round(GGSim.Market.price.cost) + this.priceValue * this.fertilizeLevel;
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
        }
        shrink() {
            this.pests.push(new GGSim.Pest(this.fieldX, this.fieldY));
        }
        dry() {
            if (this.isReady == false && this.waterLevel > 0) {
                this.waterLevel--;
                this.color = this.dryColor[this.waterLevel];
            }
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(GGSim.Field.size / 2 + GGSim.Field.size * this.fieldX, GGSim.Field.size / 2 + GGSim.Field.size * this.fieldY);
            GGSim.ctx.translate((-GGSim.Field.size / 2), (-GGSim.Field.size / 2));
            GGSim.ctx.scale(2, 2);
            GGSim.ctx.drawImage(this.image, (-GGSim.Field.size / 20), (-GGSim.Field.size / 3));
        }
    }
    GGSim.Plant = Plant;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Plant.js.map