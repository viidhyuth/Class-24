class Ground{
    constructor(){
        var option={
            isStatic: true
          }
        this.ground=Bodies.rectangle(600, 380, 1200, 20,option)
       World.add(world,this.ground)
    }
    display(){
      rectMode(CENTER)
      fill("green")
      rect(600, 380, 1200, 20)
    }
}