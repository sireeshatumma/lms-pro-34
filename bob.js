class Bob{
    constructor(x,y,r){
      var options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2 
      }
       this.x=x;
       this.y=y;
       this.r=r;
       this.body= Bodies.circle(this.x,this.y,this.r/2,options)
       World.add(world,this.body)
    }// refresh and check once now??

    display(){
        var bob = this.body.position
        var angle=this.body.angle;
        push()
        translate(bob.x,bob.y)
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(3);
        stroke("cyan")
        fill(0);
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }//now it is working-- open sketch.js
}//mam please check sketch.js may be problems in the values