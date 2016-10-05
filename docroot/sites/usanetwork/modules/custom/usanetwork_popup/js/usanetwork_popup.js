(function ($) {

  Drupal.behaviors.usanetwork_popup = {
    attach: function (context, settings) {

      var popupTitle = $('.usa-home-popup-overlay').attr('data-title');
      
      function showPopupOmniture() {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
          s.linkTrackVars = 'events,pageName';
          s.linkTrackEvents = s.events = 'event6';
          s.pageName = 'USA Network : Homepage : '+ popupTitle +' : Pop-up Shown';

          s.tl(this, 'o', 'Pop-up Shown');
          s.manageVars('clearVars', s.linkTrackVars, 1);
        }
      }

      function clickExitPopupOmniture() {
        if (Drupal.behaviors.omniture_tracking.omniturePresent()) {
          s.linkTrackVars = 'events,pageName,prop25,prop26,prop27,prop65,eVar65';
          s.linkTrackEvents = s.events = 'event65';
          s.pageName = 'USA Network : Homepage : '+ popupTitle +' : Pop-up Shown';
          s.prop25 = 'USA Network : Homepage : '+ popupTitle +' : Pop-up Shown';
          s.prop26 = 'Pop-Up Exit Click';
          s.prop27 = 'USA Network : Homepage : '+ popupTitle +' : Pop-up Shown | Pop-Up Exit Click';
          s.prop65 = s.eVar65 = 'USA Network : Homepage : '+ popupTitle +' : Pop-Up Exit Click';

          s.tl(this, 'o', 'Pop-Up Exit Click');
          s.manageVars('clearVars', s.linkTrackVars, 1);
        }
      }

      if ($('body').hasClass('front') && $('.usa-home-popup-overlay').length > 0) {
        $('.usa-home-popup-overlay').once('omniture-tracking', function () {
          showPopupOmniture();
        });
      }
      
      $('.usa-home-popup-overlay').click(function(e){
        if (e.target.className != 'tile-img' && e.target.className != 'asset-img' && e.target.className != 'usa-popup-link') {
          clickExitPopupOmniture();
        }
        $('.usa-home-popup-overlay').remove();
      });
      
    }
  }

}(jQuery));
