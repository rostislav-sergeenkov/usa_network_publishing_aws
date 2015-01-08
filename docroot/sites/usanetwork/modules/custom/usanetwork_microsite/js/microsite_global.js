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

// Global microsite functions
var activeSection,
	activeItem;
(function($) {
	// config
	var sectionList = ['home', 'about', 'videos', 'characters', 'galleries', 'games'],
		scrollToList = ['about', 'videos', 'characters', 'galleries', 'games'],
		topOffset = 130, // height in pixels of top header items
		bottomOffset = 175, // height in pixels of bottom nav items
		leftNavAnimationSpeed = 1500, // in msecs
		fadeInOutSpeed = 1000, // in msecs
		captionReplaceSpeed = 6000, // in msecs
		wHeight;

	// set defaults
	var initialPageLoad = 1,
		numAboutCaptions = 0,
		numCharCaptions = 0,
		captionTimer;
	if (usa_deviceInfo.mobileDevice) {
		topOffset = 0;
	}

	Array.prototype.removeItem = function() {
		var what, a = arguments, L = a.length, ax;
		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};

	// caption animations
	function getActiveItemNum(elem) {
		var activeItem = $(elem + '.active');
		return $(elem).index(activeItem);
	}

	function captionReplaceAnimation() {
		if (typeof captionTimer != 'undefined') clearTimeout(captionTimer);
		$('#visible .caption > ul').each(function(index, list){
			var parentSection = $(list).parent('section'),
				parentId = (typeof parentSection != 'undefined' && parentSection.context.offsetParent.hasOwnProperty('id')) ? parentSection.context.offsetParent.id : '';
			if (parentId == '') parentId = parentSection.context.offsetParent.offsetParent.id;
			usa_debug('parentSection: ', parentSection);
			usa_debug('parentId: ' + parentId);
			var elem = '#' + parentId + ' .caption li',
				numItems = $(elem).length,
				activeItemNum = getActiveItemNum(elem),
				nextItemNum = ((activeItemNum + 1) < numItems) ? (activeItemNum + 1) : 0;
			usa_debug('captionReplaceAnimation(' + elem + ')\nnumItems: ' + numItems + '\nactiveItemNum: ' + activeItemNum + '\nnextItemNum: ' + nextItemNum);
			if (numItems > 1) {
				$(elem + '.active').fadeOut(fadeInOutSpeed, function(){
					$(this).hide().removeClass('active');
					$(elem).eq(nextItemNum).addClass('active').show().fadeIn(fadeInOutSpeed);
				});
			}
		});
		captionTimer = setTimeout(captionReplaceAnimation, captionReplaceSpeed);
	}

	// show / hide Dig logo animation
	function showDigLogo() {
		//usa_debug('showDigLogo()');
		if ($('#left-nav-inner').hasClass('hide')) {
			$('#left-nav-logo, #left-nav-tunein').animate({'opacity': 1}, leftNavAnimationSpeed);
			$('#left-nav-inner').removeClass('hide').animate({'top': '0'}, leftNavAnimationSpeed);
		}
	}

	function hideDigLogo() {
		//usa_debug('hideDigLogo()');
		if (!$('#left-nav-inner').hasClass('hide')) {
			$('#left-nav-logo, #left-nav-tunein').animate({'opacity': 0}, leftNavAnimationSpeed);
			$('#left-nav-inner').animate({'top': '-140px'}, leftNavAnimationSpeed, function(){
				$(this).addClass('hide');
			});
		}
	}

	// set active nav item
	function updateNav(elem) {
		$('#left-nav-links li').removeClass('active');
		$('#nav-' + elem).addClass('active');
	}

	// load sections
	function ajaxCall(url, elem) {
		//usa_debug('ajaxCall(' + url + ')');
		$.ajax({
			dataType: 'html',
			url: url
		})
			.done(function( data ) {
				//usa_debug( "Sample of data:", data.slice( 0, 100 ) );
				//usa_debug('data: ' + data);
				$('#' + elem).html(data).addClass('loaded');
				scrollToList.removeItem(elem);
			});
	}

	function loadSection(elem) {
		//usa_debug('loadSection(' + elem + ')');
		ajaxCall('http://' + window.location.hostname + '/dig/' + elem + '.php', elem);
	}


	// updateWindowContents
	function updateWindowContents(elem, direction) {
		usa_debug('update');
		// after scrolling to selected section,
		// reset activeSection,
		// remove #visible and rename the selected section #visible,
		// then re-add the appropriate hidden section div
		// and re-initialize the scroll button
		activeSection = elem;
		$('#visible').remove();
		$('#hidden-' + direction).removeClass('hidden-section').attr('id', 'visible');
		if (direction == 'next') {
			$('#activeContent').append('<div id="hidden-next" class="hidden-section"></div>');
		}
		else {
			$('#activeContent').prepend('<div id="hidden-prev" class="hidden-section"></div>');
		}
		$('#microsite .hidden-section').html('').hide();

		// re-initialize scroll button clicks
		$('.scroll').on('click', function(){
			var elem = $(this).attr('id').replace('scroll-to-', '');
			if (sectionList.indexOf(elem) >= 0) {
				scrollTo(elem);
			}
		});

		// if about or characters sections
		// re-animate quotations
		if (elem == 'about' || elem == 'characters') {
			captionReplaceAnimation();
		}
		else {
			if (typeof captionTimer != 'undefined') clearTimeout(captionTimer);
		}
		initCarousels();
	}

	// actively scroll to an item on click
	function scrollTo(elem) {
		usa_debug('scrollTo(' + elem + ')');
		// set height of characters line items
		if (elem == 'characters') $('#microsite #characters > ul > li').css('height', (wHeight - bottomOffset) + 'px');

		var currentLocation = sectionList.indexOf(activeSection),
			nextLocation = sectionList.indexOf(elem);
		if (currentLocation != nextLocation) {
			var direction = (currentLocation < nextLocation) ? 'next' : 'prev',
				newHtml = $('#section-' + elem).html();
			usa_debug('currentLocation: ' + currentLocation + '\nnextLocation: ' + nextLocation + '\ndirection: ' + direction);
			$('#hidden-' + direction).html(newHtml).show();

			if (elem == 'home') {
				hideDigLogo();
			}
			else {
				showDigLogo();
			}
			if (elem == 'videos') {
				setTimeout(function(){
					$('#visible .video-player iframe').attr('id', 'pdk-player-active');
//          $('#section-videos .video-player iframe').remove();
					$pdk.bind('pdk-player');
					setTimeout(function(){
						$pdk.controller.pause(false);
					}, 2000);
				}, 5000);
			}
			jQuery('html body').animate({
				scrollTop: $('#activeContent a[name="/' + elem + '"]').offset().top - topOffset
			}, 2000, 'easeInOutCubic', function(){
//					window.location.hash = '/' + elem;
			});
			updateWindowContents(elem, direction);

			$('#left-nav-links > ul > li').removeClass('active');
			$('#nav-' + elem).addClass('active');
		}
	}

	/*
	 // watches for scroll to bottom of screen and then loads and adds newContent
	 function yHandler() {
	 usa_debug('yHandler');
	 var wrap = document.getElementById('main')
	 contentHeight = wrap.offsetHeight, // get page content height
	 yOffset = window.pageYOffset, // get vertical scroll position
	 y = yOffset + window.innerHeight; // bottom of page position
	 // if user scrolls to bottom of page
	 if (y >= contentHeight) {
	 var newContent = ''; // add ajax call here
	 wrap.innerHTML += '<div id="new-content" style="background-color: blue; height: 400px; width: 100px"></div>';
	 }
	 }
	 */

// 	function parseHash() {
// 		var hash = window.location.hash;
// 		if (hash != '') {
// 			var parse = hash.split('/');
// 			activeSection = parse[1];
// 			activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
// 		}
// 		else {
// 			activeSection = 'home';
// 			activeItem = '';
// 		}
// 	}

	function parseUrl() {
		var urlPath = window.location.pathname,
			sectionLocation = urlPath.replace('/dig', '');
		usa_debug('parseUrl()\nsectionLocation: ' + sectionLocation);
		if (sectionLocation != '') {
			var parse = sectionLocation.split('/');
			activeSection = parse[1];
			activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
		}
		else {
			activeSection = 'home';
			activeItem = '';
		}
	}

	function showInitialContent() {
		usa_debug("g1");
		var visible = '';
//       if (activeSection != '' && activeItem != '') {
//         visible = $('#section-' + activeSection + '-' + activeItem).html();
//       }
//       else
		if (activeSection != '') {
			visible = $('#section-' + activeSection).html();
		}
		if (visible != '') {
			$('#microsite #visible').html(visible);
			$('#left-nav-links > ul > li').remove('active');
			$('#nav-' + activeSection).addClass('active');
		}
		if (activeSection == 'home') {
			hideDigLogo();
		}
		else {
			showDigLogo();
		}

		// animate captions
		captionTimer = setTimeout(captionReplaceAnimation, captionReplaceSpeed);
	}

	function initCarousels(){
		usa_debug('init1');
		//todo
		$slideshow_selector = $('#microsite #visible .microsite-carousel ul');
		$slideshow_selector
			.addClass('slides')
			.wrap('<div id="show-main-slider" class="flexslider"></div>')
			.parent()
			.flexslider({
				slideshow: true,
				slideshowSpeed: 7000,
				pauseOnHover: true,
				animation: 'slide',
				controlNav: true,
				directionNav: (!Modernizr.touch),
				touch: false
			});
	}


	function toTitleCase(str)
	{
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	function updateWindowState(elem) {
		var title = toTitleCase(elem),
			newState = (elem == 'home') ? '/dig' : '/dig/' + elem;
		usa_debug('updateWindowState(' + elem + ')\ntitle: ' + title);
		window.history.pushState({state:elem}, title, newState);
		scrollTo(elem);
	}

	function updateVideoAndWindowState(videoUrl) {
		var title = toTitleCase(videoUrl),
			newState = '/dig/videos/' + videoUrl;
		usa_debug('updateVideoAndWindowState(' + videoUrl + ')\ntitle: ' + title);
		window.history.pushState({state:videoUrl}, title, newState);
	}

	function initVideoSection() {
		var inactivePlayer = $('#section-videos #pdk-player'),
			inactivePlayerSrc = inactivePlayer.attr('src'),
			updatedPlayerSrc = inactivePlayerSrc.replace('4Dl3P2Df_j5l', 'usa_player_endcard').replace('?mbr=true', '?mbr=true&autoPlay=false')
		activeVideoUrl = $('#section-videos .video-player').attr('data-video-url');
		usa_debug('initVideoPlayer()\ninactivePlayerSrc: ' + inactivePlayerSrc + '\nupdatedPlayerSrc: ' + updatedPlayerSrc);
		// update video player src
		$('#section-videos #pdk-player').attr('src', updatedPlayerSrc);

		// hide the active video in the list
		$('#section-videos li[data-video-url=' + activeVideoUrl + ']').addClass('active');
	}

	// on page load
	$(document).ready(function(){
		wHeight = $(window).height();
		$('section').css('height', (wHeight - bottomOffset) + 'px');

		parseUrl();
		usa_debug('activeSection: ' + activeSection + '\nactiveItem: ' + activeItem);
		initVideoSection(); // needs to happen before showInitialContent
		showInitialContent();
		initCarousels(); // needs to happen after showInitialContent

		// initialize logo click
		$('#left-nav-logo').on('click', function() {
			updateWindowState('home');
		});

		// initialize scroll clicks
		$('.scroll').on('click', function(){
			var elem = $(this).attr('id').replace('scroll-to-', '');
			if (sectionList.indexOf(elem) >= 0) {
				scrollTo(elem);
			}
		});

		// initialize nav clicks
		$('#left-nav-links li').on('click', function(){
			var elem = $(this).attr('id').replace('nav-', '');
			if (sectionList.indexOf(elem) >= 0) {
				updateWindowState(elem);
			}
		});

		// initialize sub-nav clicks
		$('#left-nav-links li li').on('click', function(){
			var elem = $(this).attr('id').replace('nav-', ''),
				currentLocationGames = (elem.indexOf('games') > -1) ? 1 : 0;
			if (currentLocationGames) {

			}
			else {

			}
		});

	});
})(jQuery);
