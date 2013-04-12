(function ($) {
var plugin = Echo.createPlugin({
	"name": "InlineMedia",
	"applications": ["Stream"],
	"init": function (plugin, application) {
		// append css
		plugin.addCss(
			'.echo-item-body img { border:0; }' +
			'.echo-item-body .echo-item-photo {display:inline-block; }' +
			'.echo-item-body .echo-item-photo img {margin:0 5px 5px 0; border:1px solid #CCCCCC; padding:3px; background:#FFFFFF; }' +
			'.echo-item-body .echo-item-photo img:hover { border:1px solid #aeaeae; }' +
			'.echo-item-body .echo-media-container {margin-top:10px;}'
		, 'InlineMedia');
		//
		plugin.extendRenderer("Item", "body", function(element, dom) {
			var item = this;
			this.parentRenderer("body", arguments);
			//
			plugin.doInlineMedia(element, application);
		});
	}
});

plugin.doInlineMedia = function(element, application) {
	//
	var settings = plugin.config.get(application, "settings");
	//
	var content = $(element).html();
	// empty content and update it
	var mediaChanges = plugin.processMedia(content);
	var content2 = mediaChanges[1];
	if((settings && settings.shortenUrls == true) || !settings || typeof settings.shortenUrls == "undefined") {
		$(element).html(content2);
	};
	var media = mediaChanges[0];
	if(media != "") {
		// create a media container
		var el_media_container = $('<div class="echo-media-container"></div>');
		$(media).find("img").each(function(index) {
			var el_img_src = $(this).attr("src");
			// remove any duplicates
			$(element).find("img").each(function(index) {
				if($(this).attr("src") == el_img_src) {
					$(this).remove();
				}
			});
		});
		// add on error
		$(media).find("img").error(function() {
			// remove <a><img /></a> if there was an error
			$(this).parent().remove();
		});
		// append media to item
		el_media_container.append($(media));
		$(element).find('span').first().append(el_media_container);
	}
	// check that any image that has an <a> tag that the "href" matches the img "src"
	$(element).find("img").each(function(index) {
		var el_img_src = $(this).attr("src");
		var parent_el_img_src = $(this).parent().attr("href");
		if(parent_el_img_src) {
			if(!parent_el_img_src.indexOf("jpg") || !parent_el_img_src.indexOf("gif") || !parent_el_img_src.indexOf("png")) {
				if(parent_el_img_src != el_img_src) {
					// set the href so the modal popup works
					$(this).parent().attr("href", el_img_src);
				}
			};
		};
	});
	// add max height
	// set imageMaxHeight
	if(settings && settings.imageMaxHeight) {
		$(element).find("img").css("maxHeight", settings.imageMaxHeight + "px");
	}
	// add modal popups
	plugin.doFancybox(element);
};

plugin.doFancybox = function (target) {
	function formatTitle(title, currentArray, currentIndex, currentOpts) {
		return '<div class="tip7-title">' + (title && title.length ? '' + title : '' ) + '</div>';
	}
	// images
	$(target).find('a').each(function() {
		// fix this http://...?url=http://...
		// this breaks modal popup
		var exp = /=(http:\/\/[a-zA-Z0-9\.\/]*)/ig
		var matches = null;
		try {
			var matches = $(this).attr("href").match(exp);
		} catch (e) {}
		if(matches != null && matches.length > 0) {
			$.each(matches, function(key, value) {
				value = value.replace("=", "");
				var new_querystring_value = encodeURIComponent(value);
				$(this).attr("href", new_querystring_value);
			});
		};
		//
		var photo = $(this).find('img');
		if(photo.length) {
			photo = photo.parent();
			var fancyboxConfig = {
				'autoScale':true,
				'titlePosition': 'inside',
				//'centerOnScroll': true,
				'titleFormat': formatTitle,
				'onStart': function() {
					var destination = photo.parent().parent().parent().parent().parent().parent().offset().top-75;
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1500, function() {
						// after scroll center to viewport
						$.fancybox.center();
						// do it again just in case fancybox missed doing center()
						var i = 0;
						var x = setInterval(function() {
							i++;
							$.fancybox.center();
							$.fancybox.resize(); // hack to get fancybox to center right
							if(i >= 5) clearInterval(x);
						}, 1500);
					});
				}
			};
			// setting the content fixes twitpic and plixi
			var content = $('<span><img src="' + $(this).attr("href") + '" style="max-height:400px;" /></span>');
			content.find("img").load(function() {
			});
			var tmp = {
				'autoScale':true,
				'content': content,
				'padding': 20,
				'height': 400,
				'width': 400
			};
			var fancyboxConfig = $.extend({}, fancyboxConfig, tmp);

			photo.attr("rel", "group").fancybox(fancyboxConfig);
		};
	});
	// videos
	$(target).find('a').each(function() {
		var video = $(this).find('object');
		if(video.length) {
			video = video.parent();
			var fancyboxConfig = {
				'autoScale':false,
				'transitionIn': 'none',
				'transitionOut': 'none',
				'titlePosition': 'inside',
				'width': 680,
				'height': 495,
				'type': 'swf',    // <--add a comma here
				'swf': {'wmode': 'transparent', 'allowfullscreen':'true'},
				'onStart': function() {
					var destination = video.parent().parent().parent().parent().parent().parent().offset().top-75;
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1500, function() {
						// after scroll center to viewport
						$.fancybox.center();
						// do it again just in case fancybox missed doing center()
						var i = 0;
						var x = setInterval(function() {
							i++;
							$.fancybox.center();
							if(i >= 2) clearInterval(x);
						}, 1500);
					});
				}
			};
			video.attr("rel", "group").fancybox(fancyboxConfig);
		};
	});
};

