var strand;
(function (strand) {
    class Towel extends strand.BeachObject {
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
        interact(_x, _y) {
            //mit mir kann man noch nicht interacten
        }
    }
    strand.Towel = Towel;
})(strand || (strand = {}));
//# sourceMappingURL=Towel.js.map