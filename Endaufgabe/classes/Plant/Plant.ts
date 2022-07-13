namespace GGSim {


    export abstract class Plant {

        public fieldX: number;
        public fieldY: number;
        public pests: Pest[] = [];
        protected waterLevel: number;
        protected maxWaterlevel: number;
        protected maxFertilizeLevel: number;
        protected fertilizeSteps: number;
        protected maxAge: number;
        protected priceValue: number = 1;
        protected images: HTMLImageElement[];
        protected image: HTMLImageElement;
        private fertilizeLevel: number = 0;
        private age: number = 0;
        private isReady: boolean = false;
        private pest: Pest;
        private statusLevelImages: HTMLImageElement[] = [Asset.empty, Asset.needWater, Asset.finishedFertilizer];
        private statusLevelImageWater: HTMLImageElement = this.statusLevelImages[0];
        private statusLevelImageFertilizer: HTMLImageElement = this.statusLevelImages[0];
        private plant: Plant;

        public constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        public timeUpdate(_action: TIMEACTION): void {
            switch (_action) {
                case TIMEACTION.GROW:
                    this.grow();
                    break;
                case TIMEACTION.DRY:
                    this.dry();
                    break;
                case TIMEACTION.PEST:
                    this.shrink();
                    break;
            }
            Simulation.update();
        }

        public playerUpdate(_plant: Plant): void {
            this.plant = _plant;
            switch (Player.action) {
                case ACTION.WATER:
                    this.getWaterd();
                    break;
                case ACTION.FERTILIZE:
                    this.getFertilized();
                    break;
                case ACTION.PESTICIDE:
                    this.getPesticided();
                    break;
                case ACTION.HARVEST:
                    this.getHarvested();
                    break;
            }
            Simulation.update();
        }

        public draw(): void {
            ctx.resetTransform();
            ctx.translate(Field.size / 2 + Field.size * this.fieldX, Field.size / 2 + Field.size * this.fieldY);
            ctx.translate((- Field.size / 2), (- Field.size / 2));
            ctx.drawImage(this.image, 0, 0);
            ctx.drawImage(this.statusLevelImageWater, Field.size / 4, Field.size / 4);
            ctx.drawImage(this.statusLevelImageFertilizer, Field.size / -4, Field.size / -4);
        }

        protected abstract priceUpdate(): void;

        private getWaterd(): void {
            if (this.pests.length == 0) {
                if (this.waterLevel < this.maxWaterlevel) {
                    this.waterLevel++;
                    if (this.waterLevel == this.maxWaterlevel) {
                        this.statusLevelImageWater = this.statusLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel) {
                    this.waterLevel++;
                    this.die();
                }
            }
        }

        private getFertilized(): void {
            if (this.pests.length == 0 && Player.fertilizer > 0) {
            if (this.fertilizeLevel < this.maxFertilizeLevel) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
                if (this.age > this.maxAge) {
                    this.age = this.maxAge;
                }
                if (this.fertilizeLevel == this.maxFertilizeLevel) {
                    this.statusLevelImageFertilizer = this.statusLevelImages[2];
                }
            }
            else if (this.fertilizeLevel == this.maxFertilizeLevel) {
                this.fertilizeLevel++;
                this.die();
            }
            Player.fertilizer--;
            }
        }

        private getPesticided(): void {
            if (this.pests.length > 0) {
            if (this.pest.position <= 0 && Player.pesticides > 0) {
                Player.pesticides--;
                this.pests = [];
            }
            }
        }

        private getHarvested(): void {
            if (this.pests.length == 0) {
            if (this.isReady == true) {
                this.priceUpdate();
                Player.money = Player.money + Math.round(this.priceValue) + 1 * this.fertilizeLevel;
                if (Player.money < 0) {
                    Player.money = 0;
                }
            }
            }
        }

        private grow(): void {
            if (this.waterLevel == this.maxWaterlevel && this.pests.length == 0) {
                if (this.age < this.maxAge) {
                    this.age++;
                    if (this.age == Math.round(this.maxAge / 2)) {
                        this.image = this.images[1];
                    }
                }
                else {
                    this.image = this.images[2];
                    this.isReady = true;
                }
            }
            else if (this.pest) {
            if (this.age >= 0 && this.pest.position <= 0) {
                this.isReady = false;
                this.age--;
                if (this.age == this.maxAge - 1) {
                    this.image = this.images[1];
                }
                else if (this.age == 0) {
                    this.image = this.images[0];
                }
                else if (this.age == -1) {
                    this.die();
                }
            }
            }
        }

        private shrink(): void {
            this.pest = new Pest(this.fieldX, this.fieldY);
            this.pests.push(this.pest);
        }

        private dry(): void {
            if (this.waterLevel > 0) {
                this.waterLevel--;
                if (this.waterLevel == this.maxWaterlevel - 1) {
                    this.statusLevelImageWater = this.statusLevelImages[1];
                }
                if (this.waterLevel == 0) {
                    this.die();
                }

            }
        }

        private die(): void {
            for (let field of fields) {
                if (field.positionX == this.fieldX && field.positionY == this.fieldY) {
                    field.clear(this.plant);
                }
            }
        }

    }
}