var strand;
(function (strand) {
    class Background {
        static draw() {
            let redness = (Math.sin((300 + strand.i) / 200) * 0.9);
            strand.ctx.fillStyle = "rgba(" + redness * 200 + ",50," + redness * -200 + "," + redness + ")";
            strand.ctx.fillRect(0, 0, strand.cw, strand.ch);
            strand.ctx.fillStyle = "#007DA5";
            strand.ctx.fillRect(0, strand.ch / 2, strand.cw, strand.ch);
            strand.ctx.fillStyle = "#F5D78C";
            strand.ctx.fillRect(0, strand.ch / 1.5, strand.cw, strand.ch);
            strand.ctx.resetTransform();
        }
    }
    strand.Background = Background;
})(strand || (strand = {}));
//# sourceMappingURL=Background.js.map