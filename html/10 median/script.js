const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(canvas.width/2,200),10, 10, true);
let B = new Point(new Vector2d(canvas.width/3*2,600),10, 10, true);
let C = new Point(new Vector2d(canvas.width/3,600),10, 10, true);

let Centroid=new Point(new Vector2d(canvas.width/3,600),10, 10, false);

let D = new Point(new Vector2d(canvas.width/3,600),10, 10, false);
let E = new Point(new Vector2d(canvas.width/2,600),10, 10, false);
let F= new Point(new Vector2d(canvas.width/6,600),10,10,false);

let h = new LinearFunction(1,1);
let k = new LinearFunction(1,1);
let l = new LinearFunction(1,1);
function animate(){
requestAnimationFrame(animate);
context.clearRect(0,0,canvas.width,canvas.height);

Centroid.position=Centroid.position.CalcCenter([A,B,C])
console.log(Centroid.position);
A.draw(context);
B.draw(context);
C.draw(context);

D.position=D.position.CalcMedian(A,B);
E.position=E.position.CalcMedian(C,B);
F.position=F.position.CalcMedian(A,C);
D.draw(context);
E.draw(context);
F.draw(context);


Centroid.draw(context);

context.moveTo(A.position.dx,A.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);
context.moveTo(B.position.dx,B.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);
context.moveTo(C.position.dx,C.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);
context.moveTo(D.position.dx,D.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);
context.moveTo(E.position.dx,E.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);
context.moveTo(F.position.dx,F.position.dy);
context.lineTo(Centroid.position.dx,Centroid.position.dy);

context.moveTo(A.position.dx,A.position.dy);
context.lineTo(B.position.dx,B.position.dy);
context.moveTo(B.position.dx,B.position.dy);
context.lineTo(C.position.dx,C.position.dy);
context.moveTo(A.position.dx,A.position.dy);
context.lineTo(C.position.dx,C.position.dy);
context.stroke();
}
animate();