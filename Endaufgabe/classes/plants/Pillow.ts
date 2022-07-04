namespace GGSim {

    export class Pillow extends Plant {

        waterLevel: number = 8;
        maxWaterlevel: number = 8;
        maxFertilizeLevel: number = 4;
        fertilizeSteps: number = 2;
        maxAge: number = 8;
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