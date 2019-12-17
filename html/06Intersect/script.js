const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let A = new Point(new Vector2d(300,200),10,10,true);
let B = new Point(new Vector2d(500,300),10,10,true);
let C = new Point(new Vector2d(600,100),10,10,true);
let D = new Point(new Vector2d(800,500),10,10,true);
let S = new Point(new Vector2d(0,0),10,10,false);
let l = new LinearFunction(1,1);
let h = new LinearFunction(1,1);
function animate(){
requestAnimationFrame(animate);
context.clearRect(0,0,canvas.width,canvas.height);
A.draw(context);
B.draw(context);
C.draw(context);
D.draw(context);
l.DefineLineWithTwoPoints(A,B);
h.DefineLineWithTwoPoints(C,D);
l.draw(context);
S.position.dx = l.Intersection(h).x;
S.position.dy = l.Intersection(h).y;
S.draw(context);
h.draw(context);

}
animate();