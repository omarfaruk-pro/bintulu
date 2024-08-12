(function ($) {
    "use strict";

    // $(window).on('load', function(){
    //     $("#preloader").delay(400).fadeOut();
    // });

    $(document).ready(function(){
        $(".hamburger-menu").click(function(){
            $(".hamburger-menu").toggleClass("active");
            $(".header-menu-wrap").toggleClass("active");
        })

        $(".testimonial_slider").owlCarousel({
            items:1,
            nav:true,
            loop:false,
            dots:false,
            navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        })
    })


})(jQuery);

