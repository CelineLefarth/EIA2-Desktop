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
            GGSim.ctx.translate(GGSim.Field.size * _fieldX + GGSim.Field.size / 2, GGSim.Field.size * _fieldY + GGSim.Field.size / 2);
            GGSim.ctx.rotate(-GGSim.animationTime);
            GGSim.ctx.drawImage(GGSim.Asset.moth, 0, 0);
        }
    }
    GGSim.Pest = Pest;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Pest.js.map