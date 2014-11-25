// FLEXSLIDER for homepage
(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {

      USAN = {};
      USAN.aspot = (function () {

        var hideContent = function(selector) {
          $(selector).css({
            'opacity': 0
          });
        };

        var animateContent = function(element) {
          $(element).animate({
            'opacity': '+=1'
          }, 500)
        };

        var showFocusSlide = function(el, slide, old, active) {
          var index = active + 1,
              nextSlideInner = el.get(0).children[index].children[0],
              nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

          setTimeout(function() {
            animateContent(nextSlideContent);
          }, 600);

          var moveIt = function(index) {
            var nextSlideInner = el.get(0).children[index + 1].children[0],
                nextSlideImg = $(nextSlideInner).find('img').get(0),
                shiftPercent = parseInt($(nextSlideImg).attr('data-shift-percent'));

            shiftPercent = ((shiftPercent != 'undefined') || (shiftPercent != '')) ? shiftPercent : 0;

            $(nextSlideImg).css('margin-left', '-' + shiftPercent + '%');
            $(nextSlideInner).css('width', parseInt($(window).width())).animate({
              'margin-left': '-=10%'
            }, 600, 'easeOutBack', function() {
              $('.next-button').fadeIn(500).removeClass('disabled');
            });
          };

          setTimeout(function() {
            moveIt(index);
          }, 4000);
        };

        var hideFocusSlide = function(el, slide, old, active) {
          var index = old + 1,
              nextSlideInner = el.get(0).children[index + 1].children[0],
              nextSlideContent = $(nextSlideInner).find('.slide-content').get(0);

          hideContent(nextSlideContent);

          var moveIt = function(index) {
            var nextSlideInner = el.get(0).children[index + 1].children[0],
                nextSlideImg = $(nextSlideInner).find('img').get(0);

            $(nextSlideImg).animate({
              'margin-left': '0'
            }, 800, null);
            $(nextSlideInner).css('width', parseInt($(window).width())).animate({
              'margin-left': '0'
            }, 800, null);

            $('.next-button').fadeOut(200).addClass('disabled');
          };

          moveIt(index);
        };

        var options = {
          pager: false,
          controls: false,
          auto: true,
          autoHover: true,
          speed: 1000,
          pause: 10000,
          useCSS: false,
          onSlideBefore: hideFocusSlide,
          onSlideAfter: showFocusSlide,
          onSliderLoad: showFocusSlide
        };

        var init = function (selector) {
          if ($(selector).length) {
            return $(selector).bxSlider(options);
          }

          return 0;
        };

        return {
          init: init
        }
      })();

      $(window).load(function(){
        var aspot = USAN.aspot.init('.slider');

        $('.next-button').click(function() {
          aspot.goToNextSlide();
        });

        $('.next-button').hide().addClass('disabled');

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
