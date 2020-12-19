var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
var dadosPaciente = document.querySelectorAll('.campo');

botaoAdicionarPaciente.addEventListener("click", function(evento){
  evento.preventDefault();
  var form = document.querySelector('#form-adiciona');
  var infoPaciente = obterInfoForm(form);
  var novoPaciente = criarNovoPaciente();
  adicionarClasseAoNovoPaciente(novoPaciente);

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

function adicionarClasseAoNovoPaciente(dadosNovoPaciente){
  dadosNovoPaciente.paciente.classList.add('paciente');
  dadosNovoPaciente.peso.classList.add('info-peso');
  dadosNovoPaciente.altura.classList.add('info-altura');
  dadosNovoPaciente.gordura.classList.add('info-gordura');
  dadosNovoPaciente.imc.classList.add('info-imc');
}
/* 
function adicionarNovoPacienteNaTabela(){
  var dadosPaciente = [nome, peso, altura, gordura, imc];
  for (var i = 0; i < dadosPaciente.length; i++) {
    novoPaciente.dadosPaciente[i].textContent = dadosPaciente.nome;
    
  }
  
} */