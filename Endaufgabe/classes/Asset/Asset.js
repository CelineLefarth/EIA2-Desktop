var GGSim;
(function (GGSim) {
    class Asset {
        static empty;
        static field;
        static pillowPlantSeed;
        static pillowPlantSappling;
        static pillowPlantPlant;
        static teddyPlantSeed;
        static teddyPlantSappling;
        static teddyPlantPlant;
        static scarfPlantSeed;
        static scarfPlantSappling;
        static scarfPlantPlant;
        static blanketPlantSeed;
        static blanketPlantSappling;
        static blanketPlantPlant;
        static sockPlantSeed;
        static sockPlantSappling;
        static sockPlantPlant;
        static needWater;
        static finishedFertilizer;
        static moth;
        static load() {
            Asset.empty = document.getElementById("Empty");
            Asset.field = document.getElementById("Field");
            Asset.pillowPlantSeed = document.getElementById("PillowPlantSeed");
            Asset.pillowPlantSappling = document.getElementById("PillowPlantSappling");
            Asset.pillowPlantPlant = document.getElementById("PillowPlantPlant");
            Asset.teddyPlantSeed = document.getElementById("TeddyPlantSeed");
            Asset.teddyPlantSappling = document.getElementById("TeddyPlantSappling");
            Asset.teddyPlantPlant = document.getElementById("TeddyPlantPlant");
            Asset.scarfPlantSeed = document.getElementById("ScarfPlantSeed");
            Asset.scarfPlantSappling = document.getElementById("ScarfPlantSappling");
            Asset.scarfPlantPlant = document.getElementById("ScarfPlantPlant");
            Asset.blanketPlantSeed = document.getElementById("BlanketPlantSeed");
            Asset.blanketPlantSappling = document.getElementById("BlanketPlantSappling");
            Asset.blanketPlantPlant = document.getElementById("BlanketPlantPlant");
            Asset.sockPlantSeed = document.getElementById("SockPlantSeed");
            Asset.sockPlantSappling = document.getElementById("SockPlantSappling");
            Asset.sockPlantPlant = document.getElementById("SockPlantPlant");
            Asset.needWater = document.getElementById("NeedWater");
            Asset.finishedFertilizer = document.getElementById("FinishedFertilizer");
            Asset.moth = document.getElementById("Moth");
        }
    }
    GGSim.Asset = Asset;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Asset.js.map