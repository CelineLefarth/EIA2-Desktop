var GGSim;
(function (GGSim) {
    class Blanket extends GGSim.Plant {
        waterLevel = 10;
        maxWaterlevel = 10;
        maxFertilizeLevel = 10;
        fertilizeSteps = 1;
        maxAge = 10;
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