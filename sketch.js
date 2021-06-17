var issimg;
var bg,undock;
var iss,spacecraft,hasDocked=false;

function preload(){
  img1=loadImage("spacecraft1.png");
  img2=loadImage("spacecraft2.png");
  img3=loadImage("spacecraft3.png");
  img4=loadImage("spacecraft4.png");
  bg=loadImage("spacebg.jpg");
  issimg=loadImage("iss.png");
}


function setup() {

  createCanvas(800,450);

  iss=createSprite(400, 250);
  iss.addImage(issimg);
  iss.scale=0.7;

  spacecraft=createSprite(370,350);
  spacecraft.addImage(img1);
  spacecraft.scale=0.10;

  undock=createSprite(100,100,20,20);
  undock.shapeColor ="yellow";
  



}

function draw() {
  background(bg); 

  undock.visible=false;
  
  spacecraft.addImage(img1);
  spacecraft.scale=0.10;

  if(!hasDocked){

   spacecraft.x=spacecraft.x + random(0,0);



    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(img4);
      spacecraft.x=spacecraft.x-1;
    }
      
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(img3);
      spacecraft.x=spacecraft.x+1;
    }
      
    if(keyDown("UP_ARROW")){
      spacecraft.y=spacecraft.y-1;
    }
      
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(img2);
      spacecraft.y=spacecraft.y+1;
    }
       

  }
  if(spacecraft.x<=355 && spacecraft.y<=294){
    hasDocked=true;
    undock.visible=true;
    fill("white");
    textSize(20);
    text("|DOCKED SUCCESFULLY|",300,370);
    textSize(10);
    text("PRESS TO UNDOCK",10,80);

  }
  if(mousePressedOver(undock)){
    spacecraft.x=400;
    spacecraft.y=370;
    hasDocked=false;
  }

  drawSprites();
}