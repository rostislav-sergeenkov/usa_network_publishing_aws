// // 

// Navigation for narrow and wide screens
(function ($) {

  Drupal.behaviors.personalization = {
    attach: function (context, settings) {     

      SURF.event.bind(SURF.events.SIGNIN, function () {
        $('.avatar').show();
        $('#wall').remove();
      });  


      SURF.event.bind(SURF.events.SIGNOUT, function () {
        $('#wall').remove();
      });  


      SURF.event.bind(SURF.events.READY, function () {
        $('.surf-logged-in-actions li').appendTo('.personalization-logged-in');
        $('#surf-info').appendTo('#personalization-user-info');
      });  


      SURF.event.bind(Drupal.surf.events.sessionReady, function (e, user) {
        if (user) {
          $('.avatar').show();
          $('#action-avatar').css('display','block');
          $('#action-signin').css('display','none');
        }
        else {
          $('.avatar').hide();
          $('#action-avatar').css('display','none');
          $('#action-signin').css('display','block');
        }
      });

      $('#action-signout').click(function() {
        $('#personalization-drawer').toggleClass('active-item');
        $('#wall').remove();
        $('.avatar').hide();
      });


      $(document).on('click', '.personalization-nav-item', function(){
        $('.personalization-wrapper .active').removeClass('active');
        var target_class = $(this).attr("class");
        target_class = target_class.replace('personalization-nav-item', '');
        $('.'+target_class.trim()).toggleClass('active');
        var header = $(this).text();
        $('#personalization-main h3').text(header);
        personalization_height();
      });

      personalization_height();

      $(window).resize(function(){
          personalization_height();
      });

      // adjusting height at larger screen
      function personalization_height() {
        if ($('body').css('width') >= '769px') {
          var matchHeight = $('#personalization-main').height();
          $('#personalization-sidebar, #personalization-main').height(matchHeight + 10);
        } else {
          return false;
        }
      }
      

      // not working  - need to find right event ?
      SURF.event.bind(SURF.events.dialog, function () {
        $('#wall').remove();
        $('.jPanelMenu-panel')
          .append('<div id="wall" data-module-type="Wall" style="z-index: 102;"></div>'); 
      });  


    },
  };

}(jQuery));


// function getSocialAvatar(response) {
//   if ( response.errorCode == 0 ) {
//     var user = response['user'];
//     if(user['thumbnailURL']!= ''){
//       //jQuery.cookie("socialavatar", user['thumbnailURL'], { path : '/',domain: '.usanetwork.com'});
//       if (typeof usa_user != 'undefined') usa_user.avatar = user['thumbnailURL'];

//       // @TODO: CONVERT THIS TO USE THE usa_idx_id COOKIE
//       jQuery.cookie("socialavatar", user['thumbnailURL'], { path : '/'});
//       usa_debug('fn: getSocialAvatar()');
//       var socialavatar = jQuery.cookie("socialavatar");
//       jQuery('#user-dialog .thumbnail').html('<img src="'+socialavatar+'" width="50" height="50"/>')
//     }
//   }
//   else {
//       alert('Error :' + response.errorMessage);
//   }
// }


// //This function is called when a user successfully signs in
// //See below for where it is used as a call back
// function displayUserInfo(user) {
//   jQuery('#navigation_container').hide();
//   jQuery('#user-dialog').show();

//   //change welcome user name to include username and possibly avatar
//   //It's important to note that we use text() and not html() here as it's possible that data from SURF/IDX
//   //can contain html entities that need to be escaped by the browser
//   jQuery('#user-dialog #username').text(user.username);

//   if (user.firstname === undefined) user.firstname = '';
//   if (user.lastname === undefined) user.lastname = '';

//   jQuery('#user-dialog #fullname').text(user.firstname + ' ' + user.lastname);

