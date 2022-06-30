namespace GGSim {
    export class Field {
        time: number;
        positionX: number;
        positionY: number;
        isEmpty: boolean = true;
        plant: Plant;

        constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }

        clicked(_x: number, _y: number): void {
            _x = _x - 50;
            _y = _y - 50;

            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50) {
                if (this.isEmpty == true) {
                    if (Player.action == ACTION.PLANT) {
                        for (let seed of Player.seeds) {
                            if (Player.plantAction == seed.type && seed.amount > 0) {
                                switch (Player.plantAction) {
                                    case PLANTACTION.PILLOW:
                                        plants.push(new Pillow(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case PLANTACTION.SCARF:
                                        plants.push(new Scarf(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case PLANTACTION.TEDDY:
                                        plants.push(new Teddy(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case PLANTACTION.BLANKET:
                                        plants.push(new Blanket(this.positionX / 50, this.positionY / 50));
                                        break;
                                    case PLANTACTION.SOCK:
                                        plants.push(new Sock(this.positionX / 50, this.positionY / 50));
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
                    this.clear();
                }
                else {
                    this.plant.playerUpdate();
                }
            }
        }

        clear(): void {
            this.plant.playerUpdate();
            plants.splice(plants.findIndex((e) => e == this.plant), 1);
            this.isEmpty = true;
            Simulation.update();
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX, this.positionY);
            ctx.fillStyle = "black";
            ctx.fillRect(5, 5, 45, 45);
        }

    }
}