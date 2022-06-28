namespace GGSim {
    export class Plant {

        waterLevel: number = 50;
        fertilizeLevel: number = 0;
        pesticideAmount: number = 0;
        age: number = 0;
        fieldX: number;
        fieldY: number;
        pests: Pest[] = [];

        constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        timeUpdate(): void {
            //
        }

        playerUpdate(): void {
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
                plants.splice(1, 1);
                player.money ++;
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

        die(): void {
            //
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(50 * this.fieldX, 50 * this.fieldY);
            ctx.fillStyle = "green";
            ctx.fillRect(10, 10, 35, 35);
        }
        
    }
}