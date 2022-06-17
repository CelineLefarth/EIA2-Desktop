namespace strand {
    export class SandDune {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        color: string;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            path = new Path2D;
            path.moveTo(0, 0);
            path.bezierCurveTo(100, 100, 200, -100, 300, 0);
            path.lineTo(300, -100);
            path.lineTo(0, -100);
            ctx.fillStyle = this.color;
            ctx.fill(path);
    
            reset();
        }
    }
}