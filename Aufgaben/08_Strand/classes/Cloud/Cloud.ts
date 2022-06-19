namespace strand {

    export let color: string = "#F5F5FF";
    let hitboxClickedCloudOne: boolean = false;
    let hitboxClickedCloudTwo: boolean = false;
    let hitboxClickedCloudThree: boolean = false;

    export class Cloud extends BeachObject {

        mmox: number;
        color: string;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _color?: string) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.mmox = _mox;
            this.color = _color;
        }

        move(): void {
            this.mox = this.mmox + -50 * Math.sin(i / 100);
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

        interact(_x: number, _y: number): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 250 && distanceY < 150) {
            if (hitboxClickedCloudOne == false && picked == false) {
                hitboxClickedCloudOne = true;
                picked = true;
                console.log("Cloud", distanceX, distanceY);
                this.color = "#333";
            }
            else if (distanceY < 100 && distanceX < 70 && hitboxClickedCloudTwo == false && picked == false) {
                hitboxClickedCloudTwo = true;
                picked = true;
                console.log("Cloud ", distanceX, distanceY);
                this.color = "#444";
            }
            else if (distanceY < 100 && distanceX < 70 && hitboxClickedCloudThree == false && picked == false) {
                hitboxClickedCloudThree = true;
                picked = true;
                console.log("Cloud ", distanceX, distanceY);
                this.color = "#555";
            }
            }
        }
    }
}