function Message(data) {
    this.name = ko.observable(data.name);
    this.emailaddress = ko.observable(data.emailaddress);
    this.message = ko.observable(data.message);
}

function ContactViewModel() {
    this.name = "Bert";
    this.emailaddress = "Bertington";
}


$(function () {

    $('.section').each(function (i) {
        var position = $(this).position();

        $(this).scrollspy({
            min: position.top - 100,
            max: position.top + $(this).height(),
            onEnter: function (element, position) {

                $('.scrolly').each(function (i) {
                    $(this).removeClass("active");
                });
                var navId = '#' + element.id + "-nav";
                $(navId).addClass("active");

            },
            onLeave: function (element, position) {
                //var navId = '#' + element.id + "-nav";
                //$(navId).removeClass("active");
            }
        });
    });

    $('a.scrolly').bind('click', function (event) {
        var $anchor = $(this);
        /*
        $('.scrolly').each(function (i) {
            $(this).removeClass("active");
        });
        $anchor.addClass("active");
        */
        $('html, body').animate(
            { scrollTop: $($anchor.attr('href')).offset().top - 70 },
            "easeInOutExpo"
        );

        //$('html, body').animate({scrollTop: $($anchor.attr('href')).offset().top}, 'slow');
        return false;
    });

    ko.applyBindings(new ContactViewModel());
});