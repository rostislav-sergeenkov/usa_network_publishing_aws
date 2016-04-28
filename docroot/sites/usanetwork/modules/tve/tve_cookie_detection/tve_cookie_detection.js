/**
 * @file
 * TVE Cookie Detection.
 */
var tve = window.tve = window.tve || { cookieDetection: {} };

tve.cookieDetection.addScriptTag = function(url) {
  var checkScriptElement = document.createElement('script');
  checkScriptElement.setAttribute('src', url);
  document.head.appendChild(checkScriptElement);
};

tve.cookieDetection.thirdPartyCookieCheck = function(cookieSuccess) {
  var date = new Date(new Date().getTime() + 300000);
  tve.cookieDetection.tve_cookie_detection_status = cookieSuccess;
  tve.cookieDetection.tve_cookie_detection_completed = true;
  document.cookie = 'third_party_cookie_enabled=' + cookieSuccess + '; path=/; expires=' + date.toUTCString();
  if (Drupal.settings.tve_cookie_detection) {
    Drupal.settings.tve_cookie_detection.status = cookieSuccess;
    Drupal.settings.tve_cookie_detection.completed = true;
  }
};

if (document.cookie.indexOf('third_party_cookie_enabled=true') == -1) {
  tve.cookieDetection.addScriptTag(tve.cookieDetection.setCookieUrl);
}
else {
  tve.cookieDetection.tve_cookie_detection_completed = true;
}

(function ($) {
  Drupal.behaviors.tve_cookie_detection = {
    attach: function (context, settings) {
      settings.tve_cookie_detection.status = tve.cookieDetection.tve_cookie_detection_status;
      settings.tve_cookie_detection.completed = tve.cookieDetection.tve_cookie_detection_completed;
    }
  };
})(jQuery);
