$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        rtl:true,
        margin:0,
        center:true,
        nav:true,
        // loop:true,
        slideBy:1,
        responsive:{
          0:{
            items:1,
          },
          600:{
            items:1,
          },
          1000:{
            items:1,
          },
          1400:{
            items:1,
          }
        }
      });
        $(".toggler").click(function(){
            $(".toggler i").toggleClass("close-icon")
            $(".menu-navbar nav").toggle("fast")
    });

})
