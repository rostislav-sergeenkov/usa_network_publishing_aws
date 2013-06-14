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
  Drupal.behaviors.show_homepage_social_chatter = {
    attach: function (context, settings) {

			var usa_debugFlag = false;
			var usa_debug = function(msg)
			{
				if (usa_debugFlag)
				{
					if (typeof console != 'undefined')
					{
						console.log(msg);
					}
					else
					{
						// alert(msg);
					}
				}
			}

			var strip_tags = function(input, allowed) {
				// http://kevin.vanzonneveld.net
				// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +   improved by: Luke Godfrey
				// +      input by: Pul
				// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +   bugfixed by: Onno Marsman
				// +      input by: Alex
				// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +      input by: Marc Palau
				// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +      input by: Brett Zamir (http://brett-zamir.me)
				// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +   bugfixed by: Eric Nagel
				// +      input by: Bobby Drake
				// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
				// +   bugfixed by: Tomasz Wesolowski
				// +      input by: Evertjan Garretsen
				// +    revised by: Rafał Kukawski (http://blog.kukawski.pl/)
				// *     example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
				// *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
				// *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
				// *     returns 2: '<p>Kevin van Zonneveld</p>'
				// *     example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
				// *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
				// *     example 4: strip_tags('1 < 5 5 > 1');
				// *     returns 4: '1 < 5 5 > 1'
				// *     example 5: strip_tags('1 <br/> 1');
				// *     returns 5: '1  1'
				// *     example 6: strip_tags('1 <br/> 1', '<br>');
				// *     returns 6: '1  1'
				// *     example 7: strip_tags('1 <br/> 1', '<br><br/>');
				// *     returns 7: '1 <br/> 1'
				allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
				var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
					commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
				return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
					return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
				});
			}

			var usa_trimCommentLength = function()
			{
				usa_debug('fn: usa_trimCommentLength()');
				if ($('#usanetwork_social_show_comment').html().length > 0)
				{
					var fr = $("#usanetwork_social_show_comment");
					fr.find(".echo-item-text").each(function(index) {
						var newComment = '';
						var newWords = [];
						var words = [];
						var comment = $(this).html();
						var cleanComment = strip_tags(comment);
						words = cleanComment.split(' ');
						if (words.length > maxWordsPerComment)
						{
							newWords = words.slice(0, maxWordsPerComment);
							newComment = newWords.join(' ') + ' &hellip;';
							$(this).html(newComment);
						}
					});
				}
				else
				{
					usa_trimCommentLengthTO = setTimeout(usa_trimCommentLength, 1000 * 10);
				}
			}

			var usa_trimCommentCount = function()
			{
				usa_debug('fn: usa_trimCommentCount()');
				if ($('#usanetwork_social_show_comment').html().length > 0)
				{
					var fr = $("#usanetwork_social_show_comment");
					var count = 0;
					fr.find(".echo-item-content").each(function(index) {
						if (count >= maxComments)
						{
							$(this).remove();
						}
						count++;
					});
				}
				else
				{
					usa_trimCommentCountTO = setTimeout(usa_trimCommentCount, 1000 * 10);
				}
			}

			var EchoRiverClient;
			function initEchoRiverClient() {
				usa_debug('fn: initEchoRiverClient()');
				EchoRiverClient = new Echo.Stream({
						"target": $('#usanetwork_social_show_comment'),
						"appkey": echoAppKey,
						"query": chatWithFansEQL,
						"maxBodyCharacters": 2000,
						"viaLabel": {"icon": true,"text": true},
						"reTag": false,
						"streamStateLabel": {"icon": true,"text": true},
						"aggressiveSanitization": false,
						"plugins": [
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

			Echo.Broadcast.subscribe("Stream.onReady",
				function(topic, data, contextId) {
					usa_trimCommentCount();
					usa_trimCommentLength();
				}
			);

			initEchoRiverClient();

		}
	}
})(jQuery);
