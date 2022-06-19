var strand;
(function (strand) {
    class Sun extends strand.BeachObject {
        color;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }
        move() {
            this.mox = -700 - strand.i;
            this.moy = -400 * Math.sin(strand.i / 400);
            this.mosX = 1 * Math.sin(strand.i / 500);
            this.mosY = 1 * Math.sin(strand.i / 500);
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            let crabSun = new strand.Crab(0, 0, 3.1 + Math.sin(strand.i / 100) * strand.sunRotation, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            strand.reset();
        }
        interact(_x, _y) {
            //habe ich warum auch immer in der Crabben Klasse lul
        }
    }
    strand.Sun = Sun;
})(strand || (strand = {}));
//# sourceMappingURL=Sun.js.map