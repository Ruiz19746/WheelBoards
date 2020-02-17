$(document).ready(function() {
    $("#marcador1").click(function() {
        var x = $("").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
    $("#marcador2").click(function() {
        var x = $("").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
});