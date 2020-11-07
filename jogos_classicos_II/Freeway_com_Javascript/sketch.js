function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(roadImg);

  showActor();
  showCars();
  
  moveFirstCar();
  moveActor();
  
  verifyCollision();
  includePoints();
  markPoint();
}



