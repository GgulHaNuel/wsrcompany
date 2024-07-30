$(function () {

    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 100) {
            $("#new_hd").addClass("active");
        } else {
            $("#new_hd").removeClass("active");
        }
    });

    function scrollNav() {
        if ($(this).scrollTop() >= 100) {
            $("#new_hd").addClass("active");
        } else {
            $("#new_hd").removeClass("active");
        }
    }
    scrollNav();

    function NAVBAR() {
        var on = 0
        $(".nav_bar>button").click(function () {
            if (on == 0) {
                $(this).addClass("nav_active");
                $(".nav_wrap").fadeIn();
                $(".nav_menu_box").addClass("nav_active");
                $(".sub_nav").hide();
                $("#new_hd").removeClass("active");
                $("body").css({
                    overflow: "hidden"
                });
                on = 1;
            } else if (on == 1) {
                $(this).removeClass("nav_active");
                $(".nav_wrap").fadeOut();
                $(".nav_menu_box").removeClass("nav_active");
                $(".sub_nav").show();
                scrollNav();
                $("body").css({
                    overflow: "auto"
                });
                on = 0;
            }
        });
    }
    NAVBAR();

    function MAINSLIDER() {
        $(".main_slider").slick({
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: false,
            cssEase: 'linear',
            fade: true,
            arrows: false,
            //prevArrow: '<button type="button" class="slick-prev"><img src="../theme/inct/inct/img/lt_arrow.png" alt="왼쪽"></button>',
            //nextArrow: '<button type="button" class="slick-next"><img src="../theme/inct/inct/img/gt_arrow.png" alt="오른쪽"></button>',
            responsive: [{
                breakpoint: 1025,
                settings: {
                    arrows: false,
                }
            }]
        });
    }
    MAINSLIDER();

    var resizeTimerInternal;

    $(window).on('resize', function () {
        clearTimeout(resizeTimerInternal);

        resizeTimerInternal = setTimeout(function () {
            //add functions here to fire on resize
            slickSliderWithResize();
        }, 100);
    });

    function slickSliderWithResize() {
        if ($(window).width() < 1026) {
            if ($('.main_cont').hasClass('slick-initialized')) {

            } else {
                $('.main_cont').slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    dots: true,
                    cssEase: 'linear',
                    prevArrow: $('.teach_prev'),
                    nextArrow: $('.teach_next'),
                });
            }
        } else {
            if ($('.main_cont').hasClass('slick-initialized')) {
                $('.main_cont').slick("unslick");
            }
        }
    }
    slickSliderWithResize();


    function MENU_ACTIVE() {
        $(".nav_menu_box>li>a").click(function (e) {
            var link = $(this);
            var item = link.parent(".nav_menu");
    
            if (item.hasClass("nav_active")) {
                item.removeClass("nav_active").children("a").removeClass("nav_active");
            } else {
                item.addClass("nav_active").children("a").addClass("nav_active");
            }
    
            if (item.children(".nav_menu_box").length > 0) {
                var href = link.attr("href");
                link.attr("href", "#");
                setTimeout(function () {
                    link.attr("href", href);
                }, 300);
                e.preventDefault();
            }
        });
    
        $(".nav_menu_box>li>a").each(function () {
            var link = $(this);
            if (link.get(0).href === location.href) {
                link.addClass("nav_active").parents("li").addClass("nav_active");
                return false;
            }
        });

        $(".sub_main_nav>li>a").each(function () {
            var link = $(this);
            if (link.get(0).href === location.href) {
                link.addClass("nav_active").parents("li").addClass("nav_active");
                return false;
            }
        });
    }
    MENU_ACTIVE();

    function FILENAME() {
        $("#FILE").on('change', function () {
            var fileName = $("#FILE").val();
            $(".file_name").val(fileName);
        });
    }
    FILENAME();
    
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease',
        offset: 50,
        disable: 'mobile'
    });
});