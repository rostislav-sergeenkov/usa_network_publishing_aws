/**
 * Global js functions for microsite characters
 */
(function ($) {
  Drupal.behaviors.ms_characters = {
    showCharacterInfo: function(person) {
      var anchor = 'characters',
          anchorFull = Drupal.settings.microsites_settings.base_path + '/' + anchor + '/' + person,
          personName = $('#character-info #' + person + ' > h3').text();
      if (personName == '') personName = $('#character-info #' + person + ' > h1').text();
      $('#character-nav li#nav-' + person + ', #character-info li#' + person).addClass('active');

      var nextSectionElem = document.getElementById('character-wrapper'),
          offsetAmount = (Drupal.behaviors.ms_global.globalInitialPageLoad) ? 70 : 70 * -1,
          nextSectionTop = parseInt($('#character-wrapper').offset().top + offsetAmount); // nextSectionElem.offsetTop + offsetAmount;
usa_debug('nextSectionTop: ' + nextSectionTop + '\nnextSectionElem: ', nextSectionElem);

      $('#character-info #' + person).animate({ 'opacity': 1 }, 500, function(){
        $('body, html').animate({'scrollTop': nextSectionTop}, 1000, 'jswing');
      });

//usa_debug('========= showCharacterInfo: anchorFull: ' + anchorFull);
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
      });
    },

    setOverlayBgColor: function() {
      var sectionBgColor = $('#characters.section').css('background-color');
      $('#characters #character-info li').css('background-color', sectionBgColor);
    },

    attach: function (context, settings) {
      // set defaults
      var self = this;

      // initialize clicks on microsite characters
      $('#microsite #character-nav li').on('click', function(e){
        self.showCharacterInfo($(this).attr('data-id'));
      });

      // initialize clicks on microsite character close button
      $('#microsite #character-info li .character-close').on('click', function(e){
        self.closeCharacterInfo();
      });

      self.setOverlayBgColor();
    }
  }
})(jQuery);
