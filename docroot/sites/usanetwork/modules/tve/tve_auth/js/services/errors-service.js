(function(ng) {
  'use strict';
  ng.module('tve.services')
    .factory('tveErrorHandler', ['$http', 'helper', 'tveModal',
      function($http, helper, tveModal) {
        var errorTypes = {
            FLASH     : 'flash',
            GENERAL   : 'general',
            ADOBE_PASS: 'adobe'
          },
          ajaxUrl = helper.getRelativePath('tve/errors/modal/'),
          _errorsData = {},
          _currentErrorType;

        function getErrorAjaxData(type) {
          type = type || errorTypes.GENERAL;

          if (_errorsData[type]) {
            tveModal.openErrorModal();
          }
          else {
            $http
              .get(ajaxUrl + type)
              .success(function(data, status, headers, config) {
                _errorsData[_currentErrorType] = data || {};
                tveModal.openErrorModal();
              })
              .error(function(data, status, headers, config) {
                console.log('tveErrorHandler: ajax error');
              });
          }
        }

        return {
          errors: errorTypes,
          getErrorData: function() {
            return _errorsData[_currentErrorType];
          },
          showErrorMessage: function(type) {
            if (!helper.device.isMobile) {
              _currentErrorType = type;
              getErrorAjaxData(type);
            }
          }
        };
      }]);
})(angular);
