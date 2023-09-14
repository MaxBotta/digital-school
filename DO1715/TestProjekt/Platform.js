
class Platform {

    constructor(x, y, width, height, type) {
        this.sprite = new Sprite();
        this.sprite.collider = "kinematic";
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.width = width;
        this.sprite.height = height;
        this.startX = x;
        this.type = type;
        this.isMoving = false;

        if (type === "default") {
            this.sprite.friction = 1;
            this.sprite.color = "rgb(0, 250, 100)";
        } else if (type === "ice") {
            this.sprite.friction = 0.1;
            this.sprite.color = "rgb(0, 100, 250)";
        }

    }

    moveLeftAndRight() {
        if(this.isMoving === false) {
            this.sprite.velocity.x = 5;
            this.isMoving = true;
        }

        if (this.isMoving) {
            if (this.sprite.x > this.startX + 100) {
                this.sprite.velocity.x = -5;
            } else if (this.sprite.x < this.startX - 100) {
                this.sprite.velocity.x = 5;
            }
        }

    }

    moveUpAndDown() {

    }


    stop() {
        this.isMoving = false;
    }



}

class Item {

    constructor() {

    }


}
