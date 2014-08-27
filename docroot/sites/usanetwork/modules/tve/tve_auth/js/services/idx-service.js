;
(function(ng, undefined) {
  'use strict';

  //block ids
  var RECENTLY_WATCHED = 'recentlyWatched',
      FAVORITES = 'favorites';

  ng.module('tve.services')
  /**
   * TODO: improvement for rest style urls ?
   */
      .factory('idx', ['$compile', '$rootScope', '$http', 'helper', '$q', '$filter', '$timeout', 'tveErrorHandler', 'tveConfig',
        function($compile, $rootScope, $http, helper, $q, $filter, $timeout, errorHandler, tveConfig) {
          //path prefixes
          var RECENTLY_URL  = 'rw',
              FAVORITES_URL = 'fs',
              PROVIDER      = 'idx',
              //body css class name to add footer padding
              CLASS_NAME    = 'withIdxToolbar';

          //SURF safe reference
          var surf = window.SURF,
              //toolbar template
              tpl = '<div data-tve-idx-toolbar></div>',
              //defer for idx factory initialization
              idxDefer = $q.defer(),
              //body jquery object saved
              $body = ng.element(document.body),
              //toolbar scope reference
              _scope,
              //idx session
              _user;

          /**
           * Helper for assets list preprocessing
           *
           * @param obj - object to serialize into array
           * @returns {Array} - returns serialized array
           */
          function castToArray(obj, key) {
            var result = [];

            //adding keys as '_id' or 'nid' field not to override own value fields
            ng.forEach(obj, function(value, id) {
              value[key || 'mpxId'] = id;
              result.push(value);
            });

            return result;
          }

          function _getResource(url, key) {
            return $http.post(helper.getRelativePath('widget/' + url + '/get'), {
                user: _user.username,
                provider: PROVIDER
              })
              .then(function(response) {
                var data = response.data;
                _scope[key] = data != 'false' ? castToArray(data, key == FAVORITES ? 'title' : null) : [];
                $timeout(function() {
                  _scope.$broadcast(tveConfig.events.UPDATE_SIZES);
                }, 0);
              });
          }

          function _request(url, data) {
            return $http.post(helper.getRelativePath('widget/' + url), ng.extend({
                  user: _user.username,
                  provider: PROVIDER
                }, data))
                .then(function(response) {
                  return _responseMiddleLayer(response.data);
                });
          }

          function _responseMiddleLayer(data) {
            var isValidResponse = helper.toBoolean(data, true);

            if (!isValidResponse) {
              errorHandler.showErrorMessage();
            }
            return isValidResponse ? data : $q.reject(false);
          }

          function _getMpxId(data) {
            return data['mpx_id' in data ? 'mpx_id' : 'mpxId'];
          }

          return {
            promise: idxDefer.promise,
            isEnabled: Drupal.settings.auth === 'idx' && Boolean(surf),
            init: function(user) {
              var $idxToolbar = ng.element(tpl);

              _scope = $rootScope.$new();
              _user = user;

              $q.all([
                    _getResource(FAVORITES_URL, FAVORITES),
                    _getResource(RECENTLY_URL, RECENTLY_WATCHED)
                  ])
                  .then(function() {
                    $compile($idxToolbar)(_scope);
                    $body
                        .append($idxToolbar)
                        .addClass(CLASS_NAME);
                    idxDefer.resolve();
                  });

              return idxDefer.promise;
            },
            destroy: function() {
              $body.removeClass(CLASS_NAME);
              _scope.destroyWidget();
            },
            wasWatchedEarlier: function(id) {
              var foundResults = $filter('filter')(_scope[RECENTLY_WATCHED], {
                mpxId: id
              });

              return foundResults && foundResults[0];
            },
            isInFavorites: function(show) {
              var favorites = $filter('filter')(_scope[FAVORITES], {
                title: show.title
              });
              return favorites && favorites.length;
            },
            removeFromFavorites: function(show, index) {
              return _request('fs/del', {
                  title: show.title
                })
                .then(function(response) {
                  if (ng.isDefined(index)) {
                    _scope[FAVORITES].splice(index, 1);
                    setTimeout(function() {
                      _scope.$broadcast(tveConfig.events.UPDATE_SIZES);
                    }, 0);
                  }
                  else {
                    _getResource(FAVORITES_URL, FAVORITES);
                  }

                  $rootScope.$broadcast('removeFromFavorites', show);
                });
            },
            addToFavorites: function(show) {
              return _request('fs/add', {
                  title: show.title
                })
                .then(function(response) {
                  response.title = show.title;
                  _scope[FAVORITES].unshift(response);
                  $timeout(function() {
                    _scope.$broadcast(tveConfig.events.UPDATE_SIZES);
                  }, 0);
                });
            },
            addToRecentlyWatched: function(data) {
              return _request('rw/add', {
                  video_data: {
                    videoId: data.contentId,
                    timeElapsed: data.timeElapsed,
                    duration: data.duration,
                    percentComplete: data.percentComplete
                  }
                })
                .then(function() {
                  _getResource(RECENTLY_URL, RECENTLY_WATCHED);
                });
            },
            updateCounter: function(show) {
              return _request('fs/num', {
                title: show.title
              });
            },
            clearHistory: function() {
              _scope.clearInProgress = true;

              return _request('rw/clear')
                  .then(function() {
                    _scope[RECENTLY_WATCHED] = [];
                  })
                  ['finally'](function() {
                    _scope.clearInProgress = false;
                  });
            }
          };
        }
      ])
      .directive('tveIdxToolbar', ['$rootScope', '$compile', '$http', '$timeout', '$document', 'helper', 'tveConfig', 'idx',
        function($rootScope, $compile, $http, $timeout, $document, helper, tveConfig, idx) {
          return {
            replace: true,
            templateUrl: 'idxToolbar.html',
            compile: function(element, attrs, transclude) {
              return function($scope, $element, $attrs, controller) {
                $document.on('click', function(e) {
                  var $target = ng.element(e.target);

                  if (!$target.closest('.idxToolbar').length) {
                    $scope.$apply(function() {
                      $scope.closePanel();
                    });
                  }
                });

                $rootScope.$on('$routeChangeStart', closePanel);

                //state
                $scope.tabset = {};
                $scope.tabset[FAVORITES] = {
                  name: Drupal.t('Favorite Shows')
                };
                $scope.tabset[RECENTLY_WATCHED] = {
                  name: Drupal.t('Recently Watched')
                };
                $scope.selectedTab = undefined;

                //methods
                $scope.removeFromFavorites = idx.removeFromFavorites;
                $scope.togglePanel = togglePanel;
                $scope.updateCounter = updateCounter;
                $scope.clearHistory = clearHistory;
                $scope.closePanel = closePanel;
                $scope.destroyWidget = destroyWidget;

                //methods description
                function togglePanel(id) {
                  $scope.selectedTab = $scope.selectedTab === id ? undefined : id;

                  if ($scope.selectedTab) {
                    $timeout(function() {
                      $scope.$broadcast(tveConfig.events.UPDATE_SIZES);
                    }, 0);
                  }
                }

                function updateCounter(show) {
                  if (show.counterIsLoading) return;

                  show.counterIsLoading = true;
                  idx.updateCounter(show)
                      .then(function(data) {
                        show.videos_count = data || 0;
                      })
                      ['finally'](function() {
                    show.counterIsLoading = false;
                  });
                }

                function clearHistory() {
                  idx.clearHistory()
                      .then(function() {
                        $scope.tabset[RECENTLY_WATCHED].data = [];
                      });
                }

                function closePanel() {
                  $scope.selectedTab = undefined;
                }

                function destroyWidget() {
                  $element.remove();
                  $scope.$destroy();
                }
              };
            }
          };
        }
      ]);

})(angular);
