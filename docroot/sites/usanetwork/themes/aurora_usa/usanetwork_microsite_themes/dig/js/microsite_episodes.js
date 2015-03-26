(function ($) {
  Drupal.behaviors.microsite_episodes = {
    // @TODO: What's the best Drupal way to handle the following default variables?
    siteName: 'Dig',
    basePath: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig',
    basePageName: 'Dig | USA Network',
    defaultEpisBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_bg_home.jpg',
    defaultMobileEpisBg: '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/dig/images/dig_mobile_bg.jpg',

    micrositeSetEpisNavWidthHeight: function setEpisNavWidth() {
      var episodesNav = $('#episodes .episode-nav'),
          numEpisodes = episodesNav.find('li').length,
          nextPrevWidth = $('#episodes #nav-prev').outerWidth(true),
          navElemWidth = episodesNav.find('li').outerWidth(true),
          episNavListWidth = (numEpisodes * navElemWidth),
          episNavWidth = episNavListWidth + (nextPrevWidth * 2),
          maxEpisNavWidth = $('#episodes #episode-info').width(),
          nextPrevHeight = episodesNav.find('#nav-prev').outerHeight(true),
          navElemHeight = episodesNav.find('li').outerHeight(true),
          navHeight = (navElemHeight > nextPrevHeight) ? nextPrevHeight : navElemHeight;
      if (episNavWidth > maxEpisNavWidth) {
        episNavListWidth = Math.ceil(numEpisodes/2) * navElemWidth;
        episNavWidth = episNavListWidth + (nextPrevWidth * 2);
        navHeight = (navHeight * 2) + 6;
      }
      if (episodesNav.length > 0) {
        episodesNav.find('ul').width(episNavListWidth).height(navHeight);
        episodesNav.width(episNavWidth).height(navHeight).animate({'opacity': 1}, 600);
      }
    },

    micrositeSetNavNextPrevState: function setNavNextPreState() {
      var activeEpisode = Drupal.behaviors.microsite_episodes.micrositeGetActiveEpisode(),
          episodesNav = $('#episodes .episode-nav'),
          activeEpisodeNum = episodesNav.find('li.active').index(),
          numEpisodes = episodesNav.find('li').length;
      episodesNav.find('#nav-prev, #nav-next').removeClass('disabled');
      if (activeEpisodeNum == 0) {
        episodesNav.find('#nav-prev').addClass('disabled');
      }
      else if (activeEpisodeNum == (numEpisodes - 1)) {
        episodesNav.find('#nav-next').addClass('disabled');
      }
    },
    /*test*/
    micrositeSetHeights: function setHeights() {
      var sectionHeight = $(window).height() - $('#mega-nav').height(),
          contentHeight = $('#microsite #episodes #episodes-content').height(),
          episodeTextHeight = Math.ceil(sectionHeight * 0.25),
          wwidth = $(window).width();
      if (episodeTextHeight < 200) episodeTextHeight = 200;
      else if (wwidth < 542) episodeTextHeight = 800;

      // if not smartphone
      if (!usa_deviceInfo.smartphone) {
        $('#microsite #episodes .episode-description .text').css('max-height', episodeTextHeight + 'px');
        $('#microsite #episodes .episode-description').css('min-height', (episodeTextHeight + 50) + 'px');
        $('#microsite #episodes .ad300x250').css('margin-top', episodeTextHeight + 'px');
      }
      if ($(window).height() > 1200) $('#microsite #episodes #episode-inner-container').height((sectionHeight - 5));
      $('#microsite #episodes #episode-background li, #microsite #episodes #right-pane-bg').height(sectionHeight);
    },

    micrositeGetActiveEpisode: function getActiveEpisode() {
      // return the active episode
      return $('#episodes #episode-info li.active').attr('id');
    },

    micrositeSetEpisBackground: function setEpisBackground(episId) {
      if ($(window).width() < 875) {
        $('#microsite #episodes #episode-background li').css('background-image', 'url("' + Drupal.behaviors.microsite_episodes.defaultMobileEpisBg + '")');
      }
      else {
        var nextBgId = 'bg-' + episId,
            nextItemBg = $('#' + nextBgId).attr('data-bg-url');
        if (nextItemBg == '' || nextItemBg == window.location.protocol + '//' + window.location.hostname + '/') nextItemBg = Drupal.behaviors.microsite_episodes.defaultEpisBg;
        if ($('#' + nextBgId).length > 0) $('#' + nextBgId).attr('data-bg-url', nextItemBg).css('background-image', 'url("' + nextItemBg + '")');
      }
    },
    // toTitleCase
    micrositeToTitleCase: function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    },

    // setOmnitureData
    micrositeSetOmnitureData: function setOmnitureData(itemTitle){
      var itemTitle = itemTitle || '',
          siteName = Drupal.behaviors.microsite_episodes.siteName,
          pageName = Drupal.behaviors.microsite_episodes.basePageName,
          sectionTitle = 'Episode Guide',
          pageName = sectionTitle + ' | ' + pageName;
      s.pageName = siteName + ' : ' + sectionTitle;
      s.prop3 = sectionTitle;
      s.prop5 = siteName + ' : ' + sectionTitle;
      if (itemTitle != '') {
        pageName = itemTitle + ' | ' + pageName;
        s.pageName += ' : ' + itemTitle;
        s.prop5 += ' : ' + itemTitle;
      }
      $('title').text(pageName);

      if (typeof s_gi != 'undefined') {
        void(s.t()); // omniture page call
      }
    },

    micrositeSetPath : function setPath(nextItemId) {
      var anchorFull = Drupal.settings.microsites_settings.base_path + '/episodes/' + nextItemId;
      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
        window.location.href = anchorFull;
        return false;
      }
      history.pushState({"state": anchorFull}, anchorFull, anchorFull);
    },

    micrositeSwitchEpisodes: function switchEpisodes(clickedId, animationSpeed, overrideActive) {
      overrideActive = overrideActive || false;
      animationSpeed = animationSpeed || 600;
      var nextItem = $('#' + clickedId);
      if (!overrideActive && (nextItem.hasClass('active') || $('#episodes .episode-nav li').hasClass('disabled'))) {
        // do nothing
      }
      else {
        $('#episodes-content').css('overflow', 'hidden');
        nextItem.addClass('disabled');

        var navItems = $('#episodes .episode-nav'),
            currentItem = (navItems.find('li.active')) ? navItems.find('li.active') : navItems.find('li').eq(0),
            currentItemId = currentItem.attr('id'),
            currentItemNum = currentItem.index(),
            currentEpisodeId = (currentItemId != null) ? currentItemId.replace('nav-', '') : null,
            episodeInfoHeight = currentItem.height(),
            nextItemId = nextItem.attr('id'),
            nextItemNum = nextItem.index(),
            nextEpisodeId = (nextItemId != null) ? nextItemId.replace('nav-', '') : null,
            nextEpisodeClass = (nextItemId != null) ? nextItemId.replace('#', '') : null,
            nextEpisodeTitle = $('#' + nextEpisodeId + ' > h3').text(),
            nextEpisodeInfoHeight = nextItem.height(),
            direction = (nextItemNum > currentItemNum) ? 'next' : 'prev',
            sign = (direction == 'next') ? '-' : '',
            oppositeSign = (direction == 'next') ? '' : '-',
            activeSection = $('#microsite #sections > .active').attr('id');
        if (nextEpisodeTitle == '') nextEpisodeTitle = $('#' + nextEpisodeId + ' > h1').text();

        if (nextEpisodeId && currentEpisodeId) {
          if (nextEpisodeId == currentEpisodeId) {
            $('#microsite #episodes .' + nextEpisodeId).addClass('active');

            Drupal.behaviors.microsite_episodes.micrositeSetPath(nextEpisodeId);
            Drupal.behaviors.microsite_episodes.micrositeSetNavNextPrevState();
            if (activeSection != 'episodes') {
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll('episodes', nextItemId);
            }
            else {
              Drupal.behaviors.microsite_episodes.micrositeSetOmnitureData(nextEpisodeTitle);
              Drupal.behaviors.microsite_scroll.create728x90Ad('episodes');
            }

            // remove disabled
            navItems.find('li.disabled').removeClass('disabled');
            $('#episodes-content').css('overflow-y', 'auto');
          }
          else {
            if ($('#bg-' + nextEpisodeId).css('background-image') == 'none') Drupal.behaviors.microsite_episodes.micrositeSetEpisBackground(nextEpisodeId);

            // prepare next or previous background and episode-info
            $('#microsite #episodes .' + nextEpisodeId).addClass(direction);

            if ($(window).width() < 875) {
              $('#episode-info li.' + direction).css('top', '0');
              // animate active episode-info
              $('#episode-info li.active').animate({'top': '0', 'opacity': 0}, animationSpeed, 'jswing', function(){
                // animate next episode-info
                $('#episode-info li.' + direction).animate({'top': '0', 'opacity': 1}, animationSpeed, 'jswing', function(){
                  // update classes
                  $('#microsite #episodes .' + direction).addClass('active').removeClass(direction + ' disabled');
                  $('#microsite #episodes .' + currentEpisodeId).removeClass('active disabled');

                  // update active nav item
                  navItems.find('li.active').removeClass('active');
                  navItems.find('#nav-' + nextItemId.replace('nav-', '')).addClass('active');

                  Drupal.behaviors.microsite_episodes.micrositeSetPath(nextEpisodeId);
                  Drupal.behaviors.microsite_episodes.micrositeSetNavNextPrevState();
                  if (activeSection != 'episodes') {
                    Drupal.behaviors.microsite_scroll.micrositeSectionScroll('episodes', nextItemId);
                  }
                  else {
                    Drupal.behaviors.microsite_episodes.micrositeSetOmnitureData(nextEpisodeTitle);
                    Drupal.behaviors.microsite_scroll.create728x90Ad('episodes');
                  }

                  // remove disabled
                  navItems.find('li').removeClass('disabled');
                  $('#episodes-content').css('overflow-y', 'auto');
                });
              });
            }
            else {
              $('#episode-info li.' + direction).css('top', '-40px');
              // animate active episode-info
              $('#episode-info li.active').animate({'top': '-40px', 'opacity': 0}, animationSpeed, 'jswing', function(){
                // animate backgrounds
                $('#episode-background li.active').animate({'left': sign + '100%'}, (animationSpeed + 200), 'jswing');
                $('#episode-background li.' + direction).css('left', oppositeSign + '100%').animate({'left': '0'}, (animationSpeed + 200), 'jswing', function(){
                  // animate next episode-info
                  $('#episode-info li.' + direction).animate({'top': '0', 'opacity': 1}, animationSpeed, 'jswing', function(){

                    // update classes
                    $('#microsite #episodes .' + direction).addClass('active').removeClass(direction + ' disabled');
                    $('#microsite #episodes .' + currentEpisodeId).removeClass('active disabled');

                    // update active nav item
                    navItems.find('li').removeClass('active');
                    navItems.find('#nav-' + nextItemId.replace('nav-', '')).addClass('active');

                    Drupal.behaviors.microsite_episodes.micrositeSetPath(nextEpisodeId);
                    Drupal.behaviors.microsite_episodes.micrositeSetNavNextPrevState();
                    if (activeSection != 'episodes') {
                      Drupal.behaviors.microsite_scroll.micrositeSectionScroll('episodes', nextItemId);
                    }
                    else {
                      Drupal.behaviors.microsite_episodes.micrositeSetOmnitureData(nextEpisodeTitle);
                      Drupal.behaviors.microsite_scroll.create728x90Ad('episodes');
                    }

                    // remove disabled
                    navItems.find('li').removeClass('disabled');
                    $('#episodes-content').css('overflow-y', 'auto');
                  });
                });
              });
            }
          }
        }
        else {
          // current or next episode id was not set
          // @TODO: Should we do something here?
        }
      }
    },

    attach: function (context, settings) {
      if ($('#episodes').length > 0) {
        Drupal.behaviors.microsite_episodes.micrositeSetEpisNavWidthHeight();
        var episodes = $('#microsite #episode-info'),
            activeEpisode = episodes.find('li.active').attr('id');
        Drupal.behaviors.microsite_episodes.micrositeSetEpisBackground(activeEpisode);
        Drupal.behaviors.microsite_episodes.micrositeSetNavNextPrevState();

        // init active episode nav item
        $('#nav-' + activeEpisode).addClass('active');

        // init episode-nav clicks
        $('#microsite #episodes .episode-nav li').on('click', function(){
          var nextItemId = $(this).attr('id');
          Drupal.behaviors.microsite_episodes.micrositeSwitchEpisodes(nextItemId);
        });

        if ($(window).width() < 875) {
          $('#microsite #episode-background').addClass('mobile');
        }

        // init next / prev episode nav clicks
        $('#microsite #episodes .episode-nav #nav-next, #microsite #episodes .episode-nav #nav-prev').on('click', function(){
            if ($(this).hasClass('disabled')) {
              // do nothing
            }
            else {
            var clickedId = $(this).attr('id'),
                navItems = $('#episodes .episode-nav'),
                numNavItems = navItems.find('li').length,
                currentItem = navItems.find('li.active'),
                currentItemNum = currentItem.index(),
                nextItemNum = (clickedId == 'nav-next') ? currentItemNum + 1 : currentItemNum - 1;
            if (nextItemNum >= numNavItems) nextItemNum = 0;
            if (nextItemNum < 0) nextItemNum = numNavItems - 1;
            var nextItemId = $('#episodes .episode-nav li').eq(nextItemNum).attr('id');

            Drupal.behaviors.microsite_episodes.micrositeSwitchEpisodes(nextItemId);
          }
        });

        setTimeout(Drupal.behaviors.microsite_episodes.micrositeSetHeights, 500);

        window.addEventListener('orientationchange', function() {
          Drupal.behaviors.microsite_episodes.micrositeSetHeights();
          Drupal.behaviors.microsite_episodes.micrositeSetEpisNavWidthHeight();
        });
        $(window).bind('resize', function () {
          setTimeout(function() {
            Drupal.behaviors.microsite_episodes.micrositeSetHeights();
            Drupal.behaviors.microsite_episodes.micrositeSetEpisNavWidthHeight();
            if ($(window).width() < 875) {
              if (!$('#microsite #episode-background').hasClass('mobile')){
                $('#microsite #episodes #episode-background li').css('background-image', 'url("' + Drupal.behaviors.microsite_episodes.defaultMobileEpisBg + '")');
                $('#microsite #episode-background').addClass('mobile');
              }
            }
            else {
              if ($('#microsite #episode-background').hasClass('mobile')){
                $('#episodes #episode-background li').each(function() {
                  var bgUrl = $(this).attr('data-bg-url');
                  $(this).css('background-image', 'url("' + bgUrl + '")');
                });
                $('#microsite #episode-background').removeClass('mobile');
              }
            }
          }, 500);
        });

        // episode image pre-loading on desktop only
        if ($(window).width() >= 875) {
          $(window).bind("load", function() {
            var preload = new Array();
            $('#episodes #episode-background li').each(function() {
              //s = $(this).attr('data-bg-url').replace(/\.(.+)$/i, "_on.$1");
              var bgUrl = $(this).attr('data-bg-url');
              preload.push(bgUrl);
            });
            var img = document.createElement('img');
            $(img).bind('load', function() {
              if (preload[0]) {
                  this.src = preload.shift();
              }
            }).trigger('load');
          });
        }
      }


    }
  }
})(jQuery);
