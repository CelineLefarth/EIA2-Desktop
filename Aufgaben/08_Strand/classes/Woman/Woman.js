var strand;
(function (strand) {
    class Woman {
        mox;
        moy;
        mor;
        mosX;
        mosY;
        bodyColor;
        shortsColor;
        hairColor;
        rat;
        rab;
        lat;
        lab;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _bodyColor, _shortsColor, _hairColor, _rat, _rab, _lat, _lab) {
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
            drawBodyPart(55, 0, 0, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, 0, 0.9, 1.2, this.bodyColor, 80);
            //Right Foot
            drawBodyPart(0, -200, 1.2, 0.5, 0.5, this.bodyColor, 80);
            strand.ctx.restore();
            strand.ctx.restore();
            strand.ctx.restore();
            //Left Leg
            drawBodyPart(-35, 0, 0, 1, 1, this.bodyColor, 80);
            drawBodyPart(0, -170, 0, 0.9, 1.2, this.bodyColor, 80);
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
        interact(_x, _y, _type) {
            const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 90 && distanceY < 400) {
                if (_type == "Walker") {
                    strand.walkerWomanColor = "#FF5550";
                    strand.womanWalk = true;
                    strand.picked = true;
                    console.log("Woman " + _type, distanceX, distanceY);
                }
                else if (_type == "Swimmer" && distanceY < 120 && distanceX < 70) {
                    strand.swimmerWomanColor = "#FF7072";
                    strand.womanSwim = true;
                    strand.picked = true;
                    console.log("Woman " + _type, distanceX, distanceY);
                }
                else if (_type == "Surfer" && distanceY < 120 && distanceX < 100) {
                    strand.surferWomanColor = "#FF8082";
                    strand.womanSurf = true;
                    strand.picked = true;
                    console.log("Woman " + _type, distanceX, distanceY);
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