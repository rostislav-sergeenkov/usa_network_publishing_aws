var $cpc;
//this function is called from the adobe pass code when authorization status is updated.
//see updateStatus() in AuthorizationExample.js
function loadPlayer(mvpdId){
  var contentInitObj = new NBCUniCPC.ContentInitializationObject();
  contentInitObj.videoId = "LIVE";
  contentInitObj.mediaPid = "LIVE";
  contentInitObj.fullEpisode = true;
  var parameters = new NBCUniCPC.PlayerParameters();
  parameters.autoPlay = false;
  parameters.mvpdId=mvpdId;
  $cpc = NBCUniCPC.load("videoplayer", NBCUniCPC.Account.CNBC, contentInitObj, parameters);
  $cpc.addEventListener(NBCUniCPC.Event.PLAYBACK_READY, onReady);
  $cpc.addEventListener(NBCUniCPC.Event.AUTHORIZATION_STATUS, onAuthZStatus);
}

//Double up on getting the stream to start, in case the playe is not loaded when the token is set.
function onReady(event) {
  $cpc.play();
}

//Handle the Adobe Pass callback to set the token on the CPC.
function setToken(inRequestedResourceID, inToken) {
  logEvent("setToken called by Access Enabler, call setToken on player...");
  $cpc.setToken(encodeURIComponent(inToken), "authToken");
}

// Handle the authorization events to start the stream.
function onAuthZStatus(e) {
  if (e.data.isAuthorized) {
    logEvent("AuthZ token accepted.");
  }
  else {
    logEvent("AuthZ token failed.");
  }
}