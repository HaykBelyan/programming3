LC = require("./LivingCreature")
module.exports = class GrassEater extends LC{
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
        let foundRand = this.random(found);
        let found2 = this.search(6);
        let foundRand2 = this.random(found2);
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
                
            }}
            else if (foundRand2) {
                this.energy+=3;
                let x = foundRand2[0];
                let y = foundRand2[1];
                matrix[y][x] = 2;
                matrix[this.y][this.x] = 0;
                this.x = x;
                this.y = y;
                for (var i in EnergyArr) {
                    if (x == EnergyArr[i].x && y == EnergyArr[i].y) {
                        EnergyArr.splice(i, 1);
                        break;
                    }
                }
            }

            if (this.energy >= 18) {
                this.mul();

            }
         else {
            this.move();
        }
    }
    die() {
        super.die(grassEaterArr);
    }
}
