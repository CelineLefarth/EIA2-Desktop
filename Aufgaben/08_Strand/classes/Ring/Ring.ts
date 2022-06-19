namespace strand {
    export class Ring extends BeachObject {

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
        }

        move(): void {
            this.mox = -300 + Math.sin(i / 40) * 150;
            this.moy = -230 + 150 * Math.sin(i / 20) * -0.4;
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

        interact(_x: number, _y: number): void {
        //ich habe noch keine Interaktion
        }
    }
}