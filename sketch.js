
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld,object;
function setup(){
  var canvas = createCanvas(800,800);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  object=Bodies.rectangle(200,100,50,50);
  World.add(myWorld,object);
}
function draw()
{ 
  background(0);

  Engine.update(myEngine);

  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
  
}
