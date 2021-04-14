$(document).ready(function () {

    //buttons click
    $('.button-order').click(function () {
        $('html, body').animate({scrollTop: $('.how-to-order-section').offset().top}, 1000);
    });

    $('.button-more').click(function () {
        $('html, body').animate({scrollTop: $('.restaurant-description').offset().top}, 1000);
    });

    // Select
    $('a[href*="#"]')
        // Remove links that don't
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {

                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                        ;
                    });
                }
            }
        });

})