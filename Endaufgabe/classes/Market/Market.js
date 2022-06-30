var GGSim;
(function (GGSim) {
    let schub = 0;
    class Market {
        static price = { type: "all", amount: 1, cost: 1 };
        static lastPrice = 0;
        static lastTime = 0;
        static fluctuation = 5;
        static manipulate() {
            const marketFluctPlus = document.createElement("button");
            const marketFluctVis = document.createElement("span");
            const marketFluctMinus = document.createElement("button");
            marketFluctPlus.innerHTML = "Marketflucuation: +";
            marketFluctVis.innerHTML = "MF: " + Market.fluctuation;
            marketFluctMinus.innerHTML = "Marketflucuation: -";
            marketFluctMinus.addEventListener("click", () => { if (Market.fluctuation > 0) {
                Market.fluctuation--;
                marketFluctVis.innerHTML = "MF: " + Market.fluctuation;
            } });
            marketFluctPlus.addEventListener("click", () => { if (Market.fluctuation < 10) {
                Market.fluctuation++;
                marketFluctVis.innerHTML = "MF: " + Market.fluctuation;
            } });
            GGSim.settings.appendChild(marketFluctMinus);
            GGSim.settings.appendChild(marketFluctVis);
            GGSim.settings.appendChild(marketFluctPlus);
        }
        static draw() {
            GGSim.ctxM.resetTransform();
            if (GGSim.time % 20 === 0 || GGSim.time == 0) {
                GGSim.ctxM.clearRect(0, 0, GGSim.canvasM.width, GGSim.canvasM.height);
                schub = schub - 200;
                GGSim.ctxM.lineCap = "square";
                GGSim.ctxM.strokeStyle = "black";
                GGSim.ctxM.beginPath();
                GGSim.ctxM.moveTo(0, 125);
                GGSim.ctxM.lineTo(400, 125);
                GGSim.ctxM.moveTo(0, 75);
                GGSim.ctxM.lineTo(400, 75);
                GGSim.ctxM.moveTo(0, 25);
                GGSim.ctxM.lineTo(400, 25);
                GGSim.ctxM.stroke();
                GGSim.ctxM.closePath();
            }
            GGSim.ctxM.lineCap = "round";
            GGSim.ctxM.translate(200 + schub, 75);
            GGSim.ctxM.strokeStyle = "white";
            GGSim.ctxM.lineWidth = 2;
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * 10, -Market.lastPrice * 10);
            GGSim.ctxM.lineTo(GGSim.time * 10, -Market.price.cost * 10);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
        }
    }
    GGSim.Market = Market;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Market.js.map