LC = require("./LivingCreature")
module.exports = class Energy extends LC{
    check() {
        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
}