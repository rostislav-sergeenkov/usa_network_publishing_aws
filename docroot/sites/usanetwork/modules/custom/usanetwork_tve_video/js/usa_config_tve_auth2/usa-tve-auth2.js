

//Source: ../../libraries/tve/scripts/services/helper-service.js
(function(ng, modernizr, window) {
  'use strict';

  modernizr.addTest('mobile-device', function() {
    return MobileEsp.isTierIphone || MobileEsp.isTierTablet;
  });

  ng.module('tve.helper', [])
      .factory('helper', [
        '$document', '$sniffer', '$log', '$q',
        function($document, $sniffer, $log, $q) {
          var
              TABLET_DESKTOP = 1024,
              MS_IN_SECOND = 1000,
              timezones = {
                EST: -5,
                PST: -8
              },

              deviceTypes = {
                ANDROID_PHONE : 'android_phone',
                ANDROID_TABLET: 'android_tablet',
                IOS_PHONE     : 'ios_phone',
                IOS_TABLET    : 'ios_tablet',
                WINDOWS_PHONE : 'windows_phone',
                WINDOWS_TABLET: 'windows_tablet'
              },
              browserNames = {
                chrome: 'chrome',
                ie: 'explorer',
                safari: 'safari',
                firefox: 'firefox',
                opera: 'opera',
                unknown: 'unknown'
              },
              location = window.location,
              navigator = window.navigator,
              isWinSurface =
                  ($sniffer.msie && navigator.msPointerEnabled && /Touch/g.test(navigator.userAgent)) &&
                  !MobileEsp.DetectWindowsPhone(),
              lastPathArg = location.href.split('#').shift().split('?').shift().split('/').pop(),
              userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';

          modernizr.addTest('tablet-win-device', function() {
            return isWinSurface;
          });

          modernizr.addTest('mac-os', function() {
            return navigator.userAgent.indexOf('Mac') != -1;
          });

          function Storage() {
            this.storage = navigator.cookieEnabled && (window.localStorage || window.sessionStorage);
          }

          Storage.prototype.get = function(key, value) {
            var data;

            try {
              data = JSON.parse(this.storage.getItem(key));
            }
            catch (e) {
              $log.log(e);
            }

            return data;
          };

          Storage.prototype.set = function(key, value) {
            try {
              this.storage.setItem(key, JSON.stringify(value));
            }
            catch (e) {
              $log.log(e);
            }

            return this;
          };

          Storage.prototype.remove = function(key) {
            var value;

            try {
              value = JSON.parse(this.storage.getItem(key));
              this.storage.removeItem(key);
              return value;
            }
            catch (e) {
              $log.log(e);
            }

            return value;
          };

          return {
            msie: $sniffer.msie,
            storage: new Storage(),
            timezones: timezones,
            lastPathArg: lastPathArg,
            deviceTypes: deviceTypes,

            device: {
              touch: modernizr.touch,
              isSurface: isWinSurface,
              isMobile: MobileEsp.isTierIphone || MobileEsp.isTierTablet,
              isTablet: MobileEsp.isTierTablet,
              isDesktop: !MobileEsp.isTierIphone && !MobileEsp.isTierTablet,
              isJustMobile: MobileEsp.isTierIphone,

              /**
               * Calling blur() on the currently designated as the active element in
               * the document and on the given element.
               */
              hideKeyboard: function(activeElement) {
                document.activeElement.blur();
                if (activeElement && activeElement.blur) {
                  activeElement.blur();
                }
              }
            },
            isRetina: (function() {
              var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5),' +
                  '(min--moz-device-pixel-ratio: 1.5),' +
                  '(-o-min-device-pixel-ratio: 3/2),' +
                  '(min-resolution: 1.5dppx)';

              if (window.devicePixelRatio > 1) {
                return true;
              }

              if (window.matchMedia && window.matchMedia(mediaQuery).matches) {
                return true;
              }

              return false;
            })(),
            mobileDeviceType: (function() {
              var deviceType;

              switch (true) {
                case MobileEsp.isAndroid:
                  if (MobileEsp.DetectAndroidPhone()) {
                    deviceType = deviceTypes.ANDROID_PHONE;
                  }
                  else {
                    deviceType = deviceTypes.ANDROID_TABLET;
                  }
                  break;
                case MobileEsp.DetectIphoneOrIpod():
                  deviceType = deviceTypes.IOS_PHONE;
                  break;
                case MobileEsp.DetectIpad():
                  deviceType = deviceTypes.IOS_TABLET;
                  break;
                case MobileEsp.DetectWindowsPhone():
                  deviceType = deviceTypes.WINDOWS_PHONE;
                  break;
                case isWinSurface:
                  deviceType = deviceTypes.WINDOWS_TABLET;
                  break;
              }

              return deviceType;
            })(),

            breakpoints: {
              MOBILE : 'mobile',
              TABLET : 'tablet',
              DESKTOP: 'desktop'
            },

            getTimeWithOffset: function(offset, date) {
              var HOURS_MS = 3600000,
                  MINUTE_MS = 60000;

              if (!offset) {
                offset = timezones.EST;
              }
              else {
                offset = ng.isNumber(offset) ? offset : (timezones[offset] || timezones.EST)
              }

              date = date || new Date();

              var offsetMs = HOURS_MS * offset,
                  utc = date.getTime() + (date.getTimezoneOffset() * MINUTE_MS);

              return new Date(utc + offsetMs);
            },

            getTimestampInSeconds: function(date) {
              return parseInt((date || Date.now()) / MS_IN_SECOND, 10);
            },

            getURLParameter: function(name, url) {
              var result = (new RegExp(name + '=' + '(.+?)(&|$)').exec(url || location.search)||[,null])[1];
              return result ? decodeURI(result) : result;
            },

            /**
             * Converts string to boolean equivalent.
             * Workaround for basic javascript type conversion for specific strings("0", "false", "[]").
             *
             * @param {string|number|boolean} value
             * @param {boolean} allowZeroString
             * @returns {*}
             */
            toBoolean: function(value, allowZeroString) {
              if (value && value.length !== 0) {
                var v = ng.lowercase(String(value));
                value = !((!allowZeroString && v == '0') || v == 'false' || v == '[]');
              }
              else {
                value = false;
              }

              return value;
            },

            getRelativePath: function(url) {
              return Drupal.settings.basePath + (url || '');
            },

            getCurrentBreakpoint: function() {
              return $document.width() < TABLET_DESKTOP ? this.breakpoints.MOBILE : this.breakpoints.DESKTOP;
            },

            getDateFromSecondsTimestamp: function(timestamp) {
              return new Date(timestamp * MS_IN_SECOND);
            },

            toArray: function(obj, config) {
              var result = [];

              ng.forEach(obj, function(value, key) {
                var item = {};
                item[config && config.key   ? config.key : 'id'] = key;
                item[config && config.value ? config.value : 'value'] = value;
                result.push(item);
              });

              return result;
            },

            findIndex: function(arr, options) {
              if (!arr || !options) {
                return -1;
              }

              var casesNumber = Object.keys(options).length,
                  matches, index, elem;

              for (var i = 0, len = arr.length; i < len; i++) {
                matches = true;
                elem = arr[i];
                ng.forEach(options, function(value, key) {
                  if (elem[key] !== value) {
                    return matches = false;
                  }
                });

                if (matches) {
                  return i;
                }
              }

              return -1;
            },

            isMobile: function(breakpoint) {
              breakpoint = breakpoint || this.getCurrentBreakpoint();
              return breakpoint === this.breakpoints.MOBILE || breakpoint === this.breakpoints.TABLET;
            },

            throttle: function(delay, callback) {
              var lastInvocation = 0,
                  _id;

              return function() {
                var that = this,
                    dt = Date.now() - lastInvocation,
                    args = arguments;

                function call() {
                  lastInvocation = Date.now();
                  callback.apply(that, args);
                }

                _id && clearTimeout(_id);

                if (dt > delay) {
                  call();
                }
                else {
                  _id = setTimeout(call, delay - dt);
                }
              }
            },

            browser: (function() {

              var result;
              if (/chrome|crios|crmo/i.test(userAgent) && /^((?!(OPR)).)*$/i.test(userAgent)) { // Google Chrome
                result = {
                  name: browserNames.chrome,
                  chrome: true
                }
              }
              else if (/firefox|iceweasel/i.test(userAgent)) { // Mozilla Firefox
                result = {
                  name: browserNames.firefox,
                  firefox: true
                }
              }
              else if (/safari/i.test(userAgent) && /^((?!(OPR)).)*$/i.test(userAgent)) {
                result = {
                  name: browserNames.safari,
                  safari: true
                }
              }
              else if (/msie|trident/i.test(userAgent)) { // Internet Explorer
                result = {
                  name: browserNames.ie,
                  msie: true
                }
              }
              else {
                result = {
                  name: browserNames.unknown,
                  unknown: true
                }
              }

              return result;
            })(),

            cookiesEnabled: function () {
              if (this.browser.msie) {
                document.cookie = "testcookie";

                if (document.cookie.indexOf("testcookie") > -1) {
                  document.cookie = ["testcookie=; expires=", (new Date(0).toUTCString())].join('');
                  return true;
                }
                else {
                  return false;
                }
              }
              else {
                return navigator.cookieEnabled;
              }
            },

            isPrivateMode: function() {
              var postponeResult = $q.defer();

              function retry(isDone, next) {
                var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
                var id = window.setInterval(
                    function() {
                      if (isDone()) {
                        window.clearInterval(id);
                        next(is_timeout);
                      }
                      if (current_trial++ > max_retry) {
                        window.clearInterval(id);
                        is_timeout = true;
                        next(is_timeout);
                      }
                    },
                    interval
                );
              }

              function isIE10OrLater(user_agent) {
                var ua = user_agent.toLowerCase();
                if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
                  return false;
                }
                var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
                if (match && parseInt(match[1], 10) >= 10) {
                  return true;
                }
                return false;
              }

              function detectPrivateMode(callback, deffered) {
                var is_private;

                if (window.webkitRequestFileSystem && navigator.cookieEnabled) {
                  window.webkitRequestFileSystem(
                      window.TEMPORARY, 1,
                      function() {
                        is_private = false;
                      },
                      function(e) {
                        console.log(e);
                        is_private = true;
                      }
                  );
                } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
                  var db;
                  try {
                    db = window.indexedDB.open('test');
                  } catch(e) {
                    is_private = true;
                  }

                  if (typeof is_private === 'undefined') {
                    retry(
                        function isDone() {
                          return db.readyState === 'done' ? true : false;
                        },
                        function next(is_timeout) {
                          if (!is_timeout) {
                            is_private = db.result ? false : true;
                          }
                        }
                    );
                  }
                } else if (isIE10OrLater(window.navigator.userAgent)) {
                  is_private = false;
                  try {
                    if (!window.indexedDB) {
                      is_private = true;
                    }
                  } catch (e) {
                    is_private = true;
                  }
                } else if (/Safari/.test(window.navigator.userAgent) && navigator.cookieEnabled) {
                  try {
                    window.localStorage.setItem('test', 1);
                  } catch(e) {
                    is_private = true;
                  }

                  if (typeof is_private === 'undefined') {
                    is_private = false;
                    window.localStorage.removeItem('test');
                  }
                }

                retry(
                    function isDone() {
                      return typeof is_private !== 'undefined' ? true : false;
                    },
                    function next(is_timeout) {
                      callback.call(undefined, is_private, deffered);
                    }
                );
              }

              function resultCallback(is_private, deffered) {
                deffered.resolve(typeof is_private === 'undefined' ? null : is_private ? true : false);
              }

              detectPrivateMode(resultCallback, postponeResult);

              return postponeResult.promise;
            }
          };
        }
      ]);

})(angular, Modernizr, this);
;

