namespace GGSim {

    export interface Price {
        type: string;
        amount: number;
        cost: number;
    }

    let schub: number = 0;

    export class Market {
        static price: Price = {type: "all", amount: 1, cost: 1};
        static lastPrice: number = 0;
        static lastTime: number = 0;
        fluctuation: number[];


        static draw(): void {
            ctxM.resetTransform();
            if (time % 20 === 0 || time == 0) {
                ctxM.clearRect(0, 0, canvasM.width, canvasM.height);
                schub = schub - 200;
                ctxM.lineCap = "square";
                ctxM.strokeStyle = "black";
                ctxM.beginPath();
                ctxM.moveTo(0, 125);
                ctxM.lineTo(400, 125);
                ctxM.moveTo(0, 75);
                ctxM.lineTo(400, 75);
                ctxM.moveTo(0, 25);
                ctxM.lineTo(400, 25);
                ctxM.stroke();
                ctxM.closePath();
            }
            ctxM.lineCap = "round";
            ctxM.translate(200 + schub, 75);
            ctxM.strokeStyle = "white";
            ctxM.lineWidth = 2;
            ctxM.beginPath();
            ctxM.moveTo(this.lastTime * 10, - Market.lastPrice * 10);
            ctxM.lineTo(time * 10, - Market.price.cost * 10);
            ctxM.stroke();
            ctxM.closePath();
        }
    }
}