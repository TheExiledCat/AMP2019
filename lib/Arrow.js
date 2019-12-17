class Arrow {
    constructor(pos,angle) {
      this.pos = pos;
      this.angle = angle || 0;
    }
  
    draw(context){
      let shaftHeigth = 12;
      let shaftLength = 70;
      let headHeigth = 24;
      let headLength = 15;
  
  
      context.fillStyle = "rgba(0,0,255,1)";
      context.save();
      context.translate(this.pos.dx,this.pos.dy);
      context.rotate(this.angle);  
  
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(0,-shaftHeigth/2);
      context.lineTo(shaftLength,-shaftHeigth/2);
      context.lineTo(shaftLength,-headHeigth/2);
      context.lineTo(shaftLength+headLength,0);
      context.lineTo(shaftLength,headHeigth/2);
      context.lineTo(shaftLength,shaftHeigth/2);
      context.lineTo(0,shaftHeigth/2);
      context.closePath();
      context.stroke();
      context.fill();
  
      context.restore();
    }
  }