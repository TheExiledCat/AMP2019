class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude(){
      return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }
    
    differenceVector(a,b){
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }
    CalcMedian(A,B){
     let x= (A.position.dx+B.position.dx)/2;
     let y= (A.position.dy+B.position.dy)/2;
     return new Vector2d(x,y);
    }
    CalcCenter(points){
      let center=new Vector2d(1,1);
      let x=0;
      let y=0;
      for(let i=0;i<points.length;i++){
          x+=points[i].position.dx;
          y+=points[i].position.dy;
      }
      center.dx=x/points.length;
      center.dy=y/points.length;
      return center;
  }
  add(vector){
    this.dx+=vector.dx;
    this.dy+=vector.dy;
  }
}
