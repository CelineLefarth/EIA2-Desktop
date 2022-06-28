var GGSim;
(function (GGSim) {
    class Player {
        static action;
        money;
        fertilizer;
        pesticides;
        seeds;
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
        plant() {
            console.log("plant");
            Player.action = GGSim.ACTION.PLANT;
            GGSim.currentActionVis.innerHTML = "plant";
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