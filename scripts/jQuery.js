$(document).ready(function () {

    // Add navBar
     $('#restaurant-description').waypoint({
        handler: function(direction) {
            if (direction == 'down') {
                $("nav").attr('id', "sticky-nav");
            } else {
                $("nav").removeAttr('id');
            }
        },
        offset: 80
    })

      // Animation for click button
    $('.button-order').click(function () {
        $('html, body').animate({scrollTop: $('.how-to-order-section').offset().top}, 1000);
    });

    $('.button-more').click(function () {
        $('html, body').animate({scrollTop: $('.restaurant-description').offset().top}, 1000);
    });


    //buttons and nav links clik
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {

                        let $target = $(target);
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


   // Animation Departure of the left block with cities
    $('#cities-section').waypoint({
        handler: function(direction) {
           $('.anim2').addClass('animated  animate__fadeInRight')
        },
        offset: 1
    })


    $('#restaurant-description').waypoint({
        handler: function(direction) {
            $('.anim1').addClass('animated  animate__fadeIn')
        },
        offset: 1
    })


    $('#contact-form-section').waypoint({
        handler: function(direction) {
            $('.anim3').addClass('animated  animate__fadeInUp')
        },
        offset: 1
    })


})
