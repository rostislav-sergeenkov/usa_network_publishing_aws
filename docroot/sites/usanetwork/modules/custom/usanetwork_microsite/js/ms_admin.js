/**
 * Global js functions for microsite admin page
 */
(function ($) {
  Drupal.behaviors.ms_admin = {
    setSectionRowSelectors: function($row) {
      var sectionType = $row.find('.field-name-field-ms-section-type select').val(),
          sectionDelta = $row.find('td.delta-order select.field_ms_section-delta-order').val();
      usa_debug('sectionType: ' + sectionType + ', sectionDelta: ' + sectionDelta);
      $row.attr({'id': 'section-row-' + sectionType + '-' + sectionDelta, 'data-section-row-delta': sectionDelta}).addClass('section-row section-row-' + sectionType);
    },

    addMoreLessToggle: function($row) {
      $row.find(' > td:nth-child(2)').append('<div class="more-less-toggle"><div class="less"></div><div class="text">more</div><div class="more"></div></div>');
    },

    hideAllASpotInfo: function() {
      $('#field-ms-section-values .group-ms-aspots').hide();
    },

    showASpotInfo: function() {
      $('.section-row-home .group-ms-aspots').show();
    },

    hideAllFeaturedInfo: function() {
      $('#field-ms-section-values .group-ms-featured').hide();
    },

    showFeaturedInfo: function() {
      $('.section-row-home .group-ms-featured').show();
    },

    showCollapsedViewAllSections: function() {
      $('.field-name-field-ms-section-enabled, .field-name-field-ms-section-type, .field-name-field-ms-section-title').css({'height': 'auto', 'margin-bottom': '24px', 'visibility': 'visible'});
    },

    toggleFullViewSection: function(sectionRowId) {
      var $sectionRow = $('#' + sectionRowId),
          offsetDirection = 1;
      if ($sectionRow.hasClass('open')) {
        $sectionRow.removeClass('open'); //.find('.form-wrapper').css({'height': 0, 'visibility': 'hidden'});
        $('.field-name-field-ms-section-enabled, .field-name-field-ms-section-type, .field-name-field-ms-section-title').css({'height': 'auto', 'margin-bottom': '24px', 'visibility': 'visible'});
        $sectionRow.find('.more-less-toggle div.text').html('more');
        $sectionRow.find('.more-less-toggle .less').hide();
        $sectionRow.find('.more-less-toggle .more').show();
      }
      else {
        offsetDirection = -1;
        $sectionRow.addClass('open'); //.find('.form-wrapper').css({'visibility': 'visible', 'height': 'auto'});
        $sectionRow.find('.more-less-toggle div.text').html('less');
        $sectionRow.find('.more-less-toggle .more').hide();
        $sectionRow.find('.more-less-toggle .less').show();
      }
      var section = document.getElementById(sectionRowId),
        offset = section.offsetTop * offsetDirection;
//      usa_debug('toggleFullViewSection(' + sectionRowId + ')\noffset: ' + (offset + 330) + '\nsection: ', section);
    },

    attach: function (context, settings) {
      // set defaults
      var $verticalTabsList = $('.vertical-tabs-list'),
          $verticalTabButtons = $('.vertical-tab-button'),
          $vertTabsPanes = $('.vertical-tabs-panes'),
          $sectionPane = $('#edit-group_ms_sections'),
          $sectionValuesTable = $('#field-ms-section-values'), // each table row is one section type
          self = this;

      usa_debug('new ms_admin.js');

      // on page load, set classes for each type of section content
      // and add the more less toggle
      $('#field-ms-section-values > tbody > tr').each(function(){
        self.setSectionRowSelectors($(this));
        if ($(this).find('.more-less-toggle').length <= 0) self.addMoreLessToggle($(this));
      });

      // on page load, hide unneeded info
      self.hideAllASpotInfo();
      self.showASpotInfo();
      self.hideAllFeaturedInfo();
      self.showFeaturedInfo();
      self.showCollapsedViewAllSections();


      // click on vertical tab button
      $verticalTabButtons.find('a').on('click', function(){
        usa_debug('.vertical-tab-button clicked');
        if ($verticalTabsList.find('.selected strong').html() == 'Sections') {
          usa_debug('Sections selected');
        }
      });

      // click on more less toggle
      $('.more-less-toggle').on('click', function(){
        var sectionRowId = $(this).parents('tr.section-row').attr('id');
        self.toggleFullViewSection(sectionRowId);
      });
    }
  }
})(jQuery);
