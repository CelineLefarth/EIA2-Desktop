namespace OldMacCorni {
    export class Animal {

    name: string;
    food: string;
    foodamount: number;
    sound: string;
    initialFoodamount: number;


    constructor(_name: string, _food: string, _foodamount: number, _sound: string, _initialFoodamount: number) {
        this.name = _name;
        this.food = _food;
        this.foodamount = _foodamount;
        this.sound = _sound;
        this.initialFoodamount = _initialFoodamount;
    }

    eat(): void {
        this.initialFoodamount = this.initialFoodamount - this.foodamount;
        document.querySelector("#" + this.name + "food").innerHTML = "";
        document.querySelector("#" + this.name + "food").innerHTML = 
        this.food + ":" + Math.round(this.initialFoodamount * 100) / 100 + "kg left" + "<br>";
    }

    sing(): void {
        document.querySelector("#" + this.name + "lyrics").innerHTML = "And on that farm he had a " + this.name + " Ee i ee i oh! " + "<br>" +
        "With a " + this.sound + " " + this.sound + " here " + "<br>" +
        "And a " + this.sound + " " + this.sound + " there " + "<br>" +
        "Here a " + this.sound + " there a " + this.sound + "<br>" +
        "Everywhere a " + this.sound + " " + this.sound + "<br>" +
        "Old MacDonald had a farm Ee i ee i oh!" + "<br>" + "<br>";
    }

}
}