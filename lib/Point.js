class Point {
  constructor(position,radius,Color,draggable){
    this.position = position;
    this.radius = radius;
this.Color=Color;
this.active=false;
this.draggable=false||draggable;


if(this.draggable) 
this.drag();
  }
 
  draw(context){
    context.beginPath();
    context.strokeStyle = "rgb(0,0,255)";
    context.fillStyle = this.Color;
    context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
    context.strokeStyle="black";
    context.stroke();
    context.fill();
    context.closePath();
    }
    drag(){
      
      let dragging=false;
      window.addEventListener('mousedown',(evt)=>{
        let mouse=new Vector2d(evt.clientX,evt.clientY);
   
        let difference = new Vector2d(0,0);
        difference.differenceVector(this.position,mouse);
        if(difference.magnitude<this.radius){
          dragging=true;
        }
            
      });
      window.addEventListener('mousemove',(evt)=>{

        document.body.style.cursor="default";
        
        if(dragging){
         this.position.dx=evt.clientX;
         this.position.dy=evt.clientY;
        };
        let mouse=new Vector2d(evt.clientX,evt.clientY);
       
        let difference = new Vector2d(0,0);
        difference.differenceVector(this.position,mouse);
        if(difference.magnitude<this.radius){
          document.body.style.cursor="pointer";
          evt.stopImmediatePropagation();
      }});
      window.addEventListener('mouseup',(evt)=>{
        dragging=false;
      });

    }
}
