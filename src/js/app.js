import $ from "jquery";
import 'slick-carousel';

window.$ = $;
window.jQuery = jQuery;

// fancy box
require("@fancyapps/fancybox");

//header
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 120) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});

$(".navbar-toggler").click(function () {
    $('.navbar-menu').slideToggle(500);
    $('body').toggleClass('overflow-hidden');
});

// SLider
$('.symptoms-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
    {
        breakpoint: 1441,
        settings: {
        slidesToShow: 4
        }
    },
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3
        }
    },
    {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
    },
    {
        breakpoint: 530,
        settings: {
          slidesToShow: 1
        }
    },
    ]
});

// Testimonial Slider
$('.user-avatar-slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.testimonial-slider',
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
});

// tab filter js
$(document).ready(function(){
  $(".filter-tab-btn").click(function(){
      var value = $(this).attr('data-filter');

      setTimeout(() => {
        $('.team-slider').slick('setPosition');
      }, 200);

      if(value == "all")
      {
          $('.filter').show('700');
          $('.filter').parents('.slick-slide').show('700');
      }
      else
      {
          $(".filter").not('.'+value).hide('2000');
          $('.filter').not('.'+value).parents('.slick-slide').hide('2000');
          // console.log($('.filter').not('.'+value).parents('.slick-slide'));
          $('.filter').filter('.'+value).show('2000');
          $('.filter').filter('.'+value).parents('.slick-slide').show('2000');
      }

      var filterOpen = $(this).hasClass("active");

      if(filterOpen){
          $('.filter-tab-btn').removeClass('active');
      }else {
          var siblings = $('.filter-tab-nav').find(".active");
          siblings.removeClass('active');
          $(this).addClass('active');
      }
  });
});
// END tab filter js