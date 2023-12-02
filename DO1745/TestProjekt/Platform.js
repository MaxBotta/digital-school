

class Platform extends p5_.Sprite {

    constructor(x, y, width, height, type) {
        super(x, y);
        this.collider = "kinematic";
        this.width = width;
        this.height = height;
        this.startX = x;
        this.type = type;
        this.isMoving_ = false;

        if (type === "default") {
            this.friction = 1;
            this.color = "rgb(0, 250, 100)";
        } else if (type === "ice") {
            this.friction = 0.1;
            this.color = "rgb(0, 100, 250)";
        }

    }

    moveLeftAndRight() {
        if(this.isMoving_ === false) {
            this.velocity.x = 5;
            this.isMoving_ = true;
        }

        if (this.isMoving_) {
            if (this.x > this.startX + 100) {
                this.velocity.x = -5;
            } else if (this.x < this.startX - 100) {
                this.velocity.x = 5;
            }
        }

    }

    moveUpAndDown() {

    }


    stop() {
        this.isMoving_ = false;
    }



}