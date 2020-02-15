function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
//color of the grass
  stroke(random(60, 70), 100, 90);
  line(x, height - 10, x+random(0, 20), height-10-random(h));
  noStroke();

  x = x + 10;

//the turn of growing grass
  if (x > width) {
    x = random(10);
    h = h + 3;
  }

//the lawnmower
  if (h > 50) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

// the ground
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
