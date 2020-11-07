// Variáveis dos carros
let carWidth = 50;
let carHeight = 35;

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];

let carsVelocity = [2, 2.5, 3.2, 5, 3.3, 2.3];

function showCars(){
  for(let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], carWidth, carHeight);
  }
}

function moveFirstCar(){
  for(let i = 0; i < carImages.length; i++){
    xCars[i] -= carsVelocity[i];
  }
  backInitialPositionCar();
}

function backInitialPositionCar(){
  for(let i = 0; i < carImages.length; i++){
    if(xCars[i] < -50){
     xCars[i] = 600;
    }
  }

}