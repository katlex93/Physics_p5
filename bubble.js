class Bubble
{
    constructor(x,y)
    {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0)
        // this.vel= p5.Vector.random2D()
        // this.vel.mult(random(3));
        this.acc = createVector(0,0)

        this.r = 35 //radius
        
    }

    applyForce(force) //take a force that exists in environment
    {
        this.acc.add(force);
    }

    //keep track of position of bubble to avoid going beyond the screen
    edges()
    {
        if(this.pos.y >= height - this.r)
        {
            this.pos.y = height-this.r;
            this.vel.y *= -1;
        }

        if(this.pos.x >= width - this.r)
        {
            this.pos.x = width-this.r;
            this.vel.x *= -1;
        }

        else if(this.pos.x <= this.r)
        {
            this.pos.x = this.r;
            this.vel.x *= 1;
        }

    }

    update()
    {
       
        // let mouse = createVector(mouseX, mouseY);
        // this.acc = p5.Vector.sub(mouse, this.pos);
        // this.acc.setMag(0.1);

       
        this.vel.add(this.acc);
        this.vel.limit(30);
        this.pos.add(this.vel);
        this.acc.set(0,0);

       
    }
    draw()
    {
        ellipse(this.pos.x, this.pos.y, this.r *2)
    }
}


//velocity changing the position over time
//acceleration changes the velocity over time