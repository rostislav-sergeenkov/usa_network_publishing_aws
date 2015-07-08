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
        slider
            .on('init', function (event, slick) {

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

              if (window.innerWidth < window_size_mobile_641) {
                return false;
              }

              var nextSlideIndex = currentSlide + 1;

              // check next slide index
              if (nextSlideIndex > (slick.$slides.length - 1)) {
                nextSlideIndex = 0;
              }

              //
              if (stickyMenu.hasClass('sticky-shows-submenu')) {
                slider.slick('slickPause');
              } else {
                slider.slick('slickPlay');
              }

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

          clearTimeout(timer_id);

          timer_id = setTimeout(function () {
            // check sticky menu
            svitchSlider();
          }, 600); // dependence from stickyHeader: timeout = 500

          // fix autoplay when click next button
          $(nextButton).on('click', function () {
            if (!$(this).hasClass('disable')) {
              slider.slick('slickPause');
            }
          });
        });

        // event on hover
        slider
            .mouseover(function () {
              slider.slick('slickPause');
            })
            .mouseout(function () {
              if (stickyMenu.hasClass('sticky-shows-submenu')) {
                slider.slick('slickPause');
              } else {
                slider.slick('slickPlay');
              }
            });

        // shech sticky header for autoplay on scroll
        $(window).on('scroll', function (e) {
          if (slide.length > 1) {
            clearTimeout(timer_id);
            timer_id = setTimeout(svitchSlider, 200);
          }
        });

        $(window).on('resize', function (e) {
          if (slide.length > 1) {

            // reset slide img margin-left
            resetSlide();

            slider.slick('slickPause');

            clearTimeout(timer_id);

            timer_id = setTimeout(function () {
              if (stickyMenu.hasClass('sticky-shows-submenu')) {
                slider.slick('slickPause');
              } else {
                slider.slick('slickPlay');
              }

            }, 500);
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
        changeLogoColor(activeSlideContent);

        // show current slide content
        $(activeSlideContent).animate({
          'opacity': 1
        }, slideMove * 0.5, nameAnimation, function () {
          // show next button
          showNextbutton();
        });
      }

      // hide slide content
      function hideElements(currentIndex, nextIndex) {
        nextSlideImg = slide.eq(nextIndex).find('.asset-img img');
        nextSlideContent = slide.eq(nextIndex).find('.slide-content');

        $(nextSlideContent).css('opacity', 0);

        $(nextSlideImg).animate({
          'margin-left': '0'
        }, slideMoveSpeed, nameAnimation);

        // hide next button
        $(nextButton).fadeOut(200, function () {
          $(this).addClass('disable').css({
            display: 'block',
            'right': '-10%'
          });
        });
      }
    }
  };
}(jQuery));
