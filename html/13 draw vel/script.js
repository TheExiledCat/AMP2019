const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let grid=new Grid();
let point= new Dpoint(new Vector2d(width/2,height/2),new Vector2d(10,10),new Vector2d(0,0),20);
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  point.draw(context);
  point.move();
  point.checkBounce(canvas);
}

animate();
