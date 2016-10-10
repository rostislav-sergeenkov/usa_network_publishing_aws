(function ($) {

  $(document).ready(function () {

    if ($('body').is('.usa-tv-show') && !$('body').is('.show-new-design')) {
      getShowPageRightRail();
    }
  });

  function getShowPageRightRail() {

    //'ajax/show-landing/get-related/%node' - default ajax url, get version a
    //'ajax/show-landing/get-related/%node/a||b' - ajax url, select version a || b

    var $currentBlock,
        nid, url, versionRR, abTarget;

    abTarget = true;
    $currentBlock = $('#main-slider .aspot-and-episodes .episodes-list');
    nid = Drupal.settings.usanetwork_tv_show_nid;
    url = 'ajax/show-landing/get-related/';
    versionRR = 'a'; // default version a

    if (abTarget) {
      versionRR = 'b';
    }

    $.ajax({
      url: url + nid + '/' + versionRR,
      method: "GET"
    }).done(function (data) {

      var rightRailHTML = data.data;
      $currentBlock.replaceWith(rightRailHTML);

      // check and create images on page
      if (window.hasOwnProperty('picturefill')) {
        window.picturefill();
      }

      if (versionRR === 'a') {
        $('#main-slider .episodes-list-slider').usaCarousel({
          isVerticalMode: true,
          verticalModeBpMin: 769,
          isHorizontalMode: true,
          horizontalModeBpMax: 768,
          destroyCarouselBpMax: 640,
          isMoreButton: true,
          moreButtonHiddenItemsGt: ($(document.body).hasClass('consumptionator-page')) ? 4 : 2
        });
      } else if (versionRR === 'b') {
        $('#relevant-content-carousel').usaNewCarousel();
      }

    }).fail(function () {
      console.log('ajax fail');
    });
  }

})(jQuery);
