$(document).ready(function() {
    $("#marcador1").click(function() {
        var x = $("main h2").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
    $("#marcador2").click(function() {
        var x = $(".Modalidades").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
});