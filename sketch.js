var wall,car;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  wall= createSprite(1540, 300, 60, 200);
 

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
 
  speed= random(55,90);
   weight= random(400,1500);
 
 if (car.x - wall.x < (car.width/2 + wall.width/2))
 
   deformation = 0.5*weight*speed*speed/22500;
  car.velocityX=0;

   if(deformation<180){
car.shapeColor = color(255,0,0);

  }

  if(deformation < 180 && deformation > 100){
car.shapeColor = color(230,230,0);
  }
  
if(deformation < 100){
  car.shapeColor(0,230,0);
}



  }
   


function draw() {
  background("black");  
  drawSprites();
}