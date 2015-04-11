/**
 * Global js functions for microsite characters
 */
(function ($) {
  Drupal.behaviors.ms_characters = {

    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      // initialize clicks on microsite characters
      $('#microsite #character-nav li').on('click', function(e){
        var nextItem = $(this).attr('data-id'),
            anchor = 'characters',
            anchorFull = basePath + '/' + anchor + '/' + nextItem;

        $('#character-nav li#nav-' + nextItem + ', #character-info li#' + nextItem).addClass('active');
        $('#character-info #' + nextItem).animate({ 'opacity': 1 }, 1000);

        Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
      });

      // initialize clicks on microsite character close button
      $('#microsite #character-info li .character-close').on('click', function(e){
        var anchor = 'characters',
            anchorFull = basePath + '/' + anchor;

        $('#character-info li.active').animate({ 'opacity': 0 }, 1000, function(){
          $('#character-nav li, #character-info li').removeClass('active');
          Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
        });
      });
    }
  }
})(jQuery);
