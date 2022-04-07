var MemoryA;
(function (MemoryA) {
    let allMatches = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10",
        "11", "11", "12", "12", "13", "13", "14", "14", "15", "15", "16", "16", "17", "17", "18", "19", "20", "20", "21", "21", "22", "22",
        "23", "23", "24", "24", "25", "25"];
    let nMatches = [];
    let num = 5;
    let seconds = 0;
    let minutes = 0;
    let clicked = 0;
    let values = [];
    let divs = [];
    let prog = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#inc").addEventListener("click", numberMatches);
        document.querySelector("#dec").addEventListener("click", numberMatches);
        document.querySelector("button").addEventListener("click", startGame);
    }
    function numberMatches() {
        console.log(num);
        console.log(this.id);
        if (this.id == "dec" && num > 5) {
            num--;
        }
        else if (this.id == "dec" && num == 5) {
            console.log("Cannot be lower decreased than 5");
        }
        else if (this.id == "inc" && num < 25) {
            num++;
        }
        else if (this.id == "inc" && num == 25) {
            console.log("Cannot be higher increased than 25");
        }
        console.log(num);
        document.querySelector("#num").innerHTML = num + "";
    }
    function startGame() {
        console.log("start");
        for (let i = 0; i < num * 2; i++) {
            nMatches.push(allMatches[0]);
            allMatches.splice(0, 1);
        }
        console.log("All: ", allMatches);
        console.log("N: ", nMatches);
        shuffleArray(nMatches);
        startTimer();
        console.log("Mixed N: ", nMatches);
        for (let i = 0; i < nMatches.length; i++) {
            let card = document.createElement("div");
            let value = document.createElement("span");
            card.appendChild(value);
            card.className = "card";
            value.className = nMatches[i];
            document.querySelector("#plane").appendChild(card);
            card.addEventListener("click", turncards);
        }
        document.querySelector("button").style.display = "none";
        const incButton = document.querySelector("#inc");
        const decButton = document.querySelector("#dec");
        const numButton = document.querySelector("#num");
        incButton.style.display = "none";
        decButton.style.display = "none";
        numButton.style.display = "none";
    }
    function shuffleArray(_array) {
        let toShuffle = nMatches.length, currentShuffle;
        while (toShuffle != 0) {
            currentShuffle = Math.floor(Math.random() * toShuffle);
            toShuffle--;
            [_array[toShuffle], _array[currentShuffle]] = [_array[currentShuffle], _array[toShuffle]];
        }
        return _array;
    }
    function turncards(_event) {
        clicked++;
        console.log("turn");
        this.className = "card active";
        console.log(_event.target);
        let div = _event.target;
        let span = div.firstChild;
        let shownValue = parseInt(span.className);
        if (shownValue > 9) {
            span.innerHTML = span.className;
        }
        else if (shownValue < 10) {
            span.innerHTML = "0" + span.className;
        }
        let value = span.className;
        values.push(value);
        divs.push(this);
        if (clicked == 2) {
            document.querySelector("body").style.pointerEvents = "none";
            setTimeout(timeOut, 2000);
            function timeOut() {
                if (values[0] == values[1]) {
                    alert("Yey");
                    divs[0].style.visibility = "hidden";
                    divs[1].style.visibility = "hidden";
                    prog++;
                    document.querySelector("#progress").innerHTML = "Progress: " + prog;
                    values = [];
                    divs = [];
                    clicked = 0;
                    document.querySelector("body").style.pointerEvents = "all";
                    if (document.querySelectorAll(".active").length == document.querySelectorAll(".card").length) {
                        alert("You Won in " + minutes + " minutes and " + seconds + " seconds!");
                    }
                }
                else {
                    divs[0].className = "card";
                    divs[1].className = "card";
                    let spanOne = divs[0].firstChild;
                    spanOne.innerHTML = "";
                    let spanTwo = divs[1].firstChild;
                    spanTwo.innerHTML = "";
                    values = [];
                    divs = [];
                    clicked = 0;
                    document.querySelector("body").style.pointerEvents = "all";
                }
            }
        }
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
})(MemoryA || (MemoryA = {}));
//# sourceMappingURL=MemoryA.js.map