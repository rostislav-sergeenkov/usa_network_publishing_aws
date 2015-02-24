// BXSLIDER for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {

    showHidePager: function($galleryNavContainer, widthOneGalleryNavItem) {
      var galleryId = $galleryNavContainer.attr('id'),
          availableNavWidth = $galleryNavContainer.width(),
          numGalleries = $galleryNavContainer.find('li').length,
          widthAllTotalGalleries = Math.ceil(numGalleries * widthOneGalleryNavItem);
      if (widthAllTotalGalleries > availableNavWidth) {
        var numGalleriesToShow = Math.floor(availableNavWidth / widthOneGalleryNavItem),
            finalWidthGalleryNav = Math.ceil(numGalleriesToShow * widthOneGalleryNavItem),
            pagers = $galleryNavContainer.find('.bx-wrapper .bx-controls');
        $galleryNavContainer.find('.bxslider-container').width((finalWidthGalleryNav));
        $galleryNavContainer.find('.gallery-pagers').html(pagers.html());
        Drupal.behaviors.micrositeGalleriesBxSliders.initPagers();
//usa_debug('********************\navailableNavWidth: ' + availableNavWidth + '\nwidthOneGalleryNavItem: ' + widthOneGalleryNavItem + '\nnumGalleriesToShow: ' + numGalleriesToShow)
      }
      else {
        $galleryNavContainer.find('.bx-controls').hide();
      }
    },

    setActiveGalleryHeight: function() {
      var activeGallery = $('#microsite #galleries-content .flexslider'),
          activeGalleryWidth = activeGallery.width(),
          newHeight = Math.ceil(activeGalleryWidth * 9/16);
      $('#microsite #galleries-content .flexslider').css('max-height', newHeight + 'px');
    },

    setActiveGalleryNav: function() {
      var activeGalleryNid = $('.microsite-gallery').attr('data-node-id');
      $('#galleries .galleries-bxslider li[data-node-id="' + activeGalleryNid + '"]').addClass('active');
//usa_debug('*******************\nsetActiveGalleryNav => activeGalleryNid: ' + activeGalleryNid);
    },

    initPagers: function() {
      var $pagers = $('#microsite #galleries-content .gallery-pagers .bx-pager-link');
      $pagers.on('click', function(){
        var clickedGalleryNav = $(this).parents('.galleries-nav'),
            clickedNavIndex = $(this).attr('data-slide-index');
        clickedGalleryNav.find('.bx-wrapper .bx-pager-link[data-slide-index="' + clickedNavIndex + '"]').click();
        clickedGalleryNav.find('.gallery-pagers .bx-pager-link').removeClass('active');
        clickedGalleryNav.find('.gallery-pagers .bx-pager-link[data-slide-index="' + clickedNavIndex + '"]').addClass('active');
      });

      var $nextPrevBtns = $('#microsite #galleries .galleries-nav .btns a');
      $nextPrevBtns.on('click', function(){
        var clickedGalleryNav = $(this).parents('.galleries-nav'),
            clickedGalleryNavId = clickedGalleryNav.attr('id'),
            newActivePage = clickedGalleryNav.find('.bx-wrapper .bx-pager-link.active').attr('data-slide-index');
//        clickedGalleryNav.find('.bx-wrapper .bx-pager-link[data-slide-index="' + clickedNavIndex + '"]').click();
        clickedGalleryNav.find('.gallery-pagers .bx-pager-link').removeClass('active');
        clickedGalleryNav.find('.gallery-pagers .bx-pager-link[data-slide-index="' + newActivePage + '"]').addClass('active');
      });
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
            galleryNavItems = $('#galleries .galleries-bxslider li');
        activeGallery.animate({'opacity': 0, 'scrollTop': 0}, 1000, function(){
          activeGalleryMeta.find('h2').text(data.title);
          activeGallery.find('.center-wrapper').html(data.rendered);
          Drupal.behaviors.micrositeGalleriesBxSliders.initCarousel();
          galleryNavItems.removeClass('active');
          $('#galleries .galleries-bxslider li[data-node-id="' + nid + '"').addClass('active');
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
      var wwidth = $(window).width(),
          transitionWidth = 640,
          episodesNumSlides = (wwidth > transitionWidth) ? 4 : 3,
          charsNumSlides = (wwidth > transitionWidth) ? 6 : 3,
          minNumSlides = 2,
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10;

      Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryHeight();

      if (typeof Drupal.behaviors.micrositeGalleriesBxSliders.epGalleryBxSlider == 'object') {
        Drupal.behaviors.micrositeGalleriesBxSliders.epGalleryBxSlider.reloadSlider({
          slideWidth: slideWidth,
          minSlides: minNumSlides,
          maxSlides: episodesNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#ep-galleries-next',
          prevSelector: '#ep-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showHidePager($('#microsite #galleries #ep-galleries'), (slideWidth + slideMargin));
            Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryNav();
            $('#microsite #galleries #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      if (typeof Drupal.behaviors.micrositeGalleriesBxSliders.characterGalleryBxSlider == 'object') {
        Drupal.behaviors.micrositeGalleriesBxSliders.characterGalleryBxSlider.reloadSlider({
          slideWidth: slideWidth,
          minSlides: minNumSlides,
          maxSlides: charsNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#character-galleries-next',
          prevSelector: '#character-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showHidePager($('#microsite #galleries #character-galleries'), (slideWidth + slideMargin));
            Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryNav();
            $('#microsite #galleries #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }
    },

    attach: function (context, settings) {

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          episodesNumSlides = (wwidth > transitionWidth) ? 4 : 3,
          charsNumSlides = (wwidth > transitionWidth) ? 6 : 3,
          minNumSlides = 2,
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10,
          self = this;

      self.setActiveGalleryHeight();

      if ($('#microsite #galleries #ep-galleries').length > 0) {
        self.epGalleryBxSlider = $('#microsite #galleries #ep-galleries .galleries-bxslider').bxSlider({
          slideWidth: slideWidth,
          minSlides: minNumSlides,
          maxSlides: episodesNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#ep-galleries-next',
          prevSelector: '#ep-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            self.showHidePager($('#microsite #galleries #ep-galleries'), (slideWidth + slideMargin));
            self.setActiveGalleryNav();
            $('#microsite #galleries #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      if ($('#microsite #galleries #character-galleries').length > 0) {
        self.characterGalleryBxSlider = $('#microsite #galleries #character-galleries .galleries-bxslider').bxSlider({
          slideWidth: slideWidth,
          minSlides: minNumSlides,
          maxSlides: charsNumSlides,
          slideMargin: slideMargin,
          nextSelector: '#character-galleries-next',
          prevSelector: '#character-galleries-prev',
          nextText: 'Next',
          prevText: 'Previous',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            self.showHidePager($('#microsite #galleries #character-galleries'), (slideWidth + slideMargin));
            self.setActiveGalleryNav();
            $('#microsite #galleries #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

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
