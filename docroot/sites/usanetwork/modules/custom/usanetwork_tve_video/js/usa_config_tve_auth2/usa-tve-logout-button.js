//Source: ../../libraries/tve/scripts/auth/tve-logout-button-directive.js
(function (ng, $) {

  ng.module('tve.auth.directives')
      .directive('usaTveLogoutButton', [
        'authService', 'usaCustomAnimation',
        function (authService, usaCustomAnimation) {
          return {
            replace: true,
            restrict: 'EA',
            template: '<a ng-click="logout();" bindonce>' +
            '<span class="sign-out login-icon"></span>' +
            '<span class="sign-out-text" ng-bind="text"></span>' +
            '</a>',
            link: function (scope, element, attr) {

              var SIGN_OUT = Drupal.t('Log out');

              scope.logout = tve.adobePass.logout;

              authService.promise.then(function (status) {
                if (status.isAuthenticated) {
                  authService.mvpdService.getMvpd(status.mvpdId).then(function (providerInfo) {
                    scope.text = SIGN_OUT;
                    scope.visible = true;
                    // show tve help links
                    usaCustomAnimation.showTveHelpLinkUsa(500, 'signOut');
                  });
                }
              });
            }
          };
        }
      ]);


})(angular, jQuery, tve, this);
