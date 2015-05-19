(function($) {
  Drupal.behaviors.usanetwork_episodes_autoloader = {
    loadPageItems: function() {
      var showNid = $('.episode-landing-list-items-seasons').data('show-nid');

      if (showNid > 0) {
        var seasonBlocks = $('.episode-landing-list-items-season');

        if (Array.isArray(seasonBlocks)) {

        }
        else {
          Drupal.settings.lastSeasonNumber = seasonBlocks.data('season-number');

          if (Drupal.settings.lastSeasonNumber > 1) {
            Drupal.settings.newSeasonNumber = Drupal.settings.lastSeasonNumber - 1;
          }
        }
        console.log(window.location);
        var serviceUrl = '/ajax/usanetwork-tv-show-episodes/get-related/' + showNid + '/' + Drupal.settings.newSeasonNumber;

        $('.ajax-load-block .load-more-link a').after('<div class="load-more-loader"></div>');
        $.ajax({
          type: 'GET',
          url: serviceUrl,
          dataType: 'json',
          success: function (data) {
            $('.episode-landing-list-items-seasons').append(data.rendered);
          },
          error: function () {
            console.info('error');
          }
        });
      }
    },
    attach: function(context, settings) {
      $(document).ready(function() {
        //@TODO: write action trigger for Drupal.behaviors.usanetwork_episodes_autoloader.loadPageItems();
      });
    }
  }
})(jQuery);
