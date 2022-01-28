var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudo;
var obstacles; 
var score = 0; 

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  
  cloudo = loadImage("cloud.png");
  
  obsi = loadImage("obstacle1.png");
  obsi2 = loadImage("obstacle2.png");
  obsi3 = loadImage("obstacle3.png");
  obsi4 = loadImage("obstacle4.png");
  obsi5 = loadImage("obstacle5.png");
  obsi6 = loadImage("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  clud = createGroup (); 
  obi = createGroup ();
}

function draw() {
  background(240,250,230);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  Cloud();
  Obstacles();
  
  trex.collide(invisibleGround);
  drawSprites();
  
  
  score = Math.round(frameCount/2);
  text(score,200,90);
}

function Cloud(){
 
  if(frameCount % 60==0){
    cloud = createSprite(550,80,25,25);
    cloud.velocityX = -5 ;
    cloud.addImage("cloudy",cloudo);
    cloud.lifetime = 600/5;
    cloud.y = random(80,10);
      trex.depth = cloud.depth + 50; 
    clud.add(cloud); 
  }
}

function Obstacles(){
  if(frameCount % 60==0){
    obstacles = createSprite(555,180,10,10);
    obstacles.velocityX = -4
    obstacles.lifetime = 600/4;
    obi.add(obstacles);
        r = Math.round (random(1,6));
        switch(r){
          case 1 : obstacles.addImage("o",obsi);
            break;
          case 2 : obstacles.addImage("b",obsi2);
            break;
          case 3 : obstacles.addImage("s",obsi3);
            break;
          case 4 : obstacles.addImage("t",obsi4);
            break;
          case 5 : obstacles.addImage("a",obsi5);
            break;
          case 6 : obstacles.addImage("c",obsi6);
            break;
            default:
            break;
        }
    obstacles.scale = 0.5;  
      
  }
}




