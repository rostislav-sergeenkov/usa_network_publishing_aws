;
(function(ng, undefined) {
  'use strict';

  ng.module('tve.directives')
      .directive('tveSignInButton', ['$cookies', 'tveModal', 'authService', function($cookies, tveModal, authService) {
        return {
          compile: function(element, attrs, transclude) {
            return function($scope, $element, $attrs) {
              var content = $element.html(),
                  loadingClassName = 'loading',
                  loader = '<i class="inlineLoader"></i>' + Drupal.t('Verifying');

              if ($cookies['nbcu_ap_loginpending']) {
                $element.html(loader).addClass(loadingClassName);

                authService.promise.then(function() {
                  $element.html(content).removeClass(loadingClassName);
                });
              }
            };
          }
        };
      }]);
})(angular);
