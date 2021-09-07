var ship;
var ship_swimming;
var edges;
var seaImage;
var sea;
function preload(){
ship_swimming = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue")
 


sea=createSprite(400,200)
sea.addImage(seaImage)
sea.scale=0.3

ship=createSprite(130,200,30,30) 
ship.addAnimation("ship",ship_swimming)
ship.scale=0.2



}



function draw(){
  background(0)
  
  sea.velocityX = -2
  if(sea.x<0){
  sea.x=sea.width/8
  }
drawSprites();  
}