//Source: ../../libraries/tve/scripts/services/modal-window-service.js
(function(ng) {
  'use strict';

  modalFactory['$inject'] = ['$modal', '$modalStack'];

  /**
   * Modal service wraps basics interactions with modal windows
   * Creates queue for multiple modal invocation
   *
   * @param {Object} $modal
   * @param {Object} $modalStack
   */
  function modalFactory($modal, $modalStack) {
    var _instance;

    function open(options) {
      var topWindow = $modalStack.getTop(),
          options = ng.extend({
            windowClass: 'tveModal',
            backdrop: true,
            keyboard: true,
            controller: [
              '$scope', '$modalInstance',
              function($scope, $modalInstance) {
                $scope.$modalInstance = $modalInstance;
              }
            ]
          }, options);

      if (topWindow) {
        topWindow.key.result['finally'](function() {
          _instance = newInstance(options);
        });
      }
      else {
        _instance = newInstance(options);
      }

      function newInstance(options) {
        return $modal.open(options);
      }

      return _instance;
    }

    return {
      getTop: $modalStack.getTop,
      open: open,
      showMobileAppModal: function() {
        if (Drupal.settings.tveMobileWindow.enable) {
          return open({
            templateUrl: 'mobileAppModal.html',
            windowClass: 'mobileAppModal'
          });
        }
      },
      openLiveModal: function() {
        return open({
          templateUrl: 'liveModal.html',
          controller: 'LiveModalCtrl',
          windowClass: 'tveModal liveModal'
        });
      }
    };
  }

  ng.module('tve.modal', []).factory('tveModal', modalFactory);

})(angular);
;

