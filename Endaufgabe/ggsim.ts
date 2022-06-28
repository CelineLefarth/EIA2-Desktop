namespace GGSim{
window.addEventListener("load", handleLoad);

export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;
export let mouseX: number;
export let mouseY: number;

export let currentActionVis: HTMLElement;
export enum ACTION {
    FERTILIZE,
    HARVEST,
    WATER,
    PLANT,
    PESTICIDE,
    CLICK
} 
export let player: Player = new Player;
export let market: Market = new Market;

export let plants: Plant[] = [];
export let fields: Field[] = [];

function handleLoad(): void {
    console.log("GGSim");
    canvas = <HTMLCanvasElement>document.getElementById("field_canvas");
    canvas.width = 50.5 * 10;
    canvas.height = 51 * 4;
    ctx = canvas.getContext("2d");

    for (let j: number = 0; j < 4; j ++) {
    for (let i: number = 0; i < 10; i++) {
    fields.push(new Field(i, j));
    }
    }

    plants.push(new Plant(0, 0));
    plants.push(new Plant(1, 0));
    plants.push(new Plant(2, 0));
    plants.push(new Plant(3, 0));
    plants.push(new Plant(4, 0));
    plants.push(new Plant(5, 0));
 
    for (let field of fields) {
        field.draw();
    }


    for (let plant of plants) {
        plant.draw();
    }

    currentActionVis = document.getElementById("currentActionVis");
    const fertilizeBtn: HTMLElement = document.getElementById("fertilizeBtn");
    fertilizeBtn.addEventListener("click", player.fertilize);
    const harvestBtn: HTMLElement = document.getElementById("harvestBtn");
    harvestBtn.addEventListener("click", player.harvest);
    const waterBtn: HTMLElement = document.getElementById("waterBtn");
    waterBtn.addEventListener("click", player.water);
    const plantBtn: HTMLElement = document.getElementById("plantBtn");
    plantBtn.addEventListener("click", player.plant);
    const pesticideBtn: HTMLElement = document.getElementById("pesticideBtn");
    pesticideBtn.addEventListener("click", player.pesticide);

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




}