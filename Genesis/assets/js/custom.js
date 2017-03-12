(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);

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
        jQuery('.itens-page select').customSelect();
        if(jQuery(".look #divMain, .vitrine-look #divMain")[0]) {
        	jQuery("#divMain").wrap('<div class="bg-filter" />');
        	jQuery("#ordena_produtos, .itens-page, .pagination").appendTo('.bg-filter');
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

	jQuery("#header .ico-search, #header .ico-close").click(function(e){
		jQuery("#header .search").toggleClass('active');
		e.preventDefault();
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