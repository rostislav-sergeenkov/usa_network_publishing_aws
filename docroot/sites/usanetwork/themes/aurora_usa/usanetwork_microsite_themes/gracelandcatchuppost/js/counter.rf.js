(function ($) {
  var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

  Drupal.behaviors.countdown = {

    getNextEvent: function () {
      //usa_debug('getNextEvent()');
      currentDateTime = Date.parse('now');
      todayAtEventTime = Date.parse('today').set({hour: hour, minute: minute});
      thursdayAtEventTime = Date.today().next().thursday().set({hour: hour, minute: minute});
      nextEventDate;
      // currentDateTime: Fri Jun 27 2014 13:08:38 GMT-0500 (CDT)
      // Tue Jul 01 2014 00:00:00 GMT-0500 (CDT)
      // if today is Thursday
      if (currentDateTime.is().thursday()) {
        // check to see if it's before or after the event
        // if before the event
        if (currentDateTime < todayAtEventTime) {
          nextEventDate = todayAtEventTime;
        }
        // after the event
        else {
          nextEventDate = thursdayAtEventTime;
        }
      }
      // it's not Thursday
      else {
        nextEventDate = thursdayAtEventTime;
      }

      //usa_debug('getNextEvent => currentDateTime: ' + currentDateTime + '\ntodayAtEventTime: ' + todayAtEventTime + '\nthursdayAtEventTime: ' + thursdayAtEventTime + '\nnextEventDate: ' + nextEventDate);

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
          if (zeroOnPageLoad) {
            Drupal.behaviors.countdown.getNextEvent();
          }
          else {
            // countdown reached zero
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

      var current="Thursdays 10/9C";	//-->enter what you want the script to display when the target date and time are reached, limit to 20 characters
      var year=2015;    //-->Enter the count down target date YEAR
      var month=6;     //-->Enter the count down target date MONTH
      var day=25;       //-->Enter the count down target date DAY
      var hour=22;      //-->Enter the count down target date HOUR (24 hour clock)
      var minute=00;     //-->Enter the count down target date MINUTE
      var tz = -5;      //-->Offset for your timezone in hours from UTC (see http://wwp.greenwichmeantime.com/index.htm to find the timezone offset for your location)


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

      // NEW CODE TO ALLOW COUNTDOWN RESET TO THE SAME TIME NEXT WEEK ON THURSDAY
      var currentDateTime = Date.parse('now'),
          todayAtEventTime = Date.parse('today').set({hour: hour, minute: minute}),
          thursdayAtEventTime = Date.today().next().thursday().set({hour: hour, minute: minute}),
          nextEventDate,
          zeroOnPageLoad=1,
          count2 = null,
          self = this;

      self.eventCountdown(year, month, day, hour, minute, tz);

    }
  }
}(jQuery));
