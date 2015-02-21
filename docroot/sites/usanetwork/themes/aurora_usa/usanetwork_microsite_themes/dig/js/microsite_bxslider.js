// BXSLIDER for characters
(function ($) {
  Drupal.behaviors.micrositeBxSliders = {


    micrositeReloadBxSlider: function() {
      if ($('#microsite #home .characters-cast').length) $('#microsite #home .characters-cast').css({ 'opacity': 0 });
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = (wwidth > transitionWidth) ? 6 : 3,
          slideWidth = (wwidth > transitionWidth) ? 240 : 100,
          slideMargin = 10;
//usa_debug('*******************/nmicrositeReloadBxSlider\nnumSlides: ' + numSlides + '\nslideWidth: ' + slideWidth);
      Drupal.behaviors.micrositeBxSliders.charactersCastBxSlider.reloadSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
//        useCSS: true,
        slideMargin: slideMargin,
        nextSelector: '#characters-cast-next',
        prevSelector: '#characters-cast-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #home .characters-cast').animate({ 'opacity': 1 }, 1000, 'jswing');
        }
      })
    },

    attach: function (context, settings) {


      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = (wwidth > transitionWidth) ? 6 : 3,
          slideWidth = (wwidth > transitionWidth) ? 240 : 100,
          slideMargin = 10,
          self = this;


      self.charactersCastBxSlider = $('#microsite #home .characters-cast-bxslider').bxSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
//        useCSS: true,
        slideMargin: slideMargin,
        nextSelector: '#characters-cast-next',
        prevSelector: '#characters-cast-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #home .characters-cast').css('overflow', 'visible').animate({ 'opacity': 1 }, 1000, 'jswing');
        }
      });

      $('#microsite #home .characters-cast li a').click(function(e){
        var anchorFull = this.href,
            anchorPathParts = Drupal.behaviors.microsite_scroll.micrositeGetUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig') {
          e.preventDefault();

          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = anchorPathParts[1];
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';

          if (anchor == 'characters') {
            if (item != '') Drupal.behaviors.microsite_characters.micrositeSwitchCharacters('nav-' + item, 10);
          }
        }
      });

      $(window).bind('resize', function () {
        self.micrositeReloadBxSlider();
      });
      window.addEventListener('orientationchange', self.micrositeReloadBxSlider);

    }
  }
}(jQuery));
