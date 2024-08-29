

class Platform  {

    constructor(x, y) {
        this.sprite = new Sprite()
        this.x = x;
        this.y = randInt(0, 600);
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = randInt(50, 300);
        this.sprite.height = 40;
        this.sprite.color = "green";
        this.sprite.collider = "kinematic";
        this.sprite.velocity.x = randInt(-10, -3);
    }

    move() {
        this.x - 5;
        this.sprite.x = this.x;
    }

}
