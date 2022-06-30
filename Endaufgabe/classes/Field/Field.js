var GGSim;
(function (GGSim) {
    class Field {
        time;
        positionX;
        positionY;
        isEmpty = true;
        plant;
        constructor(_positionX, _positionY) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }
        clicked(_x, _y) {
            _x = _x - 50;
            _y = _y - 50;
            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50) {
                if (this.isEmpty == true) {
                    if (GGSim.Player.action == GGSim.ACTION.PLANT) {
                        for (let seed of GGSim.Player.seeds) {
                            if (GGSim.Player.plantAction == seed.type && seed.amount > 0) {
                                switch (GGSim.Player.plantAction) {
                                    case GGSim.PLANTACTION.PILLOW:
                                        GGSim.plants.push(new GGSim.Pillow(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case GGSim.PLANTACTION.SCARF:
                                        GGSim.plants.push(new GGSim.Scarf(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case GGSim.PLANTACTION.TEDDY:
                                        GGSim.plants.push(new GGSim.Teddy(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case GGSim.PLANTACTION.BLANKET:
                                        GGSim.plants.push(new GGSim.Blanket(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case GGSim.PLANTACTION.SOCK:
                                        GGSim.plants.push(new GGSim.Sock(this.positionX / 50, this.positionY / 50));
                                        break;
                                }
                                this.plant = GGSim.plants[GGSim.plants.length - 1];
                                this.isEmpty = false;
                                seed.amount--;
                            }
                        }
                    }
                    GGSim.Simulation.update();
                }
                else if (GGSim.Player.action == GGSim.ACTION.HARVEST) {
                    this.clear();
                }
                else {
                    this.plant.playerUpdate();
                }
            }
        }
        clear() {
            this.plant.playerUpdate();
            GGSim.plants.splice(GGSim.plants.findIndex((e) => e == this.plant), 1);
            this.isEmpty = true;
            GGSim.Simulation.update();
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(this.positionX, this.positionY);
            GGSim.ctx.fillStyle = "black";
            GGSim.ctx.fillRect(5, 5, 45, 45);
        }
    }
    GGSim.Field = Field;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Field.js.map