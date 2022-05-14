class Arco extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("Imágenes/ArcO.jpg");
    Matter.Body.setAngle(this.body, angle);
  }
}