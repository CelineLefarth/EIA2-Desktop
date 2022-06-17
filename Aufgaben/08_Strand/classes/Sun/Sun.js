var strand;
(function (strand) {
    class Sun {
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
            let crabSun = new strand.Crab(0, 0, 3.1 + Math.sin(strand.i / 100) * strand.sunRotation, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            strand.reset();
        }
    }
    strand.Sun = Sun;
})(strand || (strand = {}));
//# sourceMappingURL=Sun.js.map