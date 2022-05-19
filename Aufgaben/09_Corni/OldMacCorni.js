var OldMacCorni;
(function (OldMacCorni) {
    window.addEventListener("load", hdlLoad);
    function hdlLoad() {
        let cow = new OldMacCorni.Animal("cow", "grass", 10, "moo", 100);
        let dog = new OldMacCorni.Animal("dog", "dogfood", 0.5, "woof", 5);
        let chicken = new OldMacCorni.Animal("chicken", "grains", 0.3, "gawk", 2);
        let sheep = new OldMacCorni.Animal("sheep", "hay", 2, "Gaah", 10);
        let pig = new OldMacCorni.Animal("pig", "junk", 1, "Oink", 5);
        animalDo(cow, dog, chicken, sheep, pig);
        document.querySelector("#next").addEventListener("click", () => { animalDo(cow, dog, chicken, sheep, pig); });
    }
    function animalDo(_cow, _dog, _chicken, _sheep, _pig) {
        _cow.eat();
        _cow.sing();
        _dog.eat();
        _dog.sing();
        _chicken.eat();
        _chicken.sing();
        _sheep.eat();
        _sheep.sing();
        _pig.eat();
        _pig.sing();
    }
})(OldMacCorni || (OldMacCorni = {}));
//# sourceMappingURL=OldMacCorni.js.map