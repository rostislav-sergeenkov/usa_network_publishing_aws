
// search active 
(function ($) {

  Drupal.behaviors.search = {
    attach: function (context, settings) {
      $('.form-type-searchfield label').click(function() {
        $('#utilities').toggleClass('search-active');
      });

      if ($('#search-block-form .form-search').val() != '') {
        $('#utilities').addClass('search-active');
      }
    }
  };


}(jQuery));
