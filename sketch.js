var fixedRect, movingRect;
var o1, o2, o3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  o1 = createSprite(400, 200, 50, 80);
  o1.shapeColor = "green";
  o2 = createSprite(400, 300, 50, 80);
  o2.shapeColor = "green";
  o3 = createSprite(400, 400, 50, 80);
  o3.shapeColor = "green";
}

function draw() {
  background(0,0,0); 

  o3.x = World.mouseX;
  o3.y = World.mouseY;
  
  //bounceOff(movingRect, fixedRect);

  if(isTouching(movingRect, fixedRect)) 
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else 
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if(isTouching(o3, o1)) 
  {
    o3.shapeColor = "red";
    o1.shapeColor = "red";
  } else 
  {
    o3.shapeColor = "green";
    o1.shapeColor = "green";
  }

  drawSprites();
}