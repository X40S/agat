$('.slider').slick({
     dots:true,
    infinite: true,
    // speed: 500,
     fade: true,
    
    adaptiveHeight: true
});
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
$(function () {
    $('.btn__menu').on('click', function () {
        $('.menu__list').slideToggle();
    });
});
