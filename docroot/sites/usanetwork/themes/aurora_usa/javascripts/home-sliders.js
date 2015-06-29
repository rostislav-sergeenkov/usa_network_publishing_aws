(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {

      // vars
      var aspotSlider = null,
          slidesSettings = [],
          dataShiftPercent,
          dataImgSrc,
          nextSlideIndex,
          nextSlideContent,
          activeSlide,
          activeSlideContent,
          timer_id,
          timer_id_animate,
      // elements
          stickyMenu = $('.region-header'),
          aspotBlock = $('.block-usanetwork-aspot'),
          nextButton = $('.block-usanetwork-aspot .next-button'),
          slider = $('.block-usanetwork-aspot .swiper-container'),
          slide = $('.block-usanetwork-aspot .swiper-slide'),
      // settings
          sliderAutoplay,
          sliderSpeed = 6000, // default value
          startAuto,
          slideMove = sliderSpeed * 0.1; // default value

      // check vars value
      if (settings.sliderAspot) {
        sliderAutoplay = Number(settings.sliderAspot.slideshowAutoplay);
        sliderSpeed = Number(settings.sliderAspot.slideshowSpeed);

        // check sliderSpeed
        if (sliderSpeed <= 0 || sliderSpeed < 6000) {

          sliderSpeed = 6000;

        }

        // check autoplay params
        if (sliderAutoplay === 1) {

          startAuto = sliderSpeed;

        } else if (sliderAutoplay === 0) {

          startAuto = 0;

        }

        slideMove = sliderSpeed * 0.1;
      }

      // make slides settings
      $(slide).each(function (index, item) {

        dataShiftPercent = Math.abs($(item).find('.offset-data').data('shift-percent'));
        dataImgSrc = $(item).find('.offset-data').data('img-src');

        if (dataShiftPercent > 0 && dataShiftPercent > 100) {
          dataShiftPercent = 0;
        }

        slidesSettings.push({
          slide: index,
          src: dataImgSrc,
          shiftPercent: dataShiftPercent
        })
      });

      //==============
      // init slider
      //==============
      $(document.body).once(function () {

        if (slide.length === 1) {
          changeLogoColor(slide.find('.slide-content'));
          return false;
        }
        // init
        aspotSlider = new Swiper('.swiper-container', {

          //settings
          autoplay: startAuto,
          effect: 'slide',
          //grabCursor: true,
          loop: true,
          parallax: true,
          slidesPerView: 1,
          speed: 1000,

          // controls
          nextButton: '.block-usanetwork-aspot .next-button',

          // callbacks
          // change slide events
          // 1
          onTransitionStart: function (swiper) {
            if(window.innerWidth < window_size_mobile_641) {
              return false;
            }
            hideFocusSlide();
          },
          // 2
          //onSlideChangeStart: function (swiper) {},
          // 3
          //onTransitionEnd: function (swiper) {},
          // 4
          onSlideChangeEnd: function (swiper) {
            if(window.innerWidth < window_size_mobile_641) {
              // change logo color
              activeSlide = aspotBlock.find('.swiper-slide-active');
              changeLogoColor(activeSlide.find('.slide-content'));

              return false;
            }
            showFocusSlide();
          },
          // on init
          onInit: function (swiper) {

            clearTimeout(timer_id);

            timer_id = setTimeout(function () {
              // check sticky menu
              svitchSlider();
            }, 600); // dependence from stickyHeader: timeout = 500

            // change logo color
            activeSlide = aspotBlock.find('.swiper-slide-active');
            changeLogoColor(activeSlide.find('.slide-content'));

            // change background on next-button
            nextSlideIndex = aspotBlock.find('.swiper-slide-next').data('swiper-slide-index');
            changeBgNextButton(nextSlideIndex);

            // check if autostart = 0
            if (startAuto === 0) {
              clearTimeout(timer_id_animate);

              timer_id_animate = setTimeout(function () {
                showFocusSlide();
              }, slideMove * 0.5)
            }

            // remove loader
            aspotBlock.css('background-image', 'none');
          }
        });

        // event on hover
        slider
            .mouseover(function () {
              aspotSlider.stopAutoplay();
            })
            .mouseout(function () {
              aspotSlider.startAutoplay();
            });

        // shech sticky header for autoplay on scroll
        $(window).on('scroll', function (e) {
          if (aspotSlider) {
            clearTimeout(timer_id);
            timer_id = setTimeout(svitchSlider, 200);
          }
        });

        $(window).on('resize', function (e) {
          if ($('.slide', '.block-usanetwork-aspot').length > 1) {
            aspotSlider.stopAuto();
            clearTimeout(timer_id);

            timer_id = setTimeout(function () {

              if (stickyMenu.hasClass('sticky-shows-submenu')) {
                aspotSlider.stopAutoplay();
              } else {
                aspotSlider.startAutoplay();
              }
            }, 1000);
          }
        });


      });

      //=============
      // functions
      //=============

      // change logo color
      function changeLogoColor(element) {
        var $logo = $('.home-logo'),
            show = $(element).closest('.node').attr('data-show'),
            old_show = $logo.attr('data-show');

        if (old_show) {
          $logo.removeClass(old_show).addClass(show).attr('data-show', show);
        } else {
          $logo.addClass(show).attr('data-show', show);
        }
      }

      // change background on next-button
      function changeBgNextButton(index) {

        var imgUrl, shiftBg;

        if (slidesSettings[index]) {
          imgUrl = slidesSettings[index].src;
          shiftBg = slidesSettings[index].shiftPercent;
        }

        $(nextButton).css({
          'background-image': 'url(' + imgUrl + ')',
          'background-position-x': shiftBg + '%'
        })
      }

      // check sticky menu
      function svitchSlider() {
        if (stickyMenu.hasClass('sticky-shows-submenu')) {
          if (!slider.hasClass('isStopped')) {
            aspotSlider.stopAutoplay();
            slider.addClass('isStopped')
          } else {
            return false;
          }
        } else {
          if (slider.hasClass('isStopped')) {
            aspotSlider.startAutoplay();
            slider.removeClass('isStopped')
          } else {
            return false;
          }
        }
      }

      // show focus slide content
      function showFocusSlide() {
        activeSlide = aspotBlock.find('.swiper-slide-active');
        activeSlideContent = activeSlide.find('.slide-content');

        clearTimeout(timer_id_animate);

        timer_id_animate = setTimeout(function () {
          changeLogoColor(activeSlideContent);
          $(activeSlideContent).animate({
            'opacity': 1
          }, slideMove * 0.5, showNextbutton);
        }, slideMove * 0.5);
      }

      // hide focus slide content
      function hideFocusSlide() {
        nextSlideContent = aspotBlock.find('.swiper-slide-next .slide-content');

        if (nextSlideContent.length === 0) {
          nextSlideContent = slide.eq(1).find('.slide-content');
        }

        $(nextSlideContent).css({
          'opacity': 0
        });

        hideNextbutton();
      }

      // show next button
      function showNextbutton() {
        nextSlideIndex = aspotBlock.find('.swiper-slide-next').data('swiper-slide-index');

        if (nextSlideIndex === undefined) {
          nextSlideIndex = 1;
        }

        // change background on next-button
        changeBgNextButton(nextSlideIndex);
        $(nextButton).animate({
          opasity: 'show',
          right: 0
        }, slideMove);
      }

      // hide next button
      function hideNextbutton() {
        $(nextButton).fadeOut(slideMove * 0.5, function () {
          $(this).css({
            opasity: 0,
            right: '-10%'
          })
        });
      }
    }
  };
}(jQuery));
