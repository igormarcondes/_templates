
jQuery(document).ready(function() {
	//Adicionar classe quando nao foram encontrados produtos
	if(jQuery(".filter-details p").text().indexOf("encontrado") != -1) {
		jQuery(".filter-details").addClass("no-result");
	}
	if(jQuery(".categ-desc").text().trim().length > 1) {
		jQuery(".categ-desc").addClass('bg-seo')
	}
	//mover banner principal no catalogo do look
	if(jQuery(".look .b-main")[0]) {
		jQuery(".look .b-main").prependTo('#main .content');
	}
	var isMobile = function() {
  		if(jQuery(window).width() < 980) {return true}
	};
	if(jQuery(".home:not(.mobile-mode) .b-specialstore")[0]) {
		jQuery(".special-store .owl-carousel").data('owlCarousel').destroy();
		jQuery(".special-store .owl-carousel").owlCarousel({
            items: 4,
            navigation: true,
            responsive: false,
            pagination: false
        });
	}
}); 