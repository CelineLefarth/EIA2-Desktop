var GGSim;
(function (GGSim) {
    class Field {
        time;
        positionX;
        positionY;
        constructor(_positionX, _positionY) {
            this.positionX = _positionX * 50;
            this.positionY = _positionY * 50;
        }
        clicked(_x, _y) {
            if (0 < this.positionX / 50 && this.positionX / 50 < 50 && 0 < this.positionY / 50 && this.positionY / 50 < 50) {
                console.log(this.positionX, this.positionY);
            }
        }
        draw() {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(this.positionX, this.positionY);
            GGSim.ctx.fillStyle = "darkbrown";
            GGSim.ctx.fillRect(5, 5, 45, 45);
        }
        clearField() {
            //
        }
    }
    GGSim.Field = Field;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Field.js.map