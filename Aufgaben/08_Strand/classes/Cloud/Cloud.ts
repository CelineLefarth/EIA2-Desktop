namespace strand {

    export class Cloud {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        color: string;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _color?: string) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);

            ctx.strokeStyle = this.color;
            ctx.lineCap = "round";
            ctx.lineWidth = 150;

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 0);
            ctx.stroke();
            ctx.lineWidth = 200;
            ctx.beginPath();
            ctx.moveTo(100 + 100 * Math.sin(i / 50) * 0.2, 100);
            ctx.lineTo(100 + 100 * Math.sin(i / 50) * 0.3, 100);
            ctx.stroke();
            ctx.lineWidth = 100;
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.lineTo(100, 0);
            ctx.stroke();
            ctx.lineWidth = 100;
            ctx.beginPath();
            ctx.moveTo(-70, 100 * Math.sin(i / 50) * 0.3);
            ctx.lineTo(-70, 100 * Math.sin(i / 50) * 0.2);
            ctx.stroke();
            ctx.lineWidth = 120;
            ctx.beginPath();
            ctx.moveTo(-10 * Math.sin(i / 50) * 0.3, 100);
            ctx.lineTo(-10 * Math.sin(i / 50) * 0.2, 100);
            ctx.stroke();
            ctx.lineWidth = 150;
            ctx.beginPath();
            ctx.moveTo(200, 50 * Math.sin(i / 50) * 0.3);
            ctx.lineTo(200, 50 * Math.sin(i / 50) * 0.3);
            ctx.stroke();


            reset();
        }

        click(_x: number, _y: number, _type: string): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 250 && distanceY < 150) {
            if (_type == "one") {
                cloudOne = true;
                picked = true;
                console.log("Cloud " + _type, distanceX, distanceY);
                cloudColor1 = "#333";
            }
            else if (_type == "two" && distanceY < 100 && distanceX < 70) {
                cloudTwo = true;
                picked = true;
                console.log("Cloud " + _type, distanceX, distanceY);
                cloudColor2 = "#444";
            }
            else if (_type == "three" && distanceY < 100 && distanceX < 70) {
                cloudThree = true;
                picked = true;
                console.log("Cloud " + _type, distanceX, distanceY);
                cloudColor3 = "#555";
            }
            }
        }
    }
}