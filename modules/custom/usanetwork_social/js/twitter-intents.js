// vim: set ts=8 sts=8 sw=8 noet:
/*
 * Copyright (c) 2006-2011 Echo <solutions@aboutecho.com>. All rights reserved.
 * You may copy and modify this script as long as the above copyright notice,
 * this condition and the following disclaimer is left intact.
 * This software is provided by the author "AS IS" and no warranties are
 * implied, including fitness for a particular purpose. In no event shall
 * the author be liable for any damages arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 * Version: v2.6.34
 */

(function($) {

var plugin = Echo.createPlugin({
	"name": "TwitterIntents",
	"applications": ["Stream"],
	"init": function(plugin, application) {
		plugin.wrapPluginRenderers();
		// rename "Reply" -> "Comment"
		Echo.Localization.extend({"Plugins.Reply.replyControl": "Comment"});
		plugin.extendTemplate("Item", '<span class="echo-item-tweetUserName"></span>',
			"insertAfter", "echo-item-authorName");
		plugin.extendTemplate("Item", '<span class="echo-item-tweetDate"></span>',
			"insertBefore", "echo-item-authorName");
		plugin.extendRenderer("Item", "body",
			plugin.renderers.Item.body);
		plugin.extendRenderer("Item", "controls",
			plugin.renderers.Item.controls);
		plugin.extendRenderer("Item", "controlsDelimiter",
			plugin.renderers.Item.controlsDelimiter);
		plugin.extendRenderer("Item", "date",
			plugin.renderers.Item.date);
		plugin.extendRenderer("Item", "tweetDate",
			plugin.renderers.Item.tweetDate);
		plugin.extendRenderer("Item", "tweetUserName",
			plugin.renderers.Item.tweetUserName);
		plugin.extendRenderer("Item", "authorName",
			plugin.renderers.Item.authorName);
		plugin.extendRenderer("Item", "avatar",
			plugin.renderers.Item.avatar);
		plugin.addItemControl(application,
			plugin.assembleControl("Reply", "tweet", application));
		plugin.addItemControl(application,
			plugin.assembleControl("Retweet", "retweet", application));
		plugin.addItemControl(application,
			plugin.assembleControl("Favorite", "favorite", application));
		plugin.addCss(plugin.css);

		application.config.get("target").addClass("echo-TwitterIntents-plugin");

		// icon must be visible to show that the item is from Twitter
		application.config.set("viaLabel.icon", true);

		if (!window.twttr) {
			$.getScript("//platform.twitter.com/widgets.js");
		}
	}
});

plugin.renderers = {"Item": {}};

plugin.addLabels({
	"reply": "Reply",
	"retweet": "Retweet",
	"favorite": "Favorite"
});

plugin.renderers.Item.body = function() {
	var item = this;
	// disable hashtag icons for tweets even if defined by the user
	var key = "contentTransformations." + item.data.object.content_type + ".hashtags";
	if (item.config.get(key)) {
		item.config.set(key, false);
		item.parentRenderer("body", arguments);
		item.config.set(key, true);
	} else {
		item.parentRenderer("body", arguments);
	}
};

plugin.renderers.Item.controlsDelimiter = function(element, dom, extra) {
	var item = this;
	extra = extra || {};
	if (!extra.previousControl) return;
	if (extra.previousControl.plugin == plugin.name
		&& extra.nextControl.plugin != plugin.name) {
			return $('<span class="echo-item-control-delim"> | </span>');
	}
	return item.parentRenderer("controlsDelimiter", arguments);
};

plugin.renderers.Item.controls = function(element, dom) {
	var item = this;
	// almost copy of original renderer
	item.assembleControls();
	item.sortControls();
	var container = element.empty();
	$.each(item.controlsOrder, function(i, name) {
		var data = item.controls[name];
		if (!data || !data.visible()
			// disabling controls from Reply and Like plugins
			|| data.plugin == "Reply" || data.plugin == "Like") {
				return;
		}
		var control = data.dom || item.render("control", undefined, undefined, data);
		if (control) {
			item.controls[name].element = control;
			if (data.clickable) {
				item.controls[name].clickableElements = $('.echo-clickable', control);
				if (!item.controls[name].clickableElements.length) {
					item.controls[name].clickableElements = control;
				}
			}
			var delimiter = item.render("controlsDelimiter", undefined, dom, {
				"previousControl": item.controls[item.controlsOrder[i - 1]],
				"nextControl": data
			});
			delimiter && container.append(delimiter);
			container.append(control);
		}
	});

	// reinitialize twitter intents after we have added new controls
	window.twttr && window.twttr.widgets && window.twttr.widgets.load();

	var activeClass = "echo-item-intentControlActive";
	$.map(item.controlsOrder, function(name) {
		var data = item.controls[name];
		if (data && data.plugin == plugin.name && data.visible()) {
			data.element
				// unbind click handler so that only twitter handler could work
				.unbind("click")
				.unbind("mouseover mouseout")
				.hover(
					function() { data.element.addClass(activeClass); },
					function() { data.element.removeClass(activeClass); }
				);
		}
	});
};

plugin.renderers.Item.date = function(element) {
	var item = this;
	item.parentRenderer("date", arguments);
	if (!plugin.isTweet(item)) return;
	element.hide();
	item.rerender("tweetDate");
};

plugin.renderers.Item.tweetDate = function(element) {
	var item = this;
	if (!plugin.isTweet(item)) {
		element.hide();
		return;
	}
	// dupplicate age calculation in case tweetDate is rendered before normal date
	item.calcAge();
	var d = new Date(item.timestamp * 1000);
	return item.hyperlink({
		"href": item.data.object.id,
		"class": "echo-item-twitterPermalink echo-clickable echo-secondaryFont echo-secondaryColor",
		"title": d.toLocaleTimeString() + " - " + d.toLocaleDateString(),
		"caption": item.age
	}, {
		"openInNewWindow": item.config.get("openLinksInNewWindow"),
		"skipEscaping": true
	});
};

plugin.renderers.Item.tweetUserName = function(element) {
	var item = this;
	return item.hyperlink({
		"href": item.data.actor.id,
		"caption": "@" + plugin.extractTwitterID(item),
		"class": "echo-secondaryFont echo-secondaryColor"
	}, {
		"openInNewWindow": item.config.get("openLinksInNewWindow"),
		"skipEscaping": true
	});
};

plugin.renderers.Item.authorName = function(element) {
	var item = this;
	element.addClass("echo-item-tweetScreenName");
	return item.hyperlink({
		"href": item.data.actor.id,
		"caption": item.parentRenderer("authorName", arguments)
	}, {
		"openInNewWindow": item.config.get("openLinksInNewWindow"),
		"skipEscaping": true
	});
};

plugin.renderers.Item.avatar = function(element) {
	var item = this;
	var avatar = item.parentRenderer("avatar", arguments);
	// blocking all previous and future onclick handlers
	avatar.unbind("click").bind("click", function(e) {
		e.stopPropagation();
	});
	return $(item.hyperlink({
		"href": item.data.actor.id
	}, {
		"openInNewWindow": item.config.get("openLinksInNewWindow"),
		"skipEscaping": true
	})).append(avatar);
};

plugin.wrapPluginRenderers = function() {
	// make wrapper functions for renderers to be able to "disable" plugins
	// depending on the item: if it's tweet or not
	$.each(["Reply", "Like", plugin.name], function(i, pluginName) {
		// we should wrap those renderers only once on the page
		if (!Echo.Plugins[pluginName] || Echo.isExtended(plugin.name, [pluginName, "renderers"])) return;
		var renderers = Echo.Plugins[pluginName].renderers;
		if (!renderers || !renderers.Item) return;
		$.each(renderers.Item, function(rendererName, renderer) {
			renderers.Item[rendererName] = function() {
				var item = this;
				// we skip renderer from pluginName in two cases:
				//   - it is TwitterIntents plugin but item is not tweet;
				//   - it is Reply or Like plugin and item is tweet.
				if (plugin.isTweet(item) ^ (pluginName == plugin.name)) {
					return item.parentRenderer(rendererName, arguments);
				} else {
					return renderer.apply(item, arguments);
				}
			};
		});
	});
};

plugin.assembleControl = function(name, action, application) {
	return function() {
		var item = this;
		var match = item.data.object.id.match(/\/(\d+)$/);
		var id = match && match[1];
		return {
			"name": name,
			"label": plugin.label(name.toLowerCase()),
			"template": item.hyperlink({
				"href": "https://twitter.com/intent/" +	action + "?in_reply_to=" + id + "&tweet_id=" + id,
				"class": "echo-item-control echo-clickable echo-item-intentControl echo-secondaryColor echo-item-control-{Data:name}",
				"caption":
					'<span class="echo-item-twitterIntentsIcon echo-item-twitterIntentsIcon{Data:name}">&nbsp;</span>' +
					'<span>{Data:label}</span>'
			}, {
				"openInNewWindow": item.config.get("openLinksInNewWindow"),
				"skipEscaping": true
			}),
			"visible": id && plugin.isTweet(item)
		};
	};
};

plugin.isTweet = function(item) {
	return item.data.source.name == "Twitter";
};

plugin.extractTwitterID = function(item) {
	var match = item.data.actor.id.match(/twitter.com\/(.*)/);
	return match ? match[1] : item.data.actor.id;
};

plugin.css =
	".echo-item-avatar a img { border: 0px; }" +
	".echo-TwitterIntents-plugin .echo-item-footer { margin-top: 5px; }" +
	".echo-TwitterIntents-plugin .echo-item-text a { text-decoration: none; }" +
	".echo-TwitterIntents-plugin .echo-item-text a:hover { text-decoration: underline; }" +
	".echo-TwitterIntents-plugin .echo-item-modeSwitch { margin-left: 7px; }" +
	".echo-item-tweetUserName { margin-left: 4px; font-size: 11px; font-weight: normal; padding-top: 1px; }" +
	".echo-item-tweetUserName a, .echo-item-tweetScreenName a, .echo-item-intentControl { text-decoration: none; }" +
	".echo-item-tweetScreenName a { color: #333333; }" +
	".echo-item-twitterPermalink { float: right; text-decoration: none; }" +
	".echo-item-twitterPermalink:hover { text-decoration: underline; }" +
	".echo-item-twitterPermalink .echo-item-date { float: none; }" +
	".echo-item-twitterIntentsIcon { width: 15px; height: 15px; display: inline-block; margin-right: 3px; background: url(https://si0.twimg.com/images/dev/cms/intents/icons/sprites/everything-spritev2.png) no-repeat; }" +
	".echo-item-twitterIntentsIconReply { background-position: 0px -2px; }" +
	".echo-item-twitterIntentsIconRetweet { background-position: -80px -2px; }" +
	".echo-item-twitterIntentsIconFavorite { background-position: -32px -2px; }" +
	".echo-item-intentControlActive .echo-item-twitterIntentsIconReply { background-position: -16px -2px; }" +
	".echo-item-intentControlActive .echo-item-twitterIntentsIconRetweet { background-position: -96px -2px; }" +
	".echo-item-intentControlActive .echo-item-twitterIntentsIconFavorite { background-position: -48px -2px; }";

})(jQuery);

