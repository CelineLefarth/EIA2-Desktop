namespace OldMacCorni {
    window.addEventListener("load", hdlLoad);



    function hdlLoad(): void {
        let cow: Animal = new Animal ("cow", "grass", 10, "moo", 100);
        let dog: Animal = new Animal ("dog", "dogfood", 0.5, "woof", 5);
        let chicken: Animal = new Animal ("chicken", "grains", 0.3, "gawk", 2);
        let sheep: Animal = new Animal ("sheep", "hay", 2, "Gaah", 10);
        let pig: Animal = new Animal ("pig", "junk", 1, "Oink", 5);
        animalDo(cow, dog, chicken, sheep, pig);
        document.querySelector("#next").addEventListener("click", () => { animalDo(cow, dog, chicken, sheep, pig); });
    }

    function animalDo(_cow: Animal, _dog: Animal, _chicken: Animal, _sheep: Animal, _pig: Animal): void {
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
}