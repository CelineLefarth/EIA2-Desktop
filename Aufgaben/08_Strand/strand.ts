namespace strand {
    window.addEventListener("load", hdlLoad);
    
    let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
    let container: HTMLElement;
    export let cw: number;
    export let ch: number;
    export let path: Path2D;
    let mouseX: number;
    let mouseY: number;
    let animation: HTMLElement;

    //Laufvariabel für die Animationen
    export let i: number = 0;

    //Toggel Variabeln für die jeweiligen Objekte, ob sie schon angeklickt wurden (Wenn ja, dann werden sie auf true gestellt)
    export let picked: boolean = false;
    export let womanWalk: boolean = false;
    export let womanSwim: boolean = false;
    export let womanSurf: boolean = false;
    export let greenCrab: boolean = false;
    export let redCrab: boolean = false;
    export let ship: boolean = false;
    export let cloudOne: boolean = false;
    export let cloudTwo: boolean = false;
    export let cloudThree: boolean = false;
    export let sunCrab: boolean = false;

    //Change Variabeln
    export let cloudColor1: string = "#F5F5FF";
    export let cloudColor2: string = "#F5F5FF";
    export let cloudColor3: string = "#F5F5FF";
    export let redCrabSpeed: number = 80;
    export let greenCrabSpeed: number = 80;
    export let sunRotation: number = 1;
    export let titanicTurn: number = 0;
    export let titanicDirection: number = 1;
    export let titanicDrag: number = 0;
    export let walkerWomanColor: string = "#FFAAA5";
    export let surferWomanColor: string = "#FFD2D7";
    export let swimmerWomanColor: string = "#C87D5A";


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

        //Interaction Eventlistener (picked wird für jeden click einmalig resettet so, dass nur ein Objekt pro Klick angeklickt werden kann)
        canvas.addEventListener("click", (_e) => {
            picked = false;
            const rect: DOMRect = canvas.getBoundingClientRect();   //<----//
            mouseX = _e.clientX - rect.left - (cw / 2);             //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
            mouseY = -1 * (_e.clientY - rect.top) + (ch / 2);       //<----//
            console.log(mouseX, mouseY);
            if (womanWalk == false && picked == false) {
                let womanWalkerListener: Woman = new Woman(-100, -300);
                womanWalkerListener.click(mouseX, mouseY, "Walker");
            }
            if (greenCrab == false && picked == false) {
                let crabGreenListener: Crab = new Crab(-200 + Math.cos(i / 10) * 80, -250);
                crabGreenListener.click(mouseX, mouseY, "green");
            }
            if (redCrab == false && picked == false) {
                let crabRedListener: Crab = new Crab(150 + Math.sin(i / 10) * 80, -350);
                crabRedListener.click(mouseX, mouseY, "red");
            }
            if (womanSurf == false && picked == false) {
                let womanSurferListener: Woman = new Woman(200 + Math.sin(i / 80) * 300, -70 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2);
                womanSurferListener.click(mouseX, mouseY, "Surfer");
            }
            if (womanSwim == false && picked == false) {
                let womanSwimmerListener: Woman = new Woman(-300 + Math.sin(i / 40) * 150, -120 + 150 * Math.sin(i / 20) * -0.4);
                womanSwimmerListener.click(mouseX, mouseY, "Swimmer");
            }
            if (ship == false && picked == false) {
                let shipListener: Ship = new Ship(1.5 * i + 900, 50);
                shipListener.click(mouseX, mouseY);
            }
            if (cloudOne == false && picked == false) {
                let cloudOneListener: Cloud = new Cloud(150 + 150 * Math.sin(i / 100) * -0.3, 300);
                cloudOneListener.click(mouseX, mouseY, "one");
            }
            if (cloudTwo == false && picked == false) {
                let cloudTwoListener: Cloud = new Cloud(450 + 150 * Math.sin(i / 100) * -0.3, 400);
                cloudTwoListener.click(mouseX, mouseY, "two");
            }
            if (cloudThree == false && picked == false) {
                let cloudThreeListener: Cloud = new Cloud(-350 + 150 * Math.sin(i / 100) * -0.3, 400);
                cloudThreeListener.click(mouseX, mouseY, "three");
            }
            if (sunCrab == false && picked == false) {
                let sunListener: Crab = new Crab(-700 - i, 0 - 400 * Math.sin(i / 400));
                sunListener.click(mouseX, mouseY, "sun");
            }
        });

        startDrawing();
    }
    function startAnimation(): void {
        setInterval(startDrawing, 10);
        document.querySelector("main").removeChild(animation);
    }

    export function reset(): void {
        ctx.resetTransform();
        ctx.translate(cw / 2, ch / 2);
        ctx.scale(1, -1);
    }

    function startDrawing(): void {
        ctx.resetTransform();
        ctx.clearRect(0, 0, cw, ch);
        i--;
        Background.draw();
        reset();

        Sun.draw(-700 - i, 0 - 400 * Math.sin(i / 400), 0, 1 * Math.sin(i / 500), 1 * Math.sin(i / 500), "#FABE0F");

        let cloudOneSmall: Cloud = new Cloud(0 + 150 * Math.sin(i / 100) * -0.3, 200, 1, 0.7, 0.7, cloudColor1);
        cloudOneSmall.draw();
        let cloudOneBig: Cloud = new Cloud(100 + 150 * Math.sin(i / 100) * -0.3, 250, 0, 1, 1, cloudColor1);
        cloudOneBig.draw();
        let cloudTwoBig: Cloud = new Cloud(400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, cloudColor2);
        cloudTwoBig.draw();
        let cloudThreeSmall: Cloud = new Cloud(-300 + 150 * Math.sin(i / 100) * -0.3, 380, 3.2, 0.3, 0.3, cloudColor3);
        cloudThreeSmall.draw();
        let cloudThreeBig: Cloud = new Cloud(-400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, cloudColor3);
        cloudThreeBig.draw();

        let shipMain: Ship = new Ship(1.5 * i + 600, -50 + i * titanicDrag, Math.sin(i / 50) * 0.05 + titanicTurn, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C");
        shipMain.draw();
        //let shipShadow: Ship = new Ship(1.5 * i + 600, -50 + i * titanicDrag, Math.sin(i / 50) * 0.05 + titanicTurn, 2, -1, "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)");
        //shipShadow.draw();

        //Hide Titanic sinking 
        ctx.fillStyle = "#F5D78C";
        ctx.fillRect(- cw / 2, -320, cw, -ch);
        
        Waves.draw(i);

        let surfBoard: SurfBoard = new SurfBoard(200 + Math.sin(i / 80) * 300, - 150 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2 - 1.6, 0.7, 1.5);
        surfBoard.draw();

        let womanSurfer: Woman = new Woman(200 + Math.sin(i / 80) * 300, -70 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2, 0.2, 0.2, surferWomanColor, "#506E00", "firebrick", 1, 1, -1, -1);
        womanSurfer.draw();
        let womanSwimmer: Woman = new Woman(-300 + Math.sin(i / 40) * 150, -200 + 150 * Math.sin(i / 20) * -0.4, 0, 0.3, 0.3, swimmerWomanColor, "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2);
        womanSwimmer.draw();

        Ring.draw(-300 + Math.sin(i / 40) * 150, -230 + 150 * Math.sin(i / 20) * -0.4, 0, 0.7, 0.7);

        SandDune.draw(-(cw / 2), -400 + 150, 0, 4, 2, "#F5D78C");

        let womanWalkerShadow: Woman = new Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0);
        womanWalkerShadow.draw();

        let palmLeftBottomShadow: Palm = new Palm(-(cw / 2), -(ch / 2), -1.3, 1 + Math.sin(i / 50) * 0.2, 1.5 + Math.sin(i / 50) * 0.2, "#EBC369", "#EBC369", i);
        palmLeftBottomShadow.draw();
        let palmRightBottomShadow: Palm = new Palm((cw / 2), -(ch / 2), 1.3, 1 + Math.cos(i / 50) * 0.3, 1.5 + Math.cos(i / 50) * 0.3, "#EBC369", "#EBC369", i);
        palmRightBottomShadow.draw();

        let crabGreenShadow: Crab = new Crab(-200 + Math.cos(i / 10) * greenCrabSpeed, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        crabGreenShadow.draw();
        let crabRedShadow: Crab = new Crab(150 + Math.sin(i / 10) * redCrabSpeed, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        crabRedShadow.draw();

        let towelShadowTop: Towel = new Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)");
        towelShadowTop.draw();
        let towelShadowBottom: Towel = new Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)");
        towelShadowBottom.draw();
        let towelColor: Towel = new Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)");
        towelColor.draw();

        let crabGreen: Crab = new Crab(-200 + Math.cos(i / 10) * greenCrabSpeed, -250, 0, 1, 1, "olivedrab", "olive", i);
        crabGreen.draw();
        let crabRed: Crab = new Crab(150 + Math.sin(i / 10) * redCrabSpeed, -350, 0, 0.8, 0.8, "tomato", "crimson", i);
        crabRed.draw();

        let palmLeft: Palm = new Palm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "#733223", "#506E00", i);
        palmLeft.draw();
        let palmLeftShadow: Palm = new Palm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        palmLeftShadow.draw();
        let palmRight: Palm = new Palm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "#733223", "#506E00", i);
        palmRight.draw();
        let palmRightShadow: Palm = new Palm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        palmRightShadow.draw();

        let womanWalker: Woman = new Woman(-100, -400, 0, 0.7, 0.7, walkerWomanColor, "#C81E23", "#232323", 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0);
        womanWalker.draw();

        //Brightness
        let brightness: number = (Math.sin((300 + i) / 200) * 0.9);
        if (brightness > 0.8974159500672447) { i = 0; }
        //ctx.fillStyle = "rgba(10,0,10," + brightness  + ")";
        //ctx.fillRect(-(cw / 2), -(ch / 2), cw, ch);

    }
}

// draw(0, 0, 0, 1, 1);
// //Ein von mir erstelltes Template, um schneller die einzelnen Charaktere/Objekte zu erstellen
// function draw(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
//     ctx.translate(_mox, _moy);
//     ctx.rotate(_mor);
//     ctx.scale(_mosX, _mosY);
//     path = new Path2D;
//     path.moveTo(0, 0);

//     ctx.fillStyle = "";
//     ctx.fill(path);

//     reset();
// }