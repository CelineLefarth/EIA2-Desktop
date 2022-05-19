var strand;
(function (strand) {
    class SandDune {
        static draw(_mox, _moy, _mor, _mosX, _mosY, _color) {
            strand.ctx.translate(_mox, _moy);
            strand.ctx.rotate(_mor);
            strand.ctx.scale(_mosX, _mosY);
            strand.path = new Path2D;
            strand.path.moveTo(0, 0);
            strand.path.bezierCurveTo(100, 100, 200, -100, 300, 0);
            strand.path.lineTo(300, -100);
            strand.path.lineTo(0, -100);
            strand.ctx.fillStyle = _color;
            strand.ctx.fill(strand.path);
            strand.reset();
        }
    }
    strand.SandDune = SandDune;
})(strand || (strand = {}));
//# sourceMappingURL=SandDune.js.map