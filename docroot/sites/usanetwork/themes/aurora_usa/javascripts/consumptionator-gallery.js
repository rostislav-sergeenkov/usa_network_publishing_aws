(function ($) {

  var USAN = USAN || {};

  function gigyaSharebar(galleryContainer, slide, indexSlide) {
    if (typeof Drupal.gigya != 'undefined') {
      var slider = galleryContainer;
      var $sharebar = slider.find('.field-name-field-gigya-share-bar > div');
      if ($sharebar.length > 0) {
        var $currentDescription = slide.find('.slide-info .description').text();
        if ($currentDescription.trim() == '' && $('meta[property="og:description"]').length > 0) {
          $currentDescription = $('meta[property="og:description"]').attr('content');
        }
        var $currentImage = slide.find('.asset-img img'),
            url = window.location.href.split('#')[0],
            slideIndex;
        if (galleryContainer.attr('data-id')) {
          var galleryId = galleryContainer.attr('data-id') + "-";
        }
        if (indexSlide > 0 || galleryContainer.closest('.description-item[data-tab="actor-bio"]').length > 0) {
          slideIndex = '#' + galleryId + (indexSlide + 1);
        } else {
          slideIndex = '';
        }

        if ($('body').hasClass('page-node-microsite')) {
          return;
        } else {
          $.each(Drupal.settings.gigyaSharebars, function (index, sharebar) {
            if (sharebar.gigyaSharebar.containerID == $sharebar.attr('id')) {
              var url = window.location.href.split('#')[0];
              sharebar.gigyaSharebar.ua.linkBack = url + slideIndex;
              sharebar.gigyaSharebar.ua.imageBhev = 'url';
              sharebar.gigyaSharebar.ua.imageUrl = $currentImage.attr('data-src-share') ? $currentImage.attr('data-src-share') : $currentImage.attr('src');
              sharebar.gigyaSharebar.ua.description = $currentDescription;
              Drupal.gigya.showSharebar(sharebar);
            }
          });
        }
      }
    }
  }

  //make pager position
  function pagerPosition(pager) {
    var pagerItem = pager.find('.bx-pager-item'),
        itemLength = pagerItem.length;
    if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {
      var itemHeight = pagerItem.height();

      if (itemLength >= 10) {
        pager.height(itemHeight * 2 * 10 + itemHeight);
      } else if (itemLength < 10) {
        pager.height(itemHeight * 2 * itemLength + itemHeight);
      }

      pager.css('margin-top', -(pager.innerHeight() / 2) + 'px');
    }
    if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {

      pager.wrap('<div class="bx-custom-pager-wrapper"></div>');

      var pagerWrap = pager.parent(),
          itemWidth = pagerItem.width();

      if (itemLength >= 10) {
        pagerWrap.width(itemWidth * 2 * 10)
      } else if (itemLength < 10) {
        pagerWrap.width(itemWidth * 2 * itemLength);
      }
      pager.width(itemWidth * 2 * itemLength).show();
      pagerWrap.height(pagerItem.height());
      pagerWrap.css('margin-right', -((pagerWrap.innerWidth() / 2)) + 'px');
    }
  }

  //move pager items position
  function movePagerItems(pager, elem) {

    var pagerItem = pager.find('.bx-pager-item'),
        pagerItemLink = pager.find('.bx-pager-link'),
        pagerItemLinkActiveIndex,
        itemLength = pagerItem.length;

    if (elem) {
      pagerItemLinkActiveIndex = elem.find('.bx-pager-link').data('slide-index');
    } else {
      pagerItemLinkActiveIndex = pager.find('.bx-pager-link.active').data('slide-index');
    }

    if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {
      var itemHeight = pagerItemLink.innerHeight();
      if (itemLength >= 10) {
        if (pagerItemLinkActiveIndex > 3) {
          var marginTop = pagerItemLinkActiveIndex * (itemHeight * 2) - (itemHeight * 2) * 4;
          pagerItem.eq(0).css('margin-top', -marginTop + 'px');
        } else if (pagerItemLinkActiveIndex <= 3) {
          pagerItem.eq(0).css('margin-top', 0 + 'px');
        }
      }
    }
    if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {
      var itemWidth = pagerItem.innerWidth();
      if (itemLength >= 10) {
        if (pagerItemLinkActiveIndex > 3) {
          var left = pagerItemLinkActiveIndex * (itemWidth * 2) - (itemWidth * 2) * 4;
          pager.css('left', -left + 'px');
        } else if (pagerItemLinkActiveIndex <= 3) {
          pager.css('left', 0 + 'px');
        }
      }
    }
  }

  function pagerItems(container) {
    var pager = container.find('.bx-custom-pager');
    //make pager position
    pagerPosition(pager);

    var index = container.find('.bx-custom-pager .bx-pager-link.active').data('slide-index');

    container.find('.slide').eq(index).addClass('active');
    container.find('.bxslider').removeClass('on-load');
  }

  USAN.gallery = (function () {

    var init = function (selector, options) {
      if ($(selector).length) {
        return $(selector).bxSlider(options);
      }
      return 0;
    };

    return {
      init: init
    }
  })();

  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  function initMouseWhell(elem) {
    elem.mousewheel(function (event, delta, deltaX, deltaY) {
      if (delta > 0) {
        elem.goToPrevSlide();
        if (elem.getCurrentSlide() != 0) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
      if (deltaY < 0) {
        elem.goToNextSlide();
        if (elem.getCurrentSlide() + 1 < elem.getSlideCount()) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    });
  }

  // gallery advert
  function showGalleryAd(adWrap, adBlock, adNext, refresh) {

    var adBlockId = adBlock.attr('id'),
        nameAd = Drupal.behaviors.mpsAdvert.mpsNameAD.galleryadrepeat;

    if (refresh) {
      Drupal.behaviors.mpsAdvert.mpsRefreshAd(nameAd);
    } else {
      Drupal.behaviors.mpsAdvert.mpsInsertInterstitial('#' + adBlockId);
    }

    var showNextTimeout = setTimeout(function () {
      adNext.show();
      console.info('timeoutNextShow');
    }, 5000);

    adWrap.velocity("fadeIn", {
      duration: 200,
      easing: "linear",
      complete: function (element) {
        $(element).addClass('active');
      }
    });

    mps.adviewCallback = function(eo){
      if(eo._mps._slot.indexOf(nameAd) === 0) {
        adNext.show();
        clearInterval(showNextTimeout);
      }
    };
  }

  function hideGalleryAd(adWrap, adBlock, adNext) {
    adWrap.velocity("fadeOut", {
      duration: 100,
      easing: "linear",
      complete: function (element) {
        $(element).removeClass('active');
        //adBlock.empty();
        adNext.hide();
      }
    })
  }

  $(document).ready(function () {
    // bxslider-gallery slider initialization
    if ($('body').hasClass('node-type-media-gallery') || $('body').hasClass('node-type-tv-episode') || $('body').hasClass('node-type-consumpt-post') || $('.gallery-wrapper').parent().hasClass('view-mode-inline_content')) {
      if ($('.gallery-wrapper').length == 0) {
        return false;
      }
      gallery = [];
      $('.gallery-wrapper').each(function (i, el) {
        var galleryContainer = $(this),
            currentGallery = galleryContainer.find('.bxslider-gallery'),
            slideElem = currentGallery.find('.slide'),
            advertWrap = galleryContainer.find('.interstitial-wrap'),
            advertBlock = advertWrap.find('.interstitial-block'),
            advertNext = advertWrap.find('.interstitial-next'),
            adSlidesCount = parseInt(advertWrap.data('slides-counter'), 10),
            advertCounter = 0,
            refreshAD = false,
            showColorPager = ($('body[class*=" show-"]').length > 0)? ' class="show-color"': '',
            options = {
              auto: false,
              buildPager: function (slideIndex) {

                var slide = slideElem,
                    slideLength = slide.length,
                    src = $(slide).eq(slideIndex).find('.asset-img img').attr('src'),
                    counter = $(slide).eq(slideIndex).find('.slider-counter'),
                    slideIndexBlock = $(slide).eq(slideIndex).find('.slider-counter .slide-index');
                if (slideIndexBlock.text() == '') {
                  slideIndexBlock.text((slideIndex + 1) + ' of ' + slideLength);
                }
                switch (slideIndex) {
                  default:
                    return '<div'+showColorPager+'></div><img src="' + src + '">';
                }
              },
              controls: true,
              infiniteLoop: false,
              hideControlOnEnd: true,
              mode: 'fade',
              nextText: '',
              prevText: '',
              adaptiveHeight: true,
              adaptiveHeightSpeed: 200,
              speed: 600,
              preloadImages: 'all',
              responsive: true,
              onSliderLoad: function () {
                setTimeout(function () {
                  pagerItems(galleryContainer);
                }, 200);
              },
              onSlideBefore: function ($slideElement, oldIndex, newIndex) {
                slideElem.removeClass('active');

                // advert counter up +1
                advertCounter += 1;

                // if advertCounter = slidesCount fire show gallery advert
                if (advertWrap.length > 0 && advertCounter === adSlidesCount) {
                  // reset advert counter
                  advertCounter = 0;
                  // show gallery ad
                  showGalleryAd(advertWrap, advertBlock, advertNext, refreshAD);
                  refreshAD = true;
                }

                //var name = $('.gallery-wrapper .slide .gallery-name').eq(0).text();
                //Drupal.behaviors.omniture_tracking.newPageView(name);

                if (typeof s_gi != 'undefined') {

                  if ($('body').hasClass('node-type-tv-episode')) {
                    if (Drupal.settings.umbel_settings !== undefined) {
                      var showName = Drupal.settings.umbel_settings.usa_umbel_param_1,
                          pageName = Drupal.settings.umbel_settings.usa_umbel_param_2;
                    }

                    s.linkTrackVars = 'events,prop3,prop4,prop5';
                    s.prop3 = 'Gallery';
                    s.prop4 = showName.trim() + ' : ' + pageName.trim();
                    s.prop5 = 'Episodic Gallery';
                  }

                  void (s.t());
                }
              },
              onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                var index = galleryContainer.find('.bx-custom-pager .bx-pager-link.active').data('slide-index'),
                    slide = slideElem.eq(index).addClass('active'),
                    pager = galleryContainer.find('.bx-custom-pager');
                gigyaSharebar(galleryContainer, slide, index);
                movePagerItems(pager);
                if ($('body').hasClass('node-type-media-gallery')) {
                  Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
                }
                if ($('body').hasClass('node-type-tv-episode') || $('body').hasClass('node-type-consumpt-post')) {
                  Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox]);
                  if (!$('.region-header').hasClass('sticky-shows-submenu')) {
                    Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
                  }
                }
              }
            };
        gallery[i] = USAN.gallery.init(currentGallery, options);
        var index = 0,
            slide = currentGallery.find('.slide').eq(0);
        gigyaSharebar(galleryContainer, slide, index);

        if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {
          currentGallery.addClass('mobile');
        }

        if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {
          initMouseWhell(gallery[i]);
        }

        // hide gallery ad
        advertNext.on('click', function () {
          hideGalleryAd(advertWrap, advertBlock, advertNext);
        });
      });

      $(window).load(function () {
        var hash = window.location.hash;
        if (hash) {
          var params = (hash.substr(1)).split("-");
          var slide, galleryId;
          switch (params.length) {
            case 1:
              slide = (parseInt(params[0]) || 1) - 1;
              var slideCount = $('.gallery-wrapper .slide').last().index();
              if (slide <= slideCount) {
                gallery[0].goToSlide(slide);
              }
              break;
            case 2:
              slide = (parseInt(params[1]) || 1) - 1;
              var slideCount = $('.gallery-wrapper[data-id="' + params[0] + '"] .slide').last().index();
              var galleryIndex = $('.gallery-wrapper').index($('.gallery-wrapper[data-id="' + params[0] + '"]'));
              if (slide <= slideCount) {
                gallery[galleryIndex].goToSlide(slide);
              }
              if ($('body').hasClass('node-type-person') && $('[data-tab="actor-bio"] .gallery-wrapper[data-id="' + params[0] + '"]').length > 0) {
                $('[data-tab$="-bio"]').removeClass('active');
                $('[data-tab="actor-bio"]').addClass('active');
              }
              break;
          }
        }
      });

      $(window).bind('resize', function () {
        waitForFinalEvent(function () {
          var i = 0;
          $('.gallery-wrapper').each(function () {
            var galleryContainer = $(this);
            var pagerItemLinkActiveIndex = galleryContainer.find('.bx-pager-link.active').data('slide-index');
            var currentGallery = galleryContainer.find('.bxslider-gallery');

            if (window.matchMedia("(max-width: " + window_size_tablet_1024 + "px)").matches || $('body').hasClass('node-type-person') || $('body').hasClass('node-type-post')) {
              if (!currentGallery.hasClass('mobile')) {
                console.info('mobile');
                currentGallery.addClass('mobile');
                gallery[i].reloadSlider();
                gallery[i].goToSlide(pagerItemLinkActiveIndex);
                gallery[i].unmousewheel();
                movePagerItems(galleryContainer.find('.bx-custom-pager'));
              }
            }
            if (window.matchMedia("(min-width: " + window_size_tablet + "px)").matches && !$('body').hasClass('node-type-person') && !$('body').hasClass('node-type-post')) {
              if (currentGallery.hasClass('mobile')) {
                currentGallery.removeClass('mobile');
                gallery[i].reloadSlider();
                gallery[i].goToSlide(pagerItemLinkActiveIndex);
                initMouseWhell(gallery[i]);
                setTimeout(function () {
                  movePagerItems(galleryContainer.find('.bx-custom-pager'));
                }, 1000);
              }
            }
            i++;
          });

        }, 0, "consumptionator gallery");
      });
    }
  });

}(jQuery));
