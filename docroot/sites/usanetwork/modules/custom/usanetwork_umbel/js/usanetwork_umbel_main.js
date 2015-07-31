/* 
 * Umbel Scripts
 */
(function ($) {
  Drupal.behaviors.usanetwork_umbel = {
    attach: function (context, settings) {
      $('body').once(function () {
        umbelCode = Drupal.settings.umbel_code;
        umbelSettings = Drupal.settings.umbel_settings;

        window._umbel = window._umbel || [];
        (function () {
          var u = document.createElement('script');
          u.type = 'text/javascript';
          u.async = true;
          u.src = document.location.protocol + '//tags.api.umbel.com/' + umbelCode + '/w.js?d=' + new Date().getMonth() + '-' + new Date().getDate();
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(u, s);
        })();

        settigngsParameter1 = umbelSettings.usa_umbel_param_1;
        settigngsParameter2 = umbelSettings.usa_umbel_param_2;
        settigngsParameter3 = umbelSettings.usa_umbel_param_3;

        if (typeof settigngsParameter1 != 'undefined') {
          umbelParameter1 = settigngsParameter1;
        } else {
          umbelParameter1 = s.prop10;
        }

        if (typeof settigngsParameter2 != 'undefined') {
          umbelParameter2 = settigngsParameter2;
        } else {
          umbelParameter2 = s.prop4;
        }

        if (typeof settigngsParameter3 != 'undefined') {
          umbelParameter3 = settigngsParameter3;
        } else {
          umbelParameter3 = s.pageName;
        }
        _umbel.push({
          "type": "send",
          "name": "action.tag",
          "value": [umbelParameter1, umbelParameter2, umbelParameter3]
        });
      });
    }
  }
})(jQuery);
