class Point {
  constructor(position,radius,Color){
    this.position = position;
    this.radius = radius;
this.Color=Color;
this.active=false;
  }
  
  draw(context){
    context.beginPath();
    context.strokeStyle = "rgb(0,0,255)";
    context.fillStyle = this.Color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    }
}
