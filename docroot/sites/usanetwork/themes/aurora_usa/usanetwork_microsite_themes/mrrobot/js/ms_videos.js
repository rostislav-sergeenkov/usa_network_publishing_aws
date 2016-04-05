/**
 * Global js functions for microsite videos
 */
(function ($) {
  Drupal.behaviors.ms_videos = {

    // Gigya share bar
    updateGigyaSharebar: function(initialPageLoad, preview_image) {
      initialPageLoad = initialPageLoad || 0;
      var sharebar = new Object(),
          $videoInfoContainer = $('#videos #video-container .video-player-desc'),
          caption = $videoInfoContainer.find('.video-description').text(),
          shareTitle = $videoInfoContainer.find('.video-title').text(),
          imageSrc = preview_image,
          url = window.location.href;

      var settings = settings || {
        containerId: 'video-gigya-share',
        title: shareTitle,
        description: caption,
        imageSrc: imageSrc,
        url: url
      };

      Drupal.behaviors.ms_gigya.updateGigyaSharebar(initialPageLoad, settings);
    },

    // setVideoHeight
    setVideoHeight: function() {
      var vWidth = $('#microsite #videos #video-container').width(),
          vHeight = Math.floor(vWidth * 0.5626);
      $('#microsite .file-video-mpx.view-mode-inline_content iframe, #microsite .featured-asset .video-player-wrapper iframe').css({'height': vHeight + 'px'});
    },

    // player init bind
    micrositePlayerBind: function (isAuth) {
      USAN.playerAPI.clearlisteners();
      USAN.playerAPI.bindPlayerEvents('player');
    },

    //ajax request
    micrositeGetVideo: function (url, initialPageLoad, isAuth) {
      initialPageLoad = initialPageLoad || 0;
      var videoContainer = $('#video-container'),
          playerWrap = videoContainer.find('.video-player .file-video-mpx'),
          playerDesc = videoContainer.find('.video-player-desc'),
          playerAuth = videoContainer.find('.video-auth-player-wrapper'),
          playerNoAuth = videoContainer.find('.video-no-auth-player-wrapper'),
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false;

      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
        var image = data.default_image,
            description = data.description_template,
            player = data.player,
            preview_image = data.preview_image;

        if (playerAuth.hasClass('active-player')) {
          playerNoAuth.find(playerWrap).html('<iframe class="base-iframe"></iframe>');
          playerAuth.find('#player .loginButton').html(image);
          playerAuth.find(playerWrap).html(player);
        }
        if (playerNoAuth.hasClass('active-player')) {
          playerAuth.find(playerWrap).html('<iframe class="base-iframe"></iframe>');
          playerNoAuth.find(playerWrap).html(player);
        }

        playerDesc.html(description);

        Drupal.behaviors.ms_videos.micrositePlayerBind(isAuth);
        Drupal.behaviors.ms_videos.setVideoHeight();

//usa_debug('======= micrositeGetVideo(' + url + ', ' + initialPageLoad + ')');
        // initialize Gigya sharebar
        Drupal.behaviors.ms_videos.updateGigyaSharebar(initialPageLoad, preview_image);
        if (!initialPageLoad && msGlobalExists && typeof Drupal.behaviors.ms_global.setOmnitureData == 'function') Drupal.behaviors.ms_global.setOmnitureData('videos');
      })
      .fail(function(jqXHR, textStatus) {
        usa_debug('ajax call failed -- textStatus: ' + textStatus);
      });
    },

    micrositeMobileModal: function () {
      // check if user uses mobile device
      if (usa_deviceInfo.iOS || usa_deviceInfo.android) {
        var os = usa_deviceInfo.iOS ? 'iOS' : 'android';
        Drupal.behaviors.video_mobile.showMobileVideoModal(os);
      }
    },

    // set video player on click thumbnail
    micrositeSetVideoPlayer: function (autoplay, selector, data, initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      var autoplay = autoplay || false,
          selector = selector || '#thumbnail-list .item-list ul li.thumbnail.active',
          activeVideoThumb = $(selector),
          videoContainer = $('#video-container'),
          dataPlayerId = activeVideoThumb.attr('data-player-id'),
          dataFid = activeVideoThumb.attr('data-fid'),
          dataFullEpisode = activeVideoThumb.attr('data-full-episode'),
          ad_728x90 = $('#videos .ad_728x90'),
          ad_728x90_1 = $('#videos .ad_728x90_1'), // full episode video displayed
          ad_300x60_1 = $('#videos #ad_300x60_1'), // full episode video
          ad_300x250 = $('#videos #ad_300x250'), // not displayed 300x250
          ad_300x250_1 = $('#videos #ad_300x250_1'), // displayed 300x250
          isAuth = false,
          filter,
          url,
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false;

      // if there is no '#videos .ad_728x90' element,
      // but there is an '.ad-leaderboard' element,
      // use the .ad-leaderboard element for the video 728x90 ad
      if (ad_728x90.length != 1 && $('#videos .ad-leaderboard').length == 1) ad_728x90 = $('.ad-leaderboard');

      if (data) {
        dataPlayerId = data.data.player_id;
        dataFid = data.data.fid;
      }

      //usa_debug('========= micrositeSetVideoPlayer(' + autoplay + ', ' + selector + ', ' + data + ', ' + initialPageLoad + ')\ndataFid: ' + dataFid);

      if ($('#video-filter').length && $('#video-filter .filter-item.active').length) {
        filter = $('#video-filter .filter-item.active').attr('data-filter-name');
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay + '/' + filter;
      }
      else {
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay;
      }

      if (videoContainer.attr('data-video-url') != activeVideoThumb.attr('data-video-url')) {
        videoContainer.attr('data-video-url', activeVideoThumb.attr('data-video-url'));
      }

      // handle ads, video description and mobile overlay modal
      if (dataFullEpisode == 'true') {
        Drupal.behaviors.ms_videos.micrositeMobileModal();

        // full episode video, so show 300x60_1 and 728x90_1
        if (ad_300x250_1) {
          ad_300x250_1.closest('li.ad').hide();
          ad_300x250_1.attr('id', 'ad_300x250').empty();
        }
        if (ad_728x90.length == 1 && ad_728x90.attr('id') != 'ad_728x90_1') {
          ad_728x90.attr('id', 'ad_728x90_1');
        }

        $('#videos .full-pane').addClass('full-desc');
        ad_300x60_1.show();
      }
      // else not full episode
      else {
        $('#videos .full-pane').removeClass('full-desc');

        // show only 300x250 and 728x90 ads
        ad_300x60_1.hide();
        if (ad_728x90.length == 1 && ad_728x90.attr('id') == 'ad_728x90_1') {
          ad_728x90.attr('id', 'ms-videos-leaderboard-ad').empty();
        }

        setTimeout(function(){
          if (msGlobalExists && !Drupal.behaviors.ms_global.globalInitialPageLoad) Drupal.behaviors.ms_global.create728x90Ad('videos');
        }, 1500);

        if ($('#videos').find(ad_300x250)) {
          ad_300x250.closest('li.ad').show();
          ad_300x250.attr('id', 'ad_300x250_1');
        }
        if ($('#videos').find(ad_300x250_1)) {
          ad_300x250_1.closest('li.ad').show();
        }
      }

      Drupal.behaviors.ms_videos.micrositeSetPausePlayer();

      if ($('#thumbnail-list .item-list ul li.thumbnail.active > div').hasClass('tve-video-auth')) {
        isAuth = true;
        videoContainer.find('.video-no-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-auth-player-wrapper').addClass('active-player').show();
      }
      else {
        videoContainer.find('.video-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-no-auth-player-wrapper').addClass('active-player').show();
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
        Drupal.behaviors.ms_videos.micrositeGetVideo(url, initialPageLoad, isAuth);
      }
    },

    // SetPausePlayer
    micrositeSetPausePlayer: function () {
      var videoContainer = $('#video-container');
      if (videoContainer.hasClass('start')) {
        videoContainer.removeClass('play pause').addClass('pause');
        $pdk.controller.clickPlayButton(false);
        $pdk.controller.pause(true);
        videoContainer.find('.active-player .custom-play').click(function () {
          $pdk.controller.clickPlayButton(true);
          $pdk.controller.pause(false);
        });
      }
    },

    // SetPlayPlayer
    micrositeSetPlayPlayer: function () {
      var videoContainer = $('#video-container');
      if (videoContainer.hasClass('active')) {
        videoContainer.removeClass('play pause').addClass('play');
        $pdk.controller.clickPlayButton(true);
        $pdk.controller.pause(false);
      }
    },

    // click Thumbnail
    clickThumbnail: function (elem, autoplay) {
      var refreshAdsOmniture = 0,
          autoplay = autoplay || false,
          videoContainer = $('#video-container'),
          msGlobalExists = (typeof Drupal.behaviors.ms_global != 'undefined') ? true : false;
      //usa_debug('clickThumbnail(elem, ' + autoplay + ')');

      if (videoContainer.attr('data-video-url') != elem.attr('data-video-url')) {
        $('#thumbnail-list .item-list ul li.thumbnail').removeClass('active');
        elem.addClass('active');
        refreshAdsOmniture = 1;
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
        Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('true', elem);
        Drupal.behaviors.ms_global.scrollToTop();
      }
      else {
        Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
        Drupal.behaviors.ms_videos.micrositeSetVideoPlayer('true', elem);
      }
    },

    // AD 300x250 with class ADDED
    adAdded: function() {
      if (($('#videos .video-no-auth-player-wrapper').hasClass('active-player')) && ($('#thumbnail-list .thumbnail.ad').hasClass('added'))) {
        $('#thumbnail-list .thumbnail.ad').removeClass('added').show();
      }
    },

    // Get Thumbnail List
    getThumbnailList: function (url, offset, $toggler, categoryName, filterClass, seasonNum, epNum, autoplay) {
      filterClass = filterClass || null;
      seasonNum = seasonNum || null;
      epNum = epNum || null;
      autoplay = autoplay || false;
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
        $pdk.controller.shareCardCategory = categoryName;

        var videoList = data.videos,
            infoMore = data.info.more,
            $adBlock = $('#thumbnail-list .thumbnail.ad'),
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

          // add css selectors for the must see moments (msm) videos
          // and then display only the selected msm videos
          if (filterClass == 'must-see-moments' || categoryName == 'Must See Moments') {
            Drupal.behaviors.ms_site.addMSMVideoInfo(seasonNum, epNum);
          }
          else {
            $(this).animate({'opacity': 1}, 500, function(){
usa_debug('getThumbnailList() -- $this: ', $(this));
              var $thumbnails = $('#thumbnail-list .thumbnail');

              if (!$thumbnails.hasClass('ad')) {
                if ($thumbnails.eq(1)) {
                  $thumbnails.eq(1).after($adBlock);
                } else {
                  $thumbnails.last().after($adBlock);
                }
                $adBlock.addClass('added').hide();
              }

              if (infoMore.toString() === 'false') {
                if ($thumbnails.length < 11) {
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

              $thumbnails.unbind('click');
              $thumbnails.bind('click', function (e) {
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
          }
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

    // processSubMenuClick
    processSubMenuClick: function($this) {
      var $filterChildItems = $('#video-filter .filter-child-item'),
          $filterMenu = $('#video-filter .filter-menu');

      if ($this.hasClass('active')) {
        return false;
      }
      else {
        $filterChildItems.removeClass('active');
        $filterMenu.find('.filter-item').removeClass('active');
        $this.addClass('active');
        $this.parents('li.filter-item').addClass('active hide');

        var categoryName = $('#video-filter .filter-item.active').attr('data-filter-name'),
            filterClass = $('#video-filter .filter-item.active').attr('data_filter_class');
            offset = 0,
            seasonNum = $this.attr('data-season-num'),
            epNum = $this.attr('data-episode-num'),
            url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset + '/' + seasonNum;
usa_debug('clicked child item with categoryName: ' + categoryName + ', seasonNum: ' + seasonNum + ', epNum: ' + epNum);
        $('#thumbnail-list .expandable-toggle li').text('more').removeClass('less').addClass('more');
        $('#thumbnail-list').removeClass('expanded');

        // if user has already selected the must see moments (msm) filter
        // then show the correct season and episode videos
        if (categoryName == 'Must See Moments' && $('#videos ul.must-see-moments').length > 0) {
          Drupal.behaviors.ms_site.showMSMVideosBySeasonNEpisode(seasonNum, epNum, false);
        }
        else {
          Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName, filterClass, seasonNum, epNum, false);
        }
      }

      // remove 'hide' class from parent so that the next video filter hover works
      $this.parents('li.filter-item').removeClass('hide');
    },

    attach: function (context, settings) {
      var self = this;

      // video thumbnail clicks
      $('#thumbnail-list .item-list ul li.thumbnail').click(function (e) {
        e.preventDefault();
        var elem = $(this);
        self.clickThumbnail(elem, true);
//        self.updateGigyaSharebar(0);
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

      // close video filter menus
      $('body').live('click', function (e) {
        if ($(e.target).parents().filter('#video-filter').length != 1){
          if ($('#video-filter .filter-label').hasClass('open')) {
            $('#video-filter .filter-label').removeClass('open');
            $('#video-filter .filter-menu').hide();
          }
        }
      });

      // video filter clicks
      $('#video-filter li.filter-item').click(function () {
        var $filterItems = $('#video-filter li.filter-item'),
            $filterMenu = $('#video-filter .filter-menu'),
            filterClass = $(this).attr('data_filter_class'),
            anchor = (filterClass == 'must-see-moments') ? 'must-see-moments' : 'videos';

        if ($(this).hasClass('active')) {
          return false;
        }
        else {
          Drupal.behaviors.ms_global.setActiveMenuItem(anchor);

          $filterItems.removeClass('active');
          $(this).addClass('active');
          $('#video-filter .filter-child-item').removeClass('active');

          var categoryName = $(this).attr('data-filter-name'),
              offset = 0,
              childItems = $(this).find('.filter-child-item'),
              url;
          if (childItems.length == 0) {
            url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset;
          }
          else {
            if (categoryName == 'Full episodes') {
              var seasonNum = childItems.last().attr('data-season-num');
              childItems.last().addClass('active');
            }
            else {
              var seasonNum = childItems.first().attr('data-season-num');
              childItems.first().addClass('active');
            }
            url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset + '/' + seasonNum;
          }

          $('#thumbnail-list .expandable-toggle li').text('more');
          $('#thumbnail-list .expandable-toggle li').removeClass('less').addClass('more');
          $('#thumbnail-list').removeClass('expanded');

          self.getThumbnailList(url, offset, null, categoryName, filterClass);
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

      //hot-fix for 1441 with hard-coded first season
      var parseUrl = window.location.pathname.split('/');
      var activeItem = (parseUrl.hasOwnProperty(4)) ? parseUrl[4] : '';
      if(activeItem != '') {
        var itemFid = $('#video-item-list-wrapper li[data-video-url="' +activeItem +'"]').attr('data-fid');
        var itemEpisode = 1;
        var findEpisode = false;
        for (var i in msmVideosByEpisode[1]) {
          if(!findEpisode){
            for (var j = 0; j < msmVideosByEpisode[1][i]['fids'].length; j++) {
              if (msmVideosByEpisode[1][i]['fids'][j] == itemFid) {
                itemEpisode = i;
                findEpisode = true;
                break;
              }
            }
          }
        }
        Drupal.behaviors.ms_site.addMSMVideoInfo(1, itemEpisode);
      }
    }
  }
})(jQuery);
