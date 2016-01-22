(function (ng, $) {

  'use strict';

  // customs USA services
  ng.module('tve.services')

      .factory('usaEndCardService', ['$rootScope', '$q', '$timeout', 'helper',
        function ($rootScope, $q, $timeout, helper) {

          var $window = ng.element(window),
              $gigyaSharebars = Drupal.settings.gigyaSharebars[0].gigyaSharebar,
              endCardDefer = $q.defer(),
              episodeUpNext = ng.element('#episode-up-next'),
              episodesRelatedlist = ng.element('#player-episodes-list'),
              episodesRelatedSlider = ng.element('#player-episodes-list .related-slider'),
              playerWrapper = ng.element('[data-usa-tve-player-container]'),
              player = ng.element('[data-usa-tve-player="pdk-player"]'),
              endCardBlocks = ng.element('[data-end-card="usaEndCard"]'),
              episodeShare = ng.element('#episode-share'),
              replayButton = ng.element('[data-replay="usa-replay"]'),
          // breakpoint value for showing end card used milliseconds
              bpTimeShowEndCard = parseInt(playerWrapper.data('end-card-time')),
          // redirect timeout for Up Next Episode
              timeoutEndCard = 30000,
              bpMobileEndCard = 480,
              USAEndCardAPI = null,
          // default status value
              statusClickOnCloseEndCard = false,
              statusPlayerFullScreen = false,
              statusProcessed = false,
              statusShowEndCard = false,
              statusHidePlayer = false,
              statusEndRelease = false,
              isMobile = helper.device.isMobile,
              locationHref = window.location.href,
              shareBarWrapClass = 'episode-share-bar-wrap',
              shareBarInnerId = 'episode-share-bar',
              shareBarCounter = 0,
              easingAnimate = "linear",
              timeoutUpNext, dataApi, dataAnimate;

          // check $pdk object
          if (!($pdk = window.$pdk)) {
            return;
          }

          // default app value
          dataApi = {
            reInit: false, // true || false
            addPDKEventListeners: false, // true || false, use only for reinit if all PDK Event Listeners was delete
            sharebarParams: {
              linkBack: locationHref, // string
              title: $gigyaSharebars.ua.title,// string
              description: $gigyaSharebars.ua.description, // string
              imageUrl: $gigyaSharebars.ua.imageUrl, // string
              shareButtons: 'facebook, twitter, share' // string
            },
            upNextEpisode: {
              linkUrl: '', // string
              imgSrcThumbnail: '', // string
              season: '', // string
              episode: '', // string
              title: '' // string
            },
            relatedSlider: '', // template string '<div class="demo">demo</div>'
            replayEpisodeTitle: '' // string, active episode title
          };

          // settings for blocks animation, used milliseconds
          dataAnimate = {
            hide: {
              mobile: {
                player: {
                  delay: 100,
                  duration: 500
                },
                endCardBlocks: {
                  delay: 0,
                  duration: 350
                }
              },
              desktop: {
                player: {
                  delay: 0,
                  duration: 500
                },
                endCardBlocks: {
                  delay: 0,
                  duration: 350
                }
              }
            },
            show: {
              mobile: {
                player: {
                  delay: 0,
                  duration: 350
                },
                endCardBlocks: {
                  delay: 100,
                  duration: 500
                }
              },
              desktop: {
                player: {
                  delay: 0,
                  duration: 1000
                },
                endCardBlocks: {
                  delay: 100,
                  duration: 500
                }
              }
            }
          };

          USAEndCardAPI = {

            // add $pdk.controller listeners
            addPDKEventListeners: function () {

              $pdk.controller.addEventListener('OnReleaseStart', _onReleaseStart);
              $pdk.controller.addEventListener('OnMediaPlaying', _onMediaPlaying);
              $pdk.controller.addEventListener('OnMediaSeek', _onMediaSeek);
              $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);
              $pdk.controller.addEventListener('OnShowFullScreen', _onShowFullScreen);

              /*
               * On Release Start
               * @private
               */
              function _onReleaseStart(pdkEvent) {

                // Stop the pending timeout
                $timeout.cancel(timeoutUpNext);

                // check status end card processed
                if (statusProcessed) {
                  return false;
                }

                // reset value on default
                statusClickOnCloseEndCard = false;

                // check statusShowEndCard
                // if status = true will fired callback
                if (statusShowEndCard) {
                  // hide end card
                  USAEndCardAPI.hideEndCard(true);
                }
              }

              /*
               * On Media Playing callback
               * @private
               */
              function _onMediaPlaying(pdkEvent) {

                var playingCurrentTimeAggregate = pdkEvent.data.currentTimeAggregate,
                    playingDurationAggregate = pdkEvent.data.durationAggregate,
                    delayEndCart = 0,
                    windowWidth = USAEndCardAPI.checkWindowWidth(),
                    timeToStartEndCard, timeoutID;

                // check status end card processed
                if (statusProcessed) {
                  return false;
                }

                // check bpTimeShowEndCard < playingDurationAggregate
                // if bpTimeShowEndCard < playingDurationAggregate return
                if (bpTimeShowEndCard < playingDurationAggregate) {
                  timeToStartEndCard = playingDurationAggregate - bpTimeShowEndCard;
                } else {
                  timeToStartEndCard = playingDurationAggregate;
                }

                // it is will work if all dependencies is true
                if (playingCurrentTimeAggregate >= timeToStartEndCard && !$rootScope.statusAd
                    && !statusShowEndCard && !statusClickOnCloseEndCard && !windowWidth && !isMobile) {

                  statusProcessed = true;

                  if (statusPlayerFullScreen) {

                    // change FullScreen status
                    statusPlayerFullScreen = false;

                    // set delay for end card
                    delayEndCart = 1000;

                    // switch off ShowFullScreen
                    $pdk.controller.showFullScreen(statusPlayerFullScreen);
                  }

                  // Stop the pending timeout
                  $timeout.cancel(timeoutID);

                  // if statusPlayerFullScreen = false, delay = 0;
                  // else delay = 1000
                  timeoutID = $timeout(function () {
                    // show end card
                    USAEndCardAPI.showEndCard();
                  }, delayEndCart);
                } else {
                  if (windowWidth && statusShowEndCard) {
                    USAEndCardAPI.hideEndCard(true);
                  }
                }
              }

              /**
               * On Media Seek callback
               * @private
               */
              function _onMediaSeek(pdkEvent) {

                var seekDurationAggregate = pdkEvent.data.end.durationAggregate,
                    seekCurrentTimeAggregate = pdkEvent.data.end.currentTimeAggregate,
                    windowWidth = USAEndCardAPI.checkWindowWidth(),
                    timeToStartEndCard;

                // check status end card processed
                if (statusProcessed) {
                  return false;
                }

                // check bpTimeShowEndCard < seekDurationAggregate
                // if bpTimeShowEndCard < seekDurationAggregate return
                if (bpTimeShowEndCard < seekDurationAggregate) {
                  timeToStartEndCard = seekDurationAggregate - bpTimeShowEndCard;
                } else {
                  timeToStartEndCard = seekDurationAggregate;
                }

                // it is will work if all dependencies is true
                if (seekCurrentTimeAggregate < timeToStartEndCard && !$rootScope.statusAd
                    && statusShowEndCard && !windowWidth) {
                  // hide end card
                  USAEndCardAPI.hideEndCard(true);
                }
              }

              /*
               * On Release Start
               * @private
               */
              function _onReleaseEnd(pdkEvent) {

                console.info('_onReleaseEnd');

                // check status end card processed
                if (statusProcessed) {
                  return false;
                }

                // reset value on default
                statusClickOnCloseEndCard = false;

                if (!isMobile && !USAEndCardAPI.checkWindowWidth() && !$rootScope.statusAd) {
                  statusEndRelease = true;
                }

                // check scope.statusShowEndCard
                // if status = false will fired callback
                if (!statusShowEndCard && !$rootScope.statusAd) {

                  statusProcessed = true;

                  // show end card
                  // true params for mobile end card
                  USAEndCardAPI.showEndCard(USAEndCardAPI.timeoutUpNext);
                } else if (statusShowEndCard && !$rootScope.statusAd) {

                  if (!isMobile && !USAEndCardAPI.checkWindowWidth()) {
                    USAEndCardAPI.initShowReloadBtn(dataAnimate.show.desktop);
                  }

                  USAEndCardAPI.timeoutUpNext();
                }
              }

              /*
               * On Show Full Screen set statusPlayerFullScreen true
               * @private
               */
              function _onShowFullScreen(pdkEvent) {
                statusPlayerFullScreen = pdkEvent.data;
              }
            },

            // redirect to next episode
            timeoutUpNext: function () {
              // start timer up next episode
              timeoutUpNext = $timeout(function () {
                var episodeUpNextUrl = episodeUpNext.data('next-url'),
                    nextUrl = window.location.origin + episodeUpNextUrl;

                //window.location.replace(nextUrl);
              }, timeoutEndCard);
            },

            // share bar
            initGigyaSharebar: function (data) {

              if (typeof Drupal.gigya != 'undefined') {
                if (episodeShare.length > 0) {

                  var shareObj = data.sharebarParams,
                      title = shareObj.title,
                      link_back = shareObj.linkBack,
                      description = shareObj.description,
                      imageUrl = shareObj.imageUrl,
                      providers = shareObj.shareButtons,
                      shareBarTemplate = $('<div class="' + shareBarWrapClass + '"><div id="' + shareBarInnerId + '-' + shareBarCounter + '" class="' + shareBarInnerId + '"></div></div>'),
                      sharebarParams;

                  if (description == '' && $('meta[property="og:description"]').length > 0) {
                    description = $('meta[property="og:description"]').attr('content');
                  }


                  // create blocks
                  episodeShare.append(shareBarTemplate);

                  sharebarParams = {
                    gigyaSharebar: {
                      ua: {
                        linkBack: link_back,
                        title: title,
                        description: description,
                        imageBhev: "url",
                        imageUrl: imageUrl
                      },
                      shareButtons: providers,
                      shortURLs: "never",
                      containerID: shareBarInnerId + '-' + shareBarCounter,
                      showCounts: "none",
                      layout: "vertical",
                      iconsOnly: false,
                      buttonTemplate: '<div ' +
                      'class="usa-share-button $text" ' +
                      'onclick="$onClick"><div class="button-text">' +
                      'Share on $text' +
                      '</div></div>'
                    }
                  };

                  Drupal.gigya.showSharebar(sharebarParams);
                  // replace default value share on Other providers
                  episodeShare.find('.usa-share-button.Share .button-text').text('Other providers');
                  shareBarCounter += 1;
                }
              }
            },


            // callback on click close end card
            closeEndCard: function () {

              // Stop the pending timeout
              $timeout.cancel(timeoutUpNext);

              // change status show end card
              statusClickOnCloseEndCard = true;

              // hide end card
              USAEndCardAPI.hideEndCard(true);
            },

            // check window width
            checkWindowWidth: function () {
              return window.matchMedia('(max-width: ' + bpMobileEndCard + 'px)').matches;
            },

            // hide end card
            hideEndCard: function (isReleaseEnd) {
              if (USAEndCardAPI.checkWindowWidth()) {
                if (isReleaseEnd) {
                  USAEndCardAPI.initHideEndCardMobile(dataAnimate.show.mobile);
                }
              } else {
                USAEndCardAPI.initHideEndCard(dataAnimate.show.desktop);
              }
            },

            // show end card
            showEndCard: function (callback) {
              if (USAEndCardAPI.checkWindowWidth()) {
                USAEndCardAPI.initShowEndCardMobile(dataAnimate.show.mobile);
              } else {
                USAEndCardAPI.initShowEndCard(dataAnimate.show.desktop);
              }

              if (typeof callback === "function") {
                callback();
              }
            },

            // init hide reload button
            initHideReloadBtn: function (animate) {
              replayButton.velocity("fadeOut", {
                duration: animate.endCardBlocks.duration,
                easing: easingAnimate
              });
            },

            // init show reload button
            initShowReloadBtn: function (animate) {
              replayButton.velocity("fadeIn", {
                delay: animate.endCardBlocks.delay,
                duration: animate.endCardBlocks.duration
              });
            },

            // init hide end card
            initHideEndCard: function (animate) {
              statusProcessed = true;

              if (statusEndRelease) {
                USAEndCardAPI.initHideReloadBtn(animate);
              }

              endCardBlocks.velocity("fadeOut", {
                duration: animate.endCardBlocks.duration,
                easing: easingAnimate,
                complete: function (elem) {
                  player.velocity({
                    height: '100%',
                    width: '100%'
                  }, {
                    duration: animate.player.duration,
                    easing: easingAnimate,
                    complete: function (el) {
                      statusShowEndCard = false;
                      statusProcessed = false;
                      statusEndRelease = false;
                    }
                  });
                }
              });
            },

            // init show end card
            initShowEndCard: function (animate) {
              player.velocity({
                height: '-=50%',
                width: '-=55%'
              }, {
                duration: animate.player.duration,
                easing: easingAnimate,
                complete: function (elem) {
                  endCardBlocks.velocity("fadeIn", {
                    delay: animate.endCardBlocks.delay,
                    duration: animate.endCardBlocks.duration,
                    complete: function (el) {
                      statusShowEndCard = true;
                      statusProcessed = false;
                    }
                  });

                  if (statusEndRelease) {
                    USAEndCardAPI.initShowReloadBtn(animate);
                  }
                }
              });
            },

            // init hide end card mobile version
            initHideEndCardMobile: function (animate) {
              statusProcessed = true;
              replayButton.velocity("fadeOut", {
                duration: animate.endCardBlocks.duration,
                easing: easingAnimate
              });
              endCardBlocks.velocity("fadeOut", {
                duration: animate.endCardBlocks.duration,
                easing: easingAnimate,
                complete: function (elem) {
                  player
                      .css({
                        height: '100%',
                        width: '100%'
                      })
                      .velocity("fadeIn", {
                        delay: 100,
                        duration: 500,
                        complete: function (el) {
                          statusShowEndCard = false;
                          statusProcessed = false;

                        }
                      });
                }
              });
            },

            // init show end card mobile version
            initShowEndCardMobile: function (animate) {
              player
                  .css({
                    height: '100%',
                    width: '100%'
                  })
                  .velocity("fadeOut", {
                    duration: animate.player.duration,
                    easing: easingAnimate,
                    complete: function (elem) {
                      endCardBlocks.velocity("fadeIn", {
                        delay: animate.endCardBlocks.delay,
                        duration: animate.endCardBlocks.duration,
                        complete: function (el) {
                          statusShowEndCard = true;
                          statusProcessed = false;
                          statusHidePlayer = true;
                        }
                      });
                      replayButton.velocity("fadeIn", {
                        delay: animate.endCardBlocks.delay,
                        duration: animate.endCardBlocks.duration
                      });
                    }
                  });
            },

            // Init all vertical carousels
            initRelatedSlider: function () {
              episodesRelatedSlider.mCustomScrollbar({
                axis: "y",
                autoHideScrollbar: false,
                scrollInertia: 0,
                scrollbarPosition: "inside",
                theme: "light"
              });
            },

            // replay current episode
            replayVideo: function () {
              $pdk.controller.clickPlayButton();
              // hide end card
              USAEndCardAPI.hideEndCard(true);
            },

            // reInit functionality
            destroyGigyaSharebar: function () {
              episodeShare.find('.' + shareBarWrapClass).remove();
            },

            updateUpNextEpisode: function (data) {
              var dataUpNext = data.upNextEpisode,
                  linkUrl = dataUpNext.linkUrl,
                  imgSrcThumbnail = dataUpNext.imgSrcThumbnail,
                  season = dataUpNext.season,
                  episode = dataUpNext.episode,
                  title = dataUpNext.title;

              // run update
              episodeUpNext
                  .find('.link').attr('href', linkUrl).end()
                  .find('.img').attr('src', imgSrcThumbnail).end()
                  .find('.season').text(season).end()
                  .find('.episode').text(episode).end()
                  .find('.title').text(title).end();
            },

            updateRelatedSlider: function (data) {
              // completely remove the custom scrollbar
              episodesRelatedSlider.mCustomScrollbar("destroy");
              episodesRelatedlist.html(data.relatedSlider);
            },

            updateReplayEpisodeTitle: function (data) {
              replayButton.find('.episode-title').text(data.replayEpisodeTitle);
            },

            // end card promise
            promise: endCardDefer.promise.then(promiseSuccess, promiseError),
            promiseResolve: function (data) {
              endCardDefer.resolve(data);
            },
            promiseReject: function (reason) {
              endCardDefer.reject(reason);
            }
          };

          function initEndCard(data) {
            USAEndCardAPI.addPDKEventListeners();
            USAEndCardAPI.initRelatedSlider();
            USAEndCardAPI.initGigyaSharebar(data);
          }

          function reInitEndCard(data) {
            // call remade blocks
            USAEndCardAPI.updateUpNextEpisode(data);
            USAEndCardAPI.updateRelatedSlider(data);
            USAEndCardAPI.updateReplayEpisodeTitle(data);
            USAEndCardAPI.destroyGigyaSharebar();
            // call init all parts
            if (data.addPDKEventListeners) {
              USAEndCardAPI.addPDKEventListeners();
            }
            USAEndCardAPI.initRelatedSlider();
            USAEndCardAPI.initGigyaSharebar(data);
          }

          // promise.then success
          function promiseSuccess(data) {
            return data;
          }

          // promise.then error
          function promiseError() {
            console.log('end-card service error');
          }

          // add window resize
          $window.bind('resize', function () {
            if (!USAEndCardAPI.checkWindowWidth() && statusShowEndCard && statusHidePlayer) {
              statusHidePlayer = false;
              player.css({
                display: 'block',
                opacity: 1,
                height: '50%',
                width: '45%'
              });
            } else if (USAEndCardAPI.checkWindowWidth() && statusShowEndCard && !statusHidePlayer) {
              statusHidePlayer = true;
              player.css({
                display: 'none',
                opacity: 0,
                height: '100%',
                width: '100%'
              });
            }
          });

          return {
            init: function (data) {

              data = data || {};

              // extend dataApi
              dataApi = $.extend({}, dataApi, data);

              if (dataApi.reInit) {
                reInitEndCard(dataApi)
              } else {
                initEndCard(dataApi);
              }

              // hide show card on close click
              $rootScope.hideShowCard = USAEndCardAPI.closeEndCard;
              // replay current episode
              $rootScope.replayVideo = USAEndCardAPI.replayVideo;
            }
          }
        }]);

})(angular, jQuery, tve, this);
