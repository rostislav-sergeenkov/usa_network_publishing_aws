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

    showCharacterInfo: function(person) {
        var anchor = 'characters',
            anchorFull = Drupal.settings.microsites_settings.base_path + '/' + anchor + '/' + person,
            personName = $('#character-info #' + person + ' > h3').text();
        if (personName == '') personName = $('#character-info #' + person + ' > h1').text();
        $('#character-nav li#nav-' + person + ', #character-info li#' + person).addClass('active');
          $('#character-info #' + person).animate({ 'opacity': 1 }, 500);

usa_debug('========= showCharacterInfo: anchorFull: ' + anchorFull);
        if (!Drupal.behaviors.ms_global.globalInitialPageLoad) {
          Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
          Drupal.behaviors.ms_global.setOmnitureData('characters', personName);
        }
        Drupal.behaviors.ms_global.create728x90Ad('characters');
    },

    closeCharacterInfo: function() {
      var anchor = 'characters',
          anchorFull = Drupal.settings.microsites_settings.base_path + '/' + anchor;

      $('#character-info li.active').animate({ 'opacity': 0 }, 500, function(){
          $('#character-nav li, #character-info li').removeClass('active');
        Drupal.behaviors.ms_global.changeUrl(anchor, anchorFull);
        // Drupal.behaviors.ms_global.create728x90Ad('characters');
      });
    },

    attach: function (context, settings) {
      // set defaults
      var self = this;

      self.setPersonAgencyAndRole();

      // initialize clicks on microsite characters
      $('#microsite #character-nav li').on('click', function(e){
        self.showCharacterInfo($(this).attr('data-id'));
      });

      // initialize clicks on microsite character close button
      $('#microsite #character-info li .character-close').on('click', function(e){
        self.closeCharacterInfo();
      });
    }
  }
})(jQuery);
