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


$(window).on('resize', function() {
    var rowwidth = $(".col").outerWidth();
    var outercolwidth = $(".container").outerWidth();
    var windowwidth = $(window).width();
    // console.log(rowwidth, outercolwidth, windowwidth);
    // console.log($('.col-md-6').offset().left + $(".col-md-6").width(), $('.col-md-6').offset().left, $(".col-md-6").width());
    var colleft = $('.col-md-6').offset().left + $(".col-md-6").outerWidth();
    console.log(colleft, $(window).width(), $(window).width() - colleft);
    $(".fixedline")
        .css('left', colleft + "px");
    //     .css('width', $(window).width() - colleft + "px")
    //     .css('background-color', 'gray');
    $(".testing").css("left",colleft-$('.col-md-6').offset().left + "px")
})
