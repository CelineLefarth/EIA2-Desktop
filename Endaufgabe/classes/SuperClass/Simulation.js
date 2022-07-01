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
    let timeActions = [];
    for (let i = 0; i < 2; i++) {
        for (let k = 0; k < 20; k++) {
            timeActions.push(TIMEACTION.GROW);
        }
        for (let j = 0; j < 2; j++) {
            timeActions.push(TIMEACTION.DRY);
        }
        timeActions.push(TIMEACTION.PEST);
    }
    let randomAction;
    class Simulation {
        static timeAction;
        static run() {
            setInterval(this.timer, 1000);
        }
        static timer() {
            GGSim.Market.lastTime = GGSim.time;
            GGSim.time++;
            for (let plant of GGSim.plants) {
                randomAction = timeActions[Math.round(Math.random() * timeActions.length - 1)];
                plant.timeUpdate(randomAction);
            }
            GGSim.Market.lastPrice = GGSim.Market.price.cost;
            GGSim.Market.price.cost = (Math.random() * (Math.sin(GGSim.time) + Math.sin(GGSim.time) * GGSim.Market.fluctuation));
            GGSim.Market.draw();
            Simulation.update();
            if (GGSim.plants.length == 0 && GGSim.Player.money == 0) {
                alert("Du hast kein Geld mehr, um dir neue Pflanzen zu Kaufen und auch keine Pflanzen auf dem Feld, die dir Geld einbringen könnten! Alle Hoffnung ist verloren. Was tust du da??");
                location.reload();
            }
        }
        static update() {
            GGSim.ctx.fillRect(0, 0, GGSim.canvas.width, GGSim.canvas.height);
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
            document.getElementById("seedsCount").innerHTML = "Pillow seeds: " + GGSim.Player.seeds[0].amount + "S" + "<br>";
            document.getElementById("seedsCount").innerHTML += "Teddy seeds: " + GGSim.Player.seeds[1].amount + "S" + "<br>";
            document.getElementById("seedsCount").innerHTML += "Scarf seeds: " + GGSim.Player.seeds[2].amount + "S" + "<br>";
            document.getElementById("seedsCount").innerHTML += "Blanket seeds: " + GGSim.Player.seeds[3].amount + "S" + "<br>";
            document.getElementById("seedsCount").innerHTML += "Sock seeds: " + GGSim.Player.seeds[4].amount + "S";
            document.getElementById("marketPriceCost").innerHTML = "MwSt Erlöse: " + (GGSim.Market.price.cost).toFixed(2) + "$";
        }
    }
    GGSim.Simulation = Simulation;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Simulation.js.map