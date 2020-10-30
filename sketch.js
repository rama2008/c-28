
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	this.image = loadImage("boy.png");
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  drawSprites();

  detectollision(this.stoneObj,mango1);
  detectollision(this.stoneObj,mango2);
  detectollision(this.stoneObj,mango3);
  detectollision(this.stoneObj,mango4);
  detectollision(this.stoneObj,mango5);
 
}

function mouseDragged() {
    Matter.Body.setPosition(this.stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    this.stone.this.fly ();
}

function detectollision(Lstone,Lmango) {
	mangoBodyPosition=lmango.body.setPosition
	stoneBodyPosition=lstone.body.setPosition

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launchedObject.attach(stoneObj.body)
	}
}