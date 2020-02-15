1. What code draws the blades of grass?
  // This line defines the color of the grass
  stroke(random(60, 70), 100, 90);
  //This line defines the growth of the grass
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  
2. What code makes the "lawnmower" come by? How often does it come by?
  //This group of code makes the lawnmower come by.
  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
    
3. What's the point of the h variable?
  h means the height of the grass.
  It comes by when the number in the brackets is becomes 1000. 
  
4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? 
  The -10 means the minimum growing height of the grass. If the grass grow from 190 ( the height of the canvas is 200), the -10 means the grass(line) can't be at lower than 190.
  
