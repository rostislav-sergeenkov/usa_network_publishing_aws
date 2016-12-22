(function(ng) {
  ng.module('tve.auth')
      .controller('ErrorsModalCtrl', ['$scope', 'tveModal', '$modalInstance', 'authService', 'helper', 'tveConfig', 'tveErrorHandler',
        function($scope, tveModal, $modalInstance, authService, helper, tveConfig, tveErrorHandler) {
          var data = tveErrorHandler.getErrorData();
          $scope.errorWindow = data || {};
          if (data.error_image) {
            $scope.errorWindow.errorImage = {
              'background': 'url(' + data.error_image + ') no-repeat right bottom',
              'background-size': 'contain',
              'right': '0px'
            };
          }

          $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
          };

        }]);

})(angular);
