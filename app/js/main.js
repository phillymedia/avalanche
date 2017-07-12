require("./video");

$(document).ready(function() {
    var tap = ("ontouchstart" in document.documentElement);

    var $header = $('#header');
    var hhight = $header.height();

    $('.mapsection').css("top", (hhight + 20) + "px");

    $(window).resize(function() {
        var $header = $('header');
        var hhight = $header.height();
        $('.mapsection').css("top", (hhight + 20) + "px");
    });





    $(".highlight").each(function() {
        if (!tap) {
            $(this).on("mouseenter", function(event) {
                event.preventDefault();

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
            $(this).on("mouseleave", function() {
                $('#glossary-hover').hide();
            });
        }




        $(this).on('click', function() {
            $('#glossary-hover').hide();

            var $this = $(this);
            var getData = $(this).attr("name-data");
            var getHTML = ($("#" + getData + "-text").html());
            $(".displaysection").find('.namesection').html(getHTML);

            if ($this.attr("class") == "highlight clicked") {
                $(".glossary").removeClass('inView');
                $(this).removeClass("clicked");
            } else {
                $(".highlight").removeClass('clicked');
                $this.addClass("clicked");
                $(".glossary").addClass('inView');
            }
        })

    })

    $(".closebutton").on("click", function() {
        $(".glossary").toggleClass('inView');
        $(".displaysection").removeClass("slideOut");
        $(".seeMore").removeClass("slideOut");
        $(".scrollsection").removeClass("slideIn").addClass("hidescreen");
        $(".innertext").removeClass("fullscreen");
        $(".innertext").css('height', "");
        if ($("body").attr("class") == "fadeOut") {
            $("body").toggleClass('fadeOut');

        }


    })

    $(".seeMore").on("click", function() {
        $(".displaysection").addClass("slideOut");
        $(".seeMore").addClass("slideOut");

        $(".scrollsection")
            .removeClass("hidescreen");
        var wheight = $(window).height();
        var eheight = $(".innertext").height();
        var header_height = $("header").height();

        if (eheight >= wheight * .7 || $(window).width() < 600) {
            $(".innertext").addClass("fullscreen");
            console.log(wheight, header_height);
            $(".fullscreen").css('height', wheight - header_height + "px");
            // $(".fullscreen").find(".closebutton").css('top', header_height + 10 + "px");

            $("body").toggleClass('fadeOut');

        }
    })



    // listen on the event

    require("./modernizr");
    if (Modernizr.cssgrid) {
        console.log("supported");
    } else {
        console.log("not supported");
    }
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
    var videosource = "'http://media.philly.com/storage/inquirer/video/AvalancheVideo2.mp4'";

    if ($(window).width() < 600) {
        $("video source").attr("src") == "";
        console.log($("video source").attr("src"));
    } else {
        $("video source").attr("src") == videosource;
        console.log($("video source").attr("src"));
    }


})
