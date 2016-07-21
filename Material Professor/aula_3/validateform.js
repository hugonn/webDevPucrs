function loadedPage(){
  var currentActive = 0;
  var sections  = document.getElementsByTagName('li');
  
  // document.getElementById('cadastro')
  // .addEventListener('submit', executeSubmit);
  
  document.getElementById('next')
  .addEventListener('click', executeNext)
  
  
  function executeSubmit(event){
	event.preventDefault(); console.log('a0'); 
  }
  
  function executeNext(){
	var sectionActive = document.getElementsByClassName("active");
	
	currentActive++;
	if(sectionActive.length > 0)
		sectionActive[0].className = "ok";
	
	if(sections.length > currentActive) {
	  sections[currentActive].className = "active";
	}
		
  } 
    function confirmarSenha(){
	var senha = document.getElementsByClassSenha("active");
	var confirmarSenha = document.getElementsByClassConfirmarSenha("active");
	

	if(senha.equals(confirmarSenha))
		sectionActive[0].className = "ok";
	
	}else{
	sectionActive[0].className = "errado";
	}
		
  } 
  
  
}

window.addEventListener('load', loadedPage);

