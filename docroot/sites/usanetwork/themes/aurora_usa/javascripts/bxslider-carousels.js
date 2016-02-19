(function ($) {
  Drupal.behaviors.bxslider_carousels = {

    // Init all vertical carousels
    initVSliders: function() {
      $('.slider-vertical').mCustomScrollbar({
        axis:"y",
        autoHideScrollbar: true,
        scrollInertia: 0,
        scrollbarPosition: "inside",
        callbacks: {
          onInit:function(){
            var activeItem = $('.slider-vertical li.slide-item .asset-img.active').closest('li');
            if (activeItem.length > 0) {
              setTimeout(function(){
                $('.slider-vertical').mCustomScrollbar("scrollTo", activeItem);
              }, 500);
            }
          },
          whileScrolling: function(){
            if (this.mcs.topPct >= 97) {
              $('.episodes-list', '.aspot-and-episodes').removeClass('shadow');
            } else {
              if (!$('.episodes-list', '.aspot-and-episodes').hasClass('shadow')) {
                $('.episodes-list', '.aspot-and-episodes').addClass('shadow');
              }
            }
          },
          onScroll: function(){
            var items = [];
            var i = 0;
            $(this).find('li').each(function(){
              items[i] = this;
              i++;
            });
            Drupal.behaviors.lazy_load_custom.galleryLazyLoadScroll(items);
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
              if(window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches) {
                $(this).jcarousel('scroll', '-=3');
              }
            },
            swipeLeft: function () {
              if(window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches) {
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

      var moreButton = $('.episodes-list-slider.horizontal a.more-button'),
          slideItemLength = $('.episodes-list-slider.horizontal .slide-item').length;
      //number of visible items for different pages for width screen less than 640px
      var number_of_items = ($('body').hasClass('consumptionator-page'))? 5 : 3;

      // init right rail carousel
      Drupal.behaviors.bxslider_carousels.initVSliders();

      if (window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches && window.matchMedia("(max-width: " + window_size_desktop_1280 + "px)").matches && slideItemLength > 3){
        Drupal.behaviors.bxslider_carousels.initHSliders();
      }

      if (slideItemLength > number_of_items){
        if (window.matchMedia("(max-width: " + window_size_mobile_640 + "px)").matches || window.matchMedia("(min-width: " + window_size_desktop + "px)").matches){
          $('.episodes-list-slider.horizontal').addClass('destroy');
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
      } else {
        $('.episodes-list-slider.horizontal').addClass('destroy');
      }

      $(window).bind('resize', function () {
        setTimeout(function() {
          var slideItemLength = $('.episodes-list-slider.horizontal .slide-item').length;
          if (slideItemLength > 3) {
            if (window.matchMedia("(min-width: " + window_size_mobile_641 + "px)").matches && window.matchMedia("(max-width: " + window_size_desktop_1280 + "px)").matches){
              if($('.episodes-list-slider.horizontal').hasClass('destroy')){
                $('.episodes-list-slider.horizontal > ul > li').removeClass('hidden');
                $('.episodes-list-slider.horizontal a.more-button.close').removeClass('close').addClass('more');
                moreButton.css('display', 'none');
                Drupal.behaviors.bxslider_carousels.initHSliders();
                $('.episodes-list-slider.horizontal').removeClass('destroy');
              }
            } else {
              if(!$('.episodes-list-slider.horizontal').hasClass('destroy')){
                $('.episodes-list-slider.horizontal').jcarousel('destroy').addClass('destroy');
                $('.episodes-list-slider.horizontal ul').removeAttr('style');
                $('.episodes-list-slider.horizontal li').removeAttr('style');

                $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt('+ (number_of_items - 1) +')').addClass('hidden');
                moreButton.css('display', 'block');
              }
            }
          }
        }, 0);
      });

    }
  };
}(jQuery));
