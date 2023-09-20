
class Item {

    static size = 20;

    constructor(type, jumpBoost) {
        this.type = type;
        this.healing = 40;
        this.jumpBoost = jumpBoost;
        this.runBoost = 0;
        this.attackBoost = 0;
        this.defenseBoost = 10;
    }

    effect(player) {
        player.jumpStrength = player.jumpStrength + this.jumpBoost;
        player.life = player.life + this.healing;
    }

}