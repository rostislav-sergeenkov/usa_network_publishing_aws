(function ($) {
Drupal.behaviors.chat_with_fans_page = {
  attach: function(context){

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
/*	if (otherBrowser || mobileOS || touchOS || iOS || android)
	{
		janrainTokenUrl = escape(window.location.href);
	}
*/
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

	var EchoSubmit;
	function usa_buildSubmitForm(marker)
	{
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
					"name": "Reply",
					"enabled": true,
					"nestedPlugins": [{
						"name": "FormAuth",
						"identityManagerLogin": identityManager,
						"submitPermissions": "forceLogin"
					}]
				},
				{
					"name": "CommunityFlag"
				},
/*				{
					"name": "SourceIconTweaks",
					"icons": {
						"usanetwork": "http://www.usanetwork.com/_img/chatter_icon_red_16x16.gif", \
						"twitter.com": "http://cdn.echoenabled.com/images/favicons/twitter.png",
						"yap-tv": "http://www.usanetwork.com/_img/chatter_icon_red_16x16.gif"
					}
				}, */
				{
					"name": "InlineMedia"
				}
			]
		});
	}

/* DV: We will need this in a future iteration, so I'm leaving it for now
Echo.Broadcast.subscribe("User.onInit",
		function(topic, data, contextId) {
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

