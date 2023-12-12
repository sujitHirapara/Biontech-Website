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
    $('.navbar-menu').slideToggle(400);
    $('body').toggleClass('overflow-hidden');
});

// SLider
$('.clients-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 4
        }
    },
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        }
    },
    {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
    },
    {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
    },
    ]
});

// Hero Slider
// $('.hero-slider').slick({
//     slidesToShow: 1,
//     dots: true,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     infinite: true,
// });

$(document).ready(function($) {
	var sliderTimer = 5000;
  var beforeEnd = 500;
	var $imageSlider = $('.hero-slider');
	$imageSlider.slick({
		autoplay: true,
		autoplaySpeed: sliderTimer,
		speed: 1000,
		arrows: true,
		dots: true,
		// adaptiveHeight: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	});

	function progressBar(){
		$('.slider-progress').find('span').removeAttr('style');
		$('.slider-progress').find('span').removeClass('active');
		setTimeout(function(){
			$('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
		}, 100);
	}
	progressBar();
	$imageSlider.on('beforeChange', function(e, slick) {
		progressBar();
	});
  $imageSlider.on('afterChange', function(e, slick, nextSlide) {
		titleAnim(nextSlide);
	});

	// Title Animation JS
	function titleAnim(ele){
		$imageSlider.find('.slick-current').find('h1').addClass('show');
		setTimeout(function(){
			$imageSlider.find('.slick-current').find('h1').removeClass('show');
		}, sliderTimer - beforeEnd);
	}
	titleAnim();
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