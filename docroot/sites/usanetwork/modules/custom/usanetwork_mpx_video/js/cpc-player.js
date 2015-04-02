(function (ng, $) {

  $(document).ready(function(){
    if (!ng) {
      return;
    }

    var $injector = ng.element(document).injector();

    $injector.invoke(['$cookies', 'tveConfig', 'tveModal', 'authService', function ($cookies, tveConfig, tveModal, authService) {

      if ($cookies['nbcu_ap_loginpending']) {
        authService.promise.then(function() {
          initLivePlayer($cookies);
        });
      }

      if (authService.isAuthN()) {
        initLivePlayer($cookies);
      }

    }]);
  });

  function initLivePlayer($cookies) {

    var nbcu_user_settings = JSON.parse($cookies.nbcu_user_settings),
        mvpdId = nbcu_user_settings.selectedProvider;

    var contentInitObj = new NBCUniCPC.ContentInitializationObject();
    contentInitObj.videoId = "LIVE";
    contentInitObj.mediaPid = "LIVE";
    contentInitObj.fullEpisode = true;

    var parameters = new NBCUniCPC.PlayerParameters();
    parameters.autoPlay = true;
    parameters.mvpdId = mvpdId;

    $cpc = NBCUniCPC.load("pdk-player", NBCUniCPC.Account.USA, contentInitObj, parameters);
  }
})(angular, jQuery);
