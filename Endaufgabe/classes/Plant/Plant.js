var GGSim;
(function (GGSim) {
    class Plant {
        waterLevel = 4;
        fertilizeLevel = 0;
        pesticideAmount = 0;
        age = 0;
        fieldX;
        fieldY;
        scaleX = 1;
        scaleY = 1;
        color = "green";
        pests = [];
        ready = false;
        dryColor = ["brown", "red", "orange", "yellow", "green"];
        constructor(_fieldX, _fieldY) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }
        timeUpdate(_action) {
            if (_action == GGSim.TIMEACTION.GROW) {
                if (this.waterLevel > 0) {
                    if (this.age < 15) {
                        console.log("grow");
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
            GGSim.Simulation.update();
        }
        playerUpdate(_plant) {
            if (GGSim.Player.action == GGSim.ACTION.WATER) {
                if (this.waterLevel < 4) {
                    this.waterLevel++;
                    this.color = this.dryColor[this.waterLevel];
                    console.log("you waterd");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.FERTILIZE) {
                if (GGSim.player.fertilizer > 0) {
                    this.fertilizeLevel++;
                    GGSim.player.fertilizer--;
                    console.log("you fertilized");
                }
                else {
                    console.log("you have no fertilizer to fertilize me, buy some in the shop");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.PESTICIDE) {
                if (GGSim.player.pesticides > 0) {
                    this.pesticideAmount--;
                    GGSim.player.pesticides--;
                    console.log("you pesticided");
                }
                else {
                    console.log("you have no pesticides to pesticide me, buy some in the shop");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.HARVEST) {
                console.log("harvested plant need to add wich type and amount of money");
                if (this.ready == true) {
                    GGSim.Player.money = GGSim.Player.money + 2;
                }
                else {
                    console.log("this plant is not ready its worth nothing");
                }
            }
            else if (GGSim.Player.action == GGSim.ACTION.PLANT) {
                console.log("you need to click an empty field");
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
            GGSim.ctx.scale(this.scaleX, this.scaleY);
            GGSim.ctx.translate(-24 - this.scaleX, -24 - this.scaleY);
            GGSim.ctx.fillStyle = this.color;
            GGSim.ctx.fillRect(25, 25, 5, 5);
        }
    }
    GGSim.Plant = Plant;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Plant.js.map