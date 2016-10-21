(function($) {
  var counter = 0;

  Drupal.behaviors.usanetwork_tv_shows_related_items_loader = {
    ajaxRelatedError: function() {
      console.info('error');
      $('#load-more-loader-js').remove();
      if(!$('.ajax-load-block').hasClass('infinity-finished')) {
        $('.ajax-load-block .load-more-link a').removeClass('disabled');
      }
    },
    getItems: function(eventClick) {
      var limit = $('.ajax-load-block').data('show-items-limit') || 5;
      var nid = Drupal.settings.usanetwork_tv_show_nid || $('.ajax-load-block').data('show-nid') || Drupal.settings.usanetwork_movie_nid || 0;
      var node_nid = $('.ajax-load-block').data('node-nid') || 0;
      var file_fid = $('.ajax-load-block').data('file-fid') || 0;
      var number_ul = $('.ajax-load-block > ul').length;
      var negativeOffset = Drupal.settings.usanetwork_tv_show_offset || Drupal.settings.usanetwork_movie_offset || Drupal.settings.usanetwork_all_consumpt_post_offset || 0;
      var start_from = limit*number_ul + negativeOffset;
      var service_name = '';
      var additional_arguments = '';
      var click = eventClick || '';
      var page_context = Drupal.settings.usanetwork_tv_show_page_context || Drupal.settings.usanetwork_movie_page_context || Drupal.settings.usanetwork_all_consumpt_post_page_context;
      if (typeof page_context != 'undefined') {
        switch (page_context) {
          case 'consumptionator':
            service_name = file_fid;
            additional_arguments = '/file';
            break;
          case 'consumptionator_node':
            service_name = node_nid;
            break;
          case 'showpage':
            service_name = 'usanetwork-tv-shows';
            break;
          case 'photos-landing':
            service_name = 'usanetwork-photos-landing';
            additional_arguments = '/' + $('.ajax-load-block').data('filter-tid') + '/'
              + $('.ajax-load-block').data('sorting-order');
            break;
          case 'explore-landing':
            service_name = 'usanetwork-explore-landing';
            additional_arguments = '/' + $('.ajax-load-block').data('filter-tid') + '/'
              + $('.ajax-load-block').data('sorting-order');
            break;
          case 'videos-landing':
            service_name = 'videos-landing';
            additional_arguments = '/' + $('.ajax-load-block').data('filter-tid') + '/'
              + $('.ajax-load-block').data('sorting-column') + '/'
              + $('.ajax-load-block').data('sorting-order');
            break;
          case 'all-shows-landing':
            service_name = 'all-shows-landing';
            additional_arguments = '/' + $('.ajax-load-block').data('sorting-order');
            break;
          case 'moviepage':
            service_name = 'usanetwork-movie';
            break;
          case 'consumptionator_news':
            service_name = 'news';
            break;
          case 'all-movies':
            service_name = 'all-movies';
            break;
          default:
            service_name = 'usanetwork-tv-shows';
            break;
        }
      }

      $('.usa-wrap .ajax-load-block .node-usanetwork-promo a').unbind('click');
      if (nid == 0) {
        var url = Drupal.settings.basePath + 'ajax/' + service_name + '/get-related/' + start_from +'/'+ limit + additional_arguments;
      }
      else {
        var url = Drupal.settings.basePath + 'ajax/' + service_name + '/get-related/'+ nid +'/'+ start_from +'/'+ limit + additional_arguments;
      }
      $('.ajax-load-block .load-more-link a').after('<div id="load-more-loader-js"></div>');
      var bodyClass = ($('body').hasClass('show-new-design'))? 'show-new-design': 'consumptionator-page';
      addSpinJs('load-more-loader-js', bodyClass, '#ffffff');

      $.ajax({
        type: 'GET',
        url: url,
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

          // Promo click omniture
          $('.usa-wrap .ajax-load-block .node-usanetwork-promo a').once('omniture-tracking', function() {
            $(this).on('click', function (e) {
              e.preventDefault();
              var self = $(this);
              Drupal.behaviors.omniture_tracking.globalPromoClick(self);
            });
          });

          if (typeof window.picturefill != 'undefined') {
            window.picturefill();
          }

          if (data.overlimited == false) {
            $('.ajax-load-block .load-more-link a').removeClass('disabled');
          } else {
            $('#footer > .region-footer').removeClass('hidden');
            $('.ajax-load-block').addClass('infinity-finished');
          }
          //if (number_ul > 2) {
          //  $('.ajax-load-block .load-more-link a').addClass('disabled-infinity');
          //}
        },
        error: function () {
          Drupal.behaviors.usanetwork_tv_shows_related_items_loader.ajaxRelatedError();
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
      $("#footer").once('hide-footer', function() {
        if(!$('#footer > .region-footer').hasClass('hidden') && ($('.ajax-load-block .load-more-link a').length > 0)) {
          $('#footer > .region-footer').addClass('hidden');
        }
      });
      
      $('.ajax-load-block .load-more-link a').click(function(){
        if ($(this).hasClass('disabled')){
          return false;
        }
        var click = 'click';
        $(this).addClass('disabled');
        if ($(this).hasClass('more-episodes')){
          Drupal.behaviors.usanetwork_episodes_autoloader.loadPageItems(click);
        } else if($('.ajax-load-block .load-more-link a').hasClass('more-posts')) {
          Drupal.behaviors.usanetwork_blog_posts_autoloader.loadPageItems(click);
        } else {
          Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems(click);
        }
      });

      $(window).on("scroll", function() {
        var scroll_top = $(window).scrollTop(),
            load_more_offset = ($('.load-more-link').offset() != null)
              ? $('.load-more-link').offset().top
              : 0;
        var additional_offset = (window.innerHeight < window_size_desktop_large)? 70: 120;
        if (load_more_offset - window.innerHeight + additional_offset - scroll_top < 0){
          if ($('.ajax-load-block .load-more-link a').hasClass('disabled') || $('.ajax-load-block .load-more-link a').hasClass('disabled-infinity') || $('.ajax-load-block .load-more-link a').length == 0){
            return false;
          }
          $('.ajax-load-block .load-more-link a').addClass('disabled');
          if ($('.ajax-load-block .load-more-link a').hasClass('more-episodes')){
            Drupal.behaviors.usanetwork_episodes_autoloader.loadPageItems();
          } else if($('.ajax-load-block .load-more-link a').hasClass('more-posts')) {
            Drupal.behaviors.usanetwork_blog_posts_autoloader.loadPageItems();
          }
          else {
            Drupal.behaviors.usanetwork_tv_shows_related_items_loader.getItems();
          }
        }
      });
    }
  }
})(jQuery);
