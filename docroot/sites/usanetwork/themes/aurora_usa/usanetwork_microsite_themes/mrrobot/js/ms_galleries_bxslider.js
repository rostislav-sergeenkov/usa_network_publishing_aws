// BXSLIDER for galleries
// This code sets up the navigation carousels for galleries
(function ($) {
  Drupal.behaviors.micrositeGalleriesBxSliders = {
    updateGigyaSharebarOmniture: function(initialPageLoad) {
      initialPageLoad = initialPageLoad || 0;
      var $activeImage = $('#galleries #gallery-content li.active2'),
          currentSlide = (parseInt($activeImage.attr('data-slide-index')) + 1),
          shareTitle = 'Let the world know you\'re watching Mr. Robot.',
          currentImageSrc = $activeImage.find('img').attr('src'),
          currentCaption = 'Mr. Robot time is sacred.  We understand.  That\'s why we created social shareables designed to keep the chatty corporate bureaucrats, loud-mouthed hackers and talkative friends away while your favorite show is on.  Put one up whenever you and Elliot are trying to start the revolution.',
          url = (parseInt(currentSlide) < 10) ? 'http://www.usanetwork.com/mrrobot/dnd/0' + currentSlide : 'http://www.usanetwork.com/mrrobot/dnd/' + currentSlide;
      if (typeof currentSlide != 'number') currentSlide = 1;
      var settings = settings || {
        containerId: 'gallery-gigya-share',
        title: shareTitle,
        description: currentCaption,
        imageSrc: currentImageSrc,
        url: url
      };

      Drupal.behaviors.ms_gigya.updateGigyaSharebar(initialPageLoad, settings);

      // omniture
      if (!initialPageLoad) {
        Drupal.behaviors.ms_global.setOmnitureData('galleries');
      }
    },

    refreshBannerAd: function() {
      jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-728x90_ifr_reload_galleries iframe').attr('src'));
      jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src', jQuery('.dart-name-300x250_ifr_reload_galleries iframe').attr('src'));
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

    // GALLERY NAVIGATION
    getPageNum: function(slideNum) {
      var $galleryPager = $('#galleries #gallery-nav .bx-pager'),
          pagerArray = Drupal.behaviors.micrositeGalleriesBxSliders.pagerArray;
      for(page in pagerArray) {
usa_debug('getPageNum(' + slideNum + ') -- pagerArray[page]: ', pagerArray[page]);
        if (pagerArray[page].indexOf(slideNum) > -1) return page;
      }
    },

    setActiveGalleryImageNav: function(slideNum) {
      var $galleryNav = $('#galleries #gallery-nav ul#bx-pager'),
          newPageNum = Drupal.behaviors.micrositeGalleriesBxSliders.getPageNum(slideNum),
          $navPager = $('#galleries #gallery-nav .bx-pager'),
          currentPageNum = $navPager.find('a.active').attr('data-slide-index');
usa_debug('setActiveGalleryImageNav(' + slideNum + '), newPageNum: ' + newPageNum + ', currentPageNum: ' + currentPageNum);
      $galleryNav.find('a').removeClass('active2');
      $galleryNav.find('a[data-slide-index="' + slideNum + '"]').addClass('active2');
      if (currentPageNum != newPageNum) {
        $navPager.find('.bx-pager-link[data-slide-index="' + newPageNum + '"]').click();
      }
    },

    setDownloadImageLink: function() {
      var $activeGalleryImage = $('#galleries #gallery-content li.active2'),
          imageSrc = $activeGalleryImage.find('img').attr('src');
      $('#galleries #gallery-content #gallery-download a').attr('href', imageSrc);
    },

    updateImageInfo: function(slideNum, initialPageLoad) {
      var initialPageLoad = initialPageLoad || 0;
      Drupal.behaviors.micrositeGalleriesBxSliders.setActiveGalleryImageNav(slideNum);
      Drupal.behaviors.micrositeGalleriesBxSliders.updateGigyaSharebarOmniture(initialPageLoad);
      Drupal.behaviors.micrositeGalleriesBxSliders.setDownloadImageLink();
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

    activeGalleryNavItem: null,
    galleryIsLoading: null,
/*
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
*/

/*
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
*/
    pagerArray: null,
    setPagerArray: function(minNavSlides) {
      var $navPager = $('#galleries #gallery-nav .bx-pager'),
          numPagerItems = $navPager.find('.bx-pager-item').length,
          $galleryContent = $('#galleries #gallery-content ul.bxslider'),
          numSlides = $galleryContent.find('li').length,
          count = 0,
          pagerArray = [];
      for (var i=0; i < numPagerItems; i++) {
        pagerArray[i] = [];
        for (var j=0; j < minNavSlides; j++) {
          if (count < numSlides) {
            pagerArray[i][j] = count;
            count++;
          }
        }
      }
      return pagerArray;
    },

    attach: function (context, settings) {

      // check to make sure there's a galleries section
      if ($('#microsite #galleries').length > 0) {
        // set defaults
        var wwidth = $(window).width(),
            transitionWidth = 640,
            slideWidth = (wwidth > transitionWidth) ? 250 : 140,
            slideMargin = 10,
            self = this;

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

        $(window).load(function(){
          // initialize viewport/large slider
          $('.bxslider').bxSlider({
            pagerCustom: '#bx-pager',
            infiniteLoop: false,
            hideControlOnEnd: true,
            onSliderLoad: function(){
              setTimeout(function(){
                var galleryNavHeight = parseInt($('#galleries #gallery-content .bxslider img:first').height());
                minNavSlides = Math.round(galleryNavHeight / (slideHeight + slideMargin));

                // initialize navigation/thumbnail slider
                $('#bx-pager').bxSlider({
                  mode: 'vertical',
                  slideWidth: slideWidth,
                  slideHeight: slideHeight,
                  minSlides: minNavSlides,
                  slideMargin: slideMargin,
                  infiniteLoop: false,
                  hideControlOnEnd: true,
                  onSliderLoad: function(){
//                    $('#galleries #gallery-nav .bx-viewport').css({'min-height': galleryNavHeight + 'px'});
                    self.pagerArray = self.setPagerArray(minNavSlides);
usa_debug('galleryNavHeight: ' + galleryNavHeight + ', galleryNavMinSlides: ' + minNavSlides + ', pagerArray: ', self.pagerArray);
                    $('#galleries #gallery-content a.bx-prev, #galleries #gallery-nav a.bx-prev').html('Previous');
                    $('#galleries #gallery-content ul.bxslider li:first').addClass('active2');
                    self.updateImageInfo(0, 1);

                    // initialize next/prev clicks -- only setting active nav elements
                    $('#galleries #gallery-content .bx-controls .bx-next').on('click', function(){
                      var totalNumSlides = $('#galleries #gallery-content ul.bxslider li').length,
                          $activeSlide = $('#galleries #gallery-content ul.bxslider li.active2'),
                          slideNum = (parseInt($activeSlide.attr('data-slide-index')) + 1);
                      if (slideNum < totalNumSlides) {
                        $activeSlide.removeClass('active2').next().addClass('active2');
                        self.updateImageInfo(slideNum);
                      }
                    });
                    $('#galleries #gallery-content .bx-controls .bx-prev').on('click', function(){
                      var $activeSlide = $('#galleries #gallery-content ul.bxslider li.active2'),
                          slideNum = (parseInt($activeSlide.attr('data-slide-index')) - 1);
                      if (slideNum > -1) {
                        $activeSlide.removeClass('active2').prev().addClass('active2');
                        self.updateImageInfo(slideNum);
                      }
                    });

                    // initialize nav button click -- only setting active nav elements
                    $('#galleries #gallery-nav ul#bx-pager a').on('click', function(){
                      var slideNum = parseInt($(this).attr('data-slide-index')),
                          $galleryContent = $('#galleries #gallery-content ul.bxslider');
                      $galleryContent.find('li').removeClass('active2');
                      $galleryContent.find('li[data-slide-index="' + slideNum + '"]').addClass('active2');
                      self.updateImageInfo(slideNum);
                    });
                  }
                });
              }, 2000);
            }
          });

          // set image next/prev hover state
          $('#galleries #gallery-content li, #galleries #gallery-content .bx-controls-direction a').hover(function(){
            $('#galleries #gallery-content .bx-controls-direction a').each(function(){
              if (!$(this).hasClass('disabled')) {
                $(this).css({'display': 'block', 'opacity': 0.8});
              }
            });
          }, function(){
            $('#galleries #gallery-content .bx-controls-direction a').css({'display': 'none', 'opacity': 0});
          });
        });

/*
        $(window).bind('resize', function () {
          self.micrositeReloadSliders();
        });
        window.addEventListener('orientationchange', self.micrositeReloadSliders);
*/
      }
    }
  }
}(jQuery));
