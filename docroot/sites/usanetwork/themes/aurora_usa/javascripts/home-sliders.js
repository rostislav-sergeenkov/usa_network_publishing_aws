(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {

      // vars
      var aspotSlider = null,
          slidesSettings = [],
          dataShiftPercent,
          dataImgSrc,
          timer_id,
          timer_id_animate,
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
          startAuto,
          slideMove = sliderSpeed * 0.1; // default value

      // check count slides before init
      if (slide.length === 1) {
        // change logo color
        changeLogoColor(slide.find('.slide-content'));
        return false;
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
          showNextbutton(nextIndex);

        })

            // init slider
            .slick({
              //adaptiveHeight: true,
              autoplay: true,
              autoplaySpeed: 6000,
              cssEase: 'linear',
              easing: 'linear',
              infinite: true,
              //lazyLoad: 'ondemand',
              //lazyLoad: 'progressive',
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 1000,

              // controls
              nextArrow: nextButton,
              prevArrow: ''
            })

            // On before slide change
            .on('afterChange', function (event, slick, currentSlide) {
              console.info('afterChange');

              var nextSlideIndex = currentSlide + 1;

              if (nextSlideIndex > (slick.$slides.length - 1)) {
                nextSlideIndex = 0;
              }

              // show next button
              showNextbutton(nextSlideIndex);


              // change logo color
              changeLogoColor(slide.eq(currentSlide).find('.slide-content'));
            })

            // On before slide change
            .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
              console.info('beforeChange');
              // remove loader
              $(aspotBlock).once(function () {
                $(this).addClass('load');
              });

              hideNextbutton();
            });
        // end init slider

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

      // hide next button
      function hideNextbutton() {
        $(nextButton).animate({
          right: '-10%'
        }, 300);
      }

      // show next button
      function showNextbutton(nextIndex) {

        // change background on next-button
        changeBgNextButton(nextIndex);
        $(nextButton).animate({
          right: 0
        }, 600);
      }



    }
  };
}(jQuery));
