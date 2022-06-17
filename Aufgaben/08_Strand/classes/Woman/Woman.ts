namespace strand {

    export let walkerWomanColor: string = "#FFAAA5";
    export let surferWomanColor: string = "#FFD2D7";
    export let swimmerWomanColor: string = "#C87D5A";
    let hitboxClickedWomanWalk: boolean = false;
    let hitboxClickedWomanSwim: boolean = false;
    let hitboxClickedWomanSurf: boolean = false;

    export class Woman {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        bodyColor: string;
        shortsColor: string;
        hairColor: string;
        rat: number;
        rab: number;
        lat: number;
        lab: number;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _bodyColor?: string, _shortsColor?: string, _hairColor?: string, _rat?: number, _rab?: number, _lat?: number, _lab?: number) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.bodyColor = _bodyColor;
            this.shortsColor = _shortsColor;
            this.hairColor = _hairColor;
            this.rat = _rat;
            this.rab = _rab;
            this.lat = _lat;
            this.lab = _lab;
        }

        draw(): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY) //rat = right arm top //lab = left arm bottom etc.
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);

            //Hair
            drawBodyPart(0, 570, 0, 3, 3, this.hairColor, 80);
            ctx.restore();

            //Head
            drawBodyPart(0, 570, 0, 1, 1, this.bodyColor, 200);
            ctx.restore();
            ctx.save();
            let crabFace: Crab = new Crab(0, 550, 0 + Math.sin(i / 100), 2, 2, this.bodyColor, this.bodyColor, 2);
            crabFace.draw();
            ctx.restore();

            //Arms
            //Left Arm
            drawBodyPart(-45, 370, this.lat, 0.9, 1.2, this.bodyColor, 80);
            drawBodyPart(0, -190, this.lab, 0.9 - 0.3, 1.2 - 0.5, this.bodyColor, 80);
            //Left Finger
            drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();

            ctx.restore();
            ctx.restore();

            //Right Arm
            drawBodyPart(70, 370, this.rat, 0.9, 1.2, this.bodyColor, 80);
            drawBodyPart(0, -190, this.rab, 0.9 - 0.3, 1.2 - 0.5, this.bodyColor, 80);
            //Right Finger
            drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();
            drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            ctx.restore();

            ctx.restore();
            ctx.restore();

            //Chest
            drawBodyPart(10, 390, 0, 2, 1, this.bodyColor, 80);
            drawBodyPart(0, -380, 3.14, 1, 1, this.bodyColor, 80);
            ctx.restore();
            ctx.restore();
            //Right Leg
            drawBodyPart(55, 0, 0, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, 0, 0.9, 1.2, this.bodyColor, 80);
            //Right Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            ctx.restore();
            ctx.restore();
            ctx.restore();
            //Left Leg
            drawBodyPart(-35, 0, 0, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, 0, 0.9, 1.2, this.bodyColor, 80);
            //Left Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            ctx.restore();
            ctx.restore();
            ctx.restore();
            //Pants
            path = new Path2D;
            path.moveTo(-80, 0);
            path.lineTo(-75, 20);
            path.lineTo(90, 20);
            path.lineTo(90, 20);
            path.lineTo(90, 0);
            path.quadraticCurveTo(-5, -35, 28, -70);
            path.lineTo(-10, -70);
            path.quadraticCurveTo(10, -20, -80, 0);

            ctx.strokeStyle = this.shortsColor;
            ctx.lineCap = "round";
            ctx.lineWidth = 80;
            //Bra
            ctx.beginPath();
            ctx.moveTo(50, 300);
            ctx.lineTo(50, 300);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-30, 300);
            ctx.lineTo(-30, 300);
            ctx.stroke();
            ctx.lineWidth = 50;
            ctx.beginPath();
            ctx.moveTo(10, 300);
            ctx.lineTo(10, 300);
            ctx.stroke();

            ctx.fillStyle = this.shortsColor;
            ctx.fill(path);

            reset();
        }
        

        interact(_x: number, _y: number, _type: string): void {

            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 90 && distanceY < 400) {
            if (_type == "Walker" && hitboxClickedWomanWalk == false) {
                walkerWomanColor = "#FF5550";
                hitboxClickedWomanWalk = true;
                picked = true;
                console.log("Woman " + _type, distanceX, distanceY);
            }
            else if (_type == "Swimmer" && distanceY < 120 && distanceX < 70 && hitboxClickedWomanSwim == false) {
                swimmerWomanColor = "#FF7072";
                hitboxClickedWomanSwim = true;
                picked = true;
                console.log("Woman " + _type, distanceX, distanceY);
            }
            else if (_type == "Surfer" && distanceY < 120 && distanceX < 100 && hitboxClickedWomanSurf == false) {
                surferWomanColor = "#FF8082";
                hitboxClickedWomanSurf = true;
                picked = true;
                console.log("Woman " + _type, distanceX, distanceY);
            }
            }
        }

    }
    function drawBodyPart(_ox: number, _oy: number, _or: number, _osX: number, _osY: number, _color: string, _thiccness: number): void {
        ctx.save();
        ctx.translate(_ox, _oy);
        ctx.rotate(_or);
        ctx.scale(_osX, _osY);
        ctx.strokeStyle = _color;
        ctx.lineCap = "round";
        ctx.lineWidth = _thiccness;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();

        path = new Path2D;
        path.moveTo(-40, 0);
        path.lineTo(40, 0);
        path.lineTo(20, -200);
        path.lineTo(-20, -200);
        ctx.fillStyle = _color;
        ctx.fill(path);
    }
    
}