var socket = io();
side = 15;

function setup() {
    frameRate(60);
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}

function writeStats(statsObject){
    GrassCount = statsObject.GrassCount
    GrassEaterCount = statsObject.GrassEaterCount
    PredatorCount = statsObject.PredatorCount
    MiniEaterCount = statsObject.MiniEaterCount
    document.getElementById("GrassCount").innerText = GrassCount.toString();
    document.getElementById("GrassEaterCount").innerText = GrassEaterCount.toString();
    document.getElementById("PredatorCount").innerText = PredatorCount.toString();
    document.getElementById("MiniEaterCount").innerText = MiniEaterCount.toString();

}
function dr(data) {
    var matrix = data.matrix;
    var weather = data.weather;
    document.getElementById("weather").innerText = "Wather: "+weather.toString();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                if(weather == "spring"){
                fill("green");
                }
                else if(weather == "autumn"){
                    fill("orange");
                }
                else{
                    fill("white")
                }
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

socket.on('matrixUpd', dr)
socket.on('statsUpdate', writeStats);

function GrassCreator(){
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