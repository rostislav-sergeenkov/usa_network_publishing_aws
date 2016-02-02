;
(function(ng, $, tve, window, undefined) {
  'use strict';

  ng.module('tve.directives')
      .directive('tvePlayer', ['$timeout', '$http', '$rootScope', 'authService', 'tveConfig', 'tveModal', 'helper', 'idx',
        'usaEndCardService', 'usaEndCardHelper',
        function($timeout, $http, $rootScope, authService, tveConfig, tveModal, helper, idx,
                 usaEndCardService, usaEndCardHelper) {
          return {
            compile: function(tElement, tAttrs, transclude) {
              return function link(scope, element, attrs) {
                var $pdk = window.$pdk,
                    tveAnalytics = tve.analytics;

                if (!$pdk) return;

                var isLive = helper.toBoolean(attrs['live']),
                    rowId = attrs['mpxId'],
                    mpxId = !isLive && rowId && rowId.split('/').pop(),
                    resuming = false,
                    usaVideoSettingsRun = false,
                // if url contain param ?t=300
                // Drupal.settings.videoSetTime = 300
                    position = Drupal.settings.videoSetTime, // seconds
                    currentAsset, previouslyWatched, lastSave,
                    // usa vars
                    isShowEndCard = attrs['showEndCard'] === '1' ? true : false,
                    usaTvePlayer = $(element).find('[data-usa-tve-player="pdk-player"]'),
                    episodeUpNextUrl = usaTvePlayer.data('next-episode-url'),
                    episodePID = usaTvePlayer.data('episode-pid'),
                    isNextUrl = episodeUpNextUrl != '' ? true : false,
                    usaLoadReleaseUrl = false,
                    usaReleaseEnd = false;

                scope.showCompanionAdd = false;
                scope.isDartReq = true;
                scope.openLoginWindow = tveModal.openLoginModal;
                scope.isMobile = helper.device.isMobile;

                //setTimeout(function() {
                //  _bindPlayerEvents();
                //}, 0);

                // create public method _bindPlayerEvents
                // 1. player_Id - default value id='pdk-player'
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
                 * Bind Player Events
                 * @private
                 */
                function _bindPlayerEvents(player_Id, dataObj) {

                  var data = dataObj || {},
                      playerId = player_Id || tveConfig.PLAYER_ID;

                  //rebind $pdk each time directive is loaded
                  $pdk.bind(playerId);

                  $pdk.controller.addEventListener('auth_token_failed', _authzFailure);
                  $pdk.controller.addEventListener('auth_success', _authSuccess);
                  $pdk.controller.addEventListener('companion_ad', _companionAd);

                  $pdk.controller.addEventListener('OnMediaStart', _onMediaStart);
                  $pdk.controller.addEventListener("OnShowProviderPicker", _showPicker);
                  $pdk.controller.addEventListener('OnMediaEnd', function(e) {
                    var baseClip = e && e.data && e.data.baseClip;

                    if (baseClip && baseClip.isAd) {
                      lastSave = null;
                    }
                  });
                  $pdk.controller.addEventListener('OnMediaPlaying', _onMediaPlaying);
                  $pdk.controller.addEventListener('OnLoadReleaseUrl', _init);
                  //$pdk.controller.addEventListener('OnMediaError', function(e) {});

                  //live player auto-play
                  $pdk.controller.addEventListener('OnLoadRelease', function() {
                    $pdk.controller.clickPlayButton(true);
                  });

                  // init end card service
                  if (isShowEndCard) {
                    usaEndCardService.init(data);
                  } else if (isNextUrl) {
                    $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);
                  }
                }

                /*
                 * On Release Start
                 * @private
                 */
                function _onReleaseEnd(pdkEvent) {

                  if (!isShowEndCard && isNextUrl) {
                    usaReleaseEnd = true;
                  }

                  // redirect to next episode
                  usaEndCardHelper.timeoutUpNext({
                    episodeUpNextUrl: episodeUpNextUrl,
                    showTitle: attrs['showTitle'],
                    episodeTitle: attrs['episodeTitle'],
                    timeUpNext: 0
                  });
                }

                function _showPicker() {
                  scope.$apply(function() {
                    $.cookie('nbcu_user_settings', '', { expires: -1, path: '/' });
                    tveModal.openLoginModal();
                  });
                }

                function _init(pdkEvent) {
                  if (!isLive && $rootScope.global.isLoggedInIdx) {
                    idx.promise.then(function() {
                      var assetInfo = idx.wasWatchedEarlier(mpxId);

                      if (previouslyWatched = assetInfo && assetInfo.percentComplete > 10 ? assetInfo : undefined) {
                        currentAsset = ng.extend({}, currentAsset, previouslyWatched);
                        scope.previouslyWatched = previouslyWatched;

                        scope.resume = function() {
                          scope.previouslyWatched = null;
                          $pdk.controller.clickPlayButton(true);
                          resuming = true;
                        };

                        scope.play = function() {
                          scope.previouslyWatched = null;
                          $pdk.controller.clickPlayButton(true);
                        }
                      }
                      else {
                        $pdk.controller.clickPlayButton(true);
                      }
                    });
                  } else {
                    //$pdk.controller.clickPlayButton(true);
                  }

                  // call usaLoadReleaseUrl
                  if (!isShowEndCard && !usaLoadReleaseUrl && usaReleaseEnd) {
                    usaLoadReleaseUrl = usaEndCardHelper.playerApi.usaLoadReleaseUrl(pdkEvent.data.pid, episodePID);
                  }
                }

                /**
                 * Media Start event callback so that we can show the metadata section
                 */
                function _onMediaStart(pdkEvent) {
                  var baseClip = pdkEvent && pdkEvent.data && pdkEvent.data.baseClip;

                  if (!baseClip.isAd && resuming) {
                    resuming = false;
                    $pdk.controller.seekToPercentage(previouslyWatched.percentComplete);
                  }

                  if (baseClip && pdkEvent.data.baseClip.isAd) {
                    // Functionality for ad playing event
                    updateStatusAd(pdkEvent.data.baseClip.isAd);
                  }
                  else {
                    if($('.dart-tag').length) {
                      scope.$apply(function() {
                        scope.isFreeWheelReq = true;
                        scope.isDartReq = false;
                      });
                    }
                    scope.$apply(function() {
                      scope.showCompanionAdd = false;
                    });
                  }

                  if (!isLive && baseClip) {
                    var videoData = pdkEvent.data;

                    currentAsset = {
                      contentId: baseClip.contentID,
                      duration: videoData.mediaLength
                    };
                  }
                }

                function _onMediaPlaying(e) {
                  var eventInfo = e.data;

                  if (!isLive && $rootScope.global.isLoggedInIdx) {
                    //global closure in the link function
                    lastSave = lastSave || (previouslyWatched && previouslyWatched.percentComplete);

                    if (!lastSave || (Math.abs(lastSave - eventInfo.percentCompleteAggregate) > 10)) {
                      lastSave = currentAsset.percentComplete = eventInfo.percentCompleteAggregate;
                      currentAsset.timeElapsed = eventInfo.currentTimeAggregate;

                      if (currentAsset.contentId) {
                        idx.addToRecentlyWatched(currentAsset);
                      }
                    }
                  }
                }

                /**
                 * Callback for authz Failure
                 * @private
                 */
                function _authzFailure(pdkEvent) {
                  var errorCode = pdkEvent.data.message,
                      customAuthzMessage = _getMVPDAuthzErrorMessage(errorCode);

                  scope.$apply(function() {
                    $('#' + tveConfig.PLAYER_ID).remove();
                    scope.message = customAuthzMessage || $.trim(pdkEvent.data.reasonid) || _getDefaultAuthzErrorMessage(errorCode);
                    scope.isAuthZError = true;
                  });

                  tveAnalytics.authzTrack(false, authService.getSelectedProvider());
                }

                /**
                 * Callback for Companion Ad
                 * @private
                 */
                function _companionAd(pdkEvent) {
                  console.info('_companionAd event fired');
                  var targetId   = pdkEvent.data.holderId,
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
                      attr1.value="0";
                      companionIframe.setAttributeNode(attr1);

                      // set scrolling attribute to prevent iframe scrolling
                      var attr2 = document.createAttribute("scrolling");
                      attr2.value="no";
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
                      scope.$apply(function() {
                        scope.isFreeWheelReq = true;
                        //Hiding dart tag. Adding a static classname which brands have to follow when creating a tag.Making it static since we dont have control to the code
                        scope.isDartReq = false;
                      });
                    }

                    if (~targetId.indexOf('300')) {
                      scope.$apply(function() {
                        //hide video description and show companion advertisment
                        scope.showCompanionAdd = true;
                      });
                    }
                  }
                }

                /**
                 * Callback for authz Success
                 * @private
                 */
                function _authSuccess(pdkEvent) {
                  tveAnalytics.authzTrack(true, authService.getSelectedProvider());
                }

                /**
                 * Gets Error Message for the mvpd/error code configured in MVPD Service
                 * @private
                 */
                function _getMVPDAuthzErrorMessage(errorCode) {
                  var selectedProvider = authService.getSelectedProvider(),
                      errorMessage = '';

                  switch(errorCode) {
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

                  switch(errorCode) {
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
              };
            }
          };
        }
      ]);
})(angular, jQuery, tve, this);
