/**
 *  Freewheel Companion Ad JavaScript
 */
var nbcu = nbcu || {};

$(document).ready(function() {
	// Listen to iframe player events
	nbcu.playerController = $pdk.bind("tp-global-player");
	nbcu.playerController.addEventListener("OnCompanionAd", function(e) {
		nbcu.handleCompanionAd(e);
	});
});

nbcu.handleCompanionAd = function(e) {
	if(typeof console !== 'undefined'){
		if(typeof console.log !== 'undefined'){
			console.log("handleOnCompanionAd fired");
		}
	}
	var adSlot = $("#tp-ad-slot");

	adSlot.css("width", e.data.width).css("height", e.data.height);
	adSlot.html(e.data.htmlAdContent);
	adSlot.parent().removeClass("hide");
}