// jQuery(document).ready(function() {
//   session.get(displayUserInfo); // check our session and run the callback on success

//   SURF.debug = (typeof usa_debugFlag != 'undefined') ? usa_debugFlag : false;
//   if (SURF.debug) jQuery('#debug .content ul').append('<li>Site level jQuery version is '+jQuery().jquery+'</li>');

//   //get all our events
//   var ev = '';
//   var reverseEvents = {}
//   for (i in SURF.events) {
//     if (SURF.debug) jQuery('#debug .content ul').prepend('<li>Binding to SURF.events.'+i+'</li>')
//     ev += SURF.events[i] + ' ';
//     reverseEvents[SURF.events[i]] = i;
//   }

//   if (SURF.debug)
//   {
//     //bind a simple debugging output handler to them
//     SURF.event.bind(ev, function(e, a) {

//     jQuery('#events > .content ul').prepend(
//       jQuery('<li></li>').append('<div class="title"><span class="subtitle">SURF.events.</span>'+reverseEvents[e.type]+'</div>')
//         .append(jQuery('<div class="value"></div>').text(JSON.stringify(a, null, 4)))
//         .append(
//           //again, we use text() to ensure that our JSON is properly htmlescaped
//           jQuery('<pre></pre>').addClass('prettyprint').text(JSON.stringify(a, null, 4))
//         )
//         .addClass(e.type)
//         .addClass('event-log')
//       );

//       prettyPrint()

//     });
//   }

  
//   Once all your event handlers are setup, simply call SURF.init();

//   Right now this method takes no parameters, but it's exposed as future release may allow for options to be set with this method.

//   This method sets up SURF's internal context.  It also binds several default actions to classes.  If you don't want setup your own event
//   handlers you can simply add a class to an element and surf will handle the rest.

//   The following classes can be assigned to elements on your page:

//   .surf-signin-dialog - Will display the surf sign on dialog when clicked
//   .surf-signout       - Will signout the current user when clicked
//   .surf-edit-dialog   - Will display the surf edit account dialog when clicked

  
//   var surfOptions = {}

//   surfOptions['smallDisplay'] = 400;

//   var surfInit = SURF.init(surfOptions);

//   // bind the forgot password button to forgotPasswordDialog()
//   jQuery('.action-forgotpassword').click(function() {
//     SURF.forgotPasswordDialog();
//   });

//   jQuery('.action-forgotpasswordprefilled').click(function() {
//     SURF.forgotPasswordDialog('prefilled@address.com');
//   });

//   //Example Gigya widget.  We include their activity feed.  Once you login, we'll allow you to post to it.
//   gigya.socialize.showFeedUI({
//     "containerID": "gigyawidget",
//     "siteName": "SURF Example: stage",
//     "tabOrder": "everyone",
//     "height": "320"
//   });

//   //Publish an action to the Gigya Activity Feed module
//   jQuery('#button_gigya_action').click(function () {
//     if (jQuery(this).data('posted')) {
//       //only allow posting once per page load.
//       return;
//     }

//     //Let the user know we are doing something
//     jQuery(this).text('Posting...').addClass('disabled').data('posted', true);
// // @TODO: change environment-specific url's to match the environment you're on
// // For example: should http://www.surfexample-stage.com be changed to http://www.surfexample-prod.com on production?
//     var act = new gigya.socialize.UserAction();
//     act.setActionName('learned how to implement SURF');
//     act.setTitle('In the stage environment.')
//     act.setLinkBack('http://www.surfexample-stage.com/');

//     gigya.socialize.publishUserAction({
//       "userAction": act,
//       "scope": "both",
//       "privacy": "public",
//       "callback": function (response) {
//         //update the Gigya UI
//         gigya.socialize.refreshUI();

//         //and let the user know when we are done.
//         jQuery('#button_gigya_action').text('Posted')
//       }
//     });
//   });
// });
