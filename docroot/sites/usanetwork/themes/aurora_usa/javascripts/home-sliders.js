(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {

      // vars
      var slidesSettings = [],
          dataShiftPercent,
          dataImgSrc,
          timeAnimateShow,
          nextSlide,
          nextSlideContent,
          nextSlideImg,
          activeSlide,
          activeSlideContent,
          timer_id,
      // elements
          stickyMenu = $('.region-header'),
          aspotBlock = $('.block-usanetwork-aspot'),
          nextButton = $('.block-usanetwork-aspot .next-button'),
          nextButtonWrapper = $('.block-usanetwork-aspot .next-button-wrapper'),
          slider = $('.block-usanetwork-aspot .slider-container'),
          slide = $('.block-usanetwork-aspot .slide'),
      // settings
          sliderAutoplay,
          sliderSpeed = 6000, // default value
          startAuto = true,
          slideMove = sliderSpeed * 0.1, // default value
          slideMoveSpeed = 700,
      // name animation
          nameAnimation = 'linear'; // defoult animation

      // check count slides before init
      if (slide.length === 1) {
        $(window).load(function () {
          // change logo color
          changeLogoColor(slide.length - 1);

          slide.find('.slide-content').fadeIn(slideMove, function () {
            aspotBlock.addClass('load');
          });
        });

        // stop init
        return false;
      }

      // check settings value
      if (settings.sliderAspot) {
        sliderAutoplay = Math.abs(settings.sliderAspot.slideshowAutoplay);
        sliderSpeed = Math.abs(settings.sliderAspot.slideshowSpeed);

        if (sliderSpeed <= 0 || sliderSpeed < 2000) {
          sliderSpeed = 6000;
        }

        if (sliderAutoplay === 1) {
          startAuto = true;
        } else if (sliderAutoplay === 0) {
          startAuto = false;
        }

        slideMove = timeAnimateShow = sliderSpeed * 0.1;
      }

      // make slides settings
      slide.each(function (index, item) {

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

      $(document.body).once(function () {

        // Start init slider
        // On init slide change
        slider
            .on('init', function (event, slick) {

              // start next button
              nextButton.addClass('ready');

              // show content
              slide.eq(slick.currentSlide).not('.slick-cloned').find('.slide-content').css('display', 'block');

              // change logo color
              changeLogoColor(slick.currentSlide);
            })

          // init slider
            .slick({
              // slider settings
              //adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: sliderSpeed,
              centerPadding: '0',
              cssEase: '',
              easing: nameAnimation,
              infinite: true,
              lazyLoad: 'ondemand',
              //lazyLoad: 'progressive',
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: slideMoveSpeed,
              useCSS: false,

              // controls
              nextArrow: nextButton,
              prevArrow: ''
            })

          // On before slide change
            .on('afterChange', function (event, slick, currentSlide) {

              // check on resolution &
              if (window.innerWidth < window_size_mobile_641) {
                // change logo color
                changeLogoColor(currentSlide);
                return false;
              }

              var nextSlideIndex = currentSlide + 1;

              // check next slide index
              if (nextSlideIndex > (slick.$slides.length - 1)) {
                nextSlideIndex = 0;
              }

              // check sticky header & slider pause
              svitchSlider();

              // show slide content
              showElements(currentSlide, nextSlideIndex);
            })

          // On before slide change
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              if (window.innerWidth < window_size_mobile_641) {
                return false;
              }

              // hide slide content
              hideElements(currentSlide, nextSlide);
            })

          // On swipe
            .on('swipe', function (event, slick, direction) {

              if (window.innerWidth < window_size_mobile_641) {
                return false;
              }

              // stop autoplay
              slider.addClass('isStopped');
              slider.slick('slickPause');

              if (direction === 'right') {
                resetSlide();
              }
              // hide next button
              hideNextButton();
            });
        // end init slider

        //start autoplay
        $(window).load(function () {

          var currentSlide = slider.slick('slickCurrentSlide'),
              nextSlide = slider.slick('slickCurrentSlide') + 1;

          // remove loader
          $(aspotBlock).addClass('load');

          if (window.innerWidth >= window_size_mobile_641) {
            //show slide content (currentSlide, nextSlide)
            showElements(currentSlide, nextSlide);
          }

          if (startAuto) {
            slider.slick('slickPlay');
          }

          waitForFinalEvent(function () {
            // check sticky menu
            svitchSlider();
          }, 600, 'load page'); // dependence from stickyHeader: timeout = 500


          // fix autoplay when click next button
          $(nextButton).on('click', function () {
            if (!$(this).hasClass('disable')) {
              // stop auto play
              stopAutoplay();
            }
          });
        });

        // event on hover
        slider
            .mouseover(function () {
              // stop auto play
              stopAutoplay();
            })
            .mouseout(function () {
              // check sticky menu
              svitchSlider();
            });

        // shech sticky header for autoplay on scroll
        $(window).on('scroll', function () {
          if (slide.length > 1) {
            waitForFinalEvent(function () {
              // check sticky menu
              svitchSlider();
            }, 200, 'scroll page');
          }
        });

        $(window).on('resize', function () {

          if (slide.length > 1) {

            // reset slide img margin-left
            resetSlide();

            // stop auto play
            stopAutoplay();

            waitForFinalEvent(function () {

              ////check on resize next-button state
              //if(nextButton.hasClass('disable')) {
              //  if (window.innerWidth >= window_size_mobile_641) {
              //    var currentSlide = slider.slick('slickCurrentSlide'),
              //        nextSlide = slider.slick('slickCurrentSlide') + 1;
              //
              //    // check next slide index
              //    if (nextSlide > (slide.length - 1)) {
              //      nextSlide = 0;
              //    }
              //
              //    //show slide content (currentSlide, nextSlide)
              //    showElements(currentSlide, nextSlide);
              //  }
              //}

              // check sticky menu
              svitchSlider();

            }, 500, 'aspot resize');

          }
        });
      });

      //=============
      // functions
      //=============

      // stop auto play
      function stopAutoplay() {
        slider
            .slick('slickPause')
            .addClass('isStopped');
      }

      // change logo color
      function changeLogoColor(elementIndex) {
        var $logo = $('.home-logo'),
            show = slide.eq(elementIndex).not('.slick-cloned').find('.node').attr('data-show'),
            old_show = $logo.attr('data-show');

        if (old_show) {
          $logo.removeClass(old_show).addClass(show).attr('data-show', show);
        } else {
          $logo.addClass(show).attr('data-show', show);
        }
      }

      // check sticky menu
      function svitchSlider() {
        if (stickyMenu.hasClass('sticky-shows-submenu')) {
          if (!slider.hasClass('isStopped')) {
            slider.slick('slickPause');
            slider.addClass('isStopped')
          } else {
            return false;
          }
        } else {
          if (slider.hasClass('isStopped')) {
            slider.slick('slickPlay');
            slider.removeClass('isStopped')
          } else {
            return false;
          }
        }
      }

      // reset all slides img
      function resetSlide() {
        slide.find('.asset-img img').css('margin-left', 0);
      }

      // change background on next-button
      function setNextSlide(nextIndex) {

        var imgUrl, shiftBg;

        if (slidesSettings[nextIndex]) {
          imgUrl = slidesSettings[nextIndex].src;
          shiftBg = slidesSettings[nextIndex].shiftPercent;
        }

        $(nextButtonWrapper).css({
          'background-image': 'url(' + imgUrl + ')',
          'background-position-x': shiftBg + '%'
        });

        slide.eq(nextIndex).find('.asset-img img').css('margin-left', - shiftBg + '%');
      }

      // show next button
      function showNextbutton() {
        $(nextButton).animate({
          'right': '+=10%'
        }, timeAnimateShow, nameAnimation, function () {
          $(this).removeClass('disable');
        });
      }

      // show slide content
      function showElements(currentIndex, nextIndex) {

        activeSlideContent = slide.eq(currentIndex).not('.slick-cloned').find('.slide-content');
        activeSlide = slide.eq(currentIndex);
        nextSlide = slide.eq(nextIndex);

        // set z-index for active & next slides
        activeSlide.css('z-index', 1);
        nextSlide.css('z-index', 0);

        // change background on next-button
        setNextSlide(nextIndex);

        // change logo color
        changeLogoColor(currentIndex);

        // show current slide content
        activeSlideContent.fadeIn(slideMove * 0.7, function () {
          // show next button
          showNextbutton();
        });
      }

      // hide next button
      function hideNextButton() {
        nextButton.fadeOut(200, function () {
          $(this).addClass('disable').css({
            'display': 'block',
            'right': '-10%'
          });
        });
      }

      // hide slide content
      function hideElements(currentIndex, nextIndex) {
        nextSlideImg = slide.eq(nextIndex).find('.asset-img img');
        nextSlideContent = slide.eq(nextIndex).find('.slide-content');

        $(nextSlideContent).css('display', 'none');

        $(nextSlideImg).animate({
          'margin-left': '0'
        }, slideMoveSpeed, nameAnimation);

        // hide next button
        hideNextButton();
      }
    }
  };
}(jQuery));
