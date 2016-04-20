//Source: ../../libraries/tve/scripts/directives/tve-player-directive.js
(function (ng, $) {
  'use strict';

  ng.module('tve.auth.directives')
      .directive('usaTvePlayer', [
        '$rootScope',
        '$sce', 'authService', 'usaVideoService',
        function ($rootScope, $sce, authService, usaVideoService) {
          return {
            replace: false,
            // apply client side iframe rendering to reduce cache problem for dynamic url
            template: '<iframe data-ng-src="{{src}}" src="about:blank" id="{{id}}" ' +
            'allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" frameborder="0"></iframe>',
            // directive describe below
            require: '^usaTvePlayerContainer',
            scope: true,
            compile: function (tElement, tAttr) {

              var config = tAttr;

              return function (scope, element, attr, controller) {
                var SRC_PARAMS = [{
                      attrName: 'pdk',
                      key: 'pdk'
                    },
                      {
                        attrName: 'loglevel',
                        key: 'loglevel'
                      }],
                    MVPD_ID_KEY = 'MVPDid',
                    params,
                    statusPromise = false,
                    frame = $(element).find('iframe').eq(0);

                $rootScope.playerWrap = element;
                $rootScope.playerId = attr['id'];

                scope.id = config.id;

                authService.promise.then(function (status) {
                  statusPromise = true;
                  if ($rootScope.isFullEpisode) {
                    init(status);
                  }
                });

                usaVideoService.promise.then(function () {
                  if (!$rootScope.isFullEpisode) {
                    init();
                  }
                });

                frame.bind('load', function (evt) {
                  if (statusPromise || !scope.isFullEpisode) {

                    $pdk.bind(this, true);
                    $pdk.controller.setIFrame(this, true);

                    controller._bindPlayerEvents();

                    if ($rootScope.isEntitled) {
                      controller.initiateAuthorization();
                    }

                    if (!$rootScope.isFullEpisode) {
                      controller.hidePlayerThumbnail();
                    }
                  }
                });

                function init(status) {
                  // passing iframe url as trusted to the template
                  if ($rootScope.isFullEpisode) {
                    scope.src = $sce.trustAsResourceUrl(config.src + '?ec=f&' + getQueryParams(status.isAuthenticated && status.mvpdId));
                  } else {
                    scope.src = $sce.trustAsResourceUrl(config.src + '?ec=f&' + getQueryParams());
                  }
                }

                /**
                 * Returns url params string for player source
                 *
                 * @param {boolean|string} mvpdId MVPD id string for the authenticated users and false for non.
                 * @returns {string} query params string
                 */
                function getQueryParams(mvpdId) {

                  params = {
                    autoPlay: false
                  };

                  ng.forEach(SRC_PARAMS, function (param, i) {
                    if (param.attrName in config) {
                      params[param.key] = config[param.attrName];
                    }
                  });

                  if (mvpdId) {
                    params[MVPD_ID_KEY] = mvpdId;
                  }

                  return $.param(params);
                }
              };
            }
          };
        }
      ])

      .directive('usaTvePlayerContainer', [
        '$rootScope',
        'authService', 'tveAuthConfig', 'tveConfig', 'helper', 'tveModal', '$timeout', '$http', '$sce', '$cookies',
        'usaEndCardService', 'usaEndCardHelper', 'usaMicrositesService', 'usaPlayerError', 'usaVideoService',

        function ($rootScope,
                  authService, tveAuthConfig, tveConfig, helper, tveModal, $timeout, $http, $sce, $cookies,
                  usaEndCardService, usaEndCardHelper, usaMicrositesService, usaPlayerError, usaVideoService) {
          return {
            scope: true,
            controller: ['$scope', function ($scope) {
              this.initiateAuthorization = function () {
                $scope.initiateAuthorization();
              };
              this._bindPlayerEvents = function () {
                $scope._bindPlayerEvents();
              };
              this.hidePlayerThumbnail = function () {
                $scope.hidePlayerThumbnail();
              };
            }],
            link: function (scope, element, attr) {

              var body, playerContainer, tveAnalytics, userStatus, isLive, isShowEndCard,
                  isFullEpisode, isEntitlement, isMicrosite, isMobile,
                  playerWrap, playerId, episodeRating, episodeTitle, mpxGuid, encodedToken,
                  isAdStart, nextEpisodeUrl, positionTime, usaVideoSettingsRun, endCardMetaData;

              // set vars value
              body = ng.element('body');
              playerContainer = element;
              encodedToken = null;
              episodeRating = attr['episodeRating'];
              episodeTitle = attr['episodeTitle'];
              mpxGuid = attr['mpxGuid'];
              tveAnalytics = tve.analytics ? tve.analytics : {authzTrack: ng.noop};
              isMobile = helper.device.isMobile;
              isLive = parseInt(attr['isLive']) === 1 ? true : false;
              isEntitlement = attr['entitlement'] === 'auth' ? true : false;
              isFullEpisode = parseInt(attr['isFullEpisode']) === 1 ? true : false;
              isShowEndCard = parseInt(attr['showEndCard']) === 1 ? true : false;
              isMicrosite = usaMicrositesService.isMicrosite;
              // endCardMetaData = Drupal.settings.short_endcard;

              isAdStart = false;
              nextEpisodeUrl = attr['nextEpisodeUrl'];
              usaVideoSettingsRun = false;
              positionTime = Drupal.settings.videoSetTime; // seconds

              playerWrap = $rootScope.playerWrap;
              playerId = $rootScope.playerId;

              // stop & retun if livePlayer = 1 (true);
              if (isLive) {
                return;
              }

              if (!($pdk = window.$pdk)) {
                return;
              }

              // show dart
              $rootScope.isDartReq = true;
              $rootScope.statusAd = false;
              $rootScope.isFullEpisode = isFullEpisode;
              $rootScope.isEntitled = isEntitlement;

              scope.isMobile = isMobile;
              scope.showCompanionAdd = false;
              scope.statusPlayerLoaded = false;
              scope.statusSetToken = false;
              scope.isPlayerStart = false;
              scope.isPlayerPlay = false;
              scope.isPlayerPause = false;
              scope.playerThumbnail = true;
              scope.removePlayerhumbnail = false;
              scope.user = {
                isAuthenticated: authService.isAuthenticated()
              };

              // Open login modal window on thumbnail click
              // referencing openLoginModal function to the current scope 
              scope.openLoginWindow = authService.openLoginModal;

              usaPlayerError.hidePlayerThumbnail = hidePlayerThumbnail;

              scope.initiateAuthorization = initiateAuthorization;
              scope._bindPlayerEvents = _bindPlayerEvents;
              scope.hidePlayerThumbnail = hidePlayerThumbnail;

              if (!isFullEpisode) {
                usaVideoService.resolve();
              }

              authService.promise.then(function (status) {

                userStatus = status;

                if (scope.showPlayer = showPlayer()) {
                  // check Authenticated and delete thumbnail if Authenticated = true
                  scope.user.isAuthenticated = status.isAuthenticated;

                  if (isMicrosite) {

                    usaMicrositesService.isAuthServicePromiseThen = true;

                    if (usaMicrositesService.isInitPlayer && !usaMicrositesService.defer.isResolve) {
                      usaMicrositesService.defer.resolve();
                    }
                  }
                }
              });

              usaMicrositesService.defer.promise.then(function () {
                if (usaMicrositesService.isAuthServicePromiseThen && usaMicrositesService.isVideoFirstRun) {

                  usaMicrositesService.defer.isResolve = true;
                  isEntitlement = USAN.ms_player.options.isAuth;
                  playerWrap = USAN.ms_player.options.playerWrap;
                  episodeTitle = USAN.ms_player.options.episodeTitle;
                  mpxGuid = USAN.ms_player.options.mpxGuid;
                  episodeRating = USAN.ms_player.options.episodeRating;

                  USAN.ms_player.setPlayerEvents();
                }
              });

              // check cookie status
              if (Drupal.settings.tve_cookie_detection != undefined && Drupal.settings.tve_cookie_detection.status == false) {
                tveModal.open({
                  controller: 'CookieCtrl',
                  windowClass: 'cookieNotify tveModal tveModalBx',
                  templateUrl: 'third-party-cookie-notification.html',
                  keyboard: true,
                  backdrop: 'static'
                });
              }

              /**
               * Returns true if we are ready to display the player.
               *
               * @returns {boolean}
               */
              function showPlayer() {
                if (isEntitlement) {
                  if (Drupal.settings.tve_cookie_detection != undefined) {
                    return !isMobile && authService.isAuthenticated() && Drupal.settings.tve_cookie_detection.status;
                  }
                  else {
                    return !isMobile && authService.isAuthenticated();
                  }
                } else if (isMicrosite) {
                  return !isMobile && authService.isAuthenticated();
                } else {
                  //return !scope.isMobile;
                  return true;
                }
              }

              // Callback for initiating the authorization request.
              function initiateAuthorization() {
                var DEFAULT_RATING = 'TV-14',
                    adobePassResourceId = Drupal.settings.adobePass.adobePassResourceId,
                    resource = [
                      '<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">',
                      '<channel>',
                      '<title>', adobePassResourceId, '</title>',
                      '<item>',
                      '<title><![CDATA[', episodeTitle, ']]></title>',
                      '<guid>', mpxGuid, '</guid>',
                      '<media:rating scheme="urn:v-chip">', episodeRating || DEFAULT_RATING, '</media:rating>',
                      '</item>',
                      '</channel>',
                      '</rss>'
                    ].join('');
                tve.adobePass.getAuthorization(resource, function (status, response) {
                  if (status) {
                    encodedToken = encodeURIComponent(response.token);
                    // If Adobe Pass getAuthorization status is true proceeds with playback.
                    _authSuccess();
                  }
                  else {
                    _authzFailure(response);
                  }
                });
              }

              /**
               * Bind Player Events
               * @private
               */
              function _bindPlayerEvents() {

                // default listeners for player
                $pdk.controller.addEventListener('auth_success', _authSuccess);
                $pdk.controller.addEventListener('auth_token_failed', _authzFailure);
                $pdk.controller.addEventListener('companion_ad', _companionAd);
                $pdk.controller.addEventListener('OnShowProviderPicker', _showPicker);
                $pdk.controller.addEventListener('OnPlayerLoaded', _onPlayerLoaded);
                $pdk.controller.addEventListener('OnMediaStart', _onMediaStart);
                $pdk.controller.addEventListener('OnMediaPause', _onMediaPause);
                $pdk.controller.addEventListener('OnMediaUnpause', _onMediaUnpause);
                $pdk.controller.addEventListener('OnReleaseStart', _onReleaseStart);
                $pdk.controller.addEventListener('OnReleaseError', _onReleaseError);
                $pdk.controller.addEventListener('OnShowFullScreen', _onShowFullScreen);

                $pdk.controller.addEventListener('OnSetToken', function (e) {
                  // change status
                  scope.$apply(function () {
                    scope.statusSetToken = true;
                  });

                  initAutoPlay();
                });

                // end card events
                // $pdk.controller.dispatchEvent("OnEndCardMetadata", endCardMetaData);

                // $pdk.controller.addEventListener("OnEndCardCountdownComplete", function (e) {
                //   window.location = window.location.origin + e.data.data.pageLink;
                // });
                //
                // $pdk.controller.addEventListener("OnEndCardPlaylistVideoSelected", function (e) {
                //   window.location = window.location.origin + e.data.data.pageLink;
                // });


                // init end card service
                if (isShowEndCard) {
                  usaEndCardService.init();
                } else if (nextEpisodeUrl != '') {
                  $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);
                }

                // init watchwith
                if (typeof wwLoader !== 'undefined') {
                  wwLoader.bootstrap();
                  usa_debug('init wwLoader.bootstrap()');
                }
              }

              USAN.ms_player = {

                clearPlayerEvents: function () {
                  $pdk.controller.listenerId = 0;
                  for (var key in $pdk.controller.listeners) {
                    delete $pdk.controller.listeners[key];
                  }
                },

                setPlayerEvents: function () {
                  _bindPlayerEvents();
                  if (isEntitlement && authService.isAuthenticated()) {
                    initiateAuthorization();
                  }
                },

                init: function (options) {

                  usaMicrositesService.isInitPlayer = true;

                  USAN.ms_player.options = {
                    isAuth: options.isAuth,
                    playerWrap: options.playerWrap,
                    episodeTitle: options.episodeTitle,
                    mpxGuid: options.mpxGuid,
                    episodeRating: options.episodeRating
                  };

                  isEntitlement = options.isAuth;
                  playerWrap = options.playerWrap;
                  episodeTitle = options.episodeTitle;
                  mpxGuid = options.mpxGuid;
                  episodeRating = options.episodeRating;

                  $(options.playerWrap).find('iframe').eq(0).bind('load', function () {

                    $pdk.bind(this, true);
                    $pdk.controller.setIFrame(this, true);

                    if (!usaMicrositesService.defer.isResolve && usaMicrositesService.isVideoFirstRun && usaMicrositesService.isAuthServicePromiseThen) {
                      usaMicrositesService.defer.resolve();
                    }

                    if (!options.isAuth) {
                      // change status
                      scope.$apply(function () {
                        scope.statusPlayerLoaded = false;
                      });

                      USAN.ms_player.clearPlayerEvents();
                      USAN.ms_player.setPlayerEvents();

                    } else if (scope.statusPlayerLoaded && options.isAuth) {

                      usaMicrositesService.isVideoFirstRun = false;

                      // change status
                      scope.$apply(function () {
                        scope.statusSetToken = false;
                        scope.statusPlayerLoaded = false;
                      });

                      USAN.ms_player.clearPlayerEvents();
                      USAN.ms_player.setPlayerEvents();
                    }
                  });
                }
              };

              function initAutoPlay() {

                if (isMicrosite) {
                  if (scope.statusSetToken) {
                    hidePlayerThumbnail();
                  }
                  if (isEntitlement && !usaMicrositesService.isVideoFirstRun) {
                    if (scope.statusPlayerLoaded && scope.statusSetToken) {
                      $pdk.controller.clickPlayButton();
                    }
                  }
                } else {
                  if (isEntitlement) {
                    if (scope.statusPlayerLoaded && scope.statusSetToken) {
                      $pdk.controller.clickPlayButton();
                    }
                  } else {
                    if (scope.statusPlayerLoaded && !isMobile) {
                      $pdk.controller.clickPlayButton();
                    }
                  }
                }
              }

              function hidePlayerThumbnail() {
                if (scope.playerThumbnail) {
                  scope.playerThumbnail = false;
                  $timeout(function () {
                    scope.removePlayerThumbnail = true;
                  }, 500);
                }
              }

              /*
               * On Show Full Screen
               */
              function _onShowFullScreen(pdkEvent) {
                if (pdkEvent.data) {
                  $(body).addClass('video-fullscreen');
                } else {
                  $(body).removeClass('video-fullscreen');
                }
              }

              function _onReleaseError(pdkEvent) {
                if (pdkEvent.data.exception == "GeoLocationBlocked") {
                  usaPlayerError.initGeoRestrictionError();
                } else {
                  if (scope.playerThumbnail) {
                    hidePlayerThumbnail();
                  }
                }
              }

              function _onMediaUnpause() {
                if (scope.isPlayerPause) {
                  scope.isPlayerPause = false;
                }

                scope.isPlayerPlay = true;
              }

              function _onMediaPause() {
                if (scope.isPlayerPlay) {
                  scope.isPlayerPlay = false;
                }
                scope.isPlayerPause = true;
              }

              function _onReleaseStart() {

                scope.isPlayerStart = true;
                scope.isPlayerPlay = true;
                scope.isPlayerPause = false;

                if (scope.playerThumbnail) {
                  hidePlayerThumbnail();
                }

                if (isMicrosite) {
                  usaMicrositesService.adAdded();
                }
              }

              /**
               * Media Start event callback so that we can show the metadata section
               */
              function _onMediaStart(pdkEvent) {

                var baseClip = pdkEvent && pdkEvent.data && pdkEvent.data.baseClip;

                if (baseClip && baseClip.isAd) {
                  // Functionality for ad playing event

                  // create attr when ad start
                  playerContainer.attr('data-ad-start', 'true');
                  // change status ad on true
                  updateStatusAd(true);

                  if (isAdStart == false) {
                    isAdStart = pdkEvent.data.baseClip.isAd;
                    AdobeTracking.videoBreakPoint = "Ads On";
                    _satellite.track('setVideoBreakPoint');
                  }
                } else {
                  // change status ad on false
                  updateStatusAd(false);

                  if (isAdStart) {
                    isAdStart = pdkEvent.data.baseClip.isAd;
                    AdobeTracking.videoBreakPoint = "Ads Off";
                    _satellite.track('setVideoBreakPoint');
                  }

                  if (!usaVideoSettingsRun) {
                    usaVideoSettingsRun = seekToPosition();
                  }

                  // create attr when ad start
                  playerContainer.removeAttr('data-ad-start');

                  if ($('.dart-tag').length) {
                    scope.$apply(function () {
                      $rootScope.isFreeWheelReq = true;
                      $rootScope.isDartReq = false;
                    });
                  }
                  scope.$apply(function () {
                    scope.showCompanionAdd = false;
                  });
                }
              }

              /*
               * On Release Start
               * @private
               */
              function _onReleaseEnd(pdkEvent) {

                if (!isShowEndCard && nextEpisodeUrl != '') {

                  if (isAdStart) {
                    // change status ad on false
                    isAdStart = false;
                    AdobeTracking.videoBreakPoint = "Ads Off";
                    _satellite.track('setVideoBreakPoint');
                  }

                  // redirect to next episode
                  usaEndCardHelper.timeoutUpNext({
                    episodeUpNextUrl: nextEpisodeUrl,
                    showTitle: attr['showTitle'],
                    episodeTitle: attr['episodeTitle'],
                    timeUpNext: 0
                  });
                }
              }

              /**
               * On Player Loaded
               * @private
               */
              function _onPlayerLoaded(pdkEvent) {

                scope.$apply(function () {
                  scope.statusPlayerLoaded = true;
                });

                initAutoPlay();
              }

              /**
               * Callback for authz Success
               * @private
               */
              function _authSuccess() {
                $pdk.controller.setToken(encodedToken, 'authToken');
                tveAnalytics.authzTrack(true, authService.getSelectedProvider());
              }

              /**
               * Callback for authzFailure
               * @private
               */
              function _authzFailure(response) {

                var errorPattern = /(http(s)?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?/,
                    errorParentalControl = /(P|parental\sC|control)/,
                    errorCode, errorDetails, errorBlock, errorMessage;

                if (response.requestErrorCode) {
                  errorCode = response.requestErrorCode;
                  errorDetails = response.requestErrorDetails;
                } else if (response.data.message) {
                  errorCode = response.data.message;
                  errorDetails = response.data.reasonid;
                }

                // Hides the player loading gif and displays the error message.
                scope.isPlayerLoading = false;

                authService.getSelectedProvider()
                    .then(function (providerInfo) {
                      showError(providerInfo);
                    }, function () {
                      showError(null)
                    });

                tveAnalytics.authzTrack(false, {
                  mvpd_id: userStatus.mvpdId
                });

                function showError(providerInfo) {

                  scope.isAuthZError = true;

                  // scope.message
                  errorMessage =
                      (providerInfo && _getAuthzErrorMessage(errorCode, providerInfo)) ||
                      $.trim(errorDetails) ||
                      _getAuthzErrorMessage(errorCode, Drupal.settings.adobePass.errorMessages);

                  // scope.$apply();

                  if (errorParentalControl.test(errorMessage)) {
                    if (errorPattern.test(errorMessage)) {
                      errorMessage = errorMessage.replace(errorPattern, function (str) {
                        return '<a href="' + str + '" target="_blank">' + str + '</a>';
                      })
                    }
                  }

                  errorBlock = $('<div>', {
                    class: 'player-error',
                    html: errorMessage
                  });

                  $(playerWrap).html(errorBlock);

                  if (scope.playerThumbnail) {
                    hidePlayerThumbnail();
                  }
                }
              }

              /**
               * Gets Error Message for the mvpd/error code
               * @private
               */
              function _getAuthzErrorMessage(errorCode, messages) {
                var errorMessage = '';

                if (messages) {
                  switch (errorCode) {
                    case 'User not Authorized Error' :
                      errorMessage = messages.authorized_err;
                      break;
                    case 'Generic Authorization Error' :
                      errorMessage = messages.generic_err;
                      break;
                    case 'Internal Authorization Error' :
                      errorMessage = messages.internal_err;
                      break;
                  }
                }

                return errorMessage;
              }

              /**
               * Callback for Companion Ad
               * @private
               */
              function _companionAd(pdkEvent) {
                var targetId = pdkEvent.data.holderId,
                    targetElem = document.getElementById(targetId);
                if (targetElem) {
                  // override FW default ad tag as it's not the correct format and we're not sure how to set this correctly
                  // e.g. http://ad.doubleclick.net/adj/nbcu.usa/mrm_default;sect=default;site=usa;!category=usa;!category=videoplayer;sz=300x250;pos=7;tile=7;ord=5182
                  var currentHtmlAdContent = pdkEvent.data.message;
                  var tabletSuffix = '';
                  if (typeof usa_deviceInfo !== 'undefined') {
                    if (usa_deviceInfo.mobileDevice && !usa_deviceInfo.smartphone) {
                      if (Drupal.settings.USA.DART.values.sub != '') {
                        tabletSuffix = '_tablet';
                      } else {
                        tabletSuffix = 'tablet';
                      }
                    }
                  }

                  currentHtmlAdContent = currentHtmlAdContent.replace('mrm_default', (Drupal.settings.USA.DART.values.sect + '_' + Drupal.settings.USA.DART.values.sub + tabletSuffix));
                  currentHtmlAdContent = currentHtmlAdContent.replace('sect=default', ('sect=' + Drupal.settings.USA.DART.values.sect + ';sub=' + Drupal.settings.USA.DART.values.sub));

                  // Temporary commented
                  //$(targetElem).html(currentHtmlAdContent);

                  // Temporary fix begin
                  if (tabletSuffix != '') {
                    // tablet detected
                    // create iframe object
                    var companionIframe = document.createElement('iframe');

                    // set width and height based on targetId
                    if (~targetId.indexOf('728')) {
                      companionIframe.width = '728';
                      companionIframe.height = '90';
                    }

                    if (~targetId.indexOf('300')) {
                      companionIframe.width = '300';
                      companionIframe.height = '250';
                    }

                    // set frameborder attribute to prevent iframe border
                    var attr1 = document.createAttribute("frameborder");
                    attr1.value = "0";
                    companionIframe.setAttributeNode(attr1);

                    // set scrolling attribute to prevent iframe scrolling
                    var attr2 = document.createAttribute("scrolling");
                    attr2.value = "no";
                    companionIframe.setAttributeNode(attr2);

                    // place the iframe inside the target dom element
                    $(targetElem).html(companionIframe);

                    // open the iframe document
                    companionIframe.contentWindow.document.open();

                    // format end script tag in document.write that is returned from FW to prevent premature EOF
                    currentHtmlAdContent = currentHtmlAdContent.replace(/<\\\/script>/, '<\/sc\'+\'ript>');

                    // write the HTML to the iframe
                    companionIframe.contentWindow.document.write(currentHtmlAdContent);

                    // close the iframe document
                    companionIframe.contentWindow.document.close();
                  } else {
                    $(targetElem).html(currentHtmlAdContent);
                  }
                  // End of temporary temporary fix

                  if (~targetId.indexOf('728')) {
                    scope.$apply(function () {
                      $rootScope.isFreeWheelReq = true;
                      //Hiding dart tag. Adding a static classname which brands have to follow when creating a tag.Making it static since we dont have control to the code
                      $rootScope.isDartReq = false;
                    });
                  }

                  if (~targetId.indexOf('300')) {
                    scope.$apply(function () {
                      //hide video description and show companion advertisment
                      scope.showCompanionAdd = true;
                    });
                  }
                }
              }

              // Display the mvpd picker to the user.
              function _showPicker() {
                scope.$apply(function () {
                  $.cookie('nbcu_user_settings', '', {expires: -1, path: '/'});
                  tveModal.openLoginModal();
                });
              }

              function seekToPosition() {
                if (positionTime) {
                  $pdk.controller.seekToPosition(positionTime * 1000); // convert to milliseconds
                }
                return true;
              }

              // update status
              // newStatus = true || false

              // callback for update statusAd
              function updateStatusAd(newStatus) {
                scope.$apply(function () {
                  $rootScope.statusAd = newStatus;
                });
              }
            }
          }
        }
      ]);

})(angular, jQuery, tve, this);
