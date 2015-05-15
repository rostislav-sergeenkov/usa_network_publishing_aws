// FLEXSLIDER for homepage
(function ($) {
  Drupal.behaviors.homeSlides = {
    _timeVar: null,
    attach: function (context, settings) {

      USAN.aspotSlider = {};

      var slideshowAutoplay,
          slideshowSpeed = 6000,
          sliderAuto = true,
          slideMove = slideshowSpeed * 0.40;

      if (Drupal.settings.sliderAspot) {
        slideshowAutoplay = Drupal.settings.sliderAspot.slideshowAutoplay;
        slideshowSpeed = Drupal.settings.sliderAspot.slideshowSpeed;

        if (slideshowSpeed <= 0) {
          slideshowSpeed = 6000;
        } else {
          slideMove = slideshowSpeed * 0.40;
        }

        if (slideshowAutoplay === 1) {
          sliderAuto = true;
        } else if (slideshowAutoplay === 0) {
          sliderAuto = false;
        }
      }

      var hideContent = function (selector) {
        $(selector).css({
          'opacity': 0
        });
      };

      var changeLogoColor = function (element) {
        var logo = $('.home-logo');
        var show = $(element).closest('.node').attr('data-show');
        var old_show = logo.attr('data-show');
        if (old_show) {
          logo.removeClass(old_show).addClass(show).attr('data-show', show);
        } else {
          logo.addClass(show).attr('data-show', show);
        }
      };

      var animateContent = function (element) {
        changeLogoColor(element);
        $(element).animate({
          'opacity': 1
        }, 500)
      };

      var showFocusSlide = function (el, slide, old, active) {
        var index = active + 1,
            nextSlideInner = el.get(0).children[index].children[0],
            nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

        USAN.aspotSlider.animateTimeout = setTimeout(function () {
          animateContent(nextSlideContent);
        }, 600);

        var moveIt = function (index) {
          var nextSlideInner = el.get(0).children[index + 1].children[0],
              nextSlideImg = $(nextSlideInner).find('img').get(0),
              nextSlideOffset = $(nextSlideInner).find('.offset-data').get(0),
              shiftPercent = parseInt($(nextSlideOffset).attr('data-shift-percent'));
          shiftPercent = ((shiftPercent != 'undefined') || (shiftPercent != '')) ? shiftPercent : 0;

          $(nextSlideImg).css('margin-left', shiftPercent + '%');
          $(nextSlideInner).find('.usanetwork-aspot').css('opacity', 0.5);
          $(nextSlideInner).css('width', parseInt($(window).width())).animate({
            'margin-left': '-=10%'
          }, 600, 'easeOutBack', function () {
            $('.next-button').fadeIn(500).removeClass('disabled');
          });
        };

        USAN.aspotSlider.showTimeout = setTimeout(function () {
          moveIt(index);
        }, slideMove);
      };

      var hideFocusSlide = function (el, slide, old, active) {
        var index = old + 1,
            nextSlideInner = el.get(0).children[index + 1].children[0],
            nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

        var moveIt = function (index) {
          var nextSlideInner = el.get(0).children[index + 1].children[0],
              nextSlideImg = $(nextSlideInner).find('img').get(0);
          $(nextSlideInner).find('.usanetwork-aspot').css('opacity', 1);
          $(nextSlideImg).animate({
            'margin-left': '0'
          }, 800, null);
          $(nextSlideInner).animate({
            'margin-left': '0'
          }, 800, null).css('width', parseInt($(window).width()));

          $('.next-button').fadeOut(200).addClass('disabled');
        };

        hideContent(nextSlideContent);
        moveIt(index);
      };

      var initSlider = function (options) {
        var settings = $.extend({
          pager: false,
          controls: false,
          auto: sliderAuto,
          autoHover: true,
          speed: 1000,
          pause: slideshowSpeed,
          useCSS: false,
          preloadImages: 'all',
          onSlideBefore: hideFocusSlide,
          onSlideAfter: showFocusSlide,
          onSliderLoad: function (el, slide, old, active) {
            var first_slide = $('#main-slider-wrapper .slide').not($('.slide.bx-clone')).get(0);

            changeLogoColor($(first_slide).find('.slide-content'));
            showFocusSlide(el, slide, old, active);
          }
        }, options);

        clearTimeout(USAN.aspotSlider.showTimeout);
        clearTimeout(USAN.aspotSlider.animateTimeout);

        if (window.innerWidth <= 640) {
          delete settings.onSlideBefore;
          settings.onSlideAfter = function (el, slide) {
            changeLogoColor(slide.find('.slide-content'));
          };
          settings.onSliderLoad = function () {
            var first_slide = $('#main-slider-wrapper .slide').not($('.slide.bx-clone')).get(0);
            changeLogoColor($(first_slide).find('.slide-content'));
          };
        }

        return $('.slider').bxSlider(settings);
      };

      var aspotSlider = null;

      $(window).load(function () {
        if ($('.block-usanetwork-aspot .slide').length > 1) {
          aspotSlider = initSlider();

          $('.next-button')
            .hide()
            .addClass('disabled')
            .click(function () {
              aspotSlider.goToNextSlide();
            });
        }
      });

      $(window).bind('resize', function () {
        if ($('.block-usanetwork-aspot .slide').length > 1) {
          $('.next-button').hide().addClass('disabled');
          aspotSlider.stopAuto();
          clearTimeout(Drupal.behaviors.homeSlides._timeVar);

          Drupal.behaviors.homeSlides._timeVar = setTimeout(function () {
            var currentSlide = aspotSlider.getCurrentSlide();

            aspotSlider.destroySlider();
            $('.slider .wrp, .slider .full-image').stop().css({'margin-left': '0'});

            Drupal.behaviors.homeSlides.aspotSlider = aspotSlider = initSlider();
            aspotSlider.startAuto();
          }, 500);

          $('.slider .wrp').attr('style', '');
        }
      });

      //old code
      // A-SPOT VIDEOS
      var isIE8 = 0;
      var isSafari5 = 0;
      var aspotVideoAgent = navigator.userAgent.toLowerCase();
      if (aspotVideoAgent.indexOf('msie 8') != -1) {
        isIE8 = 1;
      }
      if (aspotVideoAgent.indexOf('safari') != -1 && aspotVideoAgent.indexOf('version/5') != -1) {
        isSafari5 = 1;
      }
      // Set default a-spot video values
      var aspotVideoEnabled = 0;
      var aspotVideoMp4VideoUrl = '';
      var aspotVideoWebmVideoUrl = '';

      // Exclude some browsers
      if (!isIE8 && !isSafari5) {
        function AspotVideo(mp4, webm) {
          if (!(this instanceof arguments.callee)) {
            return new AspotVideo(mp4, webm);
          }
          this.mp4 = mp4;
          this.webm = webm;
        }

        var aspotVideos = {};
        if (Drupal.settings.aspotSettings) {
          var show = Drupal.settings.aspotSettings.show;
          var mp4_url = Drupal.settings.aspotSettings.mp4_url;
          var webm_url = Drupal.settings.aspotSettings.webm_url;
          aspotVideos[show] = {};
          aspotVideos[show] = AspotVideo(mp4_url, webm_url);
        }
        var aspotVideoBeingShown = '';
        if (aspotVideos.hasOwnProperty(show)) {
          var avTemp = aspotVideos[show];
          if (avTemp.mp4 != '' && avTemp.webm != '') {
            aspotVideoEnabled = 1;
            aspotVideoMp4VideoUrl = avTemp.mp4;
            aspotVideoWebmVideoUrl = avTemp.webm;
            aspotVideoBeingShown = show;
          }
        }
        usa_debug('aspotVideoEnabled: ' + aspotVideoEnabled + '\naspotVideoBeingShown: ' + aspotVideoBeingShown + '\naspotVideoMp4VideoUrl: ' + aspotVideoMp4VideoUrl + '\naspotVideoWebmVideoUrl: ' + aspotVideoWebmVideoUrl);
      }

      if (typeof aspotVideoEnabled != 'undefined' && aspotVideoEnabled && !usa_deviceInfo.smartphone && !usa_deviceInfo.mobileDevice) {
        var aspotVideoPauseFlexslider = function (slider) {
          usa_debug('aspotVideoPauseFlexslider()');
          if (typeof $mainslider.flexslider === 'function') {
            // if we don't put a timeout here, the flexslider control
            // nav ("the dots") never appear
            setTimeout(function () {
              usa_debug("pausing flexslider");
              slider.flexslider("pause");
              aspotVideoResumeFlexsliderPlay(slider);
            }, 1000);
          }
          else {
            setTimeout("aspotVideoPauseFlexslider(" + slider + ")", 500);
          }
        }

        var aspotVideoResumeFlexsliderPlay = function (slider) {
          usa_debug("aspotVideoResumeFlexsliderPlay()");
          $('#aspot-video').bind('ended', function () {
            usa_debug("video ended");
            slider.css('opacity', 1);
            $('#aspot-video-container').animate({'opacity': 0}, 400, function () {
              slider.flexslider('play');
              $(this).remove();
            })
          });
        }

        var aspotVideoDone = 0;
        var aspotVideoShow = function () {
          usa_debug('aspotVideoShow()');
          if (!aspotVideoDone) { //  && $('#aspot-video-container').html() !== '') {
            var aspotVideoTag = '<video id="aspot-video" width="100%" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            if (aspotVideoAgent.indexOf('msie') != -1) {
              var aspotVideoWidth = $('#main-slider').width();
              var aspotVideoHeight = $('#main-slider').height();
              aspotVideoTag = '<video id="aspot-video" width="' + aspotVideoWidth + '" height="' + aspotVideoHeight + '" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            }
            $('#aspot-video-container').html(aspotVideoTag).show();
            aspotVideoDone = 1
          }
          else {
            setTimeout(aspotVideoShow, 500);
          }
        }

        jQuery(document).ready(function () {
          $mainslider.css('opacity', 0);
          aspotVideoShow();
          aspotVideoPauseFlexslider($mainslider);
        });
      } // A-SPOT VIDEOS

    }
  };

}(jQuery));
