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
          if (typeof response != undefined && response.length > 0) {
            $('#consumptionator').html(response);
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
        var externalLink = false;
        var pageLocationTemp = pageLocation;

        var linkHref = $(item).attr('href').trim();

        // Remove HOST from internal links
        if(!isLinkExternal(linkHref)){
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
    window.addEventListener("hashchange", function(actionName) {
      detectOverlayPage();
    }, false);

    detectOverlayPage();
  }
})(jQuery);
