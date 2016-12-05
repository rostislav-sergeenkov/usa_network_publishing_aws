/**
 * Global js functions for microsites
 */
(function ($) {

  Drupal.behaviors.microsite_scroll = {

    quoteAnimationTimer: null,

    animateQuote: function (listSelector, k, kmax, tweenDuration) {
      var list = $('#microsite ' + listSelector),
          listId = list.attr('id'),
          listItem = $('#' + listId + ' li:eq(' + k + ')');

      listItem.addClass('active');
      setTimeout(function () {
        listItem.removeClass('active');
      }, tweenDuration);
    },

    quotationAnimation: function (listSelector) {
      var wwidth = $(window).width(),
          list = $('#microsite ' + listSelector),
          listId = list.attr('id'),
          listFound = (list.length > 0) ? 1 : 0,
          numQuotes = list.find('li').length,
          kmax = numQuotes - 1,
          k = 0,
          fadeDuration = 700,
          tweenDuration = 7000,
          totalDuration = fadeDuration + tweenDuration + fadeDuration;

      $('#microsite .quotes').removeClass('active');

      if (listFound) {
        $('#' + listId).addClass('active');
        $('#' + listId + ' li').removeClass('active');
        if (wwidth > 1020) {
          if (numQuotes > 1) {
            // clearInterval
            if (typeof Drupal.behaviors.microsite_scroll.quoteAnimationTimer != 'undefined') clearInterval(Drupal.behaviors.microsite_scroll.quoteAnimationTimer);

            // show 1st quote
            Drupal.behaviors.microsite_scroll.animateQuote(listSelector, k, kmax, tweenDuration);

            // setInterval
            Drupal.behaviors.microsite_scroll.quoteAnimationTimer = setInterval(function () {
              k = (k >= kmax) ? 0 : k + 1;
              Drupal.behaviors.microsite_scroll.animateQuote(listSelector, k, kmax, tweenDuration);
            }, totalDuration);
          }
          else if (numQuotes == 1) {
            $('#microsite ' + listSelector + ', #microsite ' + listSelector + ' li').addClass('active');
          }
        }
      }
    },

    // URL HANDLING
    // toTitleCase
    micrositeToTitleCase: function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },

    // getUrlPath
    // url: (string) url to parse
    micrositeGetUrlPath: function getUrlPath(url) {
      var pathArray = url.replace('http://', '').replace('https://', '');
      pathArray = pathArray.split('/');
      if (pathArray[0].indexOf(window.location.hostname) >= 0
          || pathArray[0].indexOf('usanetwork.com') >= 0) pathArray.shift();
      while (pathArray[0] == '') {
        pathArray.shift();
      }
      return pathArray;
    },

    // change url address
    micrositeChangeUrl: function (anchor, anchorFull) {
      var basePath = Drupal.settings.microsites_settings.base_path;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull.replace('/home', '');
        return false;
      }

      if (anchor != 'home') {
        history.pushState({"state": anchorFull}, anchorFull, anchorFull);
      }
      else {
        history.pushState({"state": basePath}, basePath, basePath);
      }
    },

    // getItemTitle
    // item = the item info from the url pathname
    // @TODO: work out how to get the item title based on the url
    micrositeGetItemTitle: function getItemTitle(item) {
      return '';
    },

    // OMNITURE
    // setOmnitureData
    micrositeSetOmnitureData: function setOmnitureData(anchor, itemTitle) {
      var anchor = anchor || null,
          itemTitle = itemTitle || '',
          siteName = Drupal.settings.microsites_settings.title,
          basePageName = siteName + ' | USA Network';
      if (!anchor) {
        var sectionData = Drupal.behaviors.microsite_scroll.micrositeParseUrl();
        anchor = sectionData['section'];
        if (sectionData['item'] != '') itemTitle = Drupal.behaviors.microsite_scroll.micrositeGetItemTitle(sectionData['item']);
      }
      var sectionTitle = Drupal.behaviors.microsite_scroll.micrositeToTitleCase(anchor),
          pageName = basePageName;
      s.pageName = siteName;
      s.prop3 = sectionTitle;
      s.prop4 = siteName + ' : ' + sectionTitle;
      s.prop5 = s.prop4;
//      if ((anchor != 'home') && (anchor != 'characters') && (anchor != 'videos') && (anchor != 'galleries') && (anchor != 'episodes') && (anchor != 'quizzes')) {
      if (anchor == 'about') {
        pageName = sectionTitle + ' | ' + pageName;
        s.pageName += ' : ' + sectionTitle;
      }
      if ((anchor == 'home') || (anchor == 'about')) {
        pageName = 'Dig Deeper | ' + pageName;
      }
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
      }
      switch (anchor) {
        case 'videos':
          s.prop3 = 'Video';
          s.prop4 = siteName + ' : Video';
          if (itemTitle == '') itemTitle = $('#microsite #videos-content .video-title').text();
          s.prop5 = siteName + ' : Video : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Video | ' + pageName;
          break;
        case 'galleries':
          var slider = $('#microsite #galleries .microsite-gallery .flexslider'),
              $slider = slider.data('flexslider'),
              currentSlide = (typeof $slider != 'undefined' && $slider.hasOwnProperty('currentSlide')) ? parseInt($slider.currentSlide) + 1 : 1;
          if (!currentSlide) currentSlide = 1;
          s.prop3 = 'Gallery';
          s.prop4 = siteName + ' : Gallery';
          if (itemTitle == '') itemTitle = $('#microsite #galleries-content .microsite-gallery-meta h2.gallery-title').text();
          if (itemTitle == '') itemTitle = $('#microsite #galleries-content .microsite-gallery-meta h1.gallery-title').text();
          s.prop5 = siteName + ' : Gallery : ' + itemTitle;
          s.pageName = s.prop5 + ' : Photo ' + currentSlide;
          pageName = itemTitle + ' | Gallery | ' + pageName;
          break;
        case 'characters':
          s.prop3 = 'Bio';
          s.prop4 = 'Profile Page'; // This is intentional per Loretta!
          if (itemTitle == '') itemTitle = $('#microsite #characters-content #character-info li.active > h3').text();
          if (itemTitle == '') itemTitle = $('#microsite #characters-content #character-info li.active > h1').text();
          s.prop5 = siteName + ' : Bio : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Bio | ' + pageName;
          break;
        case 'episodes':
          s.prop3 = 'Episode Guide';
          s.prop4 = siteName + ' : Episode Guide';
          if (itemTitle == '') itemTitle = $('#microsite #episodes-content #episode-info li.active > h3.episode-title').text();
          if (itemTitle == '') itemTitle = $('#microsite #episodes-content #episode-info li.active > h1.episode-title').text();
          s.prop5 = siteName + ' : Episode Guide : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Episode Guide | ' + pageName;
          break;
        case 'quizzes':
          s.prop3 = 'Quiz';
          s.prop4 = siteName + ' : Quiz';
          if (itemTitle == '') itemTitle = $('#microsite #quizzes .full-pane > h3.quiz-title').text();
          if (itemTitle == '') itemTitle = $('#microsite #quizzes .full-pane > h1.quiz-title').text();
          s.prop5 = siteName + ' : Quiz : ' + itemTitle;
          s.pageName = s.prop5;
          pageName = itemTitle + ' | Quiz | ' + pageName;
          break;
      }
      $('title').text(pageName);

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
    },

    //=========== Init one page scroll for microsite ===============//
    micrositeSectionScroll: function (anchor, item, itemTitle) {
      item = item || '';
      itemTitle = itemTitle || '';
      var basePath = Drupal.settings.microsites_settings.base_path,
          anchorItem = $('#nav-' + anchor),
          anchorNum = anchorItem.find('a').attr('data-menuitem'),
          anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor,
          nextSection = '#' + anchor,
          nextSectionId = $(nextSection).attr('id'),
          sectionHeight = window.innerHeight,
          currentSectionNum = $('#left-nav-links-list li.active a').attr('data-menuitem'),
          currentSectionId = $('#left-nav-links-list li.active').attr('id').replace('nav-', ''),
          direction = (anchorNum > currentSectionNum) ? '' : '-',
          otherDirection = (anchorNum > currentSectionNum) ? '-' : '',
          quoteDelay = 0;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull.replace('/home', '');
        return false;
      }

      // prep character section background for move
      if ($('#microsite #characters #character-background li').length > 0) {
        $('#microsite #characters #character-background li').css('position', 'absolute');
      }
      // prep episode section background for move
      if ($('#microsite #episodes #episode-background li').length > 0) {
        $('#microsite #episodes #episode-background li').css('position', 'absolute');
      }

      // if needed, stop quotation animations and fade them out
      if (currentSectionId == 'about' || currentSectionId == 'characters') {
        if (typeof Drupal.behaviors.microsite_scroll.quoteAnimationTimer != 'undefined') clearInterval(Drupal.behaviors.microsite_scroll.quoteAnimationTimer);
        $('#microsite .quotes').removeClass('active');
        quoteDelay = 700;
      }

      // now start animating the section
      $(nextSection).delay(quoteDelay).addClass('transition').css({'top': direction + sectionHeight + 'px'}).show().animate({'top': '0'}, 1000, 'jswing', function () {
        $('.section-info').removeClass('active');
        $(nextSection).addClass('active').removeClass('transition');

        var videoContainer = $('#video-container');

        if (nextSectionId == 'videos') {
          if (!videoContainer.hasClass('active')) {
            videoContainer.addClass('active');
            Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer();
          }
        }
        if (nextSectionId != 'videos') {
          Drupal.behaviors.microsite_scroll.micrositeSetPausePlayer();
          if (videoContainer.attr('data-ad-start') == 'true') {
            videoContainer.find('.active-player .custom-play').addClass('active').show();
            videoContainer.find('.active-player .custom-play').click(function () {
              $pdk.controller.clickPlayButton(true);
              $pdk.controller.pause(false);
              $('.active-player .custom-play').removeClass('active').hide();
            });
          }
        }

        // if needed, start quotation animations again
        if (nextSectionId == 'about') {
          Drupal.behaviors.microsite_scroll.quotationAnimation('#about .quotes');
        } else if (nextSectionId == 'characters') {
          var activeCharacterId = $('#microsite #characters #character-info li.active').attr('id');
          Drupal.behaviors.microsite_scroll.quotationAnimation('#characters #character-quotes .quotes.' + activeCharacterId);
        }

        Drupal.behaviors.ms_mpsAd.mpsLoadAd(anchor, true);
        Drupal.behaviors.microsite_scroll.micrositeSetOmnitureData(anchor, itemTitle);

        // set active menu item
        $('#left-nav-links-list li, #mobile-nav-links-list li').removeClass('active');
//        $('#tv-show-menu .internal').removeClass('active');
        $('#nav-' + anchor + ', #mobile-nav-' + anchor).addClass('active');
//        $('#tv-show-menu .internal[data-menuanchor=' + anchor + ']').addClass('active');

        // return character section background to fixed
        if ($('#microsite #characters #character-background li').length > 0) {
          $('#microsite #characters #character-background li').css('position', 'fixed');
        }
        // return episode section background to fixed
        if ($('#microsite #episodes #episode-background li').length > 0) {
          $('#microsite #episodes #episode-background li').css('position', 'fixed');
        }

      });
      $('.section-info.active').delay(quoteDelay).animate({'top': otherDirection + Math.ceil(sectionHeight / 2) + 'px'}, 1000, 'jswing', function () {
        $('.section-info').css({'top': '0'});
        $('#left-nav').removeClass('stop');
        $(this).animate({
          scrollTop: 0
        }, 0);
      });
    },

    // parseUrl
    micrositeParseUrl: function parseUrl() {
      urlPath = window.location.pathname;
      var sectionLocation = urlPath.replace(Drupal.settings.microsites_settings.base_path, '');
      if (sectionLocation != '') {
        var parse = sectionLocation.split('/');
        activeSection = parse[1];
        activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
      }
      else {
        activeSection = 'home';
        activeItem = '';
      }

      return {'section': activeSection, 'item': activeItem};
    },
    //player init bind
    micrositePlayerBind: function (options) {
      USAN.ms_player.init(options);
    },
    //ajax request
    micrositeGetVideo: function (url, isAuth) {

      var videoContainer = $('#video-container'),
          playerThumbnail = videoContainer.find('.video-image'),
          playerWrapSelector = '.file-video-mpx',
          playerDesc = videoContainer.find('.video-player-desc'),
          playerAuth = videoContainer.find('.video-auth-player-wrapper'),
          playerNoAuth = videoContainer.find('.video-no-auth-player-wrapper'),
          playerWrap;

      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {

          var image = data.default_image,
              description = data.description_template,
              player = data.player;

          if (playerAuth.hasClass('active-player')) {
            playerWrap = playerAuth.find(playerWrapSelector);
            playerNoAuth.find(playerWrapSelector).html('<iframe class="base-iframe"></iframe>');
            playerThumbnail.html(image);
            playerWrap.html(player);
          }
          if (playerNoAuth.hasClass('active-player')) {
            playerWrap = playerNoAuth.find(playerWrapSelector);
            playerAuth.find(playerWrapSelector).html('<iframe class="base-iframe"></iframe>');
            playerWrap.html(player);
          }

          playerWrap.find('iframe').eq(0).off('load');
          playerDesc.html(description);

          Drupal.behaviors.microsite_scroll.micrositePlayerBind({
            isAuth: isAuth,
            playerWrap: playerWrap,
            episodeRating: data['episode-rating'],
            episodeTitle: data['episode-title'],
            mpxGuid: data['mpx-guid']
          });
        },
        error: function () {
          console.info('error');
        }
      });
    },
    micrositeMobileModal: function () {
      // check if user uses mobile device
      if (USAN.isMobile.apple.device || USAN.isMobile.android.device) {
        var os = USAN.isMobile.apple.device ? 'iOS' : 'android';
        Drupal.behaviors.video_mobile.showMobileVideoModal(os);
      }
    },
    // set video player on click thumbnail
    micrositeSetVideoPlayer: function (autoplay, selector, data) {

      autoplay = autoplay || true;
      selector = selector || '#thumbnail-list .item-list ul li.thumbnail.active';

      var activeVideoThumb = $(selector),
          videoContainer = $('#video-container'),
          dataPlayerId = activeVideoThumb.attr('data-player-id'),
          dataFid = activeVideoThumb.attr('data-fid'),
          dataFullEpisode = activeVideoThumb.attr('data-full-episode'),
          isAuth = false,
          filter, url;

      if (data) {
        dataPlayerId = data.data.player_id;
        dataFid = data.data.fid;
      }

      if (videoContainer.attr('data-video-url') != activeVideoThumb.attr('data-video-url')) {
        videoContainer.attr('data-video-url', activeVideoThumb.attr('data-video-url'));
      }

      if (dataFullEpisode == 'true') {
        Drupal.behaviors.microsite_scroll.micrositeMobileModal();
        $('#videos .full-pane').addClass('full-desc');
      } else {
        $('#videos .full-pane').removeClass('full-desc');
      }

      Drupal.behaviors.microsite_scroll.micrositeSetPausePlayer();

      if ($('#thumbnail-list .item-list ul li.thumbnail.active > div').hasClass('tve-video-auth')) {
        isAuth = true;
        autoplay = false;
        videoContainer.find('.video-no-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-auth-player-wrapper').addClass('active-player').show();
      } else {
        videoContainer.find('.video-auth-player-wrapper').removeClass('active-player').hide();
        videoContainer.find('.video-no-auth-player-wrapper').addClass('active-player').show();
      }

      if ($('#video-filter').length) {
        filter = $('#video-filter .filter-item.active').text();
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay + '/' + tve.adobePass.currentProvider + '/' + filter;
      } else {
        url = Drupal.settings.basePath + 'ajax/get-video-in-player/' + Drupal.settings.microsites_settings.nid + '/' + dataFid + '/' + autoplay + '/' + tve.adobePass.currentProvider;
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
        Drupal.behaviors.microsite_scroll.micrositeGetVideo(url, isAuth);
      }
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
    //scroll to top
    micrositeScrollToTop: function () {
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    //change page title current section item
    micrositeChangeTitle: function changeTitle(item, section, basePageName) {
      $('title').text(item + ' | ' + section + ' | ' + basePageName);
    },

    //click Thumbnail
    micrositeClickThumbnail: function (elem) {
      var previewItem = $('#thumbnail-list .item-list ul li.thumbnail'),
          refreshAdsOmniture = 0,
          videoContainer = $('#video-container');

      if (videoContainer.attr('data-video-url') != elem.attr('data-video-url')) {
        previewItem.removeClass('active');
        elem.addClass('active');
        refreshAdsOmniture = 1;
        usa_debug(' ====== if videoContainer...');
      } else {
        if (!elem.hasClass('active')) {
          elem.addClass('active');
        }
        Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
        return false;
      }

      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          dataVideoUrl = elem.attr('data-video-url'),
          itemTitle = elem.find('.title').text(),
          anchor = $('#left-nav-links-list li.internal.active').attr('data-menuanchor'),
          anchorSection = $('#left-nav-links-list li.internal.active').find('.scroll-link').text(),
          anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull;
        return false;
      }

      Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
      Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);
      Drupal.behaviors.microsite_scroll.micrositeSetPausePlayer();
      Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer('true', elem);
      Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
      if (refreshAdsOmniture) {
        Drupal.behaviors.microsite_scroll.micrositeSetOmnitureData(anchor, itemTitle);
      }
    },
    //AD 300x250 with class ADDED
    micrositeAdAdded: function () {
      if (($('#videos .video-no-auth-player-wrapper').hasClass('active-player')) && ($('#thumbnail-list .thumbnail.ad').hasClass('added'))) {
        $('#thumbnail-list .thumbnail.ad').removeClass('added').show();
      }
    },
    //Get Thumbnail List
    micrositeGetThumbnailList: function (url, offset, $toggler, categoryName) {
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

          var thumbnail = $('#microsite #thumbnail-list .item-list ul li.thumbnail');
          /* $('#thumbnail-list .thumbnail'); */

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
            Drupal.behaviors.microsite_scroll.micrositeClickThumbnail(elem);
          });
        },
        error: function () {
          console.info('error');
        }
      });
    },
    // micrositeGetSection
    micrositeGetSection: function (anchor) {
      if (!Drupal.settings.use_section_ajax) {
        return;
      }

      var delta_anchor_relations = Drupal.settings.microsites_settings.anchor_delta;
      var delta = delta_anchor_relations[anchor];
      var url = Drupal.settings.basePath + 'ajax/callback/get-section/' + Drupal.settings.microsites_settings.nid + '/' + delta;
      var $anchor = $('#' + anchor);
      if (!$anchor.hasClass('loaded') && $anchor.find('.microsite-section-container > div').length <= 1) {
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'json'
        }).done(function (data) {
          console.log(data);
          var settings = $.parseJSON(data.settings);
          $.extend(true, Drupal.settings, settings);
          $('#' + anchor).find('.microsite-section-container').prepend(data.content);
          Drupal.attachBehaviors('#' + anchor);
          $anchor.addClass('loaded');
        });
      }

