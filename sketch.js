
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio  = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint)

	//Create the Bodies Here.
	bob1 = new Bob(200,450,70)
	bob2 = new Bob(270,450,70)
	bob3 = new Bob(340,450,70)
	bob4 = new Bob(410,450,70)
	bob5 = new Bob(480,450,70)
	roof = new Roof(350,20,420,50)
	// rope1 = new Chain(bob1.body,roof.body,200,0)
	// rope2 = new Chain(bob2.body,roof.body,270,0)
	// rope3 = new Chain(bob3.body,roof.body,340,0)
	// rope4 = new Chain(bob4.body,roof.body,410,0)
	// rope5 = new Chain(bob5.body,roof.body,480,0)
	rope1 = new Chain(bob1.body,{x:200,y:50})
	rope2 = new Chain(bob2.body,{x:270,y:50})
	rope3 = new Chain(bob3.body,{x:340,y:50})
	rope4 = new Chain(bob4.body,{x:410,y:50})
	rope5 = new Chain(bob5.body,{x:480,y:50})
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
//   roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
	   Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
	   }  
	


