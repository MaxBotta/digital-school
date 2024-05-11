

class Animal {
    constructor(name, strength, wild, size, speed, type) {
        this.name = name;
        this.wild = wild;
        this.age = 0;
        this.size = size;
        this.speed = speed;
        this.type = type;
        this.life = 100;
        this.hunger = 0;
        this.sleeping = false;
        this.strength = strength;
    }

    eat(lifePoints) {
        this.life = this.life + lifePoints;

        if(this.life > 100) {
            this.life = 100;
        }
        
        console.log(this.name + " hat noch " + this.life + " Lebenspunkte!");
    }

    sleep(time) {
        this.sleeping = true;
        setInterval(() => {
            this.life = this.life + 2;
        }, 1000);
    }

    attack(enemy) {
        enemy.life = enemy.life - this.strength;
        console.log(enemy.name + " hat noch " + enemy.life + " Lebenspunkte!");

        if(enemy.life <= 0) {
            console.log(enemy.name + " ist tot!");
        }
    }

    run() {

    }

}


let lion = new Animal("Lion", 40);
let zebra = new Animal("Zebra", 5);
