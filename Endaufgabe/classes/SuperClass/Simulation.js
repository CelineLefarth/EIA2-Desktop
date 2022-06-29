var GGSim;
(function (GGSim) {
    GGSim.time = 0;
    let TIMEACTION;
    (function (TIMEACTION) {
        TIMEACTION[TIMEACTION["GROW"] = 0] = "GROW";
        TIMEACTION[TIMEACTION["DRY"] = 1] = "DRY";
        TIMEACTION[TIMEACTION["PEST"] = 2] = "PEST";
    })(TIMEACTION = GGSim.TIMEACTION || (GGSim.TIMEACTION = {}));
    //Array of all possible Actions with their probabillity by sum of their appearence
    let timeActions = [TIMEACTION.GROW, TIMEACTION.DRY, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.PEST, TIMEACTION.GROW, TIMEACTION.DRY, TIMEACTION.DRY, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW, TIMEACTION.GROW];
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
            GGSim.Market.lastTime = GGSim.time;
            GGSim.time++;
            for (let plant of GGSim.plants) {
                randomAction = timeActions[Math.round(Math.random() * 20)];
                plant.timeUpdate(randomAction);
            }
            GGSim.Market.lastPrice = GGSim.Market.price.cost;
            GGSim.Market.price.cost = (Math.random() * (Math.sin(GGSim.time) + Math.sin(GGSim.time) * 5));
            console.log("akt " + GGSim.Market.price.cost);
            console.log("Last_ " + GGSim.Market.lastPrice);
            GGSim.Market.draw();
            Simulation.update();
            if (GGSim.plants.length == 0 && GGSim.Player.money == 0) {
                alert("Du hast kein Geld mehr, um dir neue Pflanzen zu Kaufen und auch keine Pflanzen auf dem Feld, die dir Geld einbringen könnten! Alle Hoffnung ist verloren. Was tust du da??");
                location.reload();
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
            document.getElementById("marketPriceCost").innerHTML = "MwSt Erlöse: " + (GGSim.Market.price.cost).toFixed(2) + "$";
        }
    }
    GGSim.Simulation = Simulation;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Simulation.js.map