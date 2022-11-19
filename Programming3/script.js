side = 15;
function createLivCr(n, index, livCrArr, livCrCLass) {
    for (let i = 0; i <= n; i++) {
        let x = Math.floor(Math.random() * (matrix.length));
        let y = Math.floor(Math.random() * (matrix[0].length));
        if(index == 1){
        if (matrix[y][x] == 0) {
            matrix[y][x] = index;
            let livCr = new livCrCLass(x, y)
            livCrArr.push(livCr)
        }
        else {
            createLivCr(n, index, livCrArr, livCrCLass);
        }
    }
    else if(index == 2){
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {
            matrix[y][x] = index;
            let livCr = new livCrCLass(x, y)
            livCrArr.push(livCr)
        }
        else {
            createLivCr(n, index, livCrArr, livCrCLass);
        }
    }
    else if(index == 3){
        if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2) {
            matrix[y][x] = index;
            let livCr = new livCrCLass(x, y)
            livCrArr.push(livCr)
        }
        else {
            createLivCr(n, index, livCrArr, livCrCLass);
        }
    }
    else if(index == 4){
        if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3) {
            matrix[y][x] = index;
            let livCr = new livCrCLass(x, y)
            livCrArr.push(livCr)
        }
        else {
            createLivCr(n, index, livCrArr, livCrCLass);
        }
    }
    else if(index == 5){
        if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4) {
            matrix[y][x] = index;
            let livCr = new livCrCLass(x, y)
            livCrArr.push(livCr)
        }
        else {
            createLivCr(n, index, livCrArr, livCrCLass);
        }
    }
    }
}
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function dr() {
    clear();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("pink")
            }
            rect(x * side, y * side, side, side);
        }
    }
}
setInterval(function(){
    socket.on('matrixUpd', dr)
},1000)