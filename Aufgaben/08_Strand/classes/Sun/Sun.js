var strand;
(function (strand) {
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["RISING"] = 0] = "RISING";
        ACTION[ACTION["SPINNING"] = 1] = "SPINNING";
    })(ACTION || (ACTION = {}));
    class Sun extends strand.BeachObject {
        color;
        action = ACTION.RISING;
        constructor(_mox, _moy, _mor, _mosX, _mosY, _color) {
            super(_mox, _moy, _mor, _mosX, _mosY);
            this.color = _color;
        }
        move() {
            this.mox = -700 - strand.i;
            this.moy = -400 * Math.sin(strand.i / 400);
            this.mosX = 1 * Math.sin(strand.i / 500);
            this.mosY = 1 * Math.sin(strand.i / 500);
            switch (this.action) {
                case ACTION.RISING:
                    this.mor = 0;
                    break;
                case ACTION.SPINNING:
                    this.mor = 200;
                    break;
            }
        }
        draw() {
            strand.ctx.translate(this.mox, this.moy);
            strand.ctx.rotate(this.mor);
            strand.ctx.scale(this.mosX, this.mosY);
            let crabSun = new strand.Crab(0, 0, 3.1 + Math.sin(strand.i / 100) * this.mor, 2, 2, this.color, this.color, 2);
            crabSun.draw();
            strand.reset();
        }
        interact(_x, _y) {
            const distanceX = Math.sqrt(((_x - this.mox) * (_x - this.mox)));
            const distanceY = Math.sqrt(((_y - this.moy) * (_y - this.moy)));
            if (distanceX < 100 && distanceY < 100 && strand.picked == false) {
                console.log("Sun ", distanceX, distanceY);
                if (this.action == ACTION.RISING) {
                    this.action = ACTION.SPINNING;
                }
                else if (this.action == ACTION.SPINNING) {
                    this.action = ACTION.RISING;
                }
                strand.picked = true;
            }
        }
    }
    strand.Sun = Sun;
})(strand || (strand = {}));
//# sourceMappingURL=Sun.js.map