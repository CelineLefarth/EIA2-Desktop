var strand;
(function (strand) {
    window.addEventListener("load", hdlLoad);
    let animation;
    let canvas;
    let container;
    strand.beachObjects = [];
    let currentHitbox = 0;
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
        strand.beachObjects = [];
        strand.beachObjects.push(new strand.Sun(-700, 0, 0, 0, 0, "#FABE0F"));
        //beachObjects.push(new Cloud(0, 200, 1, 0.7, 0.7, "#F5F5FF"));
        strand.beachObjects.push(new strand.Cloud(100, 250, 0, 1, 1, "#F5F5FF"));
        strand.beachObjects.push(new strand.Cloud(400, 400, 0, 0.5, 0.5, "#F5F5FF"));
        //beachObjects.push(new Cloud(-300, 380, 3.2, 0.3, 0.3, "#F5F5FF"));
        strand.beachObjects.push(new strand.Cloud(-400, 400, 0, 0.5, 0.5, "#F5F5FF"));
        strand.beachObjects.push(new strand.Ship(600, -50, 0, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C"));
        strand.beachObjects.push(new strand.SurfBoard(200, -150, -1.6, 0.7, 1.5));
        strand.beachObjects.push(new strand.Woman(200, -70, 0, 0.2, 0.2, "#FFD2D7", "#506E00", "firebrick", 1, 1, -1, -1));
        strand.beachObjects.push(new strand.Woman(-300, -200, 0, 0.3, 0.3, "#C87D5A", "#E1E6E6", "#FABE0F", 0.5, 0.3, -0.4, -0.2));
        strand.beachObjects.push(new strand.Ring(-300, -230, 0, 0.7, 0.7));
        strand.beachObjects.push(new strand.SandDune(-(strand.cw / 2), -400 + 150, 0, 4, 2, "#F5D78C"));
        //beachObjects.push(new Woman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", 1.6, 0.5, -0.2, 0));
        strand.beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 1.3, 1, 1.5, "#EBC369", "#EBC369", strand.i));
        strand.beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), -1.3, 1, 1.5, "#EBC369", "#EBC369", strand.i));
        //beachObjects.push(new Crab(-200, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i, "green", 80));
        //beachObjects.push(new Crab(150, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i, "red", 80));
        strand.beachObjects.push(new strand.Towel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)"));
        strand.beachObjects.push(new strand.Towel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)"));
        strand.beachObjects.push(new strand.Towel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)"));
        strand.beachObjects.push(new strand.Crab(-200, -250, 0, 1, 1, "olivedrab", "olive", strand.i, "green", 80));
        strand.beachObjects.push(new strand.Crab(50, -350, 0, 0.8, 0.8, "tomato", "crimson", strand.i, "red", 80));
        strand.beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4, 4.5, "#733223", "#506E00", strand.i));
        strand.beachObjects.push(new strand.Palm(-(strand.cw / 2), -(strand.ch / 2), 0, 4, 4.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        strand.beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3, 4.5, "#733223", "#506E00", strand.i));
        strand.beachObjects.push(new strand.Palm((strand.cw / 2), -(strand.ch / 2), 0, 3, 4.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", strand.i));
        strand.beachObjects.push(new strand.Woman(-100, -400, 0, 0.7, 0.7, "#FFAAA5", "#C81E23", "#232323", 1.6, 0.5, -0.2, 0, 0, 0, 0, 0));
        startDrawing();
    }
    function wantToClickOnHitbox(_e) {
        strand.picked = false;
        const rect = canvas.getBoundingClientRect(); //<----//
        strand.mouseX = _e.clientX - rect.left - (strand.cw / 2); //Wie man die Mouse-Position auf dem Canvas bekommt habe ich hier her: https://stackoverflow.com/a/17130415
        strand.mouseY = -1 * (_e.clientY - rect.top) + (strand.ch / 2); //<----//
        console.log(strand.mouseX, strand.mouseY);
        currentHitbox = 0;
        for (let beachObject = strand.beachObjects.length - 1; beachObject >= 0; beachObject--) {
            strand.beachObjects[beachObject].interact(strand.mouseX, strand.mouseY);
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
        for (let beachObject of strand.beachObjects) {
            beachObject.draw();
            beachObject.move();
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