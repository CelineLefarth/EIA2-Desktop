var strand;
(function (strand) {
    class SandDune extends strand.BeachObject {
        color;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }
        move() {
            //I dont
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
        interact(_x, _y) {
            //ich habe noch keine Interaktion
        }
    }
    strand.SandDune = SandDune;
})(strand || (strand = {}));
//# sourceMappingURL=SandDune.js.map