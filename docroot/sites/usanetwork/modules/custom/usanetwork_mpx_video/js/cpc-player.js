(function (ng, $) {

  $(document).ready(function(){
    if (!ng) {
      return;
    }

    var $injector = ng.element(document).injector();

    $injector.invoke(['$cookies', 'tveConfig', 'tveModal', 'authService', function ($cookies, tveConfig, tveModal, authService) {

      var nbcu_user_settings, mvpdId;

      if ($cookies['nbcu_ap_loginpending']) {
        authService.promise.then(function() {
          initLivePlayer();
        });
      }

      nbcu_user_settings = JSON.parse($cookies.nbcu_user_settings);
      mvpdId = nbcu_user_settings.selectedProvider;

      if (authService.isAuthN()) {
        initLivePlayer(mvpdId);
      }

    }]);

    function initLivePlayer(mvpdId) {
      var contentInitObj = new NBCUniCPC.ContentInitializationObject();
      contentInitObj.videoId = "LIVE";
      contentInitObj.mediaPid = "LIVE";
      contentInitObj.fullEpisode = true;
      var parameters = new NBCUniCPC.PlayerParameters();
      parameters.autoPlay = false;
      parameters.mvpdId = mvpdId;
      $cpc = NBCUniCPC.load("pdk-player", NBCUniCPC.Account.USA, contentInitObj, parameters);
    }
  })

})(angular, jQuery);
