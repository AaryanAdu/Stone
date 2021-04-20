const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Box1,Box2
var stone1,stone2,stone3

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Box1 = new Bbox(300,300,50,50)
    Box2 = new Bbox(200,200,70,70)
    stone1 = new Stone(800,350,30,30)
    stone2= new Stone(880,220,20,20)
    stone3 = new Stone(850,120,80,30)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    Box2.display();
    Box1.display();
    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
 
}