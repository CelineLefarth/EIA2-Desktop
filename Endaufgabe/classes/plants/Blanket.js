var GGSim;
(function (GGSim) {
    class Blanket extends GGSim.Plant {
        waterLevel = 4;
        maxWaterlevel = 4;
        fertilizeLevel = 0;
        maxFertilizeLevel = 4;
        fertilizeSteps = 3;
        pesticideAmount = 0;
        age = 0;
        maxAge = 15;
        scaleX = 1;
        scaleY = 1;
        color = "green";
        priceValue = 1;
        isReady = false;
        pests = [];
        dryColor = ["brown", "red", "orange", "yellow", "green"];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
    }
    GGSim.Blanket = Blanket;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Blanket.js.map