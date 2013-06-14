
// search active 
(function ($) {

  Drupal.behaviors.search = {
    attach: function (context, settings) {

      $('.form-type-searchfield label').click(function() {
        $('#utilities').toggleClass('search-active');
        
      });

    },

  };


}(jQuery));
