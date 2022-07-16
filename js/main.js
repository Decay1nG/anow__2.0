AOS.init();

(function () {
    $('.mentions__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1350,
        arrows: false,
        centerPadding: '20px',
        cssEase: 'linear',
    })

    $(".navigation__items").on("click", "a", function (event) {
        event.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100
        $('body,html').animate({ scrollTop: top }, 1000)
    })


    new ScrollMagic.Scene({
        duration: 100,	// the scene should last for a scroll distance of 100px
        offset: 50	// start this scene after scrolling for 50px
    })

    var controller = new ScrollMagic.Controller();

    // build scenes
    new ScrollMagic.Scene({ offset: -300, triggerElement: "#sec1" })
        .setClassToggle(".scale__bar-animated--one", "scale__bar--illustration")
        .addTo(controller);
    new ScrollMagic.Scene({ offset: -200, triggerElement: "#sec1" })
        .setClassToggle(".scale__bar-animated--two", "scale__bar--design") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({ offset: -100, triggerElement: "#sec1" })
        .setClassToggle(".scale__bar-animated--three", "scale__bar--development") // add class toggle
        .addTo(controller);


    $('.ham3, .navigation__link').on('click', function (e) {
        e.preventDefault()
        $('.navigation__items').toggleClass('navigation__items--open');
        $('.ham3').toggleClass('active')
    })

    let lastScroll = 0;
    const defaultOffset = 0;
    const header = document.querySelector('.header__top');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('header__top--hidden');

    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add('header__top--hidden');
        }
        else if (scrollPosition() < lastScroll && containHide()) {
            //scroll up
            header.classList.remove('header__top--hidden');
        }

        lastScroll = scrollPosition();
    })

    
}) ();



