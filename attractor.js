class Attractor
{
    constructor(x, y, mass, G)
    {
        this.pos = createVector(x,y);
        this.vel = createVector(0,0)
        //this.vel = p5.Vector.random2D();

        this.acc = createVector(0,0)
        this.mass = mass;
        //this.r = sqrt(this.mass) * 10
         this.r = sqrt(this.mass)*2
        // this.r= 20
        this.G= G
    }

    attract(object)
    {
        let force= p5.Vector.sub(this.pos, object.pos);
        let distanceSq = constrain(force.magSq(), 100, 1000);

        this.G=2//value can be changed later
        let strength = this.G * (this.mass * object.mass)/distanceSq

        force.setMag(strength);
        object.applyForce(force)
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