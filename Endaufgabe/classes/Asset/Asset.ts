namespace GGSim {

    export class Asset {

        static pillowPlantSeed: HTMLImageElement;
        static pillowPlantSappling: HTMLImageElement;
        static pillowPlantPlant: HTMLImageElement;

        static teddyPlantSeed: HTMLImageElement;
        static teddyPlantSappling: HTMLImageElement;
        static teddyPlantPlant: HTMLImageElement;

        static scarfPlantSeed: HTMLImageElement;
        static scarfPlantSappling: HTMLImageElement;
        static scarfPlantPlant: HTMLImageElement;

        static blanketPlantSeed: HTMLImageElement;
        static blanketPlantSappling: HTMLImageElement;
        static blanketPlantPlant: HTMLImageElement;

        static sockPlantSeed: HTMLImageElement;
        static sockPlantSappling: HTMLImageElement;
        static sockPlantPlant: HTMLImageElement;

        constructor() {
            //
        }

        static load(): void {
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
        }

    }
}