(function($) {

  Drupal.behaviors.consumptionator_right_rail = {
    rightRailPosition: function(){
      if($('body').hasClass('page-videos-live')){
        if(!$('.video-block').hasClass('show-gallery')){
          return false;
        }
      }
      if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches) {
        var sidebar = $('.consum-sidebar'),
            offset_info_block =  $('.right-rail-line').offset()['top'] - $(window).scrollTop();
        if (!sidebar.hasClass('sticky-sidebar')) {
          sidebar.css({
            height: window.innerHeight - offset_info_block+"px"
          })
        }
        if ($(window).scrollTop() == 0) {
          setTimeout(function() {
            offset_info_block =  $('.right-rail-line').offset()['top'];
            sidebar.css({
              height: window.innerHeight - offset_info_block+"px"
            })
          }, 50);

        }
        if (sidebar.hasClass('related-visible') || sidebar.hasClass('social-visible') || sidebar.hasClass('footer-visible')) {
          if ($('.gallery-recap-block').length > 0) {
            var bottom_distance = window.innerHeight - ($('.consum-sidebar').offset()['top'] - $(window).scrollTop() + $('.consum-sidebar').height());
            var current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height();
            var min_height = $('.gallery-wrapper').height() + parseInt($('.gallery-recap-block').css("paddingBottom"));
            if (current_max_height < min_height) {
              current_max_height = min_height;
            }
            sidebar.css({
              maxHeight: current_max_height+'px'
            })
          } else {
            if ($('.right-rail-line .gallery-wrapper').length > 0){
              var bottom_distance = window.innerHeight - ($('.consum-sidebar').offset()['top'] - $(window).scrollTop() + $('.consum-sidebar').height());
              var current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height();
              var min_height = $('.right-rail-line .node-media-gallery').parent().height() - $('.right-rail-line .node-media-gallery').last().position()['top'] + parseInt($('.right-rail-line > div').css("paddingBottom"));
              if (current_max_height < min_height) {
                current_max_height = min_height;
              }
              sidebar.css({
                maxHeight: current_max_height+'px'
              })
            }
            if ($('.video-block').hasClass('show-gallery')) {
              var bottom_distance = window.innerHeight - ($('.gallery-wrapper').offset()['top'] - $(window).scrollTop() + $('.gallery-wrapper').height());
              var current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height();
              if ($('.gallery-wrapper').height() > right_rail_min_height_livepage) {
                var min_height = $('.gallery-wrapper').height();
              } else {
                var min_height = right_rail_min_height_livepage;
              }
              if (current_max_height < min_height) {
                current_max_height = min_height;
              }
              sidebar.css({
                maxHeight: current_max_height+'px'
              })
            }
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

        callbackFunction: function(elem, action){
          if(elem.hasClass('visible')){
            if(!$('.consum-sidebar').hasClass('related-visible')){
              $('.consum-sidebar').addClass('related-visible');
            }
          } else {
            if($('.consum-sidebar').hasClass('related-visible')){
              $('.consum-sidebar').removeClass('related-visible');
            }
          }
        }
      });

      $('#block-usanetwork-mpx-video-usanetwork-social-content').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function(elem, action){
          if(elem.hasClass('visible')){
            if(!$('.consum-sidebar').hasClass('social-visible')){
              $('.consum-sidebar').addClass('social-visible');
            }
          } else {
            if($('.consum-sidebar').hasClass('social-visible')){
              $('.consum-sidebar').removeClass('social-visible');
            }
          }
        }
      });
      if($('body').hasClass('page-videos-live')) {
        $('#footer').viewportChecker({
          classToAdd: 'visible',
          offset: 0,
          repeat: true,

          callbackFunction: function(elem, action){
            if($('.video-block').hasClass('show-gallery')){
              if(elem.hasClass('visible')){
                if(!$('.consum-sidebar').hasClass('footer-visible')){
                  $('.consum-sidebar').addClass('footer-visible');
                }
              } else {
                if($('.consum-sidebar').hasClass('footer-visible')){
                  $('.consum-sidebar').removeClass('footer-visible');
                }
              }
            }
          }
        });
      }

      Drupal.behaviors.consumptionator_right_rail.rightRailPosition();

      $(window).on("scroll", function() {
        Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
      });
      $(window).on("resize", function() {
        Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
      });
    }
  }
})(jQuery);
