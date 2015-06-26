/* 
 * Umbel Scripts
 */
(function ($) {
  Drupal.behaviors.usanetwork_umbel = {
    attach: function (context, settings) {
      $('body').once(function () {
        umbel_code = Drupal.settings.umbel_code;

        window._umbel = window._umbel || [];
        (function () {
          var u = document.createElement('script');
          u.type = 'text/javascript';
          u.async = true;
          u.src = document.location.protocol + '//tags.api.umbel.com/' + umbel_code + '/w.js?d=' + new Date().getMonth() + '-' + new Date().getDate();
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(u, s);
        })();

        //var umbel_parameter;
        if (typeof umbel != 'undefined') {
          umbel_parameter = umbel;
        } else {
          umbel_parameter = s.pageName;
        }
        _umbel.push({
          "type": "send",
          "name": "action.tag",
          "value": [s.prop10, s.prop4, umbel_parameter]
        });
      });
    }
  }
})(jQuery);
