//This function is called when a user successfully signs in
//See below for where it is used as a call back
function displayUserInfo(user) {
  jQuery('#navigation_container').hide();
  jQuery('#user-dialog').show();

  //change welcome user name to include username and possibly avatar
  //It's important to note that we use text() and not html() here as it's possible that data from SURF/IDX
  //can contain html entities that need to be escaped by the browser
  jQuery('#user-dialog #username').text(user.username);

  if (user.firstname === undefined) user.firstname = '';
  if (user.lastname === undefined) user.lastname = '';

  jQuery('#user-dialog #fullname').text(user.firstname + ' ' + user.lastname);

  //if we have it, show their avatar
  if ('avatar' in user && user.avatar != '') {
    jQuery('#user-dialog .thumbnail').html('<img src="'+user.avatar+'" width="50" height="50"/>');
  } else {
    jQuery('#user-dialog .thumbnail').html('<img src="'+defaultAvatar+'" width="50" height="50"/>');
  }
}

jQuery(document).on('click', '.action-signin', function() {
  SURF.signinDialog();
})

/*
  callbacks in the case of dialog methods are deprecated, it's best practice to bind to SURF events
  whenever possible.

  in this case, we update the UI to it's original state when a SIGNOUT event fires

  Other events you can hook:

  SURF.events.READY - Fires when our init completes and SURF is ready to use
  SURF.events.SIGNIN - Fires when a user signs in.  Provides the user object
  SURF.events.SIGNIN_WITH_SOCIAL_PROVIDER - Fires when a user signs in using a social network.  Provides the user object and the social network used.
  SURF.events.SIGNOUT - Fires when a user signs out.
  SURF.events.CREATE_ACCOUNT - Fires when an account is created.  Check the users status to know if email verification is enabled or not.
  SURF.events.EDIT_ACCOUNT - Fires when an account is edited.  Returns the same as CREATE_ACCOUNT
  SURF.events.UI - Fires whenever our UI elements are displayed. Provides a string indicating the state 'open' or 'close'

  SURF.events.ACCOUNT_UPDATED - Fires whenever the user's account is updated for any reason, could be due to SIGNIN, CREATE_ACCOUNT, EDIT_ACCOUNT or others


  Error events (this should not occur frequently, but if something goes amiss, these will be fired):

  SURF.events.SIGNIN_ERROR
  SURF.events.SIGNOUT_ERROR
  SURF.events.SIGNIN_WITH_SOCIAL_PROVIDER_ERROR
  SURF.events.CREATE_ACCOUNT_ERROR
  SURF.events.EDIT_ACCOUNT_ERROR
  SURF.events.LINK_ACCOUNT_ERROR

  Future events (these events will be documented in a future release):

  SURF.events.LINK_ACCOUNT
  SURF.events.VERIFY
  SURF.events.RESET_PASSWORD
*/
SURF.event.bind(SURF.events.SIGNOUT, function () {
  jQuery('#user-dialog').hide();
  jQuery('#navigation_container').show();
  session.remove(); // clear our session data
});

//we also bind an event to ACCOUNT_UPDATED
//this fires any time the user is updated, this could be due to a new account, signing in, editing their profile, etc
SURF.event.bind(SURF.events.ACCOUNT_UPDATED, function (e, user) {
  displayUserInfo(user);
  session.set(user); // insert user object into the session
});

jQuery(document).on('click', '.action-edit-account', function() {
  SURF.editAccountDialog( { uid: session.data._id, signature: session.data._auth_signature });
});

//examples of calling dialog methods with no callback
jQuery(document).on('click', '.action-signout', function() {
  /* signout is a method that infers an authenticated user, so a UID & authentication
  signature (provided on login in the user object) must be passed to it. */
  SURF.signout({ uid: session.data._id, signature: session.data._auth_signature });
});

// bind the click to create / register an account
jQuery(document).on('click', '.action-create-account', function() {
  SURF.createAccountDialog();
});

// jQuery(document).on('click', '.action-link-account', function() {
//     SURF.linkAccountDialog({ 'email': 'TEST' });
// });

//and the social "icons", this will directly launch the social network's authentication window
//after the user successfully connects with our application, we either sign them in, if they already have an account
//or we pop a pre-filled (with as much info as the provider will give us) registration form
jQuery(document).on('click', '.social-button', function() {
  SURF.signin({"provider": jQuery(this).attr('name')});
});
