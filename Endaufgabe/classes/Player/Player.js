var GGSim;
(function (GGSim) {
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["FERTILIZE"] = 0] = "FERTILIZE";
        ACTION[ACTION["HARVEST"] = 1] = "HARVEST";
        ACTION[ACTION["WATER"] = 2] = "WATER";
        ACTION[ACTION["PLANT"] = 3] = "PLANT";
        ACTION[ACTION["PESTICIDE"] = 4] = "PESTICIDE";
    })(ACTION = GGSim.ACTION || (GGSim.ACTION = {}));
    let PLANTACTION;
    (function (PLANTACTION) {
        PLANTACTION[PLANTACTION["PILLOW"] = 0] = "PILLOW";
        PLANTACTION[PLANTACTION["TEDDY"] = 1] = "TEDDY";
        PLANTACTION[PLANTACTION["SCARF"] = 2] = "SCARF";
        PLANTACTION[PLANTACTION["BLANKET"] = 3] = "BLANKET";
        PLANTACTION[PLANTACTION["SOCK"] = 4] = "SOCK";
    })(PLANTACTION = GGSim.PLANTACTION || (GGSim.PLANTACTION = {}));
    class Player {
        static action;
        static plantAction;
        static money;
        static fertilizer = 20;
        static pesticides = 20;
        static seeds = [{ type: PLANTACTION.PILLOW, amount: 0 }, { type: PLANTACTION.TEDDY, amount: 0 }, { type: PLANTACTION.SCARF, amount: 0 }, { type: PLANTACTION.BLANKET, amount: 0 }, { type: PLANTACTION.SOCK, amount: 0 }];
        fertilize() {
            if (Player.fertilizer > 0) {
                Player.action = ACTION.FERTILIZE;
                document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorFertilize.png) 50 50, auto";
            }
        }
        water() {
            Player.action = ACTION.WATER;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorWater.png) 50 50, auto";
        }
        pesticide() {
            if (Player.pesticides > 0) {
                Player.action = ACTION.PESTICIDE;
                document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPesticide.png) 50 50, auto";
            }
        }
        harvest() {
            Player.action = ACTION.HARVEST;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorHarvest.png) 50 50, auto";
        }
        plant(_value) {
            switch (_value) {
                case "pillow":
                    Player.plantAction = PLANTACTION.PILLOW;
                    break;
                case "teddy":
                    Player.plantAction = PLANTACTION.TEDDY;
                    break;
                case "blanket":
                    Player.plantAction = PLANTACTION.BLANKET;
                    break;
                case "scarf":
                    Player.plantAction = PLANTACTION.SCARF;
                    break;
                case "sock":
                    Player.plantAction = PLANTACTION.SOCK;
                    break;
            }
            Player.action = ACTION.PLANT;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPlant.png) 50 50, auto";
        }
    }
    GGSim.Player = Player;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Player.js.map