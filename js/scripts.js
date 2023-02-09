$(document).ready(function(){
    // navigation toggle
    $('.navbar-toggler-btn').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });

    $(document).scroll(function(){
        var $nav = $('.navbar');
        $nav.toggleClass('change-on-scroll', $(this).scrollTop() > $nav.height());
    });

    $('.header-banner-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.watches-content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})