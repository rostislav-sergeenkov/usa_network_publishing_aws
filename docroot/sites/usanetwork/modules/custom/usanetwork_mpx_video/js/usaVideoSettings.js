;
(function(ng, $) {
  'use strict';

  ng.module('tve.services')
      .factory('usaVideoSettings', [
        function () {

          // if url contain param ?t=300
          // Drupal.settings.videoSetTime = 300
          var position = Drupal.settings.videoSetTime; // seconds

          function seekToPosition() {
            if (position) {
              $pdk.controller.seekToPosition(position * 1000); // convert to milliseconds
            }
            return true;
          }

          return {
            seekToPosition: seekToPosition
          };
        }
      ]);
})(angular, jQuery);
