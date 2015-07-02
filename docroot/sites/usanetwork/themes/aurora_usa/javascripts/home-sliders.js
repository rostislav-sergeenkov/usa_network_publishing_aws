(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {

      // vars
      var aspotSlider = null,
          slidesSettings = [],
          dataShiftPercent,
          dataImgSrc,
          timer_id,
          timerAnimate,
          timerAnimateHide,
          timerAnimateShow,
          nextSlideContent,
          activeSlideContent,
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
          slideMove = sliderSpeed * 0.1; // default value

      // check count slides before init
      if (slide.length === 1) {
        // change logo color
        changeLogoColor(slide.find('.slide-content'));

        // stop init
        return false;
      }

      // check settings value
      if (settings.sliderAspot) {
        sliderAutoplay = Math.abs(settings.sliderAspot.slideshowAutoplay);
        sliderSpeed = Math.abs(settings.sliderAspot.slideshowSpeed);

        if (sliderSpeed <= 0 || sliderSpeed < 6000) {
          sliderSpeed = 6000;
        }

        if (sliderAutoplay === 1) {
          startAuto = true;
        } else if (sliderAutoplay === 0) {
          startAuto = false;
        }

        slideMove = sliderSpeed * 0.1;
        timerAnimate = slideMove;
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
        slider.on('init', function (event, slick) {
          console.info('init');
          console.info(slick);
          var nextIndex = slick.currentSlide + 1;

          // start next button
          nextButton.addClass('ready');

          // change logo color
          changeLogoColor(slide.find('.slide-content'));

          // show next button
          //showNextbutton(nextIndex);

        })

            // init slider
            .slick({

              // slider settings
              adaptiveHeight: true,
              //autoplay: startAuto,
              autoplaySpeed: sliderSpeed,
              cssEase: 'linear',
              easing: 'linear',
              infinite: true,
              lazyLoad: 'ondemand',
              //lazyLoad: 'progressive',
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 600,

              // controls
              nextArrow: nextButton,
              prevArrow: ''
            })

            // On before slide change
            .on('afterChange', function (event, slick, currentSlide) {
              //console.info('afterChange');

              var nextSlideIndex = currentSlide + 1;

              if (nextSlideIndex > (slick.$slides.length - 1)) {
                nextSlideIndex = 0;
              }

              // show next button
              timer_id = setTimeout(function () {
                //show focus slide content
                showFocusSlide(currentSlide, nextSlideIndex);
                clearTimeout(timer_id);
              }, slideMove);

              // change logo color
              changeLogoColor(slide.eq(currentSlide).find('.slide-content'));
            })

            // On before slide change
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              //console.info('beforeChange');
              // remove loader
              $(aspotBlock).once(function () {
                $(this).addClass('load');
              });

              // hide next button
              hideNextbutton();
            });
        // end init slider

        // start autoplay
        $(window).load(function () {

          clearTimeout(timer_id);

          timer_id = setTimeout(function () {
            //show focus slide content
            showFocusSlide(slider.slick('slickCurrentSlide'), slider.slick('slickCurrentSlide') + 1);

            if (startAuto) {
              slider.slick('slickPlay');
            }
          }, timerAnimate);
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

        $(nextButtonWrapper).css({
          'background-image': 'url(' + imgUrl + ')',
          'background-position-x': shiftBg + '%'
        })
      }

      // hide focus slide content
      function hideFocusSlide(nextIndex) {
        nextSlideContent = slide.eq(nextIndex).not('.slick-cloned').find('.slide-content');

        $(nextSlideContent).css({
          'opacity': 0
        });
      }

      // hide next button
      function hideNextbutton() {
        $(nextButton).fadeOut(timerAnimate * 0.5, function () {
          $(this).css({
            display: 'block',
            right: '-10%'
          });
        });
      }

      // show next button
      function showNextbutton() {
        $(nextButton).animate({
          right: 0
        }, timerAnimate);
      }

      // show focus slide content
      function showFocusSlide(currentIndex, nextIndex) {
        activeSlideContent = slide.eq(currentIndex).not('.slick-cloned').find('.slide-content');

        // change background on next-button
        changeBgNextButton(nextIndex);

        // hide focus slide content
        hideFocusSlide(nextIndex);

        // show next button
        showNextbutton();

        clearTimeout(timerAnimateShow);

        timerAnimateShow = setTimeout(function () {
          // change logo color
          changeLogoColor(activeSlideContent);
        }, slideMove * 0.5);

        $(activeSlideContent).animate({
          'opacity': 1
        }, slideMove * 0.5, showNextbutton);



      }
    }
  };
}(jQuery));
