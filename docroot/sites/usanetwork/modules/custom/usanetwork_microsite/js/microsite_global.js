// Global microsite functions
var activeSection,
    activeItem;
(function($) {
  // config
  var sectionList = ['home', 'about', 'characters', 'galleries', 'games'],
      scrollToList = ['about', 'characters', 'galleries', 'games'],
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

  Array.prototype.remove = function() {
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
      url: url,
    })
    .done(function( data ) {
      //usa_debug( "Sample of data:", data.slice( 0, 100 ) );
      //usa_debug('data: ' + data);
      $('#' + elem).html(data).addClass('loaded');
      scrollToList.remove(elem);
    });
  }

  function loadSection(elem) {
    //usa_debug('loadSection(' + elem + ')');
    ajaxCall('http://' + window.location.hostname + '/dig/' + elem + '.php', elem);
  }

/*
  // monitor scroll position
  var scrolledIntoViewCount = 0;
  function isScrolledIntoView() {
    if (initialPageLoad || scrolledIntoViewCount >= 20) {
      var docViewTop = $(window).scrollTop(),
          docViewBottom = docViewTop + $(window).height(),
          yOffset = window.pageYOffset, // vertical scroll position
          currentSection = ($('#left-nav-links .active').length > 0) ? $('#left-nav-links .active').attr('id').replace('nav-', '') : 'home';

      // load additional sections, if needed
      for (var elem, maxLength = scrollToList.length, i=0; i < maxLength; i++) {
        elem = scrollToList[i];
        //usa_debug('isScrolledIntoView -- elem: scroll-to-' + elem);
        if ($('section #' + elem).hasClass('clearfix') && $('section #' + elem).length < 10) {
          var elemTop = $('#scroll-to-' + elem).offset().top;
          if ((elemTop <= docViewBottom) && (elemTop >= docViewTop)) {
            //loadSection(elem);
          }
        }
      }

      // determine which section is being viewed and set the left nav
      // also if needed, set-up other animations
      for (var elem, maxLength = sectionList.length, i=0; i < maxLength; i++) {
        elem = sectionList[i];
        //usa_debug('checking for section in view -- elem: ' + elem);
        if ($('section #' + elem).hasClass('clearfix')) {
          var elemBottom = $('#' + elem).offset().top + $('#' + elem).height();
  //usa_debug('elemBottom: ' + elemBottom + '\ndocViewBottom: ' + docViewBottom + '\ndocViewTop: ' + docViewTop + '\nyOffset: ' + yOffset + '\ncurrentSection: ' + currentSection + '\nelem: ' + elem);
          if (elemBottom <= docViewBottom && elemBottom >= docViewTop && currentSection != elem) {
            //usa_debug('isScrolledIntoView: ' + elem);
            updateNav(elem);

            // animate captions
            captionTimer = setTimeout(captionReplaceAnimation, captionReplaceSpeed);
  *//*
            switch(elem) {
              case 'about':
                numAboutCaptions = $('.caption li').length;
                if (numAboutCaptions > 1) {
                  // animate captions
                  setTimeout(function(){
                    captionReplaceAnimation('.caption li');
                  }, captionReplaceSpeed);
                }
                break;
              case 'characters':
                numCharCaptions = $('.caption li').length;
                if (numCharCaptions > 1) {
                  // animate captions
                  setTimeout(function(){
                    captionReplaceAnimation();
                  }, captionReplaceSpeed);
                }
                break;
            }
  *//*
          }
        }
      }

      // show / hide Dig logo above left nav
//usa_debug('yOffset: ' + yOffset);
*//*
      if (yOffset > 500) {
        showDigLogo();
      }
      else {
        hideDigLogo();
      }
*//*
      $('.dig #characters li').css('height', (wHeight - bottomOffset) + 'px');

      initialPageLoad = 0;
      scrolledIntoViewCount = 0;
    }
    else {
      scrolledIntoViewCount++;
    }
  }
*/

  // updateWindowContents
  function updateWindowContents(elem, direction) {
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
  }

  // actively scroll to an item on click
  function scrollTo(elem) {
    usa_debug('scrollTo(' + elem + ')');
    // set height of characters line items
    if (elem == 'characters') $('.dig #characters > ul > li').css('height', (wHeight - bottomOffset) + 'px');

    var currentLocation = sectionList.indexOf(activeSection),
        nextLocation = sectionList.indexOf(elem);
    if (currentLocation != nextLocation) {
      var direction = (currentLocation < nextLocation) ? 'next' : 'prev',
          newHtml = $('#section-' + elem).html();
  usa_debug('currentLocation: ' + currentLocation + '\nnextLocation: ' + nextLocation + '\ndirection: ' + direction);
      $('#hidden-' + direction).html(newHtml).show();

      // if Firefox
      if (window.navigator.userAgent.indexOf('Firefox') != -1) {
        window.location.href = '#/' + elem;
        if (elem == 'home') {
          hideDigLogo();
        }
        else {
          showDigLogo();
        }
        updateWindowContents(elem, direction);
      }
      // else not Firefox
      else {
        if (elem == 'home') {
          hideDigLogo();
        }
        else {
          showDigLogo();
        }
        jQuery('html body').animate({
          scrollTop: $('#activeContent a[name="/' + elem + '"]').offset().top // - topOffset
        }, 2000, 'easeInOutCubic', function(){
  //        window.location.href = '/dig/#/' + elem;
          window.location.hash = '/' + elem;
          updateWindowContents(elem, direction);
        });
      }

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

  function parseHash() {
    var hash = window.location.hash;
    if (hash != '') {
      var parse = hash.split('/');
      activeSection = parse[1];
      activeItem = (parse.hasOwnProperty(2)) ? parse[2] : '';
    }
    else {
      activeSection = 'home';
      activeItem = '';
    }
  }

  function showInitialContent() {
    var visible = '';
    if (activeSection != '' && activeItem != '') {
      visible = $('#section-' + activeSection + '-' + activeItem).html();
    }
    else if (activeSection != '') {
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

  // on page load
//  window.onscroll = isScrolledIntoView;

  $(document).ready(function(){
    wHeight = $(window).height();
    $('section').css('height', (wHeight - bottomOffset) + 'px');

    parseHash();
usa_debug('activeSection: ' + activeSection + '\nactiveItem: ' + activeItem);
    showInitialContent();

//    setTimeout(isScrolledIntoView, 3000);

    // initialize logo click
    $('#left-nav-logo').on('click', function() {
      scrollTo('home');
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
        scrollTo(elem);
      }
    });

  });
})(jQuery);
