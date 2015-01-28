/**
* Global js functions for microsites
*/
(function ($) {

  var urlPath = window.location.pathname;
  var activeSection = 'home';

  Drupal.behaviors.microsite_scroll = {

    //create mobile menu for microsite
    micrositeCreateMobileMenu : function createMobileMenu(){
      var leftNav = $('#left-nav-links-list'),
        leftNavItem = leftNav.find('li.internal'),
        mobileMenu = $('#jPanelMenu-menu #tv-show-menu');

      i = 0; j = 0;

      leftNavItem.each(function(){
        if(i == 0){
          var attrHome = leftNavItem.eq(i).attr('data-menuanchor'),
            attrHomeLink = leftNavItem.eq(i).find('a.scroll-link').attr('data-menuitem'),
            mobileMenuTitle = mobileMenu.find('h2.menu-title'),
            mobileMenuTitleLink = mobileMenu.find('h2.menu-title a.slide-panel-link');

          mobileMenuTitle.attr('data-menuanchor', attrHome);
          mobileMenuTitle.addClass('internal');
          mobileMenuTitleLink.addClass('scroll-link');
          mobileMenuTitleLink.attr('href', '#');
          mobileMenuTitleLink.attr('data-menuitem', attrHomeLink);

          if(leftNavItem.eq(i).hasClass('active')){
            mobileMenuTitle.addClass('active');
          }
        }
        if(i != 0){
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

          if(leftNavItem.eq(i).hasClass('active')){
            mobileMenuListItem.addClass('active');
          }

          j = j + 1;
        }
        i = i + 1;
      })
    },

    // parseUrl
    micrositeParseUrl : function parseUrl() {
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

      return { 'section' : activeSection, 'item' : activeItem };
    },


    //ajax request
    micrositeGetVideoDesc : function getVideoDesc(url){
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
    micrositeSetVideoPlayer : function setVideoPlayer(dataAccountId, dataPlayerId){

      //$pdk.controller.pause(true);

      var Player = $('#video-container #pdk-player'),
        videoUrl = 'http://link.theplatform.com/s/' + dataAccountId + '/' + dataPlayerId;

      $pdk.controller.setReleaseURL(videoUrl, true);

      $pdk.controller.addEventListener('OnMediaStart', function(){
        if(!$pdk.controller.clickPlayButton(true)){
          $pdk.controller.clickPlayButton(true);
          $pdk.controller.pause(false);
        }
      });

    },

    // set initial active video thumbnail
    micrositeSetInitialActiveVideoThumbnail : function setInitialActiveVideoThumbnail(){
      var urlPath = Drupal.behaviors.microsite_scroll.micrositeParseUrl(),
          section = urlPath['section'],
          item = urlPath['item'];
      if (section == 'videos' && item != '') {
        $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + item + '"]').addClass('active');
        return;
      }
      $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li').eq(0).addClass('active');
    },

    //scroll to top
    micrositeScrollToTop : function scrollToTop(){
      var container = $('sections'),
        activeSection = container.find('.section.active');
      activeSection.mCustomScrollbar('scrollTo',['top',null]);
    },

    //Usa_refreshMicrositeAdsBySection.
    usa_refreshMicrositeAdsBySection: function (adContainer) {
      usa_debug('usa_refreshMicrositeAdsBySection(' + adContainer + ')');
      $(adContainer + ' iframe').attr('src', $(adContainer + ' iframe').attr('src'));
    },

    //change page title current section item
    micrositeChangeTitle : function changeTitle(item, section, basePageName){
      $('title').text(item + ' | '+ section + ' | ' + basePageName);
    },

    // 300x250 -- not for video companion ads!!
    create300x250Ad: function(section) {

      usa_debug('create300x250Ad(' + section + ')');
      if (section != 'videos') {
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
          Drupal.DART.tag('{"machinename":"300x250_ifr_reload_' + section + '","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?"}}');
          // write iframe ad units to page
          if (iframeQueue.length) {
            for (var i=0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
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
    create728x90Ad: function(section) {
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

        Drupal.DART.tag('{"machinename":"728x90_ifr_reload_' + section + '","name":"728x90 script","pos":"7","sz":"728x90","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"728x90","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord='+ord+'?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=728x90;site=usa;!c=usa;tile=25;ord='+ord+'?"}}');

        // write iframe ad units to page
        if (iframeQueue.length) {
          for (var i=0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
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
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }

      // getItemTitle
      // item = the item info from the url pathname
      // @TODO: work out how to get the item title based on the url
      function getItemTitle(item) {
        return '';
      }

      // OMNITURE
      // setOmnitureData
      function setOmnitureData(anchor, itemTitle){
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
        switch(anchor) {
          case 'videos':
            s.prop3 = 'Video';
            if (itemTitle == '') itemTitle = $('#microsite #videos-content .video-title').text();
            s.prop5 = siteName + ' : Video : ' + itemTitle;
            s.pageName = s.prop5;
            break;
          case 'galleries':
            s.prop3 = 'Gallery';
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
      function sectionScroll(anchor) {
        var anchorItem = $('#nav-' + anchor),
          anchorNum = anchorItem.find('a').attr('data-menuitem'),
          anchorFull = basePath + '/' + anchor,
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
        if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
          alert('before_scroll');
        }

        $(nextSection).addClass('transition').css({'top': direction + sectionHeight + 'px'}).show().animate({'top': '0'}, 1000, 'jswing', function(){
          if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
            alert('start_scroll');
          }
          $('.section-info').removeClass('active');
          $(nextSection).addClass('active').removeClass('transition');

          Drupal.behaviors.microsite_scroll.micrositeScrollToTop();

          changeUrl(anchor, anchorFull);

          Drupal.behaviors.microsite_scroll.create728x90Ad(anchor);
          setOmnitureData(anchor);

          $('#left-nav-links-list li').removeClass('active');
          $('#tv-show-menu .internal').removeClass('active');
          $('#nav-' + anchor).addClass('active');
          $('#tv-show-menu .internal[data-menuanchor=' + anchor +']').addClass('active');
        });
        $('.section-info.active').animate({'top' : otherDirection + Math.ceil(sectionHeight/2) + 'px'}, 1000, 'jswing', function(){
          $('.section-info').css({'top': '0'});
          $('#left-nav').removeClass('stop');
        });
      };

      // init change url address
      function changeUrl(anchor, anchorFull){
        if (anchor != 'home') {
          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
        else {
          history.pushState({"state": basePath}, basePath, basePath);
        }
      };

      // initialize left nav clicks
      $('.internal a.scroll-link').click(function(e) {
        e.preventDefault();

        if ($('#left-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
          return false;
        } else {
          $('#left-nav').addClass('stop');
        }

        var anchor = $(this).parent().attr('data-menuanchor');
            anchorFull = basePath + '/' + anchor;

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull.replace('/home', '');
          return false;
        }

        if ($(this).attr('data-menuitem') == 1) {
          logoAnim(false);
        }
        else {
          logoAnim(true);
        }
        stopVideo();
        if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
          alert('left nav click');
        }
        sectionScroll(anchor);
      });

      function stopVideo(){
        $pdk.controller.pause(true);
      }

      // Animation for logo in left nav.
      function logoAnim(show_logo){
        if (show_logo) {
          $('#left-nav-inner').animate({'top': '0'}, 400);
          $('#left-nav-logo, #left-nav-tunein').animate({'opacity': 1}, 200);
        }
        else{
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
      $('#left-nav-links-list li').hover(function(){
        $(this).addClass('hover');
      }, function(){
        $(this).removeClass('hover');
      });


      // Switch section on history prev/forward button
      window.onpopstate = function(event) {
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
        if (section_num == 1) {
          logoAnim(false);
        }
        else {
          logoAnim(true);
        }
        if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
          alert('history prev/forward button click');
        }
        sectionScroll(section);
      };

      // initialize next button click
      $('#sections .section .scroll-to-next').click(function() {

        stopVideo();

        if($('#sections .section').eq(0).hasClass('active')){
          logoAnim(true);
        }
        var thisSection = $('#left-nav li.active a').attr('data-menuitem'),
          nextSection = thisSection++,
          nextSectionNavElem = $('#left-nav li').eq(nextSection).attr('data-menuanchor');
        if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
          alert('scroll to next button click');
        }
        sectionScroll(nextSectionNavElem);
      });
      // end one page scroll//

      // set scroll and section height
      function setSectionHeight() {
        $('.section').each(function () {

          // #microsite has already had the height of the bottom nav bar
          // #mega-nav removed, so we don't need to remove it again
          var msHeight = $('#microsite').innerHeight();
          $(this).height(msHeight);

          // force the section height to be equal to the #microsite height
          // we want the section to fill the height of the page
          $('#microsite section').css('min-height', msHeight + 'px');

          $(this).mCustomScrollbar({
            theme:"3d",
            scrollInertia: 0
          });
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
      previewItem.click(function(e){
        e.preventDefault();

        var refreshAdsOmniture = 0;
        if (!$(this).hasClass('active')) {
          previewItem.removeClass('active');
          $(this).addClass('active');
          refreshAdsOmniture = 1;
        }

        var activeVideoItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active'),
          dataAccountId = activeVideoItem.attr('data-account-id'),
          dataPlayerId = activeVideoItem.attr('data-player-id'),
          dataVideoUrl = activeVideoItem.attr('data-video-url'),
          dataFid = activeVideoItem.attr('data-fid'),
          url = defaultUrl + '/' + dataFid,
          anchor = $('#left-nav-links-list li.internal.active').attr('data-menuanchor'),
          anchorSection = $('#left-nav-links-list li.internal.active').find('.scroll-link').text(),
          itemTitle = activeVideoItem.find('.title').text(),
          anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

        // if this is IE9, reload the correct page
        if ($('html.ie9').length > 0) {
          window.location.href = anchorFull;
          return false;
        }

        history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
        Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);
        Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(dataAccountId, dataPlayerId);
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

      //@TODO: GET THIS WORKING AGAIN WHEN VIDEOS ARE WORKING AGAIN!!
      // a-spot clicks
      // @TODO: AFTER LAUNCH, AND IF NEEDED, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
      $('#show-aspot-microsite .aspot-link').click(function(e) {
        var anchorFull = this.href,
            anchorPathParts = getUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct video
        if (anchorPathParts[0] == 'dig') {
          e.preventDefault();

          previewItem.removeClass('active');
          $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + anchorPathParts[2] + '"]').addClass('active');
          $('#left-nav-links-list li#nav-videos a.scroll-link').click();

          var activeVideoItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active'),
            dataAccountId = activeVideoItem.attr('data-account-id'),
            dataPlayerId = activeVideoItem.attr('data-player-id'),
            dataVideoUrl = activeVideoItem.attr('data-video-url'),
            dataFid = activeVideoItem.attr('data-fid'),
            url = defaultUrl + '/' + dataFid,
            anchor = 'videos',
            anchorSection = 'Videos',
            itemTitle = activeVideoItem.find('.title').text(),
            anchorFull = basePath + '/' + anchor + '/' + dataVideoUrl;

          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
          Drupal.behaviors.microsite_scroll.micrositeScrollToTop();
          Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);
          Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(dataAccountId, dataPlayerId);
          Drupal.behaviors.microsite_scroll.micrositeGetVideoDesc(url);

          Drupal.behaviors.microsite_scroll.create728x90Ad();
          setOmnitureData(anchor, itemTitle);
/*
          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = 'videos';
          anchorSection = 'Videos';
          itemTitle = 'clip-' + anchorPathParts[2];

          // itemTitle = anchorFull.replace(window.location.protocol + '//' + window.location.hostname + '/dig/videos/', '');

          previewItem.removeClass('active');
          $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + itemTitle + '"]').addClass('active');
          var url = defaultUrl + '/' + $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active').attr('data-fid'),
            dataAccountId = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active').attr('data-account-id'),
            dataPlayerId = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active').attr('data-player-id');

          Drupal.behaviors.microsite_scroll.micrositeChangeTitle(itemTitle, anchorSection, basePageName);
          Drupal.behaviors.microsite_scroll.micrositeSetVideoPlayer(dataAccountId, dataPlayerId);
          Drupal.behaviors.microsite_scroll.micrositeGetVideoDesc(url);

          // trigger scroll to videos section
          $('#left-nav-links-list li#nav-videos a.scroll-link').click();

          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
*/
        }
      });


      // PROMO CLICKS - DON'T REMOVE THIS!!!!
      // @TODO: AFTER LAUNCH, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
      $('#microsite .node-usanetwork-promo a').click(function(e) {
        var anchorFull = this.href,
            anchorPathParts = getUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig') {
          e.preventDefault();

          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = anchorPathParts[1];
          anchorSection = toTitleCase(anchor);
          itemTitle = anchorPathParts[2];

          // trigger scroll to correct section
          $('#left-nav-links-list li#nav-' + anchor + ' a.scroll-link').click();

          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
      });


      $(window).bind('resize', function () {
        setSectionHeight();
      });

      // create video 728x90 ad and
      // set initial active video thumbnail on video load
      // test for video palyer load ad
      $(document).ready(function(){
        Drupal.behaviors.microsite_scroll.create728x90Ad();
        Drupal.behaviors.microsite_scroll.micrositeSetInitialActiveVideoThumbnail();
        Drupal.behaviors.microsite_scroll.micrositeCreateMobileMenu();
        Drupal.behaviors.microsite_carousel.initCarousel();
      });


      // create video 728x90 ad and
      // set initial active video thumbnail on video load
      //$('#video-container #pdk-player').load(function(){
      //  Drupal.behaviors.microsite_scroll.create728x90Ad();
      //  Drupal.behaviors.microsite_scroll.micrositeSetInitialActiveVideoThumbnail();
      //});

      $(window).load(function(){

        $('#tv-show-menu .internal a.scroll-link').click(function(e) {
          e.preventDefault();
          if ($('#left-nav').hasClass('stop') || $(this).parent().hasClass('active')) {
            return false
          } else {
            $('#left-nav').addClass('stop');
          }

          var anchor = $(this).parent().attr('data-menuanchor');

          if ($(this).attr('data-menuitem') == 1) {
            logoAnim(false);
          }
          else {
            logoAnim(true);
          }
          $('#main-menu-toggle').click();
          if (usa_deviceInfo.smartphone && usa_deviceInfo.mobileDevice) {
            alert('mobile left nav click');
          }
          sectionScroll(anchor);
        });
      });
    }
  };
})(jQuery);
