(function ($) {
  var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

  Drupal.behaviors.countdown = {

    getNextEvent: function () {
      //usa_debug('getNextEvent()');
      currentDateTime = Date.parse('now');
      todayAtEventTime = Date.parse('today').set({hour: hour, minute: minute});
      wednesdayAtEventTime = Date.today().next().wednesday().set({hour: hour, minute: minute});
      nextEventDate;
      // currentDateTime: Fri Jun 27 2014 13:08:38 GMT-0500 (CDT)
      // Tue Jul 01 2014 00:00:00 GMT-0500 (CDT)
      // if today is wednesday
      if (currentDateTime.is().wednesday()) {
        // check to see if it's before or after the event
        // if before the event
        if (currentDateTime < todayAtEventTime) {
          nextEventDate = todayAtEventTime;
        }
        // after the event
        else {
          nextEventDate = wednesdayAtEventTime;
        }
      }
      // it's not wednesday
      else {
        nextEventDate = wednesdayAtEventTime;
      }

      //usa_debug('getNextEvent => currentDateTime: ' + currentDateTime + '\ntodayAtEventTime: ' + todayAtEventTime + '\nwednesdayAtEventTime: ' + wednesdayAtEventTime + '\nnextEventDate: ' + nextEventDate);

      year = nextEventDate.getFullYear();
      month = nextEventDate.getMonth() + 1;
      day = nextEventDate.getDate();

      Drupal.behaviors.countdown.eventCountdown(year, month, day, hour, minute, tz);
    },

    eventCountdown: function (yr, m, d, hr, min, tz) {
      //usa_debug('fn: eventCountdown('+yr+', '+m+', '+d+', '+hr+', '+min+', '+tz+')');
      var theyear = yr,
          themonth = m - 1,
          theday = d,
          thehour = (hr <= 9) ? '0' + hr : hr,
          theminute = (min <= 9) ? '0' + min : min,

          today=new Date(),
          todayy=today.getYear();

      if (todayy < 1000) {
        todayy+=1900;
      }

      var todaym=today.getMonth(),
          todayd=today.getDate(),
          todayh=today.getHours(),
          todaymin=today.getMinutes(),
          todaysec=today.getSeconds(),

          todaystring1 = montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec,
          futurestring1 = montharray[themonth]+" "+theday+", "+theyear+" "+thehour+":"+theminute+":00",
          futurestring = new Date(futurestring1)-(today.getTimezoneOffset()*(1000*60)),
          todaystring = new Date(todaystring1);

      todaystring = todaystring.valueOf() + (tz*1000*60*60);

      var dd = futurestring - todaystring,
          dday=Math.floor(dd/(60*60*1000*24)*1),
          dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1),
          dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1),
          dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

      //usa_debug('futurestring1: '+futurestring1+'\ntodaystring1: '+todaystring1+'\nfuturestring: '+futurestring+'\ntodaystring: '+todaystring);
      //usa_debug('dd: '+dd);
      //usa_debug('dday: ' + dday + '\ndhour: ' + dhour + '\ndmin: ' + dmin + '\ndsec: ' + dsec);

      // make sure the container div is present
      count2 = document.getElementById('count2');
      if (typeof count2 != 'undefined' && count2 != null)
      {
        //usa_debug('dday: '+dday+'\ndhour: '+dhour+'\ndmin: '+dmin+'\ndsec: '+dsec);
        // it's time
        if (dday<=0 && dhour<=0 && dmin<=0 && dsec<=0)
        {
          //usa_debug('it is time!');
          // if countdown is zero on pageload
          // get the next event with no messaging or delays
          // and re-start the timer
          if (Drupal.behaviors.countdown.zeroOnPageLoad) {
            Drupal.behaviors.countdown.getNextEvent();
          }
          else {
            // countdown reached zero
            // hide the countdown timer and tune-in
            document.getElementById('home-countdown').style.visibility = 'hidden';
/*
            // show a message and then in 1 minute, restart the countdown
            jQuery('#section_countdown h3').first().css('display', 'none');
            jQuery('#countHolder').before('<h2>An All New Episode Has Started!<br><a href="http://www.usanetwork.com/videos/live" target="_blank">Watch It Now!</a></h2>');
            jQuery('#countdown h1').addClass('its-time');
            jQuery('#countHolder').css('display', 'none');
            jQuery('#countdown p').css('display', 'none');

            setTimeout(function(){
              jQuery('#section_countdown h3').first().css('display', 'block');
              jQuery('#countdown h2').remove();
              jQuery('#countHolder').css('display', 'block');
              jQuery('#countdown p').css('display', 'block');
              Drupal.behaviors.countdown.getNextEvent();
            }, 60 * 60 * 1000); // 1 hr
*/
          }
          return;
        }
        // not time yet
        else
        {
          //usa_debug('not time yet');
          zeroOnPageLoad = 0;
          document.getElementById('count2').style.display="none";
          document.getElementById('dday').innerHTML=dday;
          document.getElementById('dhour').innerHTML=dhour;
          document.getElementById('dmin').innerHTML=dmin;
          if (document.getElementById('dsec')) {
            document.getElementById('dsec').innerHTML=dsec;
          }
          document.getElementById('home-countdown').style.visibility = 'visible';
          setTimeout(function() {
            Drupal.behaviors.countdown.eventCountdown(yr, m, d, hr, min, tz);
          }, 1000);
        }
      }
      else
      {
        setTimeout(function() {
          Drupal.behaviors.countdown.eventCountdown(yr, m, d, hr, min, tz);
        }, 1000);
      }
    },

    attach: function() {

      var current="Wednesday 10/9C",	//-->enter what you want the script to display when the target date and time are reached, limit to 20 characters
          year = 2016,    //-->Enter the count down target date YEAR
          month = 5,      //-->Enter the count down target date MONTH
          day = 18,       //-->Enter the count down target date DAY
          hour = 22,      //-->Enter the count down target date HOUR (24 hour clock)
          minute = 0,     //-->Enter the count down target date MINUTE
          second = '00',
          msec = '00',
          tz = '-04';        //-->Offset for your timezone in hours from UTC (see http://wwp.greenwichmeantime.com/index.htm to find the timezone offset for the location)


      //----    DO NOT CHANGE THE CODE BELOW!    ----
      var wHostName = window.location.hostname,
          usa_debugFlag = (wHostName.indexOf('local') > 0 || wHostName.indexOf('qa.') > 0) ? 1 : 0;
      function usa_debug(msg, obj) {
        if (usa_debugFlag && typeof console != 'undefined') {
          obj = obj || null;
          console.log(msg);
          if (obj != null) {
            console.log(obj);
          }
        }
      }

      var currentDateTime = Date.parse('now'),
          showPremiereTimeET = new Date(montharray[(month - 1)] + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ':' + second + ' GMT' + tz + '00');

      //console.log('currentDateTime: ' + currentDateTime + ', showPremiereTimeET: ' + showPremiereTimeET );

      // if we've already counted down to the premiere,
      // now countdown to the finale
      if (currentDateTime > showPremiereTimeET) {
        var month = 7,
            day = 6,
            minute = 1;
        jQuery('#until').html('UNTIL THE ROYAL PAINS FINALE<br>JULY 6, 10/9C');
      }

      // NEW CODE TO ALLOW COUNTDOWN RESET TO THE SAME TIME NEXT WEEK ON WEDNESDAY
      // set zeroOnPageLoad to 1 for this to happen
      var todayAtEventTime = Date.parse('today').set({hour: hour, minute: minute}),
          wednesdayAtEventTime = Date.today().next().wednesday().set({hour: hour, minute: minute}),
          nextEventDate,
          zeroOnPageLoad = 0,
          count2 = null,
          self = this;

      self.eventCountdown(year, month, day, hour, minute, tz);

    }
  }
}(jQuery));