//Source: ../../libraries/tve/scripts/services/tve-error-service.js
(function(ng, drupalSettings) {
  'use strict';

  ng.module('tve.errorHandler', ['tve.helper', 'tve.modal'])
      .config(['$provide',
        function($provide) {
          var authConfig = drupalSettings.tve_auth;
          // @todo: move error config
          $provide.value('errorConfig', authConfig.ajaxErrors ? {} : authConfig.data.published.additional.error_configs);
        }
      ])
      .factory('tveErrorHandler', [
        '$http', '$log', 'helper', 'tveModal', 'errorConfig',
        function($http, $log, helper, tveModal, errorConfig) {
          var errorTypes = {
                FLASH     : 'flash',
                GENERAL   : 'general',
                ADOBE_PASS: 'adobepass',
                MAC_SAFARI: 'macsafari',
                PRIVATE_BROWSING: 'private_browsing'
              },
              ajaxUrl = helper.getRelativePath('tve/errors/modal/');

          ErrorModalController['$inject'] = ['$scope', 'config'];

          function ErrorModalController($scope, config) {
            var imgUrl = config.url || config.error_image;
            $scope.errorWindow = config || {};

            if (imgUrl) {
              $scope.errorWindow.errorImage = {
                'background': 'url(' + imgUrl + ') no-repeat right bottom',
                'background-size': 'contain',
                'right': '0px'
              };
            }
          }

          function openErrorModal(type) {
            var config = {
              templateUrl: 'errorsModal.html',
              windowClass: 'tveModal errorModal',
              controller: ErrorModalController,
              resolve: {
                config: function() {
                  return errorConfig[type];
                }
              }
            };

            if (errorConfig[type]) {
              return tveModal.open(config);
            }
            else {
              return $http
                  .get(ajaxUrl + type)
                  .success(function(data) {
                    errorConfig[type] = data || {};
                    tveModal.open(config);
                  })
                  .error(function() {
                    $log.error('tveErrorHandler: ajax error');
                  });
            }
          }

          return {
            errors: errorTypes,
            showErrorMessage: function(type) {
              if (!helper.device.isMobile) {
                return openErrorModal(type || errorTypes.GENERAL);
              }
              else if (type == 'private_browsing') {
                return openErrorModal(type || errorTypes.GENERAL);
              }
            }
          };
        }
      ]);

})(angular, Drupal.settings);
;

//Source: ../../libraries/tve/scripts/auth/tve-auth.js
/**
 * @file
 * tve.auth module

 * Core module for tve application.
 * Declares submodules for services and directives, includes all the dependencies from tve-core library and vendor scripts.
 * Strict mode is used.
 */
