var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var Grass = require("./Programming3/grass")
var GrassEater = require("./Programming3/grassEater")
var Predator = require("./Programming3/predator")
var MiniEater = require("./Programming3/miniEater")
var Bomb = require("./Programming3/bomb")


let matrix = generate(40);
let grassArr = [];
let grassEaterArr = [];
let PredatorArr = [];
let BombArr = [];
let MiniEaterArr = [];

app.use(express.static("Programming3"));

app.get("/", function (req, res) {

    res.redirect('index.html');

});


server.listen(3000, function () {

    console.log("Server is running on port 3000");

});;
io.on('connection', function(socket){
    console.log('user connected!');
})
function createGrass(matrix) {
    for (let i = 0; i <= 4; i++) {
        let x = Math.floor(Math.random() * (matrix.length));
        let y = Math.floor(Math.random() * (matrix[0].length));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            let gr = new Grass(x, y)
            grassArr.push(gr)
        }
    }
}
// function createGrassEater() {
//     for (let i = 0; i <= 4; i++) {
//         let x = Math.floor(Math.random() * (matrix.length));
//         let y = Math.floor(Math.random() * (matrix[0].length));
//         if (matrix[y][x] == 0 || matrix[y][x] == 1) {
//             matrix[y][x] = 2;
//             let gre = new GrassEater(x, y)
//             grassEaterArr.push(gre)
//         }
//     }
// }
// function createPredator() {
//     for (let i = 0; i <= 4; i++) {
//         let x = Math.floor(Math.random() * (matrix.length));
//         let y = Math.floor(Math.random() * (matrix[0].length));
//         if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2) {
//             matrix[y][x] = 3;
//             let pr = new Predator(x, y)
//             PredatorArr.push(pr)
//         }
//     }
// }
// function createBomb() {
//     for (let i = 0; i <= 4; i++) {
//         let x = Math.floor(Math.random() * (matrix.length));
//         let y = Math.floor(Math.random() * (matrix[0].length));
//         matrix[y][x] = 4;
//         let bmb = new Bomb(x, y);
//         BombArr.push(bmb);
//     }
// }
// function createMiniEater() {
//     for (let i = 0; i <= 4; i++) {
//         let x = Math.floor(Math.random() * (matrix.length));
//         let y = Math.floor(Math.random() * (matrix[0].length));
//         if (matrix[y][x] == 0 || matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3) {
//             matrix[y][x] = 5;
//             let minieater = new MiniEater(x, y)
//             MiniEaterArr.push(minieater)
//         }
//     }
// }

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
io.sockets.emit('matrixUpd', matrix)
function updateObjects(matrix) {
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
    io.sockets.emit('matrixUpd', matrix)
}

function game() {
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
    io.sockets.emit('matrixUpd', matrix)
}
setInterval(game, 1000);
io.on("connection", function (socket) {
    updateObjects(matrix);
    socket.on('GrassCreator', createGrass)
    // socket.on('GrassEaterCreator', createGrassEater)
    // socket.on('PredatorCreator', createPredator)
    // socket.on('BombCreator', createBomb)
    // socket.on('MiniEaterCreator', createMiniEater)
})

