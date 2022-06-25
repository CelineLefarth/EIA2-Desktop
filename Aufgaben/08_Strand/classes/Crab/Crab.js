var strand;
(function (strand) {
    class Crab extends strand.BeachObject {
        speed;
        mmox;
        color;
        color2;
        crabShake;
        type;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color, _color2, _crabShake, _type, _speed) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.mmox = _mox;
            this.color = _color;
            this.color2 = _color2;
            this.crabShake = _crabShake;
            this.type = _type;
            this.speed = _speed;
        }
        move() {
            this.mox = this.mmox + Math.cos(strand.i / 10) * this.speed;
            this.crabShake = strand.i;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            strand.ctx.lineCap = "round";
            strand.ctx.strokeStyle = this.color;
            strand.ctx.save();
            strand.ctx.rotate(-0.05 * Math.sin(this.crabShake));
            //Right Legs
            for (let legAmount = 0; legAmount < 3; legAmount++) {
                let sizeLegAmount = legAmount * 30;
                strand.ctx.lineWidth = 10;
                strand.ctx.beginPath();
                strand.ctx.moveTo(0, 0);
                strand.ctx.lineTo(70, 50 - sizeLegAmount);
                strand.ctx.lineTo(100, 0 - sizeLegAmount);
                strand.ctx.stroke();
            }
            //Left Legs
            for (let legAmount = 0; legAmount < 3; legAmount++) {
                let sizeLegAmount = legAmount * 30;
                strand.ctx.lineWidth = 10;
                strand.ctx.beginPath();
                strand.ctx.moveTo(0, 0);
                strand.ctx.lineTo(-70, 50 - sizeLegAmount);
                strand.ctx.lineTo(-100, 0 - sizeLegAmount);
                strand.ctx.stroke();
            }
            //Shears
            strand.ctx.restore();
            strand.ctx.rotate(0.7 * Math.sin(this.crabShake / 50));
            strand.path = new Path2D;
            strand.path.moveTo(-75, 80);
            strand.path.quadraticCurveTo(-120, 115, -75, 150);
            strand.ctx.fillStyle = this.color2;
            strand.ctx.fill(strand.path);
            strand.path = new Path2D;
            strand.path.moveTo(75, 80);
            strand.path.quadraticCurveTo(120, 115, 75, 150);
            strand.ctx.fill(strand.path);
            strand.ctx.save();
            strand.ctx.translate(-140, 0);
            strand.path = new Path2D;
            strand.path.moveTo(75, 80);
            strand.path.quadraticCurveTo(120, 115, 75, 150);
            strand.ctx.fill(strand.path);
            strand.path.moveTo(-75 + 280, 80);
            strand.path.quadraticCurveTo(-120 + 280, 115, -75 + 280, 150);
            strand.ctx.fill(strand.path);
            strand.ctx.restore();
            //Left Arm
            strand.ctx.strokeStyle = this.color2;
            strand.ctx.lineWidth = 20;
            strand.ctx.beginPath();
            strand.ctx.moveTo(-10, -10);
            strand.ctx.lineTo(-80, 20);
            strand.ctx.lineTo(-70, 80);
            strand.ctx.stroke();
            //Right Arm
            strand.ctx.beginPath();
            strand.ctx.moveTo(10, -10);
            strand.ctx.lineTo(80, 20);
            strand.ctx.lineTo(70, 80);
            strand.ctx.stroke();
            //Crab Body
            strand.ctx.lineCap = "round";
            strand.ctx.lineWidth = 100;
            strand.ctx.strokeStyle = this.color;
            strand.ctx.beginPath();
            strand.ctx.moveTo(0, 0);
            strand.ctx.lineTo(0, 0);
            strand.ctx.stroke();
            //Crab Eyes
            drawEyes(1, 1);
            strand.reset();
        }
        interact(_x, _y) {
            const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 100 && distanceY < 100 && strand.picked == false) {
                console.log("Crabby ", distanceX, distanceY);
                this.speed = this.speed + 200;
                strand.picked = true;
            }
        }
    }
    strand.Crab = Crab;
    function drawEyes(_osX, _osY) {
        strand.ctx.save();
        strand.ctx.scale(_osX, _osY);
        for (let crabEyes = 0; crabEyes < 4; crabEyes++) {
            if (crabEyes < 3) {
                strand.ctx.strokeStyle = "#E1E6E6";
                strand.ctx.lineWidth = 30;
            }
            else {
                strand.ctx.strokeStyle = "#232323";
                strand.ctx.lineWidth = 20;
            }
            strand.ctx.beginPath();
            strand.ctx.moveTo(20, -20);
            strand.ctx.lineTo(20, -20);
            strand.ctx.stroke();
            strand.ctx.beginPath();
            strand.ctx.moveTo(-20, -20);
            strand.ctx.lineTo(-20, -20);
            strand.ctx.stroke();
        }
        strand.ctx.restore();
    }
})(strand || (strand = {}));
//# sourceMappingURL=Crab.js.map