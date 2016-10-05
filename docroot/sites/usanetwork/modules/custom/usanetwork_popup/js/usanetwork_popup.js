(function ($) {

  Drupal.behaviors.usanetwork_popup = {
    attach: function (context, settings) {

      function ShowPopupOmniture() {

        s.linkTrackVars = 'events,pageName';
        s.linkTrackEvents = s.events = 'event6';
        s.pageName = 'USA Network : Homepage : Falling Water Takeover Pop-Up : Pop-up Shown';

        void (s.t());
      }

      ShowPopupOmniture();

      $('.usa-home-popup-overlay').click(function(e){
        console.info(e.target);
        if (e.target.className == 'tile-img' || e.target.className == 'asset-img' || e.target.className == 'usa-popup-link') {
          console.info('link');
        } else {
          console.info('close');
        }
        $('.usa-home-popup-overlay').remove();
      });

      $('.usa-home-popup img').load(function(){
        console.info('load');
      });
    }
  }

}(jQuery));
