namespace GGSim {

    export class Blanket extends Plant {

        waterLevel: number = 10;
        maxWaterlevel: number = 10;
        maxFertilizeLevel: number = 10;
        fertilizeSteps: number = 1;
        maxAge: number = 10;
        images: HTMLImageElement[] = [Asset.blanketPlantSeed, Asset.blanketPlantSappling, Asset.blanketPlantPlant];
        image: HTMLImageElement = this.images[0];


        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        priceUpdate(): void {
            this.priceValue = Market.price.costBlanket;
        }
    }
}