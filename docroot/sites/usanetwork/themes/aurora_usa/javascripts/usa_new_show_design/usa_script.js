(function ($) {
  
  // set body class
  function addBodyClass() {

    var $body = $('body'),
        bodyClassSmartphone = 'smartphone';

    if (usa_deviceInfo.smartphone) {
      $body.addClass(bodyClassSmartphone);
    }
  }

  //add dots for description in articles block
  function addDots(item, lines, captionLineHeight, text) {
    item.text(text).dotdotdot({
      height: captionLineHeight * lines,
      lastCharacter: {
        noEllipsis: [' ', ',', ';', '.', '!', '?', '\'']
      }
    });
  }

  //calculate lines in articles block
  function checkDescriptionLines() {
    if ($('.articles-block').length > 0) {
      if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
        $('.title-and-additional').each(function () {
          var captionHeight = parseFloat($(this).closest('.meta-wrapper').css('max-height')) * 0.9 - $(this).outerHeight(),
              item = $(this).next(),
              captionLineHeight = parseFloat(item.css('line-height')),
              lines = Math.floor(captionHeight / captionLineHeight),
              text = item.data('text');
          addDots(item, lines, captionLineHeight, text);
        });
      } else {
        $('.title-and-additional').each(function () {
          var item = $(this).next(),
              captionLineHeight = parseFloat(item.css('line-height')),
              lines = 2,
              text = item.data('text');
          addDots(item, lines, captionLineHeight, text);
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
    }, 500);
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
