namespace strand {
    export class Sun {

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
            let crabSun: Crab = new Crab(0, 0, 3.1 + Math.sin(i / 100) * sunRotation, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            reset();
        }
    }
}