plugin.processMedia = function(content) {
	//
	var content2 = "";
	var contentOriginal = content;
	// replace normal image urls

	// parse urls and look for images
	//var matches = content.match(/(\s|\n|>|^)(\w+:\/\/[^\s\n<]+)/g);
	
	var element = $("<span></span>").html(content);
	
	//
	//var exp = /((https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*)/ig
	//var matches = content.match(exp);
	//
	var image_matches = [];
	//
	//$.each(matches, function(key, value) {
	$(element).find("a").each(function(key, value) {
		//console.log(matches);
		var url = value.toString(); //jQuery.trim(value);
		var urlOriginal = url;
		var urlLabel = null;
		// remove trailing slash
		if(url.charAt(url.length-1) == '/')  url = url.substring(0, url.length-1);
		// skip images already embedded
		if(url.indexOf(".jpg") != -1) {
			return false;
		}
		if(url.indexOf("tweetphoto.com") != -1) {
			// Tweet Photo
			// http://groups.google.com/group/tweetphoto/web/fetch-image-from-tweetphoto-url
			var tmp = {
				"image": "http://TweetPhotoAPI.com/api/TPAPI.svc/imagefromurl?size=big&url=" + url,
				"thumbnail": "http://TweetPhotoAPI.com/api/TPAPI.svc/imagefromurl?size=thumbnail&url=" + url
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'tweetphoto';
		} else if(url.indexOf("twitpic.com") != -1) {
			// http://twitpic.com/1hdu54
			// Tweet Pic
			// http://twitpic.com/api.do#thumbnails
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://twitpic.com/show/full/" + image_id,
				"thumbnail": "http://twitpic.com/show/thumb/" + image_id
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'twitpic';
		} else if(url.indexOf("yfrog.com") != -1) {
			// http://yfrog.com/08dyjj
			// yfrog
			// http://code.google.com/p/imageshackapi/wiki/YFROGthumbnails
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://yfrog.com/" + image_id + ".th.jpg",
				"thumbnail": "http://yfrog.com/" + image_id + ".th.jpg"
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'yfrog';
		} else if(url.indexOf("twitgoo.com") != -1) {
			// http://twitgoo.com/p4oxe	
			// twitgoo
			// http://twitgoo.com/docs/TwitgooHelp.pdf
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://twitgoo.com/show/img/" + image_id,
				"thumbnail": "http://twitgoo.com/show/thumb/" + image_id
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'twitgoo';
		} else if(url.indexOf("flickr.com") != -1) {	
			// http://www.flickr.com/photos/charmaineleah/4812886517/
			var tmp = url.split('/');
			var image_id = tmp[5];
			function flickrShortID(num){
				if(typeof num!=='number') num=parseInt(num);
				var enc='', alpha='123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
				var div=num,mod;
				while(num>=58){ 
					div=num/58;mod=num-(58*Math.floor(div));
					enc=''+alpha.substr(mod,1) +enc;
					num=Math.floor(div);
				}
				return (div ? ''+alpha.substr(div,1)+enc : enc);
			};
			var flickr_short_id = flickrShortID(image_id);
			var tmp = {
				"image": "http://flic.kr/p/img/" + flickr_short_id + "_m.jpg",
				"thumbnail": "http://flic.kr/p/img/" + flickr_short_id + "_t.jpg"
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'flickr';
		} else if(url.indexOf("flic.kr") != -1) {
			// http://flic.kr/p/7V5Xie	
			// flickr
			// http://www.flickr.com/groups/api/discuss/72157622939992319/
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://flic.kr/p/img/" + image_id + "_m.jpg",
				"thumbnail": "http://flic.kr/p/img/" + image_id + "_t.jpg"
			};
			tmp.key = value;
			image_matches.push(tmp);
			urlLabel = 'flickr';
		} else if(url.indexOf("http://instagr.am/p/") != -1) {
			// http://instagr.am/p/LG9CeaP22g/
			// http://instagr.am/developer/embedding/
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://instagr.am/p/" + image_id + "/media/?size=m",
				"thumbnail": "http://instagr.am/p/" + image_id + "/media/?size=t"
			};
			tmp.key = value;
			image_matches.push(tmp);
			//
			urlLabel = 'instagram';
		}  else if (url.indexOf("http://instagram.com/p/") != -1) {
			// http://instagr.am/p/LG9CeaP22g/
			// http://instagr.am/developer/embedding/
			var tmp = url.split('/');
			var image_id = tmp[tmp.length-1];
			var tmp = {
				"image": "http://instagr.am/p/" + image_id + "/media/?size=m",
				"thumbnail": "http://instagr.am/p/" + image_id + "/media/?size=t"
			};
			tmp.key = value;
			image_matches.push(tmp);
		};
		if(urlLabel != null) {
			contentOriginal = contentOriginal.replace('<a target="_blank" href="'+urlOriginal+'">'+urlOriginal+'</a>',
				'<small>[<a target="_blank" href="'+urlOriginal+'">'+urlLabel+'</a>]</small>');
		};
	});
	//
	var added_media = [];
	$.each(image_matches, function(i, value) {
		if($.inArray(value.thumbnail, added_media) == -1) {
			content2 += '<a href="' + value.image + '" class="echo-item-photo"><img src="' + value.thumbnail + '" /></a>';
			added_media.push(value.thumbnail);
		}
	});
	
	// spotify
	var exp = /(spotify:.+?:[a-zA-Z0-9:\+\.]+)/ig
	var matches = content.match(exp);
	if(matches != null && matches.length > 0) {
		$.each(matches, function(key, value) {
			var url = value.toString();
			var spotify_url = 'https://embed.spotify.com/?uri=' + url;
			// if the <iframe> isn't already in the html text
			if($('<span>'+content2+'</span>').find('iframe [src="' + spotify_url + '"]').length == 0) {
				contentOriginal = contentOriginal.replace(url, '<small>[<a href="'+url+'" target="_blank">spotify</a>]</small>');
				content2 += '<div class="echo-media-item-spotify"><iframe src="' + spotify_url + '" width="300" height="80" frameborder="0" allowtransparency="true"></iframe></div>';
			};
		});
	};
	// spotify
	var exp = /(http\:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+)/ig
	var matches = content.match(exp);
	var spotify_iframes = {};
	if(matches != null && matches.length > 0) {
		$.each(matches, function(key, value) {
			var url = value.toString();
			var tmp = url.split('/');
			var track_id = tmp[tmp.length-1];
			if(spotify_iframes[track_id] != true) {
				var spotify_url = 'https://embed.spotify.com/?uri=spotify:track:' + track_id;
				spotify_iframes[track_id] = true;
				// if the <iframe> isn't already in the html text
				if($(element).find('iframe [src="' + spotify_url + '"]').length == 0 && $(content2).find('iframe [src="' + spotify_url + '"]').length == 0) {
					contentOriginal = contentOriginal.replace('<a target="_blank" href="'+url+'">'+url+'</a>',
						'<small>[<a target="_blank" href="'+url+'">spotify</a>]</small>');
					
					content2 += '<div class="echo-media-item-spotify"><iframe src="' + spotify_url + '" width="300" height="80" frameborder="0" allowtransparency="true"></iframe></div>';
				};
			};
		});
	};	
	

	
	// update content
	var video_matches = [];
	var exp = /((https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
	var matches = content.match(exp);
	if(matches != null && matches.length > 0) {
		$.each(matches, function(key, value) {
			//console.log(matches);
			var url = value.toString();
			var urlOriginal = url;
			var urlLabel = null;
			// remove trailing slash
			if(url.charAt(url.length-1) == '/')  url = url.substring(0, url.length-1);
			// remove host
			url = url.replace("http://", "");
			// split into chunks
			var url_bits = url.split("/");
			//
			if(url.indexOf("youtube.com") != -1) {
				// www.youtube.com/watch?v=V7eR6wtjcxA
				var vid = plugin.querySt(url, "v");
				if(vid == "")  {
					// nothing
				} else {
					var value = "http://www.youtube.com/v/" + vid + "&hl=en_US&fs=1&";
					var tmp = {
						"id": vid,
						"embed": plugin.getEmbed(value, 250, 375),
						"src": value,
						"thumbnail": "http://img.youtube.com/vi/" + vid + "/1.jpg"
					}
					tmp.key = url;
					video_matches.push(tmp);
					urlLabel = 'youtube';
				};
			}/* else if(url.indexOf("twitvid.com") != -1) {
				// twitvid.com/A0EET
				var vid = url_bits[1];
				var value = "http://www.twitvid.com/player/" + vid;
				var tmp = {
					"embed": plugin.getEmbed(value, 250, 375),
					"src": value,
					"thumbnail": "http://images.twitvid.com/" + vid + ".jpg"
				}
				tmp.key = url;
				video_matches.push(tmp);
				urlLabel = 'twitvid';
			}*/
			if(urlLabel != null) {
				contentOriginal = contentOriginal.replace('<a target="_blank" href="'+urlOriginal+'">'+urlOriginal+'</a>',
					'<small>[<a target="_blank" href="'+urlOriginal+'">'+urlLabel+'</a>]</small>');
			};
		});
	};
	var added_media = [];
	$.each(video_matches, function(i, value) {
		if($.inArray(value.key, added_media) == -1) {
			// check for duplicates
			//console.log(value.id);
			if($(contentOriginal).find('.echo-item-files').length) {
				content2 = '';
				return;
			};
			//
			var src = value.src + (value.src.indexOf("?") != -1 ? '' : '?') + "iframe=true&width=500&height=400";
			content2 += '<a href="' + src + '" class="echo-item-video">' +value.embed + '</a>';
			added_media.push(value.key);
		}
	});
	
	return [content2, contentOriginal];
};

plugin.querySt = function (hu, ji) {
	hu = hu.split("?");
	if(hu.length >= 2) {
		hu = hu[1];
	} else {
		return "";
	}
	//hu = window.location.search.substring(1);
	var gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		var ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
	return "";
}

plugin.getEmbed = function (url, height, width) {
	return '<object width="' + width + '" height="' + height + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="wmode" value="transparent" /><param name="movie" value="' + url + '" /><embed src="' + url + '" allowFullScreen="true" allowScriptAccess="always" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '"></embed></object>';
}

})(jQuery);