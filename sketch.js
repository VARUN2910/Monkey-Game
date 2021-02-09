
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survival;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 monkey_stop=loadImage("sprite_0.png");
}



function setup() {
  createCanvas(500,300);
  ground=createSprite(250,270,900,10);  
  monkey=createSprite(70,235,20,20);
  monkey.scale=0.1;
  monkey.addAnimation("monkey1",monkey_running);
  foodG=new Group();
  obstacleG=new Group();
  survival=0;
}


function draw() {
background(255);
  stroke("white");
  if(keyDown("space")&&monkey.y>=230){
    monkey.velocityY=-14;
  }
  if(monkey.isTouching(foodG)){
    foodG.destroyEach();
  }
  ground.velocityX=-4;
  ground.x=ground.width/2;
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survival=Math.ceil(frameCount/40);
  text("SURVIVAL TIME : "+survival,150,30);
  drawSprites();
  obstacle();
  food();
}
function obstacle(){
   if (frameCount % 300 === 0) {
  var obstacle=createSprite(550,230,20,20);
   obstacle.scale=0.2;
   obstacle.velocityX=-7  
   obstacle.addImage(obstaceImage); 
     obstacle.lifetime=130;
   obstacleG.add(obstacle); 
   
   }
} 

function food(){
   if (frameCount % 80 === 0) {
  var food=createSprite(550,230,20,20);
   food.y=(random(120,180));  
   food.scale=0.1;
   food.velocityX=-7  
   food.addImage(bananaImage); 
   food.lifetime=130;
   food.depth=monkey.depth;
   monkey.depth=monkey.depth + 1;  
   foodG.add(food);
   }
}






