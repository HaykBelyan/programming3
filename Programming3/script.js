var socket = io();
side = 15;

function setup() {
    frameRate(60);
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}
function writeStats(statsObject) {
    GrassCount = statsObject.GrassCount
    GrassEaterCount = statsObject.GrassEaterCount
    PredatorCount = statsObject.PredatorCount
    MiniEaterCount = statsObject.MiniEaterCount
    EnergyCount = statsObject.EnergyCount
    document.getElementById("GrassCount").innerText = "Grass: " + GrassCount.toString();
    document.getElementById("GrassEaterCount").innerText = "GrassEater: " + GrassEaterCount.toString();
    document.getElementById("PredatorCount").innerText = "Predator: " + PredatorCount.toString();
    document.getElementById("MiniEaterCount").innerText = "MiniEater: " + MiniEaterCount.toString();
    document.getElementById("EnergyCount").innerText = "Energy: " + EnergyCount.toString();
}
function dr(data) {
    var matrix = data.matrix;
    var weather = data.weather;
    if (weather != undefined) {
        document.getElementById("weather").innerText = "Weather: " + weather.toString();
    }
    if (matrix != undefined) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                bluue = color(0, 200, 255)
                if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 1) {
                    if (weather == "Spring") {
                        fill("green");
                    }
                    else if (weather == "Autumn") {
                        fill("orange");
                    }
                    else {
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
                else if (matrix[y][x] == 6) {
                    fill(bluue)
                }
                else if (matrix[y][x] == 7) {
                    fill("lightgreen")
                }
                rect(x * side, y * side, side, side);
            }
        }
    }
}

socket.on('matrixUpd', dr)
socket.on('statsUpdate', writeStats);

function GrassCreator() {
    socket.emit("GrassCreator")
}
function GrassEaterCreator() {
    socket.emit("GrassEaterCreator")
}
function PredatorCreator() {
    socket.emit("PredatorCreator")
}
function BombCreator() {
    socket.emit("BombCreator")
}
function MiniEaterCreator() {
    socket.emit("MiniEaterCreator")
}
function EnergyCreator() {
    socket.emit("EnergyCreator")
}
function VirusCreator() {
    socket.emit("VirusCreator")
}
function Popup() {
    socket.emit("popup")
}