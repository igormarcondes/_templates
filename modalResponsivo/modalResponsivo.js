/* -------------------------------------------------------*/
/* ----------------*>>> MODAL HOME <<<--------------------*/
/* -------------------------------------------------------*/

/*_________________________________________________________
  Informações:

- A Modal abre um newsletter na home, no qual tem um 
  formulario e após o preenchimento dele aparece outra 
  "pagina de agradecimento" com numero de um cupom.
- O layout foi feito para a loja Mundo Lolita.
- Esse código foi usado nas lojas "verticais".
- Aparece apenas uma vez, pois fica armazenado no cookie

Arquivo CSS- popUp.scss

____________________________________________________________*/

function callbackBoxCadastro(r) {

    if (r.d.Message === "0") {
        jQuery(jQuery.find("[id*=txtRecebaNomeMenu]")[0]).val("Nome");
        jQuery(jQuery.find("[id*=txtRecebaEmail]")[0]).val("E-mail");
        jQuery('.formulario').hide();
        jQuery('.newsletterBox').css('background', 'url(/static/locales/global/img/obrigado.jpg)');
        jQuery('.obrigadoCupom').show();
    }
    else if (r.d.Message === "1") {
        alert("Problemas ao cadastrar e-mail de newsletter.");
    }
    else if (r.d.Message === "2") {
        alert("E-mail inválido!");
    }
}

function NewsLetterBoxCadastro(nome, email) {
    var params = {
        strNome: nome,
        strEmail: email
    };
    AjaxUtil().jsonCall({
        url: RakutenApplication.getMainUrl("/services/NewsLetterService.asmx/Register")
                    , type: "POST"
                    , params: params
    }
                , callbackBoxCadastro
                , null);

}

if (jQuery('body').hasClass("home")) {

    function GerarCookie(strCookie, strValor) {
        // Expires the cookie in one month
        var date = new Date();
        date.setDate(date.getDate() + 1);
        document.cookie = strCookie + "=" + escape(strValor) + "; path=/" + "; expires=" + date.toUTCString();

    }
    var cookie_name = document.cookie;
    var posCookie = cookie_name.indexOf('AssinaNews');




    //if (posCookie >= 0) {

    //}
    //else{
    jQuery(window).load(function () {


        jQuery(document).ready(function () {
            jQuery.fancybox(
		'<div class="newsletterBox"><div class="formulario"> \n' +
                        '<img src="/static/locales/global/img/mundo-lolita-news.png"> \n' +
                        '<span>News</span> \n' +
                        '<p>  Oi Loli, vem cá fazer parte do nosso  Mundo! Se inscreva para receber super novidades e ainda ganhe 10% de desconto!</p> \n' +
                         '<input type="text" id="nomeNewsModal" name="nomeNewsModal" placeholder="Nome"> \n' +
                         '<input type="text" id="emailNewsModal" name="emailNewsModal" placeholder="Email"> \n' +
                         '<a class="enviarNews" onClick="NewsLetterBoxCadastro(jQuery(\'#nomeNewsModal\').val(),jQuery(\'#emailNewsModal\').val())">Cadastre-se</a> \n' +
  		'</div></div>\n' +
  		'<div class="obrigadoCupom">\n' +
      '<img src="/static/locales/global/img/mundo-lolita-news-obg.png"> \n' +
      '<span>Bem-vinda</span> \n' +
      '<p>  Agora é só curtir toda a magia do nosso Mundo! Digite o código abaixo no campo “cupom de desconto” na finalização da compra e ganhe 10% off :)</p>\n' +
      '<strong id="cupom-codigo">EBADESCONTO</strong>\n' +
      '<div>\n',
		{
		    'autoDimensions': false,
		    'width': 755,
		    'height': '446',
		    'transitionIn': 'none',
		    'transitionOut': 'none'
		}
	);
        });


        GerarCookie('AssinaNews', 'true');

    });


    //}

}