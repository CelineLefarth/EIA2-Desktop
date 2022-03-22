var randomPoem;
(function (randomPoem) {
    window.addEventListener("load", handleLoad);
    let subjekt = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
    let prädikat = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
    let objekt = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];
    function handleLoad() {
        function getRandom() {
            return Math.floor(Math.random() * subjekt.length);
        }
        function getVerse() {
            let subIndex = getRandom();
            let präIndex = getRandom();
            let objIndex = getRandom();
            let line = subjekt[subIndex] + " " + prädikat[präIndex] + " " + objekt[objIndex];
            document.querySelector("span").innerHTML += line + "<br>";
            subjekt.splice(subIndex, 1);
            prädikat.splice(präIndex, 1);
            objekt.splice(objIndex, 1);
            return line;
        }
        for (let i = subjekt.length; i > 0; i--) {
            console.log(getVerse());
        }
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=RPScript.js.map