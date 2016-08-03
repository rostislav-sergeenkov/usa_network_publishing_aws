/**
 * @file
 * Attaches entity-type selection behaviors to the widget form.
 */

(function ($) {

  "use strict";

  Drupal.behaviors.usanetwork_dynamicEntityReferenceWidget = {
    attach: function (context) {
      var $context = $(context);
      var $selects = $context.find('select.dynamic-entity-reference-entity-type').once('dynamic-entity-reference');
      var originalPath;
      if ($selects.length) {
        $selects.change(function() {
          var $select = $(this);
          var $autocomplete = $select.parents('.container-inline').find('.form-autocomplete');
          var $proxy = $('#' + $autocomplete.attr('id') + '-autocomplete');
          var basePath, basePathParts;
          if (!(basePath = $autocomplete.data('base-autocomplete-path'))) {
            // This is the first time this has run, copy the default value.
            basePathParts = $proxy.val().split('/');
            // Remove defaults stuff, as it's cruft.
            basePathParts.pop();
            basePathParts.pop();
            // Store for subsequent calls.
            basePath = basePathParts.join('/');
            $autocomplete.data('base-autocomplete-path', basePath);
          }
          $proxy.val(basePath + '/' + $select.val()).removeClass('autocomplete-processed');
          $autocomplete.unbind('keydown').unbind('keyup').unbind('blur');
          Drupal.behaviors.autocomplete.attach($select.parents());
        });
        $selects.change();
      }
      $('.dynamic-entity-reference-is-all-shows').change(function() {
        var $checkbox = $(this);
        var $autocomplete = $checkbox.parents('.container-inline').find('.form-autocomplete');
        var $proxy = $('#' + $autocomplete.attr('id') + '-autocomplete');
        var basePathParts;
        if(this.checked) {
          originalPath = $proxy.val();
          basePathParts = originalPath.split('/');
          if ($.isNumeric(basePathParts[8])) {
            basePathParts[8] = 'none';
          }
          var newPath = basePathParts.join('/');
          $proxy.val(newPath).removeClass('autocomplete-processed');
        }
        else {
          $proxy.val(originalPath).removeClass('autocomplete-processed');
        }
        $autocomplete.unbind('keydown').unbind('keyup').unbind('blur');
        Drupal.behaviors.autocomplete.attach($checkbox.parents());
      });
    }
  };

})(jQuery);
