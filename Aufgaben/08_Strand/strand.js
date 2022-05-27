var strand;
(function (strand) {
    window.addEventListener("load", hdlLoad);
    let canvas;
    let container;
    let mouseX;
    let mouseY;
    let animation;
    //Laufvariabel für die Animationen
    strand.i = 0;
    //Toggel Variabeln für die jeweiligen Objekte, ob sie schon angeklickt wurden (Wenn ja, dann werden sie auf true gestellt)
    // All die vielen exporte sind für die Interaktion. Ich habe sie absichtlich noch nicht im Construktor mitgegeben, falls sich
    // das später noch ändert, wie wir die Interaktion umsetzten sollen, damit ich nicht 50 verschiedene Übergaben abändern muss.
    strand.picked = false;
    strand.womanWalk = false;
    strand.womanSwim = false;
    strand.womanSurf = false;
    strand.greenCrab = false;
    strand.redCrab = false;
    strand.ship = false;
    strand.cloudOne = false;
    strand.cloudTwo = false;
    strand.cloudThree = false;
    strand.sunCrab = false;
    //Change Variabeln
    strand.cloudColor1 = "#F5F5FF";
    strand.cloudColor2 = "#F5F5FF";
    strand.cloudColor3 = "#F5F5FF";
    strand.redCrabSpeed = 80;
    strand.greenCrabSpeed = 80;
    strand.sunRotation = 1;
    strand.titanicTurn = 0;
    strand.titanicDirection = 1;
    strand.titanicDrag = 0;
    strand.walkerWomanColor = "#FFAAA5";
    strand.surferWomanColor = "#FFD2D7";
    strand.swimmerWomanColor = "#C87D5A";
    //Ende der vielen exports für die Interactionen
    function hdlLoad() {
        canvas = document.createElement("canvas");
        strand.ctx = canvas.getContext("2d");
        canvas.height = 1920;
        canvas.width = 1080;
        strand.ch = canvas.height;
        strand.cw = canvas.width;
        container = document.querySelector("#container");
        container.appendChild(canvas);
        animation = document.createElement("span");
        animation.innerHTML = "Animation";
        animation.addEventListener("click", startAnimation);
        document.querySelector("main").appendChild(animation);
        //Interaction Eventlistener (picked wird für jeden click einmalig resettet so, dass nur ein Objekt pro Klick angeklickt werden kann)
        canvas.addEventListener("click", (_e) => {
            strand.picked = false;
            const rect = canvas.getBoundingClientRect(); //<----//
            mouseX = _e.clientX - rect.left - (strand.cw / 2); //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
            mouseY = -1 * (_e.clientY - rect.top) + (strand.ch / 2); //<----//
            console.log(mouseX, mouseY);
            if (strand.womanWalk == false && strand.picked == false) {
                let womanWalkerListener = new strand.Woman(-100, -300);
                womanWalkerListener.interact(mouseX, mouseY, "Walker"); //Ich erstelle eine "Geisterinstanz", welche auf die Interaktion wartet
            }
            if (strand.greenCrab == false && strand.picked == false) {
                let crabGreenListener = new strand.Crab(-200 + Math.cos(strand.i / 10) * 80, -250);
                crabGreenListener.interact(mouseX, mouseY, "green");
            }
            if (strand.redCrab == false && strand.picked == false) {
                let crabRedListener = new strand.Crab(150 + Math.sin(strand.i / 10) * 80, -350);
                crabRedListener.interact(mouseX, mouseY, "red");
            }
            if (strand.womanSurf == false && strand.picked == false) {
                let womanSurferListener = new strand.Woman(200 + Math.sin(strand.i / 80) * 300, -70 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2);
                womanSurferListener.interact(mouseX, mouseY, "Surfer");
            }
            if (strand.womanSwim == false && strand.picked == false) {
                let womanSwimmerListener = new strand.Woman(-300 + Math.sin(strand.i / 40) * 150, -120 + 150 * Math.sin(strand.i / 20) * -0.4);
                womanSwimmerListener.interact(mouseX, mouseY, "Swimmer");
            }
            if (strand.ship == false && strand.picked == false) {
                let shipListener = new strand.Ship(1.5 * strand.i + 900, 50);
                shipListener.interact(mouseX, mouseY);
            }
            if (strand.cloudOne == false && strand.picked == false) {
                let cloudOneListener = new strand.Cloud(150 + 150 * Math.sin(strand.i / 100) * -0.3, 300);
                cloudOneListener.interact(mouseX, mouseY, "one");
            }
            if (strand.cloudTwo == false && strand.picked == false) {
                let cloudTwoListener = new strand.Cloud(450 + 150 * Math.sin(strand.i / 100) * -0.3, 400);
                cloudTwoListener.interact(mouseX, mouseY, "two");
            }
            if (strand.cloudThree == false && strand.picked == false) {
                let cloudThreeListener = new strand.Cloud(-350 + 150 * Math.sin(strand.i / 100) * -0.3, 400);
                cloudThreeListener.interact(mouseX, mouseY, "three");
            }
            if (strand.sunCrab == false && strand.picked == false) {
                let sunListener = new strand.Crab(-700 - strand.i, 0 - 400 * Math.sin(strand.i / 400));
                sunListener.interact(mouseX, mouseY, "sun");
            }
        });
        startDrawing();
    }
    function startAnimation() {
        setInterval(startDrawing, 10);
        document.querySelector("main").removeChild(animation);
    }
    function reset() {
        strand.ctx.resetTransform();
        strand.ctx.translate(strand.cw / 2, strand.ch / 2);
        strand.ctx.scale(1, -1);
    }
    strand.reset = reset;
    function startDrawing() {
        strand.ctx.resetTransform();
        strand.ctx.clearRect(0, 0, strand.cw, strand.ch);
        strand.i--;
        strand.Background.draw();
        reset();
        strand.Sun.draw(-700 - strand.i, 0 - 400 * Math.sin(strand.i / 400), 0, 1 * Math.sin(strand.i / 500), 1 * Math.sin(strand.i / 500), "#FABE0F");
        let cloudOneSmall = new strand.Cloud(0 + 150 * Math.sin(strand.i / 100) * -0.3, 200, 1, 0.7, 0.7, strand.cloudColor1);
        cloudOneSmall.draw();
        let cloudOneBig = new strand.Cloud(100 + 150 * Math.sin(strand.i / 100) * -0.3, 250, 0, 1, 1, strand.cloudColor1);
        cloudOneBig.draw();
        let cloudTwoBig = new strand.Cloud(400 + 150 * Math.sin(strand.i / 100) * -0.3, 400, 0, 0.5, 0.5, strand.cloudColor2);
        cloudTwoBig.draw();
        let cloudThreeSmall = new strand.Cloud(-300 + 150 * Math.sin(strand.i / 100) * -0.3, 380, 3.2, 0.3, 0.3, strand.cloudColor3);
        cloudThreeSmall.draw();
        let cloudThreeBig = new strand.Cloud(-400 + 150 * Math.sin(strand.i / 100) * -0.3, 400, 0, 0.5, 0.5, strand.cloudColor3);
        cloudThreeBig.draw();
        let shipMain = new strand.Ship(1.5 * strand.i + 600, -50 + strand.i * strand.titanicDrag, Math.sin(strand.i / 50) * 0.05 + strand.titanicTurn, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C");
        shipMain.draw();
        //let shipShadow: Ship = new Ship(1.5 * i + 600, -50 + i * titanicDrag, Math.sin(i / 50) * 0.05 + titanicTurn, 2, -1, "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)");
        //shipShadow.draw();
        //Hide Titanic sinking 
        strand.ctx.fillStyle = "#F5D78C";
        strand.ctx.fillRect(-strand.cw / 2, -320, strand.cw, -strand.ch);
        strand.Waves.draw(strand.i);
        let surfBoard = new strand.SurfBoard(200 + Math.sin(strand.i / 80) * 300, -150 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2 - 1.6, 0.7, 1.5);
        surfBoard.draw();
        let womanSurfer = new strand.Woman(200 + Math.sin(strand.i / 80) * 300, -70 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2, 0.2, 0.2, strand.surferWomanColor, "#506E00", "firebrick", 1, 1, -1, -1);
        womanSurfer.draw();
        let womanSwimmer = new strand.Woman(-300 + Math.sin(strand.i / 40) * 150, -200 + 150 * Math.sin(strand.i / 20) * -0.4, 0, 0.3, 0.3, strand.swimmerWomanColor, "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2);
        womanSwimmer.draw();
        strand.Ring.draw(-300 + Math.sin(strand.i / 40) * 150, -230 + 150 * Math.sin(strand.i / 20) * -0.4, 0, 0.7, 0.7);
        strand.SandDune.draw(-(strand.cw / 2), -400 + 150, 0, 4, 2, "#F5D78C");
        let womanWalkerShadow = new strand.Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6 + Math.sin(strand.i / 30) * 0.5, 0.5 + Math.sin(strand.i / 30) * 0.5, -0.2, 0);
        womanWalkerShadow.draw();
        let palmLeftBottomShadow = new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), -1.3, 1 + Math.sin(strand.i / 50) * 0.2, 1.5 + Math.sin(strand.i / 50) * 0.2, "#EBC369", "#EBC369", strand.i);
        palmLeftBottomShadow.draw();
        let palmRightBottomShadow = new strand.Palm((strand.cw / 2), -(strand.ch / 2), 1.3, 1 + Math.cos(strand.i / 50) * 0.3, 1.5 + Math.cos(strand.i / 50) * 0.3, "#EBC369", "#EBC369", strand.i);
        palmRightBottomShadow.draw();
        let crabGreenShadow = new strand.Crab(-200 + Math.cos(strand.i / 10) * strand.greenCrabSpeed, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i);
        crabGreenShadow.draw();
        let crabRedShadow = new strand.Crab(150 + Math.sin(strand.i / 10) * strand.redCrabSpeed, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i);
        crabRedShadow.draw();
        let towelShadowTop = new strand.Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)");
        towelShadowTop.draw();
        let towelShadowBottom = new strand.Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)");
        towelShadowBottom.draw();
        let towelColor = new strand.Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)");
        towelColor.draw();
        let crabGreen = new strand.Crab(-200 + Math.cos(strand.i / 10) * strand.greenCrabSpeed, -250, 0, 1, 1, "olivedrab", "olive", strand.i);
        crabGreen.draw();
        let crabRed = new strand.Crab(150 + Math.sin(strand.i / 10) * strand.redCrabSpeed, -350, 0, 0.8, 0.8, "tomato", "crimson", strand.i);
        crabRed.draw();
        let palmLeft = new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4 + Math.sin(strand.i / 50) * 0.2, 4.5 + Math.sin(strand.i / 50) * 0.2, "#733223", "#506E00", strand.i);
        palmLeft.draw();
        let palmLeftShadow = new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4 + Math.sin(strand.i / 50) * 0.2, 4.5 + Math.sin(strand.i / 50) * 0.2, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i);
        palmLeftShadow.draw();
        let palmRight = new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3 + Math.cos(strand.i / 50) * 0.3, 4.5 + Math.cos(strand.i / 50) * 0.3, "#733223", "#506E00", strand.i);
        palmRight.draw();
        let palmRightShadow = new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3 + Math.cos(strand.i / 50) * 0.3, 4.5 + Math.cos(strand.i / 50) * 0.3, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i);
        palmRightShadow.draw();
        let womanWalker = new strand.Woman(-100, -400, 0, 0.7, 0.7, strand.walkerWomanColor, "#C81E23", "#232323", 1.6 + Math.sin(strand.i / 30) * 0.5, 0.5 + Math.sin(strand.i / 30) * 0.5, -0.2, 0);
        womanWalker.draw();
        //Brightness
        //Der Tag resettet sich "wenn es zu dunkel ist". So Wird auch das Schifff und die Sonne Resettet
        let brightness = (Math.sin((300 + strand.i) / 200) * 0.9);
        if (brightness > 0.8974159500672447) {
            strand.i = 0;
        }
        //ctx.fillStyle = "rgba(10,0,10," + brightness  + ")";
        //ctx.fillRect(-(cw / 2), -(ch / 2), cw, ch);
    }
})(strand || (strand = {}));
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
//# sourceMappingURL=strand.js.map