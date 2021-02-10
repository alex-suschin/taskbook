Dropzone.autoDiscover = false;
$(function() {


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
        dateFormat: 'MM.dd.yyyy',
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



    jQuery('.quest-items').scrollbar({
        ignoreOverlay: true
    });

    jQuery('.client-items-executor').scrollbar({
        ignoreOverlay: true
    });

    jQuery('.client-items-cleint').scrollbar({
        ignoreOverlay: true
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