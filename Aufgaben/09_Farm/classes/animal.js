var farm;
(function (farm) {
    class Animal {
        name;
        breed;
        food;
        amount;
        sound;
        constructor(_name, _breed, _food, _amount, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;
        }
        eat() {
            document.getElementById("text").innerHTML += "<b>" + "<br>" + this.name + " the " + this.breed + " eats " + this.amount + "x " + this.food + "<br>" + "<b>";
            farm.silo.splice(0, 1);
        }
        sing() {
            document.getElementById("text").innerHTML += "Old MacDonald had a farm Ee i ee i oh! " + "<br>" +
                "And on that farm he had a " + this.breed + " Ee i ee i oh! " + "<br>" +
                "With a " + this.sound + " " + this.sound + " here " + "<br>" +
                "And a " + this.sound + " " + this.sound + " there " + "<br>" +
                "Here a " + this.sound + " there a " + this.sound + "<br>" +
                "Everywhere a " + this.sound + " " + this.sound + "<br>" +
                "Old MacDonald had a farm Ee i ee i oh!" + "<br>" + "<br>";
        }
    }
    farm.Animal = Animal;
})(farm || (farm = {}));
//# sourceMappingURL=animal.js.map