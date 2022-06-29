var GGSim;
(function (GGSim) {
    GGSim.time = 0;
    let TIMEACTION;
    (function (TIMEACTION) {
        TIMEACTION[TIMEACTION["GROW"] = 0] = "GROW";
        TIMEACTION[TIMEACTION["DRY"] = 1] = "DRY";
        TIMEACTION[TIMEACTION["PEST"] = 2] = "PEST";
    })(TIMEACTION = GGSim.TIMEACTION || (GGSim.TIMEACTION = {}));
    //Array of all possible Actions with their probabillity
    let timeActions = [TIMEACTION.GROW, TIMEACTION.DRY, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.DRY, TIMEACTION.DRY, TIMEACTION.GROW, TIMEACTION.PEST];
    let randomAction;
    class Simulation {
        static timeAction;
        constructor() {
            //
        }
        static run() {
            setInterval(this.timer, 5000);
        }
        static timer() {
            GGSim.time++;
            for (let plant of GGSim.plants) {
                randomAction = timeActions[Math.round(Math.random() * 10)];
                plant.timeUpdate(randomAction);
            }
        }
        static update() {
            GGSim.ctx.clearRect(0, 0, GGSim.canvas.width, GGSim.canvas.height);
            GGSim.ctx.resetTransform();
            for (let field of GGSim.fields) {
                field.draw();
            }
            for (let plant of GGSim.plants) {
                plant.draw();
                for (let pest of plant.pests) {
                    pest.draw(plant.fieldX, plant.fieldY);
                }
            }
            document.getElementById("moneyCount").innerHTML = GGSim.Player.money + "$";
            document.getElementById("fertiCount").innerHTML = GGSim.Player.fertilizer + "F";
            document.getElementById("pestiCount").innerHTML = GGSim.Player.pesticides + "P";
            document.getElementById("seedsCount").innerHTML = GGSim.Player.seeds + "S";
        }
    }
    GGSim.Simulation = Simulation;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Simulation.js.map