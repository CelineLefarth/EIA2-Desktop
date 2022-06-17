var strand;
(function (strand) {
    window.addEventListener("load", hdlLoad);
    let animation;
    let canvas;
    let container;
    let typeKeys = ["Walker", "green", "red", "Surfer", "Swimmer", "ship", "one", "two", "three", "sun"];
    let beachHitboxes = [];
    let beachObjects = [];
    strand.picked = false;
    //Laufvariabel für die Animationen
    strand.i = 0;
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
        canvas.addEventListener("click", (e) => { wantToClickOnHitbox(e); });
        startDrawing();
    }
    function wantToClickOnHitbox(_e) {
        let currentHitbox = 0;
        strand.picked = false;
        const rect = canvas.getBoundingClientRect(); //<----//
        strand.mouseX = _e.clientX - rect.left - (strand.cw / 2); //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
        strand.mouseY = -1 * (_e.clientY - rect.top) + (strand.ch / 2); //<----//
        console.log(strand.mouseX, strand.mouseY);
        //Hier werden wie unten auch bei jedem click alle Hitboxen gelöscht und neue an den passenden Orten erstellt
        //So müssen sich die Hitboxen nicht die ganzezeit selbst neu erstellen bzw. mitverschieben sondern es werden nur bei einem click
        //alle Hitboxen gelöscht und neue an die für den Intervall passenden Stellen erstellt.
        //danach wird dann geguckt, ob der click eine der neuen Hitboxen getroffen hat etc.
        beachHitboxes = [];
        beachHitboxes.push(new strand.Woman(-100, -300));
        beachHitboxes.push(new strand.Crab(-200 + Math.cos(strand.i / 10) * 80, -250));
        beachHitboxes.push(new strand.Crab(150 + Math.sin(strand.i / 10) * 80, -350));
        beachHitboxes.push(new strand.Woman(200 + Math.sin(strand.i / 80) * 300, -70 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2));
        beachHitboxes.push(new strand.Woman(-300 + Math.sin(strand.i / 40) * 150, -120 + 150 * Math.sin(strand.i / 20) * -0.4));
        beachHitboxes.push(new strand.Ship(1.5 * strand.i + 900, 50));
        beachHitboxes.push(new strand.Cloud(150 + 150 * Math.sin(strand.i / 100) * -0.3, 300));
        beachHitboxes.push(new strand.Cloud(450 + 150 * Math.sin(strand.i / 100) * -0.3, 400));
        beachHitboxes.push(new strand.Cloud(-350 + 150 * Math.sin(strand.i / 100) * -0.3, 400));
        beachHitboxes.push(new strand.Crab(-700 - strand.i, 0 - 400 * Math.sin(strand.i / 400)));
        for (let beachHitbox of beachHitboxes) {
            beachHitbox.interact(strand.mouseX, strand.mouseY, typeKeys[currentHitbox]);
            currentHitbox++;
        }
    }
    function startDrawing() {
        strand.ctx.resetTransform();
        strand.ctx.clearRect(0, 0, strand.cw, strand.ch);
        strand.i--;
        strand.Background.draw();
        strand.Wave.draw(strand.i);
        reset();
        //Der Array in dem alle Objekte gespeichert werden, wird bei jedem neuen Intervall geleert. So entstehen keine doppelten Objekte
        beachObjects = [];
        beachObjects.push(new strand.Sun(-700 - strand.i, 0 - 400 * Math.sin(strand.i / 400), 0, 1 * Math.sin(strand.i / 500), 1 * Math.sin(strand.i / 500), "#FABE0F"));
        beachObjects.push(new strand.Cloud(0 + 150 * Math.sin(strand.i / 100) * -0.3, 200, 1, 0.7, 0.7, strand.cloudColor1));
        beachObjects.push(new strand.Cloud(100 + 150 * Math.sin(strand.i / 100) * -0.3, 250, 0, 1, 1, strand.cloudColor1));
        beachObjects.push(new strand.Cloud(400 + 150 * Math.sin(strand.i / 100) * -0.3, 400, 0, 0.5, 0.5, strand.cloudColor2));
        beachObjects.push(new strand.Cloud(-300 + 150 * Math.sin(strand.i / 100) * -0.3, 380, 3.2, 0.3, 0.3, strand.cloudColor3));
        beachObjects.push(new strand.Cloud(-400 + 150 * Math.sin(strand.i / 100) * -0.3, 400, 0, 0.5, 0.5, strand.cloudColor3));
        beachObjects.push(new strand.Ship(1.5 * strand.i + 600, -50 + strand.i * strand.titanicDrag, Math.sin(strand.i / 50) * 0.05 + strand.titanicTurn, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C"));
        beachObjects.push(new strand.SurfBoard(200 + Math.sin(strand.i / 80) * 300, -150 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2 - 1.6, 0.7, 1.5));
        beachObjects.push(new strand.Woman(200 + Math.sin(strand.i / 80) * 300, -70 + 150 * Math.sin(strand.i / 40) * 0.6, Math.sin(strand.i / 40) * 0.2, 0.2, 0.2, strand.surferWomanColor, "#506E00", "firebrick", 1, 1, -1, -1));
        beachObjects.push(new strand.Woman(-300 + Math.sin(strand.i / 40) * 150, -200 + 150 * Math.sin(strand.i / 20) * -0.4, 0, 0.3, 0.3, strand.swimmerWomanColor, "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2));
        beachObjects.push(new strand.Ring(-300 + Math.sin(strand.i / 40) * 150, -230 + 150 * Math.sin(strand.i / 20) * -0.4, 0, 0.7, 0.7));
        beachObjects.push(new strand.SandDune(-(strand.cw / 2), -400 + 150, 0, 4, 2, "#F5D78C"));
        beachObjects.push(new strand.Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6 + Math.sin(strand.i / 30) * 0.5, 0.5 + Math.sin(strand.i / 30) * 0.5, -0.2, 0));
        beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), -1.3, 1 + Math.sin(strand.i / 50) * 0.2, 1.5 + Math.sin(strand.i / 50) * 0.2, "#EBC369", "#EBC369", strand.i));
        beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 1.3, 1 + Math.cos(strand.i / 50) * 0.3, 1.5 + Math.cos(strand.i / 50) * 0.3, "#EBC369", "#EBC369", strand.i));
        beachObjects.push(new strand.Crab(-200 + Math.cos(strand.i / 10) * strand.greenCrabSpeed, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        beachObjects.push(new strand.Crab(150 + Math.sin(strand.i / 10) * strand.redCrabSpeed, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        beachObjects.push(new strand.Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new strand.Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)"));
        beachObjects.push(new strand.Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)"));
        beachObjects.push(new strand.Crab(-200 + Math.cos(strand.i / 10) * strand.greenCrabSpeed, -250, 0, 1, 1, "olivedrab", "olive", strand.i));
        beachObjects.push(new strand.Crab(150 + Math.sin(strand.i / 10) * strand.redCrabSpeed, -350, 0, 0.8, 0.8, "tomato", "crimson", strand.i));
        beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4 + Math.sin(strand.i / 50) * 0.2, 4.5 + Math.sin(strand.i / 50) * 0.2, "#733223", "#506E00", strand.i));
        beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4 + Math.sin(strand.i / 50) * 0.2, 4.5 + Math.sin(strand.i / 50) * 0.2, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3 + Math.cos(strand.i / 50) * 0.3, 4.5 + Math.cos(strand.i / 50) * 0.3, "#733223", "#506E00", strand.i));
        beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3 + Math.cos(strand.i / 50) * 0.3, 4.5 + Math.cos(strand.i / 50) * 0.3, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        beachObjects.push(new strand.Woman(-100, -400, 0, 0.7, 0.7, strand.walkerWomanColor, "#C81E23", "#232323", 1.6 + Math.sin(strand.i / 30) * 0.5, 0.5 + Math.sin(strand.i / 30) * 0.5, -0.2, 0));
        for (let beachObject of beachObjects) {
            beachObject.draw();
        }
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
//# sourceMappingURL=strand.js.map