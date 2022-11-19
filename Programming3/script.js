let matrix = generate(40);
let side = 15;
let grassArr = [];
let grassEaterArr = [];
let PredatorArr = [];
let BombArr = [];
let MiniEaterArr = [];
var socket = io();
function generate(matLen) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    return matrix;
}
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

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                let grEater = new GrassEater(x, y);
                grassEaterArr.push(grEater)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y);
                PredatorArr.push(pr);
            }
            else if (matrix[y][x] == 4) {
                let bmb = new Bomb(x, y);
                BombArr.push(bmb);
            }
            else if (matrix[y][x] == 5) {
                let minieater = new MiniEater(x, y)
                MiniEaterArr.push(minieater);
            }
        }
    }
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
