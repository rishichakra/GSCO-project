var car1,car2,car3,car4;
var wall;
var speed1;
var weight1;




function setup() {
  createCanvas(1600,400);
  speed1 = random(55,90)
  weight1 = random(400,1500);

  wall = createSprite(1500,200,60,400);
  wall.shapeColor = color(80,80,80);
  car1 = new Car(50,200,50,50,weight1,speed1);
  
  /*car2 = createSprite(50,220,50,50)
  car2.velocityX = speed;
  car2.shapeColor = color(255);
  car2.weight = random(400,1500);


  car3 = createSprite(50,240,50,50);
  car3.velocityX = speed;
  car3.shapeColor = color(255);
  car3.weight = random(400,1500);

  car4.createSprite(50,260,50,50);
  car4.velocityX = speed;
  car4.shapeColor = color(255);
  car4.weight = random(400,1500);
  */

}

function draw() {
  background(255,255,255);
  deformed(car1);
  drawSprites();

}

function deformed(car){
deformation = 0.5*car.weight*car.speed*car.speed/22500;
if (deformation < 100 ){
  car.shapeColor = "green";
}
else if (deformation>=100 && deformation < 180){
  car.shapeColor = "yellow";


}
else if (deformation >= 180){
  car.shapeColor = "red";
}
}

