//Source: ../../libraries/tve/scripts/auth/tve-login-button-directive.js
(function(ng, $) {

  ng.module('tve.auth.directives')
      .directive('usaTveLoginButton', [
        '$rootScope', '$cookies', 'tveAuthConfig', 'authService', 'helper', 'tveModal', 'usaCustomAnimation',
        function ($rootScope, $cookies, tveAuthConfig, authService, helper, tveModal, usaCustomAnimation) {
          return {
            replace: true,
            restrict: 'EA',
            scope: {},
            template: '<a ng-href="{{currentProvider.mvpd_url}}" target="_blank">' +
            '<img ng-if="isAuthenticated && currentProvider && !isRetina" title="{{currentProvider.title}}" alt="{{currentProvider.title}}" ng-src="{{currentProvider.mvpd_color}}" />' +
            '<img ng-if="isAuthenticated && currentProvider && isRetina" title="{{currentProvider.title}}" alt="{{currentProvider.title}}" ng-src="{{currentProvider.mvpd_color_2x}}" />' +
            '<span class="sign-in login-icon" ng-hide="isAuthenticated"></span>' +
            '</a>',
            link: function (scope, element, attr) {
              var loadingClassName = attr.loadingClassName || 'loading',
                  verificationInProgress = !!$cookies[tveAuthConfig.cookies.VERIFICATION] || !$cookies[tveAuthConfig.cookies.FIRST_VISIT],
                  text = {
                    'true': Drupal.t(attr.verificationText ? attr.verificationText : 'Verifying'),
                    'false': Drupal.t(attr.loginText ? attr.loginText : 'Sign in')
                  },
                  space,
                  resized,
                  windowVar = ng.element(window),
                  headerRight = ng.element('.rightHeaderWrap'),
                  headerLeft = ng.element('.mainHeaderLinks'),
                  mainMenuLi = ng.element('.mainMenu .addedLinks li'),
                  headerMenuLiHidden = ng.element('.mainHeaderLinks li'),
                  responsiveHeader = headerRight.length > 0,
                  showUsaModal = false, // default value
                  isCookiesEnabled = helper.cookiesEnabled(),
                  isMobile = helper.device.isMobile;

              console.info(isMobile);

              scope.isAuthenticated = authService.isAuthenticated();
              scope.login = authService.openLoginModal;
              scope.verificationInProgress = verificationInProgress;
              scope.text = text[verificationInProgress];
              $rootScope.isRetina = scope.isRetina = helper.isRetina;

              if (scope.isAuthenticated) {
                authService.getSelectedProvider().then(function (providerInfo) {
                  scope.currentProvider = providerInfo;
                });
              }
              else if (!verificationInProgress) {
                addLoginListener();
                // show tve help links
                usaCustomAnimation.showTveHelpLinkUsa(500, 'signIn');
              }

              // tracking verification cookie to show loading state
              if (verificationInProgress) {
                element.addClass(loadingClassName);

                if (authService.isFirstVisit()) {
                  // show tve help links
                  usaCustomAnimation.showTveHelpLinkUsa(500, 'signIn');
                }

                if (!!$cookies[tveAuthConfig.cookies.VERIFICATION]) {
                  // check on cookie status
                  if (isCookiesEnabled == false) {
                    return false;
                  } else if (!isMobile){
                    // check on private mode
                    helper.isPrivateMode().then(function (isPrivate) {
                      if (!isPrivate) {
                        // set modal status on true
                        showUsaModal = true;

                        // fired status modal
                        tveModal.open({
                          templateUrl: 'usaLoginModalStatus.html',
                          windowClass: 'loginModal ' + tveAuthConfig.className
                        });
                      }
                    })
                  }
                }
              }

              if (responsiveHeader) {
                windowVar.on('resize', function () {
                  clearTimeout(resized);
                  resized = setTimeout(checkSpace(), 500);
                });

                checkSpace();
              }

              // waiting for auth-check resolve
              authService.promise.then(function (status) {
                element.off('click.login');

                if (scope.isAuthenticated = status.isAuthenticated) {
                  $rootScope.isAuthenticated = scope.isAuthenticated;

                  authService.mvpdService.getMvpd(status.mvpdId).then(function (providerInfo) {
                    var provider = scope.currentProvider = providerInfo;

                    $rootScope.currentProvider = providerInfo;

                    element.addClass(attr.mvpdLogoClassName ? attr.mvpdLogoClassName : 'providerLogo');

                    revertLoadingState(status.isAuthenticated);
                  });
                }
                else {
                  scope.currentProvider = null;
                  addLoginListener();
                  revertLoadingState(status.isAuthenticated);
                  scope.text = text[false];
                }
                function revertLoadingState(statusIsAuth) {
                  if (verificationInProgress) {
                    element.removeClass(loadingClassName);
                    scope.text = text[false];
                    scope.verificationInProgress = false;
                    // close usa modal
                    closeUsaModal(statusIsAuth);
                  }
                }

                if (responsiveHeader) {
                  setTimeout(function () {
                    checkSpace();
                  }, 0);
                }

              });

              // close usa modal
              function closeUsaModal(statusIsAuth) {
                if (showUsaModal) {
                  setTimeout(function () {
                    var modal = tveModal.getTop();
                    modal.key.close();
                    if (!statusIsAuth) {
                      // show tve help links
                      usaCustomAnimation.showTveHelpLinkUsa(500, 'signIn');
                    }
                  }, 3000);
                }
              }

              function addLoginListener() {

                element.on('click.login', function () {

                  if ((typeof Drupal.settings.tve_cookie_detection != 'undefined' && Drupal.settings.tve_cookie_detection.status == false) && (helper.device.isSurface || helper.device.isDesktop)) {
                    tveModal.open({
                      controller: 'CookieCtrl',
                      windowClass: 'cookieNotify tveModal tveModalBx',
                      templateUrl: 'third-party-cookie-notification.html',
                      keyboard: true,
                      backdrop: 'static'
                    });
                  }
                  else {
                    authService.openLoginModal();
                  }
                });
              }

              function checkSpace() {

                var mobileAltBreakpoint = 569;

                if (windowVar.width() >= mobileAltBreakpoint) {
                  var MIN_SPACE = 60;

                  mainMenuLi.removeClass('visible');
                  headerMenuLiHidden.removeClass('hidden');

                  space = headerRight.offset().left - headerLeft.offset().left - headerLeft.width();

                  while (space <= MIN_SPACE) {
                    var lastVisibleLinkLoop = ng.element('.mainHeaderLinks li:not(.hidden):last'),
                        visibleLinksIndexLoop = lastVisibleLinkLoop.index();
                    mainMenuLi.eq(visibleLinksIndexLoop).addClass('visible');
                    lastVisibleLinkLoop.addClass('hidden');
                    space = headerRight.offset().left - headerLeft.offset().left - headerLeft.width();
                  }
                }
              }
            }
          };
        }
      ]);

})(angular, jQuery, tve, this);
