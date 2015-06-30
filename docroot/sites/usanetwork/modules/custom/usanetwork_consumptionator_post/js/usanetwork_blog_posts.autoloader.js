(function($) {

  var counter = 0;

  Drupal.behaviors.usanetwork_blog_posts_autoloader = {
    loadPageItems: function(eventClick) {
      var showNid = $('.landing-list-items-all').data('show-nid'),
          click = eventClick || '',
          offset = $('.ajax-load-block > .landing-list-items-one-item').length;

      if (showNid > 0) {

        var serviceUrl = '/ajax/usanetwork-blog-posts/get-related/' + showNid + '/' + offset;
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

            $('#block-usanetwork-consumptionator-post-usa-landing-blog-post-list-block .open-description').unbind('click');
            $('#block-usanetwork-consumptionator-post-usa-landing-blog-post-list-block .open-description').each( function(){
              $(this).click(function(){
                var current_item = $(this).closest('.episode-landing-list-item');
                if(current_item.hasClass('active')){
                  current_item.removeClass('active');
                } else {
                  current_item.addClass('active');
                }
              });
            });

            if (data.overlimited == false) {
              $('.ajax-load-block .load-more-link a').removeClass('disabled');
            } else {
              $('#footer').removeClass('hidden');
              $('.ajax-load-block').addClass('infinity-finished');
            }
          },
          error: function () {
            console.info('error');
          }
        });
      }
    },
    attach: function (context, settings) {
      $('#block-usanetwork-consumptionator-post-usa-landing-blog-post-list-block .open-description').each( function(){
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
