/**
 * Global js functions for microsite characters
 */
(function ($) {
  Drupal.behaviors.ms_characters = {
    setPersonAgencyAndRole: function() {
      var person = {"daniel-sunjata": {"agency": "FBI", "role": "Mike's Superior Officer"}, "aaron-tveit": {"agency": "FBI", "role": "Rookie Officer"}, "serinda-swan": {"agency": "DEA", "role": "Drinks Hard, Plays Hard, Works Hard"}, "manny-montana": {"agency": "FBI", "role": "Brigg's Right Hand Man, Prankster"}, "brandon-jay-mclaren": {"agency": "ICE", "role": "Lone Wolf"}, "vanessa-ferlito": {"agency": "FBI", "role": "Chameleon"}},
          $personList = $('#microsite #characters #character-nav ul');

      $personList.find('li').each(function(){
        var personId = $(this).attr('data-id');
        $(this).find('.agency').html(person[personId]['agency']);
        $(this).find('.role').html(person[personId]['role']);
      });
    },

    attach: function (context, settings) {
      // set defaults
      var siteName = Drupal.settings.microsites_settings.title,
          basePath = Drupal.settings.microsites_settings.base_path,
          basePageName = siteName + ' | USA Network',
          self = this;

      self.setPersonAgencyAndRole();

      // initialize clicks on microsite characters
      $('#microsite #character-nav li').on('click', function(e){
        var nextItem = $(this).attr('data-id'),
            anchor = 'characters',
            anchorFull = basePath + '/' + anchor + '/' + nextItem;

        $('#character-nav li#nav-' + nextItem + ', #character-info li#' + nextItem).addClass('active');
//        $('#character-nav').animate({'opacity': 0}, 500, function(){
          $('#character-info #' + nextItem).animate({ 'opacity': 1 }, 500);
//        });

        Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
      });

      // initialize clicks on microsite character close button
      $('#microsite #character-info li .character-close').on('click', function(e){
        var anchor = 'characters',
            anchorFull = basePath + '/' + anchor;

        $('#character-info li.active').animate({ 'opacity': 0 }, 500, function(){
//          $('#character-nav').animate({'opacity': 1}, 500, function(){
            $('#character-nav li, #character-info li').removeClass('active');
//          });
          Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
        });
      });
    }
  }
})(jQuery);
