var GGSim;
(function (GGSim) {
    GGSim.time = 0;
    GGSim.animationTime = 0;
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
            setInterval(this.updateAnimation, 30);
        }
        static timer() {
            GGSim.Market.lastTime = GGSim.time;
            GGSim.time++;
            for (let plant of GGSim.plants) {
                randomAction = timeActions[Math.round(Math.random() * timeActions.length - 1)];
                plant.timeUpdate(randomAction);
            }
            GGSim.Market.lastPrice.costPillow = GGSim.Market.price.costPillow;
            GGSim.Market.price.costPillow = (Math.random() * (Math.sin(GGSim.time) + Math.sin(GGSim.time + Math.random() * 10) * GGSim.Market.fluctuation));
            GGSim.Market.lastPrice.costBlanket = GGSim.Market.price.costBlanket;
            GGSim.Market.price.costBlanket = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 4) + 1);
            GGSim.Market.lastPrice.costScarf = GGSim.Market.price.costScarf;
            GGSim.Market.price.costScarf = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 4) + 2);
            GGSim.Market.lastPrice.costTeddy = GGSim.Market.price.costTeddy;
            GGSim.Market.price.costTeddy = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 2) - 1);
            GGSim.Market.lastPrice.costSocks = GGSim.Market.price.costSocks;
            GGSim.Market.price.costSocks = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 2) - 2);
            GGSim.Market.lastPrice.costFertilizer = GGSim.Market.price.costFertilizer;
            GGSim.Market.price.costFertilizer = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 3) + 4);
            GGSim.Market.lastPrice.costPesticides = GGSim.Market.price.costPesticides;
            GGSim.Market.price.costPesticides = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * GGSim.Market.fluctuation / 3) + 4);
            GGSim.Market.draw();
        }
        static updateAnimation() {
            GGSim.animationTime++;
            for (let plant of GGSim.plants) {
                for (let pest of plant.pests) {
                    pest.draw(plant.fieldX, plant.fieldY);
                    pest.fly();
                }
            }
            Simulation.update();
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
                    pest.fly();
                }
            }
            document.getElementById("moneyCount").innerHTML = GGSim.Player.money + "$";
            document.getElementById("fertiCount").innerHTML = GGSim.Player.fertilizer + "F";
            document.getElementById("pestiCount").innerHTML = GGSim.Player.pesticides + "P";
            document.getElementById("seedsCount").innerHTML = "Pillow seeds: " + GGSim.Player.seeds[0].amount + "S" + "<br>" + "Teddy seeds: " + GGSim.Player.seeds[1].amount + "S" + "<br>" + "Scarf seeds: " + GGSim.Player.seeds[2].amount + "S" + "<br>" + "Blanket seeds: " + GGSim.Player.seeds[3].amount + "S" + "<br>" + "Sock seeds: " + GGSim.Player.seeds[4].amount + "S";
            document.getElementById("marketPricePillow").innerHTML = "Sell Pillow: " + (GGSim.Market.price.costPillow).toFixed(2) + "$";
            document.getElementById("marketPriceTeddy").innerHTML = "Sell Teddy: " + (GGSim.Market.price.costTeddy).toFixed(2) + "$";
            document.getElementById("marketPriceBlanket").innerHTML = "Sell Blanket: " + (GGSim.Market.price.costBlanket).toFixed(2) + "$";
            document.getElementById("marketPriceScarf").innerHTML = "Sell Scarf: " + (GGSim.Market.price.costScarf).toFixed(2) + "$";
            document.getElementById("marketPriceSocks").innerHTML = "Sell Socks: " + (GGSim.Market.price.costSocks).toFixed(2) + "$";
            document.getElementById("marketPriceFertilizer").innerHTML = "Price Fertilizers: " + (GGSim.Market.price.costFertilizer).toFixed(2) + "$";
            document.getElementById("marketPricePesticides").innerHTML = "Price Pesticides: " + (GGSim.Market.price.costPesticides).toFixed(2) + "$";
        }
    }
    GGSim.Simulation = Simulation;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Simulation.js.map