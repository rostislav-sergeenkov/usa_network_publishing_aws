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
    $cpc.addEventListener(NBCUniCPC.Event.BLACKOUT_STATUS, onBlackoutStatus);
  }

  //Use Blackout event to show the custom slate if the content is blacked out.
  function onBlackoutStatus(event) {
    //if event.data.entitled = false, the user cannot watch content
    if (!event.data.entitled) {
      showCustomSlate();
    }
  }

  function showCustomSlate() {
    //generate some HTML to replace the contents of the 'videoplayer' element.
    var customSlateContent = "<div id='blackout-slate' style='height:100%;width:100%;background-color:#FF0000;overflow: hidden;'>";
    customSlateContent += "<span style='font-family:sans-serif;font-size: 120px;text-transform: uppercase;letter-spacing:-6px;'>";
    customSlateContent += "This is a custom slate.";
    customSlateContent += "</span></div>";

    //use jQuery to replace contents with custom slate HTML
    $("#pdk-player").html(customSlateContent);
  }


})(angular, jQuery);