(function(ng, $, tve, drupalSettings, window) {
  'use strict';

  var authConfig = drupalSettings['tve_auth'],
      app;

  // declaring submodules for application
  ng.module('tve.auth.services', []);
  ng.module('tve.auth.directives', ['tve.filters']);

  $(function() {
    ng.element(document.body).append('<div id="adobePassIframeContainer" class="adobePassIframeContainer"></div>');

    if (!authConfig.isTve && ng.element(document.body).hasClass('auth2-pages')) {
      ng.bootstrap(document.body, ['tve.auth']);
    }
  });

  //auth module initialization
  app = ng.module('tve.auth', [
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'ui.bootstrap.modal',
    'pasvaz.bindonce',

    'tve.helper',
    'tve.modal',
    'tve.errorHandler',
    'tve.auth.services',
    'tve.auth.directives'
  ]);

  app
      .config([
        '$provide', '$logProvider',
        function($provide, $logProvider) {
          var adobePassConfig = drupalSettings.adobePass;

          // configuring debug lvl
          $logProvider.enableDebug = true;

          // configurations and constants
          $provide.value('tveAuthConfig', {
            // tve-auth2 module modals are styled with tveModalBx class
            className: 'tveModal' + (parseInt(authConfig.version, 10) > 1 ? 'Bx' : ''),
            disableAccessEnabler: Boolean(tve.adobeClientlessApi),
            cookies: {
              FIRST_VISIT: 'first_visit',
              FIRST_VISIT_LIVE_PAGE: 'first_visit_live',
              NBCU_USER: 'nbcu_user_settings',
              VERIFICATION: 'nbcu_ap_loginpending',
              USERSELECTEDMVPD: 'user_selected_mvpd',
              REDIRECT_AFTER_PAGE_LOAD: 'redirect_after_page_load'
            },
            viewMode: {
              PREVIEW: 'preview'
            },
            events: {
              OPEN_WELCOME_WINDOW: 'openWelcomeWindow'
            },
            path: {
              MVPD: 'mvpd/'
            },
            entitlementTypes: {
              FREE: 'free',
              AUTH: 'auth'
            },
            MIN_FLASH_VERSION: (adobePassConfig && adobePassConfig.adobePassFlashVer) || '10.1.13'
          });

          $provide.value('tveConfig', {
            surf: {
              SESSION_KEY: 'tveSurfSession'
            },
            events: {
              MEDIA_TICK_EVENT: 'onMediaTick',
              LIVE_SCHEDULE_UPDATE: 'updateLiveSchedule',
              UPDATE_SIZES: 'updateSizes',
              CLOSE_EVENT: 'close'
            },
            entitlementTypes: {
              FREE: 'free',
              AUTH: 'auth'
            },
            pages: {
              NODE: 'node/'
            },
            path: {
              WIDGET_JSON: 'widget/json/'
            },
            PLAYER_ID: 'pdk-player',
            GETTING_STARTED_KEY: 'isGettingStartedFlow'
          });
        }
      ])
      .run([
        '$rootScope',
        'tveErrorHandler', 'helper', 'tveAuthConfig', 'authService', 'tveModal',
        function($rootScope, tveErrorHandler, helper, tveAuthConfig, authService, tveModal) {
          var YEAR_DAYS = 365,
              MS_IN_HOUR = 3600000,
              previewStep = helper.getURLParameter('preview_step'),
              tveCookiesKeys = tveAuthConfig.cookies,
              tveAnalytics = tve.analytics ? tve.analytics : { trackAuthEvents: ng.noop, events: {} },
              suppressWelcomeModal = helper.getURLParameter('welcomemodal') == 'false',
              isPrivateMode = false;

          if (!tveAuthConfig.disableAccessEnabler) {
            helper.isPrivateMode().then(function(isPrivate){
              isPrivateMode = isPrivate;

              if (isPrivateMode && (helper.device.isDesktop || !Drupal.settings.tveMobileWindow.enable)) {
                tveErrorHandler.showErrorMessage(tveErrorHandler.errors.PRIVATE_BROWSING);
              }
              else if (!helper.cookiesEnabled() &&(helper.device.isDesktop || !Drupal.settings.tveMobileWindow.enable)) {
                tveModal.open({
                  controller: 'CookieCtrl',
                  windowClass: 'cookieNotify tveModal tveModalBx mainCookiesError',
                  templateUrl: 'cookie-notification.html',
                  keyboard: true,
                  backdrop : 'static'
                });
              }
              checkFlashVersion();
              init();
            });
          }

          function init() {
            // open preview functionality
            if (previewStep) {
              showModalPreview(previewStep);
            }
            // tracking user first visit
            else {
              if (!helper.device.isMobile) {
                trackLivePageVisit();
              }

              trackFirstVisit();
            }
          }

          function checkFlashVersion() {
            // do not display flash error for mobile devices
            if (helper.device.isMobile) {
              return;
            }

            var swfobject = window['swfobject'],
                version = tveAuthConfig.MIN_FLASH_VERSION;

            // checking the existence of swfobject plugin and getting Flash version
            if (swfobject && !swfobject.hasFlashPlayerVersion(version)) {
              tveErrorHandler.showErrorMessage(tveErrorHandler.errors.FLASH);
            }
          }

          function trackFirstVisit() {

            // stop if cookie is already set
            if (!authService.isFirstVisit()) {
              return;
            }
            // setting 'first_visit' cookie
            setFirstVisitFlag();

            if ((helper.device.isMobile || helper.device.isSurface) && Drupal.settings.tveMobileWindow.enable) {
              // listening for event if Surface device app is not configured
              // show welcome modal in this case
              $rootScope.$on(tveAuthConfig.events.OPEN_WELCOME_WINDOW, showWelcomeScreen);

              // show mobile app modal, it won't be opened for Surface devices without configured app url
              showMobileModal();
            }
            // open welcome modal if suppress flag is not provided via url and device is not mobile
            else if (!helper.device.isMobile && !suppressWelcomeModal) {
              helper.isPrivateMode().then(function(isPrivate){
                if (!isPrivate) {
                  showWelcomeScreen();
                }
              });
            }
          }

          function showWelcomeScreen() {
            if (helper.cookiesEnabled()) {
              switch (authConfig.behavior) {
                case 'auth':
                  // 3rd party cookies detection enabled.
                  if (Drupal.settings.tve_cookie_detection) {
                    // 3rd party cookies detection completed.
                    if (!Drupal.settings.tve_cookie_detection.completed) break;

                    // 3rd party cookies are enabled in browser.
                    if (Drupal.settings.tve_cookie_detection.status) {
                      authService.openLoginModal();
                    }
                    else if (helper.cookiesEnabled()) {
                      tveModal.open({
                        controller: 'CookieCtrl',
                        windowClass: 'cookieNotify tveModal tveModalBx',
                        templateUrl: 'third-party-cookie-notification.html',
                        keyboard: true,
                        backdrop : 'static'
                      });
                    }
                  }
                  else {
                    authService.openLoginModal();
                  }
                  break;
                case 'orig':
                  tveAnalytics.trackAuthEvents(tveAnalytics.events.ADOBE_PASS_LANDING);
                  authService.openWelcomeModal();
                  break;
                case 'none':
                  break;
                default:
                  tveAnalytics.trackAuthEvents(tveAnalytics.events.ADOBE_PASS_LANDING);
                  authService.openWelcomeModal();
                  break;
              }
            }
          }

          function showModalPreview(previewStep) {
            switch (previewStep) {
              case '1':
                authService.openWelcomeModal(true);
                break;
              case '2':
                authService.openLoginModal(true);
                break;
            }
          }

          function showMobileModal() {
            if (drupalSettings.tveMobileWindow.enableAtFirstVisit) {
              var tveModalInstance = tveModal.showMobileAppModal();
              if (Drupal.settings.tveMobileWindow.enable) {
                tveModalInstance.result.then(function () {
                  if(isPrivateMode && helper.cookiesEnabled()) {
                    tveErrorHandler.showErrorMessage(tveErrorHandler.errors.PRIVATE_BROWSING);
                  }
                  else if (!helper.cookiesEnabled()) {
                    tveModal.open({
                      controller: 'CookieCtrl',
                      windowClass: 'cookieNotify tveModal tveModalBx mainCookiesError',
                      templateUrl: 'cookie-notification.html',
                      keyboard: true,
                      backdrop : 'static'
                    });
                  }
                });
              }
            }
            else {
              if(isPrivateMode) {
                tveErrorHandler.showErrorMessage(tveErrorHandler.errors.PRIVATE_BROWSING);
              }
              else if (!helper.cookiesEnabled()) {
                tveModal.open({
                  controller: 'CookieCtrl',
                  windowClass: 'cookieNotify tveModal tveModalBx mainCookiesError',
                  templateUrl: 'cookie-notification.html',
                  keyboard: true,
                  backdrop : 'static'
                });
              }
            }
          }

          function trackLivePageVisit() {
            var isLivePageFirstVisit = $.cookie(tveCookiesKeys.FIRST_VISIT_LIVE_PAGE) != '0',
                timeDiff, expirationTime;

            if (drupalSettings.tve_widget_live_preview_modal_window) {
              tveModal.openLiveModal();
              return;
            }

            if (!drupalSettings.enableLiveWindow || !isLivePageFirstVisit) {
              return;
            }

            if (drupalSettings.displayFrequency) {
              timeDiff = drupalSettings.displayFrequency * MS_IN_HOUR;
              expirationTime = new Date(Date.now() + timeDiff);
            }
            else {
              expirationTime = new Date();
              expirationTime.setMonth(expirationTime.getMonth() + 1);
            }

            $.cookie(tveCookiesKeys.FIRST_VISIT_LIVE_PAGE, '0', {
              expires: expirationTime,
              path: drupalSettings.basePath
            });

            tveModal.openLiveModal();
          }

          function setFirstVisitFlag(val) {
            $.cookie(tveCookiesKeys.FIRST_VISIT, val || '0', {
              expires: YEAR_DAYS,
              path: drupalSettings.basePath
            });
          }
        }
      ]);

})(angular, jQuery, tve, Drupal.settings, this);
;

