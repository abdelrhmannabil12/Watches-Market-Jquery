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
})