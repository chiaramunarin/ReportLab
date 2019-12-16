//questo codice viene eseguito quando la pagina è stata completamente caricata

$(document).ready(function(){

    // cambio l'altezza dello slider in base all'altezza della finestra
    var windowHeight = $(window).height(),
		topSection = $('.slider-item');
	topSection.css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		topSection.css('height', windowHeight);
	});

    // attivo lo slider
    jQuery("#slider").slippry({
        elements:'.slider-item',
        adaptiveHeight: true,
        pager:false
    });

    /*attivo il menu per la versione responsive*/
    jQuery("#nav ul").slicknav({
        brand:'<img src="img/logo.png" />'
    });

    // attivo il carousel
    jQuery("#team-carousel").owlCarousel({
        items: 4,
        autoPlay: true,
        loop: true
    });

    // attivo lo scroller per il menu
    var s = skrollr.init();
    skrollr.menu.init(s, {
			change: function(hash, top) {
				console.log(hash, top);
			}
		});

// external js: flickity.pkgd.js

/*
function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
}

const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"]
.forEach(e => animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"]
.forEach(e => animateWithRandomNumber(e, 1080, -1080))
*/ 
});


