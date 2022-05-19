var strand;
(function (strand) {
    class Sun {
        static draw(_mox, _moy, _mor, _mosX, _mosY, _color) {
            strand.ctx.translate(_mox, _moy);
            strand.ctx.rotate(_mor);
            strand.ctx.scale(_mosX, _mosY);
            let crabSun = new strand.Crab(0, 0, 3.1 + Math.sin(strand.i / 100) * strand.sunRotation, 2, 2, _color, _color, 2);
            crabSun.draw();
            strand.reset();
        }
    }
    strand.Sun = Sun;
})(strand || (strand = {}));
//# sourceMappingURL=Sun.js.map