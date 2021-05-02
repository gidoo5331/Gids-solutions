$(document).ready(function() {


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 80) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("bg-light");
        $(".nav-link").css("color","rgba(0,0,0,.55)");

    } else {
      $(".navbar").removeClass("bg-light");
      $(".nav-link").css("color","whitesmoke");

    }
}); //missing );






// document ready
});
