namespace GGSim {

    export class Blanket extends Plant{

        waterLevel: number = 4;
        fertilizeLevel: number = 0;
        pesticideAmount: number = 0;
        age: number = 0;
        scaleX: number = 1;
        scaleY: number = 1;
        color: string = "green";
        ready: boolean = false;
        pests: Pest[] = [];
        dryColor: string[] = ["brown", "red", "orange", "yellow", "green"];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        timeUpdate(_action: TIMEACTION): void {
            if (_action == TIMEACTION.GROW) {
                if (this.waterLevel > 0 && this.pests.length == 0) {
                if (this.age < 15) {
                    console.log("grow blanket");
                    this.age++;
                    this.scaleX = this.scaleX + 0.1;
                    this.scaleY = this.scaleY + 0.1;
                }
                else {
                    this.color = "blue";
                    this.ready = true;
                }
                }
            }
            else if (_action == TIMEACTION.DRY) {
                if (this.ready == false && this.waterLevel > 0) {
                console.log("dry");
                this.waterLevel --;
                this.color = this.dryColor[this.waterLevel];
                }
                if (this.waterLevel == 0) {
                    console.log("dry");
                    
                }
            }
            else if (_action == TIMEACTION.PEST) {
                this.pests.push(new Pest(this.fieldX, this.fieldY));
            }
            Simulation.update();
        }

        playerUpdate(_plant: Plant): void {
            if (Player.action == ACTION.WATER && this.pests.length == 0) {
                if (this.waterLevel < 4 && this.ready == false) {
                this.waterLevel++;
                this.color = this.dryColor[this.waterLevel];
                console.log("you waterd");
                }
            }
            else if (Player.action == ACTION.FERTILIZE) {
                if (Player.fertilizer > 0 && this.fertilizeLevel < 4 && this.pests.length == 0 && this.age < 15) {
                    this.fertilizeLevel++;
                    this.age = this.age + 3;
                    Player.fertilizer--;
                    console.log("you fertilized");

                }
                else {
                    console.log("you have no fertilizer to fertilize me, buy some in the shop");
                }
            }
            else if (Player.action == ACTION.PESTICIDE) {
                if (Player.pesticides > 0 && this.pests.length > 0) {
                    this.pesticideAmount--;
                    Player.pesticides--;
                    this.pests = [];
                    console.log("you pesticided");
                }
                else {
                    console.log("you have no pesticides to pesticide me, buy some in the shop");
                }
            }
            else if (Player.action == ACTION.HARVEST) {
                console.log("harvested plant need to add wich type and amount of money");
                if (this.ready == true) {
                    Player.money = Player.money + Math.round(Market.price.cost) + 1 * this.fertilizeLevel;
                    if (Player.money < 0) {
                        Player.money = 0;
                    }
                }
                else {
                    console.log("this plant is not ready its worth nothing");

                }
            }
            Simulation.update();
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
            ctx.scale(this.scaleX +  1 * this.fertilizeLevel, this.scaleY +  1 * this.fertilizeLevel);
            ctx.translate(-24 - this.scaleX, -24 - this.scaleY);
            ctx.fillStyle = this.color;
            ctx.fillRect(25, 25, 5, 5);
        }

    }
}