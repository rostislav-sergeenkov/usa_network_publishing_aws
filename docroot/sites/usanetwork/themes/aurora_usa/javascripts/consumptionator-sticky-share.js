(function ($) {

  Drupal.behaviors.consumptionator_sticky_share = {
    stickySharePosition: function () {
      if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
        if ($('.right-rail-line').hasClass('bottom-visible')) {
          var stickyShare = $('.sticky-share'),
              stickyShareHeight = stickyShare.outerHeight(),
              stickySharePosition = stickyShare.offset()['top'],
              bottomLinePosition = $('#main-block-bottom-line').offset()['top'],
              bottomPadding = parseFloat(stickyShare.parent().css('padding-bottom')),
              newDesign = $('body').hasClass('show-new-design'),
              stickyShareOffsetTop = $('.sticky-share').offset()['top'] - $(window).scrollTop(),
              topCoefficient = newDesign? 195/1600: 150/1901,
              currentCoefficient = stickyShareOffsetTop/window.innerWidth;
          if((bottomLinePosition - stickySharePosition - stickyShareHeight) < bottomPadding) {
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
      if ($('body').hasClass('show-new-design') && window.matchMedia("(min-width: " + window_size_desktop_medium + "px)").matches) {
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
    gigyaSharebar: function gigyaSharebar() {
      if (typeof Drupal.gigya != 'undefined') {
        var container = $('.sticky-share');
        var $sharebar = container.find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {

          var $currentDescription = '',
              $currentImageUrl = '';
          if ($currentDescription == '' && $('meta[property="og:description"]').length > 0) {
            $currentDescription = $('meta[property="og:description"]').attr('content');
          } else if($currentDescription == '' && $('meta[name="description"]').length > 0) {
            $currentDescription = $('meta[name="description"]').attr('content');
          }
          if ($currentImageUrl == '' && $('meta[property="og:image"]').length > 0) {
            $currentImageUrl = $('meta[property="og:image"]').attr('content');
          }

          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
              sharebar.gigyaSharebar.shareButtons = 'facebook, twitter, tumblr, share';
              sharebar.gigyaSharebar.ua.linkBack = window.location.href;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = $currentImageUrl;
              sharebar.gigyaSharebar.ua.description = $currentDescription;
              if (typeof Drupal.gigya.showSharebar == 'function') Drupal.gigya.showSharebar(sharebar);
            }
          });
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

      $('body').once(function () {
        Drupal.behaviors.consumptionator_sticky_share.gigyaSharebar()
      });

      $(window).on("scroll", function () {
        Drupal.behaviors.consumptionator_sticky_share.stickySharePosition();
      });
      $(window).on("resize", function () {
        Drupal.behaviors.consumptionator_sticky_share.stickySharePosition();
      });
    }
  }
})(jQuery);

