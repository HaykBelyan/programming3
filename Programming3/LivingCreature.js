module.exports = class LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiplay = 0;
        this.energy = 8;
        this.timer = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

        ];
    }
    mul(num, charArr, className, energy) {
        let found = this.search(0);
        let foundRand = random(found);
        if (foundRand) {
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = num;
            let newCharacter = new className(x, y);
            charArr.push(newCharacter);
            this.energy = energy;
        }
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    search(char) {
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move(num) {
        let found = this.search(0);
        let foundRand = random(found);
        if (foundRand && this.energy > 0) {
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = num;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
        } else {
            this.die();
        }
    }
    die(charArr) {
        matrix[this.y][this.x] = 0;
        for (var i in charArr) {
            if (this.x == charArr[i].x && this.y == charArr[i].y) {
                charArr.splice(i, 1);
                break;
            }
        }
    }
}
