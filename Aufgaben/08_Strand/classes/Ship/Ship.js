var strand;
(function (strand) {
    class Ship {
        mox;
        moy;
        mor;
        mosX;
        mosY;
        color;
        color2;
        color3;
        color4;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color, _color2, _color3, _color4) {
            this.mox = _mox;
            this.moy = _moy;
            this.mor = _mor;
            this.mosX = _mosX;
            this.mosY = _mosY;
            this.color = _color;
            this.color2 = _color2;
            this.color3 = _color3;
            this.color4 = _color4;
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            //Black Ship Body
            strand.path = new Path2D;
            strand.path.moveTo(0, 0);
            strand.path.lineTo(-100, 100);
            strand.path.lineTo(400, 100);
            strand.path.lineTo(400, 0);
            strand.ctx.fillStyle = this.color2;
            strand.ctx.fill(strand.path);
            //Red Ship Body
            strand.path = new Path2D;
            strand.path.moveTo(0, 0);
            strand.path.lineTo(-40, 40);
            strand.path.lineTo(400, 40);
            strand.path.lineTo(400, 0);
            strand.ctx.fillStyle = this.color;
            strand.ctx.fill(strand.path);
            //White Ship Body-Stripe
            strand.path = new Path2D;
            strand.path.moveTo(-90, 90);
            strand.path.lineTo(-100, 100);
            strand.path.lineTo(400, 100);
            strand.path.lineTo(400, 90);
            strand.ctx.fillStyle = this.color3;
            strand.ctx.fill(strand.path);
            //White Ship Body-Roof
            strand.path = new Path2D;
            strand.path.moveTo(-60, 99);
            strand.path.lineTo(-40, 120);
            strand.path.lineTo(340, 120);
            strand.path.lineTo(360, 99);
            strand.ctx.fillStyle = this.color3;
            strand.ctx.fill(strand.path);
            for (let chimnieCount = 0; chimnieCount < 4; chimnieCount++) {
                let sizeChimnieCount = chimnieCount * 60 + 40;
                //Ship Chimni Gold
                strand.path = new Path2D;
                strand.path.moveTo(0 + sizeChimnieCount, 120);
                strand.path.lineTo(0 + sizeChimnieCount, 160);
                strand.path.lineTo(30 + sizeChimnieCount, 160);
                strand.path.lineTo(30 + sizeChimnieCount, 120);
                strand.ctx.fillStyle = this.color4;
                strand.ctx.fill(strand.path);
                //Ship Chimni Black
                strand.path = new Path2D;
                strand.path.moveTo(0 + sizeChimnieCount, 160);
                strand.path.lineTo(0 + sizeChimnieCount, 180);
                strand.path.lineTo(30 + sizeChimnieCount, 180);
                strand.path.lineTo(30 + sizeChimnieCount, 160);
                strand.ctx.fillStyle = this.color2;
                strand.ctx.fill(strand.path);
            }
            strand.reset();
            //console.log(this.mox, this.moy);
        }
        click(_x, _y) {
            const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 500 && distanceY < 150) {
                console.log("Schiff", distanceX, distanceY);
                strand.ship = true;
                strand.picked = true;
                strand.titanicDirection = 0;
                strand.titanicTurn = 1.6;
                strand.titanicDrag = 2;
            }
        }
    }
    strand.Ship = Ship;
})(strand || (strand = {}));
//# sourceMappingURL=Ship.js.map