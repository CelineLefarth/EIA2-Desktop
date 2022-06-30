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
            GGSim.ctx.translate(GGSim.Field.size * _fieldX, GGSim.Field.size * _fieldY);
            GGSim.ctx.fillStyle = "white";
            GGSim.ctx.fillRect(GGSim.Field.size / 3, GGSim.Field.size / 3, GGSim.Field.size / 10, GGSim.Field.size / 10);
        }
    }
    GGSim.Pest = Pest;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Pest.js.map