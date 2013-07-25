/**
 * Session utility object to interface w/ session.php
 *
 * Author: Joshua Mast <joshua.mast@nbcuni.com>
 * Modified: Donna Vaughan <donna.vaughan@nbcuni.com>
 */

// USER CONFIGURATION
var guestUser = 'anonymous';
var usa_UserObj = function(args) {
	if (args != null)
	{
		this.id = (typeof args._id != 'undefined') ? args._id : guestUser;
		this.username = (typeof args.username != 'undefined') ? args.username : '';
		this.points = (typeof args.points != 'undefined') ? args.points : 0;
		this.avatar = (typeof args.avatar !='undefined' && args.avatar != '') ? args.avatar : 'http://'+window.location.host+'/sites/usanetwork/files/style/default_avatar_125x125.jpg';
		this.loggedIn = (this.id == guestUser) ? 0 : 1;
		this.fbLoggedIn = (typeof getCookie == 'function' && getCookie('ss_facebook_login') == 1) ? 1 : 0;
		this.twLoggedIn = (typeof getCookie == 'function' && getCookie('ss_facebook_login') == 1) ? 1 : 0;
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
var usa_User = new usa_UserObj(null);

// CONFIG
var usa_userCookie = 'usa_idx';
var usa_sessionBasePath = 'http://'+window.location.host+'/sites/usanetwork/modules/custom/usanetwork_personalization/php';
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
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
}

// USER LOGGING / SESSION HANDLING
function usa_userLogin(user)
{
  usa_debug('fn: usa_userLogin(user)');
  usa_debug(user);
  usa_debug('userId: '+user._id);
/*  // check authenticity of cookie
  jQuery.ajax({
    url: usa_sessionBasePath+'/session.php',
    dataType: 'json',
    data: {'userId' : userId, 'auth' : auth, 'token' : token},
    type: 'GET',
    success: function(data) {
      if (data != null)
      {
        if (data == true)
        {
          usa_debug('USER LOGGED IN');
          // logged in, so set cookie with plain text userId and auth signature

          usa_setCookie(usa_userCookie, user._id+'|||'); // +auth);
*/
          usa_User = new usa_UserObj(user);
          usa_bpLogin();
/*        }
        else
        {
          // unset cookie
          usa_setCookie(usa_userCookie, '', null);
        }
        // session.data = user;
        // if (typeof callback === "function") callback.call(null, user);
      }
    }
  });
*/
}

/*
function usa_checkUserLoggedIn()
{
  usa_debug('fn: usa_checkUserLoggedIn()');

  // if cookie is set
  if (usa_getCookie(usa_userCookie).len() > 0)
  {
    // check authenticity of cookie
    jQuery.ajax({
      url: usa_sessionBasePath+'/session.php',
      dataType: 'json',
      data: {'userId' : userId, 'auth' : auth, 'token' : token},
      type: 'GET',
      success: function(data) {
        if (data != null)
        {
          if (data == true)
          {
            usa_debug('USER LOGGED IN');
            // logged in, so set cookie with plain text userId and auth signature
            usa_setCookie(usa_userCookie, userId+'|||'+auth);
          }
          else
          {
            // unset cookie
            usa_setCookie(usa_userCookie, '', null);
          }
          // session.data = user;
          // if (typeof callback === "function") callback.call(null, user);
        }
      }
    });
  }
  else
  {
    usa_debug('USER NOT LOGGED IN');
  }
}
*/

function usa_userLogout()
{
  usa_debug('fn: usa_userLogout()');
/*  // check authenticity of cookie
  jQuery.ajax({
    url: usa_sessionBasePath+'/session.php',
    dataType: 'json',
    data: {'userId' : userId, 'auth' : auth, 'token' : token},
    type: 'GET',
    success: function(data) {
      if (data != null)
      {
        if (data == true)
        {
          usa_debug('USER LOGGED IN');
          // logged in, so set cookie with plain text userId and auth signature
*/
          usa_setCookie(usa_userCookie, '');
          usa_setCookie(usa_userCookie+'_id', '');
          usa_User = new usa_UserObj(null);
          usa_bpLogout();
/*        }
        else
        {
          // unset cookie
          usa_setCookie(usa_userCookie, '', null);
        }
        // session.data = user;
        // if (typeof callback === "function") callback.call(null, user);
      }
    }
  });
*/
}

// BACKPLANE AUTO-LOGIN
function usa_bpLogin(callback)
{
	usa_debug('fn: usa_bpLogin(callback)');

	// if user is logged in, auto login to chat-with-fans comments via backplane
	if (usa_User.id != guestUser)
	{
		//var userId = usa_User.id.replace('usaFb_', '');
		var params = 'format=json&userId='+usa_User.id+'&username='+usa_User.username+'&userAvatar='+usa_User.avatar+'&jsoncallback=?';
		jQuery.getJSON(usa_pathToUsaCode + '/php/clubBackplane.php?' + params, function(data) {
			//if (typeof JSON != 'undefined') usa_debug(JSON.stringify(data));
			if (data.success && typeof data.data.rsp.result != 'undefined' && typeof data.data.rsp.result == 'success')
			{
				// if successful
				//usa_debug('Backplane user is logged in');
				Backplane.expectMessages(["identity/ack"]);
			}
		});
	}
	else
	{
		usa_debug('user is not logged in');
	}
}

// BACKPLANE LOGOUT
function usa_bpLogout(callback)
{
	usa_debug('fn: usa_bpLogout(callback)');

	var params = 'method=bpLogout&format=json&userId='+usa_User.id+'&username='+usa_User.username+'&userAvatar='+usa_User.avatar+'&jsoncallback=?';
	jQuery.getJSON(usa_pathToUsaCode + '/php/clubBackplane.php?' + params, function(data) {
		//if (typeof JSON != 'undefined') usa_debug(JSON.stringify(data));
		Backplane.expectMessages(["identity/ack"]);
	});
}


// SESSION HANDLING
var usa_sessionBasePath = 'http://'+window.location.host+'/sites/usanetwork/modules/custom/usanetwork_personalization/php';
var session = {
    data: {},
    /* get the current session object, if it exists, insert
       it into session.user, and pass it to a callback if
       provided. */
    get: function(callback) {
        usa_debug('fn: session.get()');
        jQuery.ajax({
            url: usa_sessionBasePath+'/session.php',
            dataType: 'json',
            type: 'GET',
            success: function(user) {
usa_debug(user);
                if (user != null)
                {
                  session.data = user;
//                  usa_userLogin(user);
                  usa_User = new usa_UserObj(user);
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
            url: usa_sessionBasePath+'/session.php',
            type: "POST",
            dataType: 'json',
            data: user
        });
        session.data = user;
        usa_userLogin(user);
    },
    /* destroy a session, clear session.user */
    remove: function() {
        usa_debug('fn: session.remove()');
        jQuery.ajax({
            url: usa_sessionBasePath+'/session.php',
            type: "DELETE"
        });
        session.data = {};
        usa_userLogout();
    }
}
