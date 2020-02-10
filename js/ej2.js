$(function() {
    $('.b1').click(function() { $('.caja').slideUp(300) });
    $('.b2').click(function() { $('.b2').hide() })
    $('.b3').click(function() { $('.b3').fadeOut(500) })
    $('.b5').click(function() { $('.b5').css("color", "yellow") })
    $('.b6').click(function() { $('.b6').css("color", "orange") })
    $('.b7').click(function() { $('.b7').html("pulsado") })

})