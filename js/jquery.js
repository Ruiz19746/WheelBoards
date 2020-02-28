$(document).ready(function() {
    $("#uno").click(function() {
        var x = $("#consejos").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
    $("#marcador2").click(function() {
        var x = $("#modalidades").offset();
        $('html, body').animate({ scrollTop: x.top }, 'slow');
    });
});