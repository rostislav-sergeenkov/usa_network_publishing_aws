(function($) {
	var plugin = Echo.createPlugin({
        "name": "SourceIconTweaks",
        "applications": ["Stream"],
        "init": function(plugin, application) {
			plugin.extendRenderer("Item", "sourceIcon", function() {
				var item = this;
				var source = item.data.source.name;
				if (source) {
					var icon = plugin.config.get(item, "icons." + source);
					if (icon) {
						item.data.source.icon = icon;
					}
				}
				item.parentRenderer("sourceIcon", arguments);
			});
        }
	});
})(jQuery);


(function ($) {
Drupal.behaviors.chat_with_fans_page = {
  attach: function(context){

      // @TODO: REMOVE usa_debug ONCE IT'S BEEN ADDED GLOBALLY
      var usa_debugFlag = false;
      var usa_debug = function(msg) {
        if (usa_debugFlag && typeof console != "undefined")
        {
          if (typeof msg == "object") {
            console.log("msg is object");
          }
          else if (typeof msg == "array") {
            console.log("msg is array");
          }
          console.log(msg);
        }
      }

      // BEGIN SESSION HANDLING / BACKPLANE INITIALIZATION
      // needed for auto-login to chatter
      // var usa_user = jQuery.parseJSON(jQuery.cookie('usa_idx_id'));
      // if (usa_user != null)
      // {
      //   usa_debug(usa_user);
      //   if (typeof Backplane != 'undefined') Backplane.resetCookieChannel();
      //   Backplane.init({
      //     "serverBaseURL": "http://api.echoenabled.com/v1",
      //     "busName": "usanetwork",
      //     "channelName": usa_user.username
      //   });
      // }

      // Backplane.expectMessages(["identity/ack"]);
      // END BACKPLANE INITIALIZATION

			var FBappId = '241079750077';
			window.fbAsyncInit = function() {
				// init the FB JS SDK
				FB.init({
					appId      : FBappId,                        // App ID from the app dashboard
					status     : true,                           // Check Facebook Login status
					xfbml      : true                            // Look for social plugins on the page
				});

				// Additional initialization code such as adding Event Listeners goes here
			};

			// Load the SDK asynchronously
			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

      Backplane.init({
        "serverBaseURL" : "http://api.echoenabled.com/v1",
        "busName": "usanetwork"
      });

			// SUBMIT FORM WIDGET
			var janrainTokenUrl = encodeURIComponent('http://api.echoenabled.com/apps/janrain/waiting.html');
			chatIdentityManagerURL = chatIdentityManagerURL.replace('[JANRAINTOKENURL]', janrainTokenUrl);
			var identityManager = {
				'url': chatIdentityManagerURL,
				'width': 420,
				'height': 260
			};

			var EchoAuth;
			function runEchoAuth()
			{
				EchoAuth = new Echo.Auth({
					"target": document.getElementById("echo-login-form"),
					"appkey": echoAppKey,
					"identityManager": {
						"login" : identityManager,
						"submitPermissions": "forceLogin"
					}
				});
			}

			var EchoRiverClient;
			function initEchoRiverClient()
			{
				EchoRiverClient = new Echo.Stream({
					"target": $("#chat-echo-stream"),
					"appkey": echoAppKey,
					"query": chatWithFansEQL,
					"maxBodyCharacters": 2000,
					"viaLabel": {"icon": true,"text": true},
					"reTag": false,
					"streamStateLabel": {"icon": true,"text": true},
					"aggressiveSanitization": false,
					"plugins": [
						{
							"name": "UserPrivileges"
						},
						{
							"name": "Whirlpools",
							"after": 2,
							"clickable": true
						},
						{
							"name": "Like"
						},
						{
							"name": "CommunityFlag"
						},
						{
							"name": "Reply",
							"enabled": true,
							"nestedPlugins": [{
								"name": "FormAuth",
								"identityManagerLogin": identityManager,
								"submitPermissions": "forceLogin"
							}]
						},
						{
							"name": "SourceIconTweaks",
							"icons": {
								"usanetwork": chatterSourceIcon,
								"yap-tv": chatterSourceIcon
							}
						}
					]
				});
			}

			var EchoSubmit;
			function usa_buildSubmitForm(marker)
			{
				usa_debug('fn: usa_buildSubmitForm('+marker+')');
				EchoSubmit = new Echo.Submit({
					"target": document.getElementById("chat-submit-form"),
					"appkey": echoAppKey,
					"targetURL": chatSubmitTargetURL,
					"adminMode": true,
					"plugins": [
					{
						"name": "FormAuth",
						"identityManagerLogin": identityManager,
						"submitPermissions": "forceLogin"
					},
					{
						"name": "SubmitTextCounter",
						"limit": 1000,
						"label": "You have typed {typed} chars, {left} chars left"
					}
					]
				});
      }

/* DV: We will need this in a future iteration, so I'm leaving it for now
Echo.Broadcast.subscribe("User.onInit",
		function(topic, data, contextId) {
$('.echo-submit-forcedLoginUserInfoMessage').html('Logging you in...').fadeIn('fast');
			setTimeout("usa_updateMarkersPostLogin()", 1000);
		}
	);

	Echo.Broadcast.subscribe("Submit.onPostComplete",
		function(topic, data, contextId) {
			setTimeout("usa_updateMarkersPostLogin()", 1000);
		}
	);
*/
			if (chatShowPostComments == 1)
			{
				runEchoAuth();
				usa_buildSubmitForm('');
			}
			initEchoRiverClient();
		}
	}
})(jQuery);


