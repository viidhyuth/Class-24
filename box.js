class Box{
    constructor(x,y,w,h){
        var opt={
            restitution:0.1,
            friction:1.0
          }
          this.box=Bodies.rectangle(x,y,w,h,opt);
          this.w=w
          this.h=h
          World.add(world,this.box)
    }
    display(){
        var pos=this.box.position
        var angle=this.box.angle
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