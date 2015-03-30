jQuery(function() {setTimeout(function(){
	(function(ng) {

		if (!ng) return;

		var $injector = ng.element(document).injector();

		if ($injector) {

			$injector.invoke(['$cookies', 'tveModal', 'authService', function($cookies, tveModal, authService) {

				var timer = setTimeout(function() {
					if ($cookies['nbcu_ap_loginpending']) {
						authService.promise.then(function() {
							Drupal.behaviors.microsite_scroll.micrositePlayerBind();
						});
					}
				}, 2000);
			}]);
		}

	})(this.angular);
}, 0)});
