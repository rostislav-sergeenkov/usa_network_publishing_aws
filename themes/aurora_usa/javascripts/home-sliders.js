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
      if (typeof aspotVideoEnabled != 'undefined' && aspotVideoEnabled && !usa_deviceInfo.smartphone && !usa_deviceInfo.mobileDevice) {

        var aspotVideoPauseFlexslider = function(slider) {
          usa_debug('aspotVideoPauseFlexslider()');
          if (typeof $mainslider.flexslider === 'function') {
            // if we don't put a timeout here, the flexslider control
            // nav ("the dots") never appear
            setTimeout(function(){
              usa_debug("pausing flexslider");
              slider.flexslider("pause");
              aspotVideoResumeFlexsliderPlay(slider);
            }, 1000);
          }
          else {
            setTimeout("aspotVideoPauseFlexslider(" + slider + ")", 500);
          }
        }

        var aspotVideoResumeFlexsliderPlay = function(slider) {
          usa_debug("aspotVideoResumeFlexsliderPlay()");
          $('#aspot-video').bind('ended', function() {
            usa_debug("video ended");
            slider.css('opacity', 1);
            $('#aspot-video-container').animate({'opacity': 0}, 400, function(){
              slider.flexslider('play');
              $(this).remove();
            })
          });
        }

        var aspotVideoDone = 0;
        var aspotVideoShow = function() {
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

        jQuery(document).ready(function(){
          $mainslider.css('opacity', 0);
          aspotVideoShow();
          aspotVideoPauseFlexslider($mainslider);
        });
      } // A-SPOT VIDEOS


    }
  };

}(jQuery));
