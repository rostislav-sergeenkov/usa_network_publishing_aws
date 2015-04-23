(function ($) {

  Drupal.behaviors.consumptionator_gallery = {
    attach: function (context, settings) {

    }
  };

  var USAN = USAN || {};

  USAN.gallery = (function () {

    function pagerItems(){

      var customPager = $('.bx-wrapper .bx-custom-pager'),
          item = customPager.find('.bx-pager-item'),
          itemLength = item.length,
          controls = $('.bx-controls-direction a');

      if (window.innerWidth >= 1025){
        if (itemLength >= 10){
          customPager.height((30 * 8) + 15);
          height = customPager.height() / 2;
          customPager.css('margin-top', - height + 'px');
        }else if (itemLength < 10){
          customPager.height((30 * itemLength) + 15);
          height = customPager.height() / 2;
          customPager.css('margin-top', - height + 'px');
        }
      }
      if (window.innerWidth < 1025){
        if (itemLength >= 5){
          customPager.height((30 * 4) + 15);
          height = customPager.height() / 2;
          customPager.css('margin-top', - height + 'px');
        }else if (itemLength < 5){
          customPager.height((30 * itemLength) + 15);
          height = customPager.height() / 2;
          customPager.css('margin-top', - height + 'px');
        }
      }

      item.click(function(e){
        e.preventDefault();

        var itemActive = $(this),
            itemActiveIndex = itemActive.index(),
            marginTop = itemActiveIndex * 30;

        if (window.innerWidth >= 1025){
          if (itemLength >= 9){
            if (itemActiveIndex > 3){
              marginTop = marginTop - 120;
              item.eq(0).css('margin-top', - marginTop + 'px');
            }else if (itemActiveIndex <= 3){
              item.eq(0).css('margin-top', 0 + 'px');
            }
          }
        }
        if (window.innerWidth < 1025){
          if (itemLength >= 5){
            if (itemActiveIndex > 2){
              marginTop = marginTop - 60;
              item.eq(0).css('margin-top', - marginTop + 'px');
            }else if (itemActiveIndex <= 2){
              item.eq(0).css('margin-top', 0 + 'px');
            }
          }
        }
      });

      controls.click(function() {

        var pagerlinkActive = customPager.find('.bx-pager-item a.active'),
            pagerLinkParent = pagerlinkActive.parent(),
            pagerIndex = pagerLinkParent.index(),
            marginTop = pagerIndex * 30;

        if (window.innerWidth >= 1025){
          if (itemLength >= 9){
            if (pagerIndex > 3){
              marginTop = marginTop - 120;
              item.eq(0).css('margin-top', - marginTop + 'px');
            }
          }
        }
        if (window.innerWidth < 1025){
          if (itemLength >= 5){
            if (pagerIndex > 2){
              marginTop = marginTop - 60;
              item.eq(0).css('margin-top', - marginTop + 'px');
            }
          }
        }

      });
    }
    var options = {
      auto: false,
      buildPager: function(slideIndex){

        var slide = $('.bxslider-gallery .slide'),
            slideLength = slide.length,
            src = $(slide).eq(slideIndex).find('.asset-img img').attr('src'),
            counter = $(slide).eq(slideIndex).find('.slider-counter'),
            titleGallery = $('.gallery-filter-wrapper .filter-menu a.active').text();

        if(counter.text() === ''){
          counter.append(titleGallery + ' <span class="slide-index">' + (slideIndex + 1) + '</span>' + '<span> of </span>' + '<span class="slide-count"> ' + slideLength + '</span>');
        }

        switch(slideIndex){
          default:
            return '<img src="' + src + '">';
        }
      },
      controls: true,
      infiniteLoop: false,
      hideControlOnEnd: true,
      mode: 'fade',
      nextText: '',
      prevText: '',
      speed: 600,
      adaptiveHeight: true,
      onSliderLoad: pagerItems
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

  $(document).ready(function() {
    // bxslider-gallery slider initialization
    if ($('body').hasClass('node-type-media-gallery')) {
      var gallery = USAN.gallery.init('.bxslider-gallery');

      gallery.mousewheel(function (event, delta, deltaX, deltaY) {
        if (delta > 0) {
          gallery.goToPrevSlide();
          pagerPosition();
          if(gallery.getCurrentSlide() != 0){
            event.stopPropagation();
            event.preventDefault();
          }
        }
        if (deltaY < 0) {
          gallery.goToNextSlide();
          pagerPosition();
          if(gallery.getCurrentSlide() + 1 < gallery.getSlideCount()){
            event.stopPropagation();
            event.preventDefault();
          }
        }
      });

    }

    //todo function for custom pager positions
    function pagerPosition(){

      var customPager = $('.bx-wrapper .bx-custom-pager'),
          item = customPager.find('.bx-pager-item'),
          itemLength = item.length,
          itemActive = $('.bx-pager-item a.active'),
          itemParent = itemActive.parent(),
          itemParentIndex = itemParent.index(),
          marginTop = itemParentIndex * 30;

      if (window.innerWidth >= 1025){
        if (itemLength >= 9){
          if (itemParentIndex > 3){
            marginTop = marginTop - 120;
            item.eq(0).css('margin-top', - marginTop + 'px');
          }else if (itemParentIndex <= 3){
            item.eq(0).css('margin-top', 0 + 'px');
          }
        }
      }
      if (window.innerWidth < 1025){
        if (itemLength >= 5){
          if (itemParentIndex > 2){
            marginTop = marginTop - 60;
            item.eq(0).css('margin-top', - marginTop + 'px');
          }else if (itemParentIndex <= 2){
            item.eq(0).css('margin-top', 0 + 'px');
          }
        }
      }
    }
  });
}(jQuery));
