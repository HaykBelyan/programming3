var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);



app.use(express.static("Programming3"));

app.get("/", function (req, res) {

res.redirect('index.html');

});


server.listen(3000);

var grass = require("./Programming3/grass")
var grassEater = require("./Programming3/grassEater")
var predator = require("./Programming3/predator")
var miniEater = require("./Programming3/miniEater")
var bomb = require("./Programming3/bomb")


let matrix = generate(40);
let side = 15;
let grassArr = [];
let grassEaterArr = [];
let PredatorArr = [];
let BombArr = [];
let MiniEaterArr = [];
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
function game(){
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in PredatorArr) {
        PredatorArr[i].eat();
    }
    for (let i in BombArr) {
        BombArr[i].explode();
    }
    for (let i in MiniEaterArr) {
        MiniEaterArr[i].eat();
    }
}