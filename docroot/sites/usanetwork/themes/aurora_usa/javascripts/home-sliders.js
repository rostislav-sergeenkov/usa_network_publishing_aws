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
          timeAnimateShow,
          nextSlide,
          nextSlideContent,
          nextSlideImg,
          activeSlide,
          activeSlideContent,
      // elements
          stickyMenu = $('.region-header'),
          aspotBlock = $('.block-usanetwork-aspot'),
          nextButton = $('.block-usanetwork-aspot .next-button'),
          nextButtonWrapper = $('.block-usanetwork-aspot .next-button-wrapper'),
          slider = $('.block-usanetwork-aspot .slider-container'),
          slide = $('.block-usanetwork-aspot .slide'),
          slideCloneImg = $('.block-usanetwork-aspot .slide .clone-img'),
      // settings
          sliderAutoplay,
          sliderSpeed = 6000, // default value
          startAuto = true,
          slideMove = sliderSpeed * 0.1, // default value
          slideMoveSpeed = 1000;

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
        slider.on('init', function (event, slick) {
          //console.info('init');
          //console.info(slick);

          // start next button
          nextButton.addClass('ready');

          // show content
          slide.eq(slick.currentSlide).not('.slick-cloned').find('.slide-content').css('opacity', 1);

          // change logo color
          changeLogoColor(slide.find('.slide-content'));
        })

            // init slider
            .slick({

              // slider settings
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: sliderSpeed,
              centerPadding: '0',
              cssEase: 'ease',
              easing: 'linear',
              infinite: true,
              lazyLoad: 'ondemand',
              //lazyLoad: 'progressive',
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: slideMoveSpeed,

              // controls
              nextArrow: nextButton,
              prevArrow: ''
            })

            // On before slide change
            .on('afterChange', function (event, slick, currentSlide) {

              var nextSlideIndex = currentSlide + 1;

              // check next slide index
              if (nextSlideIndex > (slick.$slides.length - 1)) {
                nextSlideIndex = 0;
              }
              // show slide content
              showElements(currentSlide, nextSlideIndex);
            })

            // On before slide change
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

              // hide slide content
              hideElements(currentSlide, nextSlide, slick.autoPlayTimer);
            });
        // end init slider

        //start autoplay
        $(window).load(function () {

          var currentSlide = slider.slick('slickCurrentSlide'),
              nextSlide = slider.slick('slickCurrentSlide') + 1;

          // remove loader
          $(aspotBlock).addClass('load');

          //show slide content (currentSlide, nextSlide)
          showElements(currentSlide, nextSlide);

          if (startAuto) {
            slider.slick('slickPlay');
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

        slide.eq(nextIndex).not('.slick-cloned').find('.clone-img').css({
          'display': 'block',
          'right': shiftBg + '%'
        });
        //slide.eq(nextIndex).not('.slick-cloned').find('.asset-img img').css({
        //  'display': 'block',
        //  'right': shiftBg + '%'
        //});
      }

      // show next button
      function showNextbutton() {
        $(nextButton).animate({
          right: 0
        }, timeAnimateShow, 'linear');
      }

      // show slide content
      function showElements(currentIndex, nextIndex) {

        activeSlideContent = slide.eq(currentIndex).not('.slick-cloned').find('.slide-content');
        activeSlide = slide.eq(currentIndex).not('.slick-cloned');
        nextSlide = slide.eq(nextIndex).not('.slick-cloned');

        var clone = slide.eq(currentIndex).not('.slick-cloned').find('.clone-img');


        nextSlide.css('z-index', 0);
        activeSlide.css('z-index', 1);

        // change background on next-button
        setNextSlide(nextIndex);

        clone.hide();

        // show current slide content
        $(activeSlideContent).animate({
          'opacity': 1
        }, slideMove * 0.5, 'linear', function () {
          // change logo color
          changeLogoColor(activeSlideContent);

          // show next button
          showNextbutton();
        });
      }

      // hide slide content
      function hideElements(currentIndex, nextIndex, t) {
        var clone = slide.eq(nextIndex).not('.slick-cloned').find('.clone-img');
        nextSlideImg = slide.eq(nextIndex).not('.slick-cloned').find('.asset-img img');
        nextSlideContent = slide.eq(nextIndex).not('.slick-cloned').find('.slide-content');

        $(nextSlideContent).css('opacity', 0);

        // hide next button
        $(nextButton).fadeOut(200, function () {
          $(this).css({
            display: 'block',
            right: '-10%'
          });
        });

        $(clone).animate({
          'right': '100%'
        }, t, 'linear');


        //$(nextSlideImg).animate({
        //  'right': '100%'
        //},t, 'linear');
      }
    }
  };
}(jQuery));
