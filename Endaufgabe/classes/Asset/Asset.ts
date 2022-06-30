namespace GGSim {

    export class Asset {

        static defaultPlant: HTMLImageElement;
        static finishedPlant: HTMLImageElement;

        constructor() {
            //
        }

        static load(): void {
            Asset.defaultPlant = <HTMLImageElement>document.getElementById("defaultPlant");
            Asset.finishedPlant = <HTMLImageElement>document.getElementById("finishedPlant");
        }

    }
}