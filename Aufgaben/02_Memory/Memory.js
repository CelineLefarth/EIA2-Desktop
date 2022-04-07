var Memory;
(function (Memory) {
    window.addEventListener("load", handleLoad);
    let seconds = 0;
    let minutes = 0;
    let clicked = 0;
    let toCheck = [];
    function handleLoad() {
        createPrompt();
    }
    function createPrompt() {
        const amount = prompt("Mit wie vielen Karten willst du spielen? Denk daran, dass es eine gerade Zahl zwischen 10 und 50 sein muss!", "18");
        let cardAmount = parseInt(amount);
        if (cardAmount % 2 == 0 && cardAmount <= 50 && cardAmount >= 10) {
            createCards(cardAmount);
        }
        else {
            createPrompt();
        }
    }
    function createCards(_amount) {
        let cards = [];
        for (let i = _amount; i > 0; i--) {
            if (i % 2 == 0) {
                cards.push(i); //Karte 1
                cards.push(i); //Karte 2
            }
        }
        shuffleCards(cards);
    }
    function shuffleCards(_cards) {
        for (let i = _cards.length; i > 0; i--) {
            let randomNumber = Math.floor(Math.random() * _cards.length);
            playCard(_cards, randomNumber);
            _cards.splice(randomNumber, 1);
        }
        startTimer();
    }
    function playCard(_cards, _randomNumber) {
        let card = document.createElement("div");
        card.className = _cards[_randomNumber] + "";
        document.querySelector("#wrapper").appendChild(card);
        card.addEventListener("click", clickCard);
        card.setAttribute("hidden", "true");
        if (_cards[_randomNumber] < 10) {
            card.innerHTML = "0" + _cards[_randomNumber] + "";
        }
        else {
            card.innerHTML = _cards[_randomNumber] + "";
        }
    }
    function clickCard() {
        this.setAttribute("noninteraction", "true");
        if (clicked > 0) {
            document.querySelector("body").setAttribute("noninteraction", "true");
        }
        clicked++;
        setTimeout(click, 2000);
        this.setAttribute("hidden", "false");
        toCheck.push(this.className);
    }
    function click() {
        if (clicked == 2) {
            let checkOne = toCheck[0];
            let checkTwo = toCheck[1];
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
    function isMatch(_checkOne) {
        alert("Du hast ein Paar Gefunden");
        let elements = document.getElementsByClassName(_checkOne + "");
        elements[0].setAttribute("hidden", "deleted");
        elements[1].setAttribute("hidden", "deleted");
        if (document.querySelectorAll("div div").length == document.querySelectorAll("[hidden = 'deleted']").length) {
            alert("Du hast gewonnen! " + "Du hast: " + minutes + " Minuten und " + seconds + " Sekunden " + "gebraucht! Das Spiel wird nun neu gestartet.");
            location.reload();
        }
    }
    function noMatch(_checkOne, _checkTwo) {
        let elementsCheckOne = document.getElementsByClassName(_checkOne + "");
        elementsCheckOne[0].removeAttribute("noninteraction");
        elementsCheckOne[1].removeAttribute("noninteraction");
        elementsCheckOne[0].setAttribute("hidden", "true");
        elementsCheckOne[1].setAttribute("hidden", "true");
        let elementsCheckTwo = document.getElementsByClassName(_checkTwo + "");
        elementsCheckTwo[0].removeAttribute("noninteraction");
        elementsCheckTwo[1].removeAttribute("noninteraction");
        elementsCheckTwo[0].setAttribute("hidden", "true");
        elementsCheckTwo[1].setAttribute("hidden", "true");
    }
    function startTimer() {
        setInterval(timer, 1000);
    }
    function timer() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (seconds < 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes < 10)
            document.querySelector("#timer").innerHTML = "0" + minutes + ":" + seconds;
        else if (seconds < 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":0" + seconds;
        else if (seconds >= 10 && minutes >= 10)
            document.querySelector("#timer").innerHTML = minutes + ":" + seconds;
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory.js.map