/**
 * Global js functions for Graceland Catchup
 */
(function ($) {
  Drupal.behaviors.ms_site = {
    getHeightHomeSection: function() {
      return $('#microsite #home').height();
    },

    setPersonRole: function() {
      var person = {"rami-malek": {"role": "Elliot Alderson"},"christian-slater": {"role": "Mr. Robot"}},
          $personList = $('#microsite #characters #character-nav ul');

      $personList.find('li').each(function(){
        var personId = $(this).attr('data-id');
        if (typeof person[personId] != 'undefined') {
          if (typeof person[personId]['role'] != 'undefined') $(this).find('.role').html(person[personId]['role']);
        }
      });
    },

    showSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 0) {
        $siteNav.css({'opacity': 1}).animate({'max-height': '70px'}, 700, function(){
          if ($(this).hasClass('mobile')) {
            $(this).css({'overflow': 'visible'}); // to allow hamburger hover state to work
          }
        });
        $homeUsaLogo.animate({'opacity': 0}, 700);
      }
    },

    hideSiteNav: function() {
      var $siteNav = $('#site-nav'),
          $homeUsaLogo = $('#home-usa-logo'),
          $videoTitle = $('#videos h2');
      if ($siteNav.css('opacity') == 1) {
        $homeUsaLogo.animate({'opacity': 1}, 700);
        $siteNav.css({'overflow': 'hidden'}).animate({'max-height': '0'}, 700, function(){
          $(this).css({'opacity': 0});
        });
      }
    },

    setSiteNav: function() {
      if (Drupal.behaviors.ms_global.isScrolledIntoView('#home-nav') || Drupal.behaviors.ms_global.isScrolledIntoView('#home-usa-logo')) {
        Drupal.behaviors.ms_site.hideSiteNav();
      }
      else {
        Drupal.behaviors.ms_site.showSiteNav();
      }
    },

    showInfographic: function() {
      var wwidth = $(window).width();
      if (wwidth > 1000) {
        $('#character-infographic-overlay').css('display', 'block').animate({'opacity': 1}, 1000);
        $('#character-infographic-overlay .character-close').click(function(){
          $('#character-infographic-overlay').animate({'opacity': 0}, 1000).css('display', 'none');
        });
      }
      else {
        var wHost = window.location.hostname,
            wUrl = (wHost == 'www.usanetwork.com') ? 'http://apps.usanetwork.com/mrrobot/infographic' : 'http://stage-apps.usanetwork.com/mrrobot/infographic',
            infographicWindow = window.open(wUrl, '_blank', 'menubar=no,resizable=yes,status=no,toolbar=no', false);
      }
    },

    // ATTACH
    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          setSiteNavPositionTimer,
          self = this;


      var homeSectionHeight,
          siteNavTimer,
          siteNavPositionTimer,
          scrollTimer,
          allAdsLoaded = false,
          scrollDirection;

//      self.setPersonRole();

      setTimeout(function(){
        homeSectionHeight = self.getHeightHomeSection();
        if ($('html').hasClass('ie9')) {
          self.showSiteNav();
        }
        else {
          self.setSiteNav();
        }

        // set click on character infographic
        $('#character-infographic a').on('click', function() {
          self.showInfographic();
        });
      }, 500);

      // Remove 'Scene ' from line dot hover hints
      setTimeout(function(){
        $('.timeline-node .timeline-node-desc').each(function(){
          $(this).text($(this).text().replace('Scene ', ''));
        });
      }, 3000);

      // SCROLLING
      $(window).on('scroll', function() {
        if (typeof siteNavPositionTimer == 'undefined') {
          siteNavPositionTimer = setTimeout(function(){
            var position = (window.pageYOffset >= homeSectionHeight) ? 'fixed' : 'relative';
            $('#site-nav').css({'position': position});
            siteNavPositionTimer = clearTimeout(siteNavPositionTimer);
          }, 15);
        }

        if (!$('html').hasClass('ie9') && typeof siteNavTimer == 'undefined') {
          siteNavTimer = setTimeout(function(){
            self.setSiteNav();
            siteNavTimer = clearTimeout(siteNavTimer);
          }, 200);
        }

        // initial load of each ad as it comes into view
        scrollTimer = clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
          scrollDirection = Drupal.behaviors.ms_global.getScrollDirection();

          if (!allAdsLoaded) {
            allAdsLoaded = true;
            $('#microsite .section').each(function(){
              var sectionId = $(this).attr('id');
              if (sectionId != 'site-nav') {
                if ($('#' + sectionId + ' .ad-leaderboard').html() == '') {
                  allAdsLoaded = false;
                  if (sectionId == 'videos') {
                    var $activeVideoThumb = $('#thumbnail-list .item-list ul li.thumbnail.active'),
                        dataFullEpisode = $activeVideoThumb.attr('data-full-episode');

                    if (dataFullEpisode == 'false' && Drupal.behaviors.ms_global.isScrolledIntoView('#videos .ad-leaderboard')) {
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
                  }
                  else {
                    if (Drupal.behaviors.ms_global.isScrolledIntoView('#' + sectionId + ' .ad-leaderboard')) {
                      Drupal.behaviors.ms_global.create728x90Ad(sectionId);
                    }
                  }
                }
              }
            });
          }
        }, 250);
      });
    }
  }
})(jQuery);
