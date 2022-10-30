
function checkRatio() { if (window.devicePixelRatio != 1 && !('ontouchstart' in window || 'onmsgesturechange' in window)) { $('body').addClass('zoomed').data('zoom', Math.round(window.devicePixelRatio * 10) * 10); } else { $('body').removeClass('zoomed').removeData('zoom'); } }
$(document).ready(function () {
  checkRatio();
  window.addEventListener("resize", checkRatio);
  $(".universal-form").append('<input type="hidden" name="key1" value="8ab34c0ab1ac27a028bc937e3b30b122" /><input type="hidden" name="key2" value="d4d55e238fb0aa80abf439b9d1adfb6e" />');
  $("[data-form]").click(function () {
    $("#contact-title").text($(this).data('form')); $("#contact-type").val($(this).data('form')); $("#contact").modal("show"); return false;
  });
  $(".feedback-form").append('<input type="hidden" name="key1" value="b89ce2b15d5e3ffa7448e487f0e2e9c8" /><input type="hidden" name="key2" value="2b46f0f52a3e876fa25960b788b209a2" />');
  $(".magazin-form").append('<input type="hidden" name="key1" value="ca4c05dcef9b98929efdfdc3e0d71999" /><input type="hidden" name="key2" value="52249fa52b94cef9f70ac81626714b1f" />'); var win_wdh = $(window).width(); if (win_wdh < 991) { $('[data-hover]').click(function (e) { if (!$(this).hasClass('clicked')) { $(this).addClass('clicked').trigger('mouseenter'); return false; } else { return true; } }); $('[data-hover]').mouseleave(function () { $(this).removeClass('clicked'); }); }
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.back-top').fadeIn();
    } else {
      $('.back-top').fadeOut();
    }
  });

  $('.map-number').counterUp({ delay: 3.5, time: 1000 });
  
  $('#frontSlider').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<div class="slick-prev slick-prev-squareArrows slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-next-squareArrows slick-arrow"></div>',
    responsive: [{ breakpoint: 768, settings: { arrows: false } }]
  });
  $('#ProductsSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<div class="slick-prev slick-prev-squareArrows slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-next-squareArrows slick-arrow"></div>',
    responsive: [{ breakpoint: 991, settings: { arrows: true, slidesToShow: 3 } },
    { breakpoint: 768, settings: { arrows: true, slidesToShow: 2, slidesToScroll: 2, } },
    { breakpoint: 480, settings: { arrows: true, slidesToShow: 1, slidesToScroll: 1 } }]
  });
  $('#frontReviewsSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<div class="slick-prev slick-prev-squareArrows slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-next-squareArrows slick-arrow"></div>',
    responsive: [{ breakpoint: 991, settings: { arrows: true, slidesToShow: 3 } },
    { breakpoint: 768, settings: { arrows: true, slidesToShow: 2, slidesToScroll: 2, } },
    { breakpoint: 480, settings: { arrows: true, slidesToShow: 1, slidesToScroll: 1 } }]
  });
  $('.also-recommend-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesToScroll: 1, prevArrow: '<div class="slick-prev slick-prev-squareArrows slick-arrow"></div>', nextArrow: '<div class="slick-next slick-next-squareArrows slick-arrow"></div>', responsive: [{ breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2, } }, { breakpoint: 480, settings: { arrows: true, slidesToShow: 1, } }]
  }); $('.tovar_slider').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.tovar_slider_pager' }); $('.tovar_slider_pager').slick({ slidesToShow: 2, slidesToScroll: 1, asNavFor: '.tovar_slider', prevArrow: '<div class="slick-prev slick-prev-squareArrows arrow-prev-vertical"></div>', nextArrow: '<div class="slick-next slick-next-squareArrows arrow-next-vertical"></div>', focusOnSelect: true, vertical: true, centerPadding: '10px', centerMode: true }); $('.minus').click(function () { var $input = $(this).parent().find('input'); var count = parseInt($input.val()) - 1; count = count < 1 ? 1 : count; $input.val(count); $input.change(); return false; }); $('.plus').click(function () { var $input = $(this).parent().find('input'); $input.val(parseInt($input.val()) + 1); $input.change(); return false; }); $("#BoilerPower").slider({}); $("#BoilerPower").on("slide", function (slideEvt) { $("#BoilerPowerSliderVal").html('<span class="fist-number">' + slideEvt.value[0] + '</span>' + ' - <span class="fist-number">' + slideEvt.value[1] + '</span>'); }); $('.circle-red-one').addClass('circle-red-one-active'); $('.circle-red-two').addClass('circle-red-two-active'); $('.circle-red-third').addClass('circle-red-third-active'); $(function () { $('.FrontSlider-container').waypoint(function () { $('.frontAdvantages__item-inner').addClass('fadeInUp'); }); $('.frontReviews').waypoint(function () { $('.object-wrap__body-bg-img').addClass('fadeIn animated animation-duration-5s object-wrap__body-bg-img-active'); }) });
});