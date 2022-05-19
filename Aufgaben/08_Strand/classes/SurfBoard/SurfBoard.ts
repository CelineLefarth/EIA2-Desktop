namespace strand {
    export class SurfBoard {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
        }

        draw(): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            path = new Path2D;
            path.moveTo(0, 100);
            path.bezierCurveTo(50, 50, 25, -50, 25, -50);
            path.lineTo(-25, -50);
            path.bezierCurveTo(-50, 50, 0, 100, 0, 100);
    
            ctx.fillStyle = "#E1E6E6";
            ctx.fill(path);
    
            reset();
        }  
    }
}