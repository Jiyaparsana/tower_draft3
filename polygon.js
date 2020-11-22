class Polygon{
    constructor(x,y,radius){

          //polygon
  this.body = Bodies.circle(x,y,radius)
 this.image=loadImage("hexagon.png")

  World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
    }
}