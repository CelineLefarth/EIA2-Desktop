var GGSim;
(function (GGSim) {
    window.addEventListener("load", handleLoad);
    let ACTION;
    (function (ACTION) {
        ACTION[ACTION["FERTILIZE"] = 0] = "FERTILIZE";
        ACTION[ACTION["HARVEST"] = 1] = "HARVEST";
        ACTION[ACTION["WATER"] = 2] = "WATER";
        ACTION[ACTION["PLANT"] = 3] = "PLANT";
        ACTION[ACTION["PESTICIDE"] = 4] = "PESTICIDE";
        ACTION[ACTION["CLICK"] = 5] = "CLICK";
    })(ACTION = GGSim.ACTION || (GGSim.ACTION = {}));
    GGSim.player = new GGSim.Player;
    GGSim.market = new GGSim.Market;
    GGSim.plants = [];
    GGSim.fields = [];
    function handleLoad() {
        console.log("GGSim");
        GGSim.canvas = document.getElementById("field_canvas");
        GGSim.canvas.width = 50.5 * 10;
        GGSim.canvas.height = 51 * 4;
        GGSim.ctx = GGSim.canvas.getContext("2d");
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 10; i++) {
                GGSim.fields.push(new GGSim.Field(i, j));
            }
        }
        for (let field of GGSim.fields) {
            field.draw();
        }
        GGSim.currentActionVis = document.getElementById("currentActionVis");
        const fertilizeBtn = document.getElementById("fertilizeBtn");
        fertilizeBtn.addEventListener("click", GGSim.player.fertilize);
        const harvestBtn = document.getElementById("harvestBtn");
        harvestBtn.addEventListener("click", GGSim.player.harvest);
        const waterBtn = document.getElementById("waterBtn");
        waterBtn.addEventListener("click", GGSim.player.water);
        const plantBtn = document.getElementById("plantBtn");
        plantBtn.addEventListener("click", GGSim.player.plant);
        const pesticideBtn = document.getElementById("pesticideBtn");
        pesticideBtn.addEventListener("click", GGSim.player.pesticide);
        GGSim.canvas.addEventListener("click", (e) => getMousePos(GGSim.canvas, e));
    }
    //https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas/17130415#17130415
    function getMousePos(_canvas, _evt) {
        let rect = GGSim.canvas.getBoundingClientRect();
        GGSim.mouseX = _evt.clientX - rect.left;
        GGSim.mouseY = _evt.clientY - rect.top;
        console.log(GGSim.mouseX, GGSim.mouseY);
        for (let field of GGSim.fields) {
            field.clicked(GGSim.mouseX, GGSim.mouseY);
        }
    }
})(GGSim || (GGSim = {}));
//# sourceMappingURL=ggsim.js.map