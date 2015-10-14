(function ($) {

  var USAN = USAN || {};

  function gigyaSharebar(slide, indexSlide) {
    if (typeof Drupal.gigya != 'undefined') {
      var slider = $('.gallery-wrapper');
      var $sharebar = slider.find('.field-name-field-gigya-share-bar > div');
      if ($sharebar.length > 0) {
        var $currentDescription = slide.find('.slide-info .description').text();
        if ($currentDescription == '' && $('meta[property="og:description"]').length > 0) {
          $currentDescription = $('meta[property="og:description"]').attr('content');
        }
        var $currentImage = slide.find('.asset-img img'),
            url = window.location.href.split('#')[0],
            slideIndex;

        if(indexSlide > 0 ) {
          slideIndex = '#' + (indexSlide + 1);
        } else {
          slideIndex = '';
        }

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

  //make pager position
  function pagerPosition(pager) {
    var pagerItem = pager.find('.bx-pager-item'),
        itemLength = pagerItem.length;

    if (window.innerWidth >= window_size_tablet) {
      var itemHeight = pagerItem.height();

      if (itemLength >= 10) {
        pager.height(itemHeight * 2 * 10 + itemHeight);
      } else if (itemLength < 10) {
        pager.height(itemHeight * 2 * itemLength + itemHeight);
      }

      pager.css('margin-top', - (pager.innerHeight() / 2) + 'px');
    }
    if (window.innerWidth < window_size_tablet) {

      pager.wrap('<div id="bx-custom-pager-wrapper"></div>');

      var pagerWrap = $('#bx-custom-pager-wrapper'),
          itemWidth = pagerItem.width();

      if (itemLength >= 10) {
        pagerWrap.width(itemWidth * 2 * 10)
      } else if (itemLength < 10) {
        pagerWrap.width(itemWidth * 2 * itemLength);
      }
      pager.width(itemWidth * 2 * itemLength).show();
      pagerWrap.height(pagerItem.height());
      pagerWrap.css('margin-right', - ((pagerWrap.innerWidth() / 2)) + 'px');
    }
  }

  //move pager items position
  function movePagerItems(pager, elem) {

    var pagerItem = pager.find('.bx-pager-item'),
        pagerItemLink = pager.find('.bx-pager-link'),
        pagerItemLinkActiveIndex,
        itemLength = pagerItem.length;

    if(elem) {
      pagerItemLinkActiveIndex = elem.find('.bx-pager-link').data('slide-index');
    } else {
      pagerItemLinkActiveIndex = pager.find('.bx-pager-link.active').data('slide-index');
    }

    if (window.innerWidth >= window_size_tablet) {
      var itemHeight = pagerItemLink.innerHeight();
      if (itemLength >= 10) {
        if (pagerItemLinkActiveIndex > 3) {
          var marginTop = pagerItemLinkActiveIndex * (itemHeight * 2) - (itemHeight * 2) * 4;
          pagerItem.eq(0).css('margin-top', - marginTop + 'px');
        } else if (pagerItemLinkActiveIndex <= 3) {
          pagerItem.eq(0).css('margin-top', 0 + 'px');
        }
      }
    }
    if (window.innerWidth < window_size_tablet) {
      var itemWidth = pagerItem.innerWidth();
      if (itemLength >= 10) {
        if (pagerItemLinkActiveIndex > 3) {
          var left = pagerItemLinkActiveIndex * (itemWidth * 2) - (itemWidth * 2) * 4;
          pager.css('left', - left + 'px');
        } else if (pagerItemLinkActiveIndex <= 3) {
          pager.css('left', 0 + 'px');
        }
      }
    }
  }

  USAN.gallery = (function () {

    function pagerItems() {
      var container = $('.gallery-wrapper'),
          pager = container.find('.bx-custom-pager'),
          pagerItem = container.find('.bx-pager-item'),
          pagerItemLink = pager.find('.bx-pager-link'),
          controlsButtons = container.find('.bx-controls-direction a');

      //make pager position
      pagerPosition(pager);

      pagerItem.on('click', function (e) {
        e.preventDefault();
        //move pager items position
        movePagerItems(pager, $(this));
      });

      controlsButtons.on('click', function () {
        //move pager items position
        movePagerItems(pager);
      });

      var index = $('.gallery-wrapper .bx-custom-pager .bx-pager-link.active').data('slide-index');

      $('#bxslider-gallery .slide').eq(index).addClass('active');
      $('#bxslider-gallery').removeClass('on-load');

    }

    var options = {
      auto: false,
      buildPager: function (slideIndex) {

        var slide = $('#bxslider-gallery .slide'),
            slideLength = slide.length,
            src = $(slide).eq(slideIndex).find('.asset-img img').attr('src'),
            counter = $(slide).eq(slideIndex).find('.slider-counter'),
            slideIndexBlock = $(slide).eq(slideIndex).find('.slider-counter .slide-index');

        if(slideIndexBlock.text() == '') {
          slideIndexBlock.text((slideIndex + 1) + ' of ' + slideLength);
        }

        switch (slideIndex) {
          default:
            return '<div class="show-color"></div><img src="' + src + '">';
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
      onSliderLoad: pagerItems,
      onSlideBefore: function ($slideElement, oldIndex, newIndex) {

        $('#bxslider-gallery .slide').removeClass('active');

        //var name = $('.gallery-wrapper .slide .gallery-name').eq(0).text();
        //Drupal.behaviors.omniture_tracking.newPageView(name);

        if (typeof s_gi != 'undefined') {
          if (Drupal.settings.umbel_settings !== undefined) {
            var showName = Drupal.settings.umbel_settings.usa_umbel_param_1,
                pageName = Drupal.settings.umbel_settings.usa_umbel_param_2;
          }
          s.linkTrackVars = 'events,prop3,prop4';
          s.prop3 = 'Gallery';
          s.prop4 = showName.trim() + ' : ' + pageName.trim();

          void (s.t());
        }
      },
      onSlideAfter: function ($slideElement, oldIndex, newIndex) {

        var index = $('.gallery-wrapper .bx-custom-pager .bx-pager-link.active').data('slide-index'),
            slide = $('#bxslider-gallery .slide').eq(index).addClass('active');

        gigyaSharebar(slide, index);

        if ($('body').hasClass('node-type-media-gallery')) {
          Drupal.behaviors.mpsAdvert.mpsRefreshAd([Drupal.behaviors.mpsAdvert.mpsNameAD.topbox, Drupal.behaviors.mpsAdvert.mpsNameAD.topbanner]);
        }
      }
    };

    var init = function (selector) {
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
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  function initMouseWhell(elem) {
    elem.mousewheel(function (event, delta, deltaX, deltaY) {
      var pager = $('.gallery-wrapper .bx-custom-pager');

      if (delta > 0) {
        elem.goToPrevSlide();
        movePagerItems(pager);
        if (elem.getCurrentSlide() != 0) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
      if (deltaY < 0) {
        elem.goToNextSlide();
        movePagerItems(pager);
        if (elem.getCurrentSlide() + 1 < elem.getSlideCount()) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    });
  }

  $(document).ready(function () {
    // bxslider-gallery slider initialization
    if ($('body').hasClass('node-type-media-gallery') || $('body').hasClass('node-type-tv-episode') || $('body').hasClass('node-type-consumpt-post')) {

      if ($('#bxslider-gallery').length == 0) {
        return false;
      }
      gallery = USAN.gallery.init('#bxslider-gallery');

      var index = 0,
          slide = $('#bxslider-gallery .slide').eq(0);

      gigyaSharebar(slide, index);

      if(window.innerWidth < window_size_tablet) {
        $('#bxslider-gallery').addClass('mobile');
      }

      if(window.innerWidth > window_size_tablet) {
        initMouseWhell(gallery);
      }

      $(window).load(function () {

        var hash = window.location.hash;
        if (hash) {
          $current = /\d+/.exec(hash)[0];
          $current = (parseInt($current) || 1) - 1;

          var slideCount = $('.gallery-wrapper .slide').last().index(),
              pager = $('.gallery-wrapper .bx-custom-pager');

          if ($current <= slideCount) {
            gallery.goToSlide($current);
            movePagerItems(pager);
          }
        }
      });

      $(window).bind('resize', function () {
        waitForFinalEvent(function(){
          var pagerItemLinkActiveIndex = $('.gallery-wrapper .bx-pager-link.active').data('slide-index');

          if(window.innerWidth < window_size_tablet) {
            if(!$('#bxslider-gallery').hasClass('mobile')){
              $('#bxslider-gallery').addClass('mobile');
              gallery.reloadSlider();
              gallery.goToSlide(pagerItemLinkActiveIndex);
              gallery.unmousewheel();
              movePagerItems($('.gallery-wrapper .bx-custom-pager'));
            }
          }
          if(window.innerWidth > window_size_tablet) {
            if($('#bxslider-gallery').hasClass('mobile')){
              $('#bxslider-gallery').removeClass('mobile');
              gallery.reloadSlider();
              gallery.goToSlide(pagerItemLinkActiveIndex);
              initMouseWhell(gallery);
              setTimeout(function () {
                movePagerItems($('.gallery-wrapper .bx-custom-pager'));
              }, 1000);
            }
          }
        }, 0, "consumptionator gallery");
      });
    }
  });

}(jQuery));
