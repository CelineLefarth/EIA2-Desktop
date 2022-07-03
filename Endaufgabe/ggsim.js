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
        document.getElementById("startBtn").addEventListener("click", handleStart);
        GGSim.settings = document.getElementById("settings");
        toggleSettings();
    }
    function handleStart() {
        if (GGSim.startMoney.value && !isNaN(parseInt(GGSim.startMoney.value))) {
            GGSim.Player.money = parseInt(GGSim.startMoney.value);
        }
        else {
            alert("Please fill in the start money amount!");
            return;
        }
        while (document.getElementById("settingsContainer").firstChild) {
            document.getElementById("settingsContainer").removeChild(document.getElementById("settingsContainer").firstChild);
        }
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
            GGSim.startMoney = document.createElement("input");
            GGSim.startMoney.setAttribute("placeholder", "Set start Money");
            GGSim.settings.appendChild(GGSim.startMoney);
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
            // tslint:disable-next-line: quotemark
            let shopItemImages = ['<img class="visImg" src="../Endaufgabe/assets/Pesticide.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/Fertilizer.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/PillowImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/TeddyImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/BlanketImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/ScarfImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/SockImg.png" width="100px" height="100px">'];
            for (let currentShopItem = 0; currentShopItem < 7; currentShopItem++) {
                let shopItem = document.createElement("button");
                shopItem.innerHTML = shopItemImages[currentShopItem];
                shopItem.addEventListener("click", () => { boughtItem(currentShopItem); });
                shop.appendChild(shopItem);
            }
            function boughtItem(_currentShopItem) {
                switch (_currentShopItem) {
                    case 0:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costPesticides) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costPesticides);
                            GGSim.Player.pesticides++;
                        }
                        break;
                    case 1:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costFertilizer) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costFertilizer);
                            GGSim.Player.fertilizer++;
                        }
                        break;
                    case 2:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costPillow) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costPillow);
                            GGSim.Player.seeds[0].amount++;
                        }
                        break;
                    case 3:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costTeddy) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costTeddy);
                            GGSim.Player.seeds[1].amount++;
                        }
                        break;
                    case 4:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costScarf) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costScarf);
                            GGSim.Player.seeds[2].amount++;
                        }
                        break;
                    case 5:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costBlanket) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costBlanket);
                            GGSim.Player.seeds[3].amount++;
                        }
                        break;
                    case 6:
                        if (GGSim.Player.money - Math.round(GGSim.Market.price.costSocks) >= 0) {
                            GGSim.Player.money = GGSim.Player.money - Math.round(GGSim.Market.price.costSocks);
                            GGSim.Player.seeds[4].amount++;
                        }
                        break;
                }
                GGSim.Simulation.update();
            }
        }
        else if (shopOpen == true) {
            shopOpen = false;
            while (shop.firstChild) {
                shop.removeChild(shop.firstChild);
            }
        }
    }
})(GGSim || (GGSim = {}));
//# sourceMappingURL=ggsim.js.map