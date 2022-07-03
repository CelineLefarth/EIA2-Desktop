namespace GGSim {

    export enum ACTION {
        FERTILIZE,
        HARVEST,
        WATER,
        PLANT,
        PESTICIDE,
        CLICK
    } 
    
    export enum PLANTACTION {
        PILLOW,
        TEDDY,
        SCARF,
        BLANKET,
        SOCK
    }

    export interface Seed {
        type: PLANTACTION;
        amount: number;
    }

    export class Player {
        static action: ACTION;
        static plantAction: PLANTACTION;
        static money: number = 0;
        static fertilizer: number = 20;
        static pesticides: number = 20;
        static seeds: Seed[] = [{type: PLANTACTION.PILLOW, amount: 0}, {type: PLANTACTION.TEDDY, amount: 0}, {type: PLANTACTION.SCARF, amount: 0}, {type: PLANTACTION.BLANKET, amount: 0}, {type: PLANTACTION.SOCK, amount: 0}];

        constructor() {
            //
        }

        fertilize(): void {
            if (Player.fertilizer > 0) { 
            Player.action = ACTION.FERTILIZE;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorFertilize.png) 50 50, auto";
            }
        }

        water(): void {
            Player.action = ACTION.WATER;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorWater.png) 50 50, auto";
        }

        plant(_value: string): void {
            console.log("plant");
            if (_value == "pillow") {
                Player.action = ACTION.PLANT ;
                Player.plantAction = PLANTACTION.PILLOW;
            }
            else if (_value == "teddy") {
                Player.action = ACTION.PLANT ;
                Player.plantAction = PLANTACTION.TEDDY;
            }
            else if (_value == "blanket") {
                Player.action = ACTION.PLANT ;
                Player.plantAction = PLANTACTION.BLANKET;
            }
            else if (_value == "scarf") {
                Player.action = ACTION.PLANT ;
                Player.plantAction = PLANTACTION.SCARF;
            }
            else if (_value == "sock") {
                Player.action = ACTION.PLANT ;
                Player.plantAction = PLANTACTION.SOCK;
            }
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPlant.png) 50 50, auto";
        }

        pesticide(): void {
            if(Player.pesticides > 0) {
            console.log("pesticide");
            Player.action = ACTION.PESTICIDE;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPesticide.png) 50 50, auto";
            }
        }

        harvest(): void {
            console.log("harvest");
            Player.action = ACTION.HARVEST;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorHarvest.png) 50 50, auto";
        }
    }
}