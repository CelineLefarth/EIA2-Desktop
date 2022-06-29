var GGSim;
(function (GGSim) {
    class Pest {
        fieldX;
        fieldY;
        corrupting;
        constructor(_fiedX, _fieldY) {
            this.fieldX = _fiedX;
            this.fieldY = _fieldY;
        }
        timeupdate() {
            //
        }
        fly() {
            //
        }
        eat() {
            //
        }
        draw(_fieldX, _fieldY) {
            GGSim.ctx.resetTransform();
            GGSim.ctx.translate(50 * _fieldX, 50 * _fieldY);
            GGSim.ctx.fillStyle = "white";
            GGSim.ctx.fillRect(25, 25, 5, 5);
        }
    }
    GGSim.Pest = Pest;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Pest.js.map