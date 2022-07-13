namespace GGSim {

    export class Asset {

        public static empty: HTMLImageElement;
        public static field: HTMLImageElement;

        public static pillowPlantSeed: HTMLImageElement;
        public static pillowPlantSappling: HTMLImageElement;
        public static pillowPlantPlant: HTMLImageElement;

        public static teddyPlantSeed: HTMLImageElement;
        public static teddyPlantSappling: HTMLImageElement;
        public static teddyPlantPlant: HTMLImageElement;

        public static scarfPlantSeed: HTMLImageElement;
        public static scarfPlantSappling: HTMLImageElement;
        public static scarfPlantPlant: HTMLImageElement;

        public static blanketPlantSeed: HTMLImageElement;
        public static blanketPlantSappling: HTMLImageElement;
        public static blanketPlantPlant: HTMLImageElement;

        public static sockPlantSeed: HTMLImageElement;
        public static sockPlantSappling: HTMLImageElement;
        public static sockPlantPlant: HTMLImageElement;

        public static needWater: HTMLImageElement;
        public static finishedFertilizer: HTMLImageElement;

        public static moth: HTMLImageElement;

        public static load(): void {

            Asset.empty = <HTMLImageElement>document.getElementById("Empty");
            Asset.field = <HTMLImageElement>document.getElementById("Field");

            Asset.pillowPlantSeed = <HTMLImageElement>document.getElementById("PillowPlantSeed");
            Asset.pillowPlantSappling = <HTMLImageElement>document.getElementById("PillowPlantSappling");
            Asset.pillowPlantPlant = <HTMLImageElement>document.getElementById("PillowPlantPlant");

            Asset.teddyPlantSeed = <HTMLImageElement>document.getElementById("TeddyPlantSeed");
            Asset.teddyPlantSappling = <HTMLImageElement>document.getElementById("TeddyPlantSappling");
            Asset.teddyPlantPlant = <HTMLImageElement>document.getElementById("TeddyPlantPlant");

            Asset.scarfPlantSeed = <HTMLImageElement>document.getElementById("ScarfPlantSeed");
            Asset.scarfPlantSappling = <HTMLImageElement>document.getElementById("ScarfPlantSappling");
            Asset.scarfPlantPlant = <HTMLImageElement>document.getElementById("ScarfPlantPlant");

            Asset.blanketPlantSeed = <HTMLImageElement>document.getElementById("BlanketPlantSeed");
            Asset.blanketPlantSappling = <HTMLImageElement>document.getElementById("BlanketPlantSappling");
            Asset.blanketPlantPlant = <HTMLImageElement>document.getElementById("BlanketPlantPlant");

            Asset.sockPlantSeed = <HTMLImageElement>document.getElementById("SockPlantSeed");
            Asset.sockPlantSappling = <HTMLImageElement>document.getElementById("SockPlantSappling");
            Asset.sockPlantPlant = <HTMLImageElement>document.getElementById("SockPlantPlant");

            Asset.needWater = <HTMLImageElement>document.getElementById("NeedWater");
            Asset.finishedFertilizer = <HTMLImageElement>document.getElementById("FinishedFertilizer");

            Asset.moth = <HTMLImageElement>document.getElementById("Moth");

        }

    }
}