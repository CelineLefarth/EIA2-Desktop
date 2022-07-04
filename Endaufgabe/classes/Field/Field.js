var GGSim;
(function (GGSim) {
    class Field {
        static size = 100;
        positionX;
        positionY;
        isEmpty = true;
        plant;
        constructor(_positionX, _positionY) {
            this.positionX = _positionX;
            this.positionY = _positionY;
        }
        clicked(_x, _y) {
            _x = _x - Field.size;
            _y = _y - Field.size;
            if (_x < this.positionX * Field.size && _x > this.positionX * Field.size - Field.size && _y < this.positionY * Field.size && _y > this.positionY * Field.size - Field.size) {
                if (this.isEmpty == true) {
                    if (GGSim.Player.action == GGSim.ACTION.PLANT) {
                        for (let seed of GGSim.Player.seeds) {
                            if (GGSim.Player.plantAction == seed.type && seed.amount > 0) {
                                switch (GGSim.Player.plantAction) {
                                    case GGSim.PLANTACTION.PILLOW:
                                        GGSim.plants.push(new GGSim.Pillow(this.positionX, this.positionY));
                                        break;
                                    case GGSim.PLANTACTION.SCARF:
                                        GGSim.plants.push(new GGSim.Scarf(this.positionX, this.positionY));
                                        break;
                                    case GGSim.PLANTACTION.TEDDY:
                                        GGSim.plants.push(new GGSim.Teddy(this.positionX, this.positionY));
                                        break;
                                    case GGSim.PLANTACTION.BLANKET:
                                        GGSim.plants.push(new GGSim.Blanket(this.positionX, this.positionY));
                                        break;
                                    case GGSim.PLANTACTION.SOCK:
                                        GGSim.plants.push(new GGSim.Sock(this.positionX, this.positionY));
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
                    this.clear(this.plant);
                }
                else {
                    this.plant.playerUpdate(this.plant);
                }
            }
        }
        clear(_plant) {
            this.plant.playerUpdate(this.plant);
            GGSim.plants.splice(GGSim.plants.findIndex((_plant) => _plant == this.plant), 1);
            this.isEmpty = true;
            GGSim.Simulation.update();
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(this.positionX * Field.size, this.positionY * Field.size);
            GGSim.ctx.drawImage(GGSim.Asset.field, 0, 0);
        }
    }
    GGSim.Field = Field;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Field.js.map