(function (ng, $) {

  'use strict';

  // customs USA services
  ng.module('tve.auth.services')

      .factory('usaCustomAnimation', [
        function () {

          var usaTveHelpLink = ng.element('#usa-tve-help-link'),
              animateAPI = {

                // show tve help links
                showTveHelpLinkUsa: function (duration, sign) {

                  var time = duration || 500;

                  usaTveHelpLink.velocity({
                    right: 0
                  }, {
                    duration: time,
                    easing: 'linear',
                    begin: function (element) {
                      if ($(element).hasClass('signIn')) {
                        $(element).removeClass('signIn');
                      }
                    },
                    complete: function (element) {
                      if (sign === 'signOut') {
                        $(element).addClass('signOut');
                      } else if (sign === 'signIn') {
                        $(element).addClass('signIn');
                      }
                    }
                  });
                }
              };

          return animateAPI;
        }])

      .factory('usaPlayerService', ['$q',
        function ($q) {

          var playerDefer = $q.defer(),
              serviceApi = {
                promise: playerDefer.promise.then(promiseSuccess, promiseError),
                resolve: function (data) {
                  playerDefer.resolve(data);
                },
                reject: function (reason) {
                  playerDefer.reject(reason);
                }
              };

          // promise.then success
          function promiseSuccess(dataObj) {
            return dataObj;
          }

          // promise.then error
          function promiseError() {
            console.log('player service error');
          }

          return serviceApi;
        }]);
})(angular, jQuery, tve, this);
