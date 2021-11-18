$(document).ready(function(){
        $(".toggler").click(function(){
            $(".toggler i").toggleClass("close-icon")
            $(".menu-navbar nav").toggle("fast")
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        rtl: true,
        stagePadding: 50,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
            items:4
        }
    }
    });
    $('#sale-box-counter').countdown({
    date:'12/12/2021 23:59:59'
    });
    
})
