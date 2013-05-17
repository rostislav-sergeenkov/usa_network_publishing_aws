/**
 * Javascript code for show homepage social chatter block
 * This shows the most recent chat with fans comment
 * and 1 reply, if there is one.
 * Uses Echo's mux API method for 'multiplex' requests
 * For more info on mux, see http://wiki.aboutecho.com/w/page/32433803/API-method-mux
 * By Donna Vaughan, May 15, 2013
 * Example mux query for this:
 * http://api.echoenabled.com/v2/mux?appkey=prod.usanetwork&requests=[{%22id%22:%22search1%22,%22method%22:%22search%22,%22q%22:%22%28childrenof:http://chatter.usanetwork.com/psych/public/comments%20-state:ModeratorDeleted,ModeratorFlagged,SystemFlagged,CommunityFlagged%20-user.state:ModeratorBanned%29%20sortOrder:reverseChronological%20safeHTML:true%20itemsPerPage:1%20children:1%22}]&callback=jsonp12345
 */
(function ($) {
	Drupal.behaviors.chat_with_fans_page = {
		attach: function(context){

			var usa_debug_flag = false; // set to false to turn off all console logging
			var usa_debug = function(msg)
			{
				if (typeof console != 'undefined' && usa_debug_flag) {
					console.log(msg);
				}
			}

			/**
			 * ago -- takes a time in the form yyyy-mm-ddThh:mm:ssZ
			 * and converts it to something like '# timeperiod ago', such as '3 days ago'
			 */
			var ago = function(time)
			{
				var periods = ["second", "minute", "hour", "day", "week", "month", "year", "decade"];
				var lengths = [60,60,24,7,4.35,12,10];

				var now = new Date(); // time();
				var jsTime = new Date(time);
				var difference = (now - jsTime)/1000;

				for (var j = 0; difference >= lengths[j] && j < (lengths.length-1); j++) {
					difference = difference / lengths[j];
				}

				difference = Math.round(difference);

				if (difference != 1)
				{
					periods[j] += "s";
				}

				return difference + " " + periods[j] + " ago";
			}

			/**
			 * outputShowComment -- takes the data
			 * returned from processShowCommentData
			 * and builds the html that is then
			 * inserted into div#usanetwork_social_chatter_body
			 */
			var outputShowComment = function()
			{
				// set defaults
				var commentPresent = 0;
				var showUrlLink = (showUrl != '') ? '<a href="'+showUrl+'/social/chat-with-fans">' : '';
				var showUrlLinkEnd = (showUrl != '') ? '</a>' : '';
				var commentHtml = '<span class="usanetwork_social_comment_link">Comment</span>';
				var joinHtml = '<div id="usanetwork_social_join"><span class="usanetwork_social_pointer_image"></span><span class="usanetwork_social_join_msg">join the conversation</span></div>';
				var separatorHtml = '<span class="usanetwork_social_separator">-</span>';
				var html = showUrlLink;

				// if data was returned, create html comment and comment reply, if there is one
				if (showData != null && typeof showData == 'object' && showData.length > 0)
				{
					for (var index in showData)
					{
						// for comment, index == 0
						if (index == 0)
						{
							html += '<div id="usanetwork_social_show_comment">'+
								'<img src="'+showData[0]["avatar"]+'">'+
								'<div>'+showData[0]["comment"]+'</div>'+
							'</div>'+
							'<div id="usanetwork_social_data">'+
								'<span class="usanetwork_social_post_date usanetwork_social_data">'+showData[0]["timeStr"]+'</span>'+
								'<span class="usanetwork_social_from usanetwork_social_data"> from usanetwork</span>'+
								separatorHtml+
								'<span class="usanetwork_social_author usanetwork_social_data">'+showData[0]["actor"]+'</span>'+
								separatorHtml+
								commentHtml +
							'</div>';
							commentPresent = 1;
						}

			/* @TODO: Remove this commented section if they do not want
			// to show a reply to the comment. Initial comps, showed a reply.
						// for a reply to the comment, index == 1
						if (index == 1)
						{
							html+= "<div id=\"showCommentReply\">"+
								"<div id=\"latestReply\">Latest Reply</div>"+
								"<img src=\""+showData[1]["avatar"]+"\">"+
								"<div class=\"comment\">"+showData[1]["comment"]+"</div>"+
								"<div class=\"postdate\">"+showData[1]["timeStr"]+" - </div>"+
								"<div class=\"separator\">-</div>"+
								"<div class=\"author\">"+showData[1]["actor"]+"</div>"+
							"</div>" + commentHtml;
						} */
					}
				}

				// if no comment was found
				if (!commentPresent)
				{
					html += '<div id="usanetwork_social_show_comment">Add a comment to join the conversation!</div>';
				}
				html += joinHtml + showUrlLinkEnd;

				$('#usanetwork_social_chatter_body').html(html);
			}

			/**
			 * processShowCommentData -- takes the data
			 * output from getShowCommentData and
			 * processes it, creating and returning an array
			 * called showData.
			 */
			var processShowCommentData = function(data)
			{
				var showData = [];
				if (typeof data == "object")
				{
					// loop through each search result and get necessary data
					for(var searchKey in data)
					{
						var entries = (typeof data[searchKey]["entries"] == "object") ? data[searchKey]["entries"] : null;

						// loop through each entry
						for (var entry in entries)
						{
							// verify some data
							if (typeof entries[entry]["object"]["content"] == "string")
							{
								var avatar = (typeof entries[entry]["actor"]["avatar"] != 'undefined' && entries[entry]["actor"]["avatar"] != '') ? entries[entry]["actor"]["avatar"] : "http://cdn.echoenabled.com/images/avatar-default.png";

								showData[entry] = { "showToken" : searchKey.replace("search_", ""), "avatar": avatar, "actor" : entries[entry]["actor"]["title"], "comment" : entries[entry]["object"]["content"], "timeStr" : ago(entries[entry]["postedTime"]) };
							}
							// we shouldn't get here
							// if we do, find out why and fix it!
							else
							{
								usa_debug(console.log("BUSTED"));
							}
						}
					}
				}

				return showData;
			}

			var showData = [];
			/**
			 * getShowCommentData -- uses ajax
			 * to get the results of the Echo mux query.
			 * If successful, it processes the data
			 * and inserts it into div#usanetwork_social_chatter_body.
			 */
			var getShowCommentData = function()
			{
				$.ajax({
					url: echoQuery,
					dataType: "jsonp",
					data: echoQueryParams,
					success: function(data){
						// According to MUX info, if there's an error, the following is returned
						// {"result": "error", "errorCode": <errorCode>, "errorMessage": <errorMessage>}
						if (data.result == 'error')
						{
							usa_debug('ERROR: '+data.errorMessage);
							showData = null;
							outputShowComment();
						}
						else
						{
							showData = processShowCommentData(data);
							outputShowComment();
						}
					}
				});
			}

			// Begin processing the Echo mux query
			getShowCommentData();
		}
	}
})(jQuery);
