;
(function (ng, $) {
  'use strict';

  if (!(ng = window.angular)) {
    return;
  }

  ng.module('tve.directives')
      .directive('usaTveHelpLink', ['$cookies', 'tveModal', 'authService',
        function ($cookies, tveModal, authService) {
          return {
            link: function($scope, $element, $attrs) {
              authService.promise.then(function() {
                if (authService.isAuthN()) {
                  initHeader();
                }
              });

              function initHeader() {

                $('header #block-usanetwork-menu-usanetwork-menu-consumptionator').addClass('sign-enable');
                $('header .header-nav-bar').addClass('tve-sign');
                $('header').addClass('sign-in');

                if($element.hasClass('no-auth')) {
                  $('header .tve-help-link.signIn').removeClass('no-auth');
                }
              }
            }
          };
        }
      ]);
})(angular, jQuery);
