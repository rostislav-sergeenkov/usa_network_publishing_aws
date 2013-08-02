/**
 * Session utility object to interface w/ usa_session.php
 *
 * Author: Joshua Mast <joshua.mast@nbcuni.com>
 * Modified: Donna Vaughan <donna.vaughan@nbcuni.com>
 */

// USER CONFIGURATION
var guestUser = 'anonymous';
var usa_userObj = function(args) {
  if (args != null)
  {
    this.id = (typeof args._id != 'undefined') ? args._id : guestUser;
    this.username = (typeof args.username != 'undefined') ? args.username : '';
    this.points = (typeof args.points != 'undefined') ? args.points : 0;
    this.avatar = (typeof args.avatar !='undefined' && args.avatar != '') ? args.avatar : defaultAvatar;
    this.loggedIn = (this.id == guestUser) ? 0 : 1;
    this.fbLoggedIn = (typeof args.fbLoggedIn !='undefined' && args.fbLoggedIn != 0) ? args.fbLoggedIn : 0;
    this.twLoggedIn = (typeof args.twLoggedIn !='undefined' && args.twLoggedIn != 0) ? args.twLoggedIn : 0;
  } else {
    this.id = guestUser;
    this.username = '';
    this.points = 0;
    this.avatar = '';
    this.loggedIn = 0;
    this.fbLoggedIn = 0;
    this.twLoggedIn = 0;
  }
}
var usa_user = new usa_userObj(null);

// CONFIG
var usa_userCookie = 'usa_idx';
var usa_sessionBasePath = 'http://'+window.location.host+'/sites/usanetwork/modules/custom/usanetwork_personalization/php';
// @TODO: change any environment-specific url's to match the environment you're on
// For example: http://stage.socialsector.usanetwork.com/donna should be http://socialsector.usanetwork.com/donna on production
var usa_pathToUsaCode = 'http://stage.socialsector.usanetwork.com/donna';

// MISC FUNCTIONS
function usa_getCookie(c_name)
{
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1)
  {
    c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1)
  {
    c_value = null;
  }
  else
  {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1)
    {
      c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
  }
  return c_value;
}

function usa_setCookie(c_name, value, exdays)
{
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/ ; domain=.usanetwork.com";
  document.cookie=c_name + "=" + c_value;
}

// USER LOGGING / SESSION HANDLING
function usa_userLogin(user)
{
  usa_debug('fn: usa_userLogin(user)');
  usa_debug(user);
  usa_debug('userId: '+user._id);
  usa_debug('userAuthSignature: '+user._auth_signature);
  usa_user = new usa_userObj(user);
  usa_bpLogin();
}

function usa_userLogout()
{
  usa_debug('fn: usa_userLogout()');
  usa_user = new usa_userObj(null);
}

// BACKPLANE AUTO-LOGIN
function usa_bpLogin(callback)
{
  usa_debug('fn: usa_bpLogin(callback)');

  // if user is logged in, auto login to chat-with-fans comments via backplane
  if (usa_user.id != guestUser)
  {
    usa_debug(usa_user);

    if (typeof Backplane != "undefined") Backplane.resetCookieChannel();
    Backplane.init({
      "serverBaseURL": "http://api.echoenabled.com/v1",
      "busName": "usanetwork",
      "channelName": usa_user.username
    });

    // save the channel id to a cookie with jquery
    jQuery.cookie('bp_channel_id', Backplane.getChannelID(), {path: "/", domain: ".usanetwork.com"});

    jQuery.ajax({
        url: usa_sessionBasePath+'/usa_session.php',
        dataType: 'json',
        type: 'GET',
        data: 'bpLogin=1&username='+usa_user.username+'&avatar='+usa_user.avatar+'jsoncallback=?',
        success: function(data) {
          usa_debug('new bpLogin completed');
          usa_debug(data);
        }
    });

    Backplane.expectMessages(["identity/ack"]);
  }
  else
  {
    usa_debug('user is not logged in');
  }
}


// SESSION HANDLING
var session = {
    data: {},
    /* get the current session object, if it exists, insert
       it into session.user, and pass it to a callback if
       provided. */
    get: function(callback) {
        usa_debug('fn: session.get()');
        jQuery.ajax({
            url: usa_sessionBasePath+'/usa_session.php',
            dataType: 'json',
            type: 'GET',
            success: function(user) {
              //usa_debug(user);
              if (user != null)
              {
                session.data = user;
                usa_userLogin(user);
                if (typeof callback === "function") callback.call(null, user);
              }
              else
              {
                session.data = {};
                usa_userLogout();
              }
            }
        });
    },
    /* take an object and shove it into the session, as well as
       inserting it into session.user */
    set: function(user) {
        usa_debug('fn: session.set()');
        jQuery.ajax({
            url: usa_sessionBasePath+'/usa_session.php',
            type: "POST",
            dataType: 'json',
            data: user,
        });
        if (user != null)
        {
          // save the channel id to a cookie with jquery
          jQuery.cookie("bp_channel_id", Backplane.getChannelID(), {path: "/", domain: ".usanetwork.com"});
          // set some additional usanetwork values if not set yet
          if (typeof user.avatar == 'undefined' || (typeof user.avatar != 'undefined' && user.avatar == '')) user.avatar = defaultAvatar;
          if (typeof user._gigya_login_provider != 'undefined')
          {
            if (user._gigya_login_provider == 'facebook' && typeof user._provider.facebook != 'undefined')
            {
              user.fbLoggedIn = (user._provider.facebook != '') ? user._provider.facebook : 0;
            }
            else if (user._gigya_login_provider == 'twitter' && typeof user._provider.twitter != 'undefined')
            {
              user.twLoggedIn = (user._provider.twitter != '') ? user._provider.twitter : 0;
            }
          }
          session.data = user;
          usa_userLogin(user);
        }
        else
        {
          session.data = {};
          usa_userLogout();
        }
    },
    /* destroy a session, clear session.user */
    remove: function() {
        usa_debug('fn: session.remove()');
        //usa_debug('resetting Backplane cookie channel');
        Backplane.resetCookieChannel();
        //usa_debug('new cookie: '+Backplane.getChannelID());
        jQuery.ajax({
            url: usa_sessionBasePath+'/usa_session.php',
            type: "DELETE"
        });
        session.data = {};
        usa_userLogout();
    }
}
