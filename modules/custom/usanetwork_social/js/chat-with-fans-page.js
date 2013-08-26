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
      var usa_user = jQuery.parseJSON(jQuery.cookie('usa_idx_id'));
      if (usa_user != null)
      {
        usa_debug(usa_user);
        if (typeof Backplane != 'undefined') Backplane.resetCookieChannel();
        Backplane.init({
          "serverBaseURL": "http://api.echoenabled.com/v1",
          "busName": "usanetwork",
          "channelName": usa_user.username
        });
      }

      Backplane.expectMessages(["identity/ack"]);
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

      function usa_buildChatterToTv(marker)
      {

        usa_debug('fn: usa_buildChatterToTv('+marker+')');
        var tv = '<div id="tvTitle" style="color:#33CCFF;padding-bottom:15px;font-size: large;"><b>'+chatterToTvTitle+'</b></div>';
        tv += '<div id="tvDescription" style="color:black;padding-bottom:15px;">'+chatterToTvDescription+'</div>';
        tv += '<input type="checkbox" name="tvOnAir" id="tvOnAir" value="'+chatterToTvEchoMarker+'" checked="checked" style="margin-bottom:25px;"><span style="color:black;">'+chatterToTvCheckboxText+'</span><br>';
        tv += '<div id="tvQuestion" style="color:black;padding-bottom:15px;">'+chatterToTvQuestion+'</div>';
        tv += '<div id="tvLegalCopy" style="color:black;padding-bottom:15px;font-size: small;">'+chatterToTvLegalCopy+'</div>';
        jQuery('#chat-submit-form').prepend(tv);
      }

      function usa_setMarker(marker)
      {
        usa_debugOut('chat fn: usa_setMarker('+marker+')');
        //EchoSubmit.config.set("plugins.MetadataTweaks.markers", [marker]);
          //EchoSubmit.rerender("markers");
        //if (usa_liveChat && usa_useEchoMarkersOnAllTabs && usa_liveChatMarkers != '') marker = usa_liveChatMarkers;
        if (jQuery('#tvOnAir').attr('checked') == 'checked') marker = jQuery('#tvOnAir').val();
        //usa_debugOut('marker: '+marker);

        if (typeof EchoSubmit != 'undefined' && typeof EchoSubmit.config != 'undefined')
        {
          EchoSubmit.config.set("markers", [marker]);
          EchoSubmit.refresh();
          EchoSubmit.rerender("markers");
        }
      }

      function usa_updateMarkersPostLogin()
      {
        usa_debugOut('chat fn: usa_updateMarkersPostLogin()');

        if(showChatterToTv > 0)
        {
          usa_setMarker('');
        }
        /*if ((usa_liveChat && jQuery('#navAskTalent').hasClass('selected')) || (usa_liveChat && usa_useEchoMarkersOnAllTabs))
        {
          usa_setMarker(usa_liveChatMarkers);
        }
        else
        {
          usa_setMarker('');
        }*/
        //if (typeof EchoSubmit != 'undefined' && typeof EchoSubmit.rerender != 'undefined') EchoSubmit.rerender('shareContainer');
      }

      //DV: We will need this in a future iteration, so I'm leaving it for now
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

			if (chatShowPostComments == 1)
			{
				runEchoAuth();
				usa_buildSubmitForm('');
        if(showChatterToTv > 0)
          usa_buildChatterToTv('');
			}
			initEchoRiverClient();
		}
	}
})(jQuery);

Echo.Broadcast.subscribe("Stream.Item.onRender",
  function(topic, data, contextId) {
    if (typeof data.item.data.object.markers != "undefined")
    {
      for (var i=0 ; i<data.item.data.object.markers.length ; i++)
      {
        if (data.item.data.object.markers[i] == chatterToTvEchoMarker)
        {
          var item = $(data.item.target);
          item.find("div.echo-item-body").each(function(index) {
            $(this).html('<span class="commentAnnotation">'+chatterToTvCommentPrefix+'</span>' + $(this).html());
            //$(this).parent().parent().parent().parent().parent().parent().parent().addClass('<?=$showConfig['chatterToTv']['cssClass']; ?>');
          });
        }
      }
    }
  }
);
