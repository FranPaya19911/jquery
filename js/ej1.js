$(function() {
    $('.caja1').click(function() { alert("hola") });
    $('.caja2').dblclick(function() { $('.caja2').hide() })
    $('.caja3').mouseenter(function() { $('.caja3').fadeOut(500) })
    $('.caja4').mouseleave(function() { $('.caja4').css('background', "brown") })
    $('.caja5').hover(function() { $('.caja5').css("color", "yellow") })
    $('.caja5').mouseleave(function() { $('.caja5').css("color", "orange") })
    $('.caja6').mousedown(function() { $('.caja6').html("pulsado") })
    $('.caja7').mouseup(function() { $('.caja7').html("soltado") })
})