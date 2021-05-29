class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 300
        }
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
    attach(body){
        this.Rope.bodyA = body;
    }
    
    fly(){
        this.Rope.bodyA = null;
    }

    display(){
        if(this.Rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            
                strokeWeight(2);
                line(pointA.x, pointA.y, pointB.x, pointB.y,);
          
            pop();
        }
    }
    
}