jQuery(document).ready(function() {
	//Adicionar classe quando nao foram encontrados produtos
	if(jQuery(".filter-details p").text().indexOf("encontrado") != -1) {
		jQuery(".filter-details").addClass("no-result");
	}
	if(jQuery("#divSort, #divMain")[0]) {
		var text = jQuery("div.filters li a.selected").text();
		jQuery("div.filters li a.selected").parent().hide();
		jQuery("body .content div#divSort>span").html("Ordenar por: <u>"+text+"</u>");
		jQuery("#main div.filters").on({
            click: function() {
                jQuery("fieldset", this).toggleClass('active');
            },
            mouseleave: function() {
                jQuery("fieldset", this).removeClass("active");
            }
        });
        if(jQuery(".look #divMain, .vitrine-look #divMain")[0]) {
        	jQuery("#divMain").wrap('<div class="bg-filter" />')
        	jQuery("#ordena_produtos, .pagination").appendTo('.bg-filter')
        }
        if(jQuery(".horizontal-selecionados")[0]) {
        	jQuery(".main-content").addClass('filtro-selecionado');
        }
        if(jQuery(".look .banners.full")[0]) {
        	jQuery(".look .banners.full").prependTo('#main');
        	jQuery(".banners.full .owl-carousel").each(function(){
			    jQuery(this).data('owlCarousel').updateVars();
			 });
        }
	}

	jQuery("#header .ico-search, #header .ico-close").click(function(){
		jQuery("#header .search").toggleClass('active');
	});
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
}); 