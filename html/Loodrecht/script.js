const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(Math.random()*canvas.width, Math.random()*canvas.height),10, 10, true);
let B = new Point(new Vector2d(Math.random()*canvas.width, Math.random()*canvas.height),10, 10, true);
let C = new Point(new Vector2d(Math.random()*canvas.width, Math.random()*canvas.height),10, 10, true);
let h = new LinearFunction(1,1);
let l = new LinearFunction(1,1);
function animate(){
requestAnimationFrame(animate);
context.clearRect(0,0,canvas.width,canvas.height);
A.draw(context);
B.draw(context);
h.DefineLineWithTwoPoints(A,B);
l.draw(context);
h.draw(context);
C.draw(context);
l.slope = -1/h.slope;
l.intercept = C.position.dy - l.slope*C.position.dx;
}
animate();