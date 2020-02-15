var ballY = 10
var ballX = 200
var ballYSpeed = 4


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 50,50);
  ballY = ballY + ballYSpeed;
  
  if (ballY > height){
  ballYSpeed = - ballYSpeed
  }
  
  if (ballY < 0){
  ballYSpeed = - ballYSpeed
  }
  
}
