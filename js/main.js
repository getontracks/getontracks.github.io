// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.

function isRetina() {
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";

    if (window.devicePixelRatio > 1)
        return true;

    if (window.matchMedia && window.matchMedia(mediaQuery).matches)
        return true;

    return false;
};


function retina() {

    if (!isRetina())
        return;

    $("img.2x").map(function(i, image) {

        var path = $(image).attr("src");

        path = path.replace(".png", "@2x.png");
        path = path.replace(".jpg", "@2x.jpg");

        $(image).attr("src", path);
    });
};

$(document).ready(retina);


// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });


$(document).ready(function() {

    var sections = $('.brand-section'),
        nav = $('.nav'),
        nav_height = nav.outerHeight();
    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

        return false;
    });


    $(function stickyNav() {
        var nav = $('#sidebar');
        if (nav.length) {
            $(window).scroll(function() {
                var threshold = 300;

                if ($(window).scrollTop() >= threshold)
                    $('#sidebar').addClass('moveSidebarDown');
                else
                    $('#sidebar').removeClass('moveSidebarDown');
                var check = $(".brand-content").height() - $("#sidebar").height();
                if ($(window).scrollTop() >= check)
                    $('#sidebar').addClass('moveSidebarUp');
                else
                    $('#sidebar').removeClass('moveSidebarUp');
            });
        };
    });

});