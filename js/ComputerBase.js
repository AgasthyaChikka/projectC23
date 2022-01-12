class ComputerBase 
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
this.image=loadImage("./assets/base2.png")

    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle = this.body.angle;
     push(); translate(pos.x, pos.y);
      rotate(angle); imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);

    pop();
  }
}
