var bgImg;
var tom,tomImg ;
var jerry,mouseImg;
var catImg2;
var mouseImg2;
var catImg4;
var mouseImg4;









function preload() {
    bgImg  = loadImage("images/garden.png");
    tomImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    catImg2 = loadImage("images/cat2.png","images/cat3.png");
    mouseImg2 = loadImage("images/mouse2.png","images/mouse3.png");
    catImg4 = loadImage("images/cat4.png")
    mouseImg4 = loadImage("images/mouse4.png"); 
}

function setup(){
    createCanvas(1000,800);
    tom  = createSprite(870,600);
    tom.addImage  ("tomsleeping",tomImg);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addImage  ("jerrystanding",mouseImg);
    jerry.scale = 0.15;
}

function draw() {

    background(bgImg);
    if (tom.x-jerry.x<(tom.width/2-jerry.width/2)){
     tom.velocity.X = 0
    tom.addAnimation("tomlastImg",catImg4);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation("tomlastImg")
    jerry.addAnimation("jerrylastImg",mouseImg4);
    //tom.x = 300;
    jerry.scale = 0.15;
    jerry.changeAnimation("jerrylastImg");
    
    }

    drawSprites();
}


function keyPressed(){

  if (keyCode===LEFT_ARROW){
     // tom.velocityX = -5;
      //tom.addAnimation("tomrunning",catImg2)
      jerry.addAnimation("jerryteasing",mouseImg2)
     jerry.changeAnimation("jerryteasing");
     jerry.frameDelay= 25;
  }


}
