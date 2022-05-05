namespace Abstract {
    window.addEventListener("load", hdlLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let sliderAmount: HTMLInputElement;
    let sliderWidth: HTMLInputElement;

    //Fractal Variabeln
    let moveX: number;
    let moveY: number;
    let move1: number[];
    let move2: number[];
    let move3: number[];
    let moveNewX: number;
    let moveNewY: number;
    let moveLast: number[];

    let counter: number;
    let amount: number;
    let h: number;
    let s: number;
    let l: number;
    let hsl: string;
    let width: number;
    let firstTime: boolean;

    function hdlLoad(): void {
        canvas = document.querySelector("#canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        sliderAmount = document.querySelector("#sliderAmount");
        sliderWidth = document.querySelector("#sliderWidth");
        amount = 5000;
        width = 100;
        firstTime = true;
        counter = 1;
        changeCanvasSize();
        document.querySelector("#sliderAmount").addEventListener("change", () => { amount = parseInt(sliderAmount.value); });
        document.querySelector("#sliderWidth").addEventListener("change", () => { width = parseInt(sliderWidth.value); });
        document.querySelector("#fractal").addEventListener("click", () => { drawFractal(500000); });
        document.querySelector("#city").addEventListener("click", () => { destroyedCity(amount); });
        document.querySelector("#dots").addEventListener("click", () => { dots(amount); });
        document.querySelector("#rubber").addEventListener("click", () => { rubber(amount); });
        document.querySelector("#smoke").addEventListener("click", () => { smoke(amount); });
        document.querySelector("#download").addEventListener("click", download);
    }


    function sizedDown(): number {
        let downSized: number = 100 + getRandomValue(canvas.height - 200);
        return downSized;
    }

    function changeCanvasSize(): void {
        canvas.height = 700;
        canvas.width = 700;
    }

    function getRandomValueWidth(_max: number): number {
        let randomValue: number = (Math.floor(Math.random() * _max));
        if (randomValue > 0) {
            return randomValue;
        }
        else { return 1; }
    }

    function getRandomValue(_max: number): number {
        let randomValue: number = (Math.floor(Math.random() * _max));
        return randomValue;
    }
    //Alles im folgenden durch die //// abgetrennten Bereich habe ich aus dem Internet. Quellen sind angegeben
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //getRandomColor from https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor(): string {
        let letters: string = "0123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    //HEXtoHSL from https://www.html-code-generator.com/javascript/color-converter-script
    function HEXtoHSL(_hex: string): void {
        _hex = _hex.replace(/#/g, "");
        if (_hex.length === 3) {
            _hex = _hex.split("").map(function (_hex: string): string {
                return _hex + _hex;
            }).join("");
        }
        let result: RegExpExecArray = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(_hex);
        if (!result) {
            return null;
        }
        let r: number = parseInt(result[1], 16);
        let g: number = parseInt(result[2], 16);
        let b: number = parseInt(result[3], 16);
        r /= 255, g /= 255, b /= 255;
        let max: number = Math.max(r, g, b),
            min: number = Math.min(r, g, b);
        h = (max + min) / 2;
        s = (max + min) / 2;
        l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        } else {
            let d: number = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        s = s * 100;
        s = Math.round(s);
        l = l * 100;
        l = Math.round(l);
        h = Math.round(360 * h);

    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Den Fractal Code habe ich ohne etwas nachzugucken geschrieben
    //Bei jedem Durchlauf geht man dabei auf den Mittelpunkt,
    //der Strecke vom zuletzt gemalten Punkt zufällig hin zu einem der drei Eckpunkte und malt dort einen neuen Punkt.
    function drawFractal(_amount: number): void {
        document.querySelector(".label2").innerHTML = "Scale";
        document.querySelector(".label1").innerHTML = "Detail";

        let scale: number = parseInt(sliderWidth.value);
        if (firstTime == true) {
            firstTime = false;
            scale = 1;
            sliderWidth.value = "1";
        }

        crc2.save();
        crc2.scale(scale, scale);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.strokeStyle = getRandomColor();
        crc2.lineWidth = (Math.abs(10001 - (parseInt(sliderAmount.value))) * 0.0002) + 0.01;
        let sPoints: number = 0;
        crc2.lineCap = "round";
        for (_amount; _amount > 0; _amount--) {
            moveX = moveNewX;
            moveY = moveNewY;

            crc2.moveTo(moveX, moveY);
            crc2.lineTo(moveX, moveY);
            crc2.stroke();
            crc2.beginPath();

            moveLast = [moveX, moveY];

            if (sPoints < 3) {
                let moveX: number = 0;
                let moveY: number = 0;
                crc2.moveTo(moveX, moveY);
                crc2.lineTo(moveX, moveY);
                if (sPoints == 0) {
                    move1 = [(canvas.width / 2), (Math.sqrt(3) / 2 * canvas.height) - 50];
                }
                if (sPoints == 1) {
                    move2 = [canvas.width, 0];
                }
                if (sPoints == 2) {
                    move3 = [0, 0];
                    moveLast[0] = (moveX + move2[0]) / 2;
                    moveLast[1] = (moveY + move2[1]) / 2;
                }
                sPoints++;

            }
            if (sPoints > 2) {
                moveToMidOfOneMove();
            }
        }
        crc2.restore();
    }

    function moveToMidOfOneMove(): void {
        switch (getRandomValue(3)) {
            case 0:
                moveNewX = (move1[0] + moveLast[0]) / 2;
                moveNewY = (move1[1] + moveLast[1]) / 2;
                break;
            case 1:
                moveNewX = (move2[0] + moveLast[0]) / 2;
                moveNewY = (move2[1] + moveLast[1]) / 2;
                break;
            case 2:
                moveNewX = (move3[0] + moveLast[0]) / 2;
                moveNewY = (move3[1] + moveLast[1]) / 2;
                break;
        }
    }


    function destroyedCity(_amount: number): void {
        crc2.save();
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.scale(0.7, 0.7);
        crc2.translate(50, 200);
        _amount = _amount / 100;
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        let endMove: number = sizedDown();
        let cityColor: string = getRandomColor();
        HEXtoHSL(cityColor);
        hsl = "hsl(" + h + ", " + s + "%, " + l + "%)";
        crc2.strokeStyle = hsl;
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "square";

            crc2.lineWidth = getRandomValueWidth(width);
            let startMove: number = sizedDown();
            endMove = endMove + getRandomValueWidth(50);
            crc2.moveTo(startMove, 600);
            crc2.lineTo((startMove), endMove);
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(startMove, 600);
            crc2.lineTo((startMove + 200), endMove - 200);
            crc2.stroke();
            crc2.beginPath();

            l = l + 1;
            hsl = "hsl(" + h + ", " + s + "%, " + l + "%)";
            crc2.strokeStyle = hsl;

        }
        crc2.lineWidth = 300;
        crc2.strokeStyle = "#2B2B2B";
        crc2.moveTo(0, 700);
        crc2.lineTo(1000, 700);
        crc2.stroke();
        crc2.beginPath();
        crc2.restore();
    }

    function dots(_amount: number): void {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "round";
            crc2.strokeStyle = getRandomColor();
            crc2.lineWidth = getRandomValueWidth(width);
            let moveX: number = sizedDown();
            let moveY: number = sizedDown();
            for (let j: number = 10; j > 0; j--) {
                crc2.strokeStyle = getRandomColor();
                crc2.lineWidth = crc2.lineWidth * 0.95;
                crc2.moveTo(moveX, moveY);
                crc2.lineTo(moveX, moveY);
                crc2.stroke();
                crc2.beginPath();
            }
            crc2.strokeStyle = "#2B2B2B";
            crc2.lineWidth = crc2.lineWidth * 0.95;
            crc2.moveTo(moveX, moveY);
            crc2.lineTo(moveX, moveY);
            crc2.stroke();
            crc2.beginPath();
        }
    }

    function rubber(_amount: number): void {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "round";
            crc2.strokeStyle = getRandomColor();
            crc2.lineWidth = getRandomValueWidth(width / 20);
            let moveX: number = sizedDown();
            let moveY: number = sizedDown();
            crc2.moveTo(moveX, moveY);
            crc2.bezierCurveTo(sizedDown(), sizedDown(), sizedDown(), sizedDown(), sizedDown(), sizedDown());
            crc2.stroke();
            crc2.beginPath();
        }
    }

    function smoke(_amount: number): void {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let j: number = amount / 100;
        let monocol: string = getRandomColor();
        HEXtoHSL(monocol);
        crc2.strokeStyle = monocol;
        for (j; j > 0; j--) {
            crc2.lineCap = "round";
            let lineWidth: number = getRandomValueWidth(width / 2);
            crc2.lineWidth = lineWidth;
            let moveX: number = sizedDown();
            let moveY: number = sizedDown();
            crc2.moveTo(moveX, moveY);
            crc2.lineTo(moveX, moveY);
            crc2.stroke();
            crc2.beginPath();
            for (_amount; _amount > 0; _amount--) {
                switch (getRandomValue(3)) {
                    case 0:
                        moveX = moveX + getRandomValue(3);
                        moveY = moveY + getRandomValue(3);
                    case 1:
                        moveX = moveX - getRandomValue(3);
                        moveY = moveY - getRandomValue(3);
                    case 2:
                        moveX = moveX + getRandomValue(3);
                        moveY = moveY - getRandomValue(3);
                    case 3:
                        moveX = moveX - getRandomValue(3);
                        moveY = moveY + getRandomValue(3);
                }
                crc2.lineWidth = crc2.lineWidth * 0.995;
                crc2.lineTo(moveX, moveY);
                crc2.stroke();
                crc2.beginPath();
            }

            l = l + 1;
            hsl = "hsl(" + h + ", " + s + "%, " + l + "%)";
            crc2.strokeStyle = hsl;
            _amount = 1000;
        }
    }

    function download(): void {
        const image: string = canvas.toDataURL();
        const link: HTMLAnchorElement = document.createElement("a");
        link.href = image;
        link.download = "SilvanCanvas.png";
        link.click();
    }

}