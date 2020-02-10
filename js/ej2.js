$(function() {
    $('#b1').click(function() { $('.caja').slideUp(300) });
    $('#b2').click(function() { $('.caja').slideDown(300) })
    $('#b3').click(function() { $('.caja').slideToggle(300) })
    $('#b5').bind("click mouseenter", function() { $('.caja').css("background-color", "green") })
    $('#b6').click(function() {
        $(".caja").fadeIn(100);
        $(".caja").delay(800);
        $(".caja").fadeOut(800);
    })
    $('#b7').click(function() { $('.caja').toggleClass("animacion") })

})