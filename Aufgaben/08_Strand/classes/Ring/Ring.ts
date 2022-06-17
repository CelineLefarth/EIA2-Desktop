namespace strand {
    export class Ring {
        
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
    
            ctx.strokeStyle = "#64508C";
            ctx.lineCap = "round";
            ctx.lineWidth = 100;
    
            ctx.beginPath();
            ctx.moveTo(-100, 0);
            ctx.lineTo(100, 0);
            ctx.stroke();
    
            reset();
        }
    }
}