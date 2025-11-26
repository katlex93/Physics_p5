class Bubble
{
    constructor(x,y)
    {
        this.pos = createVector(x,y);
        //this.vel = createVector(1,0);

         this.vel= p5.Vector.random2D()
        this.vel.mult(random(3));
        
        // this.acc = p5.Vector.random2D()
        // this.acc.setMag(0.01);
    }
    update()
    {
        // this.pos.x += random(-1, 1);
        // this.pos.y += random(-1, 1);

        //this.pos.x += this.vel.x;
        //this.pos.y += this.vel.y;
        let mouse = createVector(mouseX, mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(0.1);
        //this.acc = p5.Vector.random2D()

        this.vel.add(this.acc);
        this.vel.limit(6);
        this.pos.add(this.vel);

       
    }
    draw()
    {
        ellipse(this.pos.x, this.pos.y, 70)
    }
}


//velocity changing the position over time
//acceleration changes the velocity over time



/**
 * apply gravity if mouse is pressed
 * 
 *   if(mouseIsPressed)
  {
    gravity = createVector(0, 1);
    bubble.applyForce(gravity);
  }

  
  bubble.update();
  bubble.edges();
  bubble.draw();

 
  
  
}

 */