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
        abstract priceValue: number;
        abstract isReady: boolean;
        abstract pests: Pest[];
        abstract images: HTMLImageElement[];
        abstract image: HTMLImageElement;
        pest: Pest;
        waterLevelImages: HTMLImageElement[] = [Asset.empty, Asset.needWaterOne, Asset.needWaterTwo, Asset.needWaterThree];
        waterLevelImage: HTMLImageElement = this.waterLevelImages[0];
        plant: Plant;

        constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        abstract priceUpdate(): void;

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

        playerUpdate(_plant: Plant): void {
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

        getWaterd(): void {
            if (this.pests.length == 0) {
                if (this.waterLevel < this.maxWaterlevel) {
                    this.waterLevel++;
                    if (this.waterLevel == this.maxWaterlevel) {
                        this.waterLevelImage = this.waterLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel) {
                    console.log("mucho");
                    this.isReady = false;
                    this.waterLevel++;
                    if (this.waterLevel > this.maxWaterlevel) {
                        this.die();
                    }
                }
            }
            console.log("After watering: Water: ", this.waterLevel);
        }

        getFertilized(): void {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
                if (this.age > this.maxAge) {
                    this.age = this.maxAge;
                }
            }
            else if (this.fertilizeLevel == this.maxFertilizeLevel) {
                this.isReady = false;
                this.fertilizeLevel ++;
                this.die();
            }
            Player.fertilizer--;
            console.log("Fertilizer after Firtilising: ", this.fertilizeLevel, "Age after Firtilizing: ", this.age);
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
            else if (this.age >= 0 && this.pests.length > 0) {
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
            console.log("Age after Growth: ", this.age);
        }

        shrink(): void {
            this.pests.push(new Pest(this.fieldX, this.fieldY));
        }

        dry(): void {
            if (this.isReady == false && this.waterLevel > 0) {
                this.waterLevel--;
                if (this.waterLevel == this.maxWaterlevel - 1) {
                    this.waterLevelImage = this.waterLevelImages[1];
                }
                if (this.waterLevel == 0) {
                    this.waterLevelImage = this.waterLevelImages[3];
                    this.die();
                }
                console.log("After Dry Water: ", this.waterLevel);
                
            }
        }

        die(): void {
            console.log("Die");
            for (let field of fields) {
                if (field.positionX == this.fieldX && field.positionY == this.fieldY) {
                    field.clear(this.plant);
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