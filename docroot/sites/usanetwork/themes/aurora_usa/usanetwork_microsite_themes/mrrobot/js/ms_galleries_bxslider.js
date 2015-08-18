// BXSLIDER for galleries
// This code sets up the navigation carousels for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {
    updateGigyaSharebarOmniture: function(initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
usa_debug('gallery updateGigyaSharebarOmniture(' + initialPageLoad + ')');
      if (typeof Drupal.gigya != 'undefined') {
usa_debug('gallery Drupal.gigya is not undefined');
//        var slider = $slider.data('flexslider');
        currentSlide = 1; // slider.currentSlide + 1;
        var $sharebar = $('#galleries #gallery-gigya-share'); // $('#galleries .field-name-field-gigya-share-bar > div');
//        if ($sharebar.length > 0) {
          var $title = 'Do Not Disturb! I\'m watching Mr. Robot!'; // $slider.parents('.full-pane').find('.microsite-gallery-meta h2.gallery-title').text();
//          if ($title == '') $title = $slider.parents('.full-pane').find('.microsite-gallery-meta h1.gallery-title').text();
          var $currentImage = 'http://' + window.location.hostname + '/sites/usanetwork/themes/aurora_usa/usanetwork_microsite_themes/mrrobot/images/mr_robot_logo.png'; // $slider.find('.flex-active-slide .file-image img');
          var $currentCaption = 'Do Not Disturb! I\'m watching Mr. Robot!'; // $slider.find('.flex-active-slide .field-name-field-caption p').text();

          sharebar = new Object();
          sharebar.gigyaSharebar = {
            containerID: "gallery-gigya-share",
            iconsOnly: true,
            layout: "horizontal",
            shareButtons: "facebook, twitter, tumblr, pinterest", //"facebook, twitter, tumblr, pinterest, share",
            shortURLs: "never",
            showCounts: "none"
          }
usa_debug('gallery updateGigyaSharebarOmniture() -- sharebar: ', sharebar);

          var url = 'http://www.usanetwork.com/node/60411?rf=1'; // 'mrrobot/catchup'; // $('.bxslider li.active a').attr('href');
//          url = window.location.protocol + '//' + window.location.hostname + url;
          sharebar.gigyaSharebar.ua = {
            description: $currentCaption,
            imageBhev: "url",
            imageUrl: $currentImage, // $currentImage.attr('src'),
            linkBack: url, // + '#' + currentSlide, // @TODO: add the gallery name and possibly the photo number to the url
            title: $title
          }
          Drupal.gigya.showSharebar(sharebar);

          // omniture
          if (!initialPageLoad) {
            var siteName = Drupal.settings.microsites_settings.title,
                basePath = Drupal.settings.microsites_settings.base_path,
                basePageName = siteName + ' | USA Network';

            s.prop3 = 'Do Not Disturb';
            s.prop4 = siteName + ' : Do Not Disturb';
            s.prop5 = siteName + ' : Do Not Disturb : ' + $title;
            s.pageName = s.prop5 + ' : Photo ' + currentSlide;
            document.title = $title + ' | Do Not Disturb | ' + basePageName;
            if (typeof s_gi != 'undefined') {
              void (s.t());
            }
          }
//        }
      }
    },

    refreshBannerAd: function() {
      jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src'));
      jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src'));
    },

    activeGalleryNavItem: null,
    galleryIsLoading: null,

    getNumSlidesToDisplay: function(navCategory) {
      var wwidth = $(window).width(),
          episodesNumSlides = 4,
          charsNumSlides = 5,
          episodesPresent = ($('#microsite #galleries #ep-galleries').length > 0) ? true : false;

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
      var galleryWidth = $('#microsite #galleries .full-pane').width(),
          height = Math.ceil(galleryWidth * 9/16),
          captionHeight = 75;
      $('#microsite #galleries .flexslider, #microsite #galleries .flexslider .slides li').height(height);
      $('#microsite #galleries .center-wrapper').css('min-height', (height + captionHeight) + 'px');
    },

    setActiveGalleryNav: function() {
      var activeGalleryNid = $('#microsite #galleries-content .microsite-gallery').attr('data-node-id');
      $('#galleries .galleries-bxslider li').removeClass('active');
      $('#galleries .galleries-bxslider li[data-node-id="' + activeGalleryNid + '"]').addClass('active');
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
            Drupal.behaviors.micrositeGalleriesBxSliders.updateGigyaSharebarOmniture($slider);
            var current_gallery = $slider.closest('.microsite-gallery');
            var current_description = current_gallery.find('.flex-active-slide .field-name-field-caption').html();
            if (current_description) {
              current_gallery.find('.description-block').html(current_description);
            }
            $slider.append('<div class="counter"></div>');
//            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);

            if (callback) callback();
          },
          after: function() {
            var $slider = $slideSelector;
            Drupal.behaviors.micrositeGalleriesBxSliders.updateGigyaSharebarOmniture($slider);
            Drupal.behaviors.micrositeGalleriesBxSliders.refreshBannerAd();
//            Drupal.behaviors.microsite_gallery_carousel.changeGalleryDescription($slider.closest('.microsite-gallery'));
//            Drupal.behaviors.microsite_gallery_carousel.updateCounter($slider);
          }
        });
    },

    showHideLoader: function() {
      var activeGallery = $('#galleries .microsite-gallery'),
          gLoader = $('#galleries #gallery-loader'),
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
        var activeGalleryMeta = $('#galleries .microsite-gallery-meta'),
            activeGallery = $('#galleries .microsite-gallery'),
            activeGalleryHeight = activeGallery.height(),
            galleryNavItems = $('#galleries .galleries-bxslider li');
//            shareBarHtml = '<div class="field field-name-field-gigya-share-bar field-type-gigya-sharebar field-label-hidden"><div id="gigya-share"></div></div>';

          activeGallery.animate({'opacity': 0}, 1000, function(){

          if (data.h1.length > 0 && data.title.length > 0) {
            titleHtml = '<h2 class="seo-h1">' + data.h1 + '</h2><h2 class="gallery-title">' + data.title + '</h2>';
            activeGalleryMeta.html(titleHtml);
          } else if (data.title.length > 0) {
            titleHtml = '<h2 class="gallery-title">' + data.title + '</h2>';
            activeGalleryMeta.html(titleHtml);
          }

          activeGallery.find('.center-wrapper').html(data.rendered);
          Drupal.behaviors.micrositeGalleriesBxSliders.initCarousel();
          galleryNavItems.removeClass('active');
          $('#galleries .galleries-bxslider li[data-node-id="' + nid + '"]').addClass('active');
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
      $('#microsite #galleries .bxslider-container').width('100%');

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

      $('#galleries .galleries-bxslider li[data-node-id="' + Drupal.behaviors.micrositeGalleriesBxSliders.activeGalleryNavItem + '"]').addClass('active');
    },

    promoClickSwitchGallery: function(anchorFull) {
      var anchorPathParts = Drupal.behaviors.ms_global.getUrlPath(anchorFull),
          $navItems = $('#microsite #galleries .galleries-bxslider li a'),
          matchingGalleryNavLink = $('#microsite #galleries .galleries-bxslider li').find('a[href="' +  anchorFull + '"]'),
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
          $navItems = $('#microsite #galleries .galleries-bxslider li a');

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
      $('#microsite #galleries').animate({ scrollTop: 0 }, 1000);

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
      if ($('#microsite #galleries').length > 0) {
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

        $('#microsite #galleries .galleries-bxslider li a').bind('click', self.changeGalleryHandler);
*/

        var slideCount = 0;
        $('#galleries ul.slides li').each(function(){
          if (!$(this).hasClass('clone')) {
            var imageSrc = $(this).find('img').attr('src');
            $('#galleries .bxslider').append('<li data-slide-index="' + slideCount + '"><img src="' + imageSrc + '" /></li>');
            $('#galleries #bx-pager').append('<a data-slide-index="' + slideCount + '" href=""><img src="' + imageSrc + '" /></a>');
            slideCount++;
          }
        });

        var wwidth = $(window).width(),
            slideWidth = parseInt(wwidth * 0.18), // 200,
            slideHeight = slideWidth,
            slideMargin = 10,
            minNavSlides = 3;
        if (slideWidth > 200) {
          slideWidth = 200;
          slideHeight = 200;
        }
        $('.bxslider').bxSlider({
          pagerCustom: '#bx-pager',
          infiniteLoop: false,
          hideControlOnEnd: true,
          onSliderLoad: function(){
            setTimeout(function(){
              var galleryNavHeight = parseInt($('#galleries #gallery-content .bxslider img:first').height());
              minNavSlides = Math.round(galleryNavHeight / (slideHeight + slideMargin));
usa_debug('galleryNavHeight: ' + galleryNavHeight + ', galleryNavMinSlides: ' + minNavSlides);
              $('#galleries #gallery-content a.bx-prev, #galleries #gallery-nav a.bx-prev').html('Previous');
              $('#bx-pager').bxSlider({
                mode: 'vertical',
                slideWidth: slideWidth,
                slideHeight: slideHeight,
                minSlides: minNavSlides,
                slideMargin: slideMargin,
                onSliderLoad: function(){
                  $('#galleries #gallery-nav .bx-viewport').css({'min-height': galleryNavHeight + 'px !important'});
                  self.updateGigyaSharebarOmniture();
                }
              });
            }, 2000);
          }
        });

        // set image hover state
        $('#galleries #gallery-content li, #galleries #gallery-content .bx-controls-direction a').hover(function(){
          $('#galleries #gallery-content .bx-controls-direction a').css({'display': 'block', 'opacity': 0.8});
        }, function(){
          $('#galleries #gallery-content .bx-controls-direction a').css({'display': 'none', 'opacity': 0});
        });

        $(window).bind('resize', function () {
          self.micrositeReloadSliders();
        });
        window.addEventListener('orientationchange', self.micrositeReloadSliders);
      }
    }
  }
}(jQuery));
