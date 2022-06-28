var GGSim;
(function (GGSim) {
    GGSim.time = 0;
    let TIMEACTION;
    (function (TIMEACTION) {
        TIMEACTION[TIMEACTION["GROW"] = 0] = "GROW";
        TIMEACTION[TIMEACTION["DRY"] = 1] = "DRY";
        TIMEACTION[TIMEACTION["PEST"] = 2] = "PEST";
    })(TIMEACTION = GGSim.TIMEACTION || (GGSim.TIMEACTION = {}));
    let timeActions = [TIMEACTION.GROW, TIMEACTION.DRY];
    let randomAction;
    class Simulation {
        static timeAction;
        constructor() {
            //
        }
        static run() {
            setInterval(this.timer, 1000);
        }
        static timer() {
            GGSim.time++;
            for (let plant of GGSim.plants) {
                randomAction = timeActions[Math.round(Math.random())];
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
            }
            document.getElementById("moneyCount").innerHTML = GGSim.Player.money + "$";
        }
    }
    GGSim.Simulation = Simulation;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Simulation.js.map