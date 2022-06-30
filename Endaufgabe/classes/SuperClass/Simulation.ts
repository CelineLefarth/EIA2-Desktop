namespace GGSim {

    export let time: number = 0;

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

        constructor() {
            //
        }
        static run(): void {
            setInterval(this.timer, 1000);
        }

        static timer(): void {
            Market.lastTime = time;
            time++;
            for (let plant of plants) {
                randomAction = timeActions[Math.round(Math.random() * timeActions.length - 1)];
                plant.timeUpdate(randomAction);
            }
            Market.lastPrice = Market.price.cost;
            Market.price.cost = (Math.random() * (Math.sin(time) + Math.sin(time) * 5));
            Market.draw();
            Simulation.update();

            if (plants.length == 0 && Player.money == 0) {
                alert("Du hast kein Geld mehr, um dir neue Pflanzen zu Kaufen und auch keine Pflanzen auf dem Feld, die dir Geld einbringen könnten! Alle Hoffnung ist verloren. Was tust du da??")
                location.reload();
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
            document.getElementById("marketPriceCost").innerHTML = "MwSt Erlöse: " + (Market.price.cost).toFixed(2) + "$";
        }
    }

}