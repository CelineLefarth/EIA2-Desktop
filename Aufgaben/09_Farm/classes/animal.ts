namespace farm {
    export class Animal {

        name: string;
        breed: string;
        food: string;
        amount: number;
        sound: string;


        constructor(_name: string, _breed: string, _food: string, _amount: number, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.food = _food;
            this.amount = _amount;
            this.sound = _sound;

        }

        eat(): void {
            document.getElementById("text").innerHTML += "<b>" + "<br>" + this.name + " the " + this.breed + " eats " + this.amount + "x " + this.food + "<br>" + "<b>";
            silo.splice(0, 1);
        }

        sing(): void {
            document.getElementById("text").innerHTML += "Old MacDonald had a farm Ee i ee i oh! " + "<br>" +
                "And on that farm he had a " + this.breed + " Ee i ee i oh! " + "<br>" +
                "With a " + this.sound + " " + this.sound + " here " + "<br>" +
                "And a " + this.sound + " " + this.sound + " there " + "<br>" +
                "Here a " + this.sound + " there a " + this.sound + "<br>" +
                "Everywhere a " + this.sound + " " + this.sound + "<br>" +
                "Old MacDonald had a farm Ee i ee i oh!" + "<br>" + "<br>";
        }

    }
}