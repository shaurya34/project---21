
var bullet,wall,thickness;
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(23,83))
  bullet =createSprite(50,200,50,20);
  bullet.velocityX = speed;
  wall =createSprite(800,200,thickness,height/2);
  
 
  
}

function draw() {
  background(0,0,0);  
  
 if (wall.x- bullet.x < (bullet.width+wall.width)/2){

   bullet.velocityX = 0;
   //bullet.x=750
   var collision = Math.round((0.5*weight*speed*speed)/(thickness * thickness * thickness));


 if(collision>10){
   wall.shapeColor = color(255,0,0)
 }
 
 if(collision<10){
   wall.shapeColor = color(0,255,0)
 }
 }
 

  drawSprites();
}