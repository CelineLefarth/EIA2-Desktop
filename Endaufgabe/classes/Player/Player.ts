namespace GGSim {

    export interface Seed {
        type: string;
        amount: number;
    }

    export class Player {
        static action: ACTION;
        static money: number = 10;
        static fertilizer: number = 20;
        static pesticides: number = 20;
        static seeds: Seed[];
        

        constructor() {
            //
        }

        fertilize(): void {
            console.log("fertilize");
            Player.action = ACTION.FERTILIZE;
            currentActionVis.innerHTML = "fertilize";
            console.log(Player.action);
            
        }

        water(): void {
            console.log("water");
            Player.action = ACTION.WATER;
            currentActionVis.innerHTML = "water";
            console.log(Player.action);
        }

        plant(): void {
            console.log("plant");
            Player.action = ACTION.PLANT;
            currentActionVis.innerHTML = "plant";
            console.log(Player.action);
        }

        pesticide(): void {
            console.log("pesticide");
            Player.action = ACTION.PESTICIDE;
            currentActionVis.innerHTML = "pesticide";
            console.log(Player.action);
        }

        harvest(): void {
            console.log("harvest");
            Player.action = ACTION.HARVEST;
            currentActionVis.innerHTML = "harvest";
            console.log(Player.action);
        }
    }
}