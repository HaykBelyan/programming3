LC = require("./LivingCreature")
module.exports = class Grass extends LC{
    
    search(character){
        this.getNewCoordinates();
        return super.search(character);
    }
    mul() {
        let found = this.search(0);
        let foundRand = random(found);

        this.multiplay++;
        if (this.multiplay >= 10 && foundRand) {
            let x = foundRand[0];
            let y = foundRand[1];
            matrix[y][x] = 1;
            let newGrass = new Grass(x, y);
            grassArr.push(newGrass);
            this.multiplay = 0
        }
    }
}