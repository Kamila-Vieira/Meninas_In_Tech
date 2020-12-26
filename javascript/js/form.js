var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
var dadosPaciente = document.querySelectorAll('.campo');

botaoAdicionarPaciente.addEventListener("click", function(evento){
  evento.preventDefault();
  var form = document.querySelector('#form-adiciona');
  var infoPaciente = obterInfoForm(form);
  var novoPaciente = criarNovoPaciente();
  adicionarClassesAoNovoPaciente(novoPaciente);
  var erros = validarPaciente(infoPaciente);
  if(erros.length > 0){
    exibirMensagensDeErro(erros);
    return;
  }
  adicionarNovoPacienteNaTabela(novoPaciente, infoPaciente);
  form.reset();
  document.querySelector('#mensagens-erro').innerHTML = '';
});
function exibirMensagensDeErro(erros){
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';
  erros.forEach(function(erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li)
  });
}
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
function adicionarClassesAoNovoPaciente(novoPaciente){
  novoPaciente.paciente.classList.add('paciente');
  novoPaciente.peso.classList.add('info-peso');
  novoPaciente.altura.classList.add('info-altura');
  novoPaciente.gordura.classList.add('info-gordura');
  novoPaciente.imc.classList.add('info-imc');
}
function adicionarNovoPacienteNaTabela(novoPaciente, infoPaciente){
  var dadosPaciente = ['paciente', 'nome', 'peso', 'altura', 'gordura', 'imc'];
  var tabelaPacientes = document.querySelector("#tabela-pacientes");
  for (var i = 1; i < dadosPaciente.length; i++) {
    novoPaciente[dadosPaciente[0]].appendChild(novoPaciente[dadosPaciente[i]]);
    novoPaciente[dadosPaciente[i]].textContent = infoPaciente[dadosPaciente[i]];
  }
  return tabelaPacientes.appendChild(novoPaciente[dadosPaciente[0]]);
}
function validarPaciente(paciente) {
  var erros = []
  if (!validarPeso(paciente.peso)) erros.push("O peso é inválido!");
  if (!validarAltura(paciente.altura)) erros.push("A altura é inválida!");
  if (paciente.nome.length === 0) erros.push("O nome não pode ser em branco!");
  if (paciente.gordura.length === 0) erros.push("A gordura não pode ser em branco!");
  if (paciente.peso.length === 0) erros.push("O peso não pode ser em branco!");
  if (paciente.altura.length === 0) erros.push("A altura não pode ser em branco!");
  return erros;
}