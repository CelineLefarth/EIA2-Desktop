namespace strand {
    window.addEventListener("load", hdlLoad);

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let container: HTMLElement;
    let cw: number;
    let ch: number;
    let path: Path2D;
    let animation: HTMLElement;

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
        startDrawing();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function interactiveListeners(): void {
        document.querySelector("#greenCrab").addEventListener("click", moveCrabGreen);
        document.querySelector("#redCrab").addEventListener("click", moveCrabRed);
    }
    let k: number = 0;
    function moveCrabGreen(): void {
        setInterval(moveGreen, 10);
        document.querySelector("main").removeChild(document.querySelector("#greenCrab"));
    }
    function moveGreen(): void {
        k = k - 4;
    }
    let l: number = 0;
    function moveCrabRed(): void {
        setInterval(moveRed, 10);
        document.querySelector("main").removeChild(document.querySelector("#redCrab"));
    }
    function moveRed(): void {
        l = l + 4;
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function startAnimation(): void {
        interactiveListeners();
        setInterval(startDrawing, 10);
        document.querySelector("main").removeChild(animation);
    }

    let i: number = 0;

    function reset(): void {
        ctx.resetTransform();
        ctx.translate(cw / 2, ch / 2);
        ctx.scale(1, -1);
    }

    function startDrawing(): void {
        ctx.resetTransform();
        ctx.clearRect(0, 0, cw, ch);
        i--;
        drawBackground();
        reset();

        drawSun(-700 - i, 0 - 400 * Math.sin(i / 400), 0, 1 * Math.sin(i / 500), 1 * Math.sin(i / 500), "#FABE0F");

        //Clouds
        drawCloud(0 + 150 * Math.sin(i / 100) * -0.3, 200, 1, 0.7, 0.7, "whitesmoke");
        drawCloud(100 + 150 * Math.sin(i / 100) * -0.3, 250, 0, 1, 1, "#F5F5FF");
        drawCloud(400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, "#F5F5FF");
        drawCloud(-300 + 150 * Math.sin(i / 100) * -0.3, 380, 3.2, 0.3, 0.3, "whitesmoke");
        drawCloud(-400 + 150 * Math.sin(i / 100) * -0.3, 400, 0, 0.5, 0.5, "#F5F5FF");


        //Ship
        drawShip(1.5 * i + 600, -50, Math.sin(i / 50) * 0.05, 2, 2, "brown", "#232323", "#E1E6E6", "#E19B3C");
        //Waves
        drawWaves(i);
        //Surfboard
        drawSurfBoard(200 + Math.sin(i / 80) * 300, - 150 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2 - 1.6, 0.7, 1.5);
        //Woman
        drawWoman(200 + Math.sin(i / 80) * 300, -70 + 150 * Math.sin(i / 40) * 0.6, Math.sin(i / 40) * 0.2, 0.2, 0.2, "#FFD2D7", "#506E00", "firebrick", i, 1, 1, -1, -1);
        drawWoman(-300 + Math.sin(i / 40) * 150, -200 + 150 * Math.sin(i / 20) * -0.4, 0, 0.3, 0.3, "#C87D5A", "#E1E6E6", "#FABE0F", i, 0.5, 0.3, -0.4, -0.2);
        //Ring
        drawRing(-300 + Math.sin(i / 40) * 150, -230 + 150 * Math.sin(i / 20) * -0.4, 0, 0.7, 0.7);
        //Sand Dune
        drawSandDune(-(cw / 2), -400 + 150, 0, 4, 2, "#F5D78C");
        //Woman Dark Shadow
        drawWoman(-300, -560, 1, 0.4, 0.6, "#EBC369", "#EBC369", "#EBC369", i, 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0);
        //Palm Dark Shadow
        drawPalm(-(cw / 2), -(ch / 2), -1.3, 1 + Math.sin(i / 50) * 0.2, 1.5 + Math.sin(i / 50) * 0.2, "#EBC369", "#EBC369", i);
        drawPalm((cw / 2), -(ch / 2), 1.3, 1 + Math.cos(i / 50) * 0.3, 1.5 + Math.cos(i / 50) * 0.3, "#EBC369", "#EBC369", i);
        //Crab Shadow
        drawCrab(k + -200 + Math.cos(i / 10) * 80, -250, 0.2, 1, 0.5, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        drawCrab(l + 150 + Math.sin(i / 10) * 80, -350, 0.2, 0.8, 0.4, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        //Towel
        drawTowel(-22, -636, 0, 3, 4, "rgba(0,0,0,0.1)");
        drawTowel(-26, -632, 0, 3, 4, "rgba(0,0,0,0.1)");
        drawTowel(-20, -640, 0, 3, 4, "rgba(255,100,0,0.5)");
        //Crab
        drawCrab(k + -200 + Math.cos(i / 10) * 80, -250, 0, 1, 1, "olivedrab", "olive", i);
        drawCrab(l + 150 + Math.sin(i / 10) * 80, -350, 0, 0.8, 0.8, "tomato", "crimson", i);
        //Left Palm
        drawPalm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "#733223", "#506E00", i);
        drawPalm(-(cw / 2), -(ch / 2), 0, 4 + Math.sin(i / 50) * 0.2, 4.5 + Math.sin(i / 50) * 0.2, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        //RightPalm
        drawPalm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "#733223", "#506E00", i);
        drawPalm((cw / 2), -(ch / 2), 0, 3 + Math.cos(i / 50) * 0.3, 4.5 + Math.cos(i / 50) * 0.3, "rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)", i);
        //SurfBoard
        //Woman
        drawWoman(-100, -400, 0, 0.7, 0.7, "#FFAAA5", "#C81E23", "#232323", i, 1.6 + Math.sin(i / 30) * 0.5, 0.5 + Math.sin(i / 30) * 0.5, -0.2, 0);
        //Brightness
        let brightness: number = (Math.sin((300 + i) / 200) * 0.9);
        if (brightness > 0.8974159500672447) { i = 0; }
        //ctx.fillStyle = "rgba(10,0,10," + brightness  + ")";
        //ctx.fillRect(-(cw / 2), -(ch / 2), cw, ch);

        draw(0, 0, 0, 1, 1);
    }
    //Ein von mir erstelltes Template, um schneller die einzelnen Charaktere/Objekte zu erstellen
    function draw(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        path = new Path2D;
        path.moveTo(0, 0);

        ctx.fillStyle = "";
        ctx.fill(path);

        reset();
    }



    function drawBackground(): void {
        let redness: number = (Math.sin((300 + i) / 200) * 0.9);
        ctx.fillStyle = "rgba(" + redness * 200 + ",50," + redness * -200 + "," + redness + ")";
        ctx.fillRect(0, 0, cw, ch);

        ctx.fillStyle = "#007DA5";
        ctx.fillRect(0, ch / 2, cw, ch);

        ctx.fillStyle = "#F5D78C";
        ctx.fillRect(0, ch / 1.5, cw, ch);

        ctx.resetTransform();


    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawShip(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string, _color2: string, _color3: string, _color4: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        //Black Ship Body
        path = new Path2D;
        path.moveTo(0, 0);
        path.lineTo(-100, 100);
        path.lineTo(400, 100);
        path.lineTo(400, 0);
        ctx.fillStyle = _color2;
        ctx.fill(path);
        //Red Ship Body
        path = new Path2D;
        path.moveTo(0, 0);
        path.lineTo(-40, 40);
        path.lineTo(400, 40);
        path.lineTo(400, 0);
        ctx.fillStyle = _color;
        ctx.fill(path);
        //White Ship Body-Stripe
        path = new Path2D;
        path.moveTo(-90, 90);
        path.lineTo(-100, 100);
        path.lineTo(400, 100);
        path.lineTo(400, 90);
        ctx.fillStyle = _color3;
        ctx.fill(path);
        //White Ship Body-Roof
        path = new Path2D;
        path.moveTo(-60, 99);
        path.lineTo(-40, 120);
        path.lineTo(340, 120);
        path.lineTo(360, 99);
        ctx.fillStyle = _color3;
        ctx.fill(path);

        for (let chimnieCount: number = 0; chimnieCount < 4; chimnieCount++) {
            let sizeChimnieCount: number = chimnieCount * 60 + 40;
            //Ship Chimni Gold
            path = new Path2D;
            path.moveTo(0 + sizeChimnieCount, 120);
            path.lineTo(0 + sizeChimnieCount, 160);
            path.lineTo(30 + sizeChimnieCount, 160);
            path.lineTo(30 + sizeChimnieCount, 120);
            ctx.fillStyle = _color4;
            ctx.fill(path);

            //Ship Chimni Black
            path = new Path2D;
            path.moveTo(0 + sizeChimnieCount, 160);
            path.lineTo(0 + sizeChimnieCount, 180);
            path.lineTo(30 + sizeChimnieCount, 180);
            path.lineTo(30 + sizeChimnieCount, 160);
            ctx.fillStyle = _color2;
            ctx.fill(path);
        }
        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawPalm(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string, _color2: string, _swingPalm: number): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);

        for (let woodPiecesAmount: number = 0; woodPiecesAmount < 14; woodPiecesAmount++) {
            let sizeWoodPiecesAmount: number = woodPiecesAmount * 40;

            //Woodpieces
            path = new Path2D;
            ctx.rotate(Math.sin(_swingPalm / 50) * 0.01);
            path.moveTo(0, 0 + sizeWoodPiecesAmount);
            path.lineTo(20, -5 + sizeWoodPiecesAmount);
            path.lineTo(30, 40 + sizeWoodPiecesAmount);
            path.lineTo(0, 50 + sizeWoodPiecesAmount);
            path.lineTo(-30, 40 + sizeWoodPiecesAmount);
            path.lineTo(-20, -5 + sizeWoodPiecesAmount);
            ctx.fillStyle = _color;
            ctx.fill(path);

        }
        ctx.translate(0, 400);
        ctx.scale(0.8, 0.8);
        for (let bigLeavesAmount: number = 0; bigLeavesAmount < 7; bigLeavesAmount++) {
            //Top-Leaves
            ctx.rotate(Math.sin(_swingPalm / 50) * 0.01);
            for (let leavesAmount: number = 0; leavesAmount < 10; leavesAmount++) {
                let sizeLeavesAmount: number = leavesAmount * 40;
                let heightLeavesAmount: number = leavesAmount * 6;
                path = new Path2D;
                path.moveTo(0, 0);
                path.quadraticCurveTo(-50 + sizeLeavesAmount, 50 - heightLeavesAmount, 50 + sizeLeavesAmount, 100 - heightLeavesAmount);
                path.quadraticCurveTo(-20 + sizeLeavesAmount, 50 - heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                ctx.fillStyle = _color2;
                ctx.fill(path);
            }
            //Bottom-Leaves
            for (let leavesAmount: number = 0; leavesAmount < 10; leavesAmount++) {
                let sizeLeavesAmount: number = leavesAmount * 40;
                let heightLeavesAmount: number = leavesAmount * 6;
                path = new Path2D;
                path.moveTo(0, 0);
                path.quadraticCurveTo(-50 + sizeLeavesAmount, -50 + heightLeavesAmount, 50 + sizeLeavesAmount, -100 + heightLeavesAmount);
                path.quadraticCurveTo(-20 + sizeLeavesAmount, -50 + heightLeavesAmount, 0 + sizeLeavesAmount, 0);
                ctx.fill(path);
            }
            ctx.rotate(0.5);
        }

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawCrab(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string, _color2: string, _crabShake: number): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        ctx.lineCap = "round";
        ctx.strokeStyle = _color;
        ctx.save();
        ctx.rotate(-0.05 * Math.sin(_crabShake));
        //Right Legs
        for (let legAmount: number = 0; legAmount < 3; legAmount++) {
            let sizeLegAmount: number = legAmount * 30;
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(70, 50 - sizeLegAmount);
            ctx.lineTo(100, 0 - sizeLegAmount);
            ctx.stroke();
        }
        //Left Legs
        for (let legAmount: number = 0; legAmount < 3; legAmount++) {
            let sizeLegAmount: number = legAmount * 30;
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-70, 50 - sizeLegAmount);
            ctx.lineTo(-100, 0 - sizeLegAmount);
            ctx.stroke();
        }


        //Shears
        ctx.restore();
        ctx.rotate(0.7 * Math.sin(_crabShake / 50));
        path = new Path2D;
        path.moveTo(-75, 80);
        path.quadraticCurveTo(-120, 115, -75, 150);
        ctx.fillStyle = _color2;
        ctx.fill(path);
        path = new Path2D;
        path.moveTo(75, 80);
        path.quadraticCurveTo(120, 115, 75, 150);
        ctx.fill(path);
        ctx.save();
        ctx.translate(-140, 0);
        path = new Path2D;
        path.moveTo(75, 80);
        path.quadraticCurveTo(120, 115, 75, 150);
        ctx.fill(path);
        path.moveTo(-75 + 280, 80);
        path.quadraticCurveTo(-120 + 280, 115, -75 + 280, 150);
        ctx.fill(path);

        ctx.restore();

        //Left Arm
        ctx.strokeStyle = _color2;
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(-10, -10);
        ctx.lineTo(-80, 20);
        ctx.lineTo(-70, 80);
        ctx.stroke();

        //Right Arm
        ctx.beginPath();
        ctx.moveTo(10, -10);
        ctx.lineTo(80, 20);
        ctx.lineTo(70, 80);
        ctx.stroke();

        //Crab Body
        ctx.lineCap = "round";
        ctx.lineWidth = 100;
        ctx.strokeStyle = _color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();

        //Crab Eyes
        drawEyes(1, 1);



        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawEyes(_osX: number, _osY: number): void {
        ctx.save();
        ctx.scale(_osX, _osY);
        for (let crabEyes: number = 0; crabEyes < 4; crabEyes++) {
            if (crabEyes < 3) {
                ctx.strokeStyle = "#E1E6E6";
                ctx.lineWidth = 30;
            }
            else {
                ctx.strokeStyle = "#232323";
                ctx.lineWidth = 20;
            }
            ctx.beginPath();
            ctx.moveTo(20, -20);
            ctx.lineTo(20, -20);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(-20, -20);
            ctx.lineTo(-20, -20);
            ctx.stroke();
        }
        ctx.restore();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawSandDune(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        path = new Path2D;
        path.moveTo(0, 0);
        path.bezierCurveTo(100, 100, 200, -100, 300, 0);
        path.lineTo(300, -100);
        path.lineTo(0, -100);
        ctx.fillStyle = _color;
        ctx.fill(path);

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawWaterWaves(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        path = new Path2D;
        path.moveTo(0, 0);
        path.bezierCurveTo(100, 100, 200, -100, 300, 0);
        path.lineTo(300, 200);
        path.bezierCurveTo(200, -200, 100, 200, 0, 200);
        path.lineTo(0, 0);
        ctx.fillStyle = _color;
        ctx.fill(path);

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawWaves(_waveSpeed: number): void {
        ctx.resetTransform();
        ctx.fillStyle = "#007DA5";
        ctx.fillRect(0, ch / 2, cw, (ch / 2) - 800);
        ctx.translate(cw / 2, ch / 2);
        ctx.scale(1, -1);
        for (let j: number = 0; j < 1; j++) {
            let color: string;

            if (j == 0) {
                color = "#007DA5";
                //Shipreflektion
                drawShip(i + 600, -50, Math.sin(i / 50) * 0.05, 2, -1, "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)");
            }
            //Waves
            else { color = "rgba(0,0,105,0.3)"; }
            drawWaterWaves(-0, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color);        //Wave1
            drawWaterWaves(-600, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color);      //Wave1
            drawWaterWaves(300 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color);   //Wave2
            drawWaterWaves(-300 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color);  //Wave2
            drawWaterWaves(-900 - 90, -50, 0, 2, -0.5 * Math.cos(_waveSpeed / 50), color);  //Wave2
            drawWaterWaves(200 - 90, -50, 0, 2, 0.5 * Math.cos(_waveSpeed / 50), color);    //Wave3
            drawWaterWaves(-400 - 90, -50, 0, 2, 0.5 * Math.cos(_waveSpeed / 50), color);   //Wave3
            drawWaterWaves(-50, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color);       //Wave4
            drawWaterWaves(-650, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color);      //Wave4
            drawWaterWaves(350 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color);   //Wave5
            drawWaterWaves(-250 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color);  //Wave5
            drawWaterWaves(-850 - 90, -50, 0, 2, -0.5 * Math.sin(_waveSpeed / 50), color);  //Wave5
            drawWaterWaves(250 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color);    //Wave6
            drawWaterWaves(-350 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color);   //Wave6
            drawWaterWaves(-950 - 90, -50, 0, 2, 0.5 * Math.sin(_waveSpeed / 50), color);   //Wave6
        }
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawTowel(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        //Main Towel Color
        path = new Path2D;
        path.moveTo(-100, -55);
        path.quadraticCurveTo(50, 0, 200, 0);    //long
        path.lineTo(100, 50);
        path.quadraticCurveTo(-50, 25, -100, 25);   //long
        ctx.fillStyle = _color;
        ctx.fill(path);


        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//    
    function drawWoman(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number,
                       _bodyColor: string, _shortsColor: string, _hairColor: string, _i: number,
                       _rat: number, _rab: number, _lat: number, _lab: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY) //rat = right arm top //lab = left arm bottom etc.
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);

        //Hair
        drawBodyPart(0, 570, 0, 3, 3, _hairColor, 80);
        ctx.restore();

        //Head
        drawBodyPart(0, 570, 0, 1, 1, _bodyColor, 200);
        ctx.restore();
        ctx.save();
        drawCrab(0, 550, 0 + Math.sin(i / 100), 2, 2, _bodyColor, _bodyColor, 2);
        ctx.restore();

        //Arms
        //Left Arm
        drawBodyPart(-45, 370, _lat, 0.9, 1.2, _bodyColor, 80);
        drawBodyPart(0, -190, _lab, 0.9 - 0.3, 1.2 - 0.5, _bodyColor, 80);
        //Left Finger
        drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();

        ctx.restore();
        ctx.restore();

        //Right Arm
        drawBodyPart(70, 370, _rat, 0.9, 1.2, _bodyColor, 80);
        drawBodyPart(0, -190, _rab, 0.9 - 0.3, 1.2 - 0.5, _bodyColor, 80);
        //Right Finger
        drawBodyPart(0, -190, 5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 5.5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 6, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 6.5, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();
        drawBodyPart(0, -190, 7, 0.9 - 0.3, 0.5, _bodyColor, 80);
        ctx.restore();

        ctx.restore();
        ctx.restore();

        //Chest
        drawBodyPart(10, 390, 0, 2, 1, _bodyColor, 80);
        drawBodyPart(0, -380, 3.14, 1, 1, _bodyColor, 80);
        ctx.restore();
        ctx.restore();
        //Right Leg
        drawBodyPart(55, 0, 0, 1, 1, _bodyColor, 80);
        drawBodyPart(0, -170, 0, 0.9, 1.2, _bodyColor, 80);
        //Right Foot
        drawBodyPart(0, -200, 1.2, 0.5, 0.5, _bodyColor, 80);
        ctx.restore();
        ctx.restore();
        ctx.restore();
        //Left Leg
        drawBodyPart(-35, 0, 0, 1, 1, _bodyColor, 80);
        drawBodyPart(0, -170, 0, 0.9, 1.2, _bodyColor, 80);
        //Left Foot
        drawBodyPart(0, -200, 1.2, 0.5, 0.5, _bodyColor, 80);
        ctx.restore();
        ctx.restore();
        ctx.restore();
        //Pants
        path = new Path2D;
        path.moveTo(-80, 0);
        path.lineTo(-75, 20);
        path.lineTo(90, 20);
        path.lineTo(90, 20);
        path.lineTo(90, 0);
        path.quadraticCurveTo(-5, -35, 28, -70);
        path.lineTo(-10, -70);
        path.quadraticCurveTo(10, -20, -80, 0);

        ctx.strokeStyle = _shortsColor;
        ctx.lineCap = "round";
        ctx.lineWidth = 80;
        //Bra
        ctx.beginPath();
        ctx.moveTo(50, 300);
        ctx.lineTo(50, 300);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-30, 300);
        ctx.lineTo(-30, 300);
        ctx.stroke();
        ctx.lineWidth = 50;
        ctx.beginPath();
        ctx.moveTo(10, 300);
        ctx.lineTo(10, 300);
        ctx.stroke();

        ctx.fillStyle = _shortsColor;
        ctx.fill(path);

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawBodyPart(_ox: number, _oy: number, _or: number, _osX: number, _osY: number, _color: string, _thiccness: number): void {
        ctx.save();
        ctx.translate(_ox, _oy);
        ctx.rotate(_or);
        ctx.scale(_osX, _osY);
        ctx.strokeStyle = _color;
        ctx.lineCap = "round";
        ctx.lineWidth = _thiccness;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();

        path = new Path2D;
        path.moveTo(-40, 0);
        path.lineTo(40, 0);
        path.lineTo(20, -200);
        path.lineTo(-20, -200);
        ctx.fillStyle = _color;
        ctx.fill(path);
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawCloud(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);

        ctx.strokeStyle = _color;
        ctx.lineCap = "round";
        ctx.lineWidth = 150;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.lineWidth = 200;
        ctx.beginPath();
        ctx.moveTo(100 + 100 * Math.sin(i / 50) * 0.2, 100);
        ctx.lineTo(100 + 100 * Math.sin(i / 50) * 0.3, 100);
        ctx.stroke();
        ctx.lineWidth = 100;
        ctx.beginPath();
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();
        ctx.lineWidth = 100;
        ctx.beginPath();
        ctx.moveTo(-70, 100 * Math.sin(i / 50) * 0.3);
        ctx.lineTo(-70, 100 * Math.sin(i / 50) * 0.2);
        ctx.stroke();
        ctx.lineWidth = 120;
        ctx.beginPath();
        ctx.moveTo(-10 * Math.sin(i / 50) * 0.3, 100);
        ctx.lineTo(-10 * Math.sin(i / 50) * 0.2, 100);
        ctx.stroke();
        ctx.lineWidth = 150;
        ctx.beginPath();
        ctx.moveTo(200, 50 * Math.sin(i / 50) * 0.3);
        ctx.lineTo(200, 50 * Math.sin(i / 50) * 0.3);
        ctx.stroke();


        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawSun(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number, _color: string): void {
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        drawCrab(0, 0, 3.1 + Math.sin(i / 100), 2, 2, _color, _color, 2);
        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawSurfBoard(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);
        path = new Path2D;
        path.moveTo(0, 100);
        path.bezierCurveTo(50, 50, 25, -50, 25, -50);
        path.lineTo(-25, -50);
        path.bezierCurveTo(-50, 50, 0, 100, 0, 100);

        ctx.fillStyle = "#E1E6E6";
        ctx.fill(path);

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//
    function drawRing(_mox: number, _moy: number, _mor: number, _mosX: number, _mosY: number): void {   // mo = mainobject + (x,y,rotation,scale X & scaleY)
        ctx.translate(_mox, _moy);
        ctx.rotate(_mor);
        ctx.scale(_mosX, _mosY);

        ctx.strokeStyle = "#64508C";
        ctx.lineCap = "round";
        ctx.lineWidth = 100;

        ctx.beginPath();
        ctx.moveTo(-100, 0);
        ctx.lineTo(100, 0);
        ctx.stroke();

        reset();
    }
    //--------------------------------------------------------------------------------------------------------------------//    
}