var randomPoem;
(function (randomPoem) {
    window.addEventListener("load", handleLoad);
    let subjects = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
    let predicates = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
    let objekts = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];
    let subjectsCopy = [];
    let predicatesCopy = [];
    let objectsCopy = [];
    subjectsCopy = subjects.concat([]);
    predicatesCopy = predicates.concat([]);
    objectsCopy = objekts.concat([]);
    function getRandom() {
        return Math.floor(Math.random() * subjectsCopy.length);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let subIndex = getRandom();
        let preIndex = getRandom();
        let objIndex = getRandom();
        let line = _subjects[subIndex] + " " + _predicates[preIndex] + " " + _objects[objIndex];
        document.querySelector("span").innerHTML += line + "<br>";
        _subjects.splice(subIndex, 1);
        _predicates.splice(preIndex, 1);
        _objects.splice(objIndex, 1);
        return line;
    }
    function handleLoad() {
        for (let i = subjects.length; i > 0; i--) {
            let printLine = getVerse(subjectsCopy, predicatesCopy, objectsCopy);
            console.log(printLine);
        }
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=RPScriptWithParameter.js.map