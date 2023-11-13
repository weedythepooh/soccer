$('document').ready(function () {
    $('#menu').hover(function () {
        console.log("wykryto");
        $('.retractingElement').slideDown('slow');
    }, function () {
        $('.retractingElement').slideUp('slow');
    });
    $(window).on("resize", function () {
        if (window.innerHeight > window.innerWidth) {
            console.log("TAK");
            $('.menuElement').hide();
        } else {
            $('.menuElement').show();
        }

    });
    $('#mobileHamburgerICO').hover(function () {
    $('.menuElement').slideDown('slow');
    }, function () {
    $('.menuElement').slideUp('slow');
    });




}); 
$( function() {
    $( ".accordion" ).accordion();
    $( ".zespoly" ).tabs();
  } );