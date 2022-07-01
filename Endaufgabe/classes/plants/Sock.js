var GGSim;
(function (GGSim) {
    class Sock extends GGSim.Plant {
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
        images = [GGSim.Asset.sockPlantSeed, GGSim.Asset.sockPlantSappling, GGSim.Asset.sockPlantPlant];
        image = this.images[0];
        constructor(_fieldX, _fieldY) {
            super(_fieldX, _fieldY);
        }
    }
    GGSim.Sock = Sock;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Sock.js.map