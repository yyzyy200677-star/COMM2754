function setup() {
  textOutput();
  createCanvas(720, 400);
  angleMode(DEGREES);
}

function draw() {
  background(200, 230, 255);

  fill(255, 180, 200);
  square(30, 30, 130);

  fill(255, 235, 160);
  rect(100, 40, 200, 100);

  fill(255);
  ellipse(540, 100, 300, 100);

  fill(120, 80, 180);
  circle(mouseX, mouseY, 100);

  fill(180, 240, 190);
  arc(540, 100, 300, 100, 180, 360, CHORD);

  stroke(0);
  line(20, 200, 200, 350);

  fill(255, 180, 80);
  triangle(250, 350, 350, 200, 450, 350);

  fill(130, 220, 170);
  quad(500, 250, 550, 200, 700, 300, 650, 350);
}
