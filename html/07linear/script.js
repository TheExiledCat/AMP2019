const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let A=new Point(new Vector2d(100,100),50,"rgb(0,0,255)",true);
let B=new Point(new Vector2d(10,100),50,"rgb(0,0,255)",true);
let f = new LinearFunction(-0.2,200);
function animate(){
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);
  A.draw(context);
  B.draw(context);
  f.DefineLineWithTwoPoints(A,B);
    f.intercept=f.CalcB(A);
    let point = new Point(new Vector2d(0,f.CalcY(0)),10,"black",false);
    let point1 = new Point(new Vector2d(width,f.CalcY(width)),10,"black",false);
    context.font="30px Arial";
    context.fillStyle="black";
    context.fillText(A.position.dx+","+A.position.dy,A.position.dx-A.radius,A.position.dy-A.radius*2);
    context.fillText(B.position.dx+","+B.position.dy,B.position.dx,B.position.dy-A.radius*2);
    context.moveTo(point.position.dx,point.position.dy);
    context.lineTo(point1.position.dx,point1.position.dy);
    context.stroke();
    point.draw(context);
    point1.draw(context);
  
    context.beginPath();
    context.lineWidth=1;
    for (let index = 0; index < width; index+=width/19.2) {
      context.moveTo(index,0);
      context.lineTo(index,height);
      
      context.stroke();
    }
    
    context.beginPath();
    context.lineWidth=1;
    for (let index = 0; index < height; index+=height/10) {
      context.moveTo(0,index);
      context.lineTo(width,index);
     
      context.stroke();
    }
   

}

animate();