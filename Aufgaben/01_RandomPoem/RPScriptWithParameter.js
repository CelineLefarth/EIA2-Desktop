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
        function getVerse(_subjekt, _prädikat, _objekt) {
            let subIndex = getRandom();
            let präIndex = getRandom();
            let objIndex = getRandom();
            let line = _subjekt[subIndex] + " " + _prädikat[präIndex] + " " + _objekt[objIndex];
            document.querySelector("span").innerHTML += line + "<br>";
            _subjekt.splice(subIndex, 1);
            _prädikat.splice(präIndex, 1);
            _objekt.splice(objIndex, 1);
            return line;
        }
        for (let i = subjekt.length; i > 0; i--) {
            let printLine = getVerse(subjekt, prädikat, objekt);
            console.log(printLine);
        }
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=RPScriptWithParameter.js.map