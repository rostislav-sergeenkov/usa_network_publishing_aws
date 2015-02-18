// BXSLIDER for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {


    micrositeReloadBxSlider: function() {
      if ($('#microsite #galleries .galleries-bxslider').length) $('#microsite #galleries #characters-galleries-list').css({ 'opacity': 0 });
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
      var wwidth = $(window).width(),
          transitionWidth = 640,
          numSlides = (wwidth > transitionWidth) ? 2 : 2,
          slideWidth = (wwidth > transitionWidth) ? 140 : 140,
          slideMargin = 10,
          self = this;


      self.epGalleryBxSlider = $('#microsite #galleries #ep-galleries .galleries-bxslider').bxSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
        slideMargin: slideMargin,
        nextSelector: '#ep-galleries-next',
        prevSelector: '#ep-galleries-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #galleries #ep-galleries .galleries-bxslider').animate({ 'opacity': 1 }, 1000, 'jswing');
        }
      });

      self.characterGalleryBxSlider = $('#microsite #galleries #character-galleries .galleries-bxslider').bxSlider({
        slideWidth: slideWidth,
        minSlides: numSlides,
        maxSlides: numSlides,
        slideMargin: slideMargin,
        nextSelector: '#character-galleries-next',
        prevSelector: '#character-galleries-prev',
        nextText: 'Next',
        prevText: 'Previous',
        infiniteLoop: false,
        hideControlOnEnd: true,
        onSliderLoad: function(){
          $('#microsite #galleries #character-galleries .galleries-bxslider').animate({ 'opacity': 1 }, 1000, 'jswing');
        }
      });

      $('#microsite #galleries .galleries-bxslider li a').click(function(e){
        var anchorFull = this.href,
            anchorPathParts = Drupal.behaviors.microsite_scroll.micrositeGetUrlPath(anchorFull);

        // if this is an internal microsite url
        // prevent the default action
        // and show the correct microsite item without a page reload
        if (anchorPathParts[0] == 'dig') {
          e.preventDefault();

          var nid = $(this).parent().attr('data-node-id');
          // Make ajax call to '/ajax/get-gallery/' + nid
          var newGallery = $.ajax({
            url: '/ajax/get-gallery/' + nid,
            type: 'GET'
          })
          .done(function(data, textStatus, jqXHR){
            usa_debug('*********************\najax done: ');
            usa_debug(data);
          })
          .fail(function(jqXHR, textStatus, errorThrown){
            usa_debug('********************\najax fail: ');
            usa_debug(errorThrown);
          })
          .always(function(){

          });

/*
          // if this is IE9, reload the correct page
          if ($('html.ie9').length > 0) {
            window.location.href = anchorFull;
            return false;
          }

          anchor = anchorPathParts[1];
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';

          if (anchor == 'galleries') {
            if (item != '') Drupal.behaviors.microsite_characters.micrositeSwitchCharacters('nav-' + item, 10);
          }
*/
        }
      });

      $(window).bind('resize', function () {
        self.micrositeReloadBxSlider();
      });
      window.addEventListener('orientationchange', self.micrositeReloadBxSlider);


    }
  }
}(jQuery));
