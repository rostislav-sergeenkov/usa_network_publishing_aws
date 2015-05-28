(function (ng, $) {

  $(window).load(function () {
    if (!ng) {
      return;
    }

    var $injector = ng.element(document).injector();

    $injector.invoke(['$cookies', 'tveConfig', 'tveModal', 'authService', function ($cookies, tveConfig, tveModal, authService) {

      if ($cookies['nbcu_ap_loginpending']) {
        initHeader();
        authService.promise.then(function () {
          Drupal.behaviors.consumptionator_video.initPlayerBind();
        });
      }

      if (authService.isAuthN()) {
        initHeader();
        Drupal.behaviors.consumptionator_video.initPlayerBind();
      }

    }]);

  });

  function initHeader() {

    $('header .header-nav-bar').addClass('tve-sign');

  }

})(angular, jQuery);
