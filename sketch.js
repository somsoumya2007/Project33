const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var backgroundImg;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0;
var score = 0;




function preload(){
  backgroundImg=loadImage("background.jpg");
}




function setup() {
   createCanvas(800, 800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(backgroundImg);
 
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(30);
  text("score:-"+score,20,40);
  fill("orange"); 

  textSize(30);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("500",320,550);
  text("500",400,550);
  text("500",480,550);
  text("500",560,550);
  text("500",640,550);
  text("500",720,550);





  ground.display();
  drawSprites();
   if (gameState =="END"){
     background("black");
     fill("red");
     textSize(100);
     text ("Game Over",200,400);

   }
   
  
   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


if (partical=null){
  particla.display();
  if (partical.body.position.y>700){
    
     if (particles.body.position.x<300){
     score=score+500;
     partical=null;
     if(count>=5)gameState ="END";
    }

    else if (particla.body.position.x<600 && partical.body.position.x>301)
    {
      score=score+100;
      partical=null;
      if(count>=5)gameState="END";
    }
   else if (partical.body.position.x<900  && partical.body.position.x>601){
     score=score+200;
     partical=null;
     if(count>=5) gameState=End;
   }


  }
}

for (var i=0;i<divisions.length;i++){
  divisions[i].display();
}

}
function mousePressed(){
  if (gameState!=="END"){
    partical = new Partical(mouseX,50,10,10);
  }
}