//   //if we have it, show their avatar
//   if ('avatar' in user && user.avatar != '') {
// //    jQuery('#user-dialog .thumbnail').html('<img src="'+user.avatar+'" width="50" height="50"/>');
//   }
//   else if(user._gigya_login_provider == 'twitter'){
//       gigya.socialize.getUserInfo({callback:getSocialAvatar});
//   } else {
// //    jQuery('#user-dialog .thumbnail').html('<img src="'+defaultAvatar+'" width="50" height="50"/>');
//   }
// }

// jQuery(document).on('click', '.action-signin', function() {
//   SURF.signinDialog();
// })


//   callbacks in the case of dialog methods are deprecated, it's best practice to bind to SURF events
//   whenever possible.

//   in this case, we update the UI to it's original state when a SIGNOUT event fires

//   Other events you can hook:

//   SURF.events.READY - Fires when our init completes and SURF is ready to use
//   SURF.events.SIGNIN - Fires when a user signs in.  Provides the user object
//   SURF.events.SIGNIN_WITH_SOCIAL_PROVIDER - Fires when a user signs in using a social network.  Provides the user object and the social network used.
//   SURF.events.SIGNOUT - Fires when a user signs out.
//   SURF.events.CREATE_ACCOUNT - Fires when an account is created.  Check the users status to know if email verification is enabled or not.
//   SURF.events.EDIT_ACCOUNT - Fires when an account is edited.  Returns the same as CREATE_ACCOUNT
//   SURF.events.UI - Fires whenever our UI elements are displayed. Provides a string indicating the state 'open' or 'close'

//   SURF.events.ACCOUNT_UPDATED - Fires whenever the user's account is updated for any reason, could be due to SIGNIN, CREATE_ACCOUNT, EDIT_ACCOUNT or others


//   Error events (this should not occur frequently, but if something goes amiss, these will be fired):

//   SURF.events.SIGNIN_ERROR
//   SURF.events.SIGNOUT_ERROR
//   SURF.events.SIGNIN_WITH_SOCIAL_PROVIDER_ERROR
//   SURF.events.CREATE_ACCOUNT_ERROR
//   SURF.events.EDIT_ACCOUNT_ERROR
//   SURF.events.LINK_ACCOUNT_ERROR

//   Future events (these events will be documented in a future release):

//   SURF.events.LINK_ACCOUNT
//   SURF.events.VERIFY
//   SURF.events.RESET_PASSWORD

// SURF.event.bind(SURF.events.SIGNOUT, function () {
//   jQuery('#user-dialog').hide();
//   jQuery('#navigation_container').show();
//   session.remove(); // clear our session data
// });

// //we also bind an event to ACCOUNT_UPDATED
// //this fires any time the user is updated, this could be due to a new account, signing in, editing their profile, etc
// SURF.event.bind(SURF.events.ACCOUNT_UPDATED, function (e, user) {
//   displayUserInfo(user);
//   session.set(user); // insert user object into the session
// });

// jQuery(document).on('click', '.action-edit-account', function() {
//   SURF.editAccountDialog( { uid: session.data._id, signature: session.data._auth_signature });
// });

// //examples of calling dialog methods with no callback
// jQuery(document).on('click', '.action-signout', function() {
//   /* signout is a method that infers an authenticated user, so a UID & authentication
//   signature (provided on login in the user object) must be passed to it. */
//   SURF.signout({ uid: session.data._id, signature: session.data._auth_signature });
// });

// // bind the click to create / register an account
// jQuery(document).on('click', '.action-create-account', function() {
//   SURF.createAccountDialog();
// });

// // jQuery(document).on('click', '.action-link-account', function() {
// //     SURF.linkAccountDialog({ 'email': 'TEST' });
// // });

// //and the social "icons", this will directly launch the social network's authentication window
// //after the user successfully connects with our application, we either sign them in, if they already have an account
// //or we pop a pre-filled (with as much info as the provider will give us) registration form
// jQuery(document).on('click', '.social-button', function() {
//   SURF.signin({"provider": jQuery(this).attr('name')});
// });
