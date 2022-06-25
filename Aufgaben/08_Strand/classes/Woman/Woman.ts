namespace strand {

    enum ACTION {
        WAIT,
        WALKWATER,
        SWIM,
        WALKLAND,
        NOBURN,
        BURN
    }

    export class Woman extends BeachObject {

        bodyColor: string;
        shortsColor: string;
        hairColor: string;
        rat: number;
        rab: number;
        lat: number;
        lab: number;
        rlt: number;
        rlb: number;
        llt: number;
        llb: number;
        private action: ACTION = ACTION.WAIT;
        private ismoving: boolean = false;
        private setted: boolean = false;

        constructor(_mox: number, _moy: number, _mor?: number, _mosX?: number, _mosY?: number, _bodyColor?: string, _shortsColor?: string, _hairColor?: string, _rat?: number, _rab?: number, _lat?: number, _lab?: number, _rlt?: number, _rlb?: number, _llt?: number, _llb?: number) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.bodyColor = _bodyColor;
            this.shortsColor = _shortsColor;
            this.hairColor = _hairColor;
            this.rat = _rat;
            this.rab = _rab;
            this.lat = _lat;
            this.lab = _lab;
            this.rlt = _rlt;
            this.rlb = _rlb;
            this.llt = _llt;
            this.llb = _llb;
        }
        

        move(): void {
            if (this.hairColor == "firebrick") {
                this.mox = 200 + Math.sin(i / 80) * 300;
                this.moy = -70 + 150 * Math.sin(i / 40) * 0.6;
                this.mor = Math.sin(i / 40) * 0.2;

                switch (this.action) {
                    case ACTION.NOBURN:
                        this.bodyColor = "#FFD2D7";
                        break;
                    case ACTION.BURN:
                        this.bodyColor = "#FF6050";
                        break;
                }

            }

            if (this.hairColor == "#FABE0F") {
                this.mox = -300 + Math.sin(i / 40) * 150;
                this.moy = -200 + 150 * Math.sin(i / 20) * -0.4;

                switch (this.action) {
                    case ACTION.NOBURN:
                        this.bodyColor = "#C87D5A";
                        break;
                    case ACTION.BURN:
                        this.bodyColor = "#FF5050";
                        break;
                }

            }

            if (this.hairColor == "#232323") {
                switch (this.action) {
                    case ACTION.WAIT:
                        this.moy = -400;
                        this.mox = -100;
                        this.rat = 1.6 + Math.sin(i / 30) * 0.5;
                        this.rab = 0.5 + Math.sin(i / 30) * 0.5;
                        break;

                    case ACTION.WALKWATER:
                        this.ismoving = true;
                        this.llt = Math.sin(i) * -0.2;
                        this.llb = Math.sin(i) * -0.2;
                        this.rlt = Math.sin(i) * 0.2;
                        this.rlb = Math.sin(i) * 0.2;
                        if (this.mox < 200) {
                            this.mox = this.mox + 2;
                        }
                        if (this.moy < -100) {
                            this.moy = this.moy + 1.5;
                        }
                        if (this.mosX > 0.4 && this.mosY > 0.4) {
                            this.mosX = this.mosX - 0.0015;
                            this.mosY = this.mosY - 0.0015;
                        }
                        else {
                            this.llt = 0;
                            this.llb = 0;
                            this.rlt = 0;
                            this.rlb = 0;
                            this.ismoving = false;
                        }
                        break;

                    case ACTION.WALKLAND:
                        this.ismoving = true;
                        this.llt = Math.sin(i) * -0.2;
                        this.llb = Math.sin(i) * -0.2;
                        this.rlt = Math.sin(i) * 0.2;
                        this.rlb = Math.sin(i) * 0.2;
                        this.mor = 0;
                        if (this.mox > -100) {
                            this.mox = this.mox - 2;
                        }
                        if (this.moy > -400) {
                            this.moy = this.moy - 1.5;
                        }
                        if (this.mosX < 0.7 && this.mosY < 0.7) {
                            this.mosX = this.mosX + 0.0015;
                            this.mosY = this.mosY + 0.0015;
                        }
                        else {
                            this.llt = 0;
                            this.llb = 0;
                            this.rlt = 0;
                            this.rlb = 0;
                            this.ismoving = false;
                        }
                        break;

                    case ACTION.SWIM:
                        this.mor = -1.6 + Math.sin(i / 10) * 0.2;
                        this.lat = -2 + Math.sin(i / 2) * -0.3;
                        this.lab = Math.sin(i / 2) * 0.3;
                        this.rat = 2 + Math.sin(i / 2) * 0.3;
                        this.rab = Math.sin(i / 2) * -0.3;
                        this.rlt = 0.3 + Math.sin(i / 2) * 0.3;
                        this.llt = -0.3 + Math.sin(i / 2) * 0.3;
                        break;
                }

            }

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
            drawBodyPart(55, 0, this.rlt, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, this.rlb, 0.9, 1.2, this.bodyColor, 80);
            //Right Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            ctx.restore();
            ctx.restore();
            ctx.restore();
            //Left Leg
            drawBodyPart(-35, 0, this.llt, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, this.llb, 0.9, 1.2, this.bodyColor, 80);
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


        interact(_x: number, _y: number): void {
            if (this.hairColor == "#FABE0F" && this.setted == false) {
                this.action = ACTION.NOBURN;
            }
            if (this.hairColor == "firebrick" && this.setted == false) {
                this.action = ACTION.NOBURN;
            }
            this.setted = true;
            if (this.ismoving == false) {
            let hitboxX: number = 90;
            let hitboxY: number = 600;
            const distanceX: number = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY: number = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (Math.abs(this.mor) > 1) {
                hitboxX = 600;
                hitboxY = 90;
            }
            if (distanceX < hitboxX * 1.5 * this.mosX && distanceY < hitboxY * 1.5 * this.mosY && picked == false) {
                if (this.action == ACTION.SWIM) {
                    this.action = ACTION.WALKLAND;
                }
                else if (this.action == ACTION.WALKWATER) {
                    this.action = ACTION.SWIM;
                }
                else if (this.action == ACTION.WALKLAND) {
                    this.action = ACTION.WAIT;
                }
                else if (this.action == ACTION.WAIT) {
                    this.action = ACTION.WALKWATER;
                }
                else if (this.action == ACTION.NOBURN) {
                    this.action = ACTION.BURN;
                }
                else if (this.action == ACTION.BURN) {
                    this.action = ACTION.NOBURN;
                }
                picked = true;
                console.log("Woman ", distanceX, distanceY);
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