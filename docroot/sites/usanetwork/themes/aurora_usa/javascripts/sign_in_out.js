(function (ng, $) {

  $(window).load(function () {
    if (!ng) {
      return;
    }

    var $injector = ng.element(document).injector();

    $injector.invoke(['$cookies', 'tveConfig', 'tveModal', 'authService', function ($cookies, tveConfig, tveModal, authService) {

      if ($cookies['nbcu_ap_loginpending']) {
        initHeader();
        //authService.promise.then(function () {});
      }

      if (authService.isAuthN()) {
        initHeader();
      }

    }]);

  });

  function initHeader() {

    $('header #block-usanetwork-menu-usanetwork-menu-consumptionator').addClass('sign-enable');
    $('header .header-nav-bar').addClass('tve-sign');

    if($('header .tve-help-link.signIn').hasClass('no-auth')) {
      $('header .tve-help-link.signIn').removeClass('no-auth');
      $('header .tve-help-link.signIn .loginButton').remove();
    }

  }

})(angular, jQuery);
