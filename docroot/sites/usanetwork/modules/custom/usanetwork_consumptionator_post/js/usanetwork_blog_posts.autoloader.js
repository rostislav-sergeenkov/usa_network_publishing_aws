(function($) {

  var counter = 0;

  Drupal.behaviors.usanetwork_episodes_autoloader = {
    loadPageItems: function(eventClick) {
      var showNid = $('.episode-landing-list-items-seasons').data('show-nid'),
          click = eventClick || '';

      if (showNid > 0) {
        Drupal.settings.lastSeasonNumber = $('.episode-landing-list-items-seasons .episode-landing-list-items-season').last().data('season-number');

        if (Drupal.settings.lastSeasonNumber > 1) {
          Drupal.settings.newSeasonNumber = Drupal.settings.lastSeasonNumber - 1;
        }

        var serviceUrl = '/ajax/usanetwork-blog-posts/get-related/' + showNid + '/' +offset;

        $('.ajax-load-block .load-more-link a').after('<div class="load-more-loader"></div>');
        $.ajax({
          type: 'GET',
          url: serviceUrl,
          dataType: 'json',
          success: function (data) {
            $('.ajax-load-block .load-more-link').before(data.rendered);
            $('.ajax-load-block .load-more-link .load-more-loader').remove();

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

            $('#block-usanetwork-episodes-usa-landing-tvep-list-block .open-description').unbind('click');
            $('#block-usanetwork-episodes-usa-landing-tvep-list-block .open-description').each( function(){
              $(this).click(function(){
                var current_item = $(this).closest('.episode-landing-list-item');
                if(current_item.hasClass('active')){
                  current_item.removeClass('active');
                } else {
                  current_item.addClass('active');
                }
              });
            });

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
    attach: function (context, settings) {
      $('#block-usanetwork-episodes-usa-landing-tvep-list-block .open-description').each( function(){
        $(this).click(function(){
          var current_item = $(this).closest('.episode-landing-list-item');
          if(current_item.hasClass('active')){
            current_item.removeClass('active');
          } else {
            current_item.addClass('active');
          }
        });
      });
    }
  }
})(jQuery);
