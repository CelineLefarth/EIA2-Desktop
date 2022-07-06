namespace GGSim {

    export let time: number = 0;
    export let animationTime: number = 0;

    export enum TIMEACTION {
        GROW,
        DRY,
        PEST
    }

    //Array of all possible Actions with their probabillity by sum of their appearence
    let timeActions: TIMEACTION[] = [];
    for (let i: number = 0; i < 2; i++) {
        for (let k: number = 0; k < 20; k++) {
            timeActions.push(TIMEACTION.GROW);
        }
        for (let j: number = 0; j < 2; j++) {
            timeActions.push(TIMEACTION.DRY);
        }
        timeActions.push(TIMEACTION.PEST);
    }

    let randomAction: TIMEACTION;


    export class Simulation {

        static timeAction: TIMEACTION;

        static run(): void {
            setInterval(this.timer, 2000);
            setInterval(this.updateAnimation, 30);

        }

        static timer(): void {
            Market.lastTime = time;
            time++;
            for (let plant of plants) {
                randomAction = timeActions[Math.round(Math.random() * timeActions.length - 1)];
                plant.timeUpdate(randomAction);
            }
            Market.priceUpdate();
        }

        static updateAnimation(): void {
            animationTime++;
            for (let plant of plants) {
                for (let pest of plant.pests) {
                    pest.draw(plant.fieldX, plant.fieldY);
                    pest.fly();
                }
            }
            Simulation.update();
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
                    pest.fly();
                }
            }
            document.getElementById("moneyCount").innerHTML = Player.money + "$";
            document.getElementById("fertiCount").innerHTML = Player.fertilizer + "F";
            document.getElementById("pestiCount").innerHTML = Player.pesticides + "P";
            document.getElementById("seedsCount").innerHTML = "Pillow seeds: " + Player.seeds[0].amount + "S" + "<br>" + "Teddy seeds: " + Player.seeds[1].amount + "S" + "<br>" + "Scarf seeds: " + Player.seeds[2].amount + "S" + "<br>" + "Blanket seeds: " + Player.seeds[3].amount + "S" + "<br>" + "Sock seeds: " + Player.seeds[4].amount + "S";
            Market.visualUpdate();
        }
    }

}