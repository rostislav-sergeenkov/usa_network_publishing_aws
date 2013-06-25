(function ($) {
Drupal.behaviors.usanetwork_snipe = {
  attach: function(context){
    setInterval(function () {
      var today = new Date();
      var current_time = today.getTime();
      
      // convert milliseconds to second to match php time value
      current_time = Math.floor(current_time/1000);

      for (i=0; i<snipe.length; i++) {
        if (snipe[i].start < current_time && current_time < snipe[i].end) {
          $('#'+snipe[i].id).show(1000); 
        } else {
          $('#'+snipe[i].id).hide(1000); 
        }
      }
    }, 60000);
  }
}
})(jQuery);
