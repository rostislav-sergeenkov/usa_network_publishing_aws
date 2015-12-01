(function($) {

  Drupal.behaviors.usanetwork_consumptionator_episode = {
    rightRailPosition: function(){
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
        if (sidebar.hasClass('related-visible')) {
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

      Drupal.behaviors.usanetwork_consumptionator_episode.rightRailPosition();

      $(window).on("scroll", function() {
        Drupal.behaviors.usanetwork_consumptionator_episode.rightRailPosition();
      });
      $(window).on("resize", function() {
        Drupal.behaviors.usanetwork_consumptionator_episode.rightRailPosition();
      });
    }
  }
})(jQuery);
