jQuery(document).ready(function() {
	//Adicionar classe quando nao foram encontrados produtos
	if(jQuery(".filter-details p").text().indexOf("encontrado") != -1) {
		jQuery(".filter-details").addClass("no-result");
	}
	//mover banner principal no catalogo do look
	if(jQuery(".look .b-main")[0]) {
		jQuery(".look .b-main").prependTo('#main .content');
	}
	var isMobile = function() {
  		if(jQuery(window).width() < 980) {return true}
	};
}); 