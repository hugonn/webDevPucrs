function validaAntesDeEnviar(){
  event.preventDefault();
  var nome = document.getElementById('nome');
  var senha = document.getElementById('senha');
  var confirmarSenha = document.getElementById('confirmarSenha');
  var email = document.getElementById('email');
  
  var span = document.getElementById('feedback');
  var confirmar = document.getElementById('confirmar');
  var confirmarEmail = document.getElementById('confirmarEmail');
 
	
  if(nome.value.trim().length == 0) {
	span.innerHTML = "Estou escrevendo um feedback de erro";
	span.className = "error";
  } else {
	span.innerHTML = "Bom trabalho garoto!";
	span.className = "success";
  }


  if(senha.value != confirmarSenha.value || senha.value.trim().length ==0  ) {
	confirmar.innerHTML = "Estou escrevendo um feedback de erro";
	confirmar.className = "error";
  } else {
	confirmar.innerHTML = "Bom trabalho garoto!";
	confirmar.className = "success";
  }
  
    //if(email.value.contains("@")) {
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
 if(!re.test(email.value)) {
	confirmarEmail.innerHTML = "Estou escrevendo um feedback de erro";
	confirmarEmail.className = "error";
  } else {
	confirmarEmail.innerHTML = "Bom trabalho garoto!";
	confirmarEmail.className = "success";
  }

}


function quandoaPaginaEstiverPronta(){
	document.getElementById('cadastro')
	.addEventListener('submit', validaAntesDeEnviar);
}

//var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
// if(re.test(email.value)) {


window.addEventListener('load', quandoaPaginaEstiverPronta);


