(function (ng, $) {

  'use strict';

  // customs USA services
  ng.module('tve.auth.services')

      .factory('usaMicrositesService', [
        function () {
          
          var body = $(document.body),
              ms_player = {};
          
          ms_player.isMicrosite = body.hasClass('page-node-microsite') ? true : false;
          ms_player.isVideoFirstRun = true;
          ms_player.adAdded = function () {
            if (typeof Drupal.behaviors.microsite_scroll == 'object' && typeof Drupal.behaviors.microsite_scroll.micrositeAdAdded == 'function') {
              Drupal.behaviors.microsite_scroll.micrositeAdAdded();
            } else if (typeof Drupal.behaviors.ms_videos == 'object' && typeof Drupal.behaviors.ms_videos.adAdded == 'function') {
              Drupal.behaviors.ms_videos.adAdded();
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
