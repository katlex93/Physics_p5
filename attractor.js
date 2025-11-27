class Attractor
{
    constructor(x, y, mass)
    {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0)

        this.acc = createVector(0,0)
        this.mass = mass;
        this.r = sqrt(this.mass) * 10
    }

    attractor()
    {
        
    }

    draw()
    {
        push()
        fill(0, 200, 150, 150)
        noStroke()
        ellipse(this.pos.x, this.pos.y, this.r *2)
        pop()
    }
}