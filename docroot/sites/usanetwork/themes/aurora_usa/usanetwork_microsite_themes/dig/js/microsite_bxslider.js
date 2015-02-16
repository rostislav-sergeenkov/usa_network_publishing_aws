// FLEXSLIDER for show aspot
(function ($) {
  Drupal.behaviors.micrositeBxSliders = {


    micrositeReloadBxSlider: function() {
      if ($('#microsite #home #characters-cast-list').length) $('#microsite #home .characters-cast #characters-cast-list').css({ 'opacity': 0 });
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = (wwidth > transitionWidth) ? 5 : 3,
          slideWidth = (wwidth > transitionWidth) ? 242 : 100,
          slideMargin = 10;
      Drupal.behaviors.micrositeBxSliders.charactersCastBxSlider.reloadSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
        slideMargin: slideMargin,
        nextSelector: '#characters-cast-next',
        prevSelector: '#characters-cast-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #home #characters-cast-list').animate({ 'opacity': 1 }, 1000, 'jswing');
        }
      })
    },

    attach: function (context, settings) {


      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          activeItem = '',
          wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = (wwidth > transitionWidth) ? 5 : 3,
          slideWidth = (wwidth > transitionWidth) ? 242 : 100,
          slideMargin = 10;
          self = this;


      self.charactersCastBxSlider = $('.characters-cast-bxslider').bxSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
        slideMargin: slideMargin,
        nextSelector: '#characters-cast-next',
        prevSelector: '#characters-cast-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #home #characters-cast-list').animate({ 'opacity': 1 }, 1000, 'jswing');
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
          anchorSection = Drupal.behaviors.microsite_characters.micrositeToTitleCase(anchor);
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';


          if (anchor == 'characters') {
usa_debug('*****************************/ncharacters-cast click\nanchor: ' + anchor + '\nanchorSection: ' + anchorSection + '\nitem: ' + item);
            if (item != '') Drupal.behaviors.microsite_characters.micrositeSwitchCharacters('nav-' + item);
/*
            var anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor;
            setTimeout(function(){
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, item);
            }, 1000);
*/
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
