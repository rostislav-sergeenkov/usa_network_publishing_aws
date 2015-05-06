(function ($) {
	Drupal.behaviors.video_mobile = {
		showMobileVideoModal : function(os) {

			if ($('#mobileVideoModalOverlay').length == 0) {
				// create overlay
				$('body').append('<div id="mobileVideoModalOverlay"></div>');
				$('#mobileVideoModalOverlay').click(function() {
					Drupal.behaviors.video_mobile.hideMobileVideoModal();
				});
			}
			if ($('#mobileVideoModal').length == 0) {
				// create modal dialog
				var $modal = $('<div id="mobileVideoModal"></div>');
				$modal.append(Drupal.settings.usanetwork_video_mobile.modal);
				$modal.find('.download-app-button').click(function() {
					window.location.href = Drupal.settings.usanetwork_video_mobile.url[os];
					Drupal.behaviors.video_mobile.hideMobileVideoModal();
				});
				$modal.find('.close-reveal-modal').click(function() {
					Drupal.behaviors.video_mobile.hideMobileVideoModal();
				});
				$('body').append($modal);
			}
			$('#mobileVideoModalOverlay').show();
			$('#mobileVideoModal').show();
		},
		hideMobileVideoModal : function() {
			$('#mobileVideoModalOverlay').hide();
			$('#mobileVideoModal').hide();
		}
	};
  $(document).ready(function() {
    if (typeof usa_deviceInfo == 'undefined'
      || typeof Drupal.settings.usanetwork_video_mobile == 'undefined'
      || window.location.pathname == '/videos') {
      return;
    }
    // check if user uses mobile device
    if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
      var os = usa_deviceInfo.iOS ? 'iOS' : 'android';
			if($('#microsite').length == 0){
				// show modal dialog
				Drupal.behaviors.video_mobile.showMobileVideoModal(os);
			}
    }
  });
}) (jQuery);
