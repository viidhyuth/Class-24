class Pig{
    constructor(x,y){
        var opt={
            restitution:0.1,
            
          }
          this.body=Bodies.rectangle(x,y,50,50,opt);
          this.w=50
          this.h=50
          World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x, pos.y)
        angleMode(RADIANS)
        rotate(angle)
        rectMode(CENTER)
        fill("pink")
        rect(0,0,this.w,this.h)
        pop()
    }
}