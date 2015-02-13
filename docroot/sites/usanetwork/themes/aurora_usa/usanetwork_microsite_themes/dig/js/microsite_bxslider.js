// FLEXSLIDER for show aspot
(function ($) {
  Drupal.behaviors.micrositeBxSliders = {
    attach: function (context, settings) {


      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          activeItem = '',
          self = this;


      //$(document).ready(function(){
        var charactersCastBxSlider = $('.characters-cast-bxslider').bxSlider({
          slideWidth: 200,
          minSlides: 5,
          maxSlides: 5,
          slideMargin: 5
        });
      //});

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
          anchorSection = Drupal.behaviors.microsite_scroll.micrositeToTitleCase(anchor);
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';

usa_debug('*****************************/ncharacters-cast click\nanchor: ' + anchor + '\nanchorSection: ' + anchorSection + '\nitem: ' + item);

          if (anchor == 'characters') {
            if (item != '') Drupal.behaviors.microsite_characters.micrositeSwitchCharacters('nav-' + item, 0);
            var anchorFull = (item != '') ? basePath + '/' + anchor + '/' + item : basePath + '/' + anchor;
            setTimeout(function(){
              Drupal.behaviors.microsite_scroll.micrositeChangeUrl(anchor, anchorFull);
              Drupal.behaviors.microsite_scroll.micrositeSectionScroll(anchor, item);
            }, 1000);
          }
        }
      });

    }
  }
}(jQuery));