//      var $anchor = $('#' + anchor);
//      if (!$anchor.hasClass('loaded') && $anchor.find('.microsite-section-container > div').length <= 1) {
////usa_debug('======== micrositeGetSection(' + anchor + ')');
//        var delta_anchor_relations = Drupal.settings.microsites_settings.anchor_delta,
//            delta = delta_anchor_relations[anchor],
//            url = Drupal.settings.basePath + 'ajax/callback/get-section/' + Drupal.settings.microsites_settings.nid + '/' + delta + '/' + anchor,
//            settings = {url : url, effect : 'fade'},
//            ajax = new Drupal.ajax(false, false, settings);
//        ajax.eventResponse(ajax, {});
//      }
//      $anchor.addClass('loaded');
    },

    attach: function (context, settings) {
      //usa_debug('===== running attach in microsite_global.js');
      var startPathname = window.location.pathname;

      if (!$('html.ie9').length) {
        history.pushState({"state": startPathname}, startPathname, startPathname);
      }

      var previewItem = $('#microsite #thumbnail-list .item-list ul li.thumbnail');
      //change video on click to preview elements
      previewItem.click(function (e) {
        e.preventDefault();
        var elem = $(this);
        Drupal.behaviors.microsite_scroll.micrositeClickThumbnail(elem);
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
        if ($(e.target).parents().filter('#video-filter').length != 1) {
          if ($('#video-filter .filter-label').hasClass('open')) {
            $('#video-filter .filter-label').removeClass('open');
            $('#video-filter .filter-menu').hide();
          }
        }
      });

      $('#video-filter .filter-item').click(function () {

        var filterLabel = $('#video-filter .filter-label'),
            filterItem = $('#video-filter .filter-item'),
            filterMenu = $('#video-filter .filter-menu');

        if ($(this).hasClass('active')) {
          filterLabel.removeClass('open');
          filterMenu.hide();
          return false;
        } else {
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

          Drupal.behaviors.microsite_scroll.micrositeGetThumbnailList(url, offset, null, categoryName);
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
              Drupal.behaviors.microsite_scroll.micrositeGetThumbnailList(url, itemList, $toggler, categoryName);
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
      $tve_toggler = $('.tve-help-link.help-link');
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

      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          activeItem = '',
          self = this;

      // usa_debug
      var hostname = window.location.hostname,
          usa_debugFlag = (hostname == 'www.usanetwork.com') ? false : true;

      function usa_debug(msg, obj) {
        if (usa_debugFlag && typeof console != 'undefined') {
          console.log(msg);
          if (typeof obj != 'undefined') {
            console.log(obj);
          }
        }
      }

      // add quotations if viewing about or characters sections
      var urlItem = Drupal.behaviors.microsite_scroll.micrositeParseUrl();
      if (urlItem.section == 'about') {
        Drupal.behaviors.microsite_scroll.quotationAnimation('#about .quotes');
      }
      else if (urlItem.section == 'characters') {
        Drupal.behaviors.microsite_scroll.quotationAnimation('#characters #character-quotes .quotes.active');
      }

      // initialize left nav clicks
      $('.internal a.scroll-link').click(function (e) {
        e.preventDefault();

        if ($('#left-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
          return false;
        } else {
          $('#left-nav').addClass('stop');
        }

        var anchor = $(this).parent().attr('data-menuanchor'),
            anchorFull = basePath + '/' + anchor,
            delta = $(this).parent().attr('data-delta');

        Drupal.behaviors.microsite_scroll.micrositeGetSection(anchor, delta);
        Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
        Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor);
      });

      // initialize hamburger menu sub-nav clicks
      $('ul#mobile-nav-links-list li.sub-nav').click(function () {
        $(this).toggleClass('active');
        $(this).find('ul').toggle(600);
      });

      //if ($('#sections .section').eq(0).hasClass('active')) {
      //  Drupal.behaviors.microsite_scroll.micrositeLogoAnim(false);
      //}
      //else {
      //  Drupal.behaviors.microsite_scroll.micrositeLogoAnim(true);
      //}

      // initialize left nav hover to display subnav
      $('#left-nav-links-list li').hover(function () {
        $(this).addClass('hover');
      }, function () {
        $(this).removeClass('hover');
      });

      // Turn off the popstate/hashchange tve-core.js event listeners
      $(window).off('popstate');
      $(window).off('hashchange');

      window.onpopstate = function () {
        window.onpopstate = function (event) {
          if (window.history.state == null) {
            return false;
          }
          usa_debug('window.onpopstate()');
          var section_num = null,
              section = null,
              splited = null;

          if (event.state != null) {
            splited = event.state.state.split('/');

            if (splited[1] == 'dig') {
              section_num = $('#left-nav-links-list [data-menuanchor=' + splited[2] + ']').find('a').attr('data-menuitem');
              section = splited[2];
              if (section_num == undefined) {
                section_num = 1;
                section = 'home';
              }
            }
          }
          else {
            section_num = 1;
            section = 'home';
          }
          Drupal.behaviors.microsite_scroll.micrositeSectionScroll(section);
        };
      };

      // initialize next button click
      $('#sections .section .scroll-to-next').click(function () {

        var thisSection = $('#left-nav li.active a').attr('data-menuitem'),
            nextSection = thisSection++,
            nextSectionNavElem = $('#left-nav li').eq(nextSection).attr('data-menuanchor'),
            anchorFull = basePath + '/' + nextSectionNavElem;
        Drupal.behaviors.microsite_scroll.micrositeChangeUrl(nextSectionNavElem, anchorFull);
        Drupal.behaviors.microsite_scroll.micrositeSectionScroll(nextSectionNavElem);
      });
      // end one page scroll//

      // set scroll and section height
      function setSectionHeight() {
        var $mobileNavBar = $('#mobile-nav-bar');
        $('.section').each(function () {
          var msHeight = ($mobileNavBar.css('display') == 'block') ? $(window).height() - $mobileNavBar.height() : $(window).height();
          $(this).height(msHeight);
//          $('#characters .microsite-section-container').height(msHeight - 5);
        });
      }

      // setTimeout(setSectionHeight, 2000); // @TODO: do we need a timeout here to allow some content like carousels to render?
      setSectionHeight();

      // A-SPOT AND PROMO CLICKS - DON'T REMOVE THIS!!!!
      // @TODO: AFTER LAUNCH, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
      $('#show-aspot-microsite .aspot-link, #microsite #home .node-usanetwork-promo a').click(function (e) {
        var anchorFull = this.href,
            anchorPathParts = Drupal.behaviors.microsite_scroll.micrositeGetUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig'
            && anchorFull != window.location.protocol + '//' + window.location.hostname + '/dig/videos/the-making-of-dig') {
          e.preventDefault();

          // if this is IE9, reload the correct page
          if ($('html').hasClass('ie9')) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = anchorPathParts[1];
          anchorSection = Drupal.behaviors.microsite_scroll.micrositeToTitleCase(anchor);
          anchorItem = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';
          // if video
          if (anchor == 'videos') {
            var currentThumb = $('#thumbnail-list .item-list ul li.thumbnail[data-video-url="' + anchorPathParts[2] + '"]');
            var withInit = true;
            if (currentThumb.hasClass('active') && $('#video-container').hasClass('start')) {
              withInit = false;
            } else {
              previewItem.removeClass('active');
              currentThumb.addClass('active');
            }

            if ($('#video-container .video-player iframe').attr('id') == 'base-frame') {
              $('#video-container .video-player iframe').attr('id', 'aspot-frame');
            }

            var activeVideoThumb = $('#thumbnail-list .item-list ul li.thumbnail.active'),
                dataVideoUrl = activeVideoThumb.attr('data-video-url'),
                itemTitle = activeVideoThumb.find('.title').text(),
                anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

            Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
            Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, anchorItem, itemTitle);
            Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);

            if (withInit) {
              Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer('true');
            } else {
              $pdk.controller.clickPlayButton(true);
              $pdk.controller.pause(false);
            }
          }
          // if characters
          else if (anchor == 'characters') {
            if (anchorItem != '') {
              Drupal.behaviors.microsite_characters.micrositeSwitchCharacters('nav-' + anchorItem, 10, 1);
            }
            else {
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, anchorItem);
            }
          }
          // if episodes
          else if (anchor == 'episodes') {
            if (anchorItem != '') {
              Drupal.behaviors.microsite_episodes.micrositeSwitchEpisodes(anchorItem, 10, 1);
            }
            else {
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, anchorItem);
            }
          }
          else if (anchor == 'galleries') {
            if (anchorItem != '') {
              var anchorFull = basePath + '/' + anchor + '/' + anchorItem;
              Drupal.behaviors.micrositeGalleriesBxSliders.promoClickSwitchGallery(anchorFull);
            }
            else {
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, anchorItem);
            }
          }
          // if any other section type
          else {
            var anchorFull = basePath + '/' + anchor;
            Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
            Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, anchorItem);
          }
        }
      });


      var resizeTimer;
      $(window).bind('resize', function () {
        if (typeof resizeTimer != 'undefined') clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          usa_debug('another resize event');
          setSectionHeight();

          // clearInterval
          if (typeof Drupal.behaviors.microsite_scroll.quoteAnimationTimer != 'undefined') clearInterval(Drupal.behaviors.microsite_scroll.quoteAnimationTimer);

          // add quotations if viewing about or characters sections
          var urlItem = Drupal.behaviors.microsite_scroll.micrositeParseUrl();
          if (urlItem.section == 'about') {
            Drupal.behaviors.microsite_scroll.quotationAnimation('#about .quotes');
          }
          else if (urlItem.section == 'characters') {
            Drupal.behaviors.microsite_scroll.quotationAnimation('#characters #character-quotes .quotes.active');
          }
        }, 1000);
      });
      window.addEventListener('orientationchange', setSectionHeight);

      // create video 728x90 ad and
      // set initial active video thumbnail on video load
      // test for video player load ad
      $(document).ready(function () {

        Drupal.behaviors.ms_mpsAd.mpsLoadAd(Drupal.behaviors.ms_mpsAd.getActiveSectionName(), false);

        if ($('#videos').hasClass('active')) {
          $('#video-container').addClass('active');
          Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer('false');
        }

        if ($('html').hasClass('touch')) {
          $(document).click(function (e) {
            if (e.target.getElementById != 'mobile-nav' && e.target.parentElement.getElementById != 'mobile-nav') {
              if ($('#mobile-nav').hasClass('show-nav-links-list')) {
                $('#mobile-nav').removeClass('show-nav-links-list');
              }
            }
          });
          $('#mobile-nav').on('click', function (e) {
            e.stopPropagation();
            if ($('#mobile-nav').hasClass('show-nav-links-list')) {
              $('#mobile-nav').removeClass('show-nav-links-list');
            } else {
              $('#mobile-nav').addClass('show-nav-links-list');
            }
          });
          $('#mobile-nav-links-list').click(function (e) {
            e.stopPropagation();
          });
        }

        Drupal.behaviors.microsite_carousel.initCarousel();
      });

      $('.section').on('scroll', function () {
        Drupal.behaviors.ms_lazyLoad.initImgShow();
      });


      $(window).load(function () {
        // Turn off the popstate/hashchange tve-core.js event listeners
        $(window).off('popstate');
        $(window).off('hashchange');

        $('#mobile-nav .internal a.scroll-link').click(function (e) {
          e.preventDefault();
          if ($('#mobile-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
            return false
          } else {
            $('#mobile-nav').addClass('stop');
          }

          var anchor = $(this).parent().attr('data-menuanchor'),
              anchorFull = basePath + '/' + anchor;

//          $('#main-menu-toggle').click();
          Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
          Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor);
        });
      });

    }
  };
})(jQuery);
