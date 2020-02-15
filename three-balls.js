var ballY = 10
var ballX = 100
var ballYSpeed = 6

var ballX2 = 50
var ballY2 = 50
var ballXSpeed = 8

var ballX3 = 550
var ballY3 = 10
var ballY3Speed = 8


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 50,50);
  ellipse(ballX2, ballY2, 50, 50);
  ellipse(ballX3, ballY3, 50, 50);
  
  ballY = ballY + ballYSpeed;
  ballX2 = ballX2 + ballXSpeed;
  ballY3 = ballY3 + ballY3Speed;
  
  if (ballY > height){
  ballYSpeed = - ballYSpeed
  }
  if (ballY < 0){
  ballYSpeed = - ballY3Speed
  }
  
  
  if (ballX2 > width) {
  ballXSpeed = -ballXSpeed
  }
  if (ballX2 < 0) {
  ballXSpeed = -ballXSpeed 
  }
  
  if (ballY3 > height) {
  ballY3Speed = -ballY3Speed
  }
  if (ballY3 < 0) {
  ballY3Speed = -ballY3Speed
  }
}
