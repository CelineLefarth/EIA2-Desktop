namespace strand {
    export class Towel {

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
            //Main Towel Color
            path = new Path2D;
            path.moveTo(-100, -55);
            path.quadraticCurveTo(50, 0, 200, 0);    //long
            path.lineTo(100, 50);
            path.quadraticCurveTo(-50, 25, -100, 25);   //long
            ctx.fillStyle = this.color;
            ctx.fill(path);
    
    
            reset();
        }
    }
}