(function ($) {

  Drupal.behaviors.usanetwork_popup = {
    initPopup: function (isFront, cookiePageName) {

      var $body = $('body'),
          pageUrl = window.location.href,
          popup = $('.usa-home-popup-overlay'),
          popupTitle = popup.attr('data-title'),
          popupCookieName = 'popup_window_' + popup.attr('data-popup-id') + cookiePageName,
          previewPage = $body.hasClass('node-type-popup-element'),
          pageName = 'USA Network : Homepage';

      if (!isFront && window.hasOwnProperty('AdobeTracking')) {
        pageName = (function () {
          return $('<div>', {html: AdobeTracking.pageName}).text().trim();
        })();
      }

      if (!previewPage && getCookie(popupCookieName) != undefined) {
        popup.remove();
      } else {
        popup.css('display', 'flex');

        if (!previewPage) {
          popup.once('omniture-tracking', function () {
            var checkOmniture = setInterval(function() {
              if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
                showPopupOmniture();
                clearInterval(checkOmniture);
              }
            }, 200);
            setTimeout(function() {
              clearInterval(checkOmniture);
            }, 3000);
          });

          setCookie(popupCookieName);

          // Click popup link
          $('.usa-home-popup-overlay a').once('omniture-tracking', function () {
            $(this).on('click', function (e) {
              if ($(this).attr('target') == '_blank') {

              } else {
                e.preventDefault();
              }
              clickPopupLink($(this), popupTitle);
            });
          });
        }

        popup.click(function (e) {
          if (!previewPage) {
            if (e.target.className != 'tile-img' && e.target.className != 'asset-img' && e.target.className != 'usa-popup-link') {
              clickExitPopupOmniture();
            }
          }
          popup.remove();
        });
      }

      function checkMaxPropLength(propFirstPart, propSecondPart) {

        propFirstPart = propFirstPart || '';
        propSecondPart = propSecondPart || '';

        // max prop characters
        var maxPropLength = 100,
            propFirstLength = propFirstPart.length,
            propSecondLength = propSecondPart.length;

        if (propFirstLength + propSecondLength > maxPropLength) {
          propFirstPart = propFirstPart.slice(0, maxPropLength - propSecondLength).trim();
        }

        return propFirstPart + propSecondPart;
      }

      function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

      function setCookie(name) {
        var expire_date = new Date(new Date().getTime() + 30 * 86400 * 1000);
        document.cookie = name + '=1;'
            + ' expires=' + expire_date.toUTCString() + ';'
            + ' path=' + Drupal.settings.basePath + ';'
            + ' domain=.' + document.location.hostname + ';';
      }

      function showPopupOmniture() {

        var trackName = 'Pop-up Shown';

        s.linkTrackVars = 'events,pageName';
        s.linkTrackEvents = s.events = 'event6';
        s.pageName = checkMaxPropLength(pageName, ' : ' + popupTitle + ' : ' + trackName);

        s.tl(this, 'o', trackName);
        s.manageVars('clearVars', s.linkTrackVars, 1);
      }

      function clickExitPopupOmniture() {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

          var trackName = 'Pop-Up Exit Click';

          s.linkTrackVars = 'events,pageName,prop25,prop26,prop27,prop65,prop73,eVar65';
          s.linkTrackEvents = s.events = 'event65';
          s.pageName = checkMaxPropLength(pageName, ' : ' + popupTitle + ' : Pop-up');
          s.prop65 = s.eVar65 = checkMaxPropLength(pageName, ' : ' + popupTitle + ' : ' + trackName);
          s.prop73 = pageUrl;

          s.tl(this, 'o', trackName);
          s.manageVars('clearVars', s.linkTrackVars, 1);
        }
      }

      function clickPopupLink($self, popupTitle) {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

          var trackName = 'Pop-Up Image Click';

          s.linkTrackVars = 'events,pageName,prop25,prop26,prop27,prop65,prop73,eVar65';
          s.linkTrackEvents = s.events = 'event65';
          s.pageName = checkMaxPropLength(pageName, ' : ' + popupTitle + ' : Pop-up');
          s.prop65 = s.eVar65 = checkMaxPropLength(pageName, ' : ' + popupTitle + ' : ' + trackName);
          s.prop73 = pageUrl;

          s.tl(this, 'o', trackName);
          s.manageVars('clearVars', s.linkTrackVars, 1);

          if ($self.attr('href') != '#') {
            Drupal.behaviors.omniture_tracking.goToUrl($self);
          }
        }
      }
    },

    attach: function (context, settings) {

      var _this = this,
          $body = $('body'),
          isFront = false,
          cookiePageName = '';

      $body.once('usanetwork-popup', function () {
        if ($('.usa-home-popup-overlay').length > 0) {

          if ($body.hasClass('front')) {
            isFront = true;
            _this.initPopup(isFront, cookiePageName);
          } else if ($body.hasClass('node-type-consumpt-post')) {
            cookiePageName = '_post';
            _this.initPopup(isFront, cookiePageName);
          } else if ($body.hasClass('node-type-popup-element')) {
            _this.initPopup(isFront, cookiePageName);
          }
        }
      });
    }
  }

}(jQuery));
