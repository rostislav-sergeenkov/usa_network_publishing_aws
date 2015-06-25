(function($) {
  Drupal.behaviors.homeSlides = {
    _timeVar: null,
    attach: function(context, settings) {

      USAN.aspotSlider = {};

      var slideshowAutoplay,
          slideshowSpeed = 6000,
          sliderAuto = true,
          slideMove = slideshowSpeed * 0.1,
          timer_id,
          _self = this;

      if (Drupal.settings.sliderAspot) {
        slideshowAutoplay = Drupal.settings.sliderAspot.slideshowAutoplay;
        slideshowSpeed = Drupal.settings.sliderAspot.slideshowSpeed;

        if (slideshowSpeed <= 0) {
          slideshowSpeed = 6000;
        } else {
          slideMove = slideshowSpeed * 0.1;
        }

        if (slideshowAutoplay === 1) {
          sliderAuto = true;
        } else if (slideshowAutoplay === 0) {
          sliderAuto = false;
        }
      }

      $('.next-button').hide();

      var hideContent = function(selector) {
        $(selector).css({
          'opacity': 0
        });
      };

      var changeLogoColor = function(element) {
        var $logo = $('.home-logo'),
            show = $(element).closest('.node').attr('data-show'),
            old_show = $logo.attr('data-show');

        if ($logo.hasClass('isStopped')) {
          return false;
        }

        if (old_show) {
          $logo.removeClass(old_show).addClass(show).attr('data-show', show);
        } else {
          $logo.addClass(show).attr('data-show', show);
        }
      };

      var animateContent = function(element) {
        changeLogoColor(element);
        $(element).animate({
          'opacity': 1
        }, 500)
      };

      var showFocusSlide = function(el, slide, old, active) {
        var index = active + 1,
            nextSlideInner = el.get(0).children[index].children[0],
            nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

        USAN.aspotSlider.animateTimeout = setTimeout(function() {
          animateContent(nextSlideContent);
        }, slideMove * 0.5);

        var moveIt = function(index) {
          var nextSlideInner = el.get(0).children[index + 1].children[0],
              nextSlideImg = $(nextSlideInner).find('img').get(0),
              nextSlideOffset = $(nextSlideInner).find('.offset-data').get(0),
              shiftPercent = parseInt($(nextSlideOffset).attr('data-shift-percent'));
          shiftPercent = ((shiftPercent != 'undefined') || (shiftPercent != '')) ? shiftPercent : 0;

          if (shiftPercent < 0 && shiftPercent < -100) {
            shiftPercent = 0;
          } else if (shiftPercent > 0) {
            shiftPercent = 0;
          }

          $(nextSlideImg).css('margin-left', shiftPercent + '%');
          $(nextSlideInner).find('.usanetwork-aspot').css('opacity', 0.5);
          $(nextSlideInner).animate({
            'margin-left': '-10%'
          }, slideMove*1.2, 'easeInOutSine', function() {
            $('.next-button').fadeIn(400).removeClass('disabled');
          });
        };

        moveIt(index);
      };

      var hideFocusSlide = function(el, slide, old, active) {
        var index = old + 1,
            nextSlideInner = el.get(0).children[index + 1].children[0],
            nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

        var moveIt = function(index) {
          var nextSlideInner = el.get(0).children[index + 1].children[0],
              nextSlideImg = $(nextSlideInner).find('img').get(0);
          $(nextSlideInner).find('.usanetwork-aspot').css('opacity', 1);

          $(nextSlideImg, nextSlideInner).animate({
            'margin-left': '0'
          }, slideMove*0.8);

          $('.next-button').fadeOut(200).addClass('disabled');
        };

        hideContent(nextSlideContent);
        moveIt(index);
      };

      var initSlider = function(startSlide, options) {

        var settings = $.extend({
          pager: false,
          startSlide: startSlide || 0,
          controls: false,
          auto: sliderAuto,
          autoHover: true,
          pause: slideshowSpeed,
          useCSS: false,
          preloadImages: 'all',
          onSlideBefore: hideFocusSlide,
          onSlideAfter: showFocusSlide,
          onSliderLoad: function(el, slide, old, active) {
            var first_slide = $('.slide', '#main-slider-wrapper').not($('.slide.bx-clone')).get(0);

            changeLogoColor($(first_slide).find('.slide-content'));
            showFocusSlide(el, slide, old, active);
          }
        }, options);

        clearTimeout(USAN.aspotSlider.showTimeout);
        clearTimeout(USAN.aspotSlider.animateTimeout);

        if (window.innerWidth <= 640) {
          delete settings.onSlideBefore;
          settings.onSlideAfter = function(el, slide) {
            changeLogoColor(slide.find('.slide-content'));
          };
          settings.onSliderLoad = function() {
            var first_slide = $('.slide', '#main-slider-wrapper').not($('.slide.bx-clone')).get(0);
            changeLogoColor($(first_slide).find('.slide-content'));
          };
        }

        return $('.slider').bxSlider(settings);
      };

      var aspotSlider = null;

      if ($('.slide', '.block-usanetwork-aspot').length <= 1) {
        $('.slider', '.block-usanetwork-aspot').css('width', 100 + '%');
      }

      $(document.body).once(function() {
        var $stickyMenu = $('.region-header'),
            $slider = $('.slider'),
            svitchSlider = function() {
              if ($stickyMenu.hasClass('sticky-shows-submenu')) {
                if (!$slider.hasClass('isStopped')) {
                  aspotSlider.stopAuto();
                  $slider.addClass('isStopped')
                } else {
                  return false;
                }
              } else {
                if ($slider.hasClass('isStopped')) {
                  aspotSlider.startAuto();
                  $slider.removeClass('isStopped')
                } else {
                  return false;
                }
              }
            };

        // Init slider
        setTimeout(function() {
          if ($('.slide', '.block-usanetwork-aspot').length > 1) {
            aspotSlider = initSlider();

            $('.next-button', context)
                .hide()
                .addClass('disabled')
                .on('click', function(e) {
                  aspotSlider.goToNextSlide();
                });
            setTimeout(svitchSlider, 200);
          }
        }, 300);

        $(window).on('scroll', function(e) {
          if (aspotSlider) {
            clearTimeout(timer_id);
            timer_id = setTimeout(svitchSlider, 200);
          }
        });

        $(window).on('resize', function(e) {
          if ($('.slide', '.block-usanetwork-aspot').length > 1) {
            $('.next-button').hide().addClass('disabled');
            aspotSlider.stopAuto();
            clearTimeout(timer_id);

            timer_id = setTimeout(function() {
              var currentSlide = aspotSlider.getCurrentSlide(),
                  $logo = $('.home-logo');

              aspotSlider.destroySlider();
              $('.wrp, .full-image', $slider).stop().css({
                'margin-left': '0'
              });
              $logo.addClass('isStopped');

              aspotSlider = null;
              aspotSlider = initSlider(currentSlide);

              setTimeout(function() {
                $logo.removeClass('isStopped');
                if ($stickyMenu.hasClass('sticky-shows-submenu')) {
                  aspotSlider.stopAuto();
                }
              }, 500);
            }, 500);

            $('.wrp', '.slider').attr('style', '');
          }
        });
      });
    }
  };

}(jQuery));
