

class Item extends p5_.Sprite {

    constructor(type, x, y) {
        super();

        this.name = name;
        this.type = type; //Dude, Owlet, Pink
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.scale = 1;
        this.debug = true;

        this.addAni('coin', 'assets/Items/icons/32x32/coin_01d.png', { frameSize: [32, 32], frames: 1 });
        this.addAni('book', 'assets/Items/icons/32x32/book_03b.png', { frameSize: [32, 32], frames: 1 });
        
        this.ani = type;
    }



}
