var strand;
(function (strand) {
    class Towel {
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
            //Main Towel Color
            strand.path = new Path2D;
            strand.path.moveTo(-100, -55);
            strand.path.quadraticCurveTo(50, 0, 200, 0); //long
            strand.path.lineTo(100, 50);
            strand.path.quadraticCurveTo(-50, 25, -100, 25); //long
            strand.ctx.fillStyle = this.color;
            strand.ctx.fill(strand.path);
            strand.reset();
        }
    }
    strand.Towel = Towel;
})(strand || (strand = {}));
//# sourceMappingURL=Towel.js.map