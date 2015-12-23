(function ($) {
  Drupal.behaviors.lazy_load_custom = {
    attach: function (context, settings) {
      $('.best-of-block').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: false,

        callbackFunction: function(elem, action){
          elem.find('.asset-img').each(function(){
            $(this).attr('data-picture', '');
          });
          if (typeof window.picturefill != 'undefined') {
            window.picturefill();
          }
        }
      });
    },
    windowView: function (image){
      // window variables
      var $window = $(window);
      var windowHeight = $window.height(),
          windowWidth  = $window.width(),

          windowBottom = windowHeight + $window.scrollTop(),
          windowTop    = windowBottom - windowHeight,
          windowRight  = windowWidth + $window.scrollLeft(),
          windowLeft   = windowRight - windowWidth,

      // image variables
          imageHeight  = image.height(),
          imageWidth   = image.width(),

          imageTop     = image.offset().top,
          imageBottom  = imageTop + imageHeight,
          imageLeft    = image.offset().left,
          imageRight   = imageLeft + imageWidth;

      // This will return true if any corner of the image is within the screen
      return (((windowBottom >= imageTop) && (windowTop <= imageTop)) || ((windowBottom >= imageBottom) && (windowTop <= imageBottom))) &&
          (((windowRight >= imageLeft) && (windowLeft <= imageLeft)) || ((windowRight >= imageRight) && (windowLeft <= imageRight)));
    },
    loadImage: function(image){
      image.hide().attr('src', image.data('src')).removeAttr('data-src').removeClass('nolazyload');
      image.load(function() {
        image.siblings('img.lazyloader-icon').remove();
      });
    },
    galleryLazyLoadScroll: function (items) {
      $.each(items, function (i, carousel_item) {
        var image = $(carousel_item).find('img[data-src]');
        if(image.attr('data-src')){
          var imageHeight = image.height(), imageWidth = image.width();
          var iconTop = Math.round(imageHeight/2), iconLeft = Math.round(imageWidth/2), iconFactor = Math.round(image.siblings('img.lazyloader-icon').height()/2);
          image.siblings('img.lazyloader-icon').css({ top: iconTop - iconFactor, left: iconLeft - iconFactor });
          if (Drupal.behaviors.lazy_load_custom.windowView(image)) {
            Drupal.behaviors.lazy_load_custom.loadImage(image);
            image.fadeIn('slow');
          }
        }
      });
    }
  };
}(jQuery));
