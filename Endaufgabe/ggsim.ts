namespace GGSim{
window.addEventListener("load", handleLoad);

export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;
export let canvasM: HTMLCanvasElement;
export let ctxM: CanvasRenderingContext2D;
export let mouseX: number;
export let mouseY: number;

export let settings: HTMLElement;
let settingsOpen: boolean = false;
let inventoryOpen: boolean = true;
let shopOpen: boolean = false;
let shop: HTMLElement;

export let currentActionVis: HTMLElement;
export let player: Player = new Player;
export let market: Market = new Market;

export let plants: Plant[] = [];
export let fields: Field[] = [];


function handleLoad(): void {
    console.log("GGSim");
    Asset.load();
    canvas = <HTMLCanvasElement>document.getElementById("field_canvas");
    canvasM = <HTMLCanvasElement>document.getElementById("market_canvas");
    canvas.width = 1010;
    canvas.height = 410;
    canvasM.width = 400;
    canvasM.height = 300;
    ctx = canvas.getContext("2d");
    ctxM = canvasM.getContext("2d");
    for (let j: number = 0; j < 4; j ++) {
    for (let i: number = 0; i < 10; i++) {
    fields.push(new Field(i, j));
    }
    }
 
    Simulation.run();
    Market.draw();
    Simulation.update();

    currentActionVis = document.getElementById("currentActionVis");
    const fertilizeBtn: HTMLElement = document.getElementById("fertilizeBtn");
    fertilizeBtn.addEventListener("click", player.fertilize);
    const harvestBtn: HTMLElement = document.getElementById("harvestBtn");
    harvestBtn.addEventListener("click", player.harvest);
    const waterBtn: HTMLElement = document.getElementById("waterBtn");
    waterBtn.addEventListener("click", player.water);
    let plantBtn: HTMLInputElement;
    plantBtn = <HTMLInputElement>document.getElementById("plantBtn");
    plantBtn.addEventListener("click", () => {player.plant(plantBtn.value); });
    const pesticideBtn: HTMLElement = document.getElementById("pesticideBtn");
    pesticideBtn.addEventListener("click", player.pesticide);
    
    shop = document.getElementById("shop");
    const shopBtn: HTMLElement = document.getElementById("shopBtn");
    shopBtn.addEventListener("click", toggleShop);
    settings = document.getElementById("settings");
    const settingsBtn: HTMLElement = document.getElementById("settingsBtn");
    settingsBtn.addEventListener("click", toggleSettings);
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
        const buyPesticides: HTMLButtonElement = document.createElement("button");
        const buyFertilizers: HTMLButtonElement = document.createElement("button");
        const buyPillow: HTMLButtonElement = document.createElement("button");
        const buyTeddy: HTMLButtonElement = document.createElement("button");
        const buyBlanket: HTMLButtonElement = document.createElement("button");
        const buyScarf: HTMLButtonElement = document.createElement("button");
        const buySock: HTMLButtonElement = document.createElement("button");
        buyPesticides.innerHTML = "Buy Pesticides";
        buyFertilizers.innerHTML = "Buy Fertilizers";
        buyPillow.innerHTML = "Buy Pillow";
        buyTeddy.innerHTML = "Buy Teddy";
        buyBlanket.innerHTML = "Buy Blanket";
        buyScarf.innerHTML = "Buy Scarf";
        buySock.innerHTML = "Buy Sock";
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

function boughtPesticides(): void {
    if (Player.money > 0) {
    Player.money = Player.money - Math.round(Market.price.costPesticides);
    Player.pesticides ++;
    Simulation.update();
    }
}

function boughtFertilizers(): void {
    if (Player.money > 0) {
    Player.money = Player.money - Math.round(Market.price.costFertilizer);
    Player.fertilizer ++;
    Simulation.update();
    }
}

function boughtPillow(): void {
    if (Player.money > 0) {
    Player.seeds[0].amount ++;
    Player.money --;
    Simulation.update();
    }
}

function boughtTeddy(): void {
    if (Player.money > 0) {
    Player.seeds[1].amount ++;
    Player.money --;
    Simulation.update();
    }
}

function boughtScarf(): void {
    if (Player.money > 0) {
    Player.seeds[2].amount ++;
    Player.money --;
    Simulation.update();
    }
}

function boughtBlanket(): void {
    if (Player.money > 0) {
    Player.seeds[3].amount ++;
    Player.money --;
    Simulation.update();
    }
}

function boughtSock(): void {
    if (Player.money > 0) {
    Player.seeds[4].amount ++;
    Player.money --;
    Simulation.update();
    }
}

}