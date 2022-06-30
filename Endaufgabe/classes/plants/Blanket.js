var GGSim;
(function (GGSim) {
    class Blanket extends GGSim.Plant {
        waterLevel = 4;
        fertilizeLevel = 0;
        pesticideAmount = 0;
        age = 0;
        scaleX = 1;
        scaleY = 1;
        color = "green";
        ready = false;
        pests = [];
        dryColor = ["brown", "red", "orange", "yellow", "green"];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        timeUpdate(_action) {
            if (_action == GGSim.TIMEACTION.GROW) {
                if (this.waterLevel > 0 && this.pests.length == 0) {
                    if (this.age < 15) {
                        console.log("grow blanket");
                        this.age++;
                        this.scaleX = this.scaleX + 0.1;
                        this.scaleY = this.scaleY + 0.1;
                    }
                    else {
                        this.color = "blue";
                        this.ready = true;
                    }
                }
            }
            else if (_action == GGSim.TIMEACTION.DRY) {
                if (this.ready == false && this.waterLevel > 0) {
                    console.log("dry");
                    this.waterLevel--;
                    this.color = this.dryColor[this.waterLevel];
                }
                if (this.waterLevel == 0) {
                    console.log("dry");
                }
            }
            else if (_action == GGSim.TIMEACTION.PEST) {
                this.pests.push(new GGSim.Pest(this.fieldX, this.fieldY));
            }
            GGSim.Simulation.update();
        }
        playerUpdate(_plant) {
            if (GGSim.Player.action == GGSim.ACTION.WATER && this.pests.length == 0) {
                if (this.waterLevel < 4 && this.ready == false) {
                    this.waterLevel++;
                    this.color = this.dryColor[this.waterLevel];
                    console.log("you waterd");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.FERTILIZE) {
                if (GGSim.Player.fertilizer > 0 && this.fertilizeLevel < 4 && this.pests.length == 0 && this.age < 15) {
                    this.fertilizeLevel++;
                    this.age = this.age + 3;
                    GGSim.Player.fertilizer--;
                    console.log("you fertilized");
                }
                else {
                    console.log("you have no fertilizer to fertilize me, buy some in the shop");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.PESTICIDE) {
                if (GGSim.Player.pesticides > 0 && this.pests.length > 0) {
                    this.pesticideAmount--;
                    GGSim.Player.pesticides--;
                    this.pests = [];
                    console.log("you pesticided");
                }
                else {
                    console.log("you have no pesticides to pesticide me, buy some in the shop");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.HARVEST) {
                console.log("harvested plant need to add wich type and amount of money");
                if (this.ready == true) {
                    GGSim.Player.money = GGSim.Player.money + Math.round(GGSim.Market.price.cost) + 1 * this.fertilizeLevel;
                    if (GGSim.Player.money < 0) {
                        GGSim.Player.money = 0;
                    }
                }
                else {
                    console.log("this plant is not ready its worth nothing");
                }
            }
            GGSim.Simulation.update();
        }
        shrink() {
            //
        }
        grow() {
            //
        }
        dry() {
            //
        }
        die(_plant) {
            console.log("die");
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(25 + 50 * this.fieldX, 25 + 50 * this.fieldY);
            GGSim.ctx.scale(this.scaleX + 1 * this.fertilizeLevel, this.scaleY + 1 * this.fertilizeLevel);
            GGSim.ctx.translate(-24 - this.scaleX, -24 - this.scaleY);
            GGSim.ctx.fillStyle = this.color;
            GGSim.ctx.fillRect(25, 25, 5, 5);
        }
    }
    GGSim.Blanket = Blanket;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Blanket.js.map