;(function($, ng, tve) {
  'use strict';

  ng.module('tve.services')
      .factory('tveModal', ['$modal', '$modalStack', 'helper', 'tveDataProvider',
        function($modal, $modalStack, helper, tveDataProvider) {
          var openModal = function(options) {
                var topWindow = $modalStack.getTop(),
                  options = ng.extend({
                    windowClass: 'modal',
                    backdrop: true,
                    keyboard: true
                  }, options);

                if (topWindow) {
                  topWindow.key.result['finally'](function() {
                    _instance = $modal.open(options);
                  });
                }
                else {
                  _instance = $modal.open(options);
                }

                _instance.opened.then(function() {
                  $window.scrollTop(0);
                });

                return _instance;
              },
              $window = $(window),
              _instance;

          var api = {
            openModal: openModal,
            getTop: $modalStack.getTop,
            openWelcomeModal: function(isPreview) {
              var previewData = tveDataProvider.modals['draft'];

              if (isPreview && !previewData) {
                return false;
              }

              openModal({
                templateUrl: 'welcomeModal.html',
                controller: 'WelcomeModalCtrl',
                windowClass: 'modal welcomeModal',
                resolve: {
                  data: function() {
                    return (isPreview ? previewData : tveDataProvider.modals['published'])['welcome_window'];
                  }
                }
              });

              return this;
            },
            openLoginModal: function(isPreview, redirectUrl) {
              if (helper.device.isMobile) {
                return api.showMobileAppModal();
              }

              if (tve.adobePass.reopenMVPDWindow()){
                return false;
              }

              var previewData = tveDataProvider.modals['draft'];

              if (isPreview && !previewData) {
                return false;
              }

              var promises = openModal({
                templateUrl: 'loginModal.html',
                controller: 'LoginModalCtrl',
                windowClass: 'modal loginModal',
                resolve: {
                  data: function() {
                    return (isPreview ? previewData : tveDataProvider.modals['published'])['login'];
                  },
                  redirectUrl: function() {
                    return redirectUrl;
                  }
                }
              });

              return this;
            },
            openAdobePassModal: function() {
              openModal({
                templateUrl: 'adobePassModal.html',
                controller: 'AdobePassCtrl',
                windowClass: 'modal small adobePassFrame'
              });
              return this;
            },
            openK2Modal: function() {
              openModal({
                templateUrl: 'k2modal.html',
                controller: 'K2ModalCtrl',
                windowClass: 'modal small k2Modal'
              });
              return this;
            },
            showMobileAppModal: function() {
              openModal({
                templateUrl: 'mobileAppModal.html',
                controller: 'MobileAppCtrl',
                windowClass: 'modal mobileWindow'
              });

              return this;
            },
            openErrorModal: function() {
              openModal({
                templateUrl: 'errorsModal.html',
                controller: 'ErrorsModalCtrl',
                windowClass: 'modal errorModal'
              });
              return this;
            },
            openLiveModal: function() {
              openModal({
                templateUrl: 'liveModal.html',
                controller: 'LiveModalCtrl',
                windowClass: 'modal liveModal'
              });
              return this;
            }
        };

        return api;
      }]);
})(jQuery, angular, tve);
