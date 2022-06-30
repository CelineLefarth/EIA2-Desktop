var GGSim;
(function (GGSim) {
    class Asset {
        static defaultPlant;
        static finishedPlant;
        constructor() {
            //
        }
        static load() {
            Asset.defaultPlant = document.getElementById("defaultPlant");
            Asset.finishedPlant = document.getElementById("finishedPlant");
        }
    }
    GGSim.Asset = Asset;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Asset.js.map