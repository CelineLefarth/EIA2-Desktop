namespace GGSim {
    export class Field {
        static size: number = 100;
        time: number;
        positionX: number;
        positionY: number;
        isEmpty: boolean = true;
        plant: Plant;


        constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX;
            this.positionY = _positionY;
        }

        clicked(_x: number, _y: number): void {
            _x = _x - Field.size;
            _y = _y - Field.size;

            if (_x < this.positionX * Field.size && _x > this.positionX * Field.size - Field.size && _y < this.positionY * Field.size && _y > this.positionY * Field.size - Field.size) {
                if (this.isEmpty == true) {
                    if (Player.action == ACTION.PLANT) {
                        for (let seed of Player.seeds) {
                            if (Player.plantAction == seed.type && seed.amount > 0) {
                                switch (Player.plantAction) {
                                    case PLANTACTION.PILLOW:
                                        plants.push(new Pillow(this.positionX, this.positionY));
                                        break;
                                    case PLANTACTION.SCARF:
                                        plants.push(new Scarf(this.positionX, this.positionY));
                                        break;
                                    case PLANTACTION.TEDDY:
                                        plants.push(new Teddy(this.positionX, this.positionY));
                                        break;
                                    case PLANTACTION.BLANKET:
                                        plants.push(new Blanket(this.positionX, this.positionY));
                                        break;
                                    case PLANTACTION.SOCK:
                                        plants.push(new Sock(this.positionX, this.positionY));
                                        break;
                                }
                                this.plant = plants[plants.length - 1];
                                this.isEmpty = false;
                                seed.amount--;
                            }
                        }
                    }
                    Simulation.update();
                    
                }
                else if (Player.action == ACTION.HARVEST) {
                    this.clear(this.plant);
                }
                else {
                    this.plant.playerUpdate(this.plant);
                }
            }
        }

        clear(_plant: Plant): void {
            this.plant.playerUpdate(this.plant);
            plants.splice(plants.findIndex((_plant) => _plant == this.plant), 1);
            this.isEmpty = true;
            Simulation.update();
            console.log(this.positionX, this.positionY);
            
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX * Field.size, this.positionY * Field.size);
            ctx.drawImage(Asset.field, 0, 0);
        }

    }
}