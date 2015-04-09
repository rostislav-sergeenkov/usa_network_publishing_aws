/**
 * Global js functions for microsite navigation
 */
(function ($) {
  Drupal.behaviors.microsite_navigation = {

    // getUrlPath
    getUrlPath: function(url) {
      var pathArray = url.replace('http://', '').replace('https://', '');
      pathArray = pathArray.split('/');
      if (pathArray[0].indexOf(window.location.hostname) >= 0
          || pathArray[0].indexOf('usanetwork.com') >= 0) pathArray.shift();
      return pathArray;
    },

    // change url address
    changeUrl: function(anchor, anchorFull) {
      var basePath = Drupal.settings.microsites_settings.base_path;

      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
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

    // sectionScroll
    sectionScroll: function(anchor, item, itemTitle) {
      item = item || '';
      itemTitle = itemTitle || '';
      var basePath = Drupal.settings.microsites_settings.base_path,
          anchorItem = $('#nav-' + anchor),
          anchorNum = anchorItem.find('a').attr('data-menuitem'),
          anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor,
          nextSection = '#' + anchor,
          nextSectionId = $(nextSection).attr('id');

      // if this is IE9, reload the correct page
      if ($('html.ie9').length > 0) {
        window.location.href = anchorFull.replace('/home', '');
        return false;
      }

      // now scroll to the next section
      var siteNavHeight = (anchor != 'home' && anchor != 'videos') ? $('#site-nav').height() : 0,
          nextSectionElem = document.getElementById(anchor),
          nextSectionTop = nextSectionElem.offsetTop - siteNavHeight;
      $('body').animate({'scrollTop': nextSectionTop}, 1000, 'jswing', function () {
        $('.section').removeClass('active');
        $(nextSection).addClass('active');

/*
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
*/

        // show ads and send Omniture
//        Drupal.behaviors.microsite_scroll.create728x90Ad(anchor);
//        Drupal.behaviors.microsite_scroll.micrositeSetOmnitureData(anchor, itemTitle);

        // set active menu item
        $('#site-nav-links li').removeClass('active disabled');
        $('#nav-' + anchor).addClass('active');
      });
    },

    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      // initialize clicks in microsite menu
      $('#microsite li.internal a').on('click', function(e){
        e.preventDefault();

        if ($('#site-nav-links li').hasClass('disabled') || $(this).parent().hasClass('active')) {
          return false;
        }
        else {
          $('#site-nav-links li').addClass('disabled');
        }

        var anchor = $(this).parent().attr('data-menuanchor'),
            anchorFull = basePath + '/' + anchor;

        Drupal.behaviors.microsite_navigation.changeUrl(anchor, anchorFull);
        Drupal.behaviors.microsite_navigation.sectionScroll(anchor);
      });

      // initialize graceland cu logo click
      $('#gracelandcu-logo').on('click', function(){
        var anchor = 'home',
            anchorFull = basePath + '/' + anchor;

        Drupal.behaviors.microsite_navigation.changeUrl(anchor, anchorFull);
        Drupal.behaviors.microsite_navigation.sectionScroll(anchor);
      });
    }
  }
})(jQuery);
