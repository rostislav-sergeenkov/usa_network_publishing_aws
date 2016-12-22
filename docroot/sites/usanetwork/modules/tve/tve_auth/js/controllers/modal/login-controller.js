;
(function(ng) {
  'use strict';

  ng.module('tve.auth')
      .controller('LoginModalCtrl', [
        '$scope', '$rootScope', '$location', '$modalInstance',
        'tveModal', 'authService', 'tveConfig', 'helper', 'idx', 'tveDataProvider',
        //resolve parameters
        'data', 'redirectUrl',
        function($scope, $rootScope, $location, $modalInstance,
                 tveModal, authService, tveConfig, helper, idx, tveDataProvider,
                 data, redirectUrl) {

          var FIRST_STEP  = 1,
              SECOND_STEP = 2,
              THIRD_STEP  = 3;

          var buttonTexts = {
                'true': Drupal.t('See the full list'),
                'false': Drupal.t('Back')
              },
              previewStep = $location.search()['preview_step'],
              gettingStarted = helper.storage.get(tveConfig.GETTING_STARTED_KEY) || previewStep,
              authSettings = Drupal.settings.tve_auth,
              tveAnalytics = tve.analytics,
              loadedImages;

          //not transparent ids: welcome modal window has a preview_step === 1, login window steps start from 2;
          previewStep = !!previewStep && (previewStep - 1);

          $modalInstance.result.then(null, function() {
            if (authService.isAuthN()) {
              helper.storage.remove(tveConfig.GETTING_STARTED_KEY);
              $rootScope.global.gettingStarted = false;
            }
          });

          authService.promise
              .then(function(value) {
                if (value && $scope.loginWindow.currentStep === FIRST_STEP) {
                  $scope.close();
                }
              });

          //scope variables
          $scope.isIdxEnabled = idx.isEnabled;
          $scope.isK2Enabled  = authSettings && authSettings.k2_enabled;
          $scope.showIdxLogin = helper.storage.get(tveConfig.DONT_SHOW_IDX_LOGIN_KEY);
          $scope.loginWindow  = {
            currentStep: previewStep || (authService.isAuthN() ? ($rootScope.global.isLoggedInIdx && gettingStarted ? THIRD_STEP : SECOND_STEP) : FIRST_STEP)
          };

          //referencing scope methods
          $scope.close              = close;
          $scope.authWithAdobePass  = authWithAdobePass;
          $scope.openK2Search       = openK2Search;
          $scope.triggerContent     = triggerContent;
          $scope.saveState          = saveState;
          $scope.showLastStep       = showLastStep;
          $scope.idxSignIn          = idxSignIn;
          $scope.idxCreateAccount   = idxCreateAccount;

          _init();

          function _init() {
            var providers = tveDataProvider.providers,
                currentStep = $scope.loginWindow.currentStep;

            if (!data) {
              return;
            }

            if (currentStep === FIRST_STEP && !previewStep) {
              tveAnalytics.trackAuthEvents(tveAnalytics.events.MVPD_SELECTION);
            }

            loadedImages = {
              firstStepImg  : _getImageUrl(data['login_window_1'].image),
              secondStepImg : _getImageUrl(data['login_window_2'].image),
              thirdStepImg  : _getImageUrl(data['login_window_3'].image)
            };

            ng.extend($scope.loginWindow, data, {
              firstStepImg  : currentStep === FIRST_STEP  && loadedImages.firstStepImg,
              secondStepImg : currentStep === SECOND_STEP && loadedImages.secondStepImg,
              thirdStepImg  : currentStep === THIRD_STEP  && loadedImages.thirdStepImg,

              filteredMvpdsView : true,
              buttonText        : buttonTexts['true'],
              featuredMvpds     : providers.featured,
              mvpds             : providers.all
            });
          }

          function close() {
            $modalInstance.dismiss();
          }

          function authWithAdobePass(id) {
            $modalInstance.result.then(function() {
              authService.authWithAdobePass(id, redirectUrl);
            });
            authService.promise.then(function() {
              $modalInstance.close();
            });
          }

          function openK2Search() {
            tveModal.openK2Modal();
            $modalInstance.close();
          }

          function triggerContent() {
            $scope.loginWindow.filteredMvpdsView = !$scope.loginWindow.filteredMvpdsView;
            $scope.loginWindow.buttonText = buttonTexts[$scope.loginWindow.filteredMvpdsView];
          }

          function saveState(showOnReload) {
            helper.storage.set(tveConfig.DONT_SHOW_IDX_LOGIN_KEY, showOnReload);
          }

          function showLastStep() {
            $scope.loginWindow.currentStep = THIRD_STEP;
            $scope.loginWindow.secondStepImg = null;
            $scope.loginWindow.thirdStepImg = loadedImages.thirdStepImg;
          }

          function idxSignIn() {
            authService.logInToIdx();
            $modalInstance.close(true);
          }

          function idxCreateAccount() {
            authService.createIdxAccount();
            $modalInstance.close(true);
          }

          function _getImageUrl(source, backgroundPosition) {
            backgroundPosition = backgroundPosition ? (backgroundPosition.x + ' ' + backgroundPosition.y) : 'left bottom';
            return source && source.url ? {
                'background-image': 'url(' + source.url + ')',
                'background-position': backgroundPosition
              } : null;
          }
        }]);
})(angular);
