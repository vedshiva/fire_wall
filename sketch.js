var fire,wall;

var speed,width;

var thickness;

function setup() {

  createCanvas(1600,400);

  fire = createSprite(100, 200, 50, 50);

  wall = createSprite(1500, 200, thickness, height/2);

  speed = random (223,321);
  weight = random (30,52);

  thickness = random (22,83);

  fire.velocityX = speed;
}

function draw() {
  background(0);  

  if (hasCollided(fire, wall)){

    fire.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if (damage > 10){

      wall.shapeColor = color(255,0,0)
    
    }

    if (damage < 10 ){

      wall.shapeColor = color(0,255,0)
    
    }

  }

  drawSprites();
}

function hasCollided (lfire, lwall){

  fireRightEdge = lfire.x + lfire.width;

  wallLeftEdge = lwall.x;

  if (fireRightEdge>=wallLeftEdge){
    return true;
  }

    return false;

}
