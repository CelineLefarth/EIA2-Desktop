namespace randomPoem {
window.addEventListener("load", handleLoad);

let subject: string[] = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
let predicate: string[] = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
let objekt: string[] = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];

let subjectCopy: string[] = [];
let predicateCopy: string[] = [];
let objectCopy: string[] = [];

function handleLoad(): void {

    subjectCopy = subject.concat([]);
    predicateCopy = predicate.concat([]);
    objectCopy = objekt.concat([]);

    function getRandom(): number {
        return Math.floor(Math.random() * subjectCopy.length);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {

        let subIndex: number = getRandom();
        let preIndex: number = getRandom();
        let objIndex: number = getRandom();

        let line: string = _subject[subIndex] + " " + _predicate[preIndex] + " " + _object[objIndex];
        document.querySelector("span").innerHTML += line + "<br>";

        _subject.splice(subIndex, 1);
        _predicate.splice(preIndex, 1);
        _object.splice(objIndex, 1);

        return line;
    }

    for (let i: number = subject.length; i > 0; i--) {
        let printLine: string = getVerse(subjectCopy, predicateCopy, objectCopy);
        console.log(printLine);
    }
}
}