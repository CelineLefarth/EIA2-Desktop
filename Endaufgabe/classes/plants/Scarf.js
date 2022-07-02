var GGSim;
(function (GGSim) {
    class Scarf extends GGSim.Plant {
        waterLevel = 5;
        maxWaterlevel = 5;
        fertilizeLevel = 0;
        maxFertilizeLevel = 5;
        fertilizeSteps = 1;
        pesticideAmount = 0;
        age = 0;
        maxAge = 5;
        scaleX = 1;
        scaleY = 1;
        priceValue = 1;
        isReady = false;
        pests = [];
        dryColor = ["brown", "red", "orange", "yellow", "green"];
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