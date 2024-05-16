

class Animal {
    constructor(name, speed, fly) {
        this.name = name;
        this.speed = speed;
        this.fly = fly;

        this.life = 100;
    }

    attack() {

    }

    move() {

    }

    eat() {

    }

    sleep() {

    }

}

class Bird extends Animal {
    constructor(name, speed, fly) {
        super(name, speed, fly);
    }

    fly() {

    }

}

new Animal("Monkey", 10, false);
new Animal("Eagle", 20, true);

new Bird("Eagle", 20, true);