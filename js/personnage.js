class Personnage {

    constructeur() {
        this.id = null;
        this.hp = null;
        this.shield = null;
        this.pm = null;
        this.skin = null;
        this.arme = null;
        this.position_x = null;
        this.position_y = null;

    }

    //init(id, skin, position_x, position_y) {
    init(id, skin, x, y) {
        this.id = id;
        this.hp = 100;
        this.shield = 0;
        this.x = x;
        this.y = y;
        this.pm = 3;
        this.skin = skin;
        this.arme = 10;
        //this.position_x = position_x;
        //this.position_y = position_y;

    }

    ajoutHP(hp_plus) {
        this.hp = this.hp + hp_plus;
    }

    retraitHP(hp_plus) {
        this.hp = this.hp - hp_plus;
    }

    ajoutPM(pm_plus) {
        this.pm = this.pm - pm_plus;
    }

    updatePosition(posX, posY) {
        this.position_x = posX;
        this.position_y = posY;
    }

    updateArme(NewArme) {
        this.arme = NewArme;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }


}
