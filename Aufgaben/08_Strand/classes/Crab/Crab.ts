namespace strand {

    export let redCrabSpeed: number = 80;
    export let greenCrabSpeed: number = 80;
    export let sunRotation: number = 1;
    let hitboxClickedGreenCrab: boolean = false;
    let hitboxClickedRedCrab: boolean = false;
    let hitboxClickedSunCrab: boolean = false;

    export class Crab {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        color: string;
        color2: string;
        crabShake: number;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _color?: string, _color2?: string, _crabShake?: number) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
            this.color2 = _color2;
            this.crabShake = _crabShake;
        }

        
        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            ctx.lineCap = "round";
            ctx.strokeStyle = this.color;
            ctx.save();
            ctx.rotate(-0.05 * Math.sin(this.crabShake));
            //Right Legs
            for (let legAmount: number = 0; legAmount < 3; legAmount++) {
                let sizeLegAmount: number = legAmount * 30;
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(70, 50 - sizeLegAmount);
                ctx.lineTo(100, 0 - sizeLegAmount);
                ctx.stroke();
            }
            //Left Legs
            for (let legAmount: number = 0; legAmount < 3; legAmount++) {
                let sizeLegAmount: number = legAmount * 30;
                ctx.lineWidth = 10;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-70, 50 - sizeLegAmount);
                ctx.lineTo(-100, 0 - sizeLegAmount);
                ctx.stroke();
            }


            //Shears
            ctx.restore();
            ctx.rotate(0.7 * Math.sin(this.crabShake / 50));
            path = new Path2D;
            path.moveTo(-75, 80);
            path.quadraticCurveTo(-120, 115, -75, 150);
            ctx.fillStyle = this.color2;
            ctx.fill(path);
            path = new Path2D;
            path.moveTo(75, 80);
            path.quadraticCurveTo(120, 115, 75, 150);
            ctx.fill(path);
            ctx.save();
            ctx.translate(-140, 0);
            path = new Path2D;
            path.moveTo(75, 80);
            path.quadraticCurveTo(120, 115, 75, 150);
            ctx.fill(path);
            path.moveTo(-75 + 280, 80);
            path.quadraticCurveTo(-120 + 280, 115, -75 + 280, 150);
            ctx.fill(path);

            ctx.restore();

            //Left Arm
            ctx.strokeStyle = this.color2;
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.moveTo(-10, -10);
            ctx.lineTo(-80, 20);
            ctx.lineTo(-70, 80);
            ctx.stroke();

            //Right Arm
            ctx.beginPath();
            ctx.moveTo(10, -10);
            ctx.lineTo(80, 20);
            ctx.lineTo(70, 80);
            ctx.stroke();

            //Crab Body
            ctx.lineCap = "round";
            ctx.lineWidth = 100;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 0);
            ctx.stroke();

            //Crab Eyes
            drawEyes(1, 1);



            reset();
        }

        interact(_x: number, _y: number, _type: string): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 100 && distanceY < 100) {
            if (_type == "green" && hitboxClickedGreenCrab == false && picked == false) {
            console.log("Crabby " + _type, distanceX, distanceY);
            greenCrabSpeed = 190;
            hitboxClickedGreenCrab = true;
            picked = true;
            }
            else if (_type == "red" && hitboxClickedRedCrab == false && picked == false) {
                console.log("Crabby " + _type, distanceX, distanceY);
                redCrabSpeed = 150;
                hitboxClickedRedCrab = true;
                picked = true;
            }
            else if (_type == "sun" && hitboxClickedSunCrab == false && picked == false) {
                sunRotation = 50;
                hitboxClickedSunCrab = true;
                picked = true;
            }
            }
        }

    }
    function drawEyes(_osX: number, _osY: number): void {
        ctx.save();
        ctx.scale(_osX, _osY);
        for (let crabEyes: number = 0; crabEyes < 4; crabEyes++) {
            if (crabEyes < 3) {
                ctx.strokeStyle = "#E1E6E6";
                ctx.lineWidth = 30;
            }
            else {
                ctx.strokeStyle = "#232323";
                ctx.lineWidth = 20;
            }
            ctx.beginPath();
            ctx.moveTo(20, -20);
            ctx.lineTo(20, -20);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-20, -20);
            ctx.lineTo(-20, -20);
            ctx.stroke();
        }
        ctx.restore();
    }
    
}