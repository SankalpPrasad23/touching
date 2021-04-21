var moving,fixed;


function setup() {
  createCanvas(800,400);
  moving=createSprite(500,200,60,100);
  fixed=createSprite(200,300,100,100);
  moving.shapeColor="green";
  fixed.shapeColor="green";
}

function draw() {
  background("black");  
  drawSprites();
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x < moving.width/2+fixed.width/2 && fixed.x-moving.x < fixed.width/2+moving.width/2 && fixed.y-moving.y < fixed.height/2+moving.height/2 && moving.y-fixed.y < fixed.height/2+moving.height/2 ){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
else{
  moving.shapeColor="green";
  fixed.shapeColor="green";
}




}