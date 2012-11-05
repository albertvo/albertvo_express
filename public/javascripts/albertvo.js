$(function () {

    $('.section').each(function (i) {
        var position = $(this).position();

        $(this).scrollspy({
            min: position.top,
            max: position.top + $(this).height(),
            onEnter: function (element, position) {
                $('.scrolly').each(function (i) {
                    $(this).removeClass("active");
                });

                var navId = '#' + element.id + "-nav";
                $(navId).addClass("active");

            },
            onLeave: function (element, position) {
                var navId = '#' + element.id + "-nav";
                //$(navId).removeClass("active");
            }
        });
    });

    $('a.scrolly').bind('click', function (event) {
        var $anchor = $(this);
        $('.scrolly').each(function (i) {
            $(this).removeClass("active");
        });
        $anchor.addClass("active");
        $('html, body').animate(
            { scrollTop: $($anchor.attr('href')).offset().top - 70 },
            "easeInOutExpo"
        );

        //$('html, body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 'slow');
        return false;
    });
});