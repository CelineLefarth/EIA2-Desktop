namespace strand {
    window.addEventListener("load", hdlLoad);

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let main: HTMLElement;
    let cw: number;
    let ch: number;
    let x: number;
    let y: number;
    let gradient: CanvasGradient;
    let path: Path2D;

    function hdlLoad(): void {
        canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        canvas.height = 1920;
        canvas.width = 1080;
        ch = canvas.height;
        cw = canvas.width;
        main = document.querySelector("main");
        main.appendChild(canvas);
        startAnimation();
    }

    function startAnimation(): void {
        startDrawing();
    }


    function startDrawing(): void {
        //draw Sea, Sky und Beach haben keine "Eigenen Koordinatensysteme", da diese zum Hintergrund gehören
        drawSea();
        drawSky();
        drawBeach();
        drawHotel();
        drawPalm()
    }

    function drawSea(): void {
        ctx.fillStyle = "blue";
        gradient = ctx.createLinearGradient(cw, 1400, cw, ch);
        gradient.addColorStop(0, "darkblue");
        gradient.addColorStop(1, "blue");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cw, ch);
    }

    function drawSky(): void {
        gradient = ctx.createLinearGradient(0, 0, 0, ch * 0.7);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "lightblue");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cw, ch * 0.7);
    }

    function drawBeach(): void {
        let beach: Path2D = new Path2D();
        ctx.fillStyle = "yellow";
        beach.moveTo(cw, 1750);
        beach.bezierCurveTo(cw / 8, ch * 0.9, cw / 6, ch * 0.75, cw / 2, ch * 0.7);
        beach.lineTo(0, 1344);
        beach.lineTo(0, ch);
        beach.lineTo(cw, ch);
        ctx.fill(beach);
    }



    function drawHotel(): void {
        ctx.fillStyle = "brown";
        ctx.scale(3.5, 3.5);
        ctx.translate(10, 240);
        path = new Path2D;
        path.moveTo(0, 0);
        path.lineTo(100, 0);
        path.lineTo(100, 150);
        path.lineTo(0, 150);
        ctx.fill(path);
        x = 5.5;
        y = 5.5;
        drawWindow(x, y);
        for (let i: number = 1; i < 36; i++) {
            x = x + 15.5;
            if (i % 6 == 0) {
                x = 5.5;
                y = y + 22.5;
            }
            drawWindow(x, y);
        }
        ctx.resetTransform();
        drawHotelShadow();
    }

    function drawWindow(_x: number, _y: number): void {
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(_x, _y, 10, 15);
    }

    function drawHotelShadow(): void {
        ctx.scale(3.5, 3.5);
        ctx.translate(10, 390);
        path = new Path2D;
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        path.moveTo(0, 0);
        path.lineTo(70, 50);
        path.lineTo(230, 50);
        path.lineTo(100, 0);
        ctx.fill(path);
        ctx.resetTransform();
    }

    function drawPalm(): void {
        let color: string = "green";
        for (let i: number = 0; i < 20; i++) {
            y = y + 20;
            x = x * 0.9;
            if (i > 1) {
                color = "sienna";
            }
            drawWood(x, y, color);
            drawLeavs();
        }
    }

    function drawWood(_x: number, _y: number, _color: string): void {
        ctx.scale(2, 2);
        ctx.translate(0 + x, 450 + y);
        ctx.rotate(x * 0.005);
        path = new Path2D;
        ctx.fillStyle = _color;
        path.moveTo(0, 0);
        path.lineTo(20, 10);
        path.lineTo(30, -30);
        path.lineTo(0, -50);
        path.lineTo(-30, -30);
        path.lineTo(-20, 10);
        ctx.fill(path);
        ctx.resetTransform();
    }

    function drawLeavs(): void {
        for (let i: number = 4; i < 10; i++) {
        path = new Path2D;
        ctx.fillStyle = "green";
        ctx.translate(160, 1100);
        ctx.rotate(i * 0.5);
        if (i < 7) {
        ctx.scale(6, 12);
        }
        else {
            ctx.scale(-6, 12);
        }
        path.moveTo(0, 0);
        path.lineTo(10, 0);
        path.lineTo(20, 10);
        path.lineTo(40, 20);
        path.lineTo(45, 25);
        path.lineTo(50, 40);
        path.lineTo(30, 37);
        path.lineTo(20, 30);
        path.lineTo(10, 20);
        ctx.fill(path);
        ctx.resetTransform();
        }
    }
}
