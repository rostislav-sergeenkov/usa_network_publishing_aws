(function ($) {
  Drupal.behaviors.aspotPage = {
    attach: function (context, settings) {

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

        var aspotVideoDone = 0;
        var aspotVideoShow = function () {
          usa_debug('aspotVideoShow()');
          if (!aspotVideoDone) { //  && $('#aspot-video-container').html() !== '') {
            var aspotVideoTag = '<video id="aspot-video" width="100%" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            if (aspotVideoAgent.indexOf('msie') != -1) {
              var aspotVideoWidth = $('#aspot-video-container').width();
              var aspotVideoHeight = $('#aspot-video-container').height();
              aspotVideoTag = '<video id="aspot-video" width="' + aspotVideoWidth + '" height="' + aspotVideoHeight + '" autoplay><source src="' + aspotVideoMp4VideoUrl + '" type="video/mp4"><source src="' + aspotVideoWebmVideoUrl + '" type="video/webm">Your browser does not support the video tag.</video>';
            }
            $('#aspot-video-container').prev().hide();
            $('#aspot-video-container').html(aspotVideoTag).show();
            aspotVideoDone = 1
          }
          else {
            setTimeout(aspotVideoShow, 500);
          }
        }
        var aspotVideoEnd = function () {
          usa_debug("aspotVideoResumeFlexsliderPlay()");
          $('#aspot-video').bind('ended', function () {
            usa_debug("video ended");
            $('#aspot-video-container').animate({'opacity': 0}, 400, function () {
              $(this).hide();
              $(this).prev().show();
            })
          });
        }

        jQuery(document).ready(function () {
          aspotVideoShow();
          aspotVideoEnd();
        });
      }

    }
  };

}(jQuery));

