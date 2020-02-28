$(document).ready(function() {
    $("#consejos").click(function() {
        var x = $("#consejos").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
    $("#modalidades").click(function() {
        var x = $("#modalidades").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
    $("#arriba").click(function() {
        var posicion = $("#arriba").offset();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    $("#arriba").css("display", "none");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#arriba").fadeIn('slow');
        } else {
            $("#arriba").fadeOut('slow');
        }
    });
});