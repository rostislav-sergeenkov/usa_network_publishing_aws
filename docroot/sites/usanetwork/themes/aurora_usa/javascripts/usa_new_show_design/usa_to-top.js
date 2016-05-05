/* readme

 dependency:
 velocityjs: '1.2.2'
 VelocityJS - VelocityJS.org
 
 */

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

    $toTop.on('click', function (e) {

      var target = $(e.target);

      if($.fn.hasOwnProperty('velocity')) {
        $htmlBody.velocity("scroll", {
          duration: scrollDuration,
          easing: scrollEasing,
          offset: scrollOffset
        });
      } else {
        $htmlBody.animate({ scrollTop: scrollOffset }, scrollDuration, scrollEasing);
      }
    });
  }

  $(document).ready(function () {
    initUsaScrollToTop();
  });

})(jQuery);
