class LinearFunction{
    constructor(slope,intercept){
        this.slope=slope;
        this.intercept=intercept;
    }
    CalcY(x){
        return this.slope*x+this.intercept;
    }
    DefineLineWithTwoPoints(A,B){
        this.slope=(B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
        this.intercept=A.position.dy-this.slope*A.position.dx;
    }
    Intersection(m){
        let ans={};
        ans.x=(m.intercept-this.intercept)/(this.slope-m.slope);
        ans.y=this.slope*ans.x+this.intercept;
        return ans;
    }
    CalcB(A){
      return  A.position.dy- (this.slope*A.position.dx);
    }
   
    draw(context){
        context.beginPath();
        context.moveTo(0,this.CalcY(0));
        context.lineTo(canvas.width,this.CalcY(canvas.width));
        context.closePath();
        context.stroke();
    }
}