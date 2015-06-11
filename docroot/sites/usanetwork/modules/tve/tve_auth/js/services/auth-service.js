(function(ng, $, tve, window) {
  'use strict';
  ng.module('tve.services')
      .provider('authService', function() {

        this.$get = [
          '$http', '$q', '$cookies', '$cookieStore', '$location', '$rootScope', '$compile',
          'tveConfig', 'tveDataProvider', 'helper', 'idx', 'tveModal',
          function($http, $q, $cookies, $cookieStore, $location, $rootScope, $compile,
                   tveConfig, tveDataProvider, helper, idx, tveModal) {

            var surf = window.SURF,
                //is resolved after adobe pass check is finished and all the resources for modals are downloaded
                authDefer = $q.defer(),
                //names for state cookies
                tveCookiesKeys = tveConfig.cookies,
                //names for local storage keys to store surf session
                surfStorageKey = tveConfig.surf.SESSION_KEY,
                //list of all available providers (used in mvpd grid)
                _providers = tveDataProvider.providers,
                //session for idx user
                _idxSession = helper.storage.get(surfStorageKey),
                isLoggedInIdx = !!_idxSession;

            //returns provider info by id, uses memoization by id
            var getProviderById = (function() {
              var savedProviders = {};

              return function(id) {
                var result;

                //return providers if it's already saved
                if (savedProviders.hasOwnProperty(id)) {
                  return savedProviders[id];
                }

                ng.forEach(_providers.all, function(provider, i) {
                  //mvpd_id is a unique mvpd id
                  if (provider.mvpd_id === id) {
                    //memoizing found provider
                    savedProviders[id] = result = provider;
                    //stop looping
                    return false;
                  }
                });

                return result;
              };
            })();

            //idx initialization after adobe pass check finished, checking admin preference for idx
            if (idx.isEnabled) {
              authDefer.promise.then(function(isAuthenticated) {
                if (isAuthenticated) {
                  _initIdxAuthentication();
                }
              });
            }

            //functions
            function _initIdxAuthentication() {
              var $body = ng.element(document.body);

              surf.init();

              $rootScope.global.isLoggedInIdx = isLoggedInIdx;

              surf.event.bind(surf.events.READY, function() {
                if (isLoggedInIdx) {
                  idx.init(_idxSession);
                  setTimeout(function() {
                    $rootScope.$broadcast('idxSignedIn', _idxSession);
                  }, 0);

                }
              });

              surf.event.bind(surf.events.SIGNIN, function(e, user) {
                _idxSession = user;
                idx.init(user);
                helper.storage.set(surfStorageKey, user);
                $rootScope.$broadcast('idxSignedIn', user);
              });

              surf.event.bind(surf.events.SIGNOUT, function(e, user) {
                _idxSession = null;
                idx.destroy();
                $rootScope.$broadcast('idxSignedOut', user);
              });

              surf.event.bind(surf.events.ACCOUNT_UPDATED, function(e, user) {
                helper.storage.set(surfStorageKey, user);
                $rootScope.$broadcast('idxAccountUpdated', user);
              });
            }

            function isAuthN() {
              //TODO: angular bug probably, cookies dynamically added not with angular services are not added to the $cookieStore
              //var tveCookie = $cookieStore.get(tveCookiesKeys.NBCU_USER);
              var tveCookie = JSON.parse($.cookie(tveCookiesKeys.NBCU_USER));
              return tveCookie && tveCookie['authn'];
            }

            function logOutFromIdx() {
              surf.signout({uid: _idxSession._id});
              $rootScope.global.surfFlowActive = false;
              helper.storage.remove(surfStorageKey);
            }

            var serviceApi = {
              promise: authDefer.promise,
              isAuthN: isAuthN,
              getProviderById: getProviderById,
              resolveAuthPromise: function(value) {
                authDefer.resolve(value);
              },
              rejectAuthPromise: function(value) {
                authDefer.reject(value);
              },
              playAsset: function(asset, entitlement) {
                var isStringParam = typeof asset === 'string',
                    link = isStringParam ? asset : asset.link,
                    isEntitled = (isStringParam ? entitlement : asset.entitlement) === 'auth';

                if (isEntitled && $cookies['nbcu_ap_loginpending']) return;

                //configuring absolute path for adobe redirect after authentication
                link = (/http[s]?\:\/\//g.test(link)) ? link : window.location.origin + link;

                if (isAuthN() || !isEntitled) {
                  window.location = link;
                }
                else {
                  tveModal.openLoginModal(false, link);
                }
              },
              /**
               * Defines if the user visited application before
               * 'first_visit' cookie is set to 0 after first visit
               *
               * @returns {number}
               */
              isFirstVisit: function() {
                return $cookies[tveCookiesKeys.FIRST_VISIT] != '0';
              },
              authWithAdobePass: function(id, redirectUrl) {
                authDefer.promise.then(function() {
                  tve.adobePass
                      .getAuthentication(redirectUrl)
                      .setSelectedProvider(id);
                });
              },
              getSelectedProvider: function() {
                //TODO: angular bug probably, cookies dynamically added not with angular services are not added to the $cookieStore
                //var userCookie = $cookieStore.get(tveCookiesKeys.NBCU_USER);
                var userCookie = JSON.parse($.cookie(tveCookiesKeys.NBCU_USER));
                return userCookie ? getProviderById(userCookie['selectedProvider']) : {};
              },
              getIdxSession: function() {
                return _idxSession;
              },
              setIdxSession: function(session) {
                _idxSession = session;
              },
              logInToIdx: function() {
                $rootScope.global.surfFlowActive = true;
                surf.signinDialog();
              },
              createIdxAccount: function() {
                $rootScope.global.surfFlowActive = true;
                surf.createAccountDialog();
              },
              editIdxAccount: function() {
                $rootScope.global.surfFlowActive = true;
                surf.editAccountDialog({
                  uid: _idxSession._id,
                  signature: _idxSession._auth_signature
                });
              },
              logOutFromIdx: logOutFromIdx
            };

            return serviceApi;
          }];
      });

})(angular, jQuery, tve, this);
