/* readme

 dependency:
 velocityjs: '1.2.2'
 VelocityJS - VelocityJS.org
 
 */

var USAN = USAN || {};

(function ($) {

  //================================
  // usa to top button
  //================================
  function initUsaScrollToTop() {
    
    var $htmlBody = $("html, body"),
        $toTop = $('#usa-to-top'),
        scrollEasing = 'easeInOutQuad',
        scrollOffset = 0,
        scrollDuration = 3000;

    USAN.scrollToTop = false;

    $toTop.on('click', function (e) {

      var target = $(e.target);
      
      USAN.scrollToTop = true;
      
      $htmlBody.animate({ scrollTop: scrollOffset }, scrollDuration, scrollEasing, function () {
        USAN.scrollToTop = false;
      });

      // if($.fn.hasOwnProperty('velocity')) {
      //   $htmlBody.velocity("scroll", {
      //     duration: scrollDuration,
      //     easing: scrollEasing,
      //     offset: scrollOffset
      //   });
      // } else {
      //   $htmlBody.animate({ scrollTop: scrollOffset }, scrollDuration, scrollEasing);
      // }
    });
  }

  $(document).ready(function () {
    initUsaScrollToTop();
  });

})(jQuery);
