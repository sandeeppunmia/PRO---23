const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	box1 = new Box(400,650,200,20);
	box2 = new Box(300,620,20,100);
	box3 = new Box(500,620,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
	background(0);

  rectMode(CENTER);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageBody.restitution=0

  packageSprite.x = helicopterSprite.x;

box1.display();
box2.display();
box3.display();

drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageBody.restitution = 0.7
 }

 if(keyCode === LEFT_ARROW){
	 helicopterSprite.x = helicopterSprite.x-20;
 }

 if(keyCode === RIGHT_ARROW){
	 helicopterSprite.x = helicopterSprite.x+20;
 }
}