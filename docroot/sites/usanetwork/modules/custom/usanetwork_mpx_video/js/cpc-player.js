jQuery(function () {
  setTimeout(function () {
    (function (ng) {

      if (!ng) {
        return;
      }

      if (!NBCUniCPC) {
        return;
      }

      var $injector = ng.element(document).injector();

      if ($injector) {

        $injector.invoke(['$cookies', 'tveConfig', 'authService', 'tveModal', function (cookies, tveConfig, authService, tveModal) {

          var tveCookiesKeys = tveConfig.cookies,
              nbcu_user_settings = JSON.parse(cookies.nbcu_user_settings),
              mvpdId = nbcu_user_settings.selectedProvider;
          var $cpc;

          //Handle the Adobe Pass callback to set the token on the CPC.
          function setToken(inRequestedResourceID, inToken) {
            //logEvent("setToken called by Access Enabler, call setToken on player...");
            $cpc.setToken(encodeURIComponent(inToken), "authToken");
          }


          if (authService.isAuthN()) {
            initLivePlayer();
          }

          if (cookies['nbcu_ap_loginpending']) {
            authService.promise.then(function () {
              initLivePlayer();
            });
          }

          function initLivePlayer() {
            var contentInitObj = new NBCUniCPC.ContentInitializationObject();
            contentInitObj.videoId = "LIVE";
            contentInitObj.mediaPid = "LIVE";
            contentInitObj.fullEpisode = true;
            var parameters = new NBCUniCPC.PlayerParameters();
            parameters.autoPlay = false;
            parameters.mvpdId = mvpdId;
            $cpc = NBCUniCPC.load("pdk-player", NBCUniCPC.Account.CNBC, contentInitObj, parameters);
            $cpc.addEventListener(NBCUniCPC.Event.PLAYBACK_READY, onReady);
            $cpc.addEventListener(NBCUniCPC.Event.COMPANION_AD, onCompanionAd);
            //$cpc.addEventListener(NBCUniCPC.Event.PLAYBACK_READY, onReady);

            //Double up on getting the stream to start, in case the playe is not loaded when the token is set.
            function onReady(event) {
              //$cpc.play();
            }

            var onCompanionAd = function(event){
              var ad = document.getElementById(event.data.holderId);
              ad.innerHTML = event.data.message;
            }

          }
        }]);
      }
    })(this.angular);
  }, 0)
});