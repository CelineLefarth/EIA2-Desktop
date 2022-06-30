namespace GGSim {

    export abstract class Plant {

        fieldX: number;
        fieldY: number;
        abstract waterLevel: number;
        abstract fertilizeLevel: number;
        abstract pesticideAmount: number;
        abstract age: number;
        abstract scaleX: number;
        abstract scaleY: number;
        abstract color: string;
        abstract ready: boolean;
        abstract pests: Pest[];
        abstract dryColor: string[];

        constructor(_fieldX: number, _fieldY: number) {
            this.fieldX = _fieldX;
            this.fieldY = _fieldY;
        }

        abstract timeUpdate(_action: TIMEACTION): void;

        abstract playerUpdate(_plant: Plant): void;

        abstract shrink(): void;

        abstract grow(): void;

        abstract dry(): void;

        abstract die(_plant: Plant): void;

        abstract draw(): void;

    }
}