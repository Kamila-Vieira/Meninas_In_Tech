// Variáveis do ator
let xActor = 105;
let yActor = 370;

let actorWidth = 30;
let actorHeight = 25;

let collision = false;
let points = 0;

function showActor(){
    image(actorImg, xActor, yActor, actorWidth, actorHeight);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yActor += 3;
  }
  verifyActorIsOutEdge();
}

function verifyActorIsOutEdge(){
  if(yActor <= 0){yActor = 0;}
  if(yActor >= height - actorHeight){yActor = height - actorHeight;}
}

function verifyCollision(){
  for(let i = 0; i < carImages.length; i++ ){
    collision = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, actorWidth / 2);
    if(collision){
      collisonSong.play();
      backInitialPositionActor();
      losePoints();
    }
  }
}

function backInitialPositionActor(){
  yActor = 370;
}

function includePoints(){
  fill(color(255, 240, 60));
  textSize(25);
  textAlign(CENTER)
  text(points, width / 5, 27);
}

function markPoint(){
  if(yActor < 15){
    points+=1;
    countPointSong.play();
    backInitialPositionActor();
  }
}

function losePoints(){
  if(points > 0){
    points-=1;
  }
}
