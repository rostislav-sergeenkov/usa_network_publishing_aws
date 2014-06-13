(function ($) {
  $(document).ready(function() {
    if (typeof usa_deviceInfo == 'undefined'
      || typeof Drupal.settings.usanetwork_video_mobile == 'undefined'
      || window.location.pathname == '/videos') {
      return;
    }

    // check if user uses mobile device
    if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
      var os = usa_deviceInfo.iOS ? 'iOS' : 'android';

      var showMobileVideoModal = function() {
        if ($('#mobileVideoModalOverlay').length == 0) {
          // create overlay
          $('body').append('<div id="mobileVideoModalOverlay"></div>');
          $('#mobileVideoModalOverlay').click(function() {
            hideMobileVideoModal();
          });
        }
        if ($('#mobileVideoModal').length == 0) {
          // create modal dialog
          var $modal = $('<div id="mobileVideoModal"></div>');
          $modal.append(Drupal.settings.usanetwork_video_mobile.modal);
          $modal.find('.download-app-button').click(function() {
            window.location.href = Drupal.settings.usanetwork_video_mobile.url[os];
            hideMobileVideoModal();
          });
          $modal.find('.close-reveal-modal').click(function() {
            hideMobileVideoModal();
          });
          $('body').append($modal);
        }
        $('#mobileVideoModalOverlay').show();
        $('#mobileVideoModal').show();
      }
      var hideMobileVideoModal = function() {
        $('#mobileVideoModalOverlay').hide();
        $('#mobileVideoModal').hide();
      }

      // show modal dialog
      showMobileVideoModal();
    }
  });
}) (jQuery);
