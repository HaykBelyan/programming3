class Predator extends LivingCreature{
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
        let foundRand = random(found);
        let found1 = this.search(2);
        let foundRand1 = random(found1);
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
        } else {
            this.move();
        }
    }
    die() {
        super.die(PredatorArr)
    }
}
