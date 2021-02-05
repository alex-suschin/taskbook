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

    $('select').niceSelect();


    var myDropzone = new Dropzone("div#forQueue", {
        url: "/",
        addRemoveLinks: true,
        paramName: "file",
        maxFilesize: 2,
        parallelUploads: 1,
        maxFiles: 10,
        acceptedFiles: 'image/*',
        accept: function(file, done) {
            $('#QueueN').append('<input type="hidden" class="name_photo" name=photo[] value="' + file.name + '" />');
            done();
        }

    });

    myDropzone.on("addedfile", function(file) {
        $('.dz-started').slick({
            infinite: true,
            slidesToScroll: 1,
            variableWidth: true
        });
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