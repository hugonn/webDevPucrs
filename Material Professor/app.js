function executaScripts(){
	var telaAtiva = 'loading';
	
	$('a').click(function(event){
		event.preventDefault();
		$('#section-'+telaAtiva+'').hide();
	    var id = $(this).attr('id');
	    telaAtiva = id;
		$('#section-'+id).show();
	});
		
	$("#img").hover(function(){
	
		alert('Batman');
	});
	
	//.hover
	
	
}

$(document).ready(executaScripts);



