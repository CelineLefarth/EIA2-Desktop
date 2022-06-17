var strand;
(function (strand) {
    class SandDune {
        mox;
        moy;
        mor;
        mosX;
        mosY;
        color;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            strand.path = new Path2D;
            strand.path.moveTo(0, 0);
            strand.path.bezierCurveTo(100, 100, 200, -100, 300, 0);
            strand.path.lineTo(300, -100);
            strand.path.lineTo(0, -100);
            strand.ctx.fillStyle = this.color;
            strand.ctx.fill(strand.path);
            strand.reset();
        }
    }
    strand.SandDune = SandDune;
})(strand || (strand = {}));
//# sourceMappingURL=SandDune.js.map