namespace strand {
    window.addEventListener("load", hdlLoad);
    
    let animation: HTMLElement;
    let canvas: HTMLCanvasElement;
    let container: HTMLElement;
    export let beachObjects: BeachObject[] = [];
    let currentHitbox: number = 0;
    export let ctx: CanvasRenderingContext2D;
    export let cw: number;
    export let ch: number;
    export let path: Path2D;
    export let mouseX: number;
    export let mouseY: number;
    export let picked: boolean = false;

    //Laufvariabel für die Animationen
    export let i: number = 0;

    function startAnimation(): void {
        setInterval(startDrawing, 10);
        document.querySelector("main").removeChild(animation);
    }

    export function reset(): void {
        ctx.resetTransform();
        ctx.translate(cw / 2, ch / 2);
        ctx.scale(1, -1);
    }

    function hdlLoad(): void {
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.height = 1920;
        canvas.width = 1080;
        ch = canvas.height;
        cw = canvas.width;
        container = document.querySelector("#container");
        container.appendChild(canvas);
        animation = document.createElement("span");
        animation.innerHTML = "Animation";
        animation.addEventListener("click", startAnimation);
        document.querySelector("main").appendChild(animation);
        canvas.addEventListener("click", (e) => { wantToClickOnHitbox(e); });
        beachObjects = [];
        beachObjects.push(new Sun(-700, 0, 0, 0, 0, "#FABE0F"));
        //beachObjects.push(new Cloud(0, 200, 1, 0.7, 0.7, "#F5F5FF"));
        beachObjects.push(new Cloud(100, 250, 0, 1, 1, "#F5F5FF"));
        beachObjects.push(new Cloud(400, 400, 0, 0.5, 0.5, "#F5F5FF"));
        //beachObjects.push(new Cloud(-300, 380, 3.2, 0.3, 0.3, "#F5F5FF"));
        beachObjects.push(new Cloud(-400, 400, 0, 0.5, 0.5, "#F5F5FF"));
        beachObjects.push(new Ship(600, -50, 0, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C"));
        beachObjects.push(new SurfBoard(200, -150, -1.6, 0.7, 1.5));
        beachObjects.push(new Woman(200, -70, 0, 0.2, 0.2, "#FFD2D7", "#506E00", "firebrick", 1, 1, -1, -1));
        beachObjects.push(new Woman(-300, -200, 0, 0.3, 0.3, "#C87D5A", "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2));
        beachObjects.push(new Ring(-300, -230, 0, 0.7, 0.7));
        beachObjects.push(new SandDune(-(cw / 2), -400 + 150, 0, 4, 2, "#F5D78C"));
        //beachObjects.push(new Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6, 0.5, -0.2, 0));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 1.3, 1, 1.5, "#EBC369", "#EBC369", i));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), -1.3, 1, 1.5, "#EBC369", "#EBC369", i));
        //beachObjects.push(new Crab(-200, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i, "green", 80));
        //beachObjects.push(new Crab(150, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i, "red", 80));
        beachObjects.push(new Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)"));
        beachObjects.push(new Crab(-200, -250, 0, 1, 1, "olivedrab", "olive", i, "green", 80));
        beachObjects.push(new Crab(50, -350, 0, 0.8, 0.8, "tomato", "crimson", i, "red", 80));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), 0, 4, 4.5, "#733223", "#506E00", i));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), 0, 4, 4.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 0, 3, 4.5, "#733223", "#506E00", i));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 0, 3, 4.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Woman(-100, -400, 0, 0.7, 0.7, "#FFAAA5", "#C81E23", "#232323", 1.6, 0.5, -0.2, 0, 0, 0, 0, 0));

        startDrawing();
    }

    function wantToClickOnHitbox(_e: MouseEvent): void {
        picked = false;
        const rect: DOMRect = canvas.getBoundingClientRect();   //<----//
        mouseX = _e.clientX - rect.left - (cw / 2);             //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
        mouseY = -1 * (_e.clientY - rect.top) + (ch / 2);       //<----//
        console.log(mouseX, mouseY);

        currentHitbox = 0;
        for (let beachObject: number = beachObjects.length - 1; beachObject >= 0; beachObject--) {
        beachObjects[beachObject].interact(mouseX, mouseY);
        currentHitbox++;
        }

         }

    function startDrawing(): void {
        ctx.resetTransform();
        ctx.clearRect(0, 0, cw, ch);
        i--;
        Background.draw();
        Wave.draw(i);
        reset();
        for (let beachObject of beachObjects) {
        beachObject.draw();
        beachObject.move();
        }
        
        //Brightness
        //Der Tag resettet sich "wenn es zu dunkel ist". So Wird auch das Schifff und die Sonne Resettet
        let brightness: number = (Math.sin((300 + i) / 200) * 0.9);
        if (brightness > 0.8974159500672447) { i = 0; }
        //ctx.fillStyle = "rgba(10,0,10," + brightness  + ")";
        //ctx.fillRect(-(cw / 2), -(ch / 2), cw, ch);

    }
}