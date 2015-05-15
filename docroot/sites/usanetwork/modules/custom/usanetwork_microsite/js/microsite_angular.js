jQuery(function() {setTimeout(function(){
	(function(ng) {

		if (!ng) return;

		var $injector = ng.element(document).injector();

		if ($injector) {

			$injector.invoke(['$cookies', 'tveModal', 'authService', function($cookies, tveModal, authService) {

				var timer = setTimeout(function() {
					if ($cookies['nbcu_ap_loginpending']) {
						authService.promise.then(function() {
							// @TODO: Consolidate or update the microsite js so that the following if-else statement is not needed.
							if (typeof Drupal.behaviors.microsite_scroll == 'object') {
							  Drupal.behaviors.microsite_scroll.micrositePlayerBind();
							}
							else if (typeof Drupal.behaviors.ms_videos == 'object') {
							  Drupal.behaviors.ms_videos.micrositePlayerBind();
							}
						});
					}
				}, 2000);
			}]);
		}

	})(this.angular);
}, 0)});
