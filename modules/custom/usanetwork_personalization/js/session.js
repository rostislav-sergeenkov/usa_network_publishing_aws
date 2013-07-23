/**
 * Session utility object to interface w/ session.php
 *
 * Author: Joshua Mast <joshua.mast@nbcuni.com>
 */

//var sessionBasePath = 'http://'.$_SERVER['HTTP_HOST'].'/sites/default/files/../../usanetwork/modules/custom/usanetwork_social/php';
var sessionBasePath = 'http://'+window.location.host+'/sites/usanetwork/modules/custom/usanetwork_personalization/php';
var session = {
    data: {},
    /* get the current session object, if it exists, insert
       it into session.user, and pass it to a callback if
       provided. */
    get: function(callback) {
        jQuery.ajax({
            url: sessionBasePath+'/session.php',
            dataType: 'json',
            type: 'GET',
            success: function(user) {
                if (user != null)
                {
                  session.data = user;
                  if (typeof callback === "function") callback.call(null, user);
                }
            }
        });
    },
    /* take an object and shove it into the session, as well as
       inserting it into session.user */
    set: function(user) {
        jQuery.ajax({
            url: sessionBasePath+'/session.php',
            type: "POST",
            dataType: 'json',
            data: user
        });
        session.data = user;
    },
    /* destroy a session, clear session.user */
    remove: function() {
        jQuery.ajax({
            url: sessionBasePath+'/session.php',
            type: "DELETE"
        });
        session.data = {};
    }
}
