var GGSim;
(function (GGSim) {
    class Plant {
        waterLevel = 50;
        fertilizeLevel = 0;
        pesticideAmount = 0;
        age = 0;
        fieldX;
        fieldY;
        pests = [];
        constructor(_fieldX, _fieldY) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }
        timeUpdate() {
            //
        }
        playerUpdate(_action) {
            if (_action == GGSim.ACTION.WATER) {
                this.waterLevel++;
            }
            else if (_action == GGSim.ACTION.FERTILIZE) {
                if (GGSim.player.fertilizer > 0) {
                    this.fertilizeLevel++;
                    GGSim.player.fertilizer--;
                }
                else {
                    console.log("you have no fertilizer to fertilize me, buy some in the shop");
                }
            }
            else if (_action == GGSim.ACTION.PESTICIDE) {
                if (GGSim.player.pesticides > 0) {
                    this.pesticideAmount--;
                    GGSim.player.pesticides--;
                }
                else {
                    console.log("you have no pesticides to pesticide me, buy some in the shop");
                }
            }
            else if (_action == GGSim.ACTION.HARVEST) {
                console.log("harvested plant need to add wich type and amount of money");
                GGSim.plants.splice(1, 1);
                GGSim.player.money++;
            }
            else if (_action == GGSim.ACTION.PLANT) {
                console.log("you need to click an empty field");
            }
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
        die() {
            //
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(50 * this.fieldX, 50 * this.fieldY);
            GGSim.ctx.fillStyle = "green";
            GGSim.ctx.fillRect(10, 10, 35, 35);
        }
    }
    GGSim.Plant = Plant;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Plant.js.map