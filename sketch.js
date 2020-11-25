var bullet,wall
var speed,weight,thickness
function setup() {
  createCanvas(1000,400);
  bullet=createSprite(50,200,25,25)
  bullet.shapeColor="white"
  wall=createSprite(900,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83)

}

function draw() {
  background("black"); 
  bullet.velocityX=speed;

 if(collided(wall,bullet)){
   bullet.velocityX=0
   bullet.x=838
   var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor=color(255,0,0)
   }
   if(damage<10){
     wall.shapeColor=color(0,255,0)
   }
 }

  drawSprites();
}
function collided(wall,bullet){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0
    bullet.x=845
    return true
  }
  return false
}