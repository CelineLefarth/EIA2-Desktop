namespace GGSim {

    export let time: number = 0;
    
    export enum TIMEACTION {
        GROW,
        DRY,
        PEST
    }

    let timeActions: TIMEACTION[] = [TIMEACTION.GROW, TIMEACTION.DRY];
    let randomAction: TIMEACTION;


    export class Simulation {

        static timeAction: TIMEACTION;

        constructor() {
            //
        }
        static run(): void {
            setInterval(this.timer, 1000);
        }

        static timer(): void {
            time++;
    
            for (let plant of plants) {
                randomAction = timeActions[Math.round(Math.random())] ;
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
            }
            document.getElementById("moneyCount").innerHTML = Player.money + "$";
        }
    }

}