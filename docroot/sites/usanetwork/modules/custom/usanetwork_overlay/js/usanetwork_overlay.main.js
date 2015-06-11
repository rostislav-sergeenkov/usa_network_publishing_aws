;(function ($) {
  Drupal.behaviors.usanetwork_overlay = Drupal.behaviors.usanetwork_overlay || {};
  Drupal.behaviors.usanetwork_overlay.attach = function (context) {

    /**
     * Returns URL that requested for opening in consumptionator.
     */
    function getConsumptionatorUrl(hash) {

      if (hash.search('#consumptionator=') == 0) {
        return hash.replace('#consumptionator=', '');
      }

      return '';
    }

    /**
     * Detects if the page requires to load something in consumptionator container.
     */
    function detectOverlayPage() {
      var path = getConsumptionatorUrl(document.location.hash);

      if (path) {
        loadConsumptionatorContent(path);
      }
    }

    /**
     * Sends AJAX request for getting $path page and places in consumptionator container.
     */
    function loadConsumptionatorContent(path) {
      $.ajax({
        url: Drupal.settings.basePath + 'usanetwork-ajax-page/teaser?url=' + encodeURIComponent(path),
        type: 'POST',
        data: {
          excludeConsumptionator: true
        },
        beforeSend: function() {
          $('#consumptionator').html('<div class="ajax-loading"><div class="huge-text">' + Drupal.t('Please wait...') + '</div></div>');
        },
        success: function(response) {
          if (typeof response.html != undefined && response.html.length > 0) {
            $('#consumptionator').html(response.html);
            Drupal.settings.consumptionatorDynamicData = response.data;

            wrapConsumptionatorLinks();
          }
          else {
            $('#consumptionator').empty();
          }
        },
        error: function() {
          $('#consumptionator').empty();
        }
      });
    }

    /**
     * Wraps consumptionator links:
     * from: current_consumptionator_page_url
     * to: current_url/#consumptionator=current_consumptionator_page_url
     */
    function wrapConsumptionatorLinks() {
      var pageLocation = document.location.pathname;

      $.each($('#consumptionator a'), function(index, item) {
        if ($(item).parent().hasClass('load-more-link')) {
          return; // Do not process consumptionator "Load more" link
        }
        var externalLink = false;
        var pageLocationTemp = pageLocation;
        var itemAttr = $(item).attr('name');

        //if (typeof itemAttr !== typeof undefined && itemAttr !== false) {
          var linkHref = ($(item).attr('href') != null)
            ? $(item).attr('href').trim()
            : '';

          // Remove HOST from internal links
          if (!isLinkExternal(linkHref)) {
            linkHref = linkHref.replace(/^.*\/\/[^\/]+/, '');
          }
          else {
            externalLink = true;
          }

          // Remove the first '/' symbol from page address that should be opened in consumptionator
          if (linkHref.substring(0, 1) == '/' && !externalLink) {
            linkHref = linkHref.substring(1);
          }

          // Remove the last '/' symbol from page address that should be a host of consumptionator
          if (linkHref && !externalLink) {
            if (pageLocationTemp.substr(-1) == '/') {
              pageLocationTemp = pageLocationTemp.substring(0, pageLocation.length - 1);
            }

            $(item).attr('href', pageLocationTemp + '#consumptionator=' + linkHref);
          }
          else if (!linkHref && !externalLink) {
            $(item).attr('href', '#');
          }
        //}
      });
    }

    /**
     * Returns TRUE if link is external and FALSE if it's internal.
     */
    function isLinkExternal(link) {
      var hostname = RegExp('^((f|ht)tps?:)?//(?!' + location.host + ')');

      if (hostname.test(link)) {
        return true;
      }

      return false;
    }

    /**
     * Listening window for changing hashtag.
     */
    if(window.addEventListener){
      window.addEventListener("hashchange", function(actionName) {
        detectOverlayPage();
      }, false);
    }else{
      window.attachEvent("onhashchange", function(actionName) {
        detectOverlayPage();
      });
    }

    detectOverlayPage();
  }
})(jQuery);
