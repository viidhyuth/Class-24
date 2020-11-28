class Log{
    constructor(x,y,h,angle){
        var opt={
            restitution:0.1,
            friction:1.0
          }
          this.body=Bodies.rectangle(x,y,20,h,opt);
          this.w=20
          this.h=h
          Matter.Body.setAngle(this.body,angle)
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
        fill("brown")
        rect(0,0,this.w,this.h)
        pop()
    }
}