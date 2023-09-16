
//extends p5play Sprite class

class Platform extends Sprite {

    constructor(x, y, width, height, type) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.collider = "kinematic";
        this.type = type;

        if(this.type === "ice") {
            this.friction = 0.01;
            this.color = "rgb(0, 140, 255)";
        }

    }

    moveLeftAndRight() {

    }


}