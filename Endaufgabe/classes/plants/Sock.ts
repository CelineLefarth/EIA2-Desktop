namespace GGSim {

    export class Sock extends Plant {

        protected waterLevel: number = 2;
        protected maxWaterlevel: number = 2;
        protected maxFertilizeLevel: number = 2;
        protected fertilizeSteps: number = 1;
        protected maxAge: number = 4;
        protected images: HTMLImageElement[] = [Asset.sockPlantSeed, Asset.sockPlantSappling, Asset.sockPlantPlant];
        protected image: HTMLImageElement = this.images[0];

        public constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        protected priceUpdate(): void {
            this.priceValue = Market.price.costSocks;
        }

    }
}