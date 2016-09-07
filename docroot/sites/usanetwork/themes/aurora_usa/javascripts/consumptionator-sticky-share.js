(function ($) {

  Drupal.behaviors.consumptionator_sticky_share = {
    stickySharePosition: function () {
      if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
        if ($('.right-rail-line').hasClass('bottom-visible')) {
          var stickyShare = $('.sticky-share'),
              stickyShareHeight = stickyShare.outerHeight(),
              stickySharePosition = stickyShare.offset()['top'],
              bottomLinePosition = $('#main-block-bottom-line').offset()['top'],
              bottomPadding = parseFloat(stickyShare.next().css('padding-bottom')),
              topCoefficient = 150/1901,
              currentCoefficient = ($('.sticky-share').offset()['top'] - $(window).scrollTop())/window.innerWidth;
          if((bottomLinePosition - stickySharePosition - stickyShareHeight) < bottomPadding) {
            stickyShare.css({
              bottom: bottomPadding + "px",
              position: 'absolute',
              top: 'auto'
            })
          } else {
            $('.sticky-share').removeAttr('style');
          }
          if (currentCoefficient > topCoefficient) {
            $('.sticky-share').removeAttr('style')
          }
        } else {
          $('.sticky-share').removeAttr('style');
        }
      } else {
        $('.sticky-share').removeAttr('style');
      }
    },
    attach: function (context, settings) {
      
      $('#main-block-bottom-line').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function (elem, action) {
          if (elem.hasClass('visible')) {
            if (!$('.right-rail-line').hasClass('bottom-visible')) {
              $('.right-rail-line').addClass('bottom-visible');
            }
          } else {
            if ($('.right-rail-line').hasClass('bottom-visible')) {
              $('.right-rail-line').removeClass('bottom-visible');
            }
          }
        }
      });

      $('.right-rail-line').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true
      });

      Drupal.behaviors.consumptionator_sticky_share.stickySharePosition();

      $(window).on("scroll", function () {
        Drupal.behaviors.consumptionator_sticky_share.stickySharePosition();
      });
      $(window).on("resize", function () {
        Drupal.behaviors.consumptionator_sticky_share.stickySharePosition();
      });
    }
  }
})(jQuery);

