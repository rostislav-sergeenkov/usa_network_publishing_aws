(function ($) {
Drupal.behaviors.usanetwork_tv_schedule = {
  attach: function(context){

    var today = new Date();
    var today_date = today.toDateString();
    var current_time = today.getTime();
    var on_now_show = '';
    var last_show = '';

    var tz = jstz.determine(); // Determines the time zone of the browser client
    // Display the show based on the user timezone for USA timezones.
    if (tz.name().indexOf('America') >= 0) {
      for (show in tv_schedule['data']) {
        var showtime = new Date(today_date + ' ' + show);
        showtime = showtime.getTime();
        if (current_time < showtime) {
          if (last_show == '') {
            last_show = show;
          }
          on_now_show = tv_schedule['data'][last_show]['show'] + ': ' + tv_schedule['data'][last_show]['episode'];
          break;
        }
        last_show = show;
      }
    } else {
      // Display the default ET show for rest of the world
      on_now_show = on_now_default_show;
    }
    on_now_show = on_now_show.toUpperCase();

    $('#block-usanetwork-tv-schedule-usa-on-now-block .content').html(on_now_show); 
  }
}
})(jQuery);

