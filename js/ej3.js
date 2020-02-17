$(function() {
    $('#b1').click(function() {
        $('.caja1').animate({
            marginLeft: "+=100px"
        }, 300);
    });
    $('#b2').click(function() {
        $('.caja1').animate({
            marginTop: "+=100px"
        }, 300)
    })
    $('#b3').click(function() {
        $('.caja1').animate({
                width: "+=50px",
                height: "+=50px"
            },
            300)
    })
    $('#b4').click(function() {
        $('.caja1').animate({
                width: "-=50px",
                height: "-=50px"
            },
            300)
    })
    $('#b5').click(function() {
        $('.caja1').animate({
                opacity: "+=1"
            },
            300)
    })
    $('#b6').click(function() {
        $('.caja1').animate({
                opacity: "-=0.5"
            },
            300)
    })
})