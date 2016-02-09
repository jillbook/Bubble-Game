function setup() {
  createCanvas(800,700);
}

function draw() {
  background(248,252,193);
  //pink vivacious
  //shrinks and click to grow
  fill(201,12,57);
  ellipse(80,80,100,100);
  //blue lagoon
  //grows and click to shrink
  fill(22,147,167);
  ellipse(250,170,200,200);
  //green
  //click and drag
  fill(200,207,2);
  ellipse(390,390,65,65);
  //orange
  //grows and duplicates when too big
  fill(230,120,20);
  ellipse(400,500,120,120);
}