// FLEXSLIDER for show aspot
(function ($) {
  Drupal.behaviors.showAspot = {
    attach: function (context, settings) {

      $('body').once('showFlexslider', function() {
        $slideshow_selector = $('#show-aspot ul');

        $slideshow = (settings.showAspot.slideshow !== null)? settings.showAspot.slideshow : false;
        $slideshowSpeed = (settings.showAspot.slideshowSpeed !== null)? settings.showAspot.slideshowSpeed : 7000;

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
            directionNav: (!Modernizr.touch)
          });
        $showSlideshow = $('#show-main-slider');
       });


        // A-SPOT VIDEOS
        if (typeof aspotVideoEnabled != 'undefined' && aspotVideoEnabled && !usa_deviceInfo.smartphone && !usa_deviceInfo.mobileDevice) {

          var showAspotVideoPauseFlexslider = function() {
            usa_debug('showAspotVideoPauseFlexslider()');
            if (typeof $showSlideshow.flexslider === 'function') {
              // if we don't put a timeout here, the flexslider control
              // nav ("the dots") never appear
              setTimeout(function(){
                usa_debug("pausing flexslider");
                $showSlideshow.flexslider("pause");
                showAspotVideoResumeFlexsliderPlay();
              }, 1000);
            }
            else {
              setTimeout(showAspotVideoPauseFlexslider, 500);
            }
          }

          var showAspotVideoResumeFlexsliderPlay = function() {
            usa_debug("showAspotVideoResumeFlexsliderPlay()");
            $('#aspot-video').bind('ended', function() {
              usa_debug("video ended");
              $('#main-slider').css('opacity', 1);
              $('#aspot-video-container').animate({'opacity': 0}, 400, function(){
                $showSlideshow.flexslider('play');
                $(this).remove();
              })
            });
          }

          var showAspotVideoDone = 0;
          var showAspotVideoShow = function() {
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

          $(document).ready(function(){
            $('#main-slider').css('opacity', 0);
            showAspotVideoShow();
            showAspotVideoPauseFlexslider();
          });
        } // A-SPOT VIDEOS


    },
  };
}(jQuery));
