const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofObject;
var world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roofObject=new Roof(width/2, 100, 500, 20);
  bobObject1=new paper(200,350,100);
  bobObject2=new paper(300,350,100);
  bobObject3=new paper(400,350,100);
  bobObject4=new paper(500,350,100);
  bobObject5=new paper(600,350,100);
  rope1=new Rope(bobObject1.body,{x:200, y:100});
  rope2=new Rope(bobObject2.body,{x:300, y:100});
  rope3=new Rope(bobObject3.body,{x:400, y:100});
  rope4=new Rope(bobObject4.body,{x:500, y:100});
  rope5=new Rope(bobObject5.body,{x:600, y:100});
  roofObject.shapeColor = "black"
	
}


function draw() {
  background("grey");
  Engine.run(engine);
  rectMode(CENTER);
  
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:0});
  
  }
}

