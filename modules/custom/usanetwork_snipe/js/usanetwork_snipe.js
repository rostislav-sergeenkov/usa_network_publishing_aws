(function ($) {
Drupal.behaviors.usanetwork_snipe = {
  attach: function(context){
    setInterval(function () {
      var today = new Date();

      for (i=0; i<snipe.length; i++) {
        var start = new Date(snipe[i].start);
        var end = new Date(snipe[i].end);
        if (start < today && today < end) {
          $('#'+snipe[i].id).show(1000); 
        } else {
          $('#'+snipe[i].id).hide(1000); 
        }
      }
    }, 10000);
  }
}
})(jQuery);
