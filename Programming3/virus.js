LC = require("./LivingCreature")
module.exports = class Virus extends LC {

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
            matrix[this.y][this.x] = 7;
            this.x = x;
            this.y = y;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.timer++
        if (this.timer >= 7) {
            matrix[this.y][this.x] = 1;
            for (var i in VirusArr) {
                if (this.x == VirusArr[i].x && this.y == VirusArr[i].y) {
                    VirusArr.splice(i, 1);
                    break;
                }
            }
        }
        }
        else if (this.energy > 0) {
            this.move();
        }
    //     else{
    //         this.die();
    //     }
    }
    // die() {
        
    // }
}