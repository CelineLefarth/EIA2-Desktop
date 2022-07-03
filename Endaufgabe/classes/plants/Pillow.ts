namespace GGSim {

    export class Pillow extends Plant {

        waterLevel: number = 8;
        maxWaterlevel: number = 8;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 4;
        fertilizeSteps: number = 2;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 8;
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
        images: HTMLImageElement[] = [Asset.pillowPlantSeed, Asset.pillowPlantSappling, Asset.pillowPlantPlant];
        image: HTMLImageElement = this.images[0];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        priceUpdate(): void {
            this.priceValue = Market.price.costPillow;
        }

    }
}