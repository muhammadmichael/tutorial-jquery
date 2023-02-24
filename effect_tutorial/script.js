$(document).ready(function () {
    $('#hide').click(function () {
        $('#orangebox').hide(1000);
    })

    $('#show').click(function () {
        $('#orangebox').show(2000); // show #orangebox in 2000 ms
    })

    $('#fadeOut').click(function() {
        $('.box1').fadeOut();
        $('.box2').fadeOut(1000);
        $('.box3').fadeOut(2000);
    })

    $('#fadeIn').click(function() {
        $('.box1').fadeIn();
        $('.box2').fadeIn(1000);
        $('.box3').fadeIn(2000);
    })

    $('#fadeToggle').click(function() {
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(1000);
        $('.box3').fadeToggle(2000);
    })

    $('#fadeTo').click(function() {
        $('.box1').fadeTo("slow", 0.5);
        $('.box2').fadeTo("slow", 0.5);
        $('.box3').fadeTo("slow", 0.5)
    })
})