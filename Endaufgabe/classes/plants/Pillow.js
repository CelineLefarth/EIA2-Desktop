var GGSim;
(function (GGSim) {
    class Pillow extends GGSim.Plant {
        waterLevel = 8;
        maxWaterlevel = 8;
        maxFertilizeLevel = 4;
        fertilizeSteps = 2;
        maxAge = 8;
        images = [GGSim.Asset.pillowPlantSeed, GGSim.Asset.pillowPlantSappling, GGSim.Asset.pillowPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
        priceUpdate() {
            this.priceValue = GGSim.Market.price.costPillow;
        }
    }
    GGSim.Pillow = Pillow;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Pillow.js.map