var GGSim;
(function (GGSim) {
    class Field {
        time;
        positionX;
        positionY;
        empty = true;
        plant;
        constructor(_positionX, _positionY) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }
        clicked(_x, _y) {
            _x = _x - 50;
            _y = _y - 50;
            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50) {
                console.log("Spalte: " + this.positionX / 50, "Zeile: " + this.positionY / 50);
                if (this.empty == true) {
                    if (GGSim.Player.action == GGSim.ACTION.PLANT && GGSim.Player.money > 0) {
                        GGSim.plants.push(new GGSim.Plant(this.positionX / 50, this.positionY / 50));
                        this.plant = GGSim.plants[GGSim.plants.length - 1];
                        this.empty = false;
                        GGSim.Player.money--;
                        GGSim.Simulation.update();
                        console.log("Plflanze gepflanzt");
                    }
                }
                else if (GGSim.Player.action == GGSim.ACTION.HARVEST) {
                    this.plant.playerUpdate(this.plant);
                    GGSim.plants.splice(GGSim.plants.findIndex((e) => e == this.plant), 1);
                    this.empty = true;
                    GGSim.Simulation.update();
                }
                else {
                    this.plant.playerUpdate(this.plant);
                }
            }
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(this.positionX, this.positionY);
            GGSim.ctx.fillStyle = "black";
            GGSim.ctx.fillRect(5, 5, 45, 45);
        }
        clearField() {
            //
        }
    }
    GGSim.Field = Field;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Field.js.map