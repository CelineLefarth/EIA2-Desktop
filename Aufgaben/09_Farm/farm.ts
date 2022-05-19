namespace farm {

    interface FoodStack {
        food: string;
        amount: number;
    }
    export let silo: FoodStack[] = [];

    window.addEventListener("load", hdlLoad);
    function hdlLoad(): void {
        document.querySelector(".simulate").addEventListener("click", simulateDay);
    }

    function getRandomValue(_max: number): number {
        let randomValue: number = Math.floor(Math.random() * _max);
        return randomValue;
    }

    function updateSilo(): void {

        if (silo.length != 0) {
            document.getElementById("text").innerHTML += "<b>" + "The silo is now filled with: " + "<br>" + "<b>";
            for (let i: number = 0; i < silo.length; i++) {
                document.getElementById("text").innerHTML += silo[i].food + " " + silo[i].amount + "<br>";
            }
        }
        else {document.getElementById("text").innerHTML += "<b>" + "The silo is empty. The farmer needs to refill it until the next day!" + "<b>"; }
    
    }

    function simulateDay(): void {
        
        let foodList: string[] = ["Wheat", "Seed", "Potato", "Carrot", "Lettuce"];

        document.getElementById("text").innerHTML = "";
        document.getElementById("text").innerHTML += "<b>" + "The silo is filled with: " + "<br>" + "<b>";

        for (let i: number = 0; i < 5; i++) {
        let chosenFood: number = getRandomValue(foodList.length - 1);
        let randomFood: FoodStack = {food: foodList[chosenFood], amount: getRandomValue(10) + 1};
        foodList.splice(chosenFood, 1);
        silo.push(randomFood);
        document.getElementById("text").innerHTML += silo[i].food + " " + silo[i].amount + "<br>";
        }

        let cow: Animal = new Animal("Jeff", "Cow", silo[0].food, silo[0].amount, "Muuh");
        cow.eat();
        cow.sing();
        updateSilo();

        let chicken: Animal = new Animal("John", "Chicken", silo[0].food, silo[0].amount, "Bawk");
        chicken.eat();
        chicken.sing();
        updateSilo();

        let pig: Animal = new Animal("Jasper", "Pig", silo[0].food, silo[0].amount, "Oink");
        pig.eat();
        pig.sing();
        updateSilo();

        let donkey: Animal = new Animal("Jeremy", "Donkey", silo[0].food, silo[0].amount, "I-Ahh");
        donkey.eat();
        donkey.sing();
        updateSilo();

        let rabbit: Animal = new Animal("Johnny", "Rabbit", silo[0].food, silo[0].amount, "Meep");
        rabbit.eat();
        rabbit.sing();
        updateSilo();

    }



}