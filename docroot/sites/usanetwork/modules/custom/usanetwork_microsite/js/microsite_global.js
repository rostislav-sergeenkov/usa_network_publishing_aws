/**
 * Maksim's remarks start
 *
 * 1. Never use this start point in Drupal JS files. It must looks next:
 *
 * (function ($) {
 *  Drupal.behaviors.module_name_and_js_feature_name = {
 *    attach: function (context, settings) {
 *      ... // Put your code here
 *    }
 *  }
 * })(jQuery);
 *
 * 2. Never use global variables in JS
 *
 * 6. Drupal's router does not know what is *.php file like in loadSection(). You need just put a full URL to page or use
 * $.ajax({}) call.
 *
 * Maksim's remarks end
 */

(function ($) {
  var urlPath = window.location.pathname;

  Drupal.behaviors.microsite_scroll = {
    attach: function (context, settings) {



      // set defaults
      // @TODO: If we put the following Dig default variables in a js file in
      // the dig theme directory
      // (ex: usanetwork_microsite_themes/dig/js/microsite_config.js),
      // can we be sure they'd load before this javascript file? Or should we
      // declare these variables as part of the Drupal.settings object?
      var siteName = 'Dig', // @TODO: Pull this from the database
          basePath = '/dig', // @TODO: Pull this from database or generate this from a database field (title?)
          shareBarDescription = 'Dig Gallery Testing Sharebar: This is the description', // @TODO: Update all share bar info
          shareBarImageUrl = 'http://www.usanetwork.com/sites/usanetwork/files/og_image/suits_2048_OG_0.jpg',
          shareBarTitle = 'Dig Gallery Testing Sharebar Title',
          basePageName = siteName + ' | USA Network';
          activeSection = 'home',
          activeItem = '';

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


      // SHARE BAR
      yepnope.injectJs("/sites/usanetwork/modules/contrib/gigya/js/gigya_sharebar.js", function () {
        yepnope.injectCss("/sites/usanetwork/modules/contrib/gigya/css/gigya.css", function () {

          var url = window.location.href;

          sharebar = new Object();
          sharebar.gigyaSharebar = {
            containerID: "gigya-share",
            iconsOnly: true,
            layout: "horizontal",
            shareButtons: "facebook, twitter, tumblr, pinterest, share",
            shortURLs: "never",
            showCounts: "none"
          }
          sharebar.gigyaSharebar.ua = {
            description: shareBarDescription,
            imageBhev: "url",
            imageUrl: shareBarImageUrl,
            linkBack: url,
            title: shareBarTitle
          }
          if (Drupal.gigya) {
            Drupal.gigya.showSharebar(sharebar);
          }

        });
      });


      // ADS
      // usa_refreshMicrositeAdsBySection
      function usa_refreshMicrositeAdsBySection(adContainer) {
        usa_debug('usa_refreshMicrositeAdsBySection(' + adContainer + ')');
        jQuery(adContainer + ' iframe').attr('src', jQuery(adContainer + ' iframe').attr('src'));

/*
        // omniture
        if (typeof s_gi != 'undefined')
        {
          void (s.t());
        }
*/
      }


      // createAds
      // there is a race condition if we try to create both the 728x90
      // and the 300x250 at about the same time, so we create the 728x90
      // first and then create the 300x250
      function createAds(section) {
        usa_debug('createAds(' + section + ')');

        // check to see if there is an ad already there
        if (jQuery('.dart-name-728x90_ifr_reload_' + section + ' iframe').length > 0) {
          usa_refreshMicrositeAdsBySection('.dart-name-728x90_ifr_reload_' + section);
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
          if (iframeQueue.length > 0) {
            for (var i=0, iframeQueueLength = iframeQueue.length; i < iframeQueueLength; i++) {
              // 728x90
              if (iframeQueue[i].tag.indexOf('728x90') != '-1') {
                jQuery('.dart-name-' + iframeQueue[i].tag).html(iframeQueue[i].html);
              }
            }
          }
        }
        // end 728x90

        // now create the 300x250
        create300x250Ad(section);
      }

      // 300x250 -- not for video companion ads!!
      function create300x250Ad(section) {
        usa_debug('create300x250Ad(' + section + ')');
        if (activeSection != 'videos') {

          // check to see if there's already an ad
          if (jQuery('.dart-name-300x250_ifr_reload_' + section + ' iframe').length > 0) {
            usa_refreshMicrositeAdsBySection('.dart-name-300x250_ifr_reload_' + section);
          }
          else if (jQuery('.dart-name-220x60_ifr_reload_' + section + ' iframe').length > 0) {
            usa_refreshMicrositeAdsBySection('.dart-name-220x60_ifr_reload_' + section);
          }
          else {
            iframeQueue = new Array();

            Drupal.DART.tag('{"machinename":"300x250_ifr_reload_' + section + '","name":"300x250 script","pos":"7","sz":"300x250","block":"1","settings":{"overrides":{"site":"","zone":"","slug":""},"options":{"scriptless":0,"method":"adi"},"key_vals":[]},"table":"dart_tags","type":"Overridden","export_type":3,"disabled":false,"export_module":"usanetwork_ads","key_vals":{"pos":[{"val":"7","eval":false}],"sz":[{"val":"300x250","eval":false}],"site":[{"val":"usa","eval":0}],"sect":[{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1}],"sub":[{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"sub2":[{"val":"Drupal.settings.USA.DART.values.sub2 || \u0027\u0027","eval":1}],"genre":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"daypart":[{"val":"Drupal.settings.USA.DART.values.genre || \u0027\u0027","eval":1}],"!c":[{"val":"usa","eval":0},{"val":"Drupal.settings.USA.DART.values.sect || \u0027\u0027","eval":1},{"val":"Drupal.settings.USA.DART.values.sub || \u0027\u0027","eval":1}],"tandomad":[{"val":"eTandomAd","eval":1}],"\u003Cnone\u003E":[{"val":"top.__nbcudigitaladops_dtparams || \u0027\u0027","eval":1}],"tile":[{"val":"tile++","eval":true}],"ord":[{"val":"ord","eval":true}]},"prefix":"nbcu","site":"usa","zone":"default","slug":"","network_id":"","noscript":{"src":"http:\/\/ad.doubleclick.net\/ad\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?","href":"http:\/\/ad.doubleclick.net\/jump\/nbcu.usa\/default;pos=7;sz=300x250;site=usa;!c=usa;tile=25;ord='+ord+'?"}}');

            // write iframe ad units to page
            if (iframeQueue.length > 0) {
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

      // getItemTitle
      // item = the item info from the url pathname
      // @TODO: work out how to get the item title based on the url
      function getItemTitle(item) {
        return '';
      }

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
        pageName = sectionTitle + ' | ' + pageName;
        s.pageName += ' : ' + sectionTitle;
        if (itemTitle != '') {
          pageName = itemTitle + ' | ' + pageName;
          s.pageName += ' : ' + itemTitle;
        }
        switch(anchor) {
          case 'videos':
            s.prop3 = 'Video';
            break;
          case 'galleries':
            s.prop3 = 'Gallery';
            break;
          case 'characters':
            s.prop3 = 'Bio';
            break;
        }
        $('title').text(pageName);
        void(s.t()); // omniture page call
      }


//			setOmnitureData();
      parseUrl();
      createAds(activeSection);


      //=========== Init one page scroll for microsite ===============//

			$('#sections').fullpage({
				scrollOverflow: true,
				scrollingSpeed: 500,
        //autoScrolling: false,
				onLeave: function (index, nextIndex, direction) {

					var menu_items = $('#left-nav-links-list li');

					var sections = $('section'),
						leaveSection = $(sections[index - 1]),
						nextSection = $(sections[nextIndex - 1]);

					var anchor = $(menu_items[nextIndex - 1]).attr('data-menuanchor'),
						anchorFull = basePath + '/' + anchor;

          createAds(anchor);
					setOmnitureData(anchor);

					menu_items.removeClass('active');
					$(menu_items[nextIndex - 1]).addClass('active');

					history.pushState({"state": anchorFull}, anchorFull, anchorFull);

          // Animation for logo in left nav.
          logoAnim();


					if (Math.abs(index - nextIndex) > 1) {
						$.fn.fullpage.setScrollingSpeed(0);

						leaveSection.css('margin-top', '0');
						if (index < nextIndex) {
							nextSection.css('margin-top', '300px').animate({'margin-top': '0'}, 600);
						} else {
							nextSection.css('margin-top', '-300px').animate({'margin-top': '0'}, 600);
						}
					} else {
						$.fn.fullpage.setScrollingSpeed(1000);
					}
				}
			});

      // Animation for logo in left nav.
      function logoAnim(){
        var sectionItem = $('#sections .section').eq(0);

        if(!sectionItem.hasClass('active')){
          $('#left-nav-logo, #left-nav-tunein').animate({'opacity': 1}, 700);
          $('#left-nav-inner').animate({'top': '0'}, 500);
        }else{
          $('#left-nav-logo, #left-nav-tunein').animate({'opacity': 0}, 700);
          $('#left-nav-inner').animate({'top': '-130px'}, 500);
        }
      }logoAnim();

      // initialize left nav hover to display subnav
      $('#left-nav-links-list li').hover(function(){
        $(this).addClass('hover');
      }, function(){
        $(this).removeClass('hover');
      });

      // initialize left nav clicks
			$('#left-nav-links-list li.internal a.scroll-link').click(function(e) {

        e.preventDefault();

				var anchor = $(this).parent().attr('data-menuanchor'),
					anchorFull = basePath + '/' + anchor;

				$.fn.fullpage.moveTo($(this).attr('data-menuitem'));
//				history.pushState({"state": anchorFull}, anchorFull, anchorFull);
			});
      // end one page scroll//

      //============ AJAX request for video section ===============//

      // ajax/get-video-in-player/[node] - for default video
      // ajax/get-video-in-player/[node]/[fid]- for video

      var currentNid = Drupal.settings.microsites_settings.nid,
        defaultUrl = Drupal.settings.basePath + 'ajax/get-video-in-player/' + currentNid,
        previewItem = $('#block-usanetwork-mpx-video-usa-mpx-video-views .item-list ul li');


      //change src for player & stop auto play
      function stopAutoPlay(){
        var inactivePlayer = $('#video-container').find('iframe'),
          inactivePlayerSrc = inactivePlayer.attr('src'),
          updatedPlayerSrc = inactivePlayerSrc.replace('4Dl3P2Df_j5l', 'usa_player_endcard').replace('?mbr=true', '?mbr=true&autoPlay=false');
        // update video player src
        inactivePlayer.attr('src', updatedPlayerSrc);
      }stopAutoPlay();

      //change video on click to preview elements
      previewItem.click(function(e){
        e.preventDefault();

        var url = defaultUrl + '/' + $(this).attr('data-fid'),
          anchor = $('#left-nav-links-list li.internal.active').attr('data-menuanchor'),
          anchorFull = basePath + '/' + anchor + '/' + $(this).attr('data-video-url');

        if(!$(this).hasClass('active')){
          previewItem.removeClass('active');
          $(this).addClass('active');
        }

        history.pushState({"state": anchorFull}, anchorFull, anchorFull);

        getVideo(url);
      });

      //ajax request
      function getVideo(url){
        $.ajax({
          type: 'GET',
          url: url,
          dataType: 'html',
          success: function (data) {
            $('#video-container').html(data);
            stopAutoPlay();
          }
        });
      };

      // end AJAX request //



    }
  }
})(jQuery);

// Global microsite functions
//(function($) {
//var activeSection,
//	  activeItem;
//	// config
//	var sectionList = ['home', 'about', 'videos', 'characters', 'galleries', 'games'],
//		scrollToList = ['about', 'videos', 'characters', 'galleries', 'games'],
//		topOffset = 130, // height in pixels of top header items
//		bottomOffset = 175, // height in pixels of bottom nav items
//		leftNavAnimationSpeed = 1500, // in msecs
//		fadeInOutSpeed = 1000, // in msecs
//		captionReplaceSpeed = 6000, // in msecs
//		wHeight;
//
//	// set defaults
//	var initialPageLoad = 1,
//		numAboutCaptions = 0,
//		numCharCaptions = 0,
//		captionTimer;
//	if (usa_deviceInfo.mobileDevice) {
//		topOffset = 0;
//	}
//
//	Array.prototype.removeItem = function() {
//		var what, a = arguments, L = a.length, ax;
//		while (L && this.length) {
//			what = a[--L];
//			while ((ax = this.indexOf(what)) !== -1) {
//				this.splice(ax, 1);
//			}
//		}
//		return this;
//	};
//
//	// caption animations
//	function getActiveItemNum(elem) {
//		var activeItem = $(elem + '.active');
//		return $(elem).index(activeItem);
//	}
//
//	function captionReplaceAnimation() {
//		if (typeof captionTimer != 'undefined') clearTimeout(captionTimer);
//		$('#visible .caption > ul').each(function(index, list){
//			var parentSection = $(list).parent('section'),
//				parentId = (typeof parentSection != 'undefined' && parentSection.context.offsetParent.hasOwnProperty('id')) ? parentSection.context.offsetParent.id : '';
//			if (parentId == '') parentId = parentSection.context.offsetParent.offsetParent.id;
//			usa_debug('parentSection: ', parentSection);
//			usa_debug('parentId: ' + parentId);
//			var elem = '#' + parentId + ' .caption li',
//				numItems = $(elem).length,
//				activeItemNum = getActiveItemNum(elem),
//				nextItemNum = ((activeItemNum + 1) < numItems) ? (activeItemNum + 1) : 0;
//			usa_debug('captionReplaceAnimation(' + elem + ')\nnumItems: ' + numItems + '\nactiveItemNum: ' + activeItemNum + '\nnextItemNum: ' + nextItemNum);
//			if (numItems > 1) {
//				$(elem + '.active').fadeOut(fadeInOutSpeed, function(){
//					$(this).hide().removeClass('active');
//					$(elem).eq(nextItemNum).addClass('active').show().fadeIn(fadeInOutSpeed);
//				});
//			}
//		});
//		captionTimer = setTimeout(captionReplaceAnimation, captionReplaceSpeed);
//	}
//
//	// show / hide Dig logo animation
//	function showDigLogo() {
//		//usa_debug('showDigLogo()');
//		if ($('#left-nav-inner').hasClass('hide')) {
//			$('#left-nav-logo, #left-nav-tunein').animate({'opacity': 1}, leftNavAnimationSpeed);
//			$('#left-nav-inner').removeClass('hide').animate({'top': '0'}, leftNavAnimationSpeed);
//		}
//	}
//
//	function hideDigLogo() {
//		//usa_debug('hideDigLogo()');
//		if (!$('#left-nav-inner').hasClass('hide')) {
//			$('#left-nav-logo, #left-nav-tunein').animate({'opacity': 0}, leftNavAnimationSpeed);
//			$('#left-nav-inner').animate({'top': '-130px'}, leftNavAnimationSpeed, function(){
//				$(this).addClass('hide');
//			});
//		}
//	}
//
//	// set active nav item
//	function updateNav(elem) {
//		$('#left-nav-links li').removeClass('active');
//		$('#nav-' + elem).addClass('active');
//	}
//
//	// load sections
//	function ajaxCall(url, elem) {
//		//usa_debug('ajaxCall(' + url + ')');
//		$.ajax({
//			dataType: 'html',
//			url: url
//		})
//			.done(function( data ) {
//				//usa_debug( "Sample of data:", data.slice( 0, 100 ) );
//				//usa_debug('data: ' + data);
//				$('#' + elem).html(data).addClass('loaded');
//				scrollToList.removeItem(elem);
//			});
//	}
//
//	function loadSection(elem) {
//		//usa_debug('loadSection(' + elem + ')');
//		ajaxCall('http://' + window.location.hostname + '/dig/' + elem + '.php', elem);
//	}
//
//
//	// updateWindowContents
//	function updateWindowContents(elem, direction) {
//		usa_debug('update');
//		// after scrolling to selected section,
//		// reset activeSection,
//		// remove #visible and rename the selected section #visible,
//		// then re-add the appropriate hidden section div
//		// and re-initialize the scroll button
//		activeSection = elem;
//		$('#visible').remove();
//		$('#hidden-' + direction).removeClass('hidden-section').attr('id', 'visible');
//		if (direction == 'next') {
//			$('#activeContent').append('<div id="hidden-next" class="hidden-section"></div>');
//		}
//		else {
//			$('#activeContent').prepend('<div id="hidden-prev" class="hidden-section"></div>');
//		}
//		$('#microsite .hidden-section').html('').hide();
//
//		// re-initialize scroll button clicks
//		$('.scroll').on('click', function(){
//			var elem = $(this).attr('id').replace('scroll-to-', '');
//			if (sectionList.indexOf(elem) >= 0) {
//				scrollTo(elem);
//			}
//		});
//
//		// if about or characters sections
//		// re-animate quotations
//		if (elem == 'about' || elem == 'characters') {
//			captionReplaceAnimation();
//		}
//		else {
//			if (typeof captionTimer != 'undefined') clearTimeout(captionTimer);
//		}
//		initCarousels();
//	}
//
//	// actively scroll to an item on click
//	function scrollTo(elem) {
//		usa_debug('scrollTo(' + elem + ')');
//		// set height of characters line items
//		if (elem == 'characters') $('#microsite #characters > ul > li').css('height', (wHeight - bottomOffset) + 'px');
//
//		var currentLocation = sectionList.indexOf(activeSection),
//			nextLocation = sectionList.indexOf(elem);
//		if (currentLocation != nextLocation) {
//			var direction = (currentLocation < nextLocation) ? 'next' : 'prev',
//				newHtml = $('#section-' + elem).html();
//			usa_debug('currentLocation: ' + currentLocation + '\nnextLocation: ' + nextLocation + '\ndirection: ' + direction);
//			$('#hidden-' + direction).html(newHtml).show();
//
//			if (elem == 'home') {
//				hideDigLogo();
//			}
//			else {
//				showDigLogo();
//			}
//			if (elem == 'videos') {
//				setTimeout(function(){
//					$('#visible .video-player iframe').attr('id', 'pdk-player-active');
////          $('#section-videos .video-player iframe').remove();
//					$pdk.bind('pdk-player');
//					setTimeout(function(){
//						$pdk.controller.pause(false);
//					}, 2000);
//				}, 5000);
//			}
//			jQuery('html body').animate({
//				scrollTop: $('#activeContent a[name="/' + elem + '"]').offset().top - topOffset
//			}, 2000, 'easeInOutCubic', function(){
////					window.location.hash = '/' + elem;
//			});
//			updateWindowContents(elem, direction);
//
//			$('#left-nav-links > ul > li').removeClass('active');
//			$('#nav-' + elem).addClass('active');
//		}
//	}
//
//	/*
//	 // watches for scroll to bottom of screen and then loads and adds newContent
//	 function yHandler() {
//	 usa_debug('yHandler');
//	 var wrap = document.getElementById('main')
//	 contentHeight = wrap.offsetHeight, // get page content height
//	 yOffset = window.pageYOffset, // get vertical scroll position
//	 y = yOffset + window.innerHeight; // bottom of page position
//	 // if user scrolls to bottom of page
//	 if (y >= contentHeight) {
//	 var newContent = ''; // add ajax call here
//	 wrap.innerHTML += '<div id="new-content" style="background-color: blue; height: 400px; width: 100px"></div>';
//	 }
//	 }
//	 */
//
//// 	function parseHash() {
//// 		var hash = window.location.hash;
//// 		if (hash != '') {
//// 			var parse = hash.split('/');
//// 			activeSection = parse[1];
//// 			activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
//// 		}
//// 		else {
//// 			activeSection = 'home';
//// 			activeItem = '';
//// 		}
//// 	}
//
//	function parseUrl() {
//		var urlPath = window.location.pathname,
//			sectionLocation = urlPath.replace('/dig', '');
//		usa_debug('parseUrl()\nsectionLocation: ' + sectionLocation);
//		if (sectionLocation != '') {
//			var parse = sectionLocation.split('/');
//			activeSection = parse[1];
//			activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
//		}
//		else {
//			activeSection = 'home';
//			activeItem = '';
//		}
//	}
//
//	function showInitialContent() {
//		var visible = '';
////       if (activeSection != '' && activeItem != '') {
////         visible = $('#section-' + activeSection + '-' + activeItem).html();
////       }
////       else
//		if (activeSection != '') {
//			visible = $('#section-' + activeSection).html();
//		}
//		if (visible != '') {
//			$('#microsite #visible').html(visible);
//			$('#left-nav-links > ul > li').remove('active');
//			$('#nav-' + activeSection).addClass('active');
//		}
//		if (activeSection == 'home') {
//			hideDigLogo();
//		}
//		else {
//			showDigLogo();
//		}
//
//		// animate captions
//		captionTimer = setTimeout(captionReplaceAnimation, captionReplaceSpeed);
//	}
//
//	function initCarousels(){
//		usa_debug('init');
//		//todo
//		$slideshow_selector = $('#microsite #visible .microsite-carousel ul');
//		$slideshow_selector
//			.addClass('slides')
//			.wrap('<div id="show-main-slider" class="flexslider"></div>')
//			.parent()
//			.flexslider({
//				slideshow: true,
//				slideshowSpeed: 7000,
//				pauseOnHover: true,
//				animation: 'slide',
//				controlNav: true,
//				directionNav: (!Modernizr.touch),
//				touch: false
//			});
//	}
//
//
//	function toTitleCase(str)
//	{
//		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//	}
//
//	function updateWindowState(elem) {
//		var title = toTitleCase(elem),
//			newState = (elem == 'home') ? '/dig' : '/dig/' + elem;
//		usa_debug('updateWindowState(' + elem + ')\ntitle: ' + title);
//		window.history.pushState({state:elem}, title, newState);
//		scrollTo(elem);
//	}
//
//	function updateVideoAndWindowState(videoUrl) {
//		var title = toTitleCase(videoUrl),
//			newState = '/dig/videos/' + videoUrl;
//		usa_debug('updateVideoAndWindowState(' + videoUrl + ')\ntitle: ' + title);
//		window.history.pushState({state:videoUrl}, title, newState);
//	}
//
//	function initVideoSection() {
//		var inactivePlayer = $('#section-videos #pdk-player'),
//			inactivePlayerSrc = inactivePlayer.attr('src'),
//			updatedPlayerSrc = inactivePlayerSrc.replace('4Dl3P2Df_j5l', 'usa_player_endcard').replace('?mbr=true', '?mbr=true&autoPlay=false')
//		activeVideoUrl = $('#section-videos .video-player').attr('data-video-url');
//		usa_debug('initVideoPlayer()\ninactivePlayerSrc: ' + inactivePlayerSrc + '\nupdatedPlayerSrc: ' + updatedPlayerSrc);
//		// update video player src
//		$('#section-videos #pdk-player').attr('src', updatedPlayerSrc);
//
//		// hide the active video in the list
//		$('#section-videos li[data-video-url=' + activeVideoUrl + ']').addClass('active');
//	}
//
//
//	// on page load
//	$(document).ready(function(){
//		wHeight = $(window).height();
//		$('section').css('height', (wHeight - bottomOffset) + 'px');
//
//		parseUrl();
//		usa_debug('activeSection: ' + activeSection + '\nactiveItem: ' + activeItem);
//		showInitialContent();
//		initCarousels(); // needs to happen after showInitialContent
//		initVideoSection(); // needs to happen before showInitialContent
//
//		// initialize logo click
//		$('#left-nav-logo').on('click', function() {
//			updateWindowState('home');
//		});
//
//		// initialize scroll clicks
//		$('.scroll').on('click', function(){
//			var elem = $(this).attr('id').replace('scroll-to-', '');
//			if (sectionList.indexOf(elem) >= 0) {
//				scrollTo(elem);
//			}
//		});
//
//		// initialize left nav hover with subnav {
//		$('#left-nav-links ul li').hover(function(){
//     $(this).addClass('hover');
//		}, function(){
//     $(this).removeClass('hover');
//		});
//
//		// initialize nav clicks
//		$('#left-nav-links li').on('click', function(){
//			var elem = $(this).attr('id').replace('nav-', '');
//			if (sectionList.indexOf(elem) >= 0) {
//				updateWindowState(elem);
//			}
//		});
//
//		// initialize sub-nav clicks
//		$('#left-nav-links li li').on('click', function(){
//			var elem = $(this).attr('id').replace('nav-', ''),
//				currentLocationGames = (elem.indexOf('games') > -1) ? 1 : 0;
//			if (currentLocationGames) {
//
//			}
//			else {
//
//			}
//		});
//
//	});
//})(jQuery);
