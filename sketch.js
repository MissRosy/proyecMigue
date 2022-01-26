var wall1;
var player;
var gameState = "serve";
var form, game;
var fondo1;

function preload() {
fondo1=loadImage("fondo.jpg");
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    form = new Form();
    game = new Game();
}

function draw() {
    background("cyan");
    
    if (gameState == "serve") {
        form.display();
    }
    else if (gameState == "play"){
        game.display();
    }

    drawSprites();
}