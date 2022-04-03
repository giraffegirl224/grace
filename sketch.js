var robbers, Doggy, bag, robberimg, doggyimg, bagImg, stripyw
var start, Gamestate, chaser, Bhuvika, coin
function preload(){
robberimg=loadAnimation("robbergifer/sprite_00.png", 
"robbergifer/sprite_01.png","robbergifer/sprite_02.png",
"robbergifer/sprite_03.png","robbergifer/sprite_04.png", 
"robbergifer/sprite_05.png", "robbergifer/sprite_06.png",  
 "robbergifer/sprite_07.png","robbergifer/sprite_08.png",
"robbergifer/sprite_09.png","robbergifer/sprite_10.png", 
"robbergifer/sprite_11.png", "robbergifer/sprite_12.png",
"robbergifer/sprite_13.png","robbergifer/sprite_14.png",
"robbergifer/sprite_15.png","robbergifer/sprite_16.png", 
"robbergifer/sprite_17.png", "robbergifer/sprite_18.png",
"robbergifer/sprite_19.png","robbergifer/sprite_20.png",
"robbergifer/sprite_21.png","robbergifer/sprite_22.png", 
"robbergifer/sprite_23.png"  )
doggyimg=loadImage("doggy!.gif")
//road=loadImage("road.webp")
bagImg=loadImage("robber image bag (1).gif")
StartImg=loadImage("start.png")
stripyg=loadImage("stripy wierdo.png")
Chaser=loadImage("runner.gif")
}

function setup() {
    Gamestate = "start"
 createCanvas(windowWidth, windowHeight)
 robbers=createSprite(width/2,height-250,50,50)
 robbers.addAnimation("robber",robberimg)
 robbers.frameDelay=-1
 robbers.visible=false
 //robbers.debug=true
 robbers.setCollider("circle",0,0,150);
 
 Doggy=createSprite(400,height-120,50,50)
 Doggy.addImage(doggyimg)
 Doggy.scale=0.7
 Doggy.frameDelay=-1
 Doggy.visible= false
 //Doggy.debug=true
 Doggy.setCollider("circle",0,0,300);
 
 bag=createSprite(550,height-420,50,50)
 bag.addImage(bagImg)
 bag.scale=1.4
 bag.visible=false
 //bag.debug=true
 bag.setCollider("circle",0,0,40);
 
 start=createSprite(width/2,400,50,50)
 start.addImage(StartImg)
 start.visible=true
 start.scale=1.5

 stripyw=createSprite(width/2,800,50,50)
 stripyw.addImage(stripyg)
 stripyw.visible=true
 stripyw.scale=2

 chaser=createSprite(width/2,height-250,50,50)
 chaser.addImage(Chaser)
 chaser.visible=false
 chaser.scale=1
 chaser.setCollider("circle",0,0,200);
 //chaser.debug=true

 chaser.depth=Doggy.depth= bag.depth
 Doggy.depth=Doggy.depth +1
 Bhuvika = "bye"
}

function draw() {

background("white")  
if(keyDown("space")){
Gamestate = "play"
}
if (Gamestate == "play"){
    background(rgb(141, 226, 248))
    robbers.visible=true
    Doggy.visible=true
    bag.visible=false
    start.visible=false
    stripyw.visible=false
    
    Doggy.velocityX=3
   if(Doggy.isTouching(robbers)) {
   // bag.visible=true
    Bhuvika="hi"
    //chaser.visible=true
   // background(rgb(248,145,26))
   }
}if (Bhuvika === "hi"){
    bag.visible=true
    
}
    drawSprites() 
}