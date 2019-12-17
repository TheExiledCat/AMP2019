const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();
let dx,dy;
let mouse ={};
let A = new Point(new Vector2d(width/2,height/2),10);
let B = new Point(new Vector2d(0,0),10);

let arrow = new Arrow(new Vector2d(width/2,height/2),0);
let line = new LinearFunction(0,0);

context.font = "30px Arial";


function animate(){
  requestAnimationFrame(animate);
  //context.clearRect(0,0,width,height);
  grid.draw(context);

  A.draw(context);
  B.position.dx = mouse.x;
  B.position.dy = mouse.y;
  B.draw(context);

  //horizontal line
  context.fillStyle= "black";
  context.strokeStyle= "rgba(255,0,0,0.4)";
  context.lineWidth = "5";
  context.beginPath();
  context.moveTo(mouse.x,mouse.y);
  context.lineTo(arrow.pos.dx,mouse.y);
  context.closePath();
  context.stroke();
  context.fillText("dx = " + dx, mouse.x - dx/2, mouse.y - 10);

  //vertical line
  context.beginPath();
  context.moveTo(mouse.x,mouse.y);
  context.lineTo(mouse.x,arrow.pos.dy);
  context.closePath();
  context.stroke();
  context.fillText("dy = " + dy, mouse.x + 10, mouse.y - dy/2);
  context.lineWidth = "1";

  context.fillText("dy/dx = " + Math.floor((dy/dx)*100)/100,10,30);
  context.fillText("angle = " + Math.floor(Math.atan2(dy,dx)*100)/100,10,70);

  // dashed lines

  //horizontal
  context.strokeStyle = "blue";
  context.lineWidth = "3";
  context.beginPath();
  context.setLineDash([10, 5]);
  context.moveTo(arrow.pos.dx, arrow.pos.dy);
  context.lineTo(mouse.x, arrow.pos.dy);
  context.stroke();

  //vertical
  context.beginPath();
  context.moveTo(arrow.pos.dx, arrow.pos.dy);
  context.lineTo(arrow.pos.dx, mouse.y);
  context.stroke();

  //diagonal
  context.beginPath();
  context.moveTo(arrow.pos.dx, arrow.pos.dy);
  context.lineTo(mouse.x, mouse.y);
  context.stroke();

  context.setLineDash([]);

  context.fillStyle= "rgba(255,255,255,0.2)";
  context.fillRect(0,0,width,height);
  arrow.draw(context);
}

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
  dx = mouse.x -arrow.pos.dx;
  dy = mouse.y - arrow.pos.dy;
  arrow.angle = Math.atan2(dy,dx);
  line.slope = dy/dx;
  line.intercept = arrow.pos.dy - arrow.pos.dx*line.slope;
})

animate();