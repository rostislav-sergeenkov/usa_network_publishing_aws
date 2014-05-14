
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
      
      $('.usa-twitter-share').on('click', function() {
        var url = $(this).attr('url');
        var x = (screen.width/2) - (536/2);
        var y = (screen.height/2) - (450/2);
        window.open(url,'Twitter Follow','width=536,height=450,top=' + y + ',left=' + x);
      });
    }
  };


}(jQuery));
