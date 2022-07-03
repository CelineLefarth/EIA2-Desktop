var GGSim;
(function (GGSim) {
    window.addEventListener("load", handleLoad);
    let settingsOpen = false;
    let inventoryOpen = true;
    let shopOpen = false;
    let shop;
    GGSim.player = new GGSim.Player;
    GGSim.market = new GGSim.Market;
    GGSim.plants = [];
    GGSim.fields = [];
    function handleLoad() {
        console.log("GGSim");
        GGSim.Asset.load();
        GGSim.canvas = document.getElementById("field_canvas");
        GGSim.canvasM = document.getElementById("market_canvas");
        GGSim.canvas.width = 1100;
        GGSim.canvas.height = 400;
        GGSim.canvasM.width = 400;
        GGSim.canvasM.height = 300;
        GGSim.ctx = GGSim.canvas.getContext("2d");
        GGSim.ctxM = GGSim.canvasM.getContext("2d");
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 10; i++) {
                GGSim.fields.push(new GGSim.Field(i, j));
            }
        }
        GGSim.Simulation.run();
        GGSim.Market.draw();
        GGSim.Simulation.update();
        GGSim.currentActionVis = document.getElementById("currentActionVis");
        const fertilizeBtn = document.getElementById("fertilizeBtn");
        fertilizeBtn.addEventListener("click", GGSim.player.fertilize);
        const harvestBtn = document.getElementById("harvestBtn");
        harvestBtn.addEventListener("click", GGSim.player.harvest);
        const waterBtn = document.getElementById("waterBtn");
        waterBtn.addEventListener("click", GGSim.player.water);
        let plantBtn;
        plantBtn = document.getElementById("plantBtn");
        plantBtn.addEventListener("click", () => { GGSim.player.plant(plantBtn.value); });
        const pesticideBtn = document.getElementById("pesticideBtn");
        pesticideBtn.addEventListener("click", GGSim.player.pesticide);
        shop = document.getElementById("shop");
        const shopBtn = document.getElementById("shopBtn");
        shopBtn.addEventListener("click", toggleShop);
        GGSim.settings = document.getElementById("settings");
        const settingsBtn = document.getElementById("settingsBtn");
        settingsBtn.addEventListener("click", toggleSettings);
        const inventoryBtn = document.getElementById("inventoryBtn");
        inventoryBtn.addEventListener("click", toggleInventory);
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
    function toggleSettings() {
        if (settingsOpen == false) {
            settingsOpen = true;
            GGSim.Market.manipulate();
        }
        else if (settingsOpen == true) {
            settingsOpen = false;
            while (GGSim.settings.firstChild) {
                GGSim.settings.removeChild(GGSim.settings.firstChild);
            }
        }
    }
    function toggleInventory() {
        if (inventoryOpen == false) {
            inventoryOpen = true;
            document.getElementById("inventory").style.visibility = "visible";
        }
        else if (inventoryOpen == true) {
            inventoryOpen = false;
            document.getElementById("inventory").style.visibility = "hidden";
        }
    }
    function toggleShop() {
        if (shopOpen == false) {
            shopOpen = true;
            const buyPesticides = document.createElement("button");
            const buyFertilizers = document.createElement("button");
            const buyPillow = document.createElement("button");
            const buyTeddy = document.createElement("button");
            const buyBlanket = document.createElement("button");
            const buyScarf = document.createElement("button"); //Ich benutze noch den aus EIA1
            const buySock = document.createElement("button"); // tslint:disable-next-line: quotemark
            buyPesticides.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/Pesticide.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyFertilizers.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/Fertilizer.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyPillow.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/PillowImg.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyTeddy.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/TeddyImg.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyBlanket.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/BlanketImg.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyScarf.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/ScarfImg.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buySock.innerHTML = '<img class="visImg" src="../Endaufgabe/assets/SockImg.png" width="100px" height="100px">'; // tslint:disable-next-line: quotemark
            buyPesticides.addEventListener("click", boughtPesticides);
            buyFertilizers.addEventListener("click", boughtFertilizers);
            buyPillow.addEventListener("click", boughtPillow);
            buyTeddy.addEventListener("click", boughtTeddy);
            buyBlanket.addEventListener("click", boughtBlanket);
            buyScarf.addEventListener("click", boughtScarf);
            buySock.addEventListener("click", boughtSock);
            shop.appendChild(buyPesticides);
            shop.appendChild(buyFertilizers);
            shop.appendChild(buyPillow);
            shop.appendChild(buyTeddy);
            shop.appendChild(buyBlanket);
            shop.appendChild(buyScarf);
            shop.appendChild(buySock);
        }
        else if (shopOpen == true) {
            shopOpen = false;
            while (shop.firstChild) {
                shop.removeChild(shop.firstChild);
            }
        }
    }
    function boughtPesticides() {
        if (GGSim.Player.money - Math.round(GGSim.Market.price.costPesticides) >= 0) {
            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costPesticides);
            GGSim.Player.pesticides++;
            GGSim.Simulation.update();
        }
    }
    function boughtFertilizers() {
        if (GGSim.Player.money - Math.round(GGSim.Market.price.costFertilizer) >= 0) {
            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costFertilizer);
            GGSim.Player.fertilizer++;
            GGSim.Simulation.update();
        }
    }
    function boughtPillow() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.seeds[0].amount++;
            GGSim.Player.money--;
            GGSim.Simulation.update();
        }
    }
    function boughtTeddy() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.seeds[1].amount++;
            GGSim.Player.money--;
            GGSim.Simulation.update();
        }
    }
    function boughtScarf() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.seeds[2].amount++;
            GGSim.Player.money--;
            GGSim.Simulation.update();
        }
    }
    function boughtBlanket() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.seeds[3].amount++;
            GGSim.Player.money--;
            GGSim.Simulation.update();
        }
    }
    function boughtSock() {
        if (GGSim.Player.money > 0) {
            GGSim.Player.seeds[4].amount++;
            GGSim.Player.money--;
            GGSim.Simulation.update();
        }
    }
})(GGSim || (GGSim = {}));
//# sourceMappingURL=ggsim.js.map