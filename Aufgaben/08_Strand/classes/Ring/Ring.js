var strand;
(function (strand) {
    class Ring {
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
            strand.ctx.strokeStyle = "#64508C";
            strand.ctx.lineCap = "round";
            strand.ctx.lineWidth = 100;
            strand.ctx.beginPath();
            strand.ctx.moveTo(-100, 0);
            strand.ctx.lineTo(100, 0);
            strand.ctx.stroke();
            strand.reset();
        }
    }
    strand.Ring = Ring;
})(strand || (strand = {}));
//# sourceMappingURL=Ring.js.map