(function($) {
  Drupal.behaviors.usanetwork_tv_shows_related_items_loader = {
    getItems: function() {
      var limit = $('.ajax-load-block').data('show-items-limit') || 5;
      var show_nid = Drupal.settings.usanetwork_tv_show_nid || $('.ajax-load-block').data('show-nid') || 0;
      var number_ul = $('.ajax-load-block > ul').length;
      var negativeOffset = Drupal.settings.usanetwork_tv_show_offset || 0;
      var start_from = limit*number_ul + negativeOffset;
      var service_name = '';

      if (typeof Drupal.settings.usanetwork_tv_show_page_context != 'undefined') {
        switch (Drupal.settings.usanetwork_tv_show_page_context) {
          case 'consumptionator':
            service_name = 'usanetwork-mpx-video';
            break;
          case 'showpage':
            service_name = 'usanetwork-tv-shows';
            break;
          case 'gallery-consumptionator':
            service_name = 'usanetwork-media-gallery';
            break;
          case 'characters-consumptionator':
            service_name = 'usanetwork-characters';
            break;
          default:
            service_name = 'usanetwork-tv-shows';
            break;
        }
      }

      var url = Drupal.settings.basePath + 'ajax/' + service_name + '/get-related/'+ show_nid +'/'+ start_from +'/'+ limit;

      $('.ajax-load-block .load-more-link a').after('<div class="load-more-loader"></div>');
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
          $('.ajax-load-block .load-more-link').before(data.rendered);
          $('.ajax-load-block .load-more-link .load-more-loader').remove();

          if (typeof window.picturefill != 'undefined') {
            window.picturefill();
          }

          if (data.overlimited == false) {
            $('.ajax-load-block .load-more-link a').removeClass('disabled');
          }
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

      $('.ajax-load-block .load-more-link a').click(function(){
        if ($(this).hasClass('disabled')){
          return false;
        }
        $(this).addClass('disabled');
        Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
      });

      $(window).on("scroll", function() {
        var scroll_top = $(window).scrollTop(),
            load_more_offset = ($('.load-more-link').offset() != null)
              ? $('.load-more-link').offset().top
              : 0;
        var additional_offset = (window.innerHeight < window_size_desktop_large)? 130: 230;
        if (load_more_offset - window.innerHeight + additional_offset - scroll_top < 0){
          if ($('.ajax-load-block .load-more-link a').hasClass('disabled')){
            return false;
          }
          $('.ajax-load-block .load-more-link a').addClass('disabled');
          Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
        }
      });
    }
  }
})(jQuery);
