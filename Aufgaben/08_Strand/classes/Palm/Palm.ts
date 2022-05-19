namespace strand {

    export class Palm {

        mox: number;
        moy: number;
        mor: number;
        mosX: number;
        mosY: number;
        color: string;
        color2: string;
        swingPalm: number;

        constructor(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string, _color2: string, _swingPalm: number) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
            this.color2 = _color2;
            this.swingPalm = _swingPalm;
        }

        draw(): void {
            ctx.translate(this.mox, this.moy);
            ctx.rotate(this.mor);
            ctx.scale(this.mosX, this.mosY);

            for (let woodPiecesAmount: number = 0; woodPiecesAmount < 14; woodPiecesAmount++) {
                let sizeWoodPiecesAmount: number = woodPiecesAmount * 40;

                //Woodpieces
                path = new Path2D;
                ctx.rotate(Math.sin(this.swingPalm / 50) * 0.01);
                path.moveTo(0, 0 + sizeWoodPiecesAmount);
                path.lineTo(20, -5 + sizeWoodPiecesAmount);
                path.lineTo(30, 40 + sizeWoodPiecesAmount);
                path.lineTo(0, 50 + sizeWoodPiecesAmount);
                path.lineTo(-30, 40 + sizeWoodPiecesAmount);
                path.lineTo(-20, -5 + sizeWoodPiecesAmount);
                ctx.fillStyle = this.color;
                ctx.fill(path);

            }
            ctx.translate(0, 400);
            ctx.scale(0.8, 0.8);
            for (let bigLeavesAmount: number = 0; bigLeavesAmount < 7; bigLeavesAmount++) {
                //Top-Leaves
                ctx.rotate(Math.sin(this.swingPalm / 50) * 0.01);
                for (let leavesAmount: number = 0; leavesAmount < 10; leavesAmount++) {
                    let sizeLeavesAmount: number = leavesAmount * 40;
                    let heightLeavesAmount: number = leavesAmount * 6;
                    path = new Path2D;
                    path.moveTo(0, 0);
                    path.quadraticCurveTo(-50 + sizeLeavesAmount, 50 - heightLeavesAmount, 50 + sizeLeavesAmount, 100 - heightLeavesAmount);
                    path.quadraticCurveTo(-20 + sizeLeavesAmount, 50 - heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                    ctx.fillStyle = this.color2;
                    ctx.fill(path);
                }
                //Bottom-Leaves
                for (let leavesAmount: number = 0; leavesAmount < 10; leavesAmount++) {
                    let sizeLeavesAmount: number = leavesAmount * 40;
                    let heightLeavesAmount: number = leavesAmount * 6;
                    path = new Path2D;
                    path.moveTo(0, 0);
                    path.quadraticCurveTo(-50 + sizeLeavesAmount, -50 + heightLeavesAmount, 50 + sizeLeavesAmount, -100 + heightLeavesAmount);
                    path.quadraticCurveTo(-20 + sizeLeavesAmount, -50 + heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                    ctx.fill(path);
                }
                ctx.rotate(0.5);
            }

            reset();
        }
    }
}