namespace GGSim {


    export abstract class Plant {

        fieldX: number;
        fieldY: number;
        waterLevel: number;
        maxWaterlevel: number;
        fertilizeLevel: number;
        maxFertilizeLevel: number;
        fertilizeSteps: number;
        age: number;
        maxAge: number;
        priceValue: number;
        isReady: boolean;
        pests: Pest[];
        images: HTMLImageElement[];
        image: HTMLImageElement;
        pest: Pest;
        statusLevelImages: HTMLImageElement[] = [Asset.empty, Asset.needWater, Asset.finishedFertilizer];
        statusLevelImageWater: HTMLImageElement = this.statusLevelImages[0];
        statusLevelImageFertilizer: HTMLImageElement = this.statusLevelImages[0];
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
                        this.statusLevelImageWater = this.statusLevelImages[0];
                    }
                }
                else if (this.waterLevel == this.maxWaterlevel) {
                    this.waterLevel++;
                    this.die();
                }
            }
        }

        getFertilized(): void {
            if (this.pests.length == 0) {
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

        getPesticided(): void {
            if (this.pests.length > 0) {
                Player.pesticides--;
                this.pests = [];
            }
        }

        getHarvested(): void {
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

        grow(): void {
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
        }

        shrink(): void {
            this.pests.push(new Pest(this.fieldX, this.fieldY));
        }

        dry(): void {
            if (this.isReady == false && this.waterLevel > 0) {
                this.waterLevel--;
                if (this.waterLevel == this.maxWaterlevel - 1) {
                    this.statusLevelImageWater = this.statusLevelImages[1];
                }
                if (this.waterLevel == 0) {
                    this.die();
                }

            }
        }

        die(): void {
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
            ctx.drawImage(this.statusLevelImageWater, Field.size / 4, Field.size / 4);
            ctx.drawImage(this.statusLevelImageFertilizer, Field.size / -4, Field.size / -4);
        }

    }
}