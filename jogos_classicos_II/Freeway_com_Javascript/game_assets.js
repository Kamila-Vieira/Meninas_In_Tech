// Imagens do jogo

let roadImg;
let actorImg;
let firstCarImg;
let secondCarImg;
let thirdCarImg;
let carImages = [];

// Sons do jogo

let soundtrack;
let collisonSong;
let countPointSong;

function preload(){
  roadImg = loadImage("assets/img/estrada.png");
  actorImg = loadImage("assets/img/ator-1.png");
  
  firstCarImg = loadImage("assets/img/carro-1.png");
  secondCarImg = loadImage("assets/img/carro-2.png");
  thirdCarImg = loadImage("assets/img/carro-3.png");
  carImages = [firstCarImg, secondCarImg, thirdCarImg, firstCarImg, secondCarImg, thirdCarImg];

  soundtrack = loadSound("assets/songs/trilha.mp3");
  collisonSong = loadSound("assets/songs/colidiu.mp3");
  countPointSong = loadSound("assets/songs/pontos.wav");
}