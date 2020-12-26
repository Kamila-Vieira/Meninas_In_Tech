
var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {
	var peso = pacientes[i].querySelector('.info-peso').textContent;
	var altura = pacientes[i].querySelector('.info-altura').textContent;
	var imc = pacientes[i].querySelector('.info-imc');

	var pesoValido = validarPeso(peso);
	var alturaValida = validarAltura(altura)

	if(pesoValido && alturaValida){
		imc.textContent = calcularImc(peso, altura);
	}
	if(!pesoValido){
		pesoValido = false;
		imc.textContent = 'Peso Inválido!';
		errorStyle();
	}
	if(!alturaValida){
		alturaValida = false;
		imc.textContent = 'Altura Inválida!';
		errorStyle();
	}
	function errorStyle() {
		pacientes[i].classList.add('paciente-invalido');
	}
}
function validarPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}
function validarAltura(altura){
	if(altura < 3.0 && altura >= 0){
		return true;
	}else{
		return false;
	}
}
function calcularImc(peso, altura){
	return (peso / (altura * altura)).toFixed(2);
}
