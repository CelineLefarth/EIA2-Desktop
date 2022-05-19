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
    }
    strand.SurfBoard = SurfBoard;
})(strand || (strand = {}));
//# sourceMappingURL=SurfBoard.js.map