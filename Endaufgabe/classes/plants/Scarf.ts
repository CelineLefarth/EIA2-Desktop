namespace GGSim {

    export class Scarf extends Plant {

        protected waterLevel: number = 5;
        protected maxWaterlevel: number = 5;
        protected maxFertilizeLevel: number = 5;
        protected fertilizeSteps: number = 1;
        protected maxAge: number = 5;
        protected images: HTMLImageElement[] = [Asset.scarfPlantSeed, Asset.scarfPlantSappling, Asset.scarfPlantPlant];
        protected image: HTMLImageElement = this.images[0];

        public constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        protected priceUpdate(): void {
            this.priceValue = Market.price.costScarf;
        }

    }
}