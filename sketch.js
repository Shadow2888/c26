
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,50,1200,50);

	b1 = new BOB(100,200,60,60);
	b2 = new BOB(160,200,60,60);
	b3 = new BOB(220,200,60,60);
	b4 = new BOB(280,200,60,60);
	b5 = new BOB(340,200,60,60);
  
	r1 = new Rope(b1.body,{x:100, y:50});
	r2 = new Rope(b2.body,{x:160, y:50});
	r3 = new Rope(b3.body,{x:220, y:50});
	r4 = new Rope(b4.body,{x:280, y:50});
	r5 = new Rope(b5.body,{x:340, y:50});

	//b1.fill(0,255,0);

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
 
  
  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  
  drawSprites();
 
}

//function mouseDragged(){
	//if (gameState!=="launched"){
//		Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
	//}
 // }
  
  function mouseDragged(){
	//if (gameState!=="launched"){
		Matter.Body.setPosition(b1.body, {x: mouseX , y: mouseY});
	//}
  }
  
