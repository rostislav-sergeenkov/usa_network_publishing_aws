(function($) {

  Drupal.behaviors.mpsCopyLink = {
    attach: function (context, settings) {

      $('#copy-link').on('click', function (e) {
        e.preventDefault();
        $("#mps-json").select();
      });
    }
  };

})(jQuery);