//Source: ../../libraries/tve/scripts/auth/tve-auth-service.js
(function(ng, $, tve, window) {
  'use strict';

  ng.module('tve.auth.services')
      .provider('authService', function() {
        this.$get = [
          '$http', '$q', '$cookies', '$cookieStore',
          'tveAuthConfig', 'helper', 'tveModal', 'tveErrorHandler',
          function($http, $q, $cookies, $cookieStore,
                   tveAuthConfig, helper, tveModal, tveErrorHandler) {

            // is resolved after adobe pass check is finished and all the resources for modals are downloaded
            var authDefer = $q.defer(),
            // names for state cookies
                tveCookiesKeys = tveAuthConfig.cookies,
                arrayPrototype = Array.prototype,
                push = arrayPrototype.push,
                concat = arrayPrototype.concat,
                tveCookie = JSON.parse($.cookie(tveCookiesKeys.NBCU_USER)),
                _isAuthenticated = tveCookie && tveCookie['authn'],
                _selectedMvpd = tveCookie&& tveCookie['selectedProvider'],
                adobePassApi, mvpdService, modalsData, modalsDataPreview;

            if (typeof Drupal.settings.tve_cookie_detection != 'undefined') {
              var thirdPartyCookieEnabled = Drupal.settings.tve_cookie_detection.status;
            }

            mvpdService = tve.mvpdService.getInstance();

            if (!tveAuthConfig.disableAccessEnabler) {
              adobePassApi = tve.adobePass.getInstance({
                mvpdService: mvpdService,
                authNCheckedSuccessCallback: function(data) {
                  authDefer.resolve(data);
                },
                authNCheckedFailedCallback: function(reason) {
                  // If flash is disabled, do not display the adobe pass error message because the flash error message will also display.
                  if (!hasValidFlashVersion()) {
                    authDefer.reject(reason);
                    return;
                  }
                  if (navigator.userAgent.indexOf('Mac') > 0 && navigator.userAgent.indexOf('Safari') > 0 && navigator.userAgent.indexOf('Chrome') == -1) {
                    tveErrorHandler.showErrorMessage(tveErrorHandler.errors.MAC_SAFARI);
                  }
                  else {
                    tveErrorHandler.showErrorMessage(tveErrorHandler.errors.ADOBE_PASS);
                  }
                  authDefer.reject(reason);
                },
                openAdobePassFrame: openLoginIframeModal
              });
            }

            _init();

            function _init() {
              var data = Drupal.settings['tve_auth'].data;

              modalsData = data['published'];
              modalsDataPreview = data['draft'];
            }

            function hasValidFlashVersion() {
              var swfobject = window['swfobject'],
                  version = tveAuthConfig.MIN_FLASH_VERSION;

              // checking the existence of swfobject plugin and getting Flash version.
              if (!swfobject || !swfobject.hasFlashPlayerVersion(version)) {
                return false;
              }
              else {
                return true;
              }
            }

            // functions
            function openWelcomeModal(isPreview) {
              var config = (isPreview ? modalsDataPreview : modalsData)['welcome_window'];

              if (!config) {
                return false;
              }

              // returning modal deffered object
              return tveModal.open({
                templateUrl: 'welcomeModal.html',
                controller: 'WelcomeModalCtrl',
                windowClass: 'welcomeModal ' + tveAuthConfig.className,
                resolve: {
                  data: function() {
                    return config;
                  }
                }
              });
            }

            function openK2Modal() {
              return tveModal.open({
                templateUrl: 'k2modal.html',
                controller: 'K2ModalCtrl',
                windowClass: 'tveModal small k2Modal'
              });
            }

            function openLoginIframeModal() {
              function openProviderIframe() {
                return tveModal.open({
                  templateUrl: 'adobePassModal.html',
                  controller: 'AdobePassCtrl',
                  windowClass: 'adobePassFrame ' + tveAuthConfig.className
                });
              }

              if (typeof Drupal.settings.tve_cookie_detection != 'undefined') {
                if (Drupal.settings.tve_cookie_detection.status == null || Drupal.settings.tve_cookie_detection.status) {
                  openProviderIframe();
                }
                else {
                  tveModal.open({
                    controller: 'CookieCtrl',
                    windowClass: 'cookieNotify tveModal tveModalBx',
                    templateUrl: 'third-party-cookie-notification.html',
                    keyboard: true,
                    backdrop : 'static'
                  });
                }
              }
              else {
                openProviderIframe();
              }
            }

            function openLoginModal(isPreview, options) {

              if (!tveAuthConfig.disableAccessEnabler) {
                //Checking the existence of a valid swfobject plugin and Flash version
                if (!helper.device.isMobile && !hasValidFlashVersion()) {
                  tveErrorHandler.showErrorMessage(tveErrorHandler.errors.FLASH);
                  return;
                }
              }

              var config = (isPreview ? modalsDataPreview : modalsData),
                  loginModalConfig = config['login_window'];

              helper.isPrivateMode().then(function(isPrivate){
                if(isPrivate) {
                  tveErrorHandler.showErrorMessage(tveErrorHandler.errors.PRIVATE_BROWSING);
                }
              });

              if (helper.device.isMobile && (!options || !options.skipMobileBehavior)) {
                var tveModalInstance = tveModal.showMobileAppModal();
                return tveModalInstance.result.then(function () {
                  if (!helper.cookiesEnabled()) {
                    tveModal.open({
                      controller: 'CookieCtrl',
                      windowClass: 'cookieNotify tveModal tveModalBx mainCookiesError',
                      templateUrl: 'cookie-notification.html',
                      keyboard: true,
                      backdrop : 'static'
                    });
                  }
                });
              }

              if (adobePassApi && adobePassApi.reopenMVPDWindow()){
                return false;
              }

              // dont show preview if data is not configured or parsed
              if (!loginModalConfig) {
                return false;
              }

              return tveModal.open({
                templateUrl: 'loginModal.html',
                windowClass: 'loginModal ' + tveAuthConfig.className,
                controller: 'LoginModalCtrl',
                resolve: {
                  data: function() {
                    loginModalConfig.brand_logo = config['welcome_window'].brand_logo;

                    return loginModalConfig;
                  },
                  options: function() {
                    return options;
                  }
                }
              });
            }

            var serviceApi = {
              promise: authDefer.promise.then(function(status) {
                _isAuthenticated = status.isAuthenticated;
                _selectedMvpd = status.mvpdId;

                return status;
              }, function() {
                return {isAuthenticated: false, mvpdId: null};
              }),
              isAuthenticated: function() {
                return _isAuthenticated;
              },
              getSelectedProvider: function() {
                return _isAuthenticated ? mvpdService.getMvpd(_selectedMvpd) : $q.when($q.reject());
              },
              mvpdService: mvpdService,
              playAsset: function(asset, link_target, entitlement) {
                var isStringParam = typeof asset === 'string',
                    link = isStringParam ? asset : asset.link,
                    openInNewWindow = /_blank/.test(isStringParam ? link_target : asset.linkTarget),
                    location = window.location,
                    isEntitled = (isStringParam ? entitlement : asset.entitlement) === 'auth';

                if (isEntitled && $cookies['nbcu_ap_loginpending']) {
                  return;
                }

                if (link) {
                  // configuring absolute path for adobe redirect after authentication
                  // basepath is included into asset.link
                  link = (/http[s]?\:\/\//g.test(link)) ? link : location.protocol + '//' + location.hostname + link;
                }

                if (!isEntitled && !helper.isMobile) {
                  // Video asset is not entitled.
                  window.location = link;
                  return;
                }

                if (!helper.device.isSurface && !helper.device.isDesktop) {
                  // Any device except of Surface (Windows) and
                  // Desktop is detected.
                  openLoginModal(false, {
                    redirectUrl: link
                  });
                  return;
                }

                if (!helper.cookiesEnabled()) {
                  tveModal.open({
                    controller: 'CookieCtrl',
                    windowClass: 'cookieNotify tveModal tveModalBx mainCookiesError',
                    templateUrl: 'cookie-notification.html',
                    keyboard: true,
                    backdrop : 'static'
                  });
                  return;
                }

                if (typeof Drupal.settings.tve_cookie_detection !== 'undefined' && !Drupal.settings.tve_cookie_detection.status) {
                  // Client (browser) doesn't support 3rd party cookies.
                  tveModal.open({
                    controller: 'CookieCtrl',
                    windowClass: 'cookieNotify tveModal tveModalBx',
                    templateUrl: 'third-party-cookie-notification.html',
                    keyboard: true,
                    backdrop : 'static'
                  });
                  return;
                }

                if (!_isAuthenticated && isEntitled) {
                  var redirectUrl;

                  // Visitor is not authenticated.
                  if (!link.match(location.href)) {
                    // if link is external
                    redirectUrl = location.href;
                    $cookies[tveCookiesKeys.REDIRECT_AFTER_PAGE_LOAD] = JSON.stringify({
                      target: link,
                      toNewWindow: openInNewWindow
                    });
                  }

                  openLoginModal(false, {
                    redirectUrl: redirectUrl || link
                  });
                  return;
                }

                // Video asset is entitled.
                // Visitor is authenticated.
                // 3rd party cookies - are enabled.
                if (openInNewWindow) {
                  // custom URL with option of opening in new window
                  window.open(link);
                } else {
                  window.location = link;
                }
              },

              /**
               * Defines if the user visited application before
               * 'first_visit' cookie is set to 0 after first visit
               *
               * @returns {boolean}
               */
              isFirstVisit: function() {
                return $cookies[tveCookiesKeys.FIRST_VISIT] != '0';
              },
              authWithAdobePass: function(id, redirectUrl) {
                authDefer.promise.then(function() {
                  adobePassApi
                      .getAuthentication(redirectUrl)
                      .setSelectedProvider(id);
                });
              },
              openWelcomeModal: openWelcomeModal,
              openK2Modal: openK2Modal,
              openLoginModal: openLoginModal,
              openLoginIframeModal: openLoginIframeModal
            };

            return serviceApi;
          }];
      });

})(angular, jQuery, tve, this);
;

//Source: ../../libraries/tve/scripts/auth/tve-login-button-directive.js
// changed for usanetwork.com
//Source: ../../libraries/tve/scripts/auth/tve-login-button-directive.js

//Source: ../../libraries/tve/scripts/auth/tve-logout-button-directive.js
// changed for usanetwork.com
//Source: ../../libraries/tve/scripts/auth/tve-logout-button-directive.js

//Source: ../../libraries/tve/scripts/auth/tve-mvpd-dropdown.js
;
(function(ng, document) {
  'use strict';

  ng.module('tve.auth.directives')
      .directive('tveMvpdDropdown', ['$filter', 'helper', '$timeout',
        function($filter, helper, $timeout) {
          return {
            replace: true,
            template:
            '<div class="tveDropdown tveMvpdDropdown" ng-class="{small: isSmall, disabled: disabled}">' +
            '<div class="head">' +
            '<span class="headLabel"><input type="text" ng-focus="scope.opened = true;" ng-keyup="searchmvpds();paginateSearchResults($event);" ng-model="mvpdSearchKey" placeholder="' + Drupal.t('Enter your provider\'s name') + '" /></span>' +
            '<div class="arrowWrap">' +
            '<div class="arrow"></div>'+
            '</div>'+
            '</div>'+
            '<div class="menu"><div class="scrollWrap">' +
            '<ul class="contentList">' +
            '<li ng-repeat="option in options" ng-mouseover="hightlight($index);" ng-class="{selected: option[valueKey] === selected[valueKey]}" ng-click="select(option);">' +
            '<a href="" ng-class="{\'show-color\': $index == current}" ng-attr-title="{{option[labelKey]}}" ng-bind-html="option[labelKey]"></a>' +
            '</li>' +
            '</ul>' +
            '</div></div>' +
            '</div>',
            scope: {
              config: '=tveMvpdDropdown',
              value: '=ngModel',
              disabled: '=ngDisabled',
              change: '&',
              searchmvpds: '&',
              mvpdSearchKey: '='
            },
            require: '?ngModel',
            link: function(scope, element, attr, ngModel) {
              var ANIMATION_TIME = 0,
                  MAX_HEIGHT = 200,
                  OPENED_CLASS_NAME = 'opened',
                  ACTIVE_Z_INDEX = 1000,

              // Caching dom elements.
                  $menu = element.find('.menu'),
                  $scrollWrap = $menu.children(),
                  $list = $menu.find('.contentList'),
                  $head = element.find('.head'),
                  $doc = ng.element(document),
                  $window = ng.element(window),

              // Is Dropdown opened flag.
                  isOpened = false,
                  isInitiated = false,
                  scrollConfig = {
                    mouseWheelSpeed: 30,
                    verticalGutter: 0,
                    dragMinHeight: 192,
                    horizontalGutter: 3,
                    contentWidth: '0px'
                  },
                  scrollApi,

              // Initial z-index of filter.
                  zIndex;

              //ngModel.$render = function() {
              //  if (isInitiated) {
              //    scope.selected = getSelectedOption();
              //  }
              //};

              scope.isSmall = attr['small'];
              scope.labelKey = attr['tveMvpdDropdownLabel'] || 'label';
              scope.valueKey = attr['tveMvpdDropdownValue'] || 'key';

              scope.select = select;
              scope.paginateSearchResults = paginateSearchResults;

              // Event handlers.
              scope.$watchCollection('config', function(config) {
                if (config) {
                  scope.current = -1;
                  isInitiated = true;

                  scope.options = ng.isArray(config) ? config : helper.toArray(config);
                  scope.selected = getSelectedOption();
                  $timeout(function() {
                    updateScrollWrap();
                    reinit();
                  });
                }
              });

              scope.$watch('value', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                  scope.change();
                }
              });

              $head.on('click.dropdown', function(e) {
                var listHeight;

                e.preventDefault();
                if (isOpened || scope.disabled) return;

                $head.find('input').focus();
                // Saving origin z-index.
                zIndex = element.css('z-index');
                isOpened = true;

                // Applying primary z-index for active dropdown.
                element.css('z-index', ACTIVE_Z_INDEX);
                element.addClass(OPENED_CLASS_NAME);
                $menu.show(ANIMATION_TIME);

                updateScrollWrap();

                if (!reinit()) {
                  scrollApi = $scrollWrap
                      .jScrollPane(scrollConfig)
                      .data('jsp');
                }

                $window.on('resize.dropdown', reinit);

                // Add listener after open phase.
                setTimeout(function() {
                  $doc.on('click.dropdown', documentListener);
                }, 0);
              });

              // Added this function to handle mouseover.
              scope.hightlight = function(index) {
                scope.current = index;
              };

              function paginateSearchResults($keyEvent) {
                // bind keyboard events: arrows up(38) / down(40), enter(13)
                switch ($keyEvent.which) {
                  case 40:
                    // Proceeds to the next search item.
                    scope.current = (scope.current + 1) % scope.options.length;
                    break;
                  case 38:
                    // Navigates to the previous search item. Added greater than condition to handle negative values.
                    scope.current = (scope.current > 0 ? scope.current : scope.options.length) - 1;
                    break;
                  case 13:
                  case 9:
                    $keyEvent.preventDefault();
                    select(scope.options[scope.current]);
                    break;
                  default:
                    ngModel.$setViewValue(false);
                    break;
                }

                if (scope.current > 5 || scope.current == 0) {
                  var scrollTo = scope.current == 0 ? 0 : scope.current-5,
                      selectedElement = $list.find('li').eq(scrollTo).position();
                  scrollApi.scrollTo(parseInt(selectedElement.left), parseInt(selectedElement.top));
                }
              }

              // Returns the selected mvpd.
              function getSelectedOption() {
                var filterObj = {},
                    selectedValue, foundOption;

                filterObj[scope.valueKey] = ngModel.$viewValue;
                selectedValue = $filter('filter')(scope.options, filterObj);
                foundOption = selectedValue && selectedValue.length;

                return (foundOption ? selectedValue : scope.options)[0];
              }

              function documentListener(e) {
                // Do nothing if the custom scroll bar is clicked.
                var $target = ng.element(e.target);

                removeDocumentListener();

                if (($target.closest(element).length && $target.closest('.jspTrack').length) || $target.is("input")) {
                  $doc.one('click.dropdown', documentListener);
                  return;
                }

                closeDropDown();
              }

              function updateScrollWrap() {
                var listHeight;
                $scrollWrap.height((listHeight = $list.height()) > MAX_HEIGHT ? MAX_HEIGHT : listHeight);
              }

              function reinit() {
                return scrollApi && scrollApi.reinitialise();
              }

              // Callback for closing the mvpd drop down.
              function closeDropDown() {
                $window.off('resize.dropdown');
                $head.removeClass(OPENED_CLASS_NAME);
                element.removeClass(OPENED_CLASS_NAME);
                $menu.hide(ANIMATION_TIME);
                isOpened = false;
                element.css('z-index', zIndex);
              }

              // Removes the attached click handler.
              function removeDocumentListener() {
                $doc.off('click.dropdown', documentListener);
              }

              // Callback for mvpd selection.
              function select(option) {
                scope.opened = false;
                scope.selected = option;
                ngModel.$setViewValue(option[scope.valueKey]);
                scope.mvpdSearchKey = option[scope.labelKey];
                closeDropDown();
              }
            }
          };
        }
      ]);

})(angular, document);
;

