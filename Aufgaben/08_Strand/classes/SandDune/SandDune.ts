namespace strand {
    export class SandDune extends BeachObject {

        color: string;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }

        move(): void {
            //I dont
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

        interact(_x: number, _y: number): void {
        //ich habe noch keine Interaktion
        }
    }
}