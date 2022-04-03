
/*
Aufgabe: <01 Random Poem>
Name: <Silvan Woschny>
Matrikel: <	269370>
Datum: <03.04.2022>
Quellen: <>
*/

namespace randomPoem {
    window.addEventListener("load", handleLoad);

    let subjects: string[] = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
    let predicates: string[] = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
    let objekts: string[] = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];

    let subjectsCopy: string[] = [];
    let predicatesCopy: string[] = [];
    let objectsCopy: string[] = [];


    subjectsCopy = subjects.concat([]);
    predicatesCopy = predicates.concat([]);
    objectsCopy = objekts.concat([]);

    function getRandom(): number {
        return Math.floor(Math.random() * subjectsCopy.length);
    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {

        let subIndex: number = getRandom();
        let preIndex: number = getRandom();
        let objIndex: number = getRandom();

        let line: string = _subjects[subIndex] + " " + _predicates[preIndex] + " " + _objects[objIndex];
        document.querySelector("span").innerHTML += line + "<br>";

        _subjects.splice(subIndex, 1);
        _predicates.splice(preIndex, 1);
        _objects.splice(objIndex, 1);

        return line;
    }

    function handleLoad(): void {
        for (let i: number = subjects.length; i > 0; i--) {
            let printLine: string = getVerse(subjectsCopy, predicatesCopy, objectsCopy);
            console.log(printLine);
        }
    }
}