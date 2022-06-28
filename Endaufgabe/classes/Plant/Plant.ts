namespace GGSim {
    export class Plant {

        waterLevel: number = 50;
        fertilizeLevel: number = 0;
        pesticideAmount: number = 0;
        age: number = 0;
        fieldX: number;
        fieldY: number;
        scaleX: number = 1;
        scaleY: number = 1;
        color: string = "green";
        pests: Pest[] = [];
        ready: boolean = false;

        constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        timeUpdate(_action: TIMEACTION): void {
            if (_action == TIMEACTION.GROW) {
                if (this.age < 15) {
                console.log("grow");
                this.age ++;
                this.scaleX = this.scaleX + 0.1;
                this.scaleY = this.scaleY + 0.1;
                }
                else {
                    this.color = "red";
                    this.ready = true;
                }
            }
            else if (_action == TIMEACTION.DRY) {
                console.log("dry");
            }
            Simulation.update();
        }

        playerUpdate(_plant: Plant): void {
            if (Player.action == ACTION.WATER) {
                this.waterLevel ++;
                console.log("you waterd");
            }
            else if (Player.action == ACTION.FERTILIZE) {
                if (player.fertilizer > 0) {
                this.fertilizeLevel ++;
                player.fertilizer --;
                console.log("you fertilized");
                
                }
                else {
                    console.log("you have no fertilizer to fertilize me, buy some in the shop");
                }
            }
            else if (Player.action == ACTION.PESTICIDE) {
                if (player.pesticides > 0) {
                this.pesticideAmount --;
                player.pesticides --;
                console.log("you pesticided");
                }
                else {
                    console.log("you have no pesticides to pesticide me, buy some in the shop");
                }
            }
            else if (Player.action == ACTION.HARVEST) {
                console.log("harvested plant need to add wich type and amount of money");
                if (this.ready == true) {
                Player.money = Player.money + 2;
                }
                else {
                    console.log("this plant is not ready its worth nothing");
                    
                }
                Simulation.update();
            }
            else if (Player.action == ACTION.PLANT) {
                console.log("you need to click an empty field");
            }
        }

        shrink(): void {
            //
        }

        grow(): void {
            //
        }

        dry(): void {
            //
        }

        die(_plant: Plant): void {
            console.log("die");
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(25 + 50 * this.fieldX, 25 + 50 * this.fieldY);
            ctx.scale(this.scaleX, this.scaleY);
            ctx.translate(-24 - this.scaleX, -24 - this.scaleY);
            ctx.fillStyle = this.color;
            ctx.fillRect(25, 25, 5, 5);
        }
        
    }
}