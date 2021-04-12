var gameState,playerCount, database;
var form, player, allPlayers, game;
var cars, car1, car2, car3, car4;
var  distance = 0;

function setup(){
  database = firebase.database();
  gameState = 0;
  createCanvas(displayWidth, displayHeight - 230);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("lavender");
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play(); 
  }

  drawSprites();
}
