var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
var dadosPaciente = document.querySelectorAll('.campo');

botaoAdicionarPaciente.addEventListener("click", function(evento){
  evento.preventDefault();
  var form = document.querySelector('#form-adiciona');
  var infoPaciente = obterInfoForm(form);
  var novoPaciente = criarNovoPaciente();

	novoPaciente.nome.textContent = infoPaciente.nome;
	novoPaciente.peso.textContent = infoPaciente.peso;
	novoPaciente.altura.textContent = infoPaciente.altura;
	novoPaciente.gordura.textContent = infoPaciente.gordura;
	novoPaciente.imc.textContent = infoPaciente.imc;

	novoPaciente.paciente.appendChild(novoPaciente.nome);
	novoPaciente.paciente.appendChild(novoPaciente.peso);
	novoPaciente.paciente.appendChild(novoPaciente.altura);
	novoPaciente.paciente.appendChild(novoPaciente.gordura);
	novoPaciente.paciente.appendChild(novoPaciente.imc);

	var tablelaPacientes = document.querySelector("#tabela-pacientes");
  tablelaPacientes.appendChild(novoPaciente.paciente);
});

function obterInfoForm(form){
  return {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
  };
}

function criarNovoPaciente(){
  return {
    paciente: document.createElement("tr"),
    nome: document.createElement("td"),
    peso: document.createElement("td"),
    altura: document.createElement("td"),
    gordura: document.createElement("td"),
    imc: document.createElement("td")
  }

}