var strand;
(function (strand) {
    class SurfBoard {
        mox;
        moy;
        mor;
        mosX;
        mosY;
        constructor(_mox, _moy, _mor, _mosX, _mosY) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
        }
        move() {
            this.mox = 200 + Math.sin(strand.i / 80) * 300;
            this.moy = -150 + 150 * Math.sin(strand.i / 40) * 0.6;
            this.mor = Math.sin(strand.i / 40) * 0.2 - 1.6;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            strand.path = new Path2D;
            strand.path.moveTo(0, 100);
            strand.path.bezierCurveTo(50, 50, 25, -50, 25, -50);
            strand.path.lineTo(-25, -50);
            strand.path.bezierCurveTo(-50, 50, 0, 100, 0, 100);
            strand.ctx.fillStyle = "#E1E6E6";
            strand.ctx.fill(strand.path);
            strand.reset();
        }
        interact(_x, _y) {
            //ich habe noch keine Interaktion
        }
    }
    strand.SurfBoard = SurfBoard;
})(strand || (strand = {}));
//# sourceMappingURL=SurfBoard.js.map