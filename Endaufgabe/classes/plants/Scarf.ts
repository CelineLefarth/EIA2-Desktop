namespace GGSim {

    export class Scarf extends Plant {

        waterLevel: number = 5;
        maxWaterlevel: number = 5;
        maxFertilizeLevel: number = 5;
        fertilizeSteps: number = 1;
        maxAge: number = 5;
        images: HTMLImageElement[] = [Asset.scarfPlantSeed, Asset.scarfPlantSappling, Asset.scarfPlantPlant];
        image: HTMLImageElement = this.images[0];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        priceUpdate(): void {
            this.priceValue = Market.price.costScarf;
        }

    }
}