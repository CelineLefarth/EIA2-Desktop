var randomPoem;
(function (randomPoem) {
    window.addEventListener("load", handleLoad);
    let subject = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
    let predicate = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
    let objekt = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];
    let subjectCopy = [];
    let predicateCopy = [];
    let objectCopy = [];
    function handleLoad() {
        subjectCopy = subject.concat([]);
        predicateCopy = predicate.concat([]);
        objectCopy = objekt.concat([]);
        function getRandom() {
            return Math.floor(Math.random() * subjectCopy.length);
        }
        function getVerse(_subject, _predicate, _object) {
            let subIndex = getRandom();
            let preIndex = getRandom();
            let objIndex = getRandom();
            let line = _subject[subIndex] + " " + _predicate[preIndex] + " " + _object[objIndex];
            document.querySelector("span").innerHTML += line + "<br>";
            _subject.splice(subIndex, 1);
            _predicate.splice(preIndex, 1);
            _object.splice(objIndex, 1);
            return line;
        }
        for (let i = subject.length; i > 0; i--) {
            let printLine = getVerse(subjectCopy, predicateCopy, objectCopy);
            console.log(printLine);
        }
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=RPScriptWithParameter.js.map