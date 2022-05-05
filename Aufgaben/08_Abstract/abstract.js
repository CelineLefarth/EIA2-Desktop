var Abstract;
(function (Abstract) {
    window.addEventListener("load", hdlLoad);
    let canvas;
    let crc2;
    let sliderAmount;
    let sliderWidth;
    //Fractal Variabeln
    let moveX;
    let moveY;
    let move1;
    let move2;
    let move3;
    let moveNewX;
    let moveNewY;
    let moveLast;
    let counter;
    let amount;
    let h;
    let s;
    let l;
    let hsl;
    let width;
    let firstTime;
    function hdlLoad() {
        canvas = document.querySelector("#canvas");
        crc2 = canvas.getContext("2d");
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
    function sizedDown() {
        let downSized = 100 + getRandomValue(canvas.height - 200);
        return downSized;
    }
    function changeCanvasSize() {
        canvas.height = 700;
        canvas.width = 700;
    }
    function getRandomValueWidth(_max) {
        let randomValue = (Math.floor(Math.random() * _max));
        if (randomValue > 0) {
            return randomValue;
        }
        else {
            return 1;
        }
    }
    function getRandomValue(_max) {
        let randomValue = (Math.floor(Math.random() * _max));
        return randomValue;
    }
    //Alles im folgenden durch die //// abgetrennten Bereich habe ich aus dem Internet. Quellen sind angegeben
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //getRandomColor from https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    //HEXtoHSL from https://www.html-code-generator.com/javascript/color-converter-script
    function HEXtoHSL(_hex) {
        _hex = _hex.replace(/#/g, "");
        if (_hex.length === 3) {
            _hex = _hex.split("").map(function (_hex) {
                return _hex + _hex;
            }).join("");
        }
        let result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(_hex);
        if (!result) {
            return null;
        }
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        h = (max + min) / 2;
        s = (max + min) / 2;
        l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        }
        else {
            let d = max - min;
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
    function drawFractal(_amount) {
        document.querySelector(".label2").innerHTML = "Scale";
        document.querySelector(".label1").innerHTML = "Detail";
        let scale = parseInt(sliderWidth.value);
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
        let sPoints = 0;
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
                let moveX = 0;
                let moveY = 0;
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
    function moveToMidOfOneMove() {
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
    function destroyedCity(_amount) {
        crc2.save();
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.scale(0.7, 0.7);
        crc2.translate(50, 200);
        _amount = _amount / 100;
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        let endMove = sizedDown();
        let cityColor = getRandomColor();
        HEXtoHSL(cityColor);
        hsl = "hsl(" + h + ", " + s + "%, " + l + "%)";
        crc2.strokeStyle = hsl;
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "square";
            crc2.lineWidth = getRandomValueWidth(width);
            let startMove = sizedDown();
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
    function dots(_amount) {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "round";
            crc2.strokeStyle = getRandomColor();
            crc2.lineWidth = getRandomValueWidth(width);
            let moveX = sizedDown();
            let moveY = sizedDown();
            for (let j = 10; j > 0; j--) {
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
    function rubber(_amount) {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (_amount; _amount > 0; _amount--) {
            crc2.lineCap = "round";
            crc2.strokeStyle = getRandomColor();
            crc2.lineWidth = getRandomValueWidth(width / 20);
            let moveX = sizedDown();
            let moveY = sizedDown();
            crc2.moveTo(moveX, moveY);
            crc2.bezierCurveTo(sizedDown(), sizedDown(), sizedDown(), sizedDown(), sizedDown(), sizedDown());
            crc2.stroke();
            crc2.beginPath();
        }
    }
    function smoke(_amount) {
        document.querySelector(".label2").innerHTML = "Max Width";
        document.querySelector(".label1").innerHTML = "Amount";
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#2B2B2B";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let j = amount / 100;
        let monocol = getRandomColor();
        HEXtoHSL(monocol);
        crc2.strokeStyle = monocol;
        for (j; j > 0; j--) {
            crc2.lineCap = "round";
            let lineWidth = getRandomValueWidth(width / 2);
            crc2.lineWidth = lineWidth;
            let moveX = sizedDown();
            let moveY = sizedDown();
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
    function download() {
        const image = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = image;
        link.download = "SilvanCanvas.png";
        link.click();
    }
})(Abstract || (Abstract = {}));
//# sourceMappingURL=abstract.js.map