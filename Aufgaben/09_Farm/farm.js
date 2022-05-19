var farm;
(function (farm) {
    farm.silo = [];
    window.addEventListener("load", hdlLoad);
    function hdlLoad() {
        document.querySelector(".simulate").addEventListener("click", simulateDay);
    }
    function getRandomValue(_max) {
        let randomValue = Math.floor(Math.random() * _max);
        return randomValue;
    }
    function updateSilo() {
        if (farm.silo.length != 0) {
            document.getElementById("text").innerHTML += "<b>" + "The silo is now filled with: " + "<br>" + "<b>";
            for (let i = 0; i < farm.silo.length; i++) {
                document.getElementById("text").innerHTML += farm.silo[i].food + " " + farm.silo[i].amount + "<br>";
            }
        }
        else {
            document.getElementById("text").innerHTML += "<b>" + "The silo is empty. The farmer needs to refill it until the next day!" + "<b>";
        }
    }
    function simulateDay() {
        let foodList = ["Wheat", "Seed", "Potato", "Carrot", "Lettuce"];
        document.getElementById("text").innerHTML = "";
        document.getElementById("text").innerHTML += "<b>" + "The silo is filled with: " + "<br>" + "<b>";
        for (let i = 0; i < 5; i++) {
            let chosenFood = getRandomValue(foodList.length - 1);
            let randomFood = { food: foodList[chosenFood], amount: getRandomValue(10) + 1 };
            foodList.splice(chosenFood, 1);
            farm.silo.push(randomFood);
            document.getElementById("text").innerHTML += farm.silo[i].food + " " + farm.silo[i].amount + "<br>";
        }
        let cow = new farm.Animal("Jeff", "Cow", farm.silo[0].food, farm.silo[0].amount, "Muuh");
        cow.eat();
        cow.sing();
        updateSilo();
        let chicken = new farm.Animal("John", "Chicken", farm.silo[0].food, farm.silo[0].amount, "Bawk");
        chicken.eat();
        chicken.sing();
        updateSilo();
        let pig = new farm.Animal("Jasper", "Pig", farm.silo[0].food, farm.silo[0].amount, "Oink");
        pig.eat();
        pig.sing();
        updateSilo();
        let donkey = new farm.Animal("Jeremy", "Donkey", farm.silo[0].food, farm.silo[0].amount, "I-Ahh");
        donkey.eat();
        donkey.sing();
        updateSilo();
        let rabbit = new farm.Animal("Johnny", "Rabbit", farm.silo[0].food, farm.silo[0].amount, "Meep");
        rabbit.eat();
        rabbit.sing();
        updateSilo();
    }
})(farm || (farm = {}));
//# sourceMappingURL=farm.js.map