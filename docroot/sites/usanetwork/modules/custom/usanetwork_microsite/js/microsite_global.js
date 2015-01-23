/**
 * Global js functions for microsites
 */
(function ($) {
  var urlPath = window.location.pathname;
  var testData;

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
    },// end create mobile menu //

    // Usa_refreshMicrositeAdsBySection.
    usa_refreshMicrositeAdsBySection: function (adContainer) {
      usa_debug('usa_refreshMicrositeAdsBySection(' + adContainer + ')');
      jQuery(adContainer + ' iframe').attr('src', jQuery(adContainer + ' iframe').attr('src'));
    },

    // 300x250 -- not for video companion ads!!
    create300x250Ad: function(section) {
      usa_debug('create300x250Ad(' + section + ')');
      if (activeSection != 'videos') {

        // check to see if there's already an ad
        if (jQuery('.dart-name-300x250_ifr_reload_' + section + ' iframe').length) {
          Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection('.dart-name-300x250_ifr_reload_' + section);
        }
        else if (jQuery('.dart-name-220x60_ifr_reload_' + section + ' iframe').length) {
          Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection('.dart-name-220x60_ifr_reload_' + section);
        }
        else {
          iframeQueue = [];
          Drupal.DART.tag('{"machinename":"300x250_ifr_reload_' + section + '","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?"}}');
          // write iframe ad units to page
          if (iframeQueue.length) {
            for (var i=0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
              // 300x250 second
              if (iframeQueue[i].tag.indexOf('300x250') != '-1') {
                jQuery('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
              }
              // 220x60 last
              if (iframeQueue[i].tag.indexOf('220x60') != '-1') {
                jQuery('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
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
    create728x90: function(section) {
      if (!section) {
        section = $('#sections .section.active').attr('id').replace('section-', '') || 'home';
      }

      usa_debug('createAds(' + section + ')');

      // check to see if there is an ad already there
      if (jQuery('.dart-name-728x90_ifr_reload_' + section + ' iframe').length) {
        Drupal.behaviors.microsite_scroll.usa_refreshMicrositeAdsBySection('.dart-name-728x90_ifr_reload_' + section);
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
              jQuery('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
            }
          }
        }
      }
      if (Drupal.behaviors.microsite_carousel.carousel_inited) {
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

      // parseUrl
      function parseUrl() {
        urlPath = window.location.pathname;
        var sectionLocation = urlPath.replace(basePath, '');
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
      }

      // getUrlPath
      // url: (string) url to parse
      function getUrlPath(url) {
        var pathArray = url.replace('http://', '').replace('https://', '');
        pathArray = pathArray.split('/');
        if (pathArray[0].indexOf(window.location.hostname) >= 0
          || pathArray[0].indexOf('usanetwork.com') >= 0) pathArray.shift();
        return pathArray;
      }

      // getItemTitle
      // item = the item info from the url pathname
      // @TODO: work out how to get the item title based on the url
      function getItemTitle(item) {
        return '';
      }

      // OMNITURE
      // setOmnitureData
      function setOmnitureData(anchor){
        var anchor = anchor || null,
        itemTitle = '';
        if (!anchor) {
          var sectionData = parseUrl();
          anchor = sectionData['section'];
          if (sectionData['item'] != '') itemTitle = getItemTitle(sectionData['item']);
        }
        var sectionTitle = toTitleCase(anchor),
        pageName = basePageName;
        s.pageName = siteName;
        s.prop3 = sectionTitle;
        s.prop4 = siteName + ' : ' + sectionTitle;
        s.prop5 = s.prop4;
        pageName = sectionTitle + ' | ' + pageName;
        s.pageName += ' : ' + sectionTitle;
        if (itemTitle != '') {
          pageName = itemTitle + ' | ' + pageName;
          s.pageName += ' : ' + itemTitle;
        }
        switch(anchor) {
          case 'videos':
            s.prop3 = 'Video';
            s.prop5 = siteName + ' : Video : ' + $('#microsite #videos-content .video-title').text();
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
      }
      parseUrl();

      //=========== Init one page scroll for microsite ===============//
      function sectionScroll(anchor) {
        var anchorItem = $('#nav-' + anchor),
            anchorNum = anchorItem.find('a').attr('data-menuitem'),
            anchorFull = basePath + '/' + anchor,
            nextSection = '#' + anchor,
            sectionHeight = window.innerHeight,
            currentSectionNum = $('#left-nav-links-list li.active a').attr('data-menuitem'),
            direction = (anchorNum > currentSectionNum) ? '' : '-';
            otherDirection = (anchorNum > currentSectionNum) ? '-' : '';
//usa_debug('sectionScroll(' + elemId + ')\nanchorItem: ', anchorItem);
//usa_debug('anchor: ' + anchor + '\nanchorNum: ' + anchorNum + '\nanchorFull: ' + anchorFull + '\nnextSection: ' + nextSection + '\nsectionHeight: ' + sectionHeight + '\ncurrentSectionNum: ' + currentSectionNum + '\ndirection: ' + direction + '\notherDirection: ' + otherDirection);
        $(nextSection).addClass('transition').css({'top': direction + sectionHeight + 'px'}).show().animate({'top': '0'}, 1000, 'easeOutSine', function(){
          $('.section-info').removeClass('active');
          $(nextSection).addClass('active').removeClass('transition');

          scrollToTop();

          changeUrl(anchor, anchorFull);
          Drupal.behaviors.microsite_scroll.create728x90(anchor);
          setOmnitureData(anchor);

          $('#left-nav-links-list li').removeClass('active');
          $('#tv-show-menu .internal').removeClass('active');
          $('#nav-' + anchor).addClass('active');
          $('#tv-show-menu .internal[data-menuanchor=' + anchor +']').addClass('active');
        });
        $('.section-info.active').animate({'top' : otherDirection + Math.ceil(sectionHeight/2) + 'px'}, 1000, 'easeInSine', function(){
          $('.section-info').css({'top': '0'});
          $('#left-nav').removeClass('stop');
        });
      }

      // pauseVideo
      function setVideo(){

        console.log('pause');
        //$pdk.controller.clickPlayButton(false);

        $pdk.controller.pause(true);

        $pdk.controller.nextClip(true);
      };

      //scroll to top
      function scrollToTop(){
        var container = $('sections'),
          activeSection = container.find('.section.active');
        activeSection.mCustomScrollbar('scrollTo',['top',null]);
      }

      // init change url address
      function changeUrl(anchor, anchorFull){
        if (anchor != 'home') {
          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
        else {
          history.pushState({"state": basePath}, basePath, basePath);
        }
      }
      // initialize left nav clicks
      $('.internal a.scroll-link').click(function(e) {
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
        sectionScroll(anchor);
      });
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

      //
      // Switch section on history prev/forward button
      //
      window.onpopstate = function(event) {
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
        sectionScroll(section);
      };

      $('#sections .section .scroll-to-next').click(function() {
        if($('#sections .section').eq(0).hasClass('active')){
          logoAnim(true);
        }
        var thisSection = $('#left-nav li.active a').attr('data-menuitem'),
            nextSection = thisSection++,
            nextSectionNavElem = $('#left-nav li').eq(nextSection).attr('data-menuanchor');
        sectionScroll(nextSectionNavElem);
      });
      // end one page scroll//

      //change page title current section item
      function changeTitle(item, section){
        $('title').text(item + ' | '+ section + ' | ' + basePageName);
      }

      // set scroll and section height
      function setSectionHeight() {
        $('.section').each(function () {
//          var Height = $(this).parent().innerHeight() - $('#mega-nav').innerHeight();
//          $(this).height(Height);
//          $('#microsite section').css({'min-height': $('.mcs-scroll').height() + 'px'});

          var msHeight = $('#microsite').innerHeight() - $('#mega-nav').innerHeight();
          $(this).height(msHeight);
          /*$('#microsite .section').css('height', msHeight + 'px');
          $('#microsite section').css('min-height', '100%');*/

          $(this).mCustomScrollbar({
            theme:"3d",
            scrollInertia: 0
          });
        });
      }
      setTimeout(setSectionHeight, 2000); // @TODO: do we need a timeout here to allow some content like carousels to render?


      //============ AJAX request for video section ===============//
      // ajax/get-video-in-player/[node] - for default video
      // ajax/get-video-in-player/[node]/[fid]- for video
      var currentNid = Drupal.settings.microsites_settings.nid,
        defaultUrl = Drupal.settings.basePath + 'ajax/get-video-in-player/' + currentNid,
        previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li');


      // change src for player & set autoplay
      function setAutoPlay(autoPlay){
        autoPlay = autoPlay || 'false';
        var inactivePlayer = $('#video-container').find('#pdk-player'),
          inactivePlayerSrc = inactivePlayer.attr('src'),
          updatedPlayerSrc = inactivePlayerSrc.replace('4Dl3P2Df_j5l', 'microsites_usa_player_endcard').replace('?mbr=true', '?mbr=true&autoPlay=' + autoPlay);
          updatedPlayerSrc += '&nid=' + currentNid;
        // update video player src
        inactivePlayer.attr('src', updatedPlayerSrc);
      }setAutoPlay();

      //change video on click to preview elements
      previewItem.click(function(e){
        e.preventDefault();

        scrollToTop();

        var url = defaultUrl + '/' + $(this).attr('data-fid'),
          anchor = $('#left-nav-links-list li.internal.active').attr('data-menuanchor'),
          anchorSection = $('#left-nav-links-list li.internal.active').find('.scroll-link').text(),
          itemTitle = $(this).find('.title').text(),
          anchorFull = basePath + '/' + anchor + '/' + $(this).attr('data-video-url');

        if(!$(this).hasClass('active')){
          previewItem.removeClass('active');
          $(this).addClass('active');
        }

        changeTitle(itemTitle, anchorSection);

        getVideo(url);

        history.pushState({"state": anchorFull}, anchorFull, anchorFull);
      });

      //ajax request
      function getVideo(url, autoPlay){
        autoPlay = autoPlay || 'false';
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'html',
          success: function (data) {
            $('#video-container').html(data);
            setAutoPlay(autoPlay);
          }
        });
      };
      // end AJAX request //

      $(window).bind('resize', function () {
        setSectionHeight();
      });

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
          sectionScroll(anchor);
        });
      });

      window.addEventListener('orientationchange', setSectionHeight);

      // a-spot clicks
      // @TODO: AFTER LAUNCH, AND IF NEEDED, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
//      $('#show-aspot-microsite .aspot-link').click(function(e) {
//        var anchorFull = this.href,
//            anchorPathParts = getUrlPath(anchorFull);
//
//        // if this is an internal microsite url
//        // prevent the default action
//        // and show the correct video
//        if (anchorPathParts[0] == 'dig') {
//          e.preventDefault();
//
//          anchor = 'videos';
//          anchorSection = 'Videos';
//          itemTitle = anchorPathParts[2];
////          itemTitle = anchorFull.replace(window.location.protocol + '//' + window.location.hostname + '/dig/videos/', '');
//
//          previewItem.removeClass('active');
//          $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li[data-video-url="' + itemTitle + '"]').addClass('active');
//          var url = defaultUrl + '/' + $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li.active').attr('data-fid');
//
//          // change active video content
//          changeTitle(itemTitle, anchorSection);
//
//          getVideo(url, 'true');
//
//          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
//
//          // trigger scroll to videos section
//				  $('#left-nav-links-list li#nav-videos a.scroll-link').click();
//				}
//      });

      // PROMO CLICKS
      // @TODO: AFTER LAUNCH, RE-WRITE THE FOLLOWING
      // SO THAT IT IS NOT SPECIFIC TO "DIG"
      //$('#microsite .node-usanetwork-promo a').click(function(e) {
      //  var anchorFull = this.href,
      //      anchorPathParts = getUrlPath(anchorFull);
			//
      //  // if this is an internal microsite url
      //  // prevent the default action
      //  // and show the correct microsite item without a page reload
      //  if (anchorPathParts[0] == 'dig') {
      //    e.preventDefault();
			//
      //    anchor = anchorPathParts[1];
      //    anchorSection = toTitleCase(anchor);
      //    itemTitle = anchorPathParts[2];
			//
      //    // trigger scroll to correct section
				//  $('#left-nav-links-list li#nav-' + anchor + ' a.scroll-link').click();
			//
      //    history.pushState({"state": anchorFull}, anchorFull, anchorFull);
				//}
      //});

      // initialize left nav clicks
    }
  };
  $(document).ready(function(){
    Drupal.behaviors.microsite_scroll.create728x90();
    Drupal.behaviors.microsite_scroll.micrositeCreateMobileMenu();
  });
  $(window).load(function(){

  });
})(jQuery);
