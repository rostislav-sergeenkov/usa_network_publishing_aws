(function ($) {

  $(document).ready(function () {

    if ($('body').is('.usa-tv-show') && !$('body').is('.show-new-design')) {
      getShowPageRightRail();
    }
  });

  function getShowPageRightRail() {

    //'ajax/show-landing/get-related/%node' - default ajax url, get version a
    //'ajax/show-landing/get-related/%node/a||b' - ajax url, select version a || b

    var $currentBlock, versionRightRail,
        nid, url;

    $currentBlock = $('#main-slider .aspot-and-episodes .episodes-list');
    nid = Drupal.settings.usanetwork_tv_show_nid;
    url = 'ajax/show-landing/get-related/';
    versionRightRail = ''; // default version a

    // remove after test url #showRightRail=b
    var urlParams = window.location.hash.substr(1).split("=");

    if (window.hasOwnProperty('rightRailVersion')) {
      console.info('Adobe Target rightRailVersion');
      versionRightRail = window['rightRailVersion'] == 'b' ? 'b' : 'a';
    } else if (!window.hasOwnProperty('showRightRail')) {
      console.info('Right Rail URL # params');
      versionRightRail = (urlParams[0] == 'showRightRail' && urlParams[1] == 'b') ? 'b' : 'a';
    } else {
      console.info('Right Rail default');
      versionRightRail = 'a';
    }

    console.info('version Right Rail = ' + versionRightRail);

    $.ajax({
      url: url + nid + '/' + versionRightRail,
      method: "GET"
    }).done(function (data) {

      var rightRailHTML = data.data;
      $currentBlock.replaceWith(rightRailHTML);

      if (versionRightRail == 'a') {

        Drupal.behaviors.lazyloader.attach();

        $('#main-slider .episodes-list-slider').usaCarousel({
          isVerticalMode: true,
          verticalModeBpMin: 769,
          isHorizontalMode: true,
          horizontalModeBpMax: 768,
          destroyCarouselBpMax: 640,
          isMoreButton: true,
          moreButtonHiddenItemsGt: ($(document.body).hasClass('consumptionator-page')) ? 4 : 2
        });

        Drupal.behaviors.mpsSponsorShip.initSponsoredBlock($('#main-slider .episodes-list'), 'dark');

      } else if (versionRightRail == 'b') {

        // check and create images on page
        if (window.hasOwnProperty('picturefill')) {
          window.picturefill();
        }

        $('#relevant-content-carousel').usaNewCarousel();
      }

      // Click promo item
      $('#main-slider .usa-carousel .node-usanetwork-promo a').once('omniture-tracking', function () {
        $(this).on('click', function (e) {
          if (Drupal.behaviors.omniture_tracking.omniturePresent()) {

            var $self = $(this),
                name = 'Show Page Latest Full Episodes Block',
                nameEnding = ' Click',
                url = window.location.href;

            if ($(this).attr('target') == '_blank') {

            } else {
              e.preventDefault();
            }

            s.linkTrackVars = 'events,prop73,eVar55';
            s.prop73 = url;
            s.linkTrackEvents = s.events = 'event51';
            s.eVar55 = name;


            if ($self.attr('href') != '#' && $self.find('.show-open').length === 0) {
              s.goToUrl = function () {
                Drupal.behaviors.omniture_tracking.goToUrl($self);
              };
            }

            s.tl(this, 'o', name + nameEnding, null, s.goToUrl);
            s.manageVars('clearVars', s.linkTrackVars, 1);
          }
        });
      });


    }).fail(function () {
      console.log('ajax fail');
    });
  }

})(jQuery);
