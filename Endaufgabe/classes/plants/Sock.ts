namespace GGSim {

    export class Sock extends Plant {

        waterLevel: number = 2;
        maxWaterlevel: number = 2;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 2;
        fertilizeSteps: number = 1;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 4;
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
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