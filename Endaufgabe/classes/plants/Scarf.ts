namespace GGSim {

    export class Scarf extends Plant {

        waterLevel: number = 5;
        maxWaterlevel: number = 5;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 5;
        fertilizeSteps: number = 1;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 5;
        scaleX: number = 1;
        scaleY: number = 1;
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
        dryColor: string[] = ["brown", "red", "orange", "yellow", "green"];
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