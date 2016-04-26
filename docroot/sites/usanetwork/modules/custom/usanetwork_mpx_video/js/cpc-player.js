(function (ng, $) {

  var counter = 0;

  // functionality for cpc live player
  ng.module('tve.auth.directives')
      .directive('usaPlayerIsLive', [
        '$rootScope',
        'authService', '$cookies', '$timeout',
        function ($rootScope, authService, $cookies, $timeout) {

          'use strict';

          return {
            scope: true,
            compile: function (element, attrs, transclude) {
              return function (scope, $element, $attrs) {

                var user = {
                  isAuthenticated: authService.isAuthenticated() // check status
                };

                // create global scope obj
                $rootScope.user = user;
                $rootScope.playerThumbnail = true;
                $rootScope.removePlayerThumbnail = false;

                // Open login modal window on thumbnail click
                //referencing openLoginModal function to the current scope
                $rootScope.openLoginWindow = authService.openLoginModal;

                authService.promise.then(function (status) {

                  // check Authenticated and delete thumbnail if Authenticated = true
                  user.isAuthenticated = status.isAuthenticated;

                  if (scope.isAuthenticated) {

                    $rootScope.playerThumbnail = false;
                    $timeout(function () {
                      $rootScope.removePlayerThumbnail = true;
                    }, 500);
                    initLivePlayer($cookies);
                  }
                });
              };
            }
          };
        }
      ]);

  function initLivePlayer($cookies) {

    if ($cookies.nbcu_user_settings) {
      var nbcu_user_settings = JSON.parse($cookies.nbcu_user_settings),
          mvpdId = nbcu_user_settings.selectedProvider;
    }


    var contentInitObj = new NBCUniCPC.ContentInitializationObject();
    contentInitObj.videoId = "LIVE";
    contentInitObj.mediaPid = "LIVE";
    contentInitObj.fullEpisode = true;

    var parameters = new NBCUniCPC.PlayerParameters();
    parameters.autoPlay = true;
    parameters.mvpdId = mvpdId || '';

    $cpc = NBCUniCPC.load("videoplayer", NBCUniCPC.Account.USA, contentInitObj, parameters);
    $cpc.addEventListener(NBCUniCPC.Event.INSTREAM_DATA, onInStreamData);
    $cpc.addEventListener(NBCUniCPC.Event.BLACKOUT_STATUS, onBlackoutStatus);
    $cpc.addEventListener(NBCUniCPC.Event.PROGRAM_CHANGED, onProgramChanged);

    $("#videoplayer").css("border", 0);
  }

  function onInStreamData(event) {
    if (event.data.type === 'AnvatoInStreamAdProgramBeginEvent') {
      console.log('InStream Event: AnvatoInStreamAdProgramBeginEvent');
      var params = event.data.data.cuepoint.parameters;
      if (params.hasOwnProperty('nrb')) {
        if (params.nrb === 0 || params.nrb === '0') {
          console.log('Regional blackout check is on for this program.');
        } else {
          console.log('Regional blackout check is NOT on for this program.');
        }
      }
    }
  }

  //Use Blackout event to show the custom slate if the content is blacked out.
  function onBlackoutStatus(event) {
    //if event.data.entitled = false, the user cannot watch content
    if (!event.data.entitled) {
      showCustomSlate();
    }
  }

  function showCustomSlate() {
    //generate some HTML to replace the contents of the 'videoplayer' element.
    var customSlateContent = "<div id='blackout-slate'></div>";

    //use jQuery to replace contents with custom slate HTML
    $("#videoplayer").parent('.video-player-wrapper').html(customSlateContent);
  }

  function onProgramChanged(event) {

    if (counter === 0) {
      counter = counter + 1;
    } else {
      // send ajax
      Drupal.behaviors.usanetwork_menu_live_video_header.init();
      Drupal.behaviors.usanetwork_video_live.right_rail();
      Drupal.behaviors.usanetwork_video_live.related_content();

      $.ajax({
        success: function () {
          // omniture track
          if (typeof s_gi != 'undefined') {
            void (s.t());
          }
        }
      });

      // Refresh mps ad
      Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
    }

  }


})(angular, jQuery);
