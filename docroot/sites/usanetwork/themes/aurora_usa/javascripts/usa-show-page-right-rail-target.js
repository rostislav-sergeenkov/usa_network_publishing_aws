(function ($) {

  $(document).ready(function () {

    if ($('body').is('.usa-tv-show') && !$('body').is('.show-new-design')) {
      getShowPageRightRail();
    }
  });

  function getShowPageRightRail() {

    var $currentBlock, versionRightRail,
        nid, url;

    $currentBlock = $('#main-slider .aspot-and-episodes .episodes-list');
    nid = Drupal.settings.usanetwork_tv_show_nid;
    url = 'ajax/show-landing/get-related/';
    versionRightRail = '';

    if (window.hasOwnProperty('rightRailVersion')) {
      versionRightRail = window['rightRailVersion'] == 'b' ? 'b' : 'a';
    } else {
      versionRightRail = 'a';
    }

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

        Drupal.behaviors.promo_rules.refreshDescriptionLinesPromo();

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
