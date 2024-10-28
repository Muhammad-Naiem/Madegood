(function ($) {
    $(function () {



        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".main-nav").fadeToggle()
        });


        $(window).on('scroll', function () {
            var scrollY = $(this).scrollTop()


            if (scrollY > 100) {
                $('.header-wrap').addClass('headroom-active')
            } else {
                $('.header-wrap').removeClass('headroom-active')
            }

        })


        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop() + 1;

            $('.scroll-section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('nav.main-nav ul li.active').removeClass('active');
                    $('nav.main-nav ul li').eq(i).addClass('active');
                }
            });
        }).scroll();

        $('nav.main-nav ul li a[href*="#"]:not([href="#"])').click(function () {

            if ($(window).width() < 501) {

                $("body").removeClass("navShown");
                $(".main-nav").fadeOut()


            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(0) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 600);
                    return false;
                }
            }
        });


        $(".service-accordion-col").each(function () {
            var $this = $(this);
            $this.find(" > .service-accordion-trigger").on("click touch", function (e) {
                e.preventDefault();
                $(".service-accordion-col").removeClass("active")
                $(".service-accordion-content").slideUp();
                if ($this.find(".service-accordion-content:visible").length) {
                    $(".service-accordion-col").removeClass("active")
                    $(".service-accordion-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".service-accordion-content").slideUp();
                    $this.find(" > .service-accordion-content").slideDown();
                }
            })
        })



        $('.related-post-slider-wrap').slick({
            slidesToShow: 1,
            infinite: true,
            centerMode: false,
            initialSlide: 0,
            prevArrow: '.arrow-prev',
            nextArrow: '.arrow-next'
        });



    }) // End ready function.




})(jQuery)