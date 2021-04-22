
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var Paper;
var bin1;
var bin2;
var bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	Paper = new paper(200,200,15,15);

	ground = new Ground(100,380,1800,200); 

	//bin1 = new wall(750,275,150,10);
	//bin2 = new wall(680,230,10,90);
	//bin3 = new wall(820,230,10,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  Paper.display();
  //bin1.display();
  //bin2.display();
  //bin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:10,y:-13})
		
	}
}
