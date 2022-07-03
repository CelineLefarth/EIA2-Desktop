var GGSim;
(function (GGSim) {
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["FERTILIZE"] = 0] = "FERTILIZE";
        ACTION[ACTION["HARVEST"] = 1] = "HARVEST";
        ACTION[ACTION["WATER"] = 2] = "WATER";
        ACTION[ACTION["PLANT"] = 3] = "PLANT";
        ACTION[ACTION["PESTICIDE"] = 4] = "PESTICIDE";
        ACTION[ACTION["CLICK"] = 5] = "CLICK";
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
        static money = 0;
        static fertilizer = 20;
        static pesticides = 20;
        static seeds = [{ type: PLANTACTION.PILLOW, amount: 0 }, { type: PLANTACTION.TEDDY, amount: 0 }, { type: PLANTACTION.SCARF, amount: 0 }, { type: PLANTACTION.BLANKET, amount: 0 }, { type: PLANTACTION.SOCK, amount: 0 }];
        constructor() {
            //
        }
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
        plant(_value) {
            console.log("plant");
            if (_value == "pillow") {
                Player.action = ACTION.PLANT;
                Player.plantAction = PLANTACTION.PILLOW;
            }
            else if (_value == "teddy") {
                Player.action = ACTION.PLANT;
                Player.plantAction = PLANTACTION.TEDDY;
            }
            else if (_value == "blanket") {
                Player.action = ACTION.PLANT;
                Player.plantAction = PLANTACTION.BLANKET;
            }
            else if (_value == "scarf") {
                Player.action = ACTION.PLANT;
                Player.plantAction = PLANTACTION.SCARF;
            }
            else if (_value == "sock") {
                Player.action = ACTION.PLANT;
                Player.plantAction = PLANTACTION.SOCK;
            }
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPlant.png) 50 50, auto";
        }
        pesticide() {
            if (Player.pesticides > 0) {
                console.log("pesticide");
                Player.action = ACTION.PESTICIDE;
                document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorPesticide.png) 50 50, auto";
            }
        }
        harvest() {
            console.log("harvest");
            Player.action = ACTION.HARVEST;
            document.querySelector("body").style.cursor = "url(../Endaufgabe/assets/CursorHarvest.png) 50 50, auto";
        }
    }
    GGSim.Player = Player;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Player.js.map