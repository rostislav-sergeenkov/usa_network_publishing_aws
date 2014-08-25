(function(ng, $, tve) {
  'use strict';
  ng.module('tve.auth')
      .controller('AdobePassCtrl', ['$scope', '$modalInstance', 'tveModal', 'authService',
        function($scope, $modalInstance, tveModal, authService) {
          $scope.close = $modalInstance.dismiss;

          $modalInstance.result['finally'](function() {
            tve.adobePass.cancelAuthentication();
          });
      }]);
})(angular, jQuery, tve);
