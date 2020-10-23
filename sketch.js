var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground;
var groundImg;
var rand;
var balloonGroup, balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8;
var balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16;
var balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24;
var balloon25, balloon26;
var balloonImg;
var balloonLabel = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78 ,79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
var balloonLabel1, balloonLabel2, balloonLabel3;
var balloon;
var song;
var score = 0;

function preload(){
  groundImg = loadImage("ground.png");
 // A = loadImage("a.png");
  balloon1 = loadImage("a.png");
  balloon2 = loadImage("b.png");
  balloon3 = loadImage("c.png");
  balloon4 = loadImage("d.png");
  balloon5 = loadImage("e.png");
  balloon6 = loadImage("f.png");
  balloon7 = loadImage("g.png");
  balloon8 = loadImage("h.png");
  balloon9 = loadImage("i.png");
  balloon10 = loadImage("j.png");
  balloon11 = loadImage("k.png");
  balloon12 = loadImage("l.png");
  balloon13 = loadImage("m.png");
  balloon14 = loadImage("n.png");
  balloon15 = loadImage("o.png");
  balloon16 = loadImage("p.png");
  balloon17 = loadImage("q.png");
  balloon18 = loadImage("r.png");
  balloon19 = loadImage("s.png");
  balloon20 = loadImage("t.png");
  balloon21 = loadImage("u.png");
  balloon22 = loadImage("v.png");
  balloon23 = loadImage("w.png");
  balloon24 = loadImage("x.png");
  balloon25 = loadImage("y.png");
  balloon26 = loadImage("z.png");
  balloonImg = [balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8,
         balloon9, balloon10, balloon11, balloon12, balloon13, balloon14, balloon15, balloon16,
         balloon17, balloon18, balloon19, balloon20, balloon21, balloon22, balloon23, balloon24,
         balloon25, balloon26]
  song = loadSound('score.mp3');
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 375, 800, 50);
  ground.addImage("ground", groundImg);
  ground.scale = 0.25;

  balloonGroup = createGroup();
}

function draw() {
  background(0,196,255);
 // console.log(balloonLabel);
  if (gameState===PLAY){
    spawnBalloons();
    strokeWeight(2);
    stroke("red");
    fill("white");
    textFont("Georgia");
    textSize(20)
    text("SCORE: " +score, 670,20 );

    if (score>0 && score%10 === 0){
      gameState = END;
    }
  }
    else if (gameState === END){
      strokeWeight(2);
      stroke("red");
      fill("white");
      textFont("Georgia");
      textSize(60)
      text("Next Level ", 310,200 );
      score = 0;
      gameState = PLAY;
    }
  drawSprites();
  
}

// Function spawn balloon 
function spawnBalloons() {
  if(frameCount % 200 == 0) {
    balloon = createSprite(random(40,760),350,30,40);
    
    //balloon.debug = true;
    balloon.velocityY = -6;

    rand = Math.round(random(0,25));
    
    balloonLabel1 = balloonLabel[rand];
    balloon.addImage(""+balloonLabel1, balloonImg[rand]);

    balloonLabel2 = balloon.getAnimationLabel();
    balloonLabel3 = String.fromCharCode(balloonLabel2);
    console.log(balloonLabel2+"-"+balloonLabel3);

   balloon.scale = 0.9;
    balloon.lifetime = 300;

    //add each balloon to the group
    balloonGroup.add(balloon);
  }
}

function keyPressed(){
  console.log("hello");
  console.log(keyCode); 
  console.log(balloonLabel2); 
        if(keyCode == balloonLabel2){ 
        console.log("m here");
        balloon.destroy();
       // song.play();
        //song.pause();
        score = score+1;
        } 
}
