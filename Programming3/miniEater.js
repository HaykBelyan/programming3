LC = require("./LivingCreature")
module.exports = class MiniEater extends LC{
    
    search(character){
        this.getNewCoordinates();
        return super.search(character);
    }
   move(){
    super.move(5)
   }
    
    eat() {
        let found = this.search(1);
        let foundRand = random(found);
        let found1 = this.search(2);
        let foundRand1 = random(found1);
        let found2 = this.search(3);
        let foundRand2 = random(found2);
        if (this.energy > 0 && foundRand) {
            this.energy--;
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (foundRand1) {
            this.energy--;
            let x = foundRand1[0];
            let y = foundRand1[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (foundRand2) {
            this.energy--;
            let x = foundRand2[0];
            let y = foundRand2[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            for (var i in PredatorArr) {
                if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
        }  else if(this.energy>0){
            this.move();
        }
        else{
            this.die()
        }
    }
    die() {
        super.die(MiniEaterArr)
    }
}