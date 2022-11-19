LC = require("./LivingCreature")
module.exports = class Bomb extends LC{
    constructor(x, y) {
        super(x, y);
        this.directions = [
            [this.x, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y],
            [this.x - 2, this.y],
            [this.x, this.y + 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y],
            [this.x - 3, this.y]
        ];
    }
    explode() {
        let found = [];
        this.timer++;
        if (this.timer == 5 && found) {
            for (let i = 0; i < this.directions.length; i++) {
                let x = this.directions[i][0];
                let y = this.directions[i][1];
                if (x != undefined && y != undefined && x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    found.push(this.directions[i]);
                }
            }

            for (var i in found) {
                let x = found[i][0];
                let y = found[i][1];

                if (matrix[y][x] == 1) {
                    matrix[y][x] = 0;
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            break;
                        }
                    }
                    if (matrix[y][x] == 1) {
                        for (var i in grassEaterArr) {
                            if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                                grassEaterArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    if (matrix[y][x] == 1) {
                        for (var i in PredatorArr) {
                            if (x == PredatorArr[i].x && y == PredatorArr[i].y) {
                                PredatorArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    if (matrix[y][x] == 1) {
                        for (var i in MiniEaterArr) {
                            if (x == MiniEaterArr[i].x && y == MiniEaterArr[i].y) {
                                MiniEaterArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
            this.die()
        }
    }
    die() {
        super.die(BombArr);
    }
}


