(function($) {

  var counter = 0;

  Drupal.behaviors.usanetwork_episodes_autoloader = {
    loadPageItems: function(eventClick) {
      var showNid = $('.landing-list-items-all').data('show-nid'),
          click = eventClick || '';

      if (showNid > 0) {
        Drupal.settings.lastSeasonNumber = $('.landing-list-items-all .landing-list-items-one-item').last().data('season-number');

        if (Drupal.settings.lastSeasonNumber > 1) {
          Drupal.settings.newSeasonNumber = Drupal.settings.lastSeasonNumber - 1;
        }

        var serviceUrl = '/ajax/usanetwork-tv-show-episodes/get-related/' + showNid + '/' + Drupal.settings.newSeasonNumber;

        $('.ajax-load-block .load-more-link a').after('<div id="load-more-loader-js"></div>');

        addSpinJs('load-more-loader-js', 'consumptionator-page', '#ffffff');

        $.ajax({
          type: 'GET',
          url: serviceUrl,
          dataType: 'json',
          success: function (data) {
            $('.ajax-load-block .load-more-link').before(data.rendered);
            $('#load-more-loader-js').remove();

            Drupal.behaviors.mpsAdvert.ajaxLoadBlock();

            counter = counter + 1;

            if(click === "click") {
              Drupal.behaviors.omniture_tracking.infiniteScroll(counter, click);
            } else {
              Drupal.behaviors.omniture_tracking.infiniteScroll(counter);
            }

            if (typeof window.picturefill != 'undefined') {
              window.picturefill();
            }

            if (Drupal.settings.newSeasonNumber != 1) {
              $('.ajax-load-block .load-more-link a').removeClass('disabled');
            } else {
              $('#footer > .region-footer').removeClass('hidden');
              $('.ajax-load-block').addClass('infinity-finished');
            }
          },
          error: function () {
            Drupal.behaviors.usanetwork_tv_shows_related_items_loader.ajaxRelatedError();
          }
        });
      }
    },
    attach: function (context, settings) {
      $('#block-usanetwork-episodes-usa-landing-tvep-list-block').click( function(e){
        var target = $(e.target);
        if(target.hasClass('open-description')){
          var current_item = target.closest('.episode-landing-list-item');
          if(current_item.hasClass('active')){
            current_item.removeClass('active');
          } else {
            current_item.addClass('active');
          }
        }
      });
    }
  }
})(jQuery);
