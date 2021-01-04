
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background("black")

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ground = new Ground(100,650,2000,20)
	dustbin1 = new Dustbin(610,400,200,20);
	dustbin2 = new Dustbin(700,320,20,100)
	dustbin3 = new Dustbin(520,320,20,100)
    paperObject = new Paper(200,400,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-105});
}

}

