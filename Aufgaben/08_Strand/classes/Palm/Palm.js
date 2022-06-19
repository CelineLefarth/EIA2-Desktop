var strand;
(function (strand) {
    class Palm extends strand.BeachObject {
        mmosX;
        mmosY;
        color;
        color2;
        swingPalm;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color, _color2, _swingPalm) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.mmosX = _mosX;
            this.mmosY = _mosY;
            this.color = _color;
            this.color2 = _color2;
            this.swingPalm = _swingPalm;
        }
        move() {
            this.mosX = this.mmosX + Math.sin(strand.i / 50) * 0.2;
            this.mosY = this.mmosY + Math.sin(strand.i / 50) * 0.2;
            this.swingPalm = strand.i;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            for (let woodPiecesAmount = 0; woodPiecesAmount < 14; woodPiecesAmount++) {
                let sizeWoodPiecesAmount = woodPiecesAmount * 40;
                //Woodpieces
                strand.path = new Path2D;
                strand.ctx.rotate(Math.sin(this.swingPalm / 50) * 0.01);
                strand.path.moveTo(0, 0 + sizeWoodPiecesAmount);
                strand.path.lineTo(20, -5 + sizeWoodPiecesAmount);
                strand.path.lineTo(30, 40 + sizeWoodPiecesAmount);
                strand.path.lineTo(0, 50 + sizeWoodPiecesAmount);
                strand.path.lineTo(-30, 40 + sizeWoodPiecesAmount);
                strand.path.lineTo(-20, -5 + sizeWoodPiecesAmount);
                strand.ctx.fillStyle = this.color;
                strand.ctx.fill(strand.path);
            }
            strand.ctx.translate(0, 400);
            strand.ctx.scale(0.8, 0.8);
            for (let bigLeavesAmount = 0; bigLeavesAmount < 7; bigLeavesAmount++) {
                //Top-Leaves
                strand.ctx.rotate(Math.sin(this.swingPalm / 50) * 0.01);
                for (let leavesAmount = 0; leavesAmount < 10; leavesAmount++) {
                    let sizeLeavesAmount = leavesAmount * 40;
                    let heightLeavesAmount = leavesAmount * 6;
                    strand.path = new Path2D;
                    strand.path.moveTo(0, 0);
                    strand.path.quadraticCurveTo(-50 + sizeLeavesAmount, 50 - heightLeavesAmount, 50 + sizeLeavesAmount, 100 - heightLeavesAmount);
                    strand.path.quadraticCurveTo(-20 + sizeLeavesAmount, 50 - heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                    strand.ctx.fillStyle = this.color2;
                    strand.ctx.fill(strand.path);
                }
                //Bottom-Leaves
                for (let leavesAmount = 0; leavesAmount < 10; leavesAmount++) {
                    let sizeLeavesAmount = leavesAmount * 40;
                    let heightLeavesAmount = leavesAmount * 6;
                    strand.path = new Path2D;
                    strand.path.moveTo(0, 0);
                    strand.path.quadraticCurveTo(-50 + sizeLeavesAmount, -50 + heightLeavesAmount, 50 + sizeLeavesAmount, -100 + heightLeavesAmount);
                    strand.path.quadraticCurveTo(-20 + sizeLeavesAmount, -50 + heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                    strand.ctx.fill(strand.path);
                }
                strand.ctx.rotate(0.5);
            }
            strand.reset();
        }
        interact(_x, _y) {
            //ich habe noch keine Interaktion
        }
    }
    strand.Palm = Palm;
})(strand || (strand = {}));
//# sourceMappingURL=Palm.js.map