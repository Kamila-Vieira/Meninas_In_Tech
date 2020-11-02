//Variáveis da bolinha
let xCircle = 300; 
let yCircle = 200; 
let circleDiameter = 18;
let radius = circleDiameter / 2;

//Variáveis da raquete
let xRect = 5;
let yRect = 150;

//Variáveis da raquete do oponente
let xRectOpponent = 590;
let yRectOpponent = 150;

//Variáveis das raquetes
let rectWidth = 6;
let rectHeight = 90;

//Variáveis da velocidade da bolinha
let xCircleVelocity = 6;
let yCircleVelocity = 6;

//Variáveis da velocidade da raquete do oponente
let xRectOpponentVelocity;
let yRectOpponentVelocity;

//Variáveis de colisão entre a bolinha e a raquete
let collisionRacketBall = false;

//Variáveis do placar
let points = 0;
let opponentPoints = 0;

//Variáveis de sons do jogo
let racket;
let countPoint;
let soundtrack;

function preload(){
  racket = loadSound("soundsPong/raquetada.mp3");
  countPoint = loadSound("soundsPong/ponto.mp3");
  soundtrack = loadSound("soundsPong/trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(0);
  
  showBall();
  moveBall();
  
  showRacket(xRect, yRect);
  showRacket(xRectOpponent, yRectOpponent);

  moveRacket();
  moveRacketOpponent();

  collisonRacketsBallLibrary(xRect, yRect);
  collisonRacketsBallLibrary(xRectOpponent, yRectOpponent);
  
  includesScoreboard();
  markPoints();
}

function showBall(){
  circle(xCircle, yCircle, circleDiameter);
}

function showRacket(x, y){
  rect(x, y, rectWidth, rectHeight);
}

function moveBall(){
  xCircle += xCircleVelocity;
  yCircle += yCircleVelocity;
  
  VerifyCollisionEdge();
}

function VerifyCollisionEdge(){
  if(xCircle + radius > width || xCircle - radius < 0){xCircleVelocity *= -1;}
  if(yCircle + radius > height || yCircle - radius < 0){yCircleVelocity *= -1;}
}

function moveRacket(){
  if(keyIsDown(UP_ARROW)){yRect -= 10;}
  if(keyIsDown(DOWN_ARROW)){yRect += 10;}
  
  VerifyRacketIsOutEdge();
}

function VerifyRacketIsOutEdge(){
  if(yRect <= 0){yRect = 0;}
  if(yRect >= height - rectHeight){yRect = height - rectHeight;}
}

function moveRacketOpponent(){
  yRectOpponentVelocity = yCircle - yRectOpponent - rectWidth / 2 - 30;
  yRectOpponent += yRectOpponentVelocity;
}

function collisonRacketsBallLibrary(x, y){
  collisionRacketBall = collideRectCircle(x, y, rectWidth,
    rectHeight, xCircle, yCircle, radius);
  
  if(collisionRacketBall){
    xCircleVelocity *= -1;
    racket.play();
  }
}

function includesScoreboard(){
  textSize(16);
  textAlign(CENTER);
  stroke(255);

  fill(color(255, 140, 0));
  rect(200, 10, 40, 20);
  rect(400, 10, 40, 20);
  
  fill(255);
  text(points, 220, 26);
  text(opponentPoints, 420, 26);
}

function markPoints(){
  if(xCircle > 590){
    points += 1;
    countPoint.play();
  }
  if(xCircle < 10){
    opponentPoints += 1;
    countPoint.play();
  }
}
