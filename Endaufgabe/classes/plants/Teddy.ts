namespace GGSim {

    export class Teddy extends Plant {

        protected waterLevel: number = 4;
        protected maxWaterlevel: number = 4;
        protected maxFertilizeLevel: number = 4;
        protected fertilizeSteps: number = 3;
        protected maxAge: number = 2;
        protected images: HTMLImageElement[] = [Asset.teddyPlantSeed, Asset.teddyPlantSappling, Asset.teddyPlantPlant];
        protected image: HTMLImageElement = this.images[0];

        public constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        protected priceUpdate(): void {
            this.priceValue = Market.price.costTeddy;
        }

    }
}