namespace GGSim {

    export class Sock extends Plant {

        waterLevel: number = 2;
        maxWaterlevel: number = 2;
        maxFertilizeLevel: number = 2;
        fertilizeSteps: number = 1;
        maxAge: number = 4;
        images: HTMLImageElement[] = [Asset.sockPlantSeed, Asset.sockPlantSappling, Asset.sockPlantPlant];
        image: HTMLImageElement = this.images[0];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        priceUpdate(): void {
            this.priceValue = Market.price.costSocks;
        }

    }
}