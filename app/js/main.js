$(document).ready(function() {
    var $header = $('#header');
    var hhight = $header.height();

    $('.mapsection').css("top", (hhight + 20) + "px");

    $(window).resize(function() {
        var $header = $('header');
        var hhight = $header.height();
        $('.mapsection').css("top", (hhight + 20) + "px");
    });


    $(".highlight").each(function() {

        $(this).on('click', function() {
            var getData = $(this).attr("name-data");
            var getHTML = ($("#" + getData + "-text").html());

            $(".displaysection").find('.namesection').html(getHTML);

            $("body").toggleClass('fadeOut');
            $(".glossary").toggleClass('inView');
        })

    })

    $(".closebutton").on("click", function() {
        $("body").toggleClass('fadeOut');
        $(".glossary").toggleClass('inView');
        $(".displaysection").removeClass("slideOut");
        $(".seeMore").removeClass("slideOut");
        $(".scrollsection").removeClass("slideIn").addClass("hidescreen");
    })

    $(".seeMore").on("click", function() {
        $(".displaysection").addClass("slideOut");
        $(".seeMore").addClass("slideOut");

        $(".scrollsection")
            // .addClass("slideIn")
            .removeClass("hidescreen");
    })
});


$(window).on('load resize', function() {
    var rowwidth = $(".col").outerWidth();
    var outercolwidth = $(".container").outerWidth();
    var windowwidth = $(window).width();
    var colleftbuffer = $('.col-md-6').offset().left + $(".col-md-6").outerWidth();
    var colleft = $(".col-md-6").outerWidth();

     if($(window).width() >= 992) {
         $(".fixedside")
             .css('left', colleft + "px")
             .css('width', $(window).width() - colleftbuffer - 20 + "px")
             .css('margin-right','');


     } else if ($(window).width() < 992 && $(window).width() >= 768) {
         $(".fixedside")
             .css('left', "")
             .css('width', colleft*.50 + $('.col-md-6').offset().left + "px")
             .css('margin-right','-' + ($('.col-md-6').offset().left - 10) + "px");

     }
     else if ($(window).width() < 768) {
         $(".fixedside")
             .css('left', "")
             .css('width', "")
             .css('margin-right','');
     }
})
