namespace strand {
    export class Ring {
        static draw(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
            ctx.translate(_mox, _moy);
            ctx.rotate(_mor);
            ctx.scale(_mosX, _mosY);
    
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