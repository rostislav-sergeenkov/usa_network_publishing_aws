(function($) {

  var counter = 0;

  Drupal.behaviors.usanetwork_blog_posts_autoloader = {
    loadPageItems: function(eventClick) {
      var nodeNid = $('.landing-list-items-all').data('node-nid'),
          click = eventClick || '',
          offset = $('.ajax-load-block > .landing-list-items-one-item').length;

      if (nodeNid > 0) {

        var serviceUrl = '/ajax/usanetwork-blog-posts/get-related/' + nodeNid + '/' + offset;
        $('.ajax-load-block .load-more-link a').after('<div id="load-more-loader-js"></div>');

        addSpinJs('load-more-loader-js');

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

            if (data.overlimited == false) {
              $('.ajax-load-block .load-more-link a').removeClass('disabled');
            } else {
              $('#footer > .region-footer').removeClass('hidden');
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
      $('#block-usanetwork-consumptionator-post-usa-landing-blog-post-list-block').click( function(e){
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
