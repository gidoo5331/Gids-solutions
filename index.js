$(document).ready(function() {


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 80) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("bg-light");
        $(".nav-link, .navbrand, .navbar-toggler").css("color","rgba(0,0,0,.55)");
        // $(".navbrand").css("color","");

    } else {
      $(".navbar").removeClass("bg-light");
      $(".nav-link, .navbrand, .navbar-toggler").css("color","whitesmoke");
        // $(".navbrand").css("color","white");

    }
}); //missing );






// document ready
});
