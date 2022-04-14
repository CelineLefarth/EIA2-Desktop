namespace Memory {

    /*
    Aufgabe: <03 Memory>
    Name: <Silvan Woschny>
    Matrikel: <	269370>
    Datum: <12.04.2022>
    Quellen: <>
    */

    window.addEventListener("load", handleLoad);

    //Game variables
    let seconds: number = 0;
    let minutes: number = 0;
    let clicked: number = 0;
    let toCheck: number[] = [];

    //Default values
    let cardSize: number = 40;
    let cardFont: string = "";

    //All menu options
    const stepper: HTMLInputElement = document.createElement("input");
    const delMenu: HTMLElement = document.createElement("button");
    const sizeSlider: HTMLInputElement = document.createElement("input");
    const sizeAmount: HTMLElement = document.createElement("span");
    const colorSelectBG: HTMLInputElement = document.createElement("input");
    const colorSelectFont: HTMLInputElement = document.createElement("input");
    const colorSelectCard: HTMLInputElement = document.createElement("input");


    //Menu <-------------------------------------------------------------------->
    function handleLoad(): void {
        startMenu();
    }
    function startMenu(): void {
        changeCardNumber();
        changeCardSize();
        changeCardColor();
        changeCardFont();
        delStartMenu();
    }


    //Number-Stepper in menu
    function changeCardNumber(): void {
        const label: HTMLElement = document.createElement("label");
        stepper.setAttribute("type", "number");
        stepper.setAttribute("value", "18");
        stepper.setAttribute("min", "10");
        stepper.setAttribute("max", "50");
        stepper.setAttribute("step", "2");
        label.innerHTML = "Kartenanzahl: ";
        document.querySelector("form").appendChild(label);
        document.querySelector("form").appendChild(stepper);
    }


    //Card-Size in menu
    function changeCardSize(): void {
        const label: HTMLElement = document.createElement("label");
        sizeSlider.setAttribute("type", "range");
        sizeSlider.setAttribute("min", "5");
        sizeSlider.setAttribute("max", "50");
        sizeSlider.setAttribute("step", "1");
        sizeSlider.setAttribute("value", "40");
        label.innerHTML = "<br>" + "Kartengröße: ";
        document.querySelector("form").appendChild(label);
        document.querySelector("form").appendChild(sizeSlider);
        document.querySelector("form").appendChild(sizeAmount);
        sizeAmount.innerHTML = "40";
        sizeSlider.addEventListener("input", displayAmount);
    }
    function displayAmount(_event: Event): void {
        let size: string = sizeSlider.value;
        if (parseInt(size) < 10) {
            sizeAmount.innerHTML = "0" + size;
        }
        else {
            sizeAmount.innerHTML = size;
        }
        cardSize = parseInt(size);
    }


    //Card-Colors in menu
    function changeCardColor(): void {
        changeBgCardColor();
        changeFontCardColor();
        changeCardCardColor();
    }
    function changeBgCardColor(): void {
        const labelBG: HTMLElement = document.createElement("label");
        document.querySelector("form").appendChild(labelBG);
        labelBG.innerHTML = "<br>" + "Hintergrundfarbe: ";
        colorSelectBG.setAttribute("type", "color");
        colorSelectBG.setAttribute("id", "bg");
        colorSelectBG.setAttribute("value", "#ffffff");
        labelBG.setAttribute("for", "bg");
        document.querySelector("form").appendChild(colorSelectBG);
    }
    function changeFontCardColor(): void {
        const labelFont: HTMLElement = document.createElement("label");
        document.querySelector("form").appendChild(labelFont);
        labelFont.innerHTML = "<br>" + "Fontfarbe: ";
        colorSelectFont.setAttribute("type", "color");
        colorSelectFont.setAttribute("id", "font");
        colorSelectFont.setAttribute("value", "#000000");
        labelFont.setAttribute("for", "font");
        document.querySelector("form").appendChild(colorSelectFont);
    }
    function changeCardCardColor(): void {
        const labelCard: HTMLElement = document.createElement("label");
        document.querySelector("form").appendChild(labelCard);
        labelCard.innerHTML = "<br>" + "Kartenfarbe: ";
        colorSelectCard.setAttribute("type", "color");
        colorSelectCard.setAttribute("id", "card");
        colorSelectCard.setAttribute("value", "#000000");
        labelCard.setAttribute("for", "card");
        document.querySelector("form").appendChild(colorSelectCard);
    }


    //Card-Font in menu
    function changeCardFont(): void {
        const fontButton1: HTMLInputElement = document.createElement("input");
        const label1: HTMLElement = document.createElement("label");
        label1.style.fontFamily = "monospace";
        label1.style.fontWeight = "900";
        const fontButton2: HTMLInputElement = document.createElement("input");
        const label2: HTMLElement = document.createElement("label");
        label2.style.fontFamily = "sand-serif";
        const fontButton3: HTMLInputElement = document.createElement("input");
        const label3: HTMLElement = document.createElement("label");
        label3.style.fontFamily = "Lucida Sans";
        let allFontButtons: HTMLInputElement[] = [fontButton1, fontButton2, fontButton3];
        for (let i: number = 0; i <= 2; i++) {
            allFontButtons[i].setAttribute("type", "radio");
            allFontButtons[i].setAttribute("name", "radio");
            allFontButtons[i].setAttribute("id", "radio" + i);
            if (i == 0) {
                allFontButtons[i].value = "monospace";
                allFontButtons[i].setAttribute("checked", "checked");
                label1.setAttribute("for", "radio" + i);
                label1.innerHTML = "<br>" + allFontButtons[i].value + "";
                document.querySelector("form").appendChild(label1);
            } //Default Font
            if (i == 1) {
                allFontButtons[i].value = "sans-serif";
                label2.setAttribute("for", "radio" + i);
                label2.innerHTML = "<br>" + allFontButtons[i].value + "";
                document.querySelector("form").appendChild(label2);
            }
            if (i == 2) {
                allFontButtons[i].value = "Lucida Sans";
                label3.setAttribute("for", "radio" + i);
                label3.innerHTML = "<br>" + allFontButtons[i].value + "";
                document.querySelector("form").appendChild(label3);
            }
            document.querySelector("form").appendChild(allFontButtons[i]);
        }

    }



    function delStartMenu(): void {
        document.querySelector("form").appendChild(delMenu);
        delMenu.setAttribute("type", "button");
        delMenu.innerHTML = "Start";
        delMenu.addEventListener("click", startGame);
    }



    function startGame(): void {
        radioEntry();
        document.querySelector("body").style.backgroundColor = colorSelectBG.value;
        document.querySelector("body").removeChild(document.querySelector("form"));
        createCards(parseInt(stepper.value));
    }
    function radioEntry(): void {
        let formData: FormData = new FormData(document.forms[0]);
        if (formData.get("radio") != null && formData.get("radio") != undefined) {
            cardFont = (formData.get("radio")) + "";
        }
    }








    //Game <-------------------------------------------------------------------->
    function createCards(_amount: number): void {
        let cards: number[] = [];
        for (let i: number = _amount; i > 0; i--) {
            if (i % 2 == 0) {
                cards.push(i);      //card 1
                cards.push(i);      //card 2
            }
        }
        shuffleCards(cards);
    }



    function shuffleCards(_cards: number[]): void {
        for (let i: number = _cards.length; i > 0; i--) {
            let randomNumber: number = Math.floor(Math.random() * _cards.length);
            playCard(_cards, randomNumber);
            _cards.splice(randomNumber, 1);
        }
        startTimer();
    }



    function playCard(_cards: number[], _randomNumber: number): void {
        let card: HTMLDivElement = document.createElement("div");
        card.className = _cards[_randomNumber] + "";
        card.style.padding = cardSize + "px";
        card.style.fontFamily = cardFont + "";
        card.style.color = colorSelectCard.value;
        card.style.backgroundColor = colorSelectCard.value;
        document.querySelector("#wrapper").appendChild(card);
        card.addEventListener("click", clickCard);
        card.style.backgroundColor = colorSelectCard.value;
        if (_cards[_randomNumber] < 10) { card.innerHTML = "0" + _cards[_randomNumber] + ""; }
        else { card.innerHTML = _cards[_randomNumber] + ""; }
    }



    function clickCard(): void {
        this.setAttribute("noninteraction", "true");
        if (clicked > 0) {
            document.querySelector("body").setAttribute("noninteraction", "true");
        }
        clicked++;
        setTimeout(click, 2000);
        this.style.backgroundColor = "lightblue";
        this.style.color = colorSelectFont.value;
        toCheck.push(this.className);
    }



    function click(): void {

        if (clicked == 2) {
            let checkOne: number = toCheck[0];
            let checkTwo: number = toCheck[1];

            if (checkOne == checkTwo) {
                isMatch(checkOne);
            }
            else {
                noMatch(checkOne, checkTwo);
            }
            toCheck = [];
            clicked = 0;
        }
        document.querySelector("body").setAttribute("noninteraction", "false");
    }



    function isMatch(_checkOne: number): void {
        alert("Du hast ein Paar Gefunden");
        let elements: HTMLCollectionOf<Element> = document.getElementsByClassName(_checkOne + "");
        elements[0].setAttribute("hidden", "deleted");
        elements[1].setAttribute("hidden", "deleted");
        if (document.querySelectorAll("div div").length == document.querySelectorAll("[hidden = 'deleted']").length) {
            alert("Du hast gewonnen! " + "Du hast: " + minutes + " Minuten und " + seconds + " Sekunden " + "gebraucht! Das Spiel wird nun neu gestartet.");
            location.reload();
        }
    }



    function noMatch(_checkOne: number, _checkTwo: number): void {
        let elementsCheckOne: HTMLCollectionOf<Element> = document.getElementsByClassName(_checkOne + "");
        elementsCheckOne[0].removeAttribute("noninteraction");
        elementsCheckOne[1].removeAttribute("noninteraction");
        let elOne1: HTMLElement = <HTMLElement>elementsCheckOne[0];
        elOne1.style.backgroundColor = colorSelectCard.value;
        elOne1.style.color = colorSelectCard.value;
        let elOne2: HTMLElement = <HTMLElement>elementsCheckOne[1];
        elOne2.style.backgroundColor = colorSelectCard.value;
        elOne2.style.color = colorSelectCard.value;
        let elementsCheckTwo: HTMLCollectionOf<Element> = document.getElementsByClassName(_checkTwo + "");
        elementsCheckTwo[0].removeAttribute("noninteraction");
        elementsCheckTwo[1].removeAttribute("noninteraction");
        let elTwo1: HTMLElement = <HTMLElement>elementsCheckTwo[0];
        elTwo1.style.backgroundColor = colorSelectCard.value;
        elTwo1.style.color = colorSelectCard.value;
        let elTwo2: HTMLElement = <HTMLElement>elementsCheckTwo[1];
        elTwo2.style.backgroundColor = colorSelectCard.value;
        elTwo2.style.color = colorSelectCard.value;
    }



    function startTimer(): void {
        setInterval(timer, 1000);
    }
    function timer(): void {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10) document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10) document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }
}