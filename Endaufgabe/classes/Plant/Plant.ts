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
        abstract color: string;
        abstract priceValue: number;
        abstract isReady: boolean;
        abstract pests: Pest[];
        abstract dryColor: string[];
        images: HTMLImageElement[] = [Asset.defaultPlant, Asset.finishedPlant];
        image: HTMLImageElement = this.images[0];

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
                    this.color = this.dryColor[this.waterLevel];
                }
            }
        }

        getFertilized(): void {
            if (this.fertilizeLevel < this.maxFertilizeLevel && this.pests.length == 0 && this.age < this.maxAge) {
                this.fertilizeLevel++;
                this.age = this.age + this.fertilizeSteps;
                Player.fertilizer--;
            }
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
                Player.money = Player.money + Math.round(Market.price.cost) + this.priceValue * this.fertilizeLevel;
                if (Player.money < 0) {
                    Player.money = 0;
                }
            }
        }

        grow(): void {
            if (this.waterLevel > 0 && this.pests.length == 0) {
                if (this.age < this.maxAge) {
                    this.age++;
                    this.scaleX = this.scaleX + 0.1;
                    this.scaleY = this.scaleY + 0.1;
                }
                else {
                    this.image = this.images[1];
                    this.isReady = true;
                }
            }
        }

        shrink(): void {
            this.pests.push(new Pest(this.fieldX, this.fieldY));
        }

        dry(): void {
            if (this.isReady == false && this.waterLevel > 0) {
                this.waterLevel--;
                this.color = this.dryColor[this.waterLevel];
            }
        }

        draw(): void {
            ctx.resetTransform();
            ctx.translate(Field.size / 2 + Field.size * this.fieldX, Field.size / 2 + Field.size * this.fieldY);
            ctx.scale(this.scaleX + 0.2 * this.fertilizeLevel, this.scaleY + 0.2 * this.fertilizeLevel);
            ctx.translate((- Field.size / 2) - this.scaleX, (- Field.size / 2) - this.scaleY);
            ctx.drawImage(this.image, this.scaleX + Field.size / 4, this.scaleY);
        }

    }
}