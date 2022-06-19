namespace strand {
    export class Sun extends BeachObject {

        color: string;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }

        move(): void {
            this.mox = -700 - i;
            this.moy = -400 * Math.sin(i / 400);
            this.mosX = 1 * Math.sin(i / 500);
            this.mosY = 1 * Math.sin(i / 500);
        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);
            let crabSun: Crab = new Crab(0, 0, 3.1 + Math.sin(i / 100) * sunRotation, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            reset();
        }

        interact(_x: number, _y: number): void {
            //habe ich warum auch immer in der Crabben Klasse lul
        }

    }
}