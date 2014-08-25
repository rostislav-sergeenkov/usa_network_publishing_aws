/**
 * Javascript code for global chat with fans
 * Uses Echo's mux API method for 'multiplex' requests
 * For more info on mux, see http://wiki.aboutecho.com/w/page/32433803/API-method-mux
 * By Donna Vaughan, May 2, 2013
 */
(function ($) {
	Drupal.behaviors.global_chat_with_fans_page = {
		attach: function(context){


			var usa_debug_flag = false; // set to false to turn off all console logging
			var usa_debug = function(msg)
			{
				if (usa_debug_flag)
				{
					if (typeof console != 'undefined') {
						console.log(msg);
					}
					else
					{
						//alert(msg);
					}
				}
			}

			/**
			 * getKeys
			 * returns a list of index keys for an object
			 */
			var getKeys = function(obj)
			{
				 var keys = [];
				 for(var key in obj){
						keys.push(key);
				 }
				 return keys;
			}

			/**
			 * parseDateStr
			 * re-converts UTC time to UTC time
			 * because of a problem with IE8
			 */
			function parseDate(str) {
				var v = str.split(/[-T:]/g);
				return Date.UTC(v[0],(v[1]-1),v[2],v[3],v[4],v[5].replace('Z', ''),'000');
			}

			/**
			 * ago -- takes a time in the form yyyy-mm-ddThh:mm:ssZ
			 * and converts it to something like '# timeperiod ago', such as '3 days ago'
			 */
			var ago = function(time)
			{
				var periods = ["second", "minute", "hour", "day", "week", "month", "year", "decade"];
				var lengths = [60,60,24,7,4.35,12,10];

				var now = new Date();
				var jsTime = new Date(parseDate(time));
				var difference = (now - jsTime)/1000;

				for (var j = 0; difference >= lengths[j] && j < (lengths.length-1); j++) {
					difference = difference / lengths[j];
				}

				difference = Math.round(difference);

				if (difference != 1)
				{
					periods[j] += "s";
				}
				var agoStr = difference + ' ' + periods[j] + ' ago';
				if (agoStr == '1 day ago') agoStr = 'Yesterday';

				return agoStr;
			}

			/**
			 * processGlobalChatWithFansData -- takes the data
			 * output from getGlobalChatWithFansData and
			 * processes it, creating and returning an array
			 * called showData.
			 */
			var processGlobalChatWithFansData = function(data)
			{
				if (typeof data == "object")
				{
					var showData = {};

					// loop through each search result and get necessary data
					for(var searchKey in data) {
						var result = (typeof data[searchKey]["result"] == "string") ? data[searchKey]["result"] : null;
//						var result = data[searchKey]["result"];
						var entries = (typeof data[searchKey]["entries"] == "object" && typeof data[searchKey]["entries"][0] == "object") ? data[searchKey]["entries"][0] : null;

						// some items contain empty entries, so skip those
						if (entries != null) {
							// if there was an error, show the error in the console
							if (result == "error") {
								usa_debug("ERROR: "+ data[searchKey]["errorMessage"]);
							}
							// if successful, process data
							else if (entries != null && typeof entries["object"]["content"] == "string" && entries["object"]["content"] != "")
							{
								var vars = new Array();
								vars["showToken"] = searchKey.replace("search_", "");
								vars["avatar"] = (typeof entries["actor"]["avatar"] != 'undefined' && entries["actor"]["avatar"] != '') ? entries["actor"]["avatar"] : "http://cdn.echoenabled.com/images/avatar-default.png";
								vars["actor"] = entries["actor"]["title"];
								vars["comment"] = entries["object"]["content"];
								vars["timeStr"] = ago(entries["postedTime"]);

								var showArray = {};
								for (var index in vars) {
									showArray[index] = vars[index];
								}
								showData[vars["showToken"]] = showArray;
							}
							// we shouldn't get here
							// if we do, find out why and fix it!
							else
							{
								usa_debug("BUSTED: ");
								usa_debug(result);
								usa_debug(entries);
							}
						}
					}
					return showData;
				}
			}

			/**
			 * outputGlobalChatWithFans -- takes the data
			 * returned from processGlobalChatWithFansData
			 * and inserts it into html that is then
			 * inserted into div#showList
			 */
			var outputGlobalChatWithFans = function(showData)
			{
				var html = '';
				for (var show in showData) {
					var showName = showArray[show][0];
					var showUrlPath = showArray[show][1];
					var avatar = (typeof showData[show]["avatar"] != 'undefined' && showData[show]["avatar"] != '') ? showData[show]["avatar"] : 'http://cdn.echoenabled.com/images/avatar-default.png';

					html += '<div class="usanetwork_social_global_show" onclick="javascript:window.location.href=\'/'+showUrlPath+'/social/chat-with-fans\'">'+
							'<div class="usanetwork_social_global_comment">'+
								'<h3>'+showName.toLowerCase()+'</h3>'+
								'<div class="echo-item-content">'+
									'<div class="echo-item-avatar-wrapper">'+
										'<div class="echo-item-avatar">'+
											'<img src="'+avatar+'" width="48" />'+
										'</div>'+
									'</div>'+
									'<div class="echo-item-wrapper echo-item-wrapper-root">'+
										'<div class="echo-item-subwrapper">'+
											'<div class="echo-item-frame">'+
												'<div class="author echo-item-authorName echo-linkColor">'+showData[show]["actor"]+'</div>'+
												'<div class="echo-clear"></div>'+
												'<div class="comment echo-item-data">'+
													'<div class="echo-item-body">'+
														'<span class="echo-item-text">'+showData[show]["comment"]+'</span>'+
													'</div>'+
												'</div>'+
												'<div class="echo-item-footer">'+
													'<img class="echo-item-sourceIcon echo-clickable" style="display: block" src="http://www.usanetwork.com/_img/chatter_icon_red_16x16.gif" />'+
													'<div class="echo-item-date">'+showData[show]["timeStr"]+'</div>'+
													'<div class="echo-item-from">&nbsp;from&nbsp;usanetwork</div>'+
													'<div class="echo-clear"></div>'+
												'</div>'+
											'</div>'+
										'</div>'+
									'</div>'+
									'<div class="echo-clear"></div>'+
								'</div>'+
							'</div>'+
							'<div class="go-chat">go chat</div>'+
						'</div>'+"\n";
				}
				jQuery('#showList').html(html);
			}

			var showData = {};
			/**
			 * getGlobalChatWithFansData -- uses ajax
			 * to get the results of the Echo mux query.
			 * If successful, it processes the data
			 * and inserts it into div#showList.
			 */
			var getGlobalChatWithFansData = function()
			{
				jQuery.support.cors = true; // this is needed to fix an IE9 jQuery POST, cross-domain (CORS) problem
				jQuery.ajax({
					url: echoQuery,
					data: echoQueryParams,
					dataType: 'text',
					crossDomain: true,
					type: 'POST'
				})
				.done(function(data){
					// this method of using a POST with a cross-domain request
					// returns a string instead of a json object, so we have to clean up
					// the string a little before parsing it to form an object
					if (typeof data == 'string') {
						var newData = data.replace(/(\r\n|\n|\r|\t)/gm, ""); // remove all line breaks and tabs
						newData = newData.replace(/^\({/, "{"); // replace "({" at the beginning of the string with "{"
						newData = newData.replace(/}\);$/, "}"); // replace a string ending with "});" with "}"
						data = jQuery.parseJSON(newData);
					}
					showData = processGlobalChatWithFansData(data);
					var showDataKeys = getKeys(showData);
					if (showDataKeys.length > 0) {
						outputGlobalChatWithFans(showData);
					} else {
						jQuery('#showList').html("No shows found. Please come back again soon.");
					}
				})
				.fail(function(jqXHR, textStatus, errorThrown) {
					usa_debug('error');
					usa_debug(errorThrown);
				});
			}

			// Begin processing the Echo mux query
			getGlobalChatWithFansData();



		}
	}
})(jQuery);
