var GGSim;
(function (GGSim) {
    class Player {
        money;
        fertilizer;
        pesticides;
        seeds;
        action = GGSim.ACTION.CLICK;
        constructor() {
            //
        }
        fertilize() {
            console.log("fertilize");
            this.action = GGSim.ACTION.FERTILIZE;
            GGSim.currentActionVis.innerHTML = "fertilize";
        }
        water() {
            console.log("water");
            this.action = GGSim.ACTION.WATER;
            GGSim.currentActionVis.innerHTML = "water";
        }
        plant() {
            console.log("plant");
            this.action = GGSim.ACTION.PLANT;
            GGSim.currentActionVis.innerHTML = "plant";
        }
        pesticide() {
            console.log("pesticide");
            this.action = GGSim.ACTION.PESTICIDE;
            GGSim.currentActionVis.innerHTML = "pesticide";
        }
        harvest() {
            console.log("harvest");
            this.action = GGSim.ACTION.HARVEST;
            GGSim.currentActionVis.innerHTML = "harvest";
        }
    }
    GGSim.Player = Player;
})(GGSim || (GGSim = {}));
//# sourceMappingURL=Player.js.map