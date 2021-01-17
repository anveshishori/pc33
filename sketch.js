var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var turn = 0;
var score = 0;
var plinkos = [];
var divisions = []

var divisionHeight=300;
var score =0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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
  background("black");
  textSize(20)
  fill("white")
  text("Score : "+score,20,30);


  for (i=20; i<300;i=i+80){
  text(500,i,550 )
  }
  for (i=340; i<550;i=i+80){
    text(100,i,550 )
    }

    for (i=580; i<800;i=i+80){
      text(200,i,550 )
      }


  Engine.update(engine);
 
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   
 if(particle != null){
  console.log("its running")
     particle.display();
  
      if(particle.body.position.y>760)
      {
        if (particle.body.position.x<300){
          score = score + 500;}
          else if(particle.body.position.x>=300 && particle.body.position.x<600){
            score = score+100;
          }
          else if(particle.body.position.x>=600 && particle.body.position.x<=800){
            score = score+200;
          }
          particle = null
          if(turn >=5){
            gameState = "end"
          }
  
        }
  
      }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
   
   }



function mousePressed(){

  if(gameState != "end"){

    turn++
    particle =new Particle(mouseX, 10,10);
    console.log(particle);
    
    
    

}
}