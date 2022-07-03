namespace GGSim {

    export class Teddy extends Plant {

        waterLevel: number = 4;
        maxWaterlevel: number = 4;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 4;
        fertilizeSteps: number = 3;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 2;
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
        images: HTMLImageElement[] = [Asset.teddyPlantSeed, Asset.teddyPlantSappling, Asset.teddyPlantPlant];
        image: HTMLImageElement = this.images[0];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        priceUpdate(): void {
            this.priceValue = Market.price.costTeddy;
        }

    }
}