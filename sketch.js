// let pos;
let bubble;
let bubble2;
let gravity;
let wind;
let mu = 0.1 
let dragC=0.1;

function setup() {
  createCanvas(600, 600);
  bubble = new Bubble(width/2-50, height/2-200,  4)
  bubble2 = new Bubble(width/2+50, height/2-200, 9)

  // pos = createVector(random(1, 600), random(1, 600));
}

function draw() {
  background(200);

  fill(0,100, 250, 200)
  noStroke()
  rect(0, height/2, width);

 if(mouseIsPressed)
 {
  wind = createVector(0.1, 0);
  bubble.applyForce(wind)
  bubble2.applyForce(wind)
  text('pressed', mouseX-10, mouseY-10)
  
 }

 gravity = createVector(0, 0.1);
 let weightA = p5.Vector.mult(gravity, bubble.mass) 
 let weightB = p5.Vector.mult(gravity, bubble2.mass) 
 
  bubble.applyForce(weightA);
  bubble2.applyForce(weightB);

  if(bubble.pos.y > height/2)
  {
    bubble.drag(dragC);
  }

  bubble.friction();
  bubble.update();
  bubble.edges();

  bubble.draw();

  bubble2.update();
  bubble2.edges();
  bubble2.draw();

 
  
  
}
