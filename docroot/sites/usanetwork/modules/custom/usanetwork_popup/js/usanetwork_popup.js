(function ($) {

  Drupal.behaviors.usanetwork_popup = {
    initPopup: function (cookiePageName, omniturePageName) {

      var $body = $('body'),
          pageUrl = window.location.href,
          popup = $('.usa-home-popup-overlay'),
          popupTitle = popup.attr('data-title'),
          popupCookieName = 'popup_window_' + popup.attr('data-popup-id') + cookiePageName,
          previewPage = $body.hasClass('node-type-popup-element');

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

              var $self = $(this),
                  pageName = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';

              clickPopupLink($self, popupTitle, pageName);

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
        s.linkTrackVars = 'events,pageName';
        s.linkTrackEvents = s.events = 'event6';
        s.pageName = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';

        s.tl(this, 'o', 'Pop-up Shown');
        s.manageVars('clearVars', s.linkTrackVars, 1);
      }

      function clickExitPopupOmniture() {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
          s.linkTrackVars = 'events,pageName,prop25,prop26,prop27,prop65,prop73,eVar65';
          s.linkTrackEvents = s.events = 'event65';
          s.pageName = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';
          s.prop25 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';
          s.prop26 = 'Pop-Up Exit Click';
          s.prop27 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown | Pop-Up Exit Click';
          s.prop65 = s.eVar65 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-Up Exit Click';
          s.prop73 = pageUrl;

          s.tl(this, 'o', 'Pop-Up Exit Click');
          s.manageVars('clearVars', s.linkTrackVars, 1);
        }
      }

      function clickPopupLink($self, popupTitle, pageName) {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
          s.linkTrackVars = 'events,pageName,prop25,prop26,prop27,prop65,prop73,eVar65';
          s.linkTrackEvents = s.events = 'event65';
          s.pageName = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';
          s.prop25 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown';
          s.prop26 = 'Pop-Up Image Click';
          s.prop27 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-up Shown | Pop-Up Image Click';
          s.prop65 = s.eVar65 = 'USA Network : ' + omniturePageName + ' : ' + popupTitle + ' : Pop-Up Image Click';
          s.prop73 = pageUrl;

          s.tl(this, 'o', 'Pop-Up Image Click');
          s.manageVars('clearVars', s.linkTrackVars, 1);

          if ($self.attr('href') != '#') {
            Drupal.behaviors.omniture_tracking.goToUrl($self);
          }
        }
      }
    },

    attach: function (context, settings) {

      var $body = $('body'),
          _this = this,
          cookiePageName, omniturePageName;

      $body.once('usanetwork-popup', function () {
        if ($('.usa-home-popup-overlay').length > 0) {

          if ($body.hasClass('front')) {

            cookiePageName = '';
            omniturePageName = 'Homepage';

            _this.initPopup(cookiePageName, omniturePageName);

          } else if ($body.hasClass('node-type-consumpt-post')) {

            omniturePageName = 'Consumpt_post';
            cookiePageName = '_post';

            _this.initPopup(cookiePageName, omniturePageName);

          } else if ($body.hasClass('node-type-popup-element')) {

            cookiePageName = '';
            omniturePageName = '';

            _this.initPopup(cookiePageName, omniturePageName);

          }
        }
      });
    }
  }

}(jQuery));
