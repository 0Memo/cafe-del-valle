$(document).ready(function(){

// Effet Menu
    $('.menu a').each(function(index, element){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            'top': '0'
        }, 2000 + (index * 500));
    });

// Effet Header
    if( $(window).width() > 800 ) {
        $('header .conteneur .textes').css({
            'opacity': '0',
            'marginTop': '0'
        });

        $('header .conteneur .textes').animate({
            'opacity': '1',
            'marginTop': '-25px'
        }, 1500);
    }

// Scroll Éléments Menu
    var auSujetDe = $('#auSujetDe').offset().top;
        menu = $('#plats').offset().top;
        galerie = $('#galerie').offset().top;
        emplacement = $('#emplacement').offset().top;

    $('#btn-auSujetDe').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: auSujetDe -100
        }, 500);
    });
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });
    $('#btn-galerie').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galerie
        }, 500);
    });
    $('#btn-emplacement').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: emplacement
        }, 500);
    });

});