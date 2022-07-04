var GGSim;
(function (GGSim) {
    class Scarf extends GGSim.Plant {
        waterLevel = 5;
        maxWaterlevel = 5;
        maxFertilizeLevel = 5;
        fertilizeSteps = 1;
        maxAge = 5;
        images = [GGSim.Asset.scarfPlantSeed, GGSim.Asset.scarfPlantSappling, GGSim.Asset.scarfPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        priceUpdate() {
            this.priceValue = GGSim.Market.price.costScarf;
        }
    }
    GGSim.Scarf = Scarf;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Scarf.js.map