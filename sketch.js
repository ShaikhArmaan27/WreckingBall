const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var ball
var ground
var string
var world,engine


function setup() {
createCanvas(800,600)

engine = Engine.create()

world = engine.world

//engine.run()

ground = new Ground(400,580,800,10)
box1 = new Box(650,540,70,70)
box2 = new Box(650,470,70,70)
box3 = new Box(650,400,70,70)
box4 = new Box(650,330,70,70)
box5 = new Box(650,260,70,70)

box6 = new Box(580,540,70,70)
box7 = new Box(580,470,70,70)
box8 = new Box(580,400,70,70)
box9 = new Box(580,330,70,70)
box10 = new Box(580,260,70,70)

ball = new Paper(200,300,30)

sling = new Slingshot(ball.body,{x:200,y:100})



}
function draw() {
background(0)
Engine.update(engine)

ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()

box6.display()
box7.display()
box8.display()
box9.display()
box10.display()

ball.display()

sling.display()

}



function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }