/**
 * Global js functions for microsite videos
 */
(function ($) {
  Drupal.behaviors.ms_videos = {

    // Gigya share bar
    updateGigyaSharebarOmniture: function(initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      if (typeof Drupal.gigya != 'undefined') {
        var sharebar = new Object(),
            $videoInfoContainer = $('#videos #video-container .video-player-desc'),
            caption = $videoInfoContainer.find('.video-description').text(),
            title = $videoInfoContainer.find('.video-title').text(),
            $image = ($('#videos #video-container .video-auth-player-wrapper #player img').css('display') != 'none') ? $('#videos #video-container .video-auth-player-wrapper #player img') : null,
            imageSrc = ($image != null) ? $image.attr('src') : '';

        sharebar.gigyaSharebar = {
          containerID: "video-gigya-share",
          iconsOnly: true,
          layout: "horizontal",
          shareButtons: "facebook, twitter, tumblr, pinterest, share",
          shortURLs: "never",
          showCounts: "none"
        }

        sharebar.gigyaSharebar.ua = {
          description: caption,
          imageBhev: "url",
          imageUrl: imageSrc,
          linkBack: url,
          title: title
        }
        Drupal.gigya.showSharebar(sharebar);

        // omniture
        if (!initialPageLoad) {
          var siteName = Drupal.settings.microsites_settings.title,
              basePath = Drupal.settings.microsites_settings.base_path,
              basePageName = siteName + ' | USA Network';

          s.prop3 = 'Videos';
          s.prop4 = siteName + ' : Videos';
          s.prop5 = siteName + ' : Videos : ' + title;
          s.pageName = s.prop5;
          document.title = title + ' | Video | ' + basePageName;
          if (typeof s_gi != 'undefined') {
            void (s.t());
          }
        }
/*
        var slider = $slider.data('flexslider');
        currentSlide = slider.currentSlide + 1;
        var $sharebar = $slider.parents('.microsite-section-container').find('.field-name-field-gigya-share-bar > div');
        if ($sharebar.length > 0) {
          var $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h2.gallery-title').text();
          if ($title == '') $title = $slider.parents('.microsite-section-container').find('.microsite-gallery-meta h1.gallery-title').text();
          var $currentImage = $slider.find('.flex-active-slide .file-image img');
          var $currentCaption = $slider.find('.flex-active-slide .field-name-field-caption p').text();

          sharebar = new Object();
          sharebar.gigyaSharebar = {
            containerID: "gigya-share",
            iconsOnly: true,
            layout: "horizontal",
            shareButtons: "facebook, twitter, tumblr, pinterest, share",
            shortURLs: "never",
            showCounts: "none"
          }

          var url = $('.galleries-bxslider li.active a').attr('href');
          url = window.location.protocol + '//' + window.location.hostname + url;
          sharebar.gigyaSharebar.ua = {
            description: $currentCaption,
            imageBhev: "url",
            imageUrl: $currentImage.attr('src'),
            linkBack: url, // + '#' + currentSlide, // @TODO: add the gallery name and possibly the photo number to the url
            title: $title
          }
          Drupal.gigya.showSharebar(sharebar);

          // omniture
          if (!initialPageLoad) {
            var siteName = Drupal.settings.microsites_settings.title,
                basePath = Drupal.settings.microsites_settings.base_path,
                basePageName = siteName + ' | USA Network';

            s.prop3 = 'Gallery';
            s.prop4 = siteName + ' : Gallery';
            s.prop5 = siteName + ' : Gallery : ' + $title;
            s.pageName = s.prop5 + ' : Photo ' + currentSlide;
            document.title = $title + ' | Gallery | ' + basePageName;
            if (typeof s_gi != 'undefined') {
              void (s.t());
            }
          }
        }
*/
      }
    },

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
    micrositeGetVideo: function (url, initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      var videoContainer = $('#video-container'),
          playerWrap = videoContainer.find('.video-player .file-video-mpx'),
          playerDesc = videoContainer.find('.video-player-desc'),
          playerAuth = videoContainer.find('.video-auth-player-wrapper'),
          playerNoAuth = videoContainer.find('.video-no-auth-player-wrapper');

      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json'
      })
      .done(function(data) {
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

        // initialize Gigya sharebar
        Drupal.behaviors.ms_videos.updateGigyaSharebarOmniture(initialPageLoad);
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
      else { // not full episode
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
        if (dataFullEpisode == 'false' && Drupal.behaviors.ms_global.isScrolledIntoView('#videos .ad-leaderboard')) {
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

      Drupal.behaviors.ms_videos.micrositeGetVideo(url, initialPageLoad);
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
          anchor = 'videos',
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
              tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
              Drupal.behaviors.ms_videos.clickThumbnail(elem);
            });
          });
        });
      })
      .fail(function(jqXHR, textStatus) {
        usa_debug('ajax call failed -- textStatus: ' + textStatus);
      })
    },

    attach: function (context, settings) {
      var self = this;

      // change video on click to preview elements
      $('#thumbnail-list .item-list ul li.thumbnail').click(function (e) {
        e.preventDefault();
        var elem = $(this);
        //Drupal.behaviors.ms_videos.clickThumbnail(elem);
        self.clickThumbnail(elem);
        self.updateGigyaSharebarOmniture(0);
      });

      // filters toggles
      $('#video-filter .filter-label').bind('click', function () {
        if ($('#video-filter .filter-label').hasClass('open')) {
          $('#video-filter .filter-label').removeClass('open');
          $('#video-filter .filter-menu').hide();
        } else {
          $('#video-filter .filter-label').addClass('open');
          $('#video-filter .filter-menu').show();
        }
      });

/* @TODO: DV - DO WE NEED THE FOLLOWING? */
      $('body').live('click', function (e) {
        if ($(e.target).parents().filter('#video-filter').length != 1){
          if ($('#video-filter .filter-label').hasClass('open')) {
            $('#video-filter .filter-label').removeClass('open');
            $('#video-filter .filter-menu').hide();
          }
        }
      });
/**/

      $('#video-filter li.filter-item').click(function () {
        var filterItem = $('#video-filter li.filter-item'),
            filterMenu = $('#video-filter .filter-menu'),
            filterClass = $(this).attr('data_filter_class');

        if ($(this).hasClass('active')) {
          return false;
        }
        else {
          filterItem.removeClass('active');
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
            var season_num = childItems.last().attr('data-season-num');

            childItems.last().addClass('active');
            url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset + '/' + season_num;;
          }

          $('#thumbnail-list .expandable-toggle li').text('more');
          $('#thumbnail-list .expandable-toggle li').removeClass('less').addClass('more');
          $('#thumbnail-list').removeClass('expanded');

          //Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName);
          self.getThumbnailList(url, offset, null, categoryName, filterClass);
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

      $('#video-filter .filter-child-item').click(function () {
        var filterItems = $('#video-filter .filter-child-item'),
            filterMenu = $('#video-filter .filter-menu');

        if ($(this).hasClass('active')) {
          return false;
        }
        else {
          filterItems.removeClass('active');
          filterMenu.find('.filter-item').removeClass('active');
          $(this).addClass('active');
          $(this).parents('li.filter-item').addClass('active');

          var categoryName = $('#video-filter .filter-item.active').attr('data-filter-name'),
              offset = 0,
              season_num = $(this).attr('data-season-num'),
              url = Drupal.settings.basePath + 'ajax/microcite/get/videos/' + Drupal.settings.microsites_settings.nid + '/' + categoryName + '/' + offset + '/' + season_num;

          $('#thumbnail-list .expandable-toggle li').text('more').removeClass('less').addClass('more');
          $('#thumbnail-list').removeClass('expanded');

          Drupal.behaviors.ms_videos.getThumbnailList(url, offset, null, categoryName);
        }
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
