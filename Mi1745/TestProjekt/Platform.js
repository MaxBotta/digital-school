

class Platform  {

    constructor(x, y, width) {
        this.sprite = new Sprite()
        this.x = randInt(0, 1000);
        this.y = randInt(0, 600);
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = randInt(50, 300);
        this.sprite.height = 40;
        this.sprite.color = "green";
        this.sprite.collider = "static";
        this.sprite.velocity.x = randInt(-5, -1);
    }

    move() {
        this.x - 5;
        this.sprite.x = this.x;
    }

}
