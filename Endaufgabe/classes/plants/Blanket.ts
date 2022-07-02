namespace GGSim {

    export class Blanket extends Plant {

        waterLevel: number = 10;
        maxWaterlevel: number = 10;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 10;
        fertilizeSteps: number = 1;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 10;
        scaleX: number = 1;
        scaleY: number = 1;
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
        dryColor: string[] = ["brown", "red", "orange", "yellow", "green"];
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