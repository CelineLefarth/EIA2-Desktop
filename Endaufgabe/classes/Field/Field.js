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
            _x = _x - 50;
            _y = _y - 50;
            if (_x < this.positionX && _x > this.positionX - 50 && _y < this.positionY && _y > this.positionY - 50) {
                console.log("Spalte: " + this.positionX / 50, "Zeile: " + this.positionY / 50);
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