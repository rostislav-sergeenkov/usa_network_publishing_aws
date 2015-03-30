(function(ng, $, undefined) {
  'use strict';
  ng.module('tve.auth')
      //TODO: move $http interaction to k2 service
      .controller('K2ModalCtrl', ['$scope', '$http', '$modalInstance', 'helper', 'tveModal', 'authService', 'tveDataProvider',
        function($scope, $http, $modalInstance, helper, tveModal, authService, tveDataProvider) {
          var URL_ZIP = helper.getRelativePath('k2/zip/'),
              URL_SUBSCRIPTION = helper.getRelativePath('k2/subscription'),
              ZIP_FORMAT_ERROR = Drupal.t('Wrong zip-code format'),
              SUCCESS = 'success',
              ZIP_CODE_LENGTH = 5,
              submitStatus = {
                SUBMIT: Drupal.t('Submit'),
                LOADING: Drupal.t('Loading') + '...'
              },
              previousZip,
              k2UserId;

          //model for zip code search form
          $scope.k2 = {};
          //model for subscription form
          $scope.subscription = {};
          //flag to show zip-field loader
          $scope.loadingZip = false;
          //zip-field error message
          $scope.zipError = undefined;
          //subscription form error message
          $scope.subscriptionError = undefined;
          //providers list for selected zip
          $scope.providers = [];
          //flag to track which form to show
          $scope.isSearchStep = true;
          //state for subscription form submit button
          $scope.submitStatus = submitStatus.SUBMIT;
          //subscription form loading state flag
          $scope.loading = false;
          //all available providers, to check which providers we connect now
          $scope.availableProviders = tveDataProvider.providers.all;

          //filter for providers
          $scope.isProviderAvailable = function(k2Id) {
            return !!getAdobeId(k2Id);
          };

          //close window method
          $scope.close = function() {
            $modalInstance.dismiss();
          };

          //close k2 modal and open login window back
          $scope.back = function() {
            tveModal.openLoginModal();
            $modalInstance.close();
          };

          //connect to the selected provider
          $scope.authWithAdobePass = function() {
            $modalInstance.result.then(function() {
              authService.authWithAdobePass(getAdobeId($scope.k2.selectedProvider));
            });
            $modalInstance.close();
          };

          //subscribe for provider info
          $scope.submitSubscription = function(subscriptionForm) {
            //not process if form in invalid or request in already in progress
            if (subscriptionForm.$invalid || $scope.loading) {
              subscriptionForm.$setDirty();
              return;
            }

            //composing request data
            var userData = {
              firstName   : $scope.subscription.firstName,
              lastName    : $scope.subscription.lastName,
              emailAdress : $scope.subscription.email,
              zipCode     : previousZip,
              k2UserId    : k2UserId,
              providerName: $scope.k2.selectedProvider,
              siteBrandId : Drupal.settings.adobePass.adobePassRequestorId
            };

            //changing window display state
            $scope.submitStatus = submitStatus.LOADING;
            $scope.loading = true;

            //posting data
            $http({
                method: 'POST',
                url: URL_SUBSCRIPTION,
                cache: true,
                data: $.param({
                  user_data: userData
                }),
                headers : {
                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
              })
              .success(function(response) {
                if (response.status === SUCCESS) {

                }
                else {
                  $scope.subscriptionError = response.error_message;
                }
                $scope.loading = false;
                $scope.isSearchStep = false;
              })
              .error(function() {

              });
          };

          //search for another zip-code
          $scope.checkAnother = function(subscriptionForm) {
            previousZip = null;

            $scope.isSearchStep         = true;
            $scope.k2.selectedProvider  = undefined;
            $scope.k2.zipCode           = '';
            $scope.providers            = [];
            $scope.submitStatus         = submitStatus.SUBMIT;

            ng.forEach($scope.subscription, function(field, key) {
              $scope.subscription[key] = '';
            });

            subscriptionForm.$setDirty();
          };

          //try su submit subscription if error occurs
          $scope.tryAgain = function() {
            $scope.isSearchStep = true;
            $scope.submitStatus = submitStatus.SUBMIT;
            $scope.loading      = false;
          };

          //searching for zip-code
          $scope.search = function(isFormInvalid) {
            if (isFormInvalid || $scope.k2.zipCode.length === 0) {
              if (isFormInvalid) {
                $scope.providers = [];
                $scope.k2.selectedProvider = undefined;
                $scope.zipError = ZIP_FORMAT_ERROR;
              }

              return;
            }

            $scope.zipError = '';

            if (!$scope.loadingZip) {
              $http.post(URL_ZIP + $scope.k2.zipCode).success(function(data) {
                previousZip = $scope.k2.zipCode;
                $scope.loadingZip = false;

                if (data.status === SUCCESS) {
                  k2UserId = data.k2UserId;
                  $scope.providers = data.providerList;
                  $scope.zipError = null;
                }
                else {
                  $scope.providers = [];
                  $scope.zipError = data.error_message;
                }
              });
            }
            $scope.loadingZip = true;
          };

          //return adobeId for the k2Id
          function getAdobeId(k2Id) {
            var id;
            ng.forEach($scope.availableProviders, function(provider, i) {
              if (provider.mvpd_k2_id === k2Id) {
                id = provider.mvpd_id;
                return false;
              }
            });
            return id;
          }
        }]);
})(angular, jQuery);
