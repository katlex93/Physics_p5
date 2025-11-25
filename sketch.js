// let pos;
let bubble;

function setup() {
  createCanvas(600, 600);
  bubble = new Bubble(width/2, height/2)

  // pos = createVector(random(1, 600), random(1, 600));
}

function draw() {
  background(200);
  bubble.update();
  bubble.draw();
  
  
}
