(function($) {
  Drupal.behaviors.usanetwork_episodes_autoloader = {
    loadPageItems: function() {
      var showNid = $('.episode-landing-list-items-seasons').data('show-nid');

      if (showNid > 0) {
        Drupal.settings.lastSeasonNumber = $('.episode-landing-list-items-seasons .episode-landing-list-items-season').last().data('season-number');

        if (Drupal.settings.lastSeasonNumber > 1) {
          Drupal.settings.newSeasonNumber = Drupal.settings.lastSeasonNumber - 1;
        }

        var serviceUrl = '/ajax/usanetwork-tv-show-episodes/get-related/' + showNid + '/' + Drupal.settings.newSeasonNumber;

        $('.ajax-load-block .load-more-link a').after('<div class="load-more-loader"></div>');
        $.ajax({
          type: 'GET',
          url: serviceUrl,
          dataType: 'json',
          success: function (data) {
            $('.ajax-load-block .load-more-link').before(data.rendered);
            $('.ajax-load-block .load-more-link .load-more-loader').remove();

            if (typeof window.picturefill != 'undefined') {
              window.picturefill();
            }

            if (Drupal.settings.newSeasonNumber != 1) {
              $('.ajax-load-block .load-more-link a').removeClass('disabled');
            } else {
              $('#block-usanetwork-episodes-usa-landing-tvep-list-block .episode-landing-list-items-seasons').css({'margin-bottom' : '0px'});
            }
          },
          error: function () {
            console.info('error');
          }
        });
      }
    },
    attach: function(context, settings) {

    }
  }
})(jQuery);
