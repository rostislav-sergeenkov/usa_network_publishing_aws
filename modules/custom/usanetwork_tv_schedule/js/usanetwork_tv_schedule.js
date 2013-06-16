(function ($) {
Drupal.behaviors.usanetwork_tv_schedule = {
  attach: function(context){

    Date.prototype.stdTimezoneOffset = function() {
      var jan = new Date(this.getFullYear(), 0, 1);
      var jul = new Date(this.getFullYear(), 6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    }
    
    Date.prototype.dst = function() {
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }
    
    var today = new Date();
    var today_date = today.toDateString();
    var current_time = today.getTime();
    var on_now_show = '';
    var last_show = '';
    
    // convert milliseconds to second to match php time value
    var show_time = Math.floor(current_time/1000);
    
    // Determines the time zone of the browser client
    var tz = jstz.determine();

    // Display the show based on the user timezone for USA timezones.
    switch (tz.name()) {
      // ET
      case 'America/New_York':
        show_time = show_time + 0;
      break;
      // CT: ET+1
      case 'America/Chicago':
        show_time = show_time + 0;
      break;       
      // MT: ET+2
      case 'America/Denver':
        show_time = show_time + 0;
      break;       
      // Arizona TZ: use the MT rule: ET+2
      case 'America/Phoenix':
        show_time = show_time - 3600;
      break;       
      // PT
      case 'America/Los_Angeles':
        show_time = show_time - 10800;
      break;
      // AT: ET+1
      case 'America/Anchorage':
        show_time = show_time - 10800;
      break;
      // HT: ET+3
      case 'Pacific/Honolulu':
        show_time = show_time - 10800;
      break;
      // Display the default ET show for rest of the world
      default:
        on_now_show = on_now_default_show;
      break;
    }

    if (on_now_show == '' && tv_schedule != '') {
      for (var i=0; i<tv_schedule.length; i++) {
        if (show_time < tv_schedule[i]['ts']) {
          on_now_show = tv_schedule[i]['link'];
          on_now_text = tv_schedule[i]['episode_name'];
          next_up_text = tv_schedule[i+1]['episode_name'];
          on_now_default_show_nid = tv_schedule[i]['nid'];
          next_up_default_show_nid = tv_schedule[i+1]['nid'];
          break;
        }
        on_now_show = tv_schedule[i]['link'];
        on_now_default_show_nid = tv_schedule[i]['nid'];
      }
    } else if (tv_schedule == '') {
      on_now_show = on_now_default_show;
    }

    $.ajax({
      url: "/usa-on-now-panel-js/"+on_now_default_show_nid+"/"+next_up_default_show_nid+"?on_now="+on_now_text+"&next_up="+next_up_text,
    }).done(function ( data ) {
      $('#block-usanetwork-tv-schedule-usa-on-now-panel .content').html(data); 
    });
    $('#block-usanetwork-tv-schedule-usa-on-now-block .content').html(on_now_show); 
  }
}
})(jQuery);

