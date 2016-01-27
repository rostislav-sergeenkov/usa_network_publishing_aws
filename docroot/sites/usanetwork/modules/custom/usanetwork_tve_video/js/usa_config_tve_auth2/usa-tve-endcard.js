(function (ng, $) {

  'use strict';

  // customs USA EndCard services
  ng.module('tve.services')

      // animation service
      .factory('usaEndCardAnimate', [
        function () {

          // settings for blocks animation, used milliseconds
          var timeAnim = {
            hide: {
              mobile: {
                player: {
                  delay: 100,
                  duration: 500
                },
                endCardBlocks: {
                  delay: 0,
                  duration: 350
                },
                replayButton: {
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
                },
                replayButton: {
                  delay: 0,
                  duration: 0
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
                },
                replayButton: {
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
                },
                replayButton: {
                  delay: 100,
                  duration: 500
                }
              }
            }
          };

          // animation methods
          return {

            timeAnim: timeAnim,

            // init animation element
            initAnimateElem: function (elem, typeAnimate, params, callback) {
              $(elem).velocity(typeAnimate, {
                delay: params.delay,
                duration: params.duration,
                complete: function (el) {
                  if (typeof callback === "function") {
                    callback();
                  }
                }
              });
            },

            // init animation player
            initAnimateElemWH: function (elem, paramWH, params, callback) {
              $(elem).velocity({
                height: paramWH.height,
                width: paramWH.width
              }, {
                delay: params.delay,
                duration: params.duration,
                easing: 'linear',
                complete: function (elem) {
                  if (typeof callback === "function") {
                    callback();
                  }
                }
              });
            }
          };
        }
      ])

      // AdobeTracking service
      .factory('usaEndCardAT', [
        function () {

          var serviceApi = {

            // AdobeTracking vaдгу format
            callAtValFormat: function (atVal) {

              var atArr = atVal.trim().split(' '),
                  atArrLength = atArr.length,
                  newValue = '';

              for (var i = 0; i < atArrLength; i++) {
                newValue += atArr[i].charAt(0).toUpperCase() + atArr[i].substr(1) + ' ';
              }

              return newValue;
            },

            // Gigya share bar
            callShareTracking: function (container, shareBtn, episodeTitle) {
              if (AdobeTracking !== "undefined" && _satellite.track !== "undefined") {

                var shareBarId, shareBtnId, socialNetwork, socialNetworkName;

                shareBarId = $(container).find('.episode-share-bar').attr('id');
                shareBtnId = $(shareBtn).parents('.gig-button-up').attr('id');
                socialNetwork = gigya.services.socialize.plugins.reactions.instances[shareBarId].buttonInstances[shareBtnId].id;
                socialNetworkName = serviceApi.callAtValFormat(socialNetwork);

                AdobeTracking.socialNetwork = socialNetworkName.trim();
                AdobeTracking.itemShared = episodeTitle;
                _satellite.track('socialShare');
              }
            },

            // AdobeTracking.clickPageItem
            callAdobeTracking: function (atParams) {

              if (AdobeTracking !== "undefined" && _satellite.track !== "undefined") {

                var separator = ': ',
                    atVal = '',
                    params, key;

                // create AdobeTracking params
                params = {
                  showTitle: '',
                  episodeTitle: '',
                  endCardTitle: 'End Card Squeeze',
                  endCardblockTitle: '',
                  endCardEvent: ''
                };

                params = $.extend({}, params, atParams);

                // format params first letter to uppercase
                for (key in params) {

                  // key empty continue
                  if (params[key] == '') {
                    continue;
                  }

                  // format var value
                  atVal += serviceApi.callAtValFormat(params[key]);

                  // skip separator for last key
                  if (key !== 'endCardEvent') {
                    atVal += separator;
                  }
                }

                // call _satellite.track
                AdobeTracking.clickedPageItem = atVal.trim();
                _satellite.track('pageItemClicked');
              }
            }
          };

          return serviceApi;
        }
      ])

      .factory('usaEndCardService', ['$rootScope', '$timeout', 'helper', 'usaEndCardAnimate', 'usaEndCardAT',
        function ($rootScope, $timeout, helper, usaEndCardAnimate, usaEndCardAT) {

          var $window, isMobile,
              playerWrapperEl, playerEl, endCardEls, episodeUpNextEl, episodesRelatedClipEl,
              episodesRelatedListEl, episodesRelatedSliderEl,
              episodeShareEl, replayBtnEl, showTitle, episodeTitle, upNextTitle, relatedClipTitle,
              statusClickOnCloseEndCard, statusPlayerFullScreen, statusProcessed, statusShowEndCard, statusHidePlayer, statusEndRelease,
              bpTimeShowEndCard, bpMobileEndCard, timeoutEndCard, shareBarCounter,
              dataAnimate, fadeIn, fadeOut, shareBarWrapClass, shareBarInnerId, linkToloadUrl,
              episodePID, USAEndCardAPI, paramsData, timeoutUpNext, reInitApi;

          // systems
          $window = ng.element(window);
          isMobile = helper.device.isMobile;
          dataAnimate = usaEndCardAnimate.timeAnim;

          // elements
          playerWrapperEl = ng.element('[data-usa-tve-player-container]');
          playerEl = ng.element('[data-usa-tve-player="pdk-player"]');
          endCardEls = ng.element('[data-end-card="usaEndCard"]');
          episodeShareEl = ng.element('#episode-share');
          episodeUpNextEl = ng.element('#episode-up-next');
          episodesRelatedClipEl = ng.element('#episode-related');
          episodesRelatedListEl = ng.element('#player-episodes-list');
          episodesRelatedSliderEl = ng.element('#player-episodes-list .related-slider');
          replayBtnEl = ng.element('[data-replay="usa-replay"]');

          // elem data value
          showTitle = playerWrapperEl.data('show-title');
          episodeTitle = playerWrapperEl.data('episode-title');
          relatedClipTitle = episodesRelatedClipEl.data('related-name');
          upNextTitle = episodeUpNextEl.data('next-name');
          episodePID = playerEl.data('episode-pid');

          // timing values
          bpTimeShowEndCard = parseInt(playerWrapperEl.data('end-card-time'));// time for showing end card used milliseconds
          bpMobileEndCard = 480; // breakpoint for styles
          //timeoutEndCard = 30000; // redirect timeout for Up Next Episode
          timeoutEndCard = 0; // redirect timeout for Up Next Episode

          // default values
          statusClickOnCloseEndCard = false;
          statusPlayerFullScreen = false;
          statusProcessed = false;
          statusShowEndCard = false;
          statusHidePlayer = false;
          statusEndRelease = false;
          shareBarWrapClass = 'episode-share-bar-wrap';
          shareBarInnerId = 'episode-share-bar';
          shareBarCounter = 0;
          fadeIn = 'fadeIn';
          fadeOut = 'fadeOut';
          linkToloadUrl = '//link.theplatform.com/s/OyMl-B/';

          // default app params
          paramsData = {
            reInit: false, // true || false
            addPDKEventListeners: false, // true || false, use only for reinit if all PDK Event Listeners was delete
            sharebarParams: {
              linkBack: '', // string
              title: '', // string
              description: '', // string
              imageUrl: '', // string
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
            episodePID: episodePID,
            showTitle: showTitle, // string, active show title
            reloadEpisodeTitle: episodeTitle // string, active episode title
          };

          // EndCard API
          USAEndCardAPI = {

            // add $pdk.controller listeners
            addPDKEventListeners: function () {

              $pdk.controller.addEventListener('OnReleaseStart', _onReleaseStart);
              $pdk.controller.addEventListener('OnMediaPlaying', _onMediaPlaying);
              $pdk.controller.addEventListener('OnMediaSeek', _onMediaSeek);
              $pdk.controller.addEventListener('OnReleaseEnd', _onReleaseEnd);
              $pdk.controller.addEventListener('OnShowFullScreen', _onShowFullScreen);
              $pdk.controller.addEventListener('OnLoadReleaseUrl', _onLoadReleaseUrl);

              /*
               * On Release Start
               * @private
               */
              function _onLoadReleaseUrl(pdkEvent) {

                var dataPID = pdkEvent.data.pid;

                if (statusEndRelease) {
                  if (dataPID !== episodePID) {
                    var srcLink = linkToloadUrl + episodePID;
                    $pdk.controller.resetPlayer('pdk-player');
                    $pdk.controller.loadReleaseURL(srcLink, true);
                  }
                }
              }

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

                    // AdobeTracking
                    usaEndCardAT.callAdobeTracking({
                      endCardTitle: 'Credit Squeeze'
                    });

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

                // check status end card processed
                if (statusProcessed) {
                  return false;
                }

                // reset value on default
                statusClickOnCloseEndCard = false;

                if (!isMobile && !USAEndCardAPI.checkWindowWidth()) {
                  statusEndRelease = true;
                }

                // check scope.statusShowEndCard
                // if status = false will fired callback
                if (!statusShowEndCard) {

                  statusProcessed = true;

                  // show end card
                  // true params for mobile end card
                  USAEndCardAPI.showEndCard(USAEndCardAPI.timeoutUpNext);
                } else if (statusShowEndCard) {

                  //if (!isMobile && !USAEndCardAPI.checkWindowWidth()) {
                    //usaEndCardAnimate.initAnimateElem(replayBtnEl, fadeIn, dataAnimate.show.desktop.endCardBlocks);
                  //}

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

            // Init all related slider
            initRelatedSlider: function (el) {
              $(el).mCustomScrollbar({
                axis: "y",
                autoHideScrollbar: false,
                scrollInertia: 0,
                scrollbarPosition: "inside",
                theme: "light"
              });
            },

            // share bar
            initGigyaSharebar: function (data) {

              if (typeof Drupal.gigya != 'undefined') {
                if (episodeShareEl.length > 0) {

                  var shareObj = data.sharebarParams,
                      title = shareObj.title,
                      link_back = shareObj.linkBack,
                      description = shareObj.description,
                      imageUrl = shareObj.imageUrl,
                      providers = shareObj.shareButtons,
                      shareBarTemplate = $('<div class="' + shareBarWrapClass + '"><div id="' + shareBarInnerId + '-' + shareBarCounter + '" class="' + shareBarInnerId + '"></div></div>'),
                      sharebarParams;

                  if (link_back == '' && $('meta[property="og:url"]').length > 0) {
                    link_back = $('meta[property="og:url"]').attr('content');
                  }

                  if (title == '' && $('meta[property="og:title"]').length > 0) {
                    title = $('meta[property="og:title"]').attr('content');
                  }

                  if (description == '' && $('meta[property="og:description"]').length > 0) {
                    description = $('meta[property="og:description"]').attr('content');
                  }

                  if (imageUrl == '' && $('meta[property="og:image"]').length > 0) {
                    imageUrl = $('meta[property="og:image"]').attr('content');
                  }

                  // create blocks
                  episodeShareEl.append(shareBarTemplate);

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
                  episodeShareEl.find('.usa-share-button.Share .button-text').text('Other providers');
                  shareBarCounter += 1;
                }
              }
            },

            // replay current episode
            replayVideo: function () {
              $pdk.controller.clickPlayButton();
              // hide end card
              USAEndCardAPI.hideEndCard(true);
            },

            // redirect to next episode
            timeoutUpNext: function () {
              // start timer up next episode
              timeoutUpNext = $timeout(function () {

                var episodeUpNextUrl = episodeUpNextEl.data('next-url'),
                    nextUrl = window.location.origin + episodeUpNextUrl;

                // AdobeTracking
                usaEndCardAT.callAdobeTracking({
                  showTitle: showTitle,
                  episodeTitle: episodeTitle,
                  endCardEvent: 'Auto-Play Next'
                });

                window.location.replace(nextUrl);
              }, timeoutEndCard);
            },

            // hide end card
            hideEndCard: function (isReleaseEnd) {

              var paramWH;
              statusProcessed = true;

              // mobile version
              if (USAEndCardAPI.checkWindowWidth()) {
                if (isReleaseEnd) {
                  usaEndCardAnimate.initAnimateElem(replayBtnEl, fadeOut, dataAnimate.hide.mobile.replayButton);
                  usaEndCardAnimate.initAnimateElem(endCardEls, fadeOut, dataAnimate.hide.mobile.endCardBlocks, function () {
                    playerEl.css({
                      height: '100%',
                      width: '100%'
                    });
                  });
                  usaEndCardAnimate.initAnimateElem(playerEl, fadeIn, dataAnimate.hide.mobile.player, function () {
                    statusShowEndCard = false;
                    statusProcessed = false;
                  });
                }
              } else { // desktop version

                paramWH = {
                  height: '100%',
                  width: '100%'
                };

                if (statusEndRelease) {
                  replayBtnEl.hide();
                  //usaEndCardAnimate.initAnimateElem(replayBtnEl, fadeOut, dataAnimate.hide.desktop.replayButton);
                }
                usaEndCardAnimate.initAnimateElem(endCardEls, fadeOut, dataAnimate.hide.desktop.endCardBlocks, function () {
                  usaEndCardAnimate.initAnimateElemWH(playerEl, paramWH, dataAnimate.hide.desktop.player, function () {
                    statusShowEndCard = false;
                    statusProcessed = false;
                    statusEndRelease = false;
                  });
                });
              }
            },

            // show end card
            showEndCard: function (callback) {

              var paramWH;
              statusProcessed = true;

              // can be insert AdobeTracking

              // mobile version
              if (USAEndCardAPI.checkWindowWidth()) {

                playerEl.css({
                  height: '100%',
                  width: '100%'
                });

                usaEndCardAnimate.initAnimateElem(playerEl, fadeOut, dataAnimate.show.mobile.player);
                usaEndCardAnimate.initAnimateElem(replayBtnEl, fadeIn, dataAnimate.show.mobile.replayButton);
                usaEndCardAnimate.initAnimateElem(endCardEls, fadeIn, dataAnimate.show.mobile.endCardBlocks, function () {
                  statusShowEndCard = true;
                  statusProcessed = false;
                  statusHidePlayer = true;
                });

              } else { // desktop version

                paramWH = {
                  height: '-=50%',
                  width: '-=55%'
                };

                usaEndCardAnimate.initAnimateElemWH(playerEl, paramWH, dataAnimate.show.desktop.player, function () {
                  if (statusEndRelease) {
                    //usaEndCardAnimate.initAnimateElem(replayBtnEl, fadeIn, dataAnimate.show.desktop.replayButton)
                  }
                  usaEndCardAnimate.initAnimateElem(endCardEls, fadeIn, dataAnimate.show.desktop.endCardBlocks, function () {
                    statusShowEndCard = true;
                    statusProcessed = false;
                  });
                });
              }

              if (typeof callback === "function") {
                callback();
              }
            },
          };

          reInitApi = {
            // reInit functionality
            destroyGigyaSharebar: function () {
              episodeShareEl.find('.' + shareBarWrapClass).remove();
            },

            updateUpNextEpisode: function (data) {
              var dataUpNext = data.upNextEpisode;

              // run update
              episodeUpNextEl
                  .find('.link').attr('href', dataUpNext.linkUrl).end()
                  .find('.img').attr('src', dataUpNext.imgSrcThumbnail).end()
                  .find('.season').text(dataUpNext.season).end()
                  .find('.episode').text(dataUpNext.episode).end()
                  .find('.title').text(dataUpNext.title).end();
            },

            updateRelatedSlider: function (data) {
              // completely remove the custom scrollbar
              episodesRelatedSliderEl.mCustomScrollbar("destroy");
              episodesRelatedListEl.html(data.relatedSlider);
            },

            updateReplayEpisodeTitle: function (data) {
              episodeTitle = data.reloadEpisodeTitle;
              replayBtnEl.find('.episode-title').text(episodeTitle);
            }
          };


          function initEndCard(data) {

            USAEndCardAPI.addPDKEventListeners();
            USAEndCardAPI.initRelatedSlider(episodesRelatedListEl);
            USAEndCardAPI.initGigyaSharebar(data);

            // playerWrapper events
            $(playerWrapperEl)
                // share bar events
                .on('click', '.usa-share-button', function (e) {
                  var shareBtn = $(e.currentTarget);
                  usaEndCardAT.callShareTracking(episodeShareEl, shareBtn, episodeTitle);
                })
                // related-clip & up-next events
                .on('click', 'a.link', function (e) {

                  var link = $(e.currentTarget);

                  // AdobeTracking
                  if (link.hasClass('link-up-next')) {
                    usaEndCardAT.callAdobeTracking({
                      showTitle: showTitle,
                      episodeTitle: episodeTitle,
                      endCardblockTitle: upNextTitle,
                      endCardEvent: 'Play'
                    });
                  } else if (link.hasClass('link-related-clip')) {
                    usaEndCardAT.callAdobeTracking({
                      showTitle: showTitle,
                      episodeTitle: episodeTitle,
                      endCardblockTitle: relatedClipTitle,
                      endCardEvent: 'Play'
                    });
                  }
                });

            // add window resize
            $window.bind('resize', function () {
              if (!USAEndCardAPI.checkWindowWidth() && statusShowEndCard && statusHidePlayer) {
                statusHidePlayer = false;
                playerEl.css({
                  display: 'block',
                  opacity: 1,
                  height: '50%',
                  width: '45%'
                });
              } else if (USAEndCardAPI.checkWindowWidth() && statusShowEndCard && !statusHidePlayer) {
                statusHidePlayer = true;
                playerEl.css({
                  display: 'none',
                  opacity: 0,
                  height: '100%',
                  width: '100%'
                });
              }
            });
          }

          function reInitEndCard(data) {
            // call remade blocks
            reInitApi.updateUpNextEpisode(data);
            reInitApi.updateRelatedSlider(data);
            reInitApi.updateReplayEpisodeTitle(data);
            reInitApi.destroyGigyaSharebar();
            // call init all parts
            if (data.addPDKEventListeners) {
              USAEndCardAPI.addPDKEventListeners();
            }
            USAEndCardAPI.initRelatedSlider(episodesRelatedListEl);
            USAEndCardAPI.initGigyaSharebar(data);
          }

          return {
            init: function (data) {

              data = data || {};

              // extend dataApi
              paramsData = $.extend({}, paramsData, data);

              if (paramsData.reInit) {
                reInitEndCard(paramsData)
              } else {
                initEndCard(paramsData);
              }

              // hide show card on close click
              $rootScope.hideShowCard = function () {

                // AdobeTracking
                usaEndCardAT.callAdobeTracking({
                  showTitle: showTitle,
                  episodeTitle: episodeTitle,
                  endCardEvent: 'Close'
                });

                USAEndCardAPI.closeEndCard();
              };

              // replay current episode
              $rootScope.replayVideo = function () {

                // can be insert AdobeTracking

                USAEndCardAPI.replayVideo();
              };
            }
          };
        }
      ]);

})(angular, jQuery, tve, this);
