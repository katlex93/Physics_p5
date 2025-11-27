class Bubble
{
    constructor(x,y, mass)
    {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0)
        // this.vel= p5.Vector.random2D()
        // this.vel.mult(random(3));
        this.acc = createVector(0,0)

        //this.r = r; //radius
        this.mass = mass;
        this.r = sqrt(this.mass) * 10 //we take mass to be area of circle which is PIr^2 , therfore the radius is based on mass
        
    }

    applyForce(force) //take a force that exists in environment
    {
        // force.div(this.mass);
        let f = p5.Vector.div(force, this.mass) //using static version of function since we don't want to mess with force
        this.acc.add(f);
    }

    // friction() ////this is somewhat physical accurate friciton
    // {
    //     //how far is it from bottom
    //     let dif = height - (this.pos.y + this.r)
    //     if(dif < 1)
    //     {
    //         //Direction of friciton
    //         let friction = this.vel.copy();
    //         friction.normalize();
    //         friction.mult(-1)

    //         //Magnitude of friction
    //         //let mu = 0.1 //random value might, chage if want specific material like rubber made global for now
    //         let normal = this.mass;
    //         friction.setMag(mu * normal)
    //         this.applyForce(friction)
    //     }
    // }

    friction() //this is simple working friction but they all stop a the same time
    {
         //how far is it from bottom
        let dif = height - (this.pos.y + this.r)
        if(dif < 1)
        {
            this.vel.mult(0.95)
        }
    }

    drag(c) 
    {
       //Direction of friciton
            let drag = this.vel.copy();
            drag.normalize();
            drag.mult(-1);

            
            let speedSq= this.vel.magSq();
            drag.setMag(c * speedSq)

            this.applyForce(drag)


        
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
        push()
        fill(200, 0, 150, 200)
        ellipse(this.pos.x, this.pos.y, this.r *2)
        pop()
    }
}


//velocity changing the position over time
//acceleration changes the velocity over time