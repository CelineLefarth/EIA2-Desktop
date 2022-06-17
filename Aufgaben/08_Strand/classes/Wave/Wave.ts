namespace strand {
    export class Wave {

         static draw(waveSpeed: number): void {
            ctx.resetTransform();
            ctx.fillStyle = "#007DA5";
            ctx.fillRect(0, ch / 2, cw, (ch / 2) - 800);
            ctx.translate(cw / 2, ch / 2);
            ctx.scale(1, -1);
            let color: string;
            color = "rgba(0,0,105,0.3)";
            drawWaterWaves(-0, -50, 0, 2, -0.5 * Math.cos(waveSpeed / 50), color);        //Wave1
            drawWaterWaves(-600, -50, 0, 2, -0.5 * Math.cos(waveSpeed / 50), color);      //Wave1
            drawWaterWaves(300 - 90, -50, 0, 2, -0.5 * Math.cos(waveSpeed / 50), color);   //Wave2
            drawWaterWaves(-300 - 90, -50, 0, 2, -0.5 * Math.cos(waveSpeed / 50), color);  //Wave2
            drawWaterWaves(-900 - 90, -50, 0, 2, -0.5 * Math.cos(waveSpeed / 50), color);  //Wave2
            drawWaterWaves(200 - 90, -50, 0, 2, 0.5 * Math.cos(waveSpeed / 50), color);    //Wave3
            drawWaterWaves(-400 - 90, -50, 0, 2, 0.5 * Math.cos(waveSpeed / 50), color);   //Wave3
            drawWaterWaves(-50, -50, 0, 2, -0.5 * Math.sin(waveSpeed / 50), color);       //Wave4
            drawWaterWaves(-650, -50, 0, 2, -0.5 * Math.sin(waveSpeed / 50), color);      //Wave4
            drawWaterWaves(350 - 90, -50, 0, 2, -0.5 * Math.sin(waveSpeed / 50), color);   //Wave5
            drawWaterWaves(-250 - 90, -50, 0, 2, -0.5 * Math.sin(waveSpeed / 50), color);  //Wave5
            drawWaterWaves(-850 - 90, -50, 0, 2, -0.5 * Math.sin(waveSpeed / 50), color);  //Wave5
            drawWaterWaves(250 - 90, -50, 0, 2, 0.5 * Math.sin(waveSpeed / 50), color);    //Wave6
            drawWaterWaves(-350 - 90, -50, 0, 2, 0.5 * Math.sin(waveSpeed / 50), color);   //Wave6
            drawWaterWaves(-950 - 90, -50, 0, 2, 0.5 * Math.sin(waveSpeed / 50), color);   //Wave6
        }
    }
    function drawWaterWaves(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        path = new Path2D;
        path.moveTo(0, 0);
        path.bezierCurveTo(100, 100, 200, -100, 300, 0);
        path.lineTo(300, 200);
        path.bezierCurveTo(200, -200, 100, 200, 0, 200);
        path.lineTo(0, 0);
        ctx.fillStyle = _color;
        ctx.fill(path);
    
        reset();
    }
}
