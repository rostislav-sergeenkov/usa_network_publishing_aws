(function ($) {
  Drupal.behaviors.bxslider_carousels = {
    // Arrays for vertical and horizontal bxSlider objects
    harray: [],

    // Init all vertical carousels
    initVSliders: function() {
      $('.slider-vertical').mCustomScrollbar({
        axis:"y",
        autoHideScrollbar: true,
        scrollInertia: 0,
        scrollbarPosition: "inside",
        callbacks: {
          whileScrolling: function(){
            if (this.mcs.topPct >= 97) {
              $('.episodes-list', '.aspot-and-episodes').removeClass('shadow');
            } else {
              if (!$('.episodes-list', '.aspot-and-episodes').hasClass('shadow')) {
                $('.episodes-list', '.aspot-and-episodes').addClass('shadow');
              }
            }
          }
        }
      });
    },

    // Init all horizontal carousels
    initHSliders: function() {
      $('.episodes-list-slider.horizontal')
        .on('jcarousel:create jcarousel:reload', function () {
          var $carousel = $(this),
            width = $carousel.innerWidth();

          if (width > window_size_mobile_641) {
            width = width / 3;
          }

          $carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        }).swipe({
            excludedElements: "button, input, select, textarea, .noSwipe",
            allowPageScroll: "vertical",
            threshold: 50,
            swipeRight: function () {
              if(window.innerWidth >= window_size_mobile_641) {
                $(this).jcarousel('scroll', '-=3');
              }
            },
            swipeLeft: function () {
              if(window.innerWidth >= window_size_mobile_641) {
                $(this).jcarousel('scroll', '+=3');
              }
            }
          })
        .jcarousel({
          animation: {
            duration: 500,
            easing: 'linear'
          },
          rtl: false
        });

      $('.episodes-list-slider.horizontal .horizontal-controls .jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
          $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
          $(this).addClass('inactive');
        })
        .jcarouselControl({
          target: '-=1'
        });

      $('.episodes-list-slider.horizontal .horizontal-controls .jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
          $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
          $(this).addClass('inactive');
        })
        .jcarouselControl({
          target: '+=1'
        });
    },

    attach: function (context, settings) {

      var slideItem =  $('.episodes-list-slider.horizontal .slide-item'),
          moreButton = $('.episodes-list-slider.horizontal a.more-button');

      //number of visible items for different pages for width screen less than 640px
      var number_of_items = ($('body').hasClass('consumptionator-page'))? 5 : 3;

      Drupal.behaviors.bxslider_carousels.initHSliders();

      // init right rail carousel
      Drupal.behaviors.bxslider_carousels.initVSliders();

      $(window).bind('resize', function () {
        setTimeout(function() {
          if (window.innerWidth >= window_size_mobile_641 && window.innerWidth < window_size_desktop && slideItem.length > 2){
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');
            moreButton.css('display', 'none');
          } else {
            $(Drupal.behaviors.bxslider_carousels.harray).each(function() {
              this.destroySlider();
            });
            Drupal.behaviors.bxslider_carousels.harray = [];

            $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');
            moreButton.css('display', 'block');
          }
        }, 0);
      });

      if (slideItem.length > number_of_items){
        if (window.innerWidth < window_size_mobile_641){
          $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');

          // Show more-button
          moreButton.css('display', 'block');
        }

        // Show carousel more-button click
        moreButton.click(function(e) {
          e.preventDefault();

          if ($(this).hasClass('more')) {
            $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
            $(this).removeClass('more').addClass('close');
          } else {
            $('.episodes-list-slider.horizontal > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');
            $(this).removeClass('close').addClass('more');
          }
        });
      }
    }
  };
}(jQuery));