//Source: ../../libraries/tve/scripts/auth/play-button-directive.js
(function(ng) {

  ng.module('tve.auth.directives')
      .directive('tvePlayButton', [
        'authService', '$filter',
        function(authService, $filter) {
          var lnkTrackFunc = $filter('trackLink');

          return {
            replace: true,
            template: '<span class="playButton" ng-click="trackLink(); play()"></span>',
            scope: {
              asset: '=tvePlayButton'
            },
            link: function(scope, element, attr) {
              scope.play = function() {
                authService.playAsset.apply(null, scope.asset ? [scope.asset] : [attr.link, attr.linkTarget, attr.entitlement]);
              };

              scope.trackLink = function() {
                if (attr.lnktrackName && attr.lnktrackLocation) {
                  lnkTrackFunc(undefined, attr.lnktrackLocation, attr.lnktrackName);
                }
              };
            }
          };
        }
      ]);

})(angular);


//Source: ../../libraries/tve/scripts/auth/adobe-pass-container-directive.js
(function(ng, $) {
  'use strict';

  ng.module('tve.auth.directives')
      .directive('tveAdobePassContainer', [
        'tveModal', 'helper',
        function(tveModal,  helper) {
          return {
            link: function(scope, element, attr) {
              if (!helper.device.isJustMobile) {
                var MODAL_PADDING = 50,
                    $container = ng.element(document.getElementById(attr.tveAdobePassContainer)),
                    frameWidth = $container.children().first().width() + MODAL_PADDING;
              }
              else {
                var MODAL_PADDING = 0,
                    $container = ng.element(document.getElementById(attr.tveAdobePassContainer)),
                    frameWidth = 100 + '%';
              }

              $container.show();

              scope.$on('$destroy', function() {
                $container.hide();
              });

              element
                  .append($container)
                  .parent()
                  .width(frameWidth);

              tveModal
                  .getTop()
                  .key.result
                  ['finally'](function() {
                var empty = document.createElement('div');
                empty.id = empty.className = attr.tveAdobePassContainer;
                document.body.appendChild(empty);
              });
            }
          };
        }
      ]);

})(angular, jQuery);
;

