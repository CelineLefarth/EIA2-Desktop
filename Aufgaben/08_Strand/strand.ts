namespace strand {
    window.addEventListener("load", hdlLoad);
    
    let animation: HTMLElement;
    let canvas: HTMLCanvasElement;
    let container: HTMLElement;
    let typeKeys: string[] = ["Walker", "green", "red", "Surfer", "Swimmer", "ship", "one", "two", "three", "sun"];
    let beachHitboxes: Hitbox[] = [];
    let beachObjects: BeachObject[] = [];
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
        startDrawing();
    }

    function wantToClickOnHitbox(_e: MouseEvent): void {
        let currentHitbox: number = 0;
        picked = false;
        const rect: DOMRect = canvas.getBoundingClientRect();   //<----//
        mouseX = _e.clientX - rect.left - (cw / 2);             //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
        mouseY = -1 * (_e.clientY - rect.top) + (ch / 2);       //<----//
        console.log(mouseX, mouseY);
        //Hier werden wie unten auch bei jedem click alle Hitboxen gelöscht und neue an den passenden Orten erstellt
        //So müssen sich die Hitboxen nicht die ganzezeit selbst neu erstellen bzw. mitverschieben sondern es werden nur bei einem click
        //alle Hitboxen gelöscht und neue an die für den Intervall passenden Stellen erstellt.
        //danach wird dann geguckt, ob der click eine der neuen Hitboxen getroffen hat etc.
        beachHitboxes = [];
        beachHitboxes.push(new Woman(-100, -300));
        beachHitboxes.push(new Crab(-200 + Math.cos(i / 10) * 80, -250));
        beachHitboxes.push(new Crab(150 + Math.sin(i / 10) * 80, -350));
        beachHitboxes.push(new Woman(200 + Math.sin(i / 80) * 300, -70 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2));
        beachHitboxes.push(new Woman(-300 + Math.sin(i / 40) * 150, -120 + 150 * Math.sin(i / 20) * -0.4));
        beachHitboxes.push(new Ship(1.5 * i + 900, 50));
        beachHitboxes.push(new Cloud(150 + 150 * Math.sin(i / 100) * -0.3, 300));
        beachHitboxes.push(new Cloud(450 + 150 * Math.sin(i / 100) * -0.3, 400));
        beachHitboxes.push(new Cloud(-350 + 150 * Math.sin(i / 100) * -0.3, 400));
        beachHitboxes.push(new Crab(-700 - i, 0 - 400 * Math.sin(i / 400)));

        for (let beachHitbox of beachHitboxes) {
            beachHitbox.interact(mouseX, mouseY, typeKeys[currentHitbox]);
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
        //Der Array in dem alle Objekte gespeichert werden, wird bei jedem neuen Intervall geleert. So entstehen keine doppelten Objekte
        beachObjects = [];
        beachObjects.push(new Sun(-700 - i, 0 - 400 * Math.sin(i / 400), 0, 1 * Math.sin(i / 500), 1 * Math.sin(i / 500), "#FABE0F"));
        beachObjects.push(new Cloud(0 + 150 * Math.sin(i / 100) * -0.3, 200, 1, 0.7, 0.7, cloudColor1));
        beachObjects.push(new Cloud(100 + 150 * Math.sin(i / 100) * -0.3, 250, 0, 1, 1, cloudColor1));
        beachObjects.push(new Cloud(400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, cloudColor2));
        beachObjects.push(new Cloud(-300 + 150 * Math.sin(i / 100) * -0.3, 380, 3.2, 0.3, 0.3, cloudColor3));
        beachObjects.push(new Cloud(-400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, cloudColor3));
        beachObjects.push(new Ship(1.5 * i + 600, -50 + i * titanicDrag, Math.sin(i / 50) * 0.05 + titanicTurn, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C"));
        beachObjects.push(new SurfBoard(200 + Math.sin(i / 80) * 300, - 150 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2 - 1.6, 0.7, 1.5));
        beachObjects.push(new Woman(200 + Math.sin(i / 80) * 300, -70 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2, 0.2, 0.2, surferWomanColor, "#506E00", "firebrick", 1, 1, -1, -1));
        beachObjects.push(new Woman(-300 + Math.sin(i / 40) * 150, -200 + 150 * Math.sin(i / 20) * -0.4, 0, 0.3, 0.3, swimmerWomanColor, "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2));
        beachObjects.push(new Ring(-300 + Math.sin(i / 40) * 150, -230 + 150 * Math.sin(i / 20) * -0.4, 0, 0.7, 0.7));
        beachObjects.push(new SandDune(-(cw / 2), -400 + 150, 0, 4, 2, "#F5D78C"));
        beachObjects.push(new Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), -1.3, 1 + Math.sin(i / 50) * 0.2, 1.5 + Math.sin(i / 50) * 0.2, "#EBC369", "#EBC369", i));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 1.3, 1 + Math.cos(i / 50) * 0.3, 1.5 + Math.cos(i / 50) * 0.3, "#EBC369", "#EBC369", i));
        beachObjects.push(new Crab(-200 + Math.cos(i / 10) * greenCrabSpeed, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Crab(150 + Math.sin(i / 10) * redCrabSpeed, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)"));
        beachObjects.push(new Crab(-200 + Math.cos(i / 10) * greenCrabSpeed, -250, 0, 1, 1, "olivedrab", "olive", i));
        beachObjects.push(new Crab(150 + Math.sin(i / 10) * redCrabSpeed, -350, 0, 0.8, 0.8, "tomato", "crimson", i));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "#733223", "#506E00", i));
        beachObjects.push(new Palm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "#733223", "#506E00", i));
        beachObjects.push(new Palm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i));
        beachObjects.push(new Woman(-100, -400, 0, 0.7, 0.7, walkerWomanColor, "#C81E23", "#232323", 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0));

        for (let beachObject of beachObjects) {
        beachObject.draw();
        }
        
        //Brightness
        //Der Tag resettet sich "wenn es zu dunkel ist". So Wird auch das Schifff und die Sonne Resettet
        let brightness: number = (Math.sin((300 + i) / 200) * 0.9);
        if (brightness > 0.8974159500672447) { i = 0; }
        //ctx.fillStyle = "rgba(10,0,10," + brightness  + ")";
        //ctx.fillRect(-(cw / 2), -(ch / 2), cw, ch);

    }
}