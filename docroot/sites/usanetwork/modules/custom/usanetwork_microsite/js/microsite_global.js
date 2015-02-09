/**
 * Global js functions for microsites
 */
(function ($) {

  var urlPath = window.location.pathname;
  var activeSection = 'home';
  var minWidthForNav = 875;
  var heightForHomeLogoAnim = 700;
  var scrollTopForLogoAnim = 200;

  Drupal.behaviors.microsite_scroll = {

    //create mobile menu for microsite
    micrositeCreateMobileMenu: function () {
      var leftNav = $('#left-nav-links-list'),
          leftNavItem = leftNav.find('li.internal'),
          mobileMenu = $('#jPanelMenu-menu #tv-show-menu');

      i = 0;
      j = 0;

      leftNavItem.each(function () {
        if (i == 0) {
          var attrHome = leftNavItem.eq(i).attr('data-menuanchor'),
              attrHomeLink = leftNavItem.eq(i).find('a.scroll-link').attr('data-menuitem'),
              mobileMenuTitle = mobileMenu.find('h2.menu-title'),
              mobileMenuTitleLink = mobileMenu.find('h2.menu-title a.slide-panel-link');

          mobileMenuTitle.attr('data-menuanchor', attrHome);
          mobileMenuTitle.addClass('internal');
          mobileMenuTitleLink.addClass('scroll-link');
          mobileMenuTitleLink.attr('href', '#');
          mobileMenuTitleLink.attr('data-menuitem', attrHomeLink);

          if (leftNavItem.eq(i).hasClass('active')) {
            mobileMenuTitle.addClass('active');
          }
        }
        if (i != 0) {
          var attrSection = leftNavItem.eq(i).attr('data-menuanchor'),
              attrSectionLink = leftNavItem.eq(i).find('a.scroll-link').attr('data-menuitem'),
              mobileMenuList = mobileMenu.find('.item-list ul').eq(0),
              mobileMenuListItem = mobileMenuList.find('li').eq(j),
              mobileMenuListItemLink = mobileMenuListItem.find('a.slide-panel-link');

          mobileMenuList.attr('id', 'ms-left-nav');
          mobileMenuListItem.attr('data-menuanchor', attrSection);
          mobileMenuListItem.addClass('internal');
          mobileMenuListItemLink.addClass('scroll-link');
          mobileMenuListItemLink.attr('href', '#');
          mobileMenuListItemLink.attr('data-menuitem', attrSectionLink);

          if (leftNavItem.eq(i).hasClass('active')) {
            mobileMenuListItem.addClass('active');
          }

          j = j + 1;
        }
        i = i + 1;
      })
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


    //ajax request
    micrositeGetVideoDesc: function (url) {
      $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html',
        success: function (data) {
          $('#video-container .video-player-desc').html(data);
        }
      });
    },
    // set video player on click thumbnail
    micrositeSetVideoPlayer: function (selector) {

      if (!selector) {
        selector = '#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active';
      }

      var videoContainer = $('#video-container'),
          videoPlayer = $('#video-container .video-player'),
          Player = $('#video-container .video-player iframe'),
          currentId = Player.attr('id'),
          activeVideoThumb = $(selector),
          dataAccountId = activeVideoThumb.attr('data-account-id'),
          dataPlayerId = activeVideoThumb.attr('data-player-id'),
          dataVideoUrl = activeVideoThumb.attr('data-video-url'),
          dataVideoId = activeVideoThumb.attr('data-video-id'),
          autoplay,
          src;

      if (videoPlayer.attr('data-video-url') != activeVideoThumb.attr('data-video-url')) {
        videoPlayer.attr('data-video-url', activeVideoThumb.attr('data-video-url'));
      }

      if (Player.attr('data-autoplay') == 'false') {
        autoplay = 'false';
        Player.removeAttr('data-autoplay');
      } else {
        autoplay = 'true';
      }

      if (activeVideoThumb.attr('data-full-episode') == 'true') {
        $('#ad_300x60_1').show();
      } else {
        $('#ad_300x60_1').hide();
      }

      src = '//player.theplatform.com/p/' + dataAccountId + '/' + dataPlayerId + '/select/' + dataVideoId + '?autoPlay=' + autoplay + '&form=html&nid=' + Drupal.settings.microsites_settings.nid + '&mbr=true#playerurl=' + window.location.href;
      Player.attr('id', dataVideoUrl);
      Player.attr('src', src);

      for (key in $pdk.controller.listeners) {
        delete $pdk.controller.listeners[key];
      }

      $pdk.bindPlayerEvents(dataVideoUrl, currentId);

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
    micrositeScrollToTop: function scrollToTop() {
//      var container = $('sections'),
//        activeSection = container.find('.section.active');
//      activeSection.mCustomScrollbar('scrollTo',['top',null]);
      $('.section.active').animate({
        scrollTop: 0
      }, 2000);
    },

    //Usa_refreshMicrositeAdsBySection.
    usa_refreshMicrositeAdsBySection: function (adContainer) {
      usa_debug('usa_refreshMicrositeAdsBySection(' + adContainer + ')');
      $(adContainer + ' iframe').attr('src', $(adContainer + ' iframe').attr('src'));
    },

    //change page title current section item
    micrositeChangeTitle: function changeTitle(item, section, basePageName) {
      $('title').text(item + ' | ' + section + ' | ' + basePageName);
    },

    // 300x250 -- not for video companion ads!!
    create300x250Ad: function (section) {

      usa_debug('create300x250Ad(' + section + ')');
      if (section != 'videos' && section != 'home') {
        // check to see if there's already an ad
        if ($('.dart-name-300x250_ifr_reload_' + section + ' iframe').length) {
          adBlock = '.dart-name-300x250_ifr_reload_' + section;
          Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection(adBlock);
        }
        else if ($('.dart-name-220x60_ifr_reload_' + section + ' iframe').length) {
          adBlock = '.dart-name-220x60_ifr_reload_' + section;
          Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection(adBlock);
        }
        else {
          iframeQueue = [];
          Drupal.DART.tag('{"machinename":"300x250_ifr_reload_' + section + '","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord=' + ord + '?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord=' + ord + '?"}}');
          // write iframe ad units to page
          if (iframeQueue.length) {
            for (var i = 0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
              // 300x250 second
              if (iframeQueue[i].tag.indexOf('300x250') != '-1') {
                $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
              }
              // 220x60 last
              if (iframeQueue[i].tag.indexOf('220x60') != '-1') {
                $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
              }
            }
          }
        }
      }
    },

    // createAds
    // there is a race condition if we try to create both the 728x90
    // and the 300x250 at about the same time, so we create the 728x90
    // first and then create the 300x250
    create728x90Ad: function (section) {
      if (!section) {
        section = $('#sections .section.active').attr('id').replace('section-', '') || 'home';
      }

      usa_debug('create728x90Ad(' + section + ')');

      // check to see if there is an ad already there
      if ($('.dart-name-728x90_ifr_reload_' + section + ' iframe').length) {
        adBlock = '.dart-name-728x90_ifr_reload_' + section;
        Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection(adBlock);
      }
      // if no 728x90 ad in this section yet, create it
      else {
        // we have to clear the iframeQueue first and then re-build it using
        // the Drupal.DART.tag, then we write the iframes by looping through
        // the iframeQueue

        // start 728x90
        iframeQueue = new Array();

        Drupal.DART.tag('{"machinename":"728x90_ifr_reload_' + section + '","name":"728x90 script","pos":"7","sz":"728x90","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"728x90","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord=' + ord + '?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord=' + ord + '?"}}');

        // write iframe ad units to page
        if (iframeQueue.length) {
          for (var i = 0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
            // 728x90
            if (iframeQueue[i].tag.indexOf('728x90') != '-1') {
              $('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
            }
          }
        }
      }
      // if home section, make sure the flexslider carousel has been
      // initialized before loading the 300x250 ad
      if (section != 'videos') {
        Drupal.behaviors.microsite_scroll.create300x250Ad(section);
      }
    },
    attach: function (context, settings) {

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

      // URL HANDLING
      // toTitleCase
      function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }

      // getItemTitle
      // item = the item info from the url pathname
      // @TODO: work out how to get the item title based on the url
      function getItemTitle(item) {
        return '';
      }

      // OMNITURE
      // setOmnitureData
      function setOmnitureData(anchor, itemTitle) {
        var anchor = anchor || null,
            itemTitle = itemTitle || '';
        if (!anchor) {
          var sectionData = Drupal.behaviors.microsite_scroll.micrositeParseUrl();
          anchor = sectionData['section'];
          if (sectionData['item'] != '') itemTitle = getItemTitle(sectionData['item']);
        }
        var sectionTitle = toTitleCase(anchor),
            pageName = basePageName;
        s.pageName = siteName;
        s.prop3 = sectionTitle;
        s.prop4 = siteName + ' : ' + sectionTitle;
        s.prop5 = s.prop4;
        if (anchor != 'home') {
          pageName = sectionTitle + ' | ' + pageName;
          s.pageName += ' : ' + sectionTitle;
        }
        if (itemTitle != '') {
          pageName = itemTitle + ' | ' + pageName;
          s.pageName += ' : ' + itemTitle;
        }
        switch (anchor) {
          case 'videos':
            s.prop3 = 'Video';
            s.prop4 = siteName + ' : Video';
            // if (itemTitle == '') {itemTitle = $('#microsite #videos-content .video-title').text();
            s.prop5 = itemTitle.length ? siteName + ' : Video : ' + itemTitle : s.prop4;
            s.pageName = s.prop5;
            break;
          case 'galleries':
            s.prop3 = 'Gallery';
            s.prop4 = siteName + ' : Gallery';
            s.prop5 = siteName + ' : Gallery : ' + $('#microsite #galleries-content .microsite-gallery-meta h2').text();
            s.pageName = s.prop5 + ' : Photo 1';
            break;
          case 'characters':
            s.prop3 = 'Bio';
            break;
        }
        $('title').text(pageName);

        if (typeof s_gi != 'undefined') {
          void(s.t()); // omniture page call
        }
      };
      Drupal.behaviors.microsite_scroll.micrositeParseUrl();


      //=========== Init one page scroll for microsite ===============//
      function sectionScroll(anchor, item, itemTitle) {
        item = item || '';
        itemTitle = itemTitle || '';
        var anchorItem = $('#nav-' + anchor),
            anchorNum = anchorItem.find('a').attr('data-menuitem'),
            anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor,
            nextSection = '#' + anchor,
            sectionHeight = window.innerHeight,
            currentSectionNum = $('#left-nav-links-list li.active a').attr('data-menuitem'),
            direction = (anchorNum > currentSectionNum) ? '' : '-',
            otherDirection = (anchorNum > currentSectionNum) ? '-' : '';
//usa_debug('sectionScroll(' + elemId + ')\nanchorItem: ', anchorItem);
//usa_debug('anchor: ' + anchor + '\nanchorNum: ' + anchorNum + '\nanchorFull: ' + anchorFull + '\nnextSection: ' + nextSection + '\nsectionHeight: ' + sectionHeight + '\ncurrentSectionNum: ' + currentSectionNum + '\ndirection: ' + direction + '\notherDirection: ' + otherDirection);

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull.replace('/home', '');
          return false;
        }

        if (anchorNum == 1) {
          logoAnim(false);
        }
        else {
          logoAnim(true);
        }
        $(nextSection).addClass('transition').css({'top': direction + sectionHeight + 'px'}).show().animate({'top': '0'}, 1000, 'jswing', function () {
          $('.section-info').removeClass('active');
          $(nextSection).addClass('active').removeClass('transition');

          if ($(nextSection).attr('id') == 'videos') {
            var Player = $('#video-container .video-player iframe');
            if (Player.attr('id') == 'base-frame') {
              Player.once(function () {
                Player.attr('data-autoplay', 'false');
                Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer();
              })
            }
          }
          if ($(nextSection).attr('id') != 'videos') {
            Drupal.behaviors.microsite_scroll.micrositeSetPausePlayer();
          }

          Drupal.behaviors.microsite_scroll.create728x90Ad(anchor);
          setOmnitureData(anchor, itemTitle);

          // set active menu item
          $('#left-nav-links-list li').removeClass('active');
          $('#tv-show-menu .internal').removeClass('active');
          $('#nav-' + anchor).addClass('active');
          $('#tv-show-menu .internal[data-menuanchor=' + anchor + ']').addClass('active');
        });
        $('.section-info.active').animate({'top': otherDirection + Math.ceil(sectionHeight / 2) + 'px'}, 1000, 'jswing', function () {
          $('.section-info').css({'top': '0'});
          $('#left-nav').removeClass('stop');
          $(this).animate({
            scrollTop: 0
          }, 0);
        });

      };

      // init change url address
      function changeUrl(anchor, anchorFull) {
        if (anchor != 'home') {
          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
        else {
          history.pushState({"state": basePath}, basePath, basePath);
        }
      };

      // initialize left nav clicks
      $('.internal a.scroll-link').click(function (e) {
        e.preventDefault();

        if ($('#left-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
          return false;
        } else {
          $('#left-nav').addClass('stop');
        }

        var anchor = $(this).parent().attr('data-menuanchor'),
            anchorFull = basePath + '/' + anchor;

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull.replace('/home', '');
          return false;
        }

        changeUrl(anchor, anchorFull);
        sectionScroll(anchor);
      });

      // Animation for logo in left nav.
      function logoAnim(show_logo) {
        if (show_logo) {
          $('#left-nav-inner').animate({'top': '0'}, 400);
          $('#left-nav-logo, #left-nav-tunein').animate({'opacity': 1}, 200);
        }
        else {
          $('#left-nav-inner').animate({'top': '-130px'}, 400);
          $('#left-nav-logo, #left-nav-tunein').animate({'opacity': 0}, 200);
        }
      }

      if ($('#sections .section').eq(0).hasClass('active')) {
        logoAnim(false);
      }
      else {
        logoAnim(true);
      }

      // initialize left nav hover to display subnav
      $('#left-nav-links-list li').hover(function () {
        $(this).addClass('hover');
      }, function () {
        $(this).removeClass('hover');
      });

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
          sectionScroll(section);
        };
      };

      // initialize next button click
      $('#sections .section .scroll-to-next').click(function () {

        var thisSection = $('#left-nav li.active a').attr('data-menuitem'),
            nextSection = thisSection++,
            nextSectionNavElem = $('#left-nav li').eq(nextSection).attr('data-menuanchor'),
            anchorFull = basePath + '/' + nextSectionNavElem;
        changeUrl(nextSectionNavElem, anchorFull);
        sectionScroll(nextSectionNavElem);
      });
      // end one page scroll//

      // set scroll and section height
      function setSectionHeight() {
        $('.section').each(function () {

          var msHeight = $(window).height() - $('#mega-nav').height();
          $(this).height(msHeight);

        });
      }

      // setTimeout(setSectionHeight, 2000); // @TODO: do we need a timeout here to allow some content like carousels to render?
      setSectionHeight();

      //============ AJAX request for video section ===============//
      // ajax/get-video-in-player/[node] - for default video
      // ajax/get-video-in-player/[node]/[fid]- for video
      var currentNid = Drupal.settings.microsites_settings.nid,
          defaultUrl = Drupal.settings.basePath + 'ajax/get-video-in-player/' + currentNid,
          previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li');

      //change video on click to preview elements
      previewItem.click(function (e) {
        e.preventDefault();
        var refreshAdsOmniture = 0,
            Player = $('#video-container .video-player iframe'),
            videoContainer = $('#video-container');

        if (!$(this).hasClass('active')) {
          previewItem.removeClass('active');
          $(this).addClass('active');
          refreshAdsOmniture = 1;
        } else {
          Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
          if (videoContainer.hasClass('pause')) {
            $pdk.controller.clickPlayButton(true);
            $pdk.controller.pause(false);
          }
          return false;
        }

        var activeVideoThumb = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active'),
            dataVideoUrl = activeVideoThumb.attr('data-video-url'),
            dataFid = activeVideoThumb.attr('data-fid'),
            url = defaultUrl + '/' + dataFid,
            anchor = $('#left-nav-links-list li.internal.active').attr('data-menuanchor'),
            anchorSection = $('#left-nav-links-list li.internal.active').find('.scroll-link').text(),
            itemTitle = activeVideoThumb.find('.title').text(),
            anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull;
          return false;
        }

        history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
        Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);
        Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer();
        Drupal.behaviors.microsite_scroll.micrositeGetVideoDesc(url);
        if (refreshAdsOmniture) {
          Drupal.behaviors.microsite_scroll.create728x90Ad();
          setOmnitureData(anchor, itemTitle);
        }
      });

      window.addEventListener('orientationchange', setSectionHeight);


      // getUrlPath
      // url: (string) url to parse
      function getUrlPath(url) {
        var pathArray = url.replace('http://', '').replace('https://', '');
        pathArray = pathArray.split('/');
        if (pathArray[0].indexOf(window.location.hostname) >= 0
            || pathArray[0].indexOf('usanetwork.com') >= 0) pathArray.shift();
        return pathArray;
      }


      // A-SPOT AND PROMO CLICKS - DON'T REMOVE THIS!!!!
      // @TODO: AFTER LAUNCH, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
      $('#show-aspot-microsite .aspot-link, #microsite .node-usanetwork-promo a').click(function (e) {
        var anchorFull = this.href,
            anchorPathParts = getUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig'
            && anchorFull != window.location.protocol + '//' + window.location.hostname + '/dig/videos/the-making-of-dig') {
          e.preventDefault();

          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = anchorPathParts[1];
          anchorSection = toTitleCase(anchor);
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';

          if (anchor == 'videos') {
            var currentThumb = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + anchorPathParts[2] + '"]');
            var withInit = true;
            if (currentThumb.hasClass('active')) {
              withInit = false;
            } else {
              previewItem.removeClass('active');
              currentThumb.addClass('active');
            }

            var activeVideoThumb = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active'),
                dataVideoUrl = activeVideoThumb.attr('data-video-url'),
                dataFid = activeVideoThumb.attr('data-fid'),
                url = defaultUrl + '/' + dataFid,
                itemTitle = activeVideoThumb.find('.title').text(),
                anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

            changeUrl(anchor, anchorFull);
            sectionScroll(anchor, item, itemTitle);
            Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);

            if (withInit) {
              Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer();
              Drupal.behaviors.microsite_scroll.micrositeGetVideoDesc(url);
            }
          }
          else if (anchor == 'galleries') {
            var anchorFull = basePath + '/' + anchor;
            changeUrl(anchor, anchorFull);
            sectionScroll(anchor, item);
          }
        }
        tpController.addEventListener('OnEndcardCountdownEnd', Drupal.usanetwork_video_endcard.OnCountdownEnd);
      });


      $(window).bind('resize', function () {
        setSectionHeight();
      });

      // create video 728x90 ad and
      // set initial active video thumbnail on video load
      // test for video player load ad
      $(document).ready(function () {
        Drupal.behaviors.microsite_scroll.create728x90Ad();
        Drupal.behaviors.microsite_scroll.micrositeCreateMobileMenu();
        Drupal.behaviors.microsite_carousel.initCarousel();
        if ($('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active').length == 0) {
          var videoUrl = $('#video-container .video-player').attr('data-video-url');
          $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + videoUrl + '"]').addClass('active');
        }

        if ($('#videos').hasClass('active')) {
          $('#video-container .video-player iframe').attr('data-autoplay', 'false');
          Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer();
        }
      });

      $('.section').on("scroll", function () {
        if ($(this).attr('id') == 'home') {
          if ($(window).width() >= minWidthForNav && $(window).height() <= heightForHomeLogoAnim && $(this).hasClass('active')) {
            if ($(this).scrollTop() > scrollTopForLogoAnim) {
              logoAnim(true);
            }
            else {
              logoAnim(false);
            }
          }
        }
      });

      $(window).load(function () {
        // Turn off the popstate/hashchange tve-core.js event listeners
        $(window).off('popstate');
        $(window).off('hashchange');

        $('#tv-show-menu .internal a.scroll-link').click(function (e) {
          e.preventDefault();
          if ($('#left-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
            return false
          } else {
            $('#left-nav').addClass('stop');
          }

          var anchor = $(this).parent().attr('data-menuanchor'),
              anchorFull = basePath + '/' + anchor;

          $('#main-menu-toggle').click();
          changeUrl(anchor, anchorFull);
          sectionScroll(anchor);
        });
      });

    }
  };
})(jQuery);
