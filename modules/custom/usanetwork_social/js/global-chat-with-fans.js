/**
 * Javascript code for global chat with fans
 * Uses Echo's mux API method for 'multiplex' requests
 * For more info on mux, see http://wiki.aboutecho.com/w/page/32433803/API-method-mux
 * By Donna Vaughan, May 2, 2013
 */
var usa_debug_flag = true; // set to false to turn off all console logging
function usa_debug(msg)
{
	if (typeof console != 'undefined' && usa_debug_flag) {
		console.log(msg);
	}
}

/**
 * getKeys
 * returns a list of index keys for an object
 */
function getKeys(obj)
{
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

/**
 * ago -- takes a time in the form yyyy-mm-ddThh:mm:ssZ
 * and converts it to something like '# timeperiod ago', such as '3 days ago'
 */
function ago(time)
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
 * processGlobalChatWithFansData -- takes the data
 * output from getGlobalChatWithFansData and
 * processes it, creating and returning an array
 * called showData.
 */
function processGlobalChatWithFansData(data)
{
	if (typeof data == "object")
	{
		var showData = {};

		// loop through each search result and get necessary data
		for(var searchKey in data) {
			var result = (typeof data[searchKey]["result"] == "string") ? data[searchKey]["result"] : null;
			var result = data[searchKey]["result"];
			var entries = (typeof data[searchKey]["entries"] == "object" && typeof data[searchKey]["entries"][0] == "object") ? data[searchKey]["entries"][0] : null;

			// if there was an error, show the error in the console
			if (result == "error") {
				usa_debug("ERROR: "+ data[searchKey]["errorMessage"]);
			}
			// if successful, process data
			else if (entries != null && typeof entries["object"]["content"] == "string" && entries["object"]["content"] != "")
			{
				var vars = new Array();
				vars["showToken"] = searchKey.replace("search_", "");
				vars["avatar"] = entries["actor"]["avatar"];
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
				usa_debug(console.log("BUSTED"));
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
function outputGlobalChatWithFans(showData)
{
	var html = "";
	for (var show in showData) {
		var showName = showArray[show][0];
		var showUrlPath = showArray[show][1];
		html += "<a href=\"/"+showUrlPath+"/social/chat-with-fans\">"+
			"<h1>"+showName+"</h1>"+
			"<div>"+
				"<img src=\""+showData[show]["avatar"]+"\">"+
				"<div class=\"comment\">"+showData[show]["comment"]+"</div>"+
				"<div class=\"author\">By "+showData[show]["actor"]+"</div>"+
				"<div class=\"postdate\">"+showData[show]["timeStr"]+"</div>"+
			"</div>"+
		"</a>\n";
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
function getGlobalChatWithFansData()
{
	jQuery.ajax({
		url: echoQuery,
		dataType: "jsonp",
		data: echoQueryParams,
		success: function(data){
			showData = processGlobalChatWithFansData(data);
			var showDataKeys = getKeys(showData);
			if (showDataKeys.length > 0) {
				outputGlobalChatWithFans(showData);
			} else {
				jQuery('#showList').html("No shows found. Please come back again soon.");
			}
		}
	});
}

// Begin processing the Echo mux query
getGlobalChatWithFansData();
