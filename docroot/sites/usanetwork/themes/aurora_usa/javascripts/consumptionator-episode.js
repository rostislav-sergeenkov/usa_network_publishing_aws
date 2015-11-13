(function($) {

  Drupal.behaviors.usanetwork_consumptionator_episode = {
    rightRailPosition: function(){
      if (window.matchMedia("(min-width: 1025px)").matches) {
        var episode_sidebar = $('.consumptionator-episode-main-block .consum-sidebar'),
            offset_info_block =  $('.episode-info-main-block').offset()['top'] - $(window).scrollTop();
        if (!episode_sidebar.hasClass('sticky-sidebar')) {
          episode_sidebar.css({
            height: window.innerHeight - offset_info_block+"px"
          })
        }
        if ($(window).scrollTop() == 0) {
          setTimeout(function() {
            offset_info_block =  $('.episode-info-main-block').offset()['top'];
            episode_sidebar.css({
              height: window.innerHeight - offset_info_block+"px"
            })
          }, 50);

        }
        if (episode_sidebar.hasClass('related-visible') && $('.gallery-recap-block').length > 0 ) {
          var bottom_distance = window.innerHeight - ($('.consum-sidebar').offset()['top'] - $(window).scrollTop() + $('.consum-sidebar').height());
          var current_max_height = window.innerHeight - bottom_distance - $('.header-nav-bar').height();
          var min_height = $('.gallery-wrapper').height() + parseInt($('.gallery-recap-block').css("paddingBottom"));
          if (current_max_height < min_height) {
            current_max_height = min_height;
          }
          episode_sidebar.css({
            maxHeight: current_max_height+'px'
          })
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
      $('#block-usanetwork-episodes-usanetwork-episode-rel-content').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,

        callbackFunction: function(elem, action){
          if(elem.hasClass('visible')){
            if(!$('#block-usanetwork-episodes-usanetwork-episodes-main-block .consum-sidebar').hasClass('related-visible')){
              $('#block-usanetwork-episodes-usanetwork-episodes-main-block .consum-sidebar').addClass('related-visible');
            }
          } else {
            if($('#block-usanetwork-episodes-usanetwork-episodes-main-block .consum-sidebar').hasClass('related-visible')){
              $('#block-usanetwork-episodes-usanetwork-episodes-main-block .consum-sidebar').removeClass('related-visible');
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
