namespace GGSim {
    export class Field {
        time: number;
        positionX: number;
        positionY: number;
        empty: boolean = true;
        plant: Plant;

        constructor(_positionX: number, _positionY: number) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }

        clicked(_x: number, _y: number): void {
            _x = _x - 50;
            _y = _y - 50;

            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50) {
                console.log("Spalte: " + this.positionX / 50, "Zeile: " + this.positionY / 50);
                if (this.empty == true) {
                    if (Player.action == ACTION.PILLOW && Player.seeds[0].amount > 0) {
                        plants.push(new Pillow(this.positionX / 50, this.positionY / 50));
                        this.plant = plants[plants.length - 1];
                        this.empty = false;
                        Player.seeds[0].amount --;
                    }
                    else if (Player.action == ACTION.TEDDY && Player.seeds[1].amount > 0) {
                        plants.push(new Teddy(this.positionX / 50, this.positionY / 50));
                        this.plant = plants[plants.length - 1];
                        this.empty = false;
                        Player.seeds[1].amount --;
                    }
                    else if (Player.action == ACTION.SCARF && Player.seeds[2].amount > 0) {
                        plants.push(new Scarf(this.positionX / 50, this.positionY / 50));
                        this.plant = plants[plants.length - 1];
                        this.empty = false;
                        Player.seeds[2].amount --;
                    }
                    else if (Player.action == ACTION.BLANKET && Player.seeds[3].amount > 0) {
                        plants.push(new Blanket(this.positionX / 50, this.positionY / 50));
                        this.plant = plants[plants.length - 1];
                        this.empty = false;
                        Player.seeds[3].amount --;
                    }
                    else if (Player.action == ACTION.SOCK && Player.seeds[4].amount > 0) {
                        plants.push(new Sock(this.positionX / 50, this.positionY / 50));
                        this.plant = plants[plants.length - 1];
                        this.empty = false;
                        Player.seeds[4].amount --;
                    }
                    Simulation.update();
                }
                else if (Player.action == ACTION.HARVEST) {
                    this.plant.playerUpdate(this.plant);
                    plants.splice(plants.findIndex((e) => e == this.plant), 1);
                    this.empty = true;
                    Simulation.update();
                }
                else {
                    this.plant.playerUpdate(this.plant);
                }
            }

        }


        draw(): void {
            ctx.resetTransform();
            ctx.translate(this.positionX, this.positionY);
            ctx.fillStyle = "black";
            ctx.fillRect(5, 5, 45, 45);
        }

        clearField(): void {
            //
        }

    }
}