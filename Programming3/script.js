var socket = io();
side = 15;

function setup() {
    frameRate(30);
    createCanvas(40 * side, 40 * side);
    background('#acacac');
}


function dr(matrix) {
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
},300)
function GrassCreator(){
    console.log("button clicked!");
    socket.emit("GrassCreator")
}
function GrassEaterCreator(){
    socket.emit("GrassEaterCreator")
}
function PredatorCreator(){
    socket.emit("PredatorCreator")
}
function BombCreator(){
    socket.emit("BombCreator")
}
function MiniEaterCreator(){
    socket.emit("MiniEaterCreator")
}