//Source: ../../libraries/tve/scripts/auth/controllers/welcome-controller.js
(function(ng) {

  ng.module('tve.auth')
      .controller('WelcomeModalCtrl', [
        '$scope', '$modalInstance',
        'authService', 'tveAuthConfig',
        'data', 'tveModal',
        function($scope, $modalInstance,
                 authService, tveAuthConfig,
                 // resolve parameter
                 data, tveModal) {

          data = data || {
                errorMessage: Drupal.t('Sorry. Error occurred while becoming a content.')
              };

          // fields
          $scope.welcomeWindow = data;

          // methods
          $scope.goToLogin = goToLogin;

          function goToLogin() {
            // closing welcome modal
            $modalInstance.close();
            // opening login modal, modals queue is handled inside modal service, no worries about welcome modal promise
            if (typeof Drupal.settings.tve_cookie_detection != 'undefined' && Drupal.settings.tve_cookie_detection.status == false) {
              return tveModal.open({
                controller: 'CookieCtrl',
                windowClass: 'cookieNotify tveModal tveModalBx',
                templateUrl: 'third-party-cookie-notification.html',
                keyboard: true,
                backdrop : 'static'
              });
            }

            authService.openLoginModal();
          }
        }
      ]);

})(angular);
;

//Source: ../../libraries/tve/scripts/auth/controllers/login-controller.js
(function(ng) {
  'use strict';

  ng.module('tve.auth')
      .controller('LoginModalCtrl', [
        '$scope', '$q', '$injector', '$rootScope',
        '$modalInstance',
        'tveModal', 'authService', 'tveAuthConfig', 'helper',
        // resolve parameters
        'data', 'options',
        function($scope, $q, $injector, $rootScope,
                 $modalInstance,
                 tveModal, authService, tveConfig, helper,
                 data, options) {

          var tveAnalytics = tve.analytics ? tve.analytics : { trackAuthEvents: ng.noop, events: {} },
              mvpdPromise;

          options = options || {};

          // scope variables
          $scope.loginWindow = ng.extend({
            FEATURED_MVPD_MAX: 14
          }, data);
          $scope.loadingMvpds = true;
          $scope.mvpds = {
            featured: [],
            all: []
          };

          // referencing scope methods
          $scope.login = options.loginFunction ? ng.bind(null, options.loginFunction, $modalInstance) : login;
          $scope.clickHelperLink = clickHelperLink;
          $scope.isMobile = helper.device.isJustMobile;
          $scope.isRetina = helper.isRetina;
          $scope.provider = {
            selected: ''
          };
          $scope.searchMVPDS = searchMVPDS;
          $scope.filteredMvpdList = {};

          init();

          function searchMVPDS(mvpdSearchKey) {
            var mvpdList = [],
                searchRegex = new RegExp('(?:\\s|^)' + mvpdSearchKey, 'gi');

            if (typeof mvpdSearchKey == 'undefined') {
              return false;
            }

            ng.forEach($scope.mvpds.all, function(item) {
              if (!!ng.isArray(item.title.match(searchRegex))) {
                mvpdList.push(item);
              }
            });

            $scope.filteredMvpdList = mvpdList;

            $scope.mvpdListCentered = $scope.mvpds.featured.length <= $scope.loginWindow.FEATURED_MVPD_MAX * 0.5;

            return false;
          }

          function init() {
            var platform = authService.mvpdService,
                promisesStack = [authService.promise];

            tveAnalytics.trackAuthEvents(tveAnalytics.events.MVPD_SELECTION);

            if (options.mvpdServiceConfig) {
              platform = authService.mvpdService.addPlatform(options.mvpdServiceConfig);
              promisesStack.pop();
            }

            mvpdPromise = platform.getMvpd();
            promisesStack.push(mvpdPromise);

            authService.promise
                .then(function(status) {
                  if (status.isAuthenticated) {
                    $scope.$close();
                  }
                });

            $q.all(promisesStack)['finally'](function() {
              setTimeout(function() {
                $scope.loadingMvpds = false;
              }, 0);
            });

            mvpdPromise.then(function(mvpds) {
              ng.forEach($scope.mvpds, function(group, id) {
                Array.prototype.push.apply(group, mvpds[id]);
              });
              $scope.filteredMvpdList = $scope.mvpds.all;
              $scope.mvpdListCentered = $scope.mvpds.featured.length <= $scope.loginWindow.FEATURED_MVPD_MAX * 0.5;
            });
          }

          function clickHelperLink(showZendeskModal) {
            var zendeskService;

            if (showZendeskModal) {
              try {
                zendeskService = $injector.get('zendeskModal');
              }
              catch (e) {}

              zendeskService && zendeskService.openZenddeskFormModal();
            }

            $scope.$close();
          }

          function login(id) {
            if (id === false || id == '') {
              return false;
            }
            $modalInstance.result.then(function() {
              authService.authWithAdobePass(id, options.redirectUrl);
            });

            authService.promise.then(function() {
              $modalInstance.close();
            });
          }

          $scope.mvpdListCentered = $scope.mvpds.featured.length <= $scope.loginWindow.FEATURED_MVPD_MAX * 0.5;
        }
      ]);

})(angular);
;

