
var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime,stone;
var ground,groundImage,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  

  
  monkey = createSprite(30,310,20,50);
  monkey.addAnimation("running", monkey_running);
  //monkey.addAnimation("collided", trex_collided);
  monkey.scale=0.1
  
  ground = createSprite(200,350,800,20);
  ground.x = ground.width /2;
  ground.velocityX=-4;
  
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;
  
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
  survivalTime=0;
}


function draw() {
background("white");
  stroke("black");
  textSize(18);
  fill("black");
  text("survivalTime: "+ survivalTime, 250,50);
  survivalTime = survivalTime + Math.round(World.frameCount/60);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 230) {
        monkey.velocityY = -12;
  } 
      monkey.velocityY = monkey.velocityY + 0.8

    monkey.collide(invisibleGround);

  
   drawSprites();
  
  
  spawnBanana();
  spawnObstacle();
}

function spawnBanana(){
   if (frameCount % 100 === 0) {  
     
    var  banana=createSprite(350,200,20,20)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX = -4;

    banana.lifetime = 200;
   }
}
function spawnObstacle(){
     if (frameCount % 150 === 0) {  
       
    obstacle=createSprite(200,323,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -4;
    obstacle.scale=0.1;
    
  }
  
  
  

}






