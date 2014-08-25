(function ($) {
Drupal.behaviors.usanetwork_snipe = {
  attach: function(context){
    if (!$('body').hasClass('snipe-js-processed')) {
      var close = true;
      setInterval(function () {
        var today = new Date();
  
        for (i=0; i<snipe.length; i++) {
          var start = new Date(snipe[i].start);
          var end = new Date(snipe[i].end);
          if (start < today && today < end && close) {
            $('#'+snipe[i].id).show(1000).closest('.primary-nav').addClass('snipe-active'); 
          } else {
            $('#'+snipe[i].id).hide(1000).closest('.primary-nav').removeClass('snipe-active'); 
          }

          $('.block-usanetwork-snipe .close').on('click', function() {
            $(this).closest('.primary-nav').removeClass('snipe-active');
            $(this).closest('.block-usanetwork-snipe').find('.snipe-msg').hide(1000);
              close = false;
          });
        }
      }, 1000);
      $('body').addClass('snipe-js-processed');
    }
  }
}
})(jQuery);
