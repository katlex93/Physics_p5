class Bubble
{
    constructor(x,y)
    {
        this.pos = createVector(x,y);
        //this.vel = createVector(1,0);

       this.vel= p5.Vector.random2D()
        this.vel.mult(3)
    }
    update()
    {
        // this.pos.x += random(-1, 1);
        // this.pos.y += random(-1, 1);

        //this.pos.x += this.vel.x;
        //this.pos.y += this.vel.y;

        this.pos.add(this.vel)

       
    }
    draw()
    {
        ellipse(this.pos.x, this.pos.y, 70)
    }
}


//velocity changing the position over time
//acceleration changes the velocity over time