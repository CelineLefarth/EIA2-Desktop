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
        static seeds: Seed[] = [{type: "pillow", amount: 0}, {type: "teddy", amount: 0}, {type: "scarf", amount: 0}, {type: "blanket", amount: 0}, {type: "sock", amount: 0}];

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

        plant(_value: string): void {
            console.log("plant");
            if (_value == "pillow") {
                Player.action = ACTION.PILLOW;
            }
            else if (_value == "teddy") {
                Player.action = ACTION.TEDDY;
            }
            else if (_value == "blanket") {
                Player.action = ACTION.BLANKET;
            }
            else if (_value == "scarf") {
                Player.action = ACTION.SCARF;
            }
            else if (_value == "sock") {
                Player.action = ACTION.SOCK;
            }
            currentActionVis.innerHTML = _value;
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