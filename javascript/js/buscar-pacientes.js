var botaoBuscar = document.querySelector('#buscar-pacientes');
var erro = document.querySelector('#erro-ajax');
botaoBuscar.addEventListener('click', function(){
  var xhr = new XMLHttpRequest();
  xhr.open('Get', 'https://api-pacientes.herokuapp.com/pacientes');
  xhr.addEventListener('load', function(){
    if(xhr.status === 200){
      var pacientes = JSON.parse(xhr.responseText);
      pacientes.forEach(paciente => {
      var novoPaciente = criarNovoPaciente();
      adicionarNovoPacienteNaTabela(novoPaciente, paciente);
      adicionarClassesAoNovoPaciente(novoPaciente);
      erro.classList.add('invisivel')
    });
    }else{
      erro.textContent = 'Erro ' + xhr.status + ': ' + xhr.responseText
      erro.classList.remove('invisivel');
    }
  })
  xhr.send();
});