var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista"

var pesoValido = true;
var alturaValida = true;

function calcularImc(paciente, peso, altura, imc){
	var paciente = document.querySelector('#' + paciente);
	var peso = paciente.querySelector('.' + peso).textContent;
	var altura = paciente.querySelector('.' + altura).textContent;
	var imc = paciente.querySelector('.' + imc);
	if(peso <= 0 || peso >= 1000){
		pesoValido = false;
		imc.textContent = 'Peso Inválido!';
	}
	if(altura <= 0 || altura >= 3){
		alturaValida = false;
		imc.textContent = 'Altura Inválido!';
	}
	if(pesoValido && alturaValida){
		var calculaImc = peso / (altura * altura);
		imc.textContent = calculaImc.toFixed(2)
	}
}


var pacientes = ['primeiro-paciente', 'segundo-paciente', 'terceiro-paciente', 'quarto-paciente', 'quinto-paciente']

for (let i = 0; i < pacientes.length; i++) {
	calcularImc(pacientes[i], 'info-peso', 'info-altura', 'info-imc');
}