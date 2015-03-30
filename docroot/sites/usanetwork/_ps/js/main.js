/**
 *  Page-level JavaScript
 */
var nbcu = nbcu || {};

// Scripts to change player sizes
function makeSmall() {
	$("#tp-global-player").width(344).height(193);
}
function makeBig() {
	$("#tp-global-player").width(1032).height(580);
}
function makeNormal() {
	$("#tp-global-player").width(688).height(387);
}
function fullEpisode() {
	$("#tp-global-player").attr("src", "http://player.theplatform.com/p/n43BAC/cuvz9kYwXGYQ/select/mnKogRJmLeru");
}
function clip() {
	$("#tp-global-player").attr("src", "http://player.theplatform.com/p/n43BAC/cuvz9kYwXGYQ/select/JCD_Q18b_WXX");
	//document.getElementById('tp-global-player').contentWindow.location.reload(true);
}
function reload() {
	var frame = document.getElementById("tp-global-player");
	frame.src = frame.src;
}