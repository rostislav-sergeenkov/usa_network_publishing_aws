(function ($) {

  Drupal.behaviors.consumptionator_sticky_share = {
    stickySharePosition: function () {
      if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches && !$('html').hasClass('touch')) {
        if ($('.right-rail-line').hasClass('bottom-visible')) {
          var stickyShare = $('.sticky-share'),
              stickySharePosition = stickyShare[0].getBoundingClientRect().bottom,
              bottomLinePosition = $('#main-block-bottom-line')[0].getBoundingClientRect().top,
              bottomPadding = parseFloat(stickyShare.parent().css('padding-bottom')),
              newDesign = $('body').hasClass('show-new-design'),
              stickyShareOffsetTop = stickyShare[0].getBoundingClientRect().top,
              topCoefficient = newDesign? 195/1600: 150/1901,
              currentCoefficient = stickyShareOffsetTop/window.innerWidth;
          if((bottomLinePosition - stickySharePosition) < bottomPadding) {
            stickyShare.css({
              bottom: bottomPadding + 'px',
              left: 0,
              margin: 0,
              position: 'absolute',
              top: 'auto'
            })
          } else {
            $('.sticky-share').removeAttr('style');
          }
          if (currentCoefficient > topCoefficient) {
            $('.sticky-share').removeAttr('style');
          }
        } else {
          $('.sticky-share').removeAttr('style');
        }
      } else {
        $('.sticky-share').removeAttr('style');
      }
      if ($('body').hasClass('show-new-design') && window.matchMedia("(min-width: " + window_size_desktop_medium + "px)").matches && !$('html').hasClass('touch')) {
        if ($('.right-rail-line').hasClass('description-visible') && $('header').hasClass('off-elements') && $('.sticky-share').css('position') == 'fixed') {
          var stickyShare = $('.sticky-share'),
              leftOffset = parseFloat(stickyShare.css('left')),
              minLeft = 20;
          if (leftOffset < minLeft) {
            var leftDiff = minLeft - leftOffset;
            stickyShare.css({
              marginLeft: leftDiff + 'px'
            })
          } else {
            stickyShare.removeAttr('style');
          }
        }
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

      $('.sticky-share').parent().viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function (elem, action) {
          if (elem.hasClass('visible')) {
            if (!$('.right-rail-line').hasClass('description-visible')) {
              $('.right-rail-line').addClass('description-visible');
            }
          } else {
            if ($('.right-rail-line').hasClass('description-visible')) {
              $('.right-rail-line').removeClass('description-visible');
            }
          }
        }
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

