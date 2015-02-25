// BXSLIDER for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {

    showHidePager: function(galleryId, numGalleriesShown) {
      // set gallery nav container width
      var $galleryNavContainer = $('#microsite #galleries ' + galleryId),
          numGalleries = $galleryNavContainer.find('li').length,
          widthOneGalleryNavItem = $galleryNavContainer.find('li').width(),
          finalWidthGalleryNav = Math.ceil(numGalleriesShown * (widthOneGalleryNavItem + 10));
      $galleryNavContainer.find('.bxslider-container').width(finalWidthGalleryNav);

      // show or hide the pager
      if (numGalleries > numGalleriesShown) {
        $galleryNavContainer.find('.galleries-page-controls').show();
      }
      else {
        $galleryNavContainer.find('.galleries-page-controls').hide();
      }
    },

    setActiveGalleryHeight: function() {
      var activeGallery = $('#microsite #galleries-content .flexslider'),
          activeGalleryWidth = activeGallery.width(),
          newHeight = Math.ceil(activeGalleryWidth * 9/16);
      $('#microsite #galleries-content .flexslider').css('max-height', newHeight + 'px');
    },

    setActiveGalleryNav: function() {
      var activeGalleryNid = $('#microsite #galleries-content .microsite-gallery').attr('data-node-id');
      $('#galleries .galleries-bxslider li').removeClass('active');
      $('#galleries .galleries-bxslider li[data-node-id="' + activeGalleryNid + '"]').addClass('active');

    },

    initCarousel: function() {
      $slideSelector = $('.microsite-gallery .flexslider');
      $touch = true;
      if ($slideSelector.find('li').length <= 1) {
        $touch = false;
      }
      $slideSelector
        .parent().append('<div class="description-block"></div>');
      $slideSelector
        .flexslider({
          animation: "slide",
          useCSS: true,
          touch: $touch,
          smoothHeight: false,
          slideshow: false,
          controlNav: true,
          directionNav: true,
          start: function() {
            var $slider = $slideSelector;
            Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
            var current_gallery = $slider.closest('.microsite-gallery');
            var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
            if (current_description) {
              current_gallery.find('.description-block').html(current_description);
            }
            $slider.append('<div class="counter"></div>');
            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);
          },
          after: function() {
            var $slider = $slideSelector;
            Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
            Drupal.behaviors.microsite_gallery_carousel.refreshBannerAd();
            Drupal.behaviors.microsite_gallery_carousel.changeGalleryDescription($slider.closest('.microsite-gallery'));
            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);
          }
        });
    },

    showHideLoader: function() {
      var activeGallery = $('#galleries .microsite-gallery'),
          gLoader = $('#galleries #gallery-loader'),
          gHeight = activeGallery.find('.flex-viewport').height();
      gLoader.height(gHeight);
      if (gLoader.css('opacity') == 0) {
        // show spinner
        gLoader.show().animate({'opacity': 1}, 1000);
      }
      else {
        // hide spinner
        gLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

    switchGallery: function(nid) {
      Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();

      // Make ajax call to '/ajax/get-gallery/' + nid
      var newGallery = $.ajax({
        url: '/ajax/get-gallery/' + nid,
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data, textStatus, jqXHR){
        var activeGalleryMeta = $('#galleries .microsite-gallery-meta'),
            activeGallery = $('#galleries .microsite-gallery'),
            activeGalleryHeight = activeGallery.height(),
            galleryNavItems = $('#galleries .galleries-bxslider li');
        activeGallery.animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
          activeGalleryMeta.find('h2').text(data.title);
          activeGallery.height(activeGalleryHeight).find('.center-wrapper').html(data.rendered);
          Drupal.behaviors.micrositeGalleriesBxSliders.initCarousel();
          galleryNavItems.removeClass('active');
          $('#galleries .galleries-bxslider li[data-node-id="' + nid + '"').addClass('active');
          Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryHeight();
          activeGallery.animate({'opacity': 1}, 1000, function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();
          });
        });
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        //usa_debug('********************\najax fail: ');
        //usa_debug(errorThrown);
      })
    },

    micrositeReloadSliders: function() {
      $('#microsite #galleries .bxslider-container').width('100%');

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          episodesNumSlides = 4,
          charsNumSlides = 5,
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10;
      if (1860 > wwidth && wwidth >= 1550) {
        episodesNumSlides = 3;
        charsNumSlides = 4;
      }
      else if (1550 > wwidth && wwidth >= 1270) {
        episodesNumSlides = 2;
        charsNumSlides = 3;
      }
      else if (1270 > wwidth && wwidth >= 1160) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (1160 > wwidth && wwidth >= 890) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (890 > wwidth && wwidth >= 874) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (874 > wwidth && wwidth >= 866) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (866 > wwidth && wwidth >= 640) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (640 > wwidth && wwidth >= 505) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (505 > wwidth) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }

      Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryHeight();

      if (typeof Drupal.behaviors.micrositeGalleriesBxSliders.epGalleryBxSlider == 'object') {
        Drupal.behaviors.micrositeGalleriesBxSliders.epGalleryBxSlider.reloadSlider({
          slideWidth: slideWidth,
          minSlides: episodesNumSlides,
          maxSlides: episodesNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#ep-galleries-next',
          prevSelector: '#ep-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          pagerSelector: '#ep-galleries-pagers',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showHidePager('#ep-galleries', episodesNumSlides);
            $('#microsite #galleries #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      if (typeof Drupal.behaviors.micrositeGalleriesBxSliders.characterGalleryBxSlider == 'object') {
        Drupal.behaviors.micrositeGalleriesBxSliders.characterGalleryBxSlider.reloadSlider({
          slideWidth: slideWidth,
          minSlides: charsNumSlides,
          maxSlides: charsNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#character-galleries-next',
          prevSelector: '#character-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          pagerSelector: '#character-galleries-pagers',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showHidePager('#character-galleries', charsNumSlides);
            $('#microsite #galleries #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }
      Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryNav();
    },

    attach: function (context, settings) {

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          episodesNumSlides = 4,
          charsNumSlides = 5,
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10,
          self = this;
      if (1860 > wwidth && wwidth >= 1550) {
        episodesNumSlides = 3;
        charsNumSlides = 4;
      }
      else if (1550 > wwidth && wwidth >= 1270) {
        episodesNumSlides = 2;
        charsNumSlides = 3;
      }
      else if (1270 > wwidth && wwidth >= 1160) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (1160 > wwidth && wwidth >= 890) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (890 > wwidth && wwidth >= 874) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (874 > wwidth && wwidth >= 866) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (866 > wwidth && wwidth >= 640) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }
      else if (640 > wwidth && wwidth >= 505) {
        episodesNumSlides = 3;
        charsNumSlides = 3;
      }
      else if (505 > wwidth) {
        episodesNumSlides = 2;
        charsNumSlides = 2;
      }

      self.setActiveGalleryHeight();

      if ($('#microsite #galleries #ep-galleries').length > 0) {
        self.epGalleryBxSlider = $('#microsite #galleries #ep-galleries .galleries-bxslider').bxSlider({
          slideWidth: slideWidth,
          minSlides: episodesNumSlides,
          maxSlides: episodesNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#ep-galleries-next',
          prevSelector: '#ep-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          pagerSelector: '#ep-galleries-pagers',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            self.showHidePager('#ep-galleries', episodesNumSlides);
            $('#microsite #galleries #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      if ($('#microsite #galleries #character-galleries').length > 0) {
        self.characterGalleryBxSlider = $('#microsite #galleries #character-galleries .galleries-bxslider').bxSlider({
          slideWidth: slideWidth,
          minSlides: charsNumSlides,
          maxSlides: charsNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#character-galleries-next',
          prevSelector: '#character-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          pagerSelector: '#character-galleries-pagers',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            self.showHidePager('#character-galleries', charsNumSlides);
            $('#microsite #galleries #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      self.setActiveGalleryNav();

      $('#microsite #galleries .galleries-bxslider li a').click(function(e){
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

          var nid = $(this).parent().attr('data-node-id');
          self.switchGallery(nid);
          history.pushState({"state": anchorFull}, anchorFull, anchorFull);
        }
      });

      $(window).bind('resize', function () {
        self.micrositeReloadSliders();
      });
      window.addEventListener('orientationchange', self.micrositeReloadSliders);


    }
  }
}(jQuery));
