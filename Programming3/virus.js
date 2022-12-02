LC = require("./LivingCreature")
module.exports = class Virus extends LC {
constructor(x,y){
    super(x,y);
    this.energy = 1;
}
    search(character) {
        this.getNewCoordinates();
        return super.search(character);
    }
    move() {
        super.move(7)
    }

    eat() {

        let found = this.search(1);
        let foundRand = this.random(found);
        if (this.energy > 0 && foundRand) {
            this.energy--;
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 7;
            matrix[this.y][this.x] = 1;
            this.x = x;
            this.y = y;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            
            this.timer+=10
        if (this.timer >= 10) {
            setTimeout(() => {matrix[this.y][this.x] = 1;
                for (var i in VirusArr) {
                    if (this.x == VirusArr[i].x && this.y == VirusArr[i].y) {
                        VirusArr.splice(i, 1);
                        break;
                    }
                }}, 7000)
        }
        }
        else if (this.energy > 0) {
            this.move();
        }
    }
}