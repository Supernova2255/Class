var database
var gamestate = 1
var login, form, player;

function setup() {
  
    createCanvas(500, 500)

database = firebase.database();

login = new Game();

login.startGame();

}

  function draw() {

}