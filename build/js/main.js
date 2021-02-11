Dropzone.autoDiscover = false;
$(function() {


    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('aside').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('aside').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });


    $('#datepicker').datepicker({
        showWeek: true,
        firstDay: 1,
        minDate: new Date()
    });

    $('#datepicker2').datepicker({
        showWeek: true,
        firstDay: 1,
        minDate: new Date()
    });

    $('#datepicker3').datepicker({
        range: 'multiple',
        showWeek: true,
        firstDay: 1,
        dateFormat: 'mm.dd.yyyy',
        onSelect: function(fd, d, picker) {
            $(".start_one").val(fd.split("-")[0]);
            $(".end_one").val(fd.split("-")[1]);
        }
    });

    $('select').niceSelect();




    function mobileTextarea() {
        var elem = document.getElementById('textarea');
        var minRows = 1;

        if (elem) {
            function setRows() {
                elem.rows = minRows;
                do {
                    if (elem.clientHeight != elem.scrollHeight) elem.rows += 1;
                } while (elem.clientHeight < elem.scrollHeight);
            }
            setRows();
            elem.rows = minRows;

            elem.onkeyup = function() {
                setRows();
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener("load", mobileTextarea, false);
    else if (window.attachEvent)
        window.attachEvent("onload", mobileTextarea);


    function mobileTextarea2() {
        var elem = document.getElementById('desc-quest');
        var minRows = 1;

        if (elem) {
            function setRows() {
                elem.rows = minRows;
                do {
                    if (elem.clientHeight != elem.scrollHeight) elem.rows += 1;
                } while (elem.clientHeight < elem.scrollHeight);
            }
            setRows();
            elem.rows = minRows;

            elem.onkeyup = function() {
                setRows();
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener("load", mobileTextarea2, false);
    else if (window.attachEvent)
        window.attachEvent("onload", mobileTextarea2);

    function mobileTextarea3() {
        var elem = document.getElementById('textarea-title');
        var minRows = 1;

        if (elem) {
            function setRows() {
                elem.rows = minRows;
                do {
                    if (elem.clientHeight != elem.scrollHeight) elem.rows += 1;
                } while (elem.clientHeight < elem.scrollHeight);
            }
            setRows();
            elem.rows = minRows;

            elem.onkeyup = function() {
                setRows();
            }
        }
    }
    if (window.addEventListener)
        window.addEventListener("load", mobileTextarea3, false);
    else if (window.attachEvent)
        window.attachEvent("onload", mobileTextarea3);





    jQuery('.quest-items').scrollbar({
        ignoreOverlay: true
    });

    jQuery('.client-items-executor').scrollbar({
        ignoreOverlay: true
    });

    jQuery('.client-items-cleint').scrollbar({
        ignoreOverlay: true
    });

    jQuery('#forQueue').scrollbar({
        ignoreOverlay: true,
        "scrollx": $('.external-scroll_x'),
        autoScrollSize: true,
        autoUpdate: true
    });

    $('.btn-show-info').click(function() {
        $(this).closest('.client-item').toggleClass('active');
        $(this).closest('.client-item').find('.client-item-hide').slideToggle();
    });

    $('.btns-company a').click(function() {
        $('.btns-company').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.client-items-box').find('.client-items-box__item').hide();
        $('#' + $(this).data('switch')).show();
    });

    $('.btn-ok').click(function() {
        $('.overlay').addClass('hide');
    });

    $('.btn-js-client').click(function() {
        $('#popup_wrap_client').addClass('popup_active');
        $('.popup-client').addClass('popup_active');
    });

    $('.btn-new-project').click(function() {
        $('#popup_wrap_project').addClass('popup_active');
        $('.popup-project').addClass('popup_active');
    });

    $('.popup-close').click(function() {
        $(this).closest('.popup_wrap').removeClass('popup_active');
        $(this).parents('.popup').removeClass('popup_active');
    });

    $('.btn-search').click(function(e) {
        $('.form-search').toggleClass('active');
        $('.form-search input').focus();
    });
    jQuery(function($) {
        $(document).mouseup(function(e) {
            if (!$(".btn-search").is(e.target) && !$(".form-search").is(e.target) &&
                $(".form-search").has(e.target).length === 0) {
                $(".form-search").removeClass('active');
            }
        });
    });

    // $('.dz-remove').on('click', function() {
    //     $('.dropzone-imgages').slick('slickRemove', slideIndex - 1);
    //     if (slideIndex !== 0) {
    //         slideIndex--;
    //     }
    // });


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
//# sourceMappingURL=../sourcemaps/main.js.map
