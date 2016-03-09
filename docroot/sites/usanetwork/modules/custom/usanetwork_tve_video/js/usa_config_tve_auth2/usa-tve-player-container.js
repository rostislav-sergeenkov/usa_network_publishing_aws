//Source: ../../libraries/tve/scripts/directives/tve-player-directive.js
(function (ng, $) {
  'use strict';

  // custome usanetwork directive usaTvePlayer
  ng.module('tve.auth.directives')
      .directive('usaTvePlayer', [
        '$rootScope',
        '$sce', 'authService',
        function ($rootScope, $sce, authService) {
          return {
            replace: false,
            // apply client side iframe rendering to reduce cache problem for dynamic url
            template: '<iframe data-ng-src="{{src}}" src="about:blank" id="{{id}}" allowfullscreen="" frameborder="0"></iframe>',
            // directive describe below
            require: '^usaTvePlayerContainer',
            scope: true,
            compile: function(tElement, tAttr) {
              var config = tAttr;

              return function(scope, element, attr, controller) {
                var SRC_PARAMS = [{
                      attrName: 'mbr',
                      key: 'mbr'
                    },
                      {
                        attrName: 'fwSiteSection',
                        key: 'FWsiteSection'
                      }],
                    MVPD_ID_KEY = 'MVPDid',
                    params;

                scope.id = config.id;

                authService.promise.then(init);

                function init(status) {
                  // passing iframe url as trusted to the template
                  scope.src = $sce.trustAsResourceUrl(config.src + '?' + getQueryParams(status.isAuthenticated && status.mvpdId));
                }

                /**
                 * Returns url params string for player source
                 *
                 * @param {boolean|string} mvpdId MVPD id string for the authenticated users and false for non.
                 * @returns {string} query params string
                 */
                function getQueryParams(mvpdId) {
                  if (scope.isEntitled === 'auth') {
                    params = {
                      autoPlay: false
                    };
                  } else {
                    params = {
                      autoPlay: true
                    };
                  }

                  ng.forEach(SRC_PARAMS, function(param, i) {
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

      // custom usanetwork directive usaTvePlayerContainer
      .directive('usaTvePlayerContainer', [
        '$rootScope',
        'authService', 'tveAuthConfig', 'tveConfig', 'helper', 'tveModal', '$timeout', '$http', '$sce', '$cookies', 'usaPlayerService', 'usaEndCardService',

        function ($rootScope,
                  authService, tveAuthConfig, tveConfig, helper, tveModal, $timeout, $http, $sce, $cookies, usaPlayerService, usaEndCardService) {
          return {
            scope: true,
            controller: ['$scope', function ($scope) {
              this.isEntitled = function() {
                return $scope.isEntitled;
              };
            }],
            link: function (scope, element, attr) {

              var body, playerContainer, tveAnalytics, userStatus, isLive, isShowEndCard,
                  isEntitlement, isMicrosite, playerId, episodeRating, episodeTitle, mpxGuid, encodedToken;

              // set vars value
              body = ng.element('body');
              playerContainer = element;
              isLive = attr['isLive'] === '1' ? true : false;
              encodedToken = null;
              episodeRating = attr['episodeRating'];
              episodeTitle = attr['episodeTitle'];
              mpxGuid = attr['mpxGuid'];
              isEntitlement = attr['entitlement'];
              isShowEndCard = attr['showEndCard'] === 'true' ? true : false;
              playerId = tveConfig.PLAYER_ID;
              isMicrosite = body.hasClass('page-node-microsite') ? true : false;
              tveAnalytics = tve.analytics ? tve.analytics : {authzTrack: ng.noop};

              // stop & retun if livePlayer = 1 (true);
              if (isLive) {
                return;
              }

              // check $pdk object
              if (!($pdk = window.$pdk)) {
                return;
              }

              // show dart
              $rootScope.isDartReq = true;
              $rootScope.statusAd = false;

              scope.isEntitled = isEntitlement;
              scope.isMobile = helper.device.isMobile;
              scope.showCompanionAdd = false;
              scope.statusPlayerLoaded = false;
              scope.statusSetToken = false;

              scope.user = {
                isAuthenticated: authService.isAuthenticated()
              };

              // Open login modal window on thumbnail click
              // referencing openLoginModal function to the current scope 
              scope.openLoginWindow = authService.openLoginModal;

              authService.promise.then(function (status) {
                userStatus = status;

                if (scope.showPlayer = showPlayer()) {

                  // check Authenticated and delete thumbnail if Authenticated = true
                  scope.user.isAuthenticated = status.isAuthenticated;

                  if (!isMicrosite) {
                    // auth video
                    if (status.isAuthenticated && isEntitlement === 'auth') {
                      initiateAuthorization();
                    }
                    setTimeout(function () {
                      _bindPlayerEvents(playerId);
                    }, 0);
                  }
                }
              });

              // wait when load release
              usaPlayerService.promise.then(function (data) {
                if (isEntitlement === 'auth') {
                  if (scope.statusPlayerLoaded && scope.statusSetToken) {
                    $pdk.controller.clickPlayButton();
                  }
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
                if (isEntitlement === 'auth') {
                  if (Drupal.settings.tve_cookie_detection != undefined) {
                    return !scope.isMobile && authService.isAuthenticated() && Drupal.settings.tve_cookie_detection.status;
                  }
                  else {
                    return !scope.isMobile && authService.isAuthenticated();
                  }
                } else if (isMicrosite) {
                  return !scope.isMobile && authService.isAuthenticated();
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
                    //_authzFailure(response);
                    _authzFailure();
                  }
                });
              }

              /**
               * Bind Player Events
               * @private
               */
              function _bindPlayerEvents(player_Id, dataObj) {

                var data = dataObj || {};

                //rebind $pdk each time directive is loaded
                $pdk.bind(player_Id);

                // default listeners for player
                if (isEntitlement !== 'auth') {
                  $pdk.controller.addEventListener('auth_success', _authSuccess);
                  $pdk.controller.addEventListener('auth_token_failed', _authzFailure);
                }
                $pdk.controller.addEventListener('companion_ad', _companionAd);
                $pdk.controller.addEventListener('OnShowProviderPicker', _showPicker);
                $pdk.controller.addEventListener('OnPlayerLoaded', _onPlayerLoaded);
                $pdk.controller.addEventListener('OnMediaStart', _onMediaStart);

                // init end card service
                //if (isShowEndCard) {
                //  usaEndCardService.init(data);
                //}

                //$pdk.controller.addEventListener('OnMediaPause', _onMediaPause);
                //$pdk.controller.addEventListener('OnMediaUnpause', _onMediaUnpause);
              }


              // create public method _bindPlayerEvents
              // 1. player_Id - important, default id='pdk-player'
              // 2. dataObj - used only for reinit end card
              // you need prepare new dataApi with your params
              // docroot/sites/usanetwork/modules/custom/usanetwork_tve_video/js/usa_config_tve_auth2/usa-tve-endcard.js
              $pdk.bindPlayerEvents = _bindPlayerEvents;


              // clear $pdk.controllers.listeners
              $pdk.clearlisteners = function () {
                $pdk.controller.listenerId = 0;
                for (var key in $pdk.controller.listeners) {
                  delete $pdk.controller.listeners[key];
                }
              };

              /**
               * On Player Loaded
               * @private
               */
              function _onPlayerLoaded(pdkEvent) {
                if (scope.statusSetToken && !scope.statusPlayerLoaded) {
                  // change status for autoplay
                  scope.$apply(function () {
                    scope.statusPlayerLoaded = true;
                  });
                  usaPlayerService.resolve('auth success done and load release url finish');
                }
              }


              /**
               * Callback for authz Success
               * @private
               */
              function _authSuccess() {

                // change status
                scope.$apply(function () {
                  scope.statusSetToken = true;
                });

                if (isEntitlement === 'auth') {
                  $pdk.controller.setToken(encodedToken, 'authToken');
                  // check on loadReleaseUrl
                  if (scope.statusPlayerLoaded) {
                    usaPlayerService.resolve('auth success done');
                  }
                }
                tveAnalytics.authzTrack(true, authService.getSelectedProvider());
              }

              /**
               * Callback for authz Failure
               * @private
               */
              function _authzFailure(pdkEvent) {
                var errorCode = pdkEvent.data.message,
                    customAuthzMessage = _getMVPDAuthzErrorMessage(errorCode);

                scope.$apply(function () {
                  $('#' + tveConfig.PLAYER_ID).remove();
                  scope.message = customAuthzMessage || $.trim(pdkEvent.data.reasonid) || _getDefaultAuthzErrorMessage(errorCode);
                  scope.isAuthZError = true;
                });

                tveAnalytics.authzTrack(false, authService.getSelectedProvider());
              }

              /**
               * Gets Error Message for the mvpd/error code configured in MVPD Service
               * @private
               */
              function _getMVPDAuthzErrorMessage(errorCode) {
                var selectedProvider = authService.getSelectedProvider(),
                    errorMessage = '';

                switch (errorCode) {
                  case 'User not Authorized Error' :
                    errorMessage = selectedProvider.authorized_err;
                    break;
                  case 'Generic Authorization Error' :
                    errorMessage = selectedProvider.generic_err;
                    break;
                  case 'Internal Authorization Error' :
                    errorMessage = selectedProvider.internal_err;
                    break;
                }
                return errorMessage;
              }

              /**
               * Gets Error Message for the mvpd/error code configured in MVPD Service
               * @private
               */
              function _getDefaultAuthzErrorMessage(errorCode) {
                var messages = Drupal.settings.auth,
                    errorMessage;

                switch (errorCode) {
                  case 'User not Authorized Error' :
                    errorMessage = messages.adobePassAuthorizedErrMsg;
                    break;
                  case 'Generic Authorization Error' :
                    errorMessage = messages.adobePassGenericErrMsg;
                    break;
                  case 'Internal Authorization Error' :
                    errorMessage = messages.adobePassInternalErrMsg;
                    break;
                  default:
                    errorMessage = '';
                    break;
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
                } else {
                  // change status ad on false
                  updateStatusAd(false);

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
