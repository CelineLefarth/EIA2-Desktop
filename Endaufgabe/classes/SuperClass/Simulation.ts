namespace GGSim {

    export let time: number = 0;
    
    export enum TIMEACTION {
        GROW,
        DRY,
        PEST
    }

    //Array of all possible Actions with their probabillity
    let timeActions: TIMEACTION[] = [TIMEACTION.GROW, TIMEACTION.DRY, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW,  TIMEACTION.DRY,  TIMEACTION.DRY,  TIMEACTION.GROW,  TIMEACTION.PEST];
    let randomAction: TIMEACTION;


    export class Simulation {

        static timeAction: TIMEACTION;

        constructor() {
            //
        }
        static run(): void {
            setInterval(this.timer, 5000);
        }

        static timer(): void {
            time++;
            for (let plant of plants) {
                randomAction = timeActions[Math.round(Math.random() * 10)] ;
                plant.timeUpdate(randomAction);

            }
        }

        static update(): void {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.resetTransform();
            for (let field of fields) {
                field.draw();
            }
            for (let plant of plants) {
                plant.draw();
                for (let pest of plant.pests) {
                pest.draw(plant.fieldX, plant.fieldY);
                }
            }

            document.getElementById("moneyCount").innerHTML = Player.money + "$";
            document.getElementById("fertiCount").innerHTML = Player.fertilizer + "F";
            document.getElementById("pestiCount").innerHTML = Player.pesticides + "P";
            document.getElementById("seedsCount").innerHTML = Player.seeds + "S";
        }
    }

}