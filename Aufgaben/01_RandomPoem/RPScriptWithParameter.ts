namespace randomPoem {
window.addEventListener("load", handleLoad);

let subjekt: string[] = ["C3PO", "R2D2", "Ein kleiner Ewok", "Ein großer Wookiee", "Yoda", "Jar Jar Binks"];
let prädikat: string[] = ["tötet", "umarmt", "beobachtet", "springt auf", "erwürgt", "umklammert"];
let objekt: string[] = ["General Grievous", "Count Dooku", "Darth Plagueis", "Boba Fett", "Jabba Desilijic Tiure", "Asajj Ventress"];

function handleLoad(): void {

    function getRandom(): number {
        return Math.floor(Math.random() * subjekt.length);
    }

    function getVerse(_subjekt: string[], _prädikat: string[], _objekt: string[]): string {

        let subIndex: number = getRandom();
        let präIndex: number = getRandom();
        let objIndex: number = getRandom();

        let line: string = _subjekt[subIndex] + " " + _prädikat[präIndex] + " " + _objekt[objIndex];
        document.querySelector("span").innerHTML += line + "<br>";

        _subjekt.splice(subIndex, 1);
        _prädikat.splice(präIndex, 1);
        _objekt.splice(objIndex, 1);

        return line;
    }

    for (let i: number = subjekt.length; i > 0; i--) {
        let printLine: string = getVerse(subjekt, prädikat, objekt);
        console.log(printLine);
    }
}
}