// let pos;
let bubble;
let gravity;
let wind;

function setup() {
  createCanvas(600, 600);
  bubble = new Bubble(width/2, height/2)

  // pos = createVector(random(1, 600), random(1, 600));
}

function draw() {
  background(200);

  // if(mouseIsPressed)
  // {
  //   gravity = createVector(0, 0.1);
  //   bubble.applyForce(gravity);
  // }

  

 if(mouseIsPressed)
 {
  wind = createVector(0.1, 0);
  bubble.applyForce(wind)
  text('pressed', mouseX-10, mouseY-10)
  
 }

  gravity = createVector(0, 0.1);
  bubble.applyForce(gravity);


  
  bubble.update();
  bubble.edges();
  bubble.draw();

 
  
  
}
