var spacecraft , space_img;
var bg , bg_img;
var spacecraft2 , spacecraft2_img;
var spacecraft3 , spacecraft3_img;
var spacecraft4 , spacecraft4_img;
var spaceshuttle , spaceshuttle_img;
var hasDocked = false;

function preload(){
space_img = loadImage("spacecraft1.png");
bg_img = loadImage("spacebg.jpg");
spacecraft2_img  = loadImage("spacecraft2.png");
spacecraft3_img = loadImage("spacecraft3.png");
spacecraft4_img = loadImage("spacecraft4.png");
spaceshuttle_img = loadImage("iss.png");
}

function setup() {
  createCanvas(800,800);
  spacecraft = createSprite(380, 500, 50, 50);
  spacecraft.addImage(space_img);
  spacecraft.scale = 0.2;
  spaceshuttle = createSprite(400 , 400 , 100 , 100);
  spaceshuttle.addImage(spaceshuttle_img);
  spaceshuttle.scale = 0.7;
}

function draw() {
  background(bg_img);  
  if(keyDown("UP_ARROW")){
   spacecraft.y = spacecraft.y - 5;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2_img);
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft3_img);
    spacecraft.x = spacecraft.x + 5;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft4_img);
    spacecraft.x = spacecraft.x - 5;
    
  }

  if(spacecraft.y <= (spaceshuttle.y + 180) && spacecraft.x <= (spaceshuttle.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking successful !" , 200 , 300);
  }
  //spacecraft = spacecraft.x + random(-1 , 1);
  //spacecraft.x = spacecraft.x + random(-1 , 1);
 // spacecraft.x = spacecraft.x + randomNumbers(-1 , 1);
 spacecraft.x = spacecraft.x + random(-1 , 1);
   drawSprites();
}