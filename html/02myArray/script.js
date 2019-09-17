const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let points=[];

let mouseVector = new Vector2d(0,0);

let index=0;

newList();
 

function newList(){
 context.clearRect(0,0,canvas.width,canvas.height);
  for(i=0;i<10;i++){
   
    points[i] = new Point(new Vector2d(getRandom(canvas.width),getRandom(canvas.height)),50,"rgb(255,0,0)");
    points[i].draw(context);
  }
  
}
console.log(points.length);
window.addEventListener('click',(evt)=>{
  mouseVector.dx = evt.clientX;
  mouseVector.dy = evt.clientY;
  console.log(mouseVector);
  
  for(i=0;i<points.length;i++){
    let difference = new Vector2d(0,0);
    difference.differenceVector(points[i].position,mouseVector);
    
    if(difference.magnitude<=50){
      console.log("HIT");
      if(points[i].active==false){
        index++;
        if(index==10){
          newList();
          index=0;
          break;
        }
        console.log(index);
      }
      
      points[i].active=true;
      points[i].Color="rgb(0,0,255)";
      points[i].draw(context);
     
    }
    
  }
  
  
    
  

})
function getRandom(max){
  return Math.floor(Math.random()*max);
}