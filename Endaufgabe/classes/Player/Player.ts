namespace GGSim {

    export interface Seed {
        type: string;
        amount: number;
    }

    export class Player {
        money: number;
        fertilizer: number;
        pesticides: number;
        seeds: Seed[];
        action: ACTION = ACTION.CLICK;

        constructor() {
            //
        }

        fertilize(): void {
            console.log("fertilize");
            this.action = ACTION.FERTILIZE;
            currentActionVis.innerHTML = "fertilize";

        }

        water(): void {
            console.log("water");
            this.action = ACTION.WATER;
            currentActionVis.innerHTML = "water";
        }

        plant(): void {
            console.log("plant");
            this.action = ACTION.PLANT;
            currentActionVis.innerHTML = "plant";
        }

        pesticide(): void {
            console.log("pesticide");
            this.action = ACTION.PESTICIDE;
            currentActionVis.innerHTML = "pesticide";
        }

        harvest(): void {
            console.log("harvest");
            this.action = ACTION.HARVEST;
            currentActionVis.innerHTML = "harvest";
        }
    }
}