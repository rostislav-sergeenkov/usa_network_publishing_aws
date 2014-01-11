jQuery(function() {setTimeout(function(){
  (function(ng) {
    if (!ng) return;
    
    var $injector = ng.element(document).injector();

    if ($injector) {
      
      $injector.invoke(['tveConfig', 'authService', 'tveModal', function(tveConfig, authService, tveModal) {
       
        var tveCookiesKeys = tveConfig.cookies;
        if (authService.isFirstVisit()) {
          tveModal.openWelcomeModal();
          jQuery.cookie(tveCookiesKeys.FIRST_VISIT, '0', { expires: 365, path: Drupal.settings.basePath });
        }
      }]);   
    }
  })(this.angular);
}, 0)});