class Dpoint{
    constructor(pos,vel,acc,radius){
        this.pos=pos;
        this.vel=vel;
        this.acc=acc;
        this.radius=radius;
    }

draw(context){


    context.beginPath();
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,Math.PI*2);
    context.closePath();
    context.fill();
}
move(){
    this.pos.add(this.vel);
}
checkBounce(border){
    if(this.pos.dy<=0||this.pos.dy>=border.height){
        this.vel.dy*=-1;
    }
    if(this.pos.dx<=0||this.pos.dx>=border.width){
        this.vel.dx*=-1;
    }
}




}