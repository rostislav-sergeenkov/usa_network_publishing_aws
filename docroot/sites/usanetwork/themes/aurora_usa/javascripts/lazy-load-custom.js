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
    }
  };
}(jQuery));
