var options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
}

fly ()
    this.stone.bodyA=null;


display () 
    if (this.stone.bodyA) {
        var pointA = this.stone.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }


