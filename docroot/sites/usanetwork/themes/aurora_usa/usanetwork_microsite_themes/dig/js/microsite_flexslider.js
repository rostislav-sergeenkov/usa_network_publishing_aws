// FLEXSLIDER for show aspot
(function ($) {
  Drupal.behaviors.micrositeAspot = {
    attach: function (context, settings) {

//      function initMicrositeAspot() {
      $('body').once('micrositeFlexslider', function () {
        $slideshow_selector = $('.microsite-section-container #show-aspot ul');
usa_debug('slideshow_selector: ');
usa_debug($slideshow_selector);
        $slideshow = (settings.showAspot.slideshow !== null)? settings.showAspot.slideshow : false;
        $slideshowSpeed = (settings.showAspot.slideshowSpeed !== null)? settings.showAspot.slideshowSpeed : 7000;
        $touch = true;
        if ($slideshow_selector.find('li').length <= 1){
          $touch = false;
        }
        $slideshow_selector
          .addClass('slides')
          .wrap('<div id="show-main-slider" class="flexslider a-spot"></div>')
          .parent()
          .flexslider({
            slideshow: $slideshow,
            slideshowSpeed: $slideshowSpeed,
            pauseOnHover: true,
            animation: 'slide',
            controlNav: true,
            directionNav: (!Modernizr.touch),
            touch: $touch
          });
        $showSlideshow = $('#show-main-slider');
      });
//      }


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

        var showAspotVideoPauseFlexslider = function () {
          usa_debug('showAspotVideoPauseFlexslider()');
          if (typeof $showSlideshow.flexslider === 'function') {
            // if we don't put a timeout here, the flexslider control
            // nav ("the dots") never appear
            setTimeout(function () {
              usa_debug("pausing flexslider");
              $showSlideshow.flexslider("pause");
              showAspotVideoResumeFlexsliderPlay();
            }, 1000);
          }
          else {
            setTimeout(showAspotVideoPauseFlexslider, 500);
          }
        }

        var showAspotVideoResumeFlexsliderPlay = function () {
          usa_debug("showAspotVideoResumeFlexsliderPlay()");
          $('#aspot-video').bind('ended', function () {
            usa_debug("video ended");
            $('#main-slider').css('opacity', 1);
            $('#aspot-video-container').animate({'opacity': 0}, 400, function () {
              $showSlideshow.flexslider('play');
              $(this).remove();
            })
          });
        }

        var showAspotVideoDone = 0;
        var showAspotVideoShow = function () {
          usa_debug('showAspotVideoShow()');
          if (!showAspotVideoDone) {
            var aspotVideoTag = '<video id="aspot-video" width="100%" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            if (aspotVideoAgent.indexOf('msie') != -1) {
              var aspotVideoWidth = $('#main-slider').width();
              var aspotVideoHeight = $('#main-slider').height();
              aspotVideoTag = '<video id="aspot-video" width="' + aspotVideoWidth + '" height="' + aspotVideoHeight + '" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            }
            $('#aspot-video-container').html(aspotVideoTag).show();
            showAspotVideoDone = 1
          }
          else {
            setTimeout(showAspotVideoShow, 500);
          }
        }

        $(document).ready(function () {
//          initMicrositeAspot();
//          $('#activeContent #main-slider').css('opacity', 0);
          showAspotVideoShow();
          showAspotVideoPauseFlexslider();
        });
      } // A-SPOT VIDEOS
    }
  };
}(jQuery));
