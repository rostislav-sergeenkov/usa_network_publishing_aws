/**
 * Global js functions for microsite videos
 */
(function ($) {
  Drupal.behaviors.ms_videos = {

    // Gigya share bar
    updateGigyaSharebar: function(initialPageLoad, preview_image) {
      initialPageLoad = initialPageLoad || 0;
      if (typeof Drupal.gigya != 'undefined') {
        var sharebar = new Object(),
            $videoInfoContainer = $('#videos #video-container .video-player-desc'),
            caption = $videoInfoContainer.find('.video-description').text(),
            shareTitle = $videoInfoContainer.find('.video-title').text(),
            imageSrc = preview_image;

        USAN.initUSAGigya({
          gigyaSharebar: {
            ua: {
              description: caption,
              imageUrl: imageSrc,
              linkBack: url,
              title: shareTitle
            },
            containerID: 'video-gigya-share'
          }
        });

        // reset Gigya share bar clicks
        var $shareButtons = $('#video-gigya-share .gig-share-button div');
        $shareButtons.unbind('click');
        $shareButtons.bind('click', function(){
          if (typeof Drupal.behaviors.ms_gigya != 'undefined' && typeof Drupal.behaviors.ms_gigya.sendSocialShareOmniture == 'function') Drupal.behaviors.ms_gigya.sendSocialShareOmniture($(this), shareTitle);
        });
      }
    },

    // setVideoHeight
    setVideoHeight: function() {
      var vWidth = $('#microsite #videos #video-container').width(),
          vHeight = Math.floor(vWidth * 0.5626);
      $('#microsite .file-video-mpx.view-mode-inline_content iframe, #microsite .featured-asset .video-player-wrapper iframe').css({'height': vHeight + 'px'});
    },


    // player events
    handleMediaEvent: function(event) {
      usa_debug('[USA DEBUG] handleMediaEvent -- event.type: ' + event.type);
      if (window.hasOwnProperty('$pdk')) {
        $pdk.controller.showFullScreen();
      }
      switch (event.type) {
        case 'OnReleaseEnd':
          var nextVideo = jQuery('#thumbnail-list .item-list > ul > li.active').next();
          if (nextVideo.length > 0) {
            Drupal.behaviors.ms_videos.clickThumbnail(nextVideo);
          }
          break;
        default:
          break;
      }
    },

    initEventListeners: function() {
//      usa_debug('[USA DEBUG] initEventListeners() -- $pdk: ', $pdk);
//      usa_debug('[USA DEBUG] initEventListeners() -- $pdk.controller: ', $pdk.controller);
      if (typeof $pdk == 'object' && $pdk.hasOwnProperty('controller') && $pdk.controller.ready && $pdk.controller.hasOwnProperty('iframe') && $pdk.controller.iframe.contentWindow) {
//        usa_debug('[USA DEBUG] initEventListeners() -- setting event listeners');

        // Point all event listeners at handleMediaEvent
        $pdk.controller.removeEventListener('OnReleaseEnd');
        $pdk.controller.addEventListener('OnReleaseEnd', Drupal.behaviors.ms_videos.handleMediaEvent);
//        usa_debug('[USA DEBUG] initEventListeners() -- finished setting event listeners');
      }
      else {
        setTimeout(Drupal.behaviors.ms_videos.initEventListeners, 500);
      }
    },

    // player init bind
    playerBind: function (options) {
      USAN.ms_player.init(options);
      Drupal.behaviors.ms_videos.initEventListeners();
    },

    //ajax request
    getVideo: function (url, initialPageLoad, isAuth) {
      initialPageLoad = initialPageLoad || 0;
      var $videoContainer = $('#video-container'),
          $playerThumbnail = $videoContainer.find('.video-image'),
          playerWrapSelector = '.file-video-mpx',
          $playerDesc = $videoContainer.find('.video-player-desc'),
          $playerAuth = $videoContainer.find('.video-auth-player-wrapper'),
          $playerNoAuth = $videoContainer.find('.video-no-auth-player-wrapper'),
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false,
          $playerWrap;

      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
        usa_debug('getVideo() -- data: ', data);
        var image = data.default_image,
            description = data.description_template,
            player = data.player,
            preview_image = data.preview_image;

        if ($playerAuth.hasClass('active-player')) {
          $playerWrap = $playerAuth.find(playerWrapSelector);
          $playerNoAuth.find(playerWrapSelector).html('<iframe class="base-iframe"></iframe>');
          $playerThumbnail.html(image);
          $playerWrap.html(player);
        }
        if ($playerNoAuth.hasClass('active-player')) {
          $playerWrap = $playerNoAuth.find(playerWrapSelector);
          $playerAuth.find(playerWrapSelector).html('<iframe class="base-iframe"></iframe>');
          $playerWrap.html(player);
        }

        $playerWrap.find('iframe').eq(0).off('load');
        $playerDesc.html(description);

        Drupal.behaviors.ms_videos.playerBind({
          isAuth: isAuth,
          playerWrap: $playerWrap,
          episodeRating: data['episode-rating'],
          episodeTitle: data['episode-title'],
          mpxGuid: data['mpx-guid']
        });
        Drupal.behaviors.ms_videos.setVideoHeight();

        //usa_debug('======= getVideo(' + url + ', ' + initialPageLoad + ')');

        // initialize Gigya sharebar
        Drupal.behaviors.ms_videos.updateGigyaSharebar(initialPageLoad, preview_image);
        if (!initialPageLoad && msGlobalExists && typeof Drupal.behaviors.ms_global.setOmnitureData == 'function') Drupal.behaviors.ms_global.setOmnitureData('videos');
      })
      .fail(function(jqXHR, textStatus) {
        usa_debug('ajax call failed -- textStatus: ' + textStatus);
      });
    },

    mobileModal: function () {
      // check if user uses mobile device
      if (USAN.isMobile.apple.device || USAN.isMobile.android.device) {
        var os = USAN.isMobile.apple.device ? 'iOS' : 'android';
        Drupal.behaviors.video_mobile.showMobileVideoModal(os);
      }
    },

    // set video player on click thumbnail
    setVideoPlayer: function (autoplay, selector, data, initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      var autoplay = autoplay || true,
          selector = selector || '#thumbnail-list .item-list ul li.thumbnail.active',
          $activeVideoThumb = $(selector),
          $videoContainer = $('#video-container'),
          dataPlayerId = $activeVideoThumb.data('player-id'),
          dataFid = $activeVideoThumb.data('fid'),
          dataFullEpisode = $activeVideoThumb.data('full-episode'),
          ad_300x250 = $('#videos #ad300x250'),
          isAuth = false,
          filter,
          url,
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false;

      if (typeof console != 'undefined' && console.hasOwnProperty('info')) console.info('setVideoPlayer');

      if (data) {
        dataPlayerId = data.data.player_id;
        dataFid = data.data.fid;
      }
      //usa_debug('========= setVideoPlayer(' + autoplay + ', ' + selector + ', ' + data + ', ' + initialPageLoad + ')\ndataFid: ' + dataFid);

      if ($videoContainer.attr('data-video-url') != $activeVideoThumb.attr('data-video-url')) {
        $videoContainer.attr('data-video-url', $activeVideoThumb.attr('data-video-url'));
      }

      if (dataFullEpisode || dataFullEpisode == 'true') {
        usa_debug('setVideoPlayer(' + autoplay + ', ' + selector + ', data, ' + initialPageLoad + ') -- dataFullEpisode: ' + dataFullEpisode + ', data: ', data);
        usa_debug('$activeVideoThumb: ', $activeVideoThumb);
        Drupal.behaviors.ms_videos.mobileModal();
        $('#videos .full-pane').addClass('full-desc');
      }
      else { // not full episode
        $('#videos .full-pane').removeClass('full-desc');

        // if not a full episode
        // AND the video leaderboard ad is in view
        // OR there is no video leaderboard ad but there is a page head leaderboard ad that is in view
        // then update the leaderboard ad
        if (dataFullEpisode == 'false' && msGlobalExists && (Drupal.behaviors.ms_global.isScrolledIntoView('#videos .ad') || (!Drupal.behaviors.ms_global.globalInitialPageLoad && $('#videos .ad').length <= 0 && $('#head-leaderboard').length >= 0 && Drupal.behaviors.ms_global.isScrolledIntoView('#head-leaderboard')))) {
          Drupal.behaviors.ms_global.refreshAd('page-header');
          Drupal.behaviors.ms_global.refreshAd('videos');
        }
      }

      Drupal.behaviors.ms_videos.setPausePlayer();

      if ($('#thumbnail-list .item-list ul li.thumbnail.active > div').hasClass('tve-video-auth')) {
        isAuth = true;
        autoplay = false;
        $videoContainer.find('.video-no-auth-player-wrapper').removeClass('active-player').hide();
        $videoContainer.find('.video-auth-player-wrapper').addClass('active-player').show();
      }
      else {
        $videoContainer.find('.video-auth-player-wrapper').removeClass('active-player').hide();
        $videoContainer.find('.video-no-auth-player-wrapper').addClass('active-player').show();
      }

      url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay + '/' + tve.adobePass.currentProvider;
      if ($('#video-filter').length && $('#video-filter .filter-item.active').length) {
        filter = $('#video-filter .filter-item.active').attr('data-filter-name');
        url = url + '/' + filter;
      }

      function checkAjaxUrl() {
        var urlArr = url.split('/'),
            urlArrLength = urlArr.length - 1,
            i = 0,
            status = true;

        for (i; i < urlArrLength; urlArrLength -= 1) {
          if (urlArr[urlArrLength] === 'undefined') {
            status = false;
            break;
          }
        }
        return status;
      }

      if (checkAjaxUrl()) {
        Drupal.behaviors.ms_videos.getVideo(url, initialPageLoad, isAuth);
      }
    },

    // SetPausePlayer
    setPausePlayer: function () {
      var $videoContainer = $('#video-container');
      if ($videoContainer.hasClass('start')) {
        $videoContainer.removeClass('play pause').addClass('pause');
        $pdk.controller.clickPlayButton(false);
        $pdk.controller.pause(true);
        $videoContainer.find('.active-player .custom-play').click(function () {
          $pdk.controller.clickPlayButton(true);
          $pdk.controller.pause(false);
        });
      }
    },

    // SetPlayPlayer
    setPlayPlayer: function () {
      var $videoContainer = $('#video-container');
      if ($videoContainer.hasClass('active')) {
        $videoContainer.removeClass('play pause').addClass('play');
        $pdk.controller.clickPlayButton(true);
        $pdk.controller.pause(false);
      }
    },

    // click Thumbnail
    clickThumbnail: function (elem, autoplay) {
      var autoplay = autoplay || true,
          $videoContainer = $('#video-container'),
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false;

      if ($videoContainer.attr('data-video-url') != elem.attr('data-video-url')) {
        $('#thumbnail-list .item-list ul li.thumbnail').removeClass('active');
        elem.addClass('active');
      }
      else {
        if (!elem.hasClass('active')) {
          elem.addClass('active');
        }
        if (msGlobalExists) Drupal.behaviors.ms_global.scrollToTop();
        return false;
      }

      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          dataVideoUrl = elem.attr('data-video-url'),
          itemTitle = elem.find('.title').text(),
          anchor = 'videos',
          anchorSection = $('#site-nav-links li#nav-videos').find('.scroll-link').text(),
          anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull;
        return false;
      }

      if (msGlobalExists) {
        if (!Drupal.behaviors.ms_global.globalInitialPageLoad) {
          Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
        }
        Drupal.behaviors.ms_global.changeTitle(itemTitle, anchorSection, basePageName);
        Drupal.behaviors.ms_videos.setPausePlayer();
        Drupal.behaviors.ms_videos.setVideoPlayer('true', elem);
        Drupal.behaviors.ms_global.scrollToTop();
      }
      else {
        Drupal.behaviors.ms_videos.setPausePlayer();
        Drupal.behaviors.ms_videos.setVideoPlayer('true', elem);
      }
    },

    // Get Thumbnail List
    getThumbnailList: function (url, offset, $toggler, categoryName, filterClass) {
      filterClass = filterClass || null;
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
        $pdk.controller.shareCardCategory = categoryName;

        var videoList = data.videos,
            infoMore = data.info.more,
            adBlock = $('#thumbnail-list .thumbnail.ad'),
            $itemList = $('#thumbnail-list .view-content .item-list ul');

        //usa_debug('========= getThumbnailList -- filterClass: ' + filterClass + '\n$itemList: ');
        //usa_debug($itemList);
        $itemList.animate({'opacity': 0}, 500, function(){
          if (filterClass != null) $('#thumbnail-list .view-content .item-list ul').attr('class', filterClass);

          if (offset === 0) {
            $('#thumbnail-list .view-content .item-list ul').html(videoList);
          } else {
            $('#thumbnail-list .thumbnail').last().after(videoList);
          }

          $(this).animate({'opacity': 1}, 500, function(){
            var thumbnail = $('#thumbnail-list .thumbnail');

            if (!thumbnail.hasClass('ad')) {
              if (thumbnail.eq(1)) {
                thumbnail.eq(1).after(adBlock);
              } else {
                thumbnail.last().after(adBlock);
              }
              adBlock.addClass('added').hide();
            }

            if (infoMore.toString() === 'false') {
              if (thumbnail.length < 11) {
                $('#thumbnail-list .expandable-toggle-wrap').removeClass('active');
                $('#thumbnail-list .expandable-toggle-wrap').removeClass('spoiler');
              }
              else {
                $('#thumbnail-list .expandable-toggle-wrap li').addClass('less').text('close');
                $('#thumbnail-list .expandable-toggle-wrap').removeClass('active').addClass('spoiler');
                $('#thumbnail-list').addClass('expanded');
              }
            }
            else {
              $('#thumbnail-list .expandable-toggle-wrap').removeClass('spoiler').addClass('active');
              $('#thumbnail-list').removeClass('expanded');
            }

            if ($toggler) {
              $toggler.removeClass('processed');
            }

            thumbnail.unbind('click');
            thumbnail.bind('click', function (e) {
              e.preventDefault();
              var elem = $(this);
              Drupal.behaviors.ms_videos.clickThumbnail(elem, true);
            });
            Drupal.behaviors.ms_videos.setActiveThumbnail();
            if (typeof Waypoint != 'undefined') {
              //usa_debug('======== refreshing all waypoints');
              Waypoint.refreshAll();
            }
          });
        });
      })
      .fail(function(jqXHR, textStatus) {
        usa_debug('ajax call failed -- textStatus: ' + textStatus);
      })
    },

    // setActiveThumbnail
    setActiveThumbnail: function() {
      var currentVideoUrl = $('#video-container').attr('data-video-url');
        $('#thumbnail-list').find("li[data-video-url='" + currentVideoUrl + "']").addClass('active');
    },


    // ATTACH
    attach: function (context, settings) {
      var self = this;

      // video thumbnail clicks
      $('#thumbnail-list .item-list ul li.thumbnail').click(function (e) {
        e.preventDefault();
        var elem = $(this);
        self.clickThumbnail(elem, true);
        self.updateGigyaSharebar(0);
      });

      // filter click toggles
      $('#video-filter .filter-label').bind('click', function () {
        if ($('#video-filter .filter-label').hasClass('open')) {
          $('#video-filter .filter-label').removeClass('open');
          $('#video-filter .filter-menu').hide();
        } else {
          $('#video-filter .filter-label').addClass('open');
          $('#video-filter .filter-menu').show();
        }
      });

      // video items more/less toggler
      var thumbnailList = $('#thumbnail-list');
      thumbnailList.each(function () {
        var $self = $(this),
            expandableToggle = $self.find('.expandable-toggle-wrap'),
            $toggler = $self.find('.expandable-toggle li');

        $toggler.click(function () {

          var itemList = $self.find('.view-content .thumbnail').length - 1,
              categoryName = $('#video-filter .filter-item.active').text();

          if (expandableToggle.hasClass('active')) {

            var url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + itemList;

            if (!$toggler.hasClass('processed')) {
              Drupal.behaviors.ms_videos.getThumbnailList(url, itemList, $toggler, categoryName);
              $toggler.addClass('processed');
            } else {
              return false;
            }

          } else if (expandableToggle.hasClass('spoiler')) {

            if ($toggler.text() == 'close') {

              var index = $('#thumbnail-list .thumbnail.hidden').index() + 11;

              $('#thumbnail-list .thumbnail:gt(11)').addClass('hidden');
              $('#thumbnail-list .thumbnail:lt(' + index + ')').removeClass('hidden');
              $toggler.text('more');
              $toggler.removeClass('less').addClass('more');
              $self.removeClass('expanded');

            } else if ($toggler.text() == 'more') {

              var index = $('#thumbnail-list .thumbnail.hidden').index() + 12;

              $('#thumbnail-list .thumbnail:lt(' + index + ')').removeClass('hidden');
              index = $('#thumbnail-list .thumbnail.hidden').index();

              if (index == -1) {
                $toggler.text('close');
                $toggler.removeClass('more').addClass('less');
                $self.removeClass('expanded');
              }
            }
          }
        });
      });

      // tve help messaging click
      $tve_toggler = $('.tve-help-link.help-link');
      $tve_toggler.click(function () {
        if ($('.tve-help-link').hasClass('selected')) {
          $('.tve-help-link').removeClass('selected');
          $('.tve-help').hide();
          $('.video-auth-player-wrapper .video-player-wrapper #player').find('div').removeAttr('style');
          $('.video-auth-player-wrapper .video-player-wrapper #player').find('a').removeAttr('style');
          $('.video-auth-player-wrapper .video-player-wrapper img').removeAttr('style');
          $('.video-auth-player-wrapper .video-player-wrapper').find('.locked-msg').removeAttr('style');
          $('.featured-asset').removeClass('tve-overlay');
        }
        else {
          $('.tve-help-link').addClass('selected');
          $('.tve-help').show();
          $('.video-auth-player-wrapper .video-player-wrapper').find('.locked-msg').hide();
          $('.video-auth-player-wrapper .video-player-wrapper #player').find('div').css('opacity', 0.1);
          $('.video-auth-player-wrapper .video-player-wrapper #player').find('a').css('opacity', 0);
          $('.video-auth-player-wrapper .video-player-wrapper img').css('opacity', 1);
          $('.featured-asset').addClass('tve-overlay');
        }
      });

      $('.tve-close').click(function () {
        $('.tve-help-link').removeClass('selected');
        $('.tve-help').hide();
        $('.video-player-wrapper #player').find('div').removeAttr('style');
        $('.video-player-wrapper #player').find('a').removeAttr('style');
        $('.video-player-wrapper img').removeAttr('style');
        $('.video-player-wrapper').find('.locked-msg').removeAttr('style');
        $('.featured-asset').removeClass('tve-overlay');
      });
    }
  }
})(jQuery);
