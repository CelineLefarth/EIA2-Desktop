namespace GGSim {

    export class Blanket extends Plant {

        protected waterLevel: number = 10;
        protected maxWaterlevel: number = 10;
        protected maxFertilizeLevel: number = 10;
        protected fertilizeSteps: number = 1;
        protected maxAge: number = 10;
        protected images: HTMLImageElement[] = [Asset.blanketPlantSeed, Asset.blanketPlantSappling, Asset.blanketPlantPlant];
        protected image: HTMLImageElement = this.images[0];


        public constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }

        protected priceUpdate(): void {
            this.priceValue = Market.price.costBlanket;
        }
    }
}