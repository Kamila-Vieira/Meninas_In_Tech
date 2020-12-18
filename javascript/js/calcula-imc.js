
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista"

var pesoValido = true;
var alturaValida = true;

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
	var peso = pacientes[i].querySelector('.info-peso').textContent;
	var altura = pacientes[i].querySelector('.info-altura').textContent;
	var imc = pacientes[i].querySelector('.info-imc');

	if(pesoValido && alturaValida){
		imc.textContent = calcularImc(peso, altura);
	}

	if(peso <= 0 || peso >= 1000){
		pesoValido = false;
		imc.textContent = 'Peso Inválido!';
		errorStyle();
	}
	
	if(altura <= 0 || altura >= 3){
		alturaValida = false;
		imc.textContent = 'Altura Inválida!';
		errorStyle();
	}
	
	function errorStyle() {
		paciente.classList.add('paciente-invalido');
	}
}

function calcularImc(peso, altura){
	return (peso / (altura * altura)).toFixed(2);
}