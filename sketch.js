var backgroundImage;
var ground;
var treeImage;
var jackson,jacksonImage;
var banana,grapes,pear,apple,orange,pineapple,Strawberry;
var chocolate,burger,coke,frenchfries;
var coronavirus;
var score;
var fruitsGroup;
var junkGroup;
var coronaGroup;
var coronastringGroup;
var PLAY=1;
var END=0;
var gameState=1;
score=0;





function preload(){
backgroundImage=loadImage("Images/ground.jpg");
treeImage=loadImage("Images/tree.png");
jacksonImage=loadAnimation("Images/jackson-1.png","Images/jackson-2.png");
banana=loadImage("Images/banana.png");
grapes=loadImage("Images/grapes.png");
strawberry=loadImage("Images/Strawberry.png");
pear=loadImage("Images/pear.png");
apple=loadImage("Images/apple.png");
orange=loadImage("Images/orange.png");
pineapple=loadImage("Images/pineapple.png");
chocolate=loadImage("Images/choclate.png");
burger=loadImage("Images/burger.png");
coke=loadImage("Images/coke.png");
frenchfries=loadImage("Images/frenchfries.png");
coronavirus=loadImage("Images/coronavirus.png");

}

function setup(){
createCanvas(windowWidth,windowHeight);
ground=createSprite(windowWidth/2,windowHeight/2);
ground.velocityY=4;
ground.addImage(backgroundImage);
ground.scale=5;

jackson=createSprite(windowWidth/2,windowHeight-150);
jackson.scale=0.1;
jackson.addAnimation("running",jacksonImage);


fruitsGroup=new Group();
junkGroup=new Group();
coronaGroup=new Group();
coronastringGroup=new Group();
}

function draw(){

  background("black");
  if(gameState===1){

  
  if(ground.y>windowHeight){
    ground.y=windowHeight/2;
  }
  if(frameCount%1000===0){
    for(var i=100;i<windowWidth-50;i=i+100){
      coronastring=createSprite(i,0)
      coronastring.scale=0.08;
      coronastringGroup.add(coronastring);
      coronastring.velocityY=4;
      coronastring.addImage(coronavirus)
    }
  }
  
  
spawntrees();
spawnfruits();
spawnjunk();
spawncorona();

if(fruitsGroup.isTouching(jackson)){
  fruitsGroup.destroyEach();
  score=score+2;

}

if(coronaGroup.isTouching(jackson)){
  coronaGroup.destroyEach();
  score=score-5;
}

if(coronastringGroup.isTouching(jackson)){
  coronastringGroup.destroyEach();
 score=score-10;
 if(score<=0){
  gameState=0; 
 }
}

if(junkGroup.isTouching(jackson)){
  junkGroup.destroyEach();
  score=score-2;
}

if(keyWentDown(RIGHT_ARROW)){
  jackson.velocityX=14; 
}
if(keyWentUp(RIGHT_ARROW)){
  jackson.velocityX=0;
}
if(keyWentDown(LEFT_ARROW)){
  jackson.velocityX=-14; 
}
if(keyWentUp(LEFT_ARROW)){
  jackson.velocityX=0;
}

drawSprites();
textSize(20);
fill("red");
text("SCORE : "+score,100,30);
  }
  if(gameState===0){
    textSize(100);
    strokeWeight(30);
    stroke("white")
    fill("orange");
    text("GAME OVER !!!",windowWidth/2-300,windowHeight/2);
  }
}

function spawntrees(){
  if(frameCount%80===0){
    tree1=createSprite(100,10);
    tree1.scale=0.7;
    tree1.addImage(treeImage);
    tree1.velocityY=4;

    tree=createSprite(windowWidth-100,10);
    tree.scale=0.7;
    tree.addImage(treeImage);
    tree.velocityY=4;
  }

} 

function spawnfruits(){
  if(frameCount%80===0){
    fruit=createSprite(100,10);
    fruit.x=Math.round(random(150,width-150));
    fruit.velocityY=4;
    fruitsGroup.add(fruit);
    

   var num=Math.round(random(1,7))
   switch(num){
     case 1 :fruit.addImage(banana);
   fruit.scale=0.2;
     break;
     case 2: fruit.addImage(pear);
     fruit.scale=0.3;
     break;
     case 3: fruit.addImage(apple);
     fruit.scale=0.04;
     break;
     case 4: fruit.addImage(strawberry);
     fruit.scale=0.1;
     break;
     case 5: fruit.addImage(pineapple);
     fruit.scale=0.4;
     break;
     case 6: fruit.addImage(orange);
     fruit.scale=0.1;
     break;
     case 7: fruit.addImage(grapes);
     fruit.scale=0.3;
     break;
   }
console.log(num);
 }

}

function spawnjunk(){
  if(frameCount%70===0){
    junk=createSprite(300,10);
    junk.x=Math.round(random(150,width-150));
    junk.velocityY=4;
    junkGroup.add(junk);

   var num=Math.round(random(1,4))
   switch(num){
     case 1 :junk.addImage(burger);
  junk.scale=0.2;
     break;
     case 2: junk.addImage(coke);
     junk.scale=0.2;
     break;
     case 3: junk.addImage(frenchfries);
     junk.scale=0.3;
     break;
     case 4: junk.addImage(chocolate);
     junk.scale=0.3;
     break;

   }
console.log(num);
 }

} 

function spawncorona(){
  if(frameCount%100===0){
    corona=createSprite(100,10);
    corona.x=Math.round(random(150,width-150));
    corona.scale=0.08;
    coronaGroup.add(corona);
    corona.addImage(coronavirus);
    corona.velocityY=4;

  /*  corona=createSprite(150,10);
    corona.x=Math.round(random(150,width-150));
    corona.scale=0.08;
    corona.addImage(coronavirus);
    corona.velocityY=4;*/
  }
}