//Source: ../../libraries/tve/scripts/auth/controllers/adobe-pass-controller.js
(function(ng, tve) {
  'use strict';

  ng.module('tve.auth')
      .controller('AdobePassCtrl', [
        '$scope', '$modalInstance',
        function($scope, $modalInstance) {
          $modalInstance.result['finally'](function() {
            tve.adobePass.cancelAuthentication();
          });
        }
      ]);

})(angular, tve);
;

//Source: ../../libraries/tve/scripts/auth/controllers/thirt-party-cookie-controller.js
(function(ng, tve) {
  'use strict';

  ng.module('tve.auth')
      .controller('CookieCtrl', [
        '$scope', 'helper',
        function($scope, helper) {
          var desktopCheck = !helper.device.isJustMobile && !helper.device.isTablet,
              mobileCheck = helper.device.isJustMobile || helper.device.isTablet;
          $scope.browserName = helper.browser.name;
          $scope.isChrome = desktopCheck && helper.browser.chrome;
          $scope.isOpera = desktopCheck && helper.browser.opera;
          $scope.isFirefox = desktopCheck && helper.browser.firefox;
          $scope.isSafari = desktopCheck && helper.browser.safari;
          $scope.isIE = desktopCheck && helper.browser.msie;
          $scope.unknown = desktopCheck && helper.browser.unknown;
          $scope.isMobChrome = mobileCheck && helper.browser.chrome;
          $scope.isMobSafari = mobileCheck && helper.browser.safari;
          $scope.isMobOther = mobileCheck && helper.browser.unknown;
        }
      ]);

})(angular, tve);
