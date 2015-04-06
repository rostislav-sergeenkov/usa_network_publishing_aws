;(function($) {
  Drupal.behaviors.usanetwork_tv_shows_related_items_loader = {
    getItems: function() {
      var limit = 5;
      var number_ul = $('.show-latest-block > ul').length;
      var start_from = limit*number_ul;
      var url = Drupal.settings.basePath + 'ajax/usanetwork-tv-shows/get-related/'+ Drupal.settings.usanetwork_tv_show_nid +'/'+ start_from +'/'+ limit;
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
          $('.show-latest-block .load-more-link').before(data.rendered);
          $('.show-latest-block .load-more-link a').removeClass('disabled');
        },
        error: function () {
          console.info('error');
        }
      });
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

      $('.show-latest-block .load-more-link a').click(function(){
        if ($(this).hasClass('disabled')){
          return false;
        }
        $(this).addClass('disabled');
        Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
      });

      $(window).on("scroll", function() {
        var scroll_top = $(window).scrollTop(),
            load_more_offset = $('.load-more-link').offset().top;
        var additional_offset = (window.innerHeight < window_size_desktop_large)? 130: 230;
        if (load_more_offset - window.innerHeight + additional_offset - scroll_top < 0){
          if ($('.show-latest-block .load-more-link a').hasClass('disabled')){
            return false;
          }
          $('.show-latest-block .load-more-link a').addClass('disabled');
          Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
        }
      });
    }
  }
})(jQuery);
