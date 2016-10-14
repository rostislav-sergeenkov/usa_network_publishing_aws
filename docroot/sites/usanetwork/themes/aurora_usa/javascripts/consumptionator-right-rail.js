(function ($) {

  Drupal.behaviors.consumptionator_right_rail = {
    rightRailPosition: function () {
      if ($('body').hasClass('page-videos-live')) {
        if (!$('.video-block').hasClass('show-related')) {
          return false;
        }
      }
      if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches) {
        var sidebar = $('.consum-sidebar'),
            offset_info_block = $('.right-rail-line')[0].getBoundingClientRect().top;

        if (offset_info_block < 0) {
          offset_info_block = 0;
        }

        if (!sidebar.hasClass('sticky-sidebar')) {
          sidebar.css({
            height: window.innerHeight - offset_info_block + "px"
          })
        }

        if ($(window).scrollTop() == 0) {
          setTimeout(function () {
            sidebar.css({
              height: window.innerHeight - offset_info_block + "px"
            })
          }, 50);
        }
        if (sidebar.hasClass('related-visible') || sidebar.hasClass('social-visible') || sidebar.hasClass('footer-visible')) {
          if ($('.gallery-recap-block').length > 0) {
            var bottom_distance = window.innerHeight - sidebar[0].getBoundingClientRect().bottom,
                current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height(),
                min_height = $('.gallery-wrapper').height() + parseInt($('.gallery-recap-block').css("paddingBottom"));
            if (current_max_height < min_height) {
              current_max_height = min_height;
            }
            sidebar.css({
              maxHeight: current_max_height + 'px'
            })
          } else if ($('.right-rail-line .gallery-wrapper').length > 0) {

            var bottom_distance = window.innerHeight - sidebar[0].getBoundingClientRect().bottom,
                current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height(),
                min_height = $('.right-rail-line .node-media-gallery').parent().height() - $('.right-rail-line .node-media-gallery').last().position()['top'] + parseInt($('.right-rail-line > div').css("paddingBottom"));
            if (min_height < right_rail_min_height) {
              min_height = right_rail_min_height;
            }
            if (current_max_height < min_height) {
              current_max_height = min_height;
            }
            sidebar.css({
              maxHeight: current_max_height + 'px'
            })
          } else if ($('.video-block').hasClass('show-related')) {
            if ($('.gallery-wrapper').length > 0) {
              var relatedContent = $('.gallery-wrapper');
            } else {
              var relatedContent = $('.node-quiz');
            }
            var bottom_distance = window.innerHeight - relatedContent[0].getBoundingClientRect().bottom;
            var current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height();
            if (relatedContent.height() > right_rail_min_height) {
              var min_height = relatedContent.height();
            } else {
              var min_height = right_rail_min_height;
            }
            if (current_max_height < min_height) {
              current_max_height = min_height;
            }
            sidebar.css({
              maxHeight: current_max_height + 'px'
            })
          }
        }
      }
    },
    attach: function (context, settings) {
      /**
       * Ajax Callback for "Load More" items:
       * http://usanetwork.local/ajax/usanetwork-tv-shows/get-related/%node/%start_from/%limit
       *
       * %node - node id of TV-Show node
       * %start_from - number of items that must be ignored from the beginning
       * %limit - number of items that must be pulled
       */
      $('.related-content-block').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function (elem, action) {
          if (elem.hasClass('visible')) {
            if (!$('.consum-sidebar').hasClass('related-visible')) {
              $('.consum-sidebar').addClass('related-visible');
            }
          } else {
            if ($('.consum-sidebar').hasClass('related-visible')) {
              $('.consum-sidebar').removeClass('related-visible');
            }
          }
        }
      });

      $('#block-usanetwork-mpx-video-usanetwork-social-content').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function (elem, action) {
          if (elem.hasClass('visible')) {
            if (!$('.consum-sidebar').hasClass('social-visible')) {
              $('.consum-sidebar').addClass('social-visible');
            }
          } else {
            if ($('.consum-sidebar').hasClass('social-visible')) {
              $('.consum-sidebar').removeClass('social-visible');
            }
          }
        }
      });
      if ($('body').hasClass('page-videos-live')) {
        $('#footer').viewportChecker({
          classToAdd: 'visible',
          offset: 0,
          repeat: true,

          callbackFunction: function (elem, action) {
            if ($('.video-block').hasClass('show-related')) {
              if (elem.hasClass('visible')) {
                if (!$('.consum-sidebar').hasClass('footer-visible')) {
                  $('.consum-sidebar').addClass('footer-visible');
                }
              } else {
                if ($('.consum-sidebar').hasClass('footer-visible')) {
                  $('.consum-sidebar').removeClass('footer-visible');
                }
              }
            }
          }
        });
      }
      
      Drupal.behaviors.consumptionator_right_rail.rightRailPosition();

      $(window).on("scroll", function () {
        Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
      });
      $(window).on("resize", function () {
        Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
      });
    }
  }
})(jQuery);
