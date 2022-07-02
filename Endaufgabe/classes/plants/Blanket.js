var GGSim;
(function (GGSim) {
    class Blanket extends GGSim.Plant {
        waterLevel = 10;
        maxWaterlevel = 10;
        fertilizeLevel = 0;
        maxFertilizeLevel = 10;
        fertilizeSteps = 1;
        pesticideAmount = 0;
        age = 0;
        maxAge = 10;
        scaleX = 1;
        scaleY = 1;
        priceValue = 1;
        isReady = false;
        pests = [];
        dryColor = ["brown", "red", "orange", "yellow", "green"];
        images = [GGSim.Asset.blanketPlantSeed, GGSim.Asset.blanketPlantSappling, GGSim.Asset.blanketPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        priceUpdate() {
            this.priceValue = GGSim.Market.price.costBlanket;
        }
    }
    GGSim.Blanket = Blanket;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Blanket.js.map