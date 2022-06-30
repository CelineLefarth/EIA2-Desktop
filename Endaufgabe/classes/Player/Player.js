var GGSim;
(function (GGSim) {
    class Player {
        static action;
        static money = 10;
        static fertilizer = 20;
        static pesticides = 20;
        static seeds = [{ type: "pillow", amount: 0 }, { type: "teddy", amount: 0 }, { type: "scarf", amount: 0 }, { type: "blanket", amount: 0 }, { type: "sock", amount: 0 }];
        constructor() {
            //
        }
        fertilize() {
            console.log("fertilize");
            Player.action = GGSim.ACTION.FERTILIZE;
            GGSim.currentActionVis.innerHTML = "fertilize";
            console.log(Player.action);
        }
        water() {
            console.log("water");
            Player.action = GGSim.ACTION.WATER;
            GGSim.currentActionVis.innerHTML = "water";
            console.log(Player.action);
        }
        plant(_value) {
            console.log("plant");
            if (_value == "pillow") {
                Player.action = GGSim.ACTION.PILLOW;
            }
            else if (_value == "teddy") {
                Player.action = GGSim.ACTION.TEDDY;
            }
            else if (_value == "blanket") {
                Player.action = GGSim.ACTION.BLANKET;
            }
            else if (_value == "scarf") {
                Player.action = GGSim.ACTION.SCARF;
            }
            else if (_value == "sock") {
                Player.action = GGSim.ACTION.SOCK;
            }
            GGSim.currentActionVis.innerHTML = _value;
            console.log(Player.action);
        }
        pesticide() {
            console.log("pesticide");
            Player.action = GGSim.ACTION.PESTICIDE;
            GGSim.currentActionVis.innerHTML = "pesticide";
            console.log(Player.action);
        }
        harvest() {
            console.log("harvest");
            Player.action = GGSim.ACTION.HARVEST;
            GGSim.currentActionVis.innerHTML = "harvest";
            console.log(Player.action);
        }
    }
    GGSim.Player = Player;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Player.js.map