;
/**
 * @file
 * tve.auth module

 * Core module for tve application.
 * Declares submodules for services and directives, includes all the dependecies from tve-core library and vendor scripts.
 * Strict mode is used.
 */
(function(ng, $, window) {
  'use strict';

  var tve = (window.tve = window.tve || {}),
      module;

  //declaring submodules for application
  ng.module('tve.services', []);
  ng.module('tve.directives', []);

  //auth module initialization
  module = ng.module('tve.auth', [
    'ngCookies', 'ngSanitize', 'ngAnimate',
    'ui.event', 'ui.keypress', 'ui.bootstrap.modal', 'ui.bootstrap.collapse',
    'tve.services', 'tve.directives'
  ]);

  module
    .config(['$provide', function($provide) {
      var adobePassConfig = Drupal.settings.adobePass,
          MIN_FLASH_VERSION = '10.1.13';

      //configurations and constants
      $provide.value('tveConfig', {
        cookies: {
          FIRST_VISIT: 'first_visit',
          FIRST_VISIT_LIVE_PAGE: 'first_visit_live',
          NBCU_USER: 'nbcu_user_settings'
        },
        surf: {
          SESSION_KEY: 'tveSurfSession'
        },
        viewMode: {
          PREVIEW: 'preview'
        },
        events: {
          MEDIA_TICK_EVENT: 'onMediaTick',
          LIVE_SCHEDULE_UPDATE: 'updateLiveSchedule',
          UPDATE_SIZES: 'updateSizes'
        },
        pages: {
          NODE: 'node/'
        },
        PLAYER_ID: 'pdk-player',
        GETTING_STARTED_KEY: 'isGettingStartedFlow',
        DONT_SHOW_IDX_LOGIN_KEY: 'dontShowIdxLogin',
        IS_IDX_LOGIN_DISPLAYED: 'isIdxLoginDisplayed',
        MIN_FLASH_VERSION: (adobePassConfig && adobePassConfig.adobePassFlashVer) || MIN_FLASH_VERSION
      });
    }])
    .run(['tveErrorHandler', 'helper', 'tveConfig', function(tveErrorHandler, helper, tveConfig) {
      if (!helper.device.isMobile) {
        var swfobject = window['swfobject'],
            version = tveConfig.MIN_FLASH_VERSION;

        if (swfobject && !swfobject.hasFlashPlayerVersion(version)) {
          tveErrorHandler.showErrorMessage(tveErrorHandler.errors.FLASH);
        }
      }
    }]);

  $(function() {
    ng.element(document.body)
        .attr('data-ng-controller', 'AuthCtrl')
        .append('<div id="adobePassIframeContainer" class="adobePassIframeContainer"></div>');

    if (!Drupal.settings.tve_auth || (Drupal.settings.tve_auth.is_tve !== 1)) {
      ng.bootstrap(ng.element(document), ['tve.auth']);
    }
  });

  module.controller('AuthCtrl', [
    '$q', '$scope', '$rootScope', '$location', '$cookies',
    'authService', 'tveModal', 'tveConfig', 'helper', 'idx', 'tveErrorHandler',
    function($q, $scope, $rootScope, $location, $cookies,
             authService, tveModal, tveConfig, helper, idx, tveErrorHandler) {
      var previewStep = $location.search()['preview_step'],
          surf = window.SURF,
          tveCookiesKeys = tveConfig.cookies,
          tveAnalytics = tve.analytics,
          welcomeModalFlag = helper.getURLParameter('welcomemodal'),
          global = {
            isAuthChecked   : false,
            isAuthN         : authService.isAuthN(),
            currentProvider : authService.getSelectedProvider()
          };

      $rootScope.global = global;

      $scope.openLoginWindow = function() {
        tveModal.openLoginModal();
      };

      authService.promise.then(function() {
        var isAuthN = authService.isAuthN(),
            idxSession = authService.getIdxSession(),
            isIdxLoginDisplayed = $.cookie(tveConfig.IS_IDX_LOGIN_DISPLAYED),
            showIdxLogin = !helper.storage.get(tveConfig.DONT_SHOW_IDX_LOGIN_KEY);

        global.currentProvider = authService.getSelectedProvider();
        global.isAuthChecked = true;
        global.isAuthN = isAuthN;
        global.gettingStarted = helper.storage.get(tveConfig.GETTING_STARTED_KEY);

        $scope.$on('idxSignedIn', function(e, user) {
          if (global.gettingStarted) {
            tveModal.openLoginModal();
          }
        });

        if (isAuthN && idx.isEnabled && !global.isLoggedInIdx && showIdxLogin && isIdxLoginDisplayed != '1') {
          tveModal.openLoginModal();
          $.cookie(tveConfig.IS_IDX_LOGIN_DISPLAYED, '1', { path: '/' });
        }
      });

      if (previewStep) {
        switch (previewStep) {
          case '1':
            tveModal.openWelcomeModal(true);
            break;
          case '2':
            tveModal.openLoginModal(true);
            break;
          case '3':
            tveModal.openLoginModal(true);
            break;
          case '4':
            tveModal.openLoginModal(true);
            break;
        }
      }
      else if (helper.device.isMobile && Drupal.settings.enableMobileWindow) {
        tveModal.showMobileAppModal();
      }
      else {
        if (authService.isFirstVisit() && welcomeModalFlag != 'false') {
          switch (Drupal.settings.windowType) {
            case 'auth':
              tveModal.openLoginModal();
              $.cookie(tveCookiesKeys.FIRST_VISIT, '0', { expires: 365, path: Drupal.settings.basePath });
              break;
            case 'orig':
              tveAnalytics.trackAuthEvents(tveAnalytics.events.ADOBE_PASS_LANDING);
              tveModal.openWelcomeModal();
              $.cookie(tveCookiesKeys.FIRST_VISIT, '0', { expires: 365, path: Drupal.settings.basePath });
              break;
            case 'none':
              break;
            default:
              tveAnalytics.trackAuthEvents(tveAnalytics.events.ADOBE_PASS_LANDING);
              tveModal.openWelcomeModal();
              $.cookie(tveCookiesKeys.FIRST_VISIT, '0', { expires: 365, path: Drupal.settings.basePath });
              break;
          }
          
        }
        else if (Drupal.settings.enableLiveWindow && !$.cookie(tveCookiesKeys.FIRST_VISIT_LIVE_PAGE)) {
          tveModal.openLiveModal();
          $.cookie(tveCookiesKeys.FIRST_VISIT_LIVE_PAGE, 1, { expires: 365, path: Drupal.settings.basePath });
        }
      }
    }]);

  module
    .directive('tvePlayButton', ['authService',
      function(authService) {

        return {
          replace: true,
          template: '<a href="" class="playButton" data-ng-class="classes" data-ng-click="play();"></a>',
          scope: {
            asset: '=tvePlayButton',
            classes: '@'
          },
          compile: function(tElement, tAttrs, transclude) {
            return function($scope, $element, $attrs) {
              $scope.play = function() {
                authService.playAsset.apply(null, $scope.asset ? [$scope.asset] : [$attrs.link, $attrs.entitlement]);
              };
            };
          }
        };
      }
    ])
    .directive('tveAuthMenu', ['$rootScope', 'authService', 'helper', 'tveConfig', 'idx',
      function($rootScope, authService, helper, tveConfig, idx) {
        return {
          replace: true,
          scope: true,
          template:
              '<ul class="item-list">' +
                '<li class="item actionLink"' +
                  'data-ng-repeat="item in settings.list"' +
                  'data-ng-click="settings.route(item)"' +
                  'data-ng-show="{{item.show || true}}"><a href="" data-ng-class="item.className" data-ng-bind="item.title"></a></li>' +
              '</ul>',
          controller: ['$scope', function($scope) {
            var strings = {
                SIGN_OUT: Drupal.t('Sign out'),
                SIGN_OUT_FROM: Drupal.t('Sign out from'),
                HI: Drupal.t('Hi') + ', ',
                SIGNING_OUT: Drupal.t('Signing out') + '...',
                SETTINGS: Drupal.t('Settings')
              },
              LOGGED_IN    = 'global.isLoggedInIdx',
              isIdxEnabled = idx.isEnabled,
              menuItems    = [],
              loading      = false,
              title        = authService.getSelectedProvider().title,
              idxOptions   = [
                {
                  title: Drupal.t('Profile login'),
                  show: '!' + LOGGED_IN,
                  className: 'account',
                  action: function() {
                    authService.logInToIdx();
                  }
                },
                {
                  title: Drupal.t('Create profile'),
                  show: '!' + LOGGED_IN,
                  className: 'account',
                  action: function() {
                    authService.createIdxAccount();
                  }
                },
                {
                  title: Drupal.t('Edit profile'),
                  show: LOGGED_IN,
                  className: 'account',
                  action: function() {
                    authService.editIdxAccount();
                  }
                },
                {
                  title: Drupal.t('Sign out profile'),
                  show: LOGGED_IN,
                  className: 'signOut',
                  action: function() {
                    authService.logOutFromIdx();
                    loading = true;
                    $scope.settings.header = strings.SIGNING_OUT;
                  }
                }
              ],
              session;

            $scope.open = function() {
              if (!loading) {
                $scope.settings.opened = !$scope.settings.opened
              }
            };

            $scope.settings = {
              opened: false,
              list: menuItems,
              className: 'signOut',
              route: function(item) {
                $scope.settings.opened = !$scope.settings.opened;
                item.action();
              }
            };

            $scope.settings.list = menuItems;

            //AdobePass logout item
            menuItems.push({
              title: title ? strings.SIGN_OUT_FROM + ' ' + title : strings.SIGN_OUT,
              className: 'signOut',
              action: function() {
                helper.storage.remove(tveConfig.GETTING_STARTED_KEY);
                $.cookie(tveConfig.IS_IDX_LOGIN_DISPLAYED, '', { expires: -1, path: Drupal.settings.basePath });
                tve.adobePass.logout();
                $rootScope.global.isLoggedInIdx && authService.logOutFromIdx();
              }
            });

            authService.promise.then(function() {
              title = authService.getSelectedProvider().title

              if (isIdxEnabled) {
                $scope.settings.list = menuItems = idxOptions.concat(menuItems);
              }
            });

            $scope.$on('idxSignedIn', function(e, user) {
              session = user;
              $rootScope.global.isLoggedInIdx = true;
            });

            $scope.$on('idxSignedOut', function(e, user) {
              session = null;
              loading = false;
              $rootScope.global.isLoggedInIdx = false;
            });
          }]
        }
      }
    ]);
})(angular, jQuery, this);
