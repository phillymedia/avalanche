$(document).ready(function() {
    var video = document.getElementById('googlevideo');

    function myTimer() {


        if ((video.currentTime).toFixed(2) == 5.13 && t2Called == false) {
            video.pause();
        }
        if ((video.currentTime).toFixed(2) == 14.55 && t3Called == false) {
            if (video.play()) {
                video.pause();
            }
        }
        if ((video.currentTime).toFixed(2) == 21.31 && t4Called == false) {
            if (video.play()) {
                video.pause();
            }
        }
        if ((video.currentTime).toFixed(2) == 34.21 && t5Called == false) {
            if (video.play()) {
                video.pause();
            }
        }
        if ((video.currentTime).toFixed(2) == 46.2) {
            if (video.play()) {
                video.pause();
            }
        }
    }


    $(window).on('scroll resize', function() {
        var header_height = $("header").height();
        var window_height = $(window).height();
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        var trigger = $("#trigger").offset().top;
        var triggerout = $("#triggerout").offset().top;


        if (trigger <= window_bottom_position) {
            var timer = setInterval(function() {
                myTimer()
            }, 100);
        }

        if (trigger <= window_top_position + (window_height * .5) && trigger >= window_top_position + (window_height * .3)) {
            $(".stickymap").addClass("windowfade");

            t1();
        }
        if ($("#trigger2").offset().top <= window_top_position + (window_height * .5) && $("#trigger2").offset().top >= window_top_position + (window_height * .3)) {
            t2();
        }
        if ($("#trigger3").offset().top <= window_top_position + (window_height * .5) && $("#trigger3").offset().top >= window_top_position + (window_height * .3)) {
            t3();
        }
        if ($("#trigger4").offset().top <= window_top_position + (window_height * .5) && $("#trigger4").offset().top >= window_top_position + (window_height * .3)) {
            t4();
        }
        if ($("#trigger5").offset().top <= window_top_position + (window_height * .5) && $("#trigger5").offset().top >= window_top_position + (window_height * .3)) {
            t5();
            $('#googlevideo').hover(function toggleControls() {
                if (this.hasAttribute("controls")) {
                    this.removeAttribute("controls")
                } else {
                    this.setAttribute("controls", "controls")
                }
            })
        }


        if (trigger <= window_top_position + header_height + 20) {
            $(".stickymap")
                .css("position", "fixed")
                .css("right", "20px")
                .css("left", $(window).width() - $(".stickymap").width() - 80)
                .css("top", header_height + 20 + "px");

        } else if (trigger > window_top_position + header_height + 20) {
            $(".stickymap")
                .css("position", "")
                .css("right", "")
                .css('left', $(".col-md-6").outerWidth() + "px")
                .css("top", "");
        }

        if (triggerout < window_bottom_position) {
            $(".stickymap").removeClass("windowfade");
            window.clearInterval(timer);
            t1Called = false;
            t2Called = false;
            t3Called = false;
            t4Called = false;
            t5Called = false;
        }

        if (triggerout > window_bottom_position && trigger < window_top_position) {
            $(".stickymap").addClass("windowfade");
            var timer = setInterval(function() {
                myTimer()
            }, 100);
        }


    })

    var t1Called = false;
    var t2Called = false;
    var t3Called = false;
    var t4Called = false;
    var t5Called = false;



    var t1 = (function() {
        if (t1Called) {
            return;
        } else {
            video.play();
            console.log("t1 triggered");
            t1Called = true;
        }
    })

    var t2 = (function() {
        if (t2Called) {
            return;
        } else {
            video.play();
            console.log("t2 triggered");
            t2Called = true;
        }
    });
    var t3 = (function() {
        if (t3Called) {
            return;
        } else {
            video.play();
            console.log("t3 triggered");
            t3Called = true;
        }
    })
    var t4 = (function() {
        if (t4Called) {
            return;
        } else {
            video.play();
            console.log("t4 triggered");
            t4Called = true;
        }
    })
    var t5 = (function() {
        if (t5Called) {
            return;
        } else {
            video.play();
            console.log("t5 triggered");
            t5Called = true;
        }
    })




})
