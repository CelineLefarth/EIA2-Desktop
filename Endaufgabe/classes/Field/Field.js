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
                    console.log(GGSim.Player.action);
                    if (GGSim.Player.action == GGSim.ACTION.PLANT) {
                        GGSim.plants.push(new GGSim.Plant(this.positionX / 50, this.positionY / 50));
                        this.plant = GGSim.plants[GGSim.plants.length - 1];
                        GGSim.plants[GGSim.plants.length - 1].draw();
                        this.empty = false;
                        console.log("Plflanze gepflanzt");
                    }
                }
                else {
                    console.log("es wurde auf die Pflanze gedrückt");
                    this.plant.playerUpdate();
                }
            }
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(this.positionX, this.positionY);
            GGSim.ctx.fillStyle = "darkbrown";
            GGSim.ctx.fillRect(5, 5, 45, 45);
        }
        clearField() {
            //
        }
    }
    GGSim.Field = Field;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Field.js.map