$(document).ready(function(){
        $(".toggler").click(function(){
            $(".toggler i").toggleClass("close-icon")
            $(".menu-navbar nav").toggle("fast")
    });
})
