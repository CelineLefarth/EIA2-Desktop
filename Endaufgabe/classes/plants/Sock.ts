namespace GGSim {

    export class Sock extends Plant {

        waterLevel: number = 4;
        maxWaterlevel: number = 4;
        fertilizeLevel: number = 0;
        maxFertilizeLevel: number = 4;
        fertilizeSteps: number = 3;
        pesticideAmount: number = 0;
        age: number = 0;
        maxAge: number = 15;
        scaleX: number = 1;
        scaleY: number = 1;
        color: string = "green";
        priceValue: number = 1;
        isReady: boolean = false;
        pests: Pest[] = [];
        dryColor: string[] = ["brown", "red", "orange", "yellow", "green"];

        constructor(_fieldX: number, _fieldY: number) {
            super(_fieldX, _fieldY);
        }
    }
}