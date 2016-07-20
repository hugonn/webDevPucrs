window.addEventListener('load', function() {

	document.getElementById('cadastro')
		.addEventListener('submit', validar);
		
});

function validar(e){

	e.preventDefault();

	if(document.getElementById('senha').value == document.getElementById('confirmSenha').value)
		alert('Senhas iguais');
	else{
		alert('senhas não batem');
		return false;
	}
	if(document.getElementById('idade').value >= 18)
		alert ('Boa Idade');
	else{
		alert ('menor de 18');
		return false;
	}
	
	return true;

	

};
