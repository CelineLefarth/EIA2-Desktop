namespace GGSim {


    export abstract class Plant {

        fieldX: number;
        fieldY: number;
        abstract waterLevel: number;
        abstract maxWaterlevel: number;
        abstract fertilizeLevel: number;
        abstract maxFertilizeLevel: number;
        abstract fertilizeSteps: number;
        abstract pesticideAmount: number;
        abstract age: number;
        abstract maxAge: number;
        abstract scaleX: number;
        abstract scaleY: number;
        abstract priceValue: number;
        abstract isReady: boolean;
        abstract pests: Pest[];
        pest: Pest;
        abstract dryColor: string[];
        abstract images: HTMLImageElement[];
        abstract image: HTMLImageElement;
        waterLevelImages: HTMLImageElement[] = [Asset.empty, Asset.needWaterOne, Asset.needWaterTwo, Asset.needWaterThree];
        waterLevelImage: HTMLImageElement = this.waterLevelImages[0];

        constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        timeUpdate(_action: TIMEACTION): void {
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

        abstract priceUpdate(): void;

        playerUpdate(): void {
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

        getWaterd(): void {
            if (this.pests.length == 0) {
                if (this.waterLevel < this.maxWaterlevel && this.isReady == false) {
                    this.waterLevel++;
                    if (this.waterLevel == Math.round(this.maxWaterlevel / 4)) {
                        this.waterLevelImage = this.waterLevelImages[2];
                    }
                    else if (this.waterLevel == this.maxWaterlevel - 1) {
                        this.waterLevelImage = this.waterLevelImages[1];
                    }
                    else if (this.waterLevel == this.maxWaterlevel) {
                        this.waterLevelImage = this.waterLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel || this.waterLevel > this.maxWaterlevel ) {
                    console.log("mucho");
                    this.isReady = false;
                    this.waterLevel++;
                    this.age--;
                    
                }
            }
        }

        getFertilized(): void {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0 && this.age < this.maxAge) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
            }
            else if (this.fertilizeLevel >= this.maxFertilizeLevel ) {
                this.isReady = false;
                this.fertilizeLevel ++;
                this.age = this.age - this.fertilizeSteps;
            }
            Player.fertilizer--;
        }

        getPesticided(): void {
            if (this.pests.length > 0) {
                this.pesticideAmount--;
                Player.pesticides--;
                this.pests = [];
            }
        }

        getHarvested(): void {
            if (this.isReady == true) {
                this.priceUpdate();
                Player.money = Player.money + Math.round(this.priceValue) + 1 * this.fertilizeLevel;
                console.log(this.priceValue);
                
                if (Player.money < 0) {
                    Player.money = 0;
                }
            }
        }

        grow(): void {
            if (this.waterLevel > 0 && this.pests.length == 0) {
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
            else if (this.age > 0 && this.pests.length > 0) {
                this.isReady = false;
                this.age--;
                if (this.age == this.maxAge - 1) {
                    this.image = this.images[1];
                }
                else if (this.age == 0) {
                    this.image = this.images[0];
                }
            }
        }

        shrink(): void {
            this.pests.push(new Pest(this.fieldX, this.fieldY));
        }

        dry(): void {
            if (this.isReady == false && this.waterLevel > 0 && this.isReady == false) {
                this.waterLevel--;

                if (this.waterLevel == this.maxWaterlevel / 4) {
                    this.waterLevelImage = this.waterLevelImages[1];
                }
                else if (this.waterLevel == Math.round(this.maxWaterlevel / 2)) {
                    this.waterLevelImage = this.waterLevelImages[2];
                }
                else if (this.waterLevel == 0) {
                    this.waterLevelImage = this.waterLevelImages[3];
                }
            }
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(Field.size / 2 + Field.size * this.fieldX, Field.size / 2 + Field.size * this.fieldY);
            ctx.translate((- Field.size / 2), (- Field.size / 2));
            ctx.drawImage(this.image, 0, 0);
            ctx.drawImage(this.waterLevelImage, Field.size / 4, Field.size / 4);
        }

    }
}