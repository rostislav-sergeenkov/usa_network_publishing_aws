(function (ng, $) {

  'use strict';

  // customs USA services
  ng.module('tve.auth.services')

      .factory('usaVideoService', [
        '$rootScope', '$q',
        function ($rootScope, $q) {

          var videoDefer = $q.defer(),
              serviceAPI = {
                promise: videoDefer.promise.then(function (res) {
                  return res;
                }, function (res) {
                  return res;
                }),
                resolve: function (data) {
                  videoDefer.resolve(data);
                },
                reject: function (reason) {
                  videoDefer.reject(reason);
                }
              };

          return serviceAPI;
        }])

      .factory('usaPlayerError', [
        '$rootScope',
        function ($rootScope) {

          var geoError = '<div class="geo-error"><a href="/" target="_blank"></a></div>',
              flashError = '<div class="flash-error"><a href="//get.adobe.com/flashplayer/" target="_blank"></a></div>';

          return {
            initGeoRestrictionError: function () {
              $($rootScope.playerWrap).html(geoError);
              this.hidePlayerThumbnail();
            },
            initFlashError: function () {
              $($rootScope.playerWrap).html(flashError);
              this.hidePlayerThumbnail();
            }
          };
        }])

      .factory('usaMicrositesService', [
        '$rootScope', '$q',
        function ($rootScope, $q) {

          var body = $(document.body),
              ms_player = {},
              ms_Defer = $q.defer();

          ms_player.isMicrosite = body.hasClass('page-node-microsite') ? true : false;
          ms_player.isVideoFirstRun = true;
          ms_player.isInitPlayer = false;
          ms_player.isAuthServicePromiseThen = false;
          ms_player.adAdded = function () {
            if (typeof Drupal.behaviors.microsite_scroll == 'object' && typeof Drupal.behaviors.microsite_scroll.micrositeAdAdded == 'function') {
              Drupal.behaviors.microsite_scroll.micrositeAdAdded();
            } else if (typeof Drupal.behaviors.ms_videos == 'object' && typeof Drupal.behaviors.ms_videos.adAdded == 'function') {
              Drupal.behaviors.ms_videos.adAdded();
            }
          };
          ms_player.defer = {
            isResolve: false,
            promise: ms_Defer.promise.then(function (res) {
              return res;
            }, function (res) {
              return res;
            }),
            resolve: function (data) {
              ms_Defer.resolve(data);
            },
            reject: function (reason) {
              ms_Defer.reject(reason);
            }
          };

          return ms_player;
        }])

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
        }]);

})(angular, jQuery, tve, this);
