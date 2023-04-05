//defining x and y for later translations and positions
X = 0
Y = 0
function setup() {
  createCanvas(600, 400);
  //anglemode put into degrees to be able to make the star
  angleMode(DEGREES)
}

function draw() {
  //using the white background and no stroke to make the flags
  background(320);
  noStroke()
  //the green side of the Algerian flag
  fill("green")
  rect(0, 0, 300, 400)
  //calling the cross function in different positions to make the four different crosses
  crosses(100, 75)
  crosses(425, 75)
  crosses(100, 300)
  crosses(425, 300)
  //calling the algerian symbol function to put in the moon and star ontop of everything else
  algSymbol(300, 200)
  //the red stripes of the Georgian flag connecting to the moon
  fill("red")
  rect(275, 0, 50, 120)
  rect(275, 280, 50, 120)
  rect(0, 175, 220, 50)
  
}
//the function which makes the basic cross at any location
function crosses(X, Y){
  fill("red")
  noStroke()
  rect(X, Y, 75, 25)
  rect(X+25, Y-25, 25, 75)
  
}
//the function which makes the moon and star at any location
function algSymbol(X, Y){
  push()
  noStroke()
  //making the moon with a red circle and smaller white circle inside it
  fill("red")
  ellipse(X, Y, 175, 175)
  fill("white")
  ellipse(320, 200, 150, 150)
  //making the star out of 5 rotated triangles translated from the (0,0) point 
  translate(325, 200)
  fill("red")
  triangle(-10, 0, 10, 0, 0, 30)
  rotate(72)
  triangle(-10, 0, 10, 0, 0, 30)
  rotate(72)
  triangle(-10, 0, 10, 0, 0, 30)
  rotate(72)
  triangle(-10, 0, 10, 0, 0, 30)
  rotate(72)
  triangle(-10, 0, 10, 0, 0, 30)
  pop()
  
  
}
