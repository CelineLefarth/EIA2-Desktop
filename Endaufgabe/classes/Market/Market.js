var GGSim;
(function (GGSim) {
    let schub = 0;
    class Market {
        static price = { type: "all", amount: 1, costTeddy: 1, costPillow: 1, costBlanket: 1, costScarf: 1, costPesticides: 1, costFertilizer: 1, costSocks: 1 };
        static lastPrice = { type: "all", amount: 1, costTeddy: 1, costPillow: 1, costBlanket: 1, costScarf: 1, costPesticides: 1, costFertilizer: 1, costSocks: 1 };
        static lastTime = 0;
        static canvasScaleFactor = 20;
        static fluctuation = 5;
        static priceUpdate() {
            Market.lastPrice.costPillow = Market.price.costPillow;
            Market.price.costPillow = (Math.random() * (Math.sin(GGSim.time) + Math.sin(GGSim.time + Math.random() * 10) * Market.fluctuation / 4) + 6);
            Market.lastPrice.costBlanket = Market.price.costBlanket;
            Market.price.costBlanket = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 5);
            Market.lastPrice.costScarf = Market.price.costScarf;
            Market.price.costScarf = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 5);
            Market.lastPrice.costTeddy = Market.price.costTeddy;
            Market.price.costTeddy = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 4);
            Market.lastPrice.costSocks = Market.price.costSocks;
            Market.price.costSocks = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 4);
            Market.lastPrice.costFertilizer = Market.price.costFertilizer;
            Market.price.costFertilizer = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 3);
            Market.lastPrice.costPesticides = Market.price.costPesticides;
            Market.price.costPesticides = (Math.random() * (Math.sin(GGSim.time + Math.random() * 100) + Math.sin(GGSim.time + Math.random() * 100) * Market.fluctuation / 4) + 3);
            Market.draw();
        }
        static visualUpdate() {
            document.getElementById("marketPricePillow").innerHTML = "Sell Pillow: " + (Market.price.costPillow).toFixed(2) + "$";
            document.getElementById("marketPriceTeddy").innerHTML = "Sell Teddy: " + (Market.price.costTeddy).toFixed(2) + "$";
            document.getElementById("marketPriceBlanket").innerHTML = "Sell Blanket: " + (Market.price.costBlanket).toFixed(2) + "$";
            document.getElementById("marketPriceScarf").innerHTML = "Sell Scarf: " + (Market.price.costScarf).toFixed(2) + "$";
            document.getElementById("marketPriceSocks").innerHTML = "Sell Socks: " + (Market.price.costSocks).toFixed(2) + "$";
            document.getElementById("marketPriceFertilizer").innerHTML = "Price Fertilizers: " + (Market.price.costFertilizer).toFixed(2) + "$";
            document.getElementById("marketPricePesticides").innerHTML = "Price Pesticides: " + (Market.price.costPesticides).toFixed(2) + "$";
        }
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
                schub = schub - 400;
                GGSim.ctxM.lineCap = "square";
                GGSim.ctxM.strokeStyle = "black";
                GGSim.ctxM.beginPath();
                GGSim.ctxM.moveTo(0, 250);
                GGSim.ctxM.lineTo(400, 250);
                GGSim.ctxM.moveTo(0, 150);
                GGSim.ctxM.lineTo(400, 150);
                GGSim.ctxM.moveTo(0, 50);
                GGSim.ctxM.lineTo(400, 50);
                GGSim.ctxM.stroke();
                GGSim.ctxM.closePath();
            }
            GGSim.ctxM.lineCap = "round";
            GGSim.ctxM.translate(400 + schub, 150);
            GGSim.ctxM.strokeStyle = "blue";
            GGSim.ctxM.lineWidth = 3;
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costPillow * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costPillow * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "purple";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costTeddy * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costTeddy * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "green";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costBlanket * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costBlanket * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "red";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costScarf * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costScarf * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "yellow";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costSocks * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costSocks * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "white";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costFertilizer * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costFertilizer * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
            GGSim.ctxM.strokeStyle = "black";
            GGSim.ctxM.beginPath();
            GGSim.ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, -Market.lastPrice.costPesticides * Market.canvasScaleFactor);
            GGSim.ctxM.lineTo(GGSim.time * Market.canvasScaleFactor, -Market.price.costPesticides * Market.canvasScaleFactor);
            GGSim.ctxM.stroke();
            GGSim.ctxM.closePath();
        }
    }
    GGSim.Market = Market;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Market.js.map