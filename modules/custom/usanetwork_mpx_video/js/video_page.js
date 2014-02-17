jQuery(function() {setTimeout(function(){
  (function(ng) {
    if (!ng) return;
    
    var $injector = ng.element(document).injector();

    if ($injector) {
      
      $injector.invoke(['tveConfig', 'authService', 'tveModal', function(tveConfig, authService, tveModal) {
       
        var tveCookiesKeys = tveConfig.cookies;
        var timer = setTimeout(function() {
          if ((authService.isFirstVisit()) && !(authService.isAuthN())) {
          tveModal.openWelcomeModal();
          jQuery.cookie(tveCookiesKeys.FIRST_VISIT, '0', { expires: 365, path: Drupal.settings.basePath });
        }
        }, 2000);
      }]);   
    }
  })(this.angular);
}, 0)});
