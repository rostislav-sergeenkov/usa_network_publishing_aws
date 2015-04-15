/**
 * Global js functions for microsite videos
 */
(function ($) {
  Drupal.behaviors.ms_videos = {
    // setVideoHeight
    setVideoHeight: function() {
      var vWidth = $('#microsite #videos #video-container').width(),
          vHeight = Math.floor(vWidth * 0.5626);
//usa_debug('========== setVideoHeight()\nvWidth: ' + vWidth + ' => vHeight: ' + vHeight);
      $('#microsite .file-video-mpx.view-mode-inline_content iframe, #microsite .featured-asset .video-player-wrapper iframe').css({'height': vHeight + 'px'});
    },

    // player init bind
    micrositePlayerBind: function () {
      for (key in $pdk.controller.listeners) {
        delete $pdk.controller.listeners[key];
      }
      $pdk.bindPlayerEvents();
      $pdk.controller.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      tpController.addEventListener('OnYmalitemnewClick', Drupal.usanetwork_video_endcard.OnYmalitemnewClick);
    },

    //ajax request
    micrositeGetVideo: function (url) {
      var videoContainer = $('#video-container'),
          playerWrap = videoContainer.find('.video-player .file-video-mpx'),
          playerDesc = videoContainer.find('.video-player-desc'),
          playerAuth = videoContainer.find('.video-auth-player-wrapper'),
          playerNoAuth = videoContainer.find('.video-no-auth-player-wrapper');

      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
          var image = data.default_image,
              description = data.description_template,
              player = data.player;

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

          Drupal.behaviors.ms_videos.micrositePlayerBind();
          Drupal.behaviors.ms_videos.setVideoHeight();
        },
        error: function () {
          console.info('error');
        }
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
    micrositeSetVideoPlayer: function (autoplay, selector, data) {
      var autoplay = autoplay || true,
          selector = selector || '#thumbnail-list .item-list ul li.thumbnail.active',
          activeVideoThumb = $(selector),
          videoContainer = $('#video-container'),
          dataPlayerId = activeVideoThumb.attr('data-player-id'),
          dataFid = activeVideoThumb.attr('data-fid'),
          dataFullEpisode = activeVideoThumb.attr('data-full-episode'),
          ad_728x90 = $('#videos .ad_728x90'),
          ad_728x90_1 = $('#videos .ad_728x90_1'),
          ad_300x60_1 = $('#videos #ad_300x60_1'),
          ad_300x250 = $('#videos #ad_300x250'),
          ad_300x250_1 = $('#videos #ad_300x250_1'),
          filter,
          url;

      if (data) {
        dataPlayerId = data.data.player_id;
        dataFid = data.data.fid;
      }

      if ($('#video-filter').length) {
        filter = $('#video-filter .filter-item.active').text();
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay + '/' + filter;
      }
      else {
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay;
      }

      if (videoContainer.attr('data-video-url') != activeVideoThumb.attr('data-video-url')) {
        videoContainer.attr('data-video-url', activeVideoThumb.attr('data-video-url'));
      }

      if (dataFullEpisode == 'true') {
        Drupal.behaviors.ms_videos.micrositeMobileModal();
        if (ad_300x250_1) {
          ad_300x250_1.closest('li.ad').hide();
          ad_300x250_1.attr('id', 'ad_300x250').empty();
        }
        if (ad_728x90.attr('id') != 'ad_728x90_1') {
          ad_728x90.attr('data-class', ad_728x90.attr('class')).removeAttr('class').addClass('ad_728x90').attr('id', 'ad_728x90_1');
        }

        $('#videos .full-pane').addClass('full-desc');
        ad_300x60_1.show();
      }
      else {
        $('#videos .full-pane').removeClass('full-desc');
        ad_300x60_1.hide();

        if (ad_728x90.attr('id') == 'ad_728x90_1') {
          ad_728x90.attr('class', '').attr('class', ad_728x90.attr('data-class')).removeAttr('data-class').attr('id', '').empty();
        }
        if ($('#videos').find(ad_300x250)) {
          ad_300x250.closest('li.ad').show();
          ad_300x250.attr('id', 'ad_300x250_1');
        }
        if ($('#videos').find(ad_300x250_1)) {
          ad_300x250_1.closest('li.ad').show();
        }
        if (dataFullEpisode == 'false') {
          Drupal.behaviors.ms_global.create728x90Ad();
        }
      }

      Drupal.behaviors.ms_videos.micrositeSetPausePlayer();

      if ($('#thumbnail-list .item-list ul li.thumbnail.active > div').hasClass('tve-video-auth')) {
        videoContainer.find('.video-no-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-auth-player-wrapper').addClass('active-player').show();
      }
      else {
        videoContainer.find('.video-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-no-auth-player-wrapper').addClass('active-player').show();
      }

      Drupal.behaviors.ms_videos.micrositeGetVideo(url);
    },

    // SetPausePlayer
    micrositeSetPausePlayer: function () {
      var videoContainer = $('#video-container');
      if (videoContainer.hasClass('start')) {
        videoContainer.removeClass('play pause').addClass('pause');
        $pdk.controller.clickPlayButton(false);
        $pdk.controller.pause(true);
      }
    },

    //click Thumbnail
    clickThumbnail: function (elem) {
      var refreshAdsOmniture = 0,
          videoContainer = $('#video-container');

      if (videoContainer.attr('data-video-url') != elem.attr('data-video-url')) {
        $('#thumbnail-list .item-list ul li.thumbnail').removeClass('active');
        elem.addClass('active');
        refreshAdsOmniture = 1;
      }
      else {
        if (!elem.hasClass('active')) {
          elem.addClass('active');
        }
        Drupal.behaviors.ms_global.scrollToTop();
        return false;
      }

      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          dataVideoUrl = elem.attr('data-video-url'),
          itemTitle = elem.find('.title').text(),
          anchor = 'videos', // $('#site-nav-links-list li.internal.active').attr('data-menuanchor'),
          anchorSection = $('#site-nav-links li#nav-videos').find('.scroll-link').text(),
          anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
        window.location.href = anchorFull;
        return false;
      }

      Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
      Drupal.behaviors.ms_global.changeTitle(itemTitle, anchorSection, basePageName);
      Drupal.behaviors.ms_videos.micrositeSetPausePlayer();
      Drupal.behaviors.ms_videos.micrositeSetVideoPlayer(true, elem);
      Drupal.behaviors.ms_global.scrollToTop();
      if (refreshAdsOmniture) {
        Drupal.behaviors.ms_global.setOmnitureData(anchor, itemTitle);
      }
    },

    //AD 300x250 with class ADDED
    adAdded: function() {
      if (($('#videos .video-no-auth-player-wrapper').hasClass('active-player')) && ($('#thumbnail-list .thumbnail.ad').hasClass('added'))) {
        $('#thumbnail-list .thumbnail.ad').removeClass('added').show();
      }
    },

    //Get Thumbnail List
    getThumbnailList: function (url, offset, $toggler, categoryName) {
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
          $pdk.controller.shareCardCategory = categoryName;

          var videoList = data.videos,
              infoMore = data.info.more,
              adBlock = $('#thumbnail-list .thumbnail.ad');

          if (offset === 0) {
            $('#thumbnail-list .view-content .item-list ul').html(videoList);
          } else {
            $('#thumbnail-list .thumbnail').last().after(videoList);
          }

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
            } else {
              $('#thumbnail-list .expandable-toggle-wrap li').addClass('less').text('close');
              $('#thumbnail-list .expandable-toggle-wrap').removeClass('active').addClass('spoiler');
              $('#thumbnail-list').addClass('expanded');
            }

          } else {
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
            tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
            Drupal.behaviors.ms_videos.clickThumbnail(elem);
          });
        },
        error: function () {
          console.info('error');
        }
      });
    },

    attach: function (context, settings) {
      var self = this;

//      var previewItem = $('#thumbnail-list .item-list ul li.thumbnail');
      //change video on click to preview elements
      $('#thumbnail-list .item-list ul li.thumbnail').click(function (e) {
        e.preventDefault();
        var elem = $(this);
        Drupal.behaviors.ms_videos.clickThumbnail(elem);
      });

      //filters toggles
      $('#video-filter .filter-label').bind('click', function () {
        if ($('#video-filter .filter-label').hasClass('open')) {
          $('#video-filter .filter-label').removeClass('open');
          $('#video-filter .filter-menu').hide();
        } else {
          $('#video-filter .filter-label').addClass('open');
          $('#video-filter .filter-menu').show();
        }
      });
      $('body').live('click', function (e) {
        if($(e.target).parents().filter('#video-filter').length != 1){
          if ($('#video-filter .filter-label').hasClass('open')) {
            $('#video-filter .filter-label').removeClass('open');
            $('#video-filter .filter-menu').hide();
          }
        }
      });

      $('#video-filter .filter-item').click(function () {
        // Buttons
        var filterItem = $('#video-filter .filter-item'),
            filterMenu = $('#video-filter .filter-menu');

        if ($(this).hasClass('active')) {
          return false;
        }
        else {
          filterItem.removeClass('active');
          $(this).addClass('active');

          var categoryName = $('#video-filter .filter-item.active').text(),
              offset = 0,
              url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset;

          $('#thumbnail-list .expandable-toggle li').text('more');
          $('#thumbnail-list .expandable-toggle li').removeClass('less').addClass('more');
          $('#thumbnail-list').removeClass('expanded');

          Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName);
        }
/*
        // Drop-down selector
        var filterLabel = $('#video-filter .filter-label'),
            filterItem = $('#video-filter .filter-item'),
            filterMenu = $('#video-filter .filter-menu');

        if ($(this).hasClass('active')) {
          filterLabel.removeClass('open');
          filterMenu.hide();
          return false;
        }
        else {
          filterItem.removeClass('active');
          $(this).addClass('active');
          filterLabel.find('span').text($(this).text());
          filterLabel.removeClass('open');
          filterMenu.hide();

          var categoryName = $('#video-filter .filter-item.active').text(),
              offset = 0,
              url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset;

          $('#thumbnail-list .expandable-toggle li').text('more');
          $('#thumbnail-list .expandable-toggle li').removeClass('less').addClass('more');
          $('#thumbnail-list').removeClass('expanded');

          Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName);
        }
*/
      });

      // video items toggler
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

      // tve help messaging
      $tve_toggler = $('.tve-help-link');
      // $('.tve-help-link').click(function() {
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

      var resizeTimer;
      $(window).bind('resize', function () {
        if (typeof resizeTimer != 'undefined') clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          usa_debug('another resize event');
          self.setVideoHeight();
        }, 1000);
      });
      window.addEventListener('orientationchange', self.setVideoHeight);
    }
  }
})(jQuery);
