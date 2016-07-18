(function ($) {
  
  // set body class
  function addBodyClass() {

    var $body = $('body'),
        bodyClassSmartphone = 'smartphone';

    if (usa_deviceInfo.smartphone) {
      $body.addClass(bodyClassSmartphone);
    }
  }

  //=======================================
  // usa changable-link
  //=======================================
  function checkDescriptionLines() {
    if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
      if ($('.articles-block').length > 0) {
        $('.title-and-additional').each(function () {
          var captionHeight = parseFloat($(this).closest('.meta-wrapper').css('max-height'))*0.95 - $(this).outerHeight();
          var captionLineHeight = parseFloat($(this).next().css('line-height'));
          var lines = Math.floor(captionHeight / captionLineHeight);
          $(this).next().attr('style', '-webkit-line-clamp:' + lines + ';max-height:' + captionLineHeight * lines + 'px;');
        });
      }
    }
  }

  function initUsaChangableLink() {
    if (usa_deviceInfo.mobileDevice) {
      $('a.changable-link').each(function (i, el) {
        $(el).attr('href', $(el).data('data-mobile-href'));
      })
    }
  }

  $(document).ready(function () {
    addBodyClass();
    initUsaChangableLink();
    checkDescriptionLines();
  });
  $(window).resize(function () {
    setTimeout(function () {
      checkDescriptionLines();
    }, 1000);
  });

})(jQuery);

(function ($) {

  Drupal.behaviors.usaCustomService = {
    attach: function (context, settings) {

      var body = $('body');

      body.once(function () {
        // init mps block for usa-tv-show
        // if (body.hasClass('show-new-design') && body.hasClass('usa-tv-show')) {
          // Drupal.behaviors.mpsAdvert.mpsLoadAd($('#midbanner'), Drupal.behaviors.mpsAdvert.mpsNameAD.midbanner);
        // }
      })
    }
  };
})(jQuery);
