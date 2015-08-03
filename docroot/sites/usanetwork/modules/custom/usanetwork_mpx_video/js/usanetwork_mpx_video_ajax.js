(function ($) {

  /**
   * Add an extra function to the Drupal ajax object
   * which allows us to trigger an ajax response
   */
  Drupal.ajax.prototype.usanetwork_mpx_video_ajax = function(element) {
    var ajax = this;

    // Do not perform another ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return false;
    }

    try {
      $.ajax(ajax.options).done(function() {
        var $link = $(element);
        // remove active class from elements
        $link.parents('ul').children('li').removeClass('active');
        // add active class for current link
        $link.parents('li').addClass('active');
      });
    }
    catch (err) {
      alert('An error occurred while attempting to process ' + ajax.options.url);
      return false;
    }

    return false;
  };

  /**
   * Add behavior attached to links
   */
//  Drupal.behaviors.usanetwork_mpx_video_ajax = {
//    attach: function(context, settings) {
//      var default_url = Drupal.settings.basePath + 'videos/ajax';
//
//      // Create Drupal ajax action
//      var ajaxSettings = {
//        url: default_url,
//        event: 'onload',
//        keypress: false,
//        prevent: false
//      };
//      Drupal.behaviors.usanetwork_mpx_video_ajax.ajax = new Drupal.ajax(null, $(document.body), ajaxSettings);
//
//      $('.block-usanetwork-mpx-video ul.categories li a').on('click', function() {
//        var $link = $(this);
//        if ($link.hasClass('active')) {
//          // do nothing
//          return false;
//        }
//
//        Drupal.behaviors.usanetwork_mpx_video_ajax.ajax.options.url = default_url;
//        Drupal.behaviors.usanetwork_mpx_video_ajax.ajax.options.data.path = null;
//
//        // get url from the link
//        var url = $link.attr('href');
//        url = url.replace(window.location.protocol + "//" + window.location.host, ''); // remove absolute path if needed
//        url = url.slice(Drupal.settings.basePath.length); // remove base_path
//
//        if (url.indexOf('?') !== -1) {
//          var query_string = url.split('?');
//          url = query_string[0];
//          Drupal.behaviors.usanetwork_mpx_video_ajax.ajax.options.url += '?' + query_string[1]; // append parameters to the ajax url
//        }
//
//        // add url as POST
//        Drupal.behaviors.usanetwork_mpx_video_ajax.ajax.options.data.path = url;
//        // add ajax progress indicator
//        $('#block-usanetwork-mpx-video-usa-mpx-video-views .ajax-content').addClass('ajax-loading');
//        $('#block-usanetwork-mpx-video-usa-mpx-video-views .ajax-content').append('<div class="ajax-loader"></div>');
//        // Fire ajax action
//        Drupal.behaviors.usanetwork_mpx_video_ajax.ajax.usanetwork_mpx_video_ajax(this);
//
//        return false;
//      });
//    }
//  };
  
})(jQuery);
