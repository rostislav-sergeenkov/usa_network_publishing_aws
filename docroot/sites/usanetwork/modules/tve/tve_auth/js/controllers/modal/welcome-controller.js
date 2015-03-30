;(function(ng) {
  ng.module('tve.auth')
      .controller('WelcomeModalCtrl', [
        '$scope', '$location', '$modalInstance',
        'tveModal', 'authService', 'helper', 'tveConfig',
        'data',
        function($scope, $location, $modalInstance,
                 tveModal, authService, helper, tveConfig,
                 //resolve parameter
                 data) {

          var previewStep = $location.search()['preview_step'],
              promoImg = data['big_image'];

          data = data || {errorMessage: Drupal.t('Sorry. Error occurred while becoming a content.')};

          // Check last text and image block if it's empty then add special css class.
          data.contentState = (!data['block_3_text'].value && !data['block_3_image'].url) ? 'twoColumns' : '';

          $scope.welcomeWindow = data;
          $scope.welcomeWindow.bgImage = (promoImg && promoImg.url) ? {
              'background': 'url(' + promoImg.url + ') no-repeat right bottom',
              'background-size': 'contain'
            } : '';

          $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
          };

          $scope.goToLogin = function() {
            helper.storage.set(tveConfig.GETTING_STARTED_KEY, true);
            tveModal.openLoginModal();
            $modalInstance.close();
          };
        }]);

})(angular);
