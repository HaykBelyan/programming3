class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.directions = [];

    }
    search(character){
        this.getNewCoordinates();
        return super.search(character);
    }
    mul() {
        super.mul(2, grassEaterArr, GrassEater, 8)
    }
    move(){
        this.energy--;
        super.move(2)
       }
    eat() {
        let found = this.search(1);
        let foundRand = random(found);
        if (foundRand) {
            this.energy++;
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 2;
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
        } else {
            this.move();
        }
    }
    die() {
        super.die(grassEaterArr);
    }
}
