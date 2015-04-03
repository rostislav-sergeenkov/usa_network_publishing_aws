;(function($) {
  Drupal.behaviors.usanetwork_tv_shows_related_items_loader = {
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
        var node_id = Drupal.settings.usanetwork_tv_show_nid;
        var url = Drupal.settings.basePath + 'ajax/usanetwork-tv-shows/get-related/'+ node_id +'/4/5';
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'json',
          success: function (data) {
            console.info(data);
          },
          error: function () {
            console.info('error');
          }
        });

      });
    }
  }
})(jQuery);
