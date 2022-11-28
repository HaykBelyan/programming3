LC = require("./LivingCreature")
module.exports = class Predator extends LC{
    constructor(x, y) {
        super(x,y);
        this.directions = [];
    }
    search(character){
        this.getNewCoordinates();
        return super.search(character);
    }
   move(){
    this.energy--;
    super.move(3)
   }
    mul() {
        super.mul(3, PredatorArr, Predator, 5)
    }
    eat() {
        let found = this.search(1);
        let foundRand = this.random(found);
        let found1 = this.search(2);
        let foundRand1 = this.random(found1);
        let found2 = this.search(6);
        let foundRand2 = this.random(found2);
        if (foundRand) {
            this.energy++;
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


            if (this.energy >= 18) {
                this.mul();

            }
        }
        else if (foundRand1) {
            this.energy++;
            let x = foundRand1[0];
            let y = foundRand1[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }


            if (this.energy >= 18) {
                this.mul();

            }
        }
        else if (foundRand2) {
            this.energy+=3;
            let x = foundRand2[0];
            let y = foundRand2[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in EnergyArr) {
                if (x == EnergyArr[i].x && y == EnergyArr[i].y) {
                    EnergyArr.splice(i, 1);
                    break;
                }
            }


            if (this.energy >= 18) {
                this.mul();

            }
        } else {
            this.move();
        }
    }
    die() {
        super.die(PredatorArr)
    }
}
