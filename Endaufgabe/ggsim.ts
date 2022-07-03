namespace GGSim {
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
    export let canvasM: HTMLCanvasElement;
    export let ctxM: CanvasRenderingContext2D;
    export let mouseX: number;
    export let mouseY: number;

    export let settings: HTMLElement;
    export let startMoney: HTMLInputElement;
    let settingsOpen: boolean = false;
    let inventoryOpen: boolean = true;
    let shopOpen: boolean = false;
    let shop: HTMLElement;

    export let player: Player = new Player;
    export let market: Market = new Market;

    export let plants: Plant[] = [];
    export let fields: Field[] = [];


    function handleLoad(): void {
        document.getElementById("startBtn").addEventListener("click", handleStart);
        settings = document.getElementById("settings");
        toggleSettings();
    }

    function handleStart(): void {
        if (startMoney.value && !isNaN(parseInt(startMoney.value))) {
            Player.money = parseInt(startMoney.value);
        }
        else {
            alert("Please fill in the start money amount!");
            return;
        }
        while (document.getElementById("settingsContainer").firstChild) {
            document.getElementById("settingsContainer").removeChild(document.getElementById("settingsContainer").firstChild);
        }
        console.log("GGSim");
        Asset.load();
        canvas = <HTMLCanvasElement>document.getElementById("field_canvas");
        canvasM = <HTMLCanvasElement>document.getElementById("market_canvas");
        canvas.width = 1100;
        canvas.height = 400;
        canvasM.width = 400;
        canvasM.height = 150;
        ctx = canvas.getContext("2d");
        ctxM = canvasM.getContext("2d");
        for (let j: number = 0; j < 4; j++) {
            for (let i: number = 0; i < 10; i++) {
                fields.push(new Field(i, j));
            }
        }

        Simulation.run();
        Market.draw();
        Simulation.update();

        const fertilizeBtn: HTMLElement = document.getElementById("fertilizeBtn");
        fertilizeBtn.addEventListener("click", player.fertilize);
        const harvestBtn: HTMLElement = document.getElementById("harvestBtn");
        harvestBtn.addEventListener("click", player.harvest);
        const waterBtn: HTMLElement = document.getElementById("waterBtn");
        waterBtn.addEventListener("click", player.water);
        let plantBtn: HTMLInputElement;
        plantBtn = <HTMLInputElement>document.getElementById("plantBtn");
        plantBtn.addEventListener("click", () => { player.plant(plantBtn.value); });
        const pesticideBtn: HTMLElement = document.getElementById("pesticideBtn");
        pesticideBtn.addEventListener("click", player.pesticide);

        shop = document.getElementById("shop");
        const shopBtn: HTMLElement = document.getElementById("shopBtn");
        shopBtn.addEventListener("click", toggleShop);
        const inventoryBtn: HTMLElement = document.getElementById("inventoryBtn");
        inventoryBtn.addEventListener("click", toggleInventory);

        canvas.addEventListener("click", (e) => getMousePos(canvas, e));
    }


    //https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas/17130415#17130415
    function getMousePos(_canvas: HTMLCanvasElement, _evt: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        mouseX = _evt.clientX - rect.left;
        mouseY = _evt.clientY - rect.top;
        console.log(mouseX, mouseY);

        for (let field of fields) {
            field.clicked(mouseX, mouseY);
        }

    }




    function toggleSettings(): void {
        if (settingsOpen == false) {
            settingsOpen = true;
            Market.manipulate();
            startMoney = document.createElement("input");
            startMoney.setAttribute("placeholder", "Set start Money");
            settings.appendChild(startMoney);
        }
        else if (settingsOpen == true) {
            settingsOpen = false;
            while (settings.firstChild) {
                settings.removeChild(settings.firstChild);
            }
        }
    }




    function toggleInventory(): void {
        if (inventoryOpen == false) {
            inventoryOpen = true;
            document.getElementById("inventory").style.visibility = "visible";
        }
        else if (inventoryOpen == true) {
            inventoryOpen = false;
            document.getElementById("inventory").style.visibility = "hidden";
        }
    }










    function toggleShop(): void {
        if (shopOpen == false) {
            shopOpen = true;

            // tslint:disable-next-line: quotemark
            let shopItemImages: string[] = ['<img class="visImg" src="../Endaufgabe/assets/Pesticide.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/Fertilizer.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/PillowImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/TeddyImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/BlanketImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/ScarfImg.png" width="100px" height="100px">', '<img class="visImg" src="../Endaufgabe/assets/SockImg.png" width="100px" height="100px">'];
            for (let currentShopItem: number = 0; currentShopItem < 7; currentShopItem++) {
                let shopItem: HTMLButtonElement = document.createElement("button");
                shopItem.innerHTML = shopItemImages[currentShopItem];
                shopItem.addEventListener("click", () => { boughtItem(currentShopItem); });
                shop.appendChild(shopItem);
            }
            function boughtItem(_currentShopItem: number): void {

                switch (_currentShopItem) {
                    case 0:
                        if (Player.money - Math.round(Market.price.costPesticides) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costPesticides);
                            Player.pesticides++;
                        }
                        break;
                    case 1:
                        if (Player.money - Math.round(Market.price.costFertilizer) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costFertilizer);
                            Player.fertilizer++;
                        }
                        break;
                    case 2:
                        if (Player.money - Math.round(Market.price.costPillow) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costPillow);
                            Player.seeds[0].amount++;
                        }
                        break;
                    case 3:
                        if (Player.money - Math.round(Market.price.costTeddy) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costTeddy);
                            Player.seeds[1].amount++;
                        }
                        break;
                    case 4:
                        if (Player.money - Math.round(Market.price.costScarf) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costScarf);
                            Player.seeds[2].amount++;
                        }
                        break;
                    case 5:
                        if (Player.money - Math.round(Market.price.costBlanket) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costBlanket);
                            Player.seeds[3].amount++;
                        }
                        break;
                    case 6:
                        if (Player.money - Math.round(Market.price.costSocks) >= 0) {
                            Player.money = Player.money - Math.round(Market.price.costSocks);
                            Player.seeds[4].amount++;
                        }
                        break;
                }
                Simulation.update();
            }
        }
        else if (shopOpen == true) {
            shopOpen = false;
            while (shop.firstChild) {
                shop.removeChild(shop.firstChild);
            }
        }
    }

}