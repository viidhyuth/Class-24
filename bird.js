class Bird{
    constructor(){
        var opt= {
            restitution:0.5

        }
        this.bird=Bodies.rectangle(200,200,50,50,opt)
        World.add(world,this.bird)
    }
    display(){
        this.bird.position.x=mouseX
        this.bird.position.y=mouseY
        fill("yellow")
        rectMode(CENTER)
        rect(this.bird.position.x,this.bird.position.y,50,50)
    }
}