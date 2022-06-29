var GGSim;
(function (GGSim) {
    window.addEventListener("load", handleLoad);
    let shopOpen = false;
    let shop;
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
        GGSim.Simulation.run();
        GGSim.Simulation.update();
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
        shop = document.getElementById("shop");
        const shopBtn = document.getElementById("shopBtn");
        shopBtn.addEventListener("click", toggleShop);
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
    function toggleShop() {
        if (shopOpen == false) {
            shopOpen = true;
            const buyPesticides = document.createElement("button");
            const buyFertilizers = document.createElement("button");
            const buySeeds = document.createElement("button");
            buyPesticides.innerHTML = "Buy Pesticides";
            buyFertilizers.innerHTML = "Buy Fertilizers";
            buySeeds.innerHTML = "Buy Seeds";
            buyPesticides.addEventListener("click", boughtPesticides);
            buyFertilizers.addEventListener("click", boughtFertilizers);
            buySeeds.addEventListener("click", boughtSeeds);
            shop.appendChild(buyPesticides);
            shop.appendChild(buyFertilizers);
            shop.appendChild(buySeeds);
        }
        else if (shopOpen == true) {
            shopOpen = false;
            while (shop.firstChild) {
                shop.removeChild(shop.firstChild);
            }
        }
    }
    function boughtPesticides() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.money--;
            GGSim.Player.pesticides++;
            GGSim.Simulation.update();
        }
    }
    function boughtFertilizers() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.money--;
            GGSim.Player.fertilizer++;
            GGSim.Simulation.update();
        }
    }
    function boughtSeeds() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.money--;
            //Player.seeds ++;
            GGSim.Simulation.update();
        }
    }
})(GGSim || (GGSim = {}));
//# sourceMappingURL=ggsim.js.map