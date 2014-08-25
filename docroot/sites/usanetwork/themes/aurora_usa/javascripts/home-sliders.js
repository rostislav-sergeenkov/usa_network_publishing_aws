// FLEXSLIDER for homepage
(function ($) {
  Drupal.behaviors.homeSlides = {
    attach: function (context, settings) {


      $mainslider = $('#main-slider');
      $secondaryslider = $('.secondary-slider');

      $slideshow = (settings.homeSlides.slideshow !== null)? settings.homeSlides.slideshow : false;
      $slideshowSpeed = (settings.homeSlides.slideshowSpeed !== null)? settings.homeSlides.slideshowSpeed : 7000;
      $touch = true;
      if ($mainslider.find('li').length <= 1){
        $touch = false;
      }
      $(document).ready(function() {

        $mainslider.flexslider({
          animation: 'slide',
          controlNav: true,
          directionNav: (!Modernizr.touch),
          slideshow: $slideshow,
          slideshowSpeed: $slideshowSpeed,
          pauseOnHover: true,
          touch: $touch,
          before: function(slider) {
            var target = slider.animatingTo,
              currentSlide = slider.currentSlide;
            $secondaryslider.each(function (index, element) {
              var flexslider = $(element).data('flexslider');
              // Setting the animation direction of the secondary slider to be the
              // same as the primary slider.
              // but ONLY if we have more than one list item
              // else the main slider breaks
              if ($(this).find('li').length > 1) {
                flexslider.direction = slider.direction;
                flexslider.flexAnimate(target, true);
              }
            });
          }
        });
        $secondaryslider.flexslider({
          animation: 'slide',
          controlNav: false,
          directionNav: false,
          slideshow: false,
          touch: false
        });
      });

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
