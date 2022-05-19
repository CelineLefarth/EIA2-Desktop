var strand;
(function (strand) {
    class Waves {
        static draw(_waveSpeed) {
            strand.ctx.resetTransform();
            strand.ctx.fillStyle = "#007DA5";
            strand.ctx.fillRect(0, strand.ch / 2, strand.cw, (strand.ch / 2) - 800);
            strand.ctx.translate(strand.cw / 2, strand.ch / 2);
            strand.ctx.scale(1, -1);
            let color;
            color = "rgba(0,0,105,0.3)";
            drawWaterWaves(-0, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color); //Wave1
            drawWaterWaves(-600, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color); //Wave1
            drawWaterWaves(300 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color); //Wave2
            drawWaterWaves(-300 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color); //Wave2
            drawWaterWaves(-900 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color); //Wave2
            drawWaterWaves(200 - 90, -50, 0, 2, 0.5 * Math.cos(_waveSpeed / 50), color); //Wave3
            drawWaterWaves(-400 - 90, -50, 0, 2, 0.5 * Math.cos(_waveSpeed / 50), color); //Wave3
            drawWaterWaves(-50, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color); //Wave4
            drawWaterWaves(-650, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color); //Wave4
            drawWaterWaves(350 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color); //Wave5
            drawWaterWaves(-250 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color); //Wave5
            drawWaterWaves(-850 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color); //Wave5
            drawWaterWaves(250 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color); //Wave6
            drawWaterWaves(-350 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color); //Wave6
            drawWaterWaves(-950 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color); //Wave6
        }
    }
    strand.Waves = Waves;
    function drawWaterWaves(_mox, _moy, _mor, _mosX, _mosY, _color) {
        strand.ctx.translate(_mox, _moy);
        strand.ctx.rotate(_mor);
        strand.ctx.scale(_mosX, _mosY);
        strand.path = new Path2D;
        strand.path.moveTo(0, 0);
        strand.path.bezierCurveTo(100, 100, 200, -100, 300, 0);
        strand.path.lineTo(300, 200);
        strand.path.bezierCurveTo(200, -200, 100, 200, 0, 200);
        strand.path.lineTo(0, 0);
        strand.ctx.fillStyle = _color;
        strand.ctx.fill(strand.path);
        strand.reset();
    }
})(strand || (strand = {}));
//# sourceMappingURL=Waves.js.map