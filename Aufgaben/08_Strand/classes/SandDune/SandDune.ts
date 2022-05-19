namespace strand {
    export class SandDune {
        static draw(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
            ctx.translate(_mox, _moy);
            ctx.rotate(_mor);
            ctx.scale(_mosX, _mosY);
            path = new Path2D;
            path.moveTo(0, 0);
            path.bezierCurveTo(100, 100, 200, -100, 300, 0);
            path.lineTo(300, -100);
            path.lineTo(0, -100);
            ctx.fillStyle = _color;
            ctx.fill(path);
    
            reset();
        }
    }
}