// BXSLIDER for galleries
// This code sets up the navigation carousels for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {

    activeGalleryNavItem: null,
    galleryIsLoading: null,

    getNumSlidesToDisplay: function(navCategory) {
      var wwidth = $(window).width(),
          episodesNumSlides = 4,
          charsNumSlides = 5,
          episodesPresent = ($('#microsite #dont-bother-me #ep-galleries').length > 0) ? true : false;

      if (1860 > wwidth && wwidth >= 1550) {
        episodesNumSlides = 3;
        charsNumSlides = (episodesPresent) ? 4 : 3;
      }
      else if (1550 > wwidth && wwidth >= 1270) {
        episodesNumSlides = 2;
        charsNumSlides = (episodesPresent) ? 3 : 2;
      }
      else if (1270 > wwidth && wwidth >= 1160) {
        episodesNumSlides = 2;
        charsNumSlides = (episodesPresent) ? 3 : 2;
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

      if (navCategory == 'episodes') {
        return episodesNumSlides;
      }
      else if (navCategory == 'other') {
        return charsNumSlides;
      }
    },

    showHidePager: function(galleryId, numGalleriesShown) {
      // set gallery nav container width
      var $galleryNavContainer = $('#microsite #dont-bother-me ' + galleryId),
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
      var galleryWidth = $('#microsite #dont-bother-me .full-pane').width(),
          height = Math.ceil(galleryWidth * 9/16),
          captionHeight = 75;
      $('#microsite #dont-bother-me .flexslider, #microsite #dont-bother-me .flexslider .slides li').height(height);
      $('#microsite #dont-bother-me .center-wrapper').css('min-height', (height + captionHeight) + 'px');
    },

    setActiveGalleryNav: function() {
      var activeGalleryNid = $('#microsite #dont-bother-me-content .microsite-gallery').attr('data-node-id');
      $('#dont-bother-me .galleries-bxslider li').removeClass('active');
      $('#dont-bother-me .galleries-bxslider li[data-node-id="' + activeGalleryNid + '"]').addClass('active');
    },

    initCarousel: function(callback) {
      callback = callback || null;
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
            Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryHeight();
            var $slider = $slideSelector;
            Drupal.behaviors.microsite_gallery_carousel.updateGigyaSharebarOmniture($slider);
            var current_gallery = $slider.closest('.microsite-gallery');
            var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
            if (current_description) {
              current_gallery.find('.description-block').html(current_description);
            }
            $slider.append('<div class="counter"></div>');
            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);

            if (callback) callback();
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
      var activeGallery = $('#dont-bother-me .microsite-gallery'),
          gLoader = $('#dont-bother-me #gallery-loader'),
          gHeight = activeGallery.find('.flex-viewport').height();

      gLoader.height(gHeight);

      if (Drupal.behaviors.micrositeGalleriesBxSliders.galleryIsLoading) {
        // show spinner
        gLoader.show().animate({'opacity': 1}, 1000);
      } else {
        // hide spinner
        gLoader.animate({'opacity': 0}, 1000).delay(1000).hide();
      }
    },

    showGallery: function($activeGallery) {
      $activeGallery.animate({'opacity': 1}, 1000, function(){
        Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();
      });
    },

    switchGallery: function(nid, callback) {
      callback = callback || null;

      Drupal.behaviors.micrositeGalleriesBxSliders.galleryIsLoading = true;

      // scroll to top of galleries section
      var direction = 'up',
        offsetDirection = (direction == 'down') ? 1 : -1,
        offsetAmount = 10 * offsetDirection,
        galleriesTop = document.getElementById('galleries').offsetTop + offsetAmount;
      $('body, html').animate({'scrollTop': galleriesTop}, 1000, 'jswing');

      Drupal.behaviors.micrositeGalleriesBxSliders.showHideLoader();

      // Make ajax call to '/ajax/get-gallery/' + nid
      var newGallery = $.ajax({
        url: '/ajax/get-gallery/' + nid,
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data, textStatus, jqXHR){
        var activeGalleryMeta = $('#dont-bother-me .microsite-gallery-meta'),
            activeGallery = $('#dont-bother-me .microsite-gallery'),
            activeGalleryHeight = activeGallery.height(),
            galleryNavItems = $('#dont-bother-me .galleries-bxslider li'),
            shareBarHtml = '<div class="field field-name-field-gigya-share-bar field-type-gigya-sharebar field-label-hidden"><div id="gigya-share"></div></div>';

          activeGallery.animate({'opacity': 0}, 1000, function(){

          if (data.h1.length > 0 && data.title.length > 0) {
            titleHtml = '<h2 class="seo-h1">' + data.h1 + '</h2><h2 class="gallery-title">' + data.title + '</h2>' + shareBarHtml;
            activeGalleryMeta.html(titleHtml);
          } else if (data.title.length > 0) {
            titleHtml = '<h2 class="gallery-title">' + data.title + '</h2>' + shareBarHtml;
            activeGalleryMeta.html(titleHtml);
          }

          activeGallery.find('.center-wrapper').html(data.rendered);
          Drupal.behaviors.micrositeGalleriesBxSliders.initCarousel();
          galleryNavItems.removeClass('active');
          $('#dont-bother-me .galleries-bxslider li[data-node-id="' + nid + '"]').addClass('active');
          setTimeout(function(){
            Drupal.behaviors.micrositeGalleriesBxSliders.showGallery(activeGallery);
            Drupal.behaviors.micrositeGalleriesBxSliders.galleryIsLoading = false;
            if (callback !== null) callback();
          }, 1000);
        });
      })
      .fail(function(jqXHR, textStatus, errorThrown){
        //usa_debug('********************\najax fail: ');
        //usa_debug(errorThrown);
      })
    },

    micrositeReloadSliders: function() {
      $('#microsite #dont-bother-me .bxslider-container').width('100%');

      // set defaults
      var wwidth = $(window).width(),
          transitionWidth = 640,
          episodesNumSlides = Drupal.behaviors.micrositeGalleriesBxSliders.getNumSlidesToDisplay('episodes'),
          charsNumSlides = Drupal.behaviors.micrositeGalleriesBxSliders.getNumSlidesToDisplay('other'),
          slideWidth = (wwidth > transitionWidth) ? 250 : 140,
          slideMargin = 10;

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
            $('#microsite #dont-bother-me #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
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
            $('#microsite #dont-bother-me #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
          }
        });
      }

      $('#dont-bother-me .galleries-bxslider li[data-node-id="' + Drupal.behaviors.micrositeGalleriesBxSliders.activeGalleryNavItem + '"]').addClass('active');
    },

    promoClickSwitchGallery: function(anchorFull) {
      var anchorPathParts = Drupal.behaviors.ms_global.getUrlPath(anchorFull),
          $navItems = $('#microsite #dont-bother-me .galleries-bxslider li a'),
          matchingGalleryNavLink = $('#microsite #dont-bother-me .galleries-bxslider li').find('a[href="' +  anchorFull + '"]'),
          nid = matchingGalleryNavLink.parent().attr('data-node-id'),
          anchor = anchorPathParts[1],
          item = (typeof anchorPathParts[2] != 'undefined') ? anchorPathParts[2] : '';

      Drupal.behaviors.micrositeGalleriesBxSliders.activeGalleryNavItem = nid;
      Drupal.behaviors.micrositeGalleriesBxSliders.switchGallery(nid);

      // scroll to galleries section
      Drupal.behaviors.ms_global.sectionScroll(anchor, item);

      history.pushState({"state": anchorFull}, anchorFull, anchorFull);
    },

    changeGalleryHandler: function(e) {
      var anchorFull = this.href,
          anchorPathParts = Drupal.behaviors.ms_global.getUrlPath(anchorFull),
          $navItems = $('#microsite #dont-bother-me .galleries-bxslider li a');

      // Unbind click while selected gallery loading
      $navItems.unbind('click').bind('click', function(e) {
        e.preventDefault();
      });

      // if this is an internal microsite url
      // prevent the default action
      // and show the correct microsite item without a page reload
      e.preventDefault();

      // if this is IE9, reload the correct page
      if ($('html').hasClass('ie9')) {
        window.location.href = anchorFull;
        return false;
      }

      // scroll to top of galleries section
      $('#microsite #dont-bother-me').animate({ scrollTop: 0 }, 1000);

      // switch gallery
      var nid = $(this).parent().attr('data-node-id');
      Drupal.behaviors.micrositeGalleriesBxSliders.activeGalleryNavItem = nid;
      Drupal.behaviors.micrositeGalleriesBxSliders.switchGallery(nid, function() {
        $navItems.bind('click', Drupal.behaviors.micrositeGalleriesBxSliders.changeGalleryHandler);
      });

      history.pushState({"state": anchorFull}, anchorFull, anchorFull);
    },

    attach: function (context, settings) {

      // check to make sure there's a galleries section
      if ($('#microsite #dont-bother-me').length > 0) {
        // set defaults
        var wwidth = $(window).width(),
            transitionWidth = 640,
            episodesNumSlides = Drupal.behaviors.micrositeGalleriesBxSliders.getNumSlidesToDisplay('episodes'),
            charsNumSlides = Drupal.behaviors.micrositeGalleriesBxSliders.getNumSlidesToDisplay('other'),
            slideWidth = (wwidth > transitionWidth) ? 250 : 140,
            slideMargin = 10,
            self = this;

/*
        self.setActiveGalleryHeight();

        if ($('#microsite #dont-bother-me #ep-galleries').length > 0) {
          self.epGalleryBxSlider = $('#microsite #dont-bother-me #ep-galleries .galleries-bxslider').bxSlider({
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
              $('#microsite #dont-bother-me #ep-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
            }
          });
        }

        if ($('#microsite #dont-bother-me #character-galleries').length > 0) {
          self.characterGalleryBxSlider = $('#microsite #dont-bother-me #character-galleries .galleries-bxslider').bxSlider({
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
              $('#microsite #dont-bother-me #character-galleries').animate({ 'opacity': 1 }, 1000, 'jswing');
            }
          });
        }

        self.setActiveGalleryNav();

        $('#microsite #dont-bother-me .galleries-bxslider li a').bind('click', self.changeGalleryHandler);
*/

        var slideCount = 0;
        $('#dont-bother-me ul.slides li').each(function(){
          if (!$(this).hasClass('clone')) {
            var imageSrc = $(this).find('img').attr('src');
            $('#dont-bother-me .bxslider').append('<li data-slide-index="' + slideCount + '"><img src="' + imageSrc + '" /></li>');
            $('#dont-bother-me #bx-pager').append('<a data-slide-index="' + slideCount + '" href=""><img src="' + imageSrc + '" /></a>');
            slideCount++;
          }
        });

        $('.bxslider').bxSlider({
          pagerCustom: '#bx-pager',
          infiniteLoop: false,
          hideControlOnEnd: true
        });
        $('#bx-pager').bxSlider({
          mode: 'vertical',
          slideWidth: 200,
          slideHeight: 113,
          minSlides: 3,
          slideMargin: 10,
          onSliderLoad: function(){
            var galleryNavHeight = parseInt($('#dont-bother-me #gallery-content .bxslider img:first').height());
usa_debug('galleryNavHeight: ' + galleryNavHeight);
            $('#dont-bother-me #gallery-nav .bx-viewport').css({'height': galleryNavHeight + 'px !important'});
            $('#dont-bother-me #gallery-content a.bx-prev, #dont-bother-me #gallery-nav a.bx-prev').html('Previous');
          }
        });

        // set image hover state
        $('#dont-bother-me #gallery-content li, #dont-bother-me #gallery-content .bx-controls-direction a').hover(function(){
          $('#dont-bother-me #gallery-content .bx-controls-direction a').css({'display': 'block', 'opacity': 0.8});
        }, function(){
          $('#dont-bother-me #gallery-content .bx-controls-direction a').css({'display': 'none', 'opacity': 0});
        });

        $(window).bind('resize', function () {
          self.micrositeReloadSliders();
        });
        window.addEventListener('orientationchange', self.micrositeReloadSliders);
      }
    }
  }
}(jQuery));
