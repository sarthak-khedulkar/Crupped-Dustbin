
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Engine,world;
var ground,ball;
var bin;
var leftside,rightside,bottom;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper =new Paper(100,600,10)
	ground=new Ground(400,600,800,20);
	leftside=new Dustbin(550,620,20,100);
  bottom=new Dustbin(610,660,100,20);
	rightside =new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  ground.display();
  leftside.display();
  rightside.display();
  bottom.display();
  drawSprites();
}
Engine.update(engine);
  function keypressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.Body,paper.Body.position,{x:15,y:-15})

    }
  }




