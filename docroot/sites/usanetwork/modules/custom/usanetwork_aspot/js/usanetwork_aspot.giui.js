(function ($) {
  Drupal.behaviors.usanetwork_aspot_giui = {
    attach: function (context, settings) {
      var backgroundPreviewingContainer = $('#edit-field-aspot-preview-bg-offset');
      var carouselElementPreviewingContainer = $('#edit-field-aspot-enabled-gi');
      var aspotElementsCheckboxes = $('#edit-field-aspot-enabled-gi-und input.form-checkbox');
      var backgroundPreviewingBlock = $('<div id="edit-field-aspot-preview-bg-offset-preview"></div>');
      var carouselElementPreviewingBlock = $('<div id="edit-field-aspot-enabled-gi-preview"></div>');
      var draggableElements = [];
      usanetwork_aspot_giui_setup_draggable_elements();
      usanetwork_aspot_giui_setup_draggable_background();
      usanetwork_aspot_giui_fill_draggable_items_input();
      var giImage = ($('<img>',{id:'gi-image', style: 'max-width: 100%; height: auto;', src: settings.giui_settings.bg_offset_image_url})).load(function() {
        backgroundPreviewingBlock.css({
          'height': this.height
        });
      });
      carouselElementPreviewingBlock.prepend(giImage);
      aspotElementsCheckboxes.change(function () {
        if ($(this).is(':checked')) {
          usanetwork_aspot_giui_enable_element($(this).val());
        }
        else {
          usanetwork_aspot_giui_disable_element($(this).val());
        }
      });
      backgroundPreviewingBlock.backgroundDraggable({
        axis: "x",
        done: function () {
          var value = backgroundPreviewingBlock.css('backgroundPosition').split(' ');
          $("#field-aspot-preview-bg-offset-add-more-wrapper input").val(value[0].replace('px', ''));
        }
      });
      $("#field-aspot-preview-bg-offset-add-more-wrapper input").change(function () {
        backgroundPreviewingBlock.css({
          'background-position': $(this).val() + 'px 0px'
        });
      });
      var draggableOptions = {
        grid: [8, 8],
        appendTo: '#edit-field-aspot-enabled-gi',
        stop: function () {
          usanetwork_aspot_giui_fill_draggable_items_input();
          usanetwork_aspot_giui_lock_ajax_form_submits();
        }
      };
      $('.aspot-draggable-element').draggable(draggableOptions).css("position", "absolute");

      /**
       * Collects draggable elements, calculates positions and saves data in form field.
       */
      function usanetwork_aspot_giui_fill_draggable_items_input() {
        var elementsMeta = {};
        $.each(draggableElements, function (index, itemElement) {
          var mapCX = Math.round(carouselElementPreviewingContainer.width() / 2);
          var mapCY = Math.round(carouselElementPreviewingContainer.height() / 2);
          var currentElementCX = Math.round(parseInt(itemElement.css('left')) + itemElement.width() / 2);
          var currentElementCY = Math.round(parseInt(itemElement.css('top')) + itemElement.height() / 2);
          var invertX = currentElementCX > mapCX ? true : false;
          var invertY = currentElementCY > mapCY ? true : false;
          var widthPercent = Math.round(parseInt(itemElement.css('left')) / carouselElementPreviewingContainer.width() * 100);
          var heightPercent = Math.round(parseInt(itemElement.css('top')) / carouselElementPreviewingContainer.height() * 100);
          if (widthPercent < 0) {
            widthPercent = 0;
          }
          if (heightPercent < 0) {
            heightPercent = 0;
          }
          elementsMeta[itemElement.data('rel')] = {
            'elementId': itemElement.attr('id'),
            'dataRel': itemElement.data('rel'),
            'left': itemElement.css('left'),
            'top': itemElement.css('top'),
            'percentX': widthPercent,
            'percentY': heightPercent,
            'invertX': invertX,
            'invertY': invertY
          };
        });
        $('input[name="aspot_draggable_items_data"]').val(JSON.stringify(elementsMeta));
      }

      /**
       * Detects if the element name is CTA button related.
       */
      function usanetwork_aspot_giui_is_cta_element(inputElementName) {
        return (inputElementName.indexOf('cta_button_') != -1) ? true : false;
      }

      /**
       * Enables draggable element (connection of checkbox and element visibility).
       */
      function usanetwork_aspot_giui_enable_element(inputElementName) {
        var targetCheckboxElement = $('#edit-field-aspot-enabled-gi input[value="' + inputElementName + '"]');
        if (!targetCheckboxElement.is(':checked')) {
          targetCheckboxElement.prop('checked', true);
        }
        if (inputElementName === 'cta_button') {
          $('.aspot-draggable-cta-button').show();
        }
        $('#aspot-draggable-' + inputElementName).show();
      }

      /**
       * Disables draggable element (connection of checkbox and element visibility).
       */
      function usanetwork_aspot_giui_disable_element(inputElementName) {
        var targetCheckboxElement = $('#edit-field-aspot-enabled-gi input[value="' + inputElementName + '"]');
        if (targetCheckboxElement.is(':checked')) {
          targetCheckboxElement.prop('checked', true);
        }
        if (inputElementName === 'cta_button') {
          $('.aspot-draggable-cta-button').hide();
        }
        $('#aspot-draggable-' + inputElementName).hide();
      }

      /**
       * Setups draggable elements according settings that sent to JS.
       */
      function usanetwork_aspot_giui_setup_draggable_elements() {
        var draggableElementsObject = document.getElementById('edit-field-aspot-enabled-gi-preview');
        if (draggableElementsObject == null) {
          carouselElementPreviewingContainer.prepend(carouselElementPreviewingBlock);
        }
        else {
          carouselElementPreviewingBlock = $('#edit-field-aspot-enabled-gi-preview');
        }
        var draggableElementsData = Object.keys(settings.giui_settings.aspot_elements);
// At the beginning when it's debugging some deprecated elements could presents in view. All the
// deprecated elements must be removed. This function only for early stage of development but can
// be featured for future.
        draggableElementsData = usanetwork_aspot_giui_remove_deprecated_draggable_elements(draggableElementsData);
        $.each(draggableElementsData, function (index, itemElement) {
          var draggableElementId = 'aspot-draggable-' + itemElement;
          var draggableElement = null;
          if (draggableElementsObject == null) {
            draggableElement = $('<div id="' + draggableElementId + '" class="aspot-draggable-element" data-rel="' +
            itemElement + '">' + settings.giui_settings.aspot_elements[itemElement].value + '</div>');
            if (usanetwork_aspot_giui_is_cta_element(itemElement)) {
              draggableElement.addClass('aspot-draggable-cta-button');
            }
            carouselElementPreviewingBlock.append(draggableElement);
          }
          else {
            draggableElement = $('#' + draggableElementId);
          }
          if (settings.giui_settings.aspot_elements[itemElement].left) {
            draggableElement.css({
              'left': settings.giui_settings.aspot_elements[itemElement].left
            });
          }
          if (settings.giui_settings.aspot_elements[itemElement].top) {
            draggableElement.css({
              'top': settings.giui_settings.aspot_elements[itemElement].top
            });
          }
          var targetCheckboxElement = $('#edit-field-aspot-enabled-gi input[value="' + itemElement + '"]');
          draggableElements.push(draggableElement);
          if (draggableElementsObject !== null) {
            carouselElementPreviewingBlock.append(draggableElement);
          }
          if (settings.giui_settings.aspot_elements[itemElement].enabled) {
            usanetwork_aspot_giui_enable_element(itemElement);
          }
          else {
            usanetwork_aspot_giui_disable_element(itemElement);
          }
        });
      }

      /**
       * Setups draggable background element.
       */
      function usanetwork_aspot_giui_setup_draggable_background() {
        var backgroundPreviewObject = document.getElementById('edit-field-aspot-preview-bg-offset-preview');
        if (backgroundPreviewObject == null) {
          backgroundPreviewingContainer.prepend(backgroundPreviewingBlock);
        }
        else {
          backgroundPreviewingBlock = $('#edit-field-aspot-preview-bg-offset-preview');
        }
        backgroundPreviewingContainer.find('input[type="number"]').val(settings.giui_settings.bg_offset_value);
        backgroundPreviewingBlock.css({
          'background-image': 'url("' + settings.giui_settings.bg_offset_image_url + '")',
          'background-position': settings.giui_settings.bg_offset_value + 'px 0',
        });
      }

      /**
       * Removed deprecated element from deaggable elements array. Function exists only at early stage of development,
       * but could be featured in future.
       */
      function usanetwork_aspot_giui_remove_deprecated_draggable_elements(draggableElementsData) {
        var deprecatedElements = ['cta_button'];
        $.each(deprecatedElements, function (index, elementItem) {
          var deprecatedElementIndex = draggableElementsData.indexOf(elementItem);
          if (deprecatedElementIndex != -1) {
            draggableElementsData.splice(deprecatedElementIndex, 1);
          }
        });
        return draggableElementsData;
      }

      /**
       * Locks ajax forms. The function must be used if elements must be saved first.
       */
      function usanetwork_aspot_giui_lock_ajax_form_submits() {
        var noticeMessage = Drupal.t('This form could not be submitted now. Please save the page before.');
        var submitFormIds = [
          'edit-field-aspot-gi-cta'
        ];
        $.each(submitFormIds, function (index, itemElement) {
          var submitButton = $('#' + itemElement + ' input[type="submit"]');
          submitButton.attr({
            title: noticeMessage,
            value: noticeMessage,
            disabled: 'disabled'
          });
        });
      }
    }
  };
}(jQuery));
