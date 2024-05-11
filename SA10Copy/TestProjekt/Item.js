
class Item {

    constructor(type, energy) {
        this.type = type;
        this.energy = energy;
    }

    heal(player) {
        player.life = player.life + this.energy;
    }


}
