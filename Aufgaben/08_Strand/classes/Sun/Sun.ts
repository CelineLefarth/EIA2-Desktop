namespace strand {
    export class Sun {
        static draw(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
            ctx.translate(_mox, _moy);
            ctx.rotate(_mor);
            ctx.scale(_mosX, _mosY);
            let crabSun: Crab = new Crab(0, 0, 3.1 + Math.sin(i / 100) * sunRotation, 2, 2, _color, _color, 2);
            crabSun.draw();
            reset();
        }
    }
}