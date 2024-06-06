$(function () {

    "use strict";

    // MENU FIX JS
    if ($(window).scrollTop() > 1) {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').addClass('menu_fix');
        }
    } else {
        if ($('.main_menu').offset() != undefined) {
            $('.main_menu').removeClass('menu_fix');
        }
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {

            if ($('.main_menu').offset() != undefined) {
                if (!$('.main_menu').hasClass("menu_fix")) {
                    $('.main_menu').addClass("menu_fix");
                }
            }
        }
        else {
            if ($('.main_menu').offset() != undefined) {
                $('.main_menu').removeClass("menu_fix");
            }
        }
    });


    // COUNTER JS
    $('.count').countUp();


    // WOW JS
    new WOW().init();


    // COURSORE POINTER
    init_pointer({});


    // ISOTOPE JS
    var $grid = $('.grid').isotope({});

    $('.filter_btn').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    //active class
    $('.filter_btn button').on("click", function (event) {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();

    });


    // MARQUEE ANIMATION JS
    $('.marquee_animi').marquee({
        gap: 100,
        speed: 70,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    // VENBOX JS
    $('.venobox').venobox();


    // TESTIMONIAL SLIDER
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

    });



    // $('.testimonial_slider').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     dots: true,
    //     arrows: false,

    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //     ]
    // });

































});
