var strand;
(function (strand) {
    class Ring extends strand.BeachObject {
        constructor(_mox, _moy, _mor, _mosX, _mosY) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
        }
        move() {
            this.mox = -300 + Math.sin(strand.i / 40) * 150;
            this.moy = -230 + 150 * Math.sin(strand.i / 20) * -0.4;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            strand.ctx.strokeStyle = "#64508C";
            strand.ctx.lineCap = "round";
            strand.ctx.lineWidth = 100;
            strand.ctx.beginPath();
            strand.ctx.moveTo(-100, 0);
            strand.ctx.lineTo(100, 0);
            strand.ctx.stroke();
            strand.reset();
        }
        interact(_x, _y) {
            //ich habe noch keine Interaktion
        }
    }
    strand.Ring = Ring;
})(strand || (strand = {}));
//# sourceMappingURL=Ring.js.map