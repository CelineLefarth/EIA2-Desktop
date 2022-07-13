namespace GGSim {

    export class Pillow extends Plant {

        protected waterLevel: number = 8;
        protected maxWaterlevel: number = 8;
        protected maxFertilizeLevel: number = 4;
        protected fertilizeSteps: number = 2;
        protected maxAge: number = 8;
        protected images: HTMLImageElement[] = [Asset.pillowPlantSeed, Asset.pillowPlantSappling, Asset.pillowPlantPlant];
        protected image: HTMLImageElement = this.images[0];

        public constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        protected priceUpdate(): void {
            this.priceValue = Market.price.costPillow;
        }

    }
}