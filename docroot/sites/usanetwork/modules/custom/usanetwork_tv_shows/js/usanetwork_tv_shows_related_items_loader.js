(function($) {
  var counter = 0;

  Drupal.behaviors.usanetwork_tv_shows_related_items_loader = {
    getItems: function(eventClick) {
      var limit = $('.ajax-load-block').data('show-items-limit') || 5;
      var show_nid = Drupal.settings.usanetwork_tv_show_nid || $('.ajax-load-block').data('show-nid') || 0;
      var number_ul = $('.ajax-load-block > ul').length;
      var negativeOffset = Drupal.settings.usanetwork_tv_show_offset || 0;
      var start_from = limit*number_ul + negativeOffset;
      var service_name = '';
      var additional_arguments = '';
      var click = eventClick || '';

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
          case 'episode-consumptionator':
            service_name = 'usanetwork-tv-episode';
            break;
          case 'videos-landing':
            service_name = 'videos-landing';
            additional_arguments = '/' + $('.ajax-load-block').data('filter-tid') + '/'
              + $('.ajax-load-block').data('sorting-column') + '/'
              + $('.ajax-load-block').data('sorting-order');
            break;
          default:
            service_name = 'usanetwork-tv-shows';
            break;
        }
      }

      var url = Drupal.settings.basePath + 'ajax/' + service_name + '/get-related/'+ show_nid +'/'+ start_from +'/'+ limit + additional_arguments;

      $('.ajax-load-block .load-more-link a').after('<div class="load-more-loader"></div>');
      $.ajax({
        type: 'GET',
        url: url,
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

          // node-type-tv-show
          if ($('body').hasClass('node-type-tv-show')) {
            var lastList = $('.ajax-load-block ul').last(),
                listElem = lastList.find('.node-usanetwork-promo');

            Drupal.behaviors.mpsSponsorShip.initSponsoredBlock(listElem, 'dark');
          }

          if (typeof window.picturefill != 'undefined') {
            window.picturefill();
          }

          if (data.overlimited == false) {
            $('.ajax-load-block .load-more-link a').removeClass('disabled');
          }
          //if (number_ul > 2) {
          //  $('.ajax-load-block .load-more-link a').addClass('disabled-infinity');
          //}
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
        var click = 'click';
        $(this).addClass('disabled');
        if ($(this).hasClass('more-episodes')){
          Drupal.behaviors.usanetwork_episodes_autoloader.loadPageItems();
        } else {
          Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems(click);
        }
      });

      $(window).on("scroll", function() {
        var scroll_top = $(window).scrollTop(),
            load_more_offset = ($('.load-more-link').offset() != null)
              ? $('.load-more-link').offset().top
              : 0;
        var additional_offset = (window.innerHeight < window_size_desktop_large)? 130: 230;
        if (load_more_offset - window.innerHeight + additional_offset - scroll_top < 0){
          if ($('.ajax-load-block .load-more-link a').hasClass('disabled') || $('.ajax-load-block .load-more-link a').hasClass('disabled-infinity')){
            return false;
          }
          $('.ajax-load-block .load-more-link a').addClass('disabled');
          if ($('.ajax-load-block .load-more-link a').hasClass('more-episodes')){
            Drupal.behaviors.usanetwork_episodes_autoloader.loadPageItems();
          } else {
            Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
          }
        }
      });
    }
  }
})(jQuery);
