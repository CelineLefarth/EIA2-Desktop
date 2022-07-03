namespace GGSim {

    export interface Price {
        type: string;
        amount: number;
        costPillow: number;
        costTeddy: number;
        costScarf: number;
        costBlanket: number;
        costSocks: number;
        costFertilizer: number;
        costPesticides: number;
    }

    let schub: number = 0;

    export class Market {
        static price: Price = {type: "all", amount: 1, costTeddy: 1, costPillow: 1, costBlanket: 1, costScarf: 1, costPesticides: 1, costFertilizer: 1, costSocks: 1};
        static lastPrice: Price = {type: "all", amount: 1, costTeddy: 1, costPillow: 1, costBlanket: 1, costScarf: 1, costPesticides: 1, costFertilizer: 1, costSocks: 1};
        static lastTime: number = 0;
        static fluctuation: number = 5;
        static canvasScaleFactor: number = 20;


        static priceUpdate(): void {
            Market.lastPrice.costPillow = Market.price.costPillow;
            Market.price.costPillow = (Math.random() * (Math.sin(time) + Math.sin(time + Math.random() * 10) * Market.fluctuation / 4) + 6);
            Market.lastPrice.costBlanket = Market.price.costBlanket;
            Market.price.costBlanket = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 5);
            Market.lastPrice.costScarf = Market.price.costScarf;
            Market.price.costScarf = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 5);
            Market.lastPrice.costTeddy = Market.price.costTeddy;
            Market.price.costTeddy = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 4);
            Market.lastPrice.costSocks = Market.price.costSocks;
            Market.price.costSocks = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 4);
            Market.lastPrice.costFertilizer = Market.price.costFertilizer;
            Market.price.costFertilizer = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 3);
            Market.lastPrice.costPesticides = Market.price.costPesticides;
            Market.price.costPesticides = (Math.random() * (Math.sin(time + Math.random() * 100) + Math.sin(time + Math.random() * 100) * Market.fluctuation / 4) + 3);
            Market.draw();
        }

        static visualUpdate(): void {
            document.getElementById("marketPricePillow").innerHTML = "Sell Pillow: " + (Market.price.costPillow).toFixed(2) + "$";
            document.getElementById("marketPriceTeddy").innerHTML = "Sell Teddy: " + (Market.price.costTeddy).toFixed(2) + "$";
            document.getElementById("marketPriceBlanket").innerHTML = "Sell Blanket: " + (Market.price.costBlanket).toFixed(2) + "$";
            document.getElementById("marketPriceScarf").innerHTML = "Sell Scarf: " + (Market.price.costScarf).toFixed(2) + "$";
            document.getElementById("marketPriceSocks").innerHTML = "Sell Socks: " + (Market.price.costSocks).toFixed(2) + "$";
            document.getElementById("marketPriceFertilizer").innerHTML = "Price Fertilizers: " + (Market.price.costFertilizer).toFixed(2) + "$";
            document.getElementById("marketPricePesticides").innerHTML = "Price Pesticides: " + (Market.price.costPesticides).toFixed(2) + "$";
        }

        static manipulate(): void {
            const marketFluctPlus: HTMLButtonElement = document.createElement("button");
            const marketFluctVis: HTMLElement = document.createElement("span");
            const marketFluctMinus: HTMLButtonElement = document.createElement("button");
            marketFluctPlus.innerHTML = "Marketflucuation: +";
            marketFluctVis.innerHTML = "MF: " + Market.fluctuation;
            marketFluctMinus.innerHTML = "Marketflucuation: -";
            marketFluctMinus.addEventListener("click", () => { if (Market.fluctuation > 0) {Market.fluctuation --; marketFluctVis.innerHTML = "MF: " + Market.fluctuation; }});
            marketFluctPlus.addEventListener("click", () => { if (Market.fluctuation < 10) {Market.fluctuation ++; marketFluctVis.innerHTML = "MF: " + Market.fluctuation; }});
            settings.appendChild(marketFluctMinus);
            settings.appendChild(marketFluctVis);
            settings.appendChild(marketFluctPlus);

        }

        static draw(): void {
            ctxM.resetTransform();
            if (time % 20 === 0 || time == 0) {
                ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
                schub = schub - 400;
                ctxM.lineCap = "square";
                ctxM.strokeStyle = "black";
                ctxM.beginPath();
                ctxM.moveTo(0, 250);
                ctxM.lineTo(400, 250);
                ctxM.moveTo(0, 150);
                ctxM.lineTo(400, 150);
                ctxM.moveTo(0, 50);
                ctxM.lineTo(400, 50);
                ctxM.stroke();
                ctxM.closePath();
            }
            ctxM.lineCap = "round";
            ctxM.translate(400 + schub, 150);
            ctxM.strokeStyle = "blue";
            ctxM.lineWidth = 3;
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costPillow * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costPillow * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "purple";
            ctxM.beginPath();           
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costTeddy * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costTeddy * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "green";
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costBlanket * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costBlanket * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "red";
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costScarf * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costScarf * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "yellow";
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costSocks * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costSocks * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "white";
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costFertilizer * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costFertilizer * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
            ctxM.strokeStyle = "black";
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * Market.canvasScaleFactor, - Market.lastPrice.costPesticides * Market.canvasScaleFactor);
            ctxM.lineTo(time * Market.canvasScaleFactor, - Market.price.costPesticides * Market.canvasScaleFactor);
            ctxM.stroke();
            ctxM.closePath();
        }
    }
}