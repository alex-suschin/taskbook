Number.isNaN = Number.isNaN || function(value) {
    return typeof value === 'number' && isNaN(value);
}

$(function() {

    $(window).scroll(function() {
        if ($(window).width() > '991') {
            if ($(this).scrollTop() > 90) {
                $('.header').addClass('fixed');
                $('body').css('padding-top', '90px');
            } else if ($(this).scrollTop() < 90) {
                $('.header').removeClass('fixed');
                $('body').css('padding-top', '0');
            }
        }
    });

    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    var worksThumbs = new Swiper('.works-thumbs', {
        spaceBetween: 36,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });


});

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});