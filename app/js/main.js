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

        $(this).on("mouseover", function() {


            var x = event.clientX + 0; // Get the horizontal coordinate
            var y = event.clientY + 20;

            var getData = $(this).attr("name-data");
            var getHTML = ($("#" + getData + "-text").html());
            $("body").append("<div id='glossary-hover'></div>");
            $("#glossary-hover").html(getHTML + "<small><em>Click for more info<em></small>");
            $('#glossary-hover').css({
                top: y,
                left: x
            }).show();

        });
        $(this).mouseout(function() {
            $('#glossary-hover').hide();
        });

        $(this).on('click', function() {
            var getData = $(this).attr("name-data");
            var getHTML = ($("#" + getData + "-text").html());

            $(".displaysection").find('.namesection').html(getHTML);

            // $("body").toggleClass('fadeOut');
            $(".glossary").toggleClass('inView');
        })

    })

    $(".closebutton").on("click", function() {
        // $("body").toggleClass('fadeOut');
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


$(window).on('ready resize', function() {
    var rowwidth = $(".col").outerWidth();
    var outercolwidth = $(".container").outerWidth();
    var windowwidth = $(window).width();
    var colleftbuffer = $('.col-md-6').offset().left + $(".col-md-6").outerWidth();
    var colleft = $(".col-md-6").outerWidth();

    if ($(window).width() >= 992) {
        $(".fixedside")
            .css('left', colleft + "px")
            .css('width', $(window).width() - colleftbuffer - 20 + "px")
            .css('margin-right', '');


    } else if ($(window).width() < 992 && $(window).width() >= 768) {
        $(".fixedside")
            .css('left', "")
            .css('width', colleft * .50 + $('.col-md-6').offset().left + "px")
            .css('margin-right', '-' + ($('.col-md-6').offset().left - 10) + "px");

    } else if ($(window).width() < 768) {
        $(".fixedside")
            .css('left', "")
            .css('width', "")
            .css('margin-right', '');
    }
})

$(window).on('scroll resize', function() {

    var header_height = $("header").height();

    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    var trigger = $("#trigger").offset().top;
    var triggerout = $("#triggerout").offset().top;



    if(trigger <= window_top_position + (window_height*.5)) {
        $(".stickymap").addClass("windowfade");
    }

    if (trigger <= window_top_position + header_height) {
         $(".stickymap")
         .css("position","fixed")
         .css("right","0px")
         .css("left",$(window).width()-$(".stickymap").width()-80)
         .css("top",header_height + "px");

    } else if (trigger > window_top_position + header_height) {
        $(".stickymap")
        .css("position","")
        .css("right","")
        .css('left', $(".col-md-6").outerWidth() + "px")
        .css("top","");
    }

    if (triggerout < window_bottom_position) {
        console.log("trigger");
        $(".stickymap").removeClass("windowfade");
    }


    // $('.lazyload').each(function() {
    //     var $element = $(this);
    //     var element_height = $element.outerHeight();
    //     var element_top_position = $element.offset().top;
    //     var element_bottom_position = (element_top_position + element_height);
    //     if ((element_bottom_position >= window_top_position) &&
    //         (element_top_position <= window_bottom_position * .98)) {
    //         $element.addClass('animated');
    //     } else if (element_top_position > window_bottom_position || element_bottom_position < window_top_position) {
    //         $element.removeClass('animated');
    //     }
    // });

})
