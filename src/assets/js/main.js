$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 150){
            $("#scroller-top").css("right","20px")
        }
        else{
            $("#scroller-top").css("right","-60px")
        }
        $("#scroller-top").click(function(){
            $("body,html").animate({
                scrollTop:0
            },500);
        });
    });
    $(".view-more").click(function(){
        $(".about-more").toggleClass("view-all")
        $(".view-more span i").toggleClass("fa-chevron-up")
    });

        $(".toggler").click(function(){
            $(".toggler i").toggleClass("close-icon")
            $(".menu-navbar nav").toggle("fast")
    });
    $('.owl-carousel-sale-box').owlCarousel({
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
    $('.owl-carousel-category').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        rtl: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            },
            1200:{
            items:4
        }
    }
    });
    $('.owl-carousel-category-item-special').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        rtl: true,
        responsive:{
            0:{
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
