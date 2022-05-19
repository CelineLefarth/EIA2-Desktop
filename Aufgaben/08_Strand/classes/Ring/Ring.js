var strand;
(function (strand) {
    class Ring {
        static draw(_mox, _moy, _mor, _mosX, _mosY) {
            strand.ctx.translate(_mox, _moy);
            strand.ctx.rotate(_mor);
            strand.ctx.scale(_mosX, _mosY);
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