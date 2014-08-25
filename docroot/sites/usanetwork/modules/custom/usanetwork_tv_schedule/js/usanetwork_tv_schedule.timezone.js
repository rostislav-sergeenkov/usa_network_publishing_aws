(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_timezone = {
    attach: function(context) {
      var today = new Date();
      var timezone = jstz.determine();
   
      var jan1 = new Date(today.getFullYear(), 0, 1, 0, 0, 0, 0);
      var temp = jan1.toGMTString();
      var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
      var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);
      
      var june1 = new Date(today.getFullYear(), 6, 1, 0, 0, 0, 0);
      temp = june1.toGMTString();
      var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ")-1));
      var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);
      var usa_offset;
      if (std_time_offset == daylight_time_offset) {
        usa_offset = std_time_offset;
      } else {
        usa_offset = daylight_time_offset;
      }
      
//      var usa_time_cookie = jQuery.cookie('usa_time');
//      if (usa_time_cookie) {
        $.ajax({ 
          type: "GET",
          url: "/usanetwork_get_user_timezone",
          data: {usa_time: timezone.name(), usa_offset: usa_offset}
        });
//      } 
//      else {
//        $.ajax({ 
//          type: "GET",
//          url: "/usanetwork_get_user_timezone",
//          data: {usa_time: timezone.name(), usa_offset: usa_offset},
//          success: function(){
//            location.reload();
//          }
//        });
//      }
    }
  }
})(jQuery);
