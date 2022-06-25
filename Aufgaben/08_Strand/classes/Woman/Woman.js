var strand;
(function (strand) {
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["WAIT"] = 0] = "WAIT";
        ACTION[ACTION["WALKWATER"] = 1] = "WALKWATER";
        ACTION[ACTION["SWIM"] = 2] = "SWIM";
        ACTION[ACTION["WALKLAND"] = 3] = "WALKLAND";
        ACTION[ACTION["NOBURN"] = 4] = "NOBURN";
        ACTION[ACTION["BURN"] = 5] = "BURN";
    })(ACTION || (ACTION = {}));
    class Woman extends strand.BeachObject {
        bodyColor;
        shortsColor;
        hairColor;
        rat;
        rab;
        lat;
        lab;
        rlt;
        rlb;
        llt;
        llb;
        action = ACTION.WAIT;
        ismoving = false;
        setted = false;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _bodyColor, _shortsColor, _hairColor, _rat, _rab, _lat, _lab, _rlt, _rlb, _llt, _llb) {
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
        move() {
            if (this.hairColor == "firebrick") {
                this.mox = 200 + Math.sin(strand.i / 80) * 300;
                this.moy = -70 + 150 * Math.sin(strand.i / 40) * 0.6;
                this.mor = Math.sin(strand.i / 40) * 0.2;
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
                this.mox = -300 + Math.sin(strand.i / 40) * 150;
                this.moy = -200 + 150 * Math.sin(strand.i / 20) * -0.4;
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
                        this.rat = 1.6 + Math.sin(strand.i / 30) * 0.5;
                        this.rab = 0.5 + Math.sin(strand.i / 30) * 0.5;
                        break;
                    case ACTION.WALKWATER:
                        this.ismoving = true;
                        this.llt = Math.sin(strand.i) * -0.2;
                        this.llb = Math.sin(strand.i) * -0.2;
                        this.rlt = Math.sin(strand.i) * 0.2;
                        this.rlb = Math.sin(strand.i) * 0.2;
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
                        this.llt = Math.sin(strand.i) * -0.2;
                        this.llb = Math.sin(strand.i) * -0.2;
                        this.rlt = Math.sin(strand.i) * 0.2;
                        this.rlb = Math.sin(strand.i) * 0.2;
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
                        this.mor = -1.6 + Math.sin(strand.i / 10) * 0.2;
                        this.lat = -2 + Math.sin(strand.i / 2) * -0.3;
                        this.lab = Math.sin(strand.i / 2) * 0.3;
                        this.rat = 2 + Math.sin(strand.i / 2) * 0.3;
                        this.rab = Math.sin(strand.i / 2) * -0.3;
                        this.rlt = 0.3 + Math.sin(strand.i / 2) * 0.3;
                        this.llt = -0.3 + Math.sin(strand.i / 2) * 0.3;
                        break;
                }
            }
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            //Hair
            drawBodyPart(0, 570, 0, 3, 3, this.hairColor, 80);
            strand.ctx.restore();
            //Head
            drawBodyPart(0, 570, 0, 1, 1, this.bodyColor, 200);
            strand.ctx.restore();
            strand.ctx.save();
            let crabFace = new strand.Crab(0, 550, 0 + Math.sin(strand.i / 100), 2, 2, this.bodyColor, this.bodyColor, 2);
            crabFace.draw();
            strand.ctx.restore();
            //Arms
            //Left Arm
            drawBodyPart(-45, 370, this.lat, 0.9, 1.2, this.bodyColor, 80);
            drawBodyPart(0, -190, this.lab, 0.9 - 0.3, 1.2 - 0.5, this.bodyColor, 80);
            //Left Finger
            drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            strand.ctx.restore();
            //Right Arm
            drawBodyPart(70, 370, this.rat, 0.9, 1.2, this.bodyColor, 80);
            drawBodyPart(0, -190, this.rab, 0.9 - 0.3, 1.2 - 0.5, this.bodyColor, 80);
            //Right Finger
            drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            strand.ctx.restore();
            //Chest
            drawBodyPart(10, 390, 0, 2, 1, this.bodyColor, 80);
            drawBodyPart(0, -380, 3.14, 1, 1, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            //Right Leg
            drawBodyPart(55, 0, this.rlt, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, this.rlb, 0.9, 1.2, this.bodyColor, 80);
            //Right Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            strand.ctx.restore();
            //Left Leg
            drawBodyPart(-35, 0, this.llt, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, this.llb, 0.9, 1.2, this.bodyColor, 80);
            //Left Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            strand.ctx.restore();
            //Pants
            strand.path = new Path2D;
            strand.path.moveTo(-80, 0);
            strand.path.lineTo(-75, 20);
            strand.path.lineTo(90, 20);
            strand.path.lineTo(90, 20);
            strand.path.lineTo(90, 0);
            strand.path.quadraticCurveTo(-5, -35, 28, -70);
            strand.path.lineTo(-10, -70);
            strand.path.quadraticCurveTo(10, -20, -80, 0);
            strand.ctx.strokeStyle = this.shortsColor;
            strand.ctx.lineCap = "round";
            strand.ctx.lineWidth = 80;
            //Bra
            strand.ctx.beginPath();
            strand.ctx.moveTo(50, 300);
            strand.ctx.lineTo(50, 300);
            strand.ctx.stroke();
            strand.ctx.beginPath();
            strand.ctx.moveTo(-30, 300);
            strand.ctx.lineTo(-30, 300);
            strand.ctx.stroke();
            strand.ctx.lineWidth = 50;
            strand.ctx.beginPath();
            strand.ctx.moveTo(10, 300);
            strand.ctx.lineTo(10, 300);
            strand.ctx.stroke();
            strand.ctx.fillStyle = this.shortsColor;
            strand.ctx.fill(strand.path);
            strand.reset();
        }
        interact(_x, _y) {
            if (this.hairColor == "#FABE0F" && this.setted == false) {
                this.action = ACTION.NOBURN;
            }
            if (this.hairColor == "firebrick" && this.setted == false) {
                this.action = ACTION.NOBURN;
            }
            this.setted = true;
            if (this.ismoving == false) {
                let hitboxX = 90;
                let hitboxY = 600;
                const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
                const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
                if (Math.abs(this.mor) > 1) {
                    hitboxX = 600;
                    hitboxY = 90;
                }
                if (distanceX < hitboxX * 1.5 * this.mosX && distanceY < hitboxY * 1.5 * this.mosY && strand.picked == false) {
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
                    strand.picked = true;
                    console.log("Woman ", distanceX, distanceY);
                }
            }
        }
    }
    strand.Woman = Woman;
    function drawBodyPart(_ox, _oy, _or, _osX, _osY, _color, _thiccness) {
        strand.ctx.save();
        strand.ctx.translate(_ox, _oy);
        strand.ctx.rotate(_or);
        strand.ctx.scale(_osX, _osY);
        strand.ctx.strokeStyle = _color;
        strand.ctx.lineCap = "round";
        strand.ctx.lineWidth = _thiccness;
        strand.ctx.beginPath();
        strand.ctx.moveTo(0, 0);
        strand.ctx.lineTo(0, 0);
        strand.ctx.stroke();
        strand.path = new Path2D;
        strand.path.moveTo(-40, 0);
        strand.path.lineTo(40, 0);
        strand.path.lineTo(20, -200);
        strand.path.lineTo(-20, -200);
        strand.ctx.fillStyle = _color;
        strand.ctx.fill(strand.path);
    }
})(strand || (strand = {}));
//# sourceMappingURL=Woman.js.map