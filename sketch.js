// let pos;
let bubble;
let bubble2;
let gravity;
let wind;
let mu = 0.1 
let dragC=0.1;

let attractor;

function setup() {
  createCanvas(600, 600);
  bubble = new Bubble(50, 50,  50)
  bubble2 = new Bubble(width/2+50, height/2-200, 10)
  attractor = new Attractor(200, 200, 100, 5)

  // pos = createVector(random(1, 600), random(1, 600));
}

function draw() {
  background(200);

  

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
 
 // bubble.applyForce(weightA); //aplies force of gravity
  //bubble2.applyForce(weightB); //applie force of gravity

  //Drag with water
  // fill(0,100, 250, 200)
  // noStroke()
  // rect(0, height/2, width);
  // if(bubble.pos.y > height/2)
  // {
  //   bubble.drag(dragC);
  // }


  attractor.attract(bubble)
  attractor.draw()

  //bubble.friction();
  bubble.update();
  bubble.edges();

  bubble.draw();

  bubble2.update();
  bubble2.edges();
  bubble2.draw();

 

 
  
  
}
