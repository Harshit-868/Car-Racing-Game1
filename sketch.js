var form, game, player;
var database;
var gameState = 0;
var playerCount;

function setup() {
    database = firebase.database();
    console.log(database);
    var canvas = createCanvas(400, 400);
    game = new Game();
    game.getState();
    game.start();
}

function draw() {

}