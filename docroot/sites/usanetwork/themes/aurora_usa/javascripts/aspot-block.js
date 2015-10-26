(function ($) {

  Drupal.behaviors.ajax_aspot = {
    initHomeAspot: function () {
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
      // elements
          stickyMenu = $('.region-header'),
          aspotBlock = $('.block-usanetwork-aspot'),
          aspotBlockImg = aspotBlock.find('img'),
          nextButton = $('.block-usanetwork-aspot .next-button'),
          nextButtonWrapper = $('.block-usanetwork-aspot .next-button-wrapper'),
          slider = $('.block-usanetwork-aspot .slider-container'),
          slide = $('.block-usanetwork-aspot .slide'),
      // settings
          sliderAutoplay,
          sliderSpeed = 6000, // default value
          startAuto = true,
          slideMove = sliderSpeed * 0.1, // default value
          slideMoveSpeed = 800,
      // name animation
          nameAnimation = 'linear', // default animation
          settings = Drupal.settings,
          counterImg = 0;

      // check count slides before init
      if (slide.length === 1) {
        aspotBlockImg.load(function () {
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

        // set autoplay true/false
        if (typeof _AT_Admin != 'undefined' && _AT_Admin == 1) {
          startAuto = false;
        } else if (sliderAutoplay === 1) {
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

      // Start init slider
      // On init slide change
      slider
          .on('init', function (event, slick) {

            // start next button
            nextButton.addClass('ready');

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

            var nextSlideIndex = currentSlide + 1;

            // check next slide index
            if (nextSlideIndex > (slick.$slides.length - 1)) {
              nextSlideIndex = 0;
            }

            // check sticky header & slider pause
            switchSlider();

            // show slide content
            showElements(currentSlide, nextSlideIndex);
          })

          // On before slide change
          .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            // hide slide content
            hideElements(currentSlide, nextSlide);
          })

          // On swipe
          .on('swipe', function (event, slick, direction) {

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

      // event when load first slide img
      var firstImg = slide.eq(0).not('.slick-cloned').find('img');
      firstImg.load(function () {
        slide.eq(0).not('.slick-cloned').find('.slide-content, .slide-content .aspot-draggable-element').show();
      });

      //start autoplay
      aspotBlockImg.load(function () {
        counterImg = counterImg + 1;

        if (aspotBlockImg.length === counterImg) {
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
            switchSlider();
          }, 600, 'load page'); // dependence from stickyHeader: timeout = 500

          // fix autoplay when click next button
          nextButton.on('click', function () {
            if (!$(this).hasClass('disable')) {
              // stop auto play
              stopAutoplay();
            }
          });
        }
      });

      // event on hover
      slider
          .mouseover(function () {
            // stop auto play
            stopAutoplay();
          })
          .mouseout(function () {
            // check sticky menu
            switchSlider();
          });

      // shech sticky header for autoplay on scroll
      $(window).on('scroll', function () {
        if (slide.length > 1) {
          waitForFinalEvent(function () {
            // check sticky menu
            switchSlider();
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

            // check sticky menu
            switchSlider();

          }, 500, 'aspot resize');
        }
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
      function switchSlider() {
        if (stickyMenu.hasClass('sticky-shows-submenu')) {
          if (!slider.hasClass('isStopped')) {
            slider.slick('slickPause');
            slider.addClass('isStopped')
          } else {
            return false;
          }
        } else {
          if (slider.hasClass('isStopped')) {
            if (startAuto) {
              slider.slick('slickPlay');
            }
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
          'background-position': shiftBg + '%' + ' 0'
        });

        slide.eq(nextIndex).find('.asset-img img').css('margin-left', -shiftBg + '%');
      }

      // show next button
      function showNextbutton() {

        nextButton.velocity({
          'right': '0'
        }, {
          duration: timeAnimateShow,
          easing: nameAnimation,
          complete: function (elements) {
            nextButton.removeClass('disable');
            switchSlider();
          }
        });

        //$(nextButton).animate({
        //  'right': '+=10%'
        //}, timeAnimateShow, nameAnimation, function () {
        //  $(this).removeClass('disable');
        //});
      }

      // show slide content
      function showElements(currentIndex, nextIndex) {

        // change logo color
        changeLogoColor(currentIndex);

        // for resolutions more 640 px
        if (window.innerWidth >= window_size_mobile_641) {

          activeSlideContent = slide.eq(currentIndex).not('.slick-cloned').find('.slide-content');
          activeSlide = slide.eq(currentIndex);
          nextSlide = slide.eq(nextIndex);

          // set z-index for active & next slides
          activeSlide.css('z-index', 1);
          nextSlide.css('z-index', 0);

          // change background on next-button
          setNextSlide(nextIndex);

          // show current slide content
          activeSlideContent.fadeIn(slideMove * 0.7, function () {
            // show next button
            showNextbutton();
          });
        }
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

        // for resolutions more 640 px
        if (window.innerWidth >= window_size_mobile_641) {

          nextSlideImg = slide.eq(nextIndex).find('.asset-img img');
          nextSlideContent = slide.eq(nextIndex).find('.slide-content');

          $(nextSlideContent).css('display', 'none');

          $(nextSlideImg).animate({
            'margin-left': '0'
          }, slideMoveSpeed, nameAnimation);
        }

        // hide next button
        hideNextButton();
      }
    },
    getAspot: function (url) {
      $.ajax({
        url: url,
        method: "GET"
      }).done(function (data) {

        var settings = $.parseJSON(data.settings);
        // extend settings
        $.extend(true, Drupal.settings, settings);

        // append html
        if ($('#ajax_aspot_slider').length > 0) {
          $('#ajax_aspot_slider').append(data.content);
        } else if ($('#ajax_aspot_show').length > 0) {
          $('#ajax_aspot_show').append(data.content);
        }

        // check and create images on page
        if (typeof window.picturefill != 'undefined') {
          window.picturefill();
        }

        //call back foк home page aspot slider
        if ($('#block-usanetwork-aspot-usanetwork-aspot-carousel').length > 0) {
          Drupal.behaviors.ajax_aspot.initHomeAspot();
        }

        Drupal.behaviors.usanetwork_aspot_home_page_giui.init();

      }).fail(function () {
        console.info('ajax fail');
      });
    },
    attach: function (context, settings) {

      var _self = Drupal.behaviors.ajax_aspot;

      $(document.body).once(function () {

        var _body = $('body'),
            paramsUrl = '',
            url;

        if (_body.hasClass('front')) {

          if (typeof aspot_slide != "undefined") {
            for (var key in aspot_slide) {
              var num = key.replace('slide', ''),
                  ver = aspot_slide[key];
              paramsUrl += 's' + num + 'v' + ver;
            }
          }
          url = 'ajax/usanetwork-aspot/get-aspot-carousel' + '/' + paramsUrl;

        } else if (_body.hasClass('node-type-tv-show')) {

          if (typeof aspot != "undefined") {
            paramsUrl = aspot;
          }
          url = 'ajax/usanetwork-aspot/get-aspot-show/' + settings.usanetwork_tv_show_nid + '/' + paramsUrl;
        }

        // send ajax
        _self.getAspot(url);

      });
    }
  }
})(jQuery);
