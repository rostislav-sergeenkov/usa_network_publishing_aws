(function ($) {
  Drupal.behaviors.usanetwork_aspot_giui = {
    attach: function (context, settings) {
      var backgroundPreviewingContainer = $('#edit-field-aspot-preview-bg-offset'),
          carouselElementPreviewingContainer = $('#edit-field-aspot-enabled-gi'),
          aspotElementsCheckboxes = $('#edit-field-aspot-enabled-gi-und input.form-checkbox'),
          backgroundPreviewingBlock = $('<div id="edit-field-aspot-preview-bg-offset-preview"></div>'),
          carouselElementPreviewingBlock = $('<div id="edit-field-aspot-enabled-gi-preview"></div>'),
          carouselElementPreviewingBlockMobile = $('<div id="edit-field-aspot-enabled-gi-preview-mobile"></div>'),
          draggableElements = [];

      var giImage = ($('<img>', {
        id: 'gi-image',
        style: 'max-width: 100%; height: auto;',
        src: Drupal.settings.giui_settings.desktop.bg_offset_image_url
      })).load(function () {
            backgroundPreviewingBlock.attr('data-img-width', this.width);
            backgroundPreviewingBlock.css({
              'height': this.height
            });
          });
      var gimImage = ($('<img>', {
        id: 'gim-image',
        style: 'max-width: 100%; height: auto;',
        src: Drupal.settings.giui_settings.mobile.bg_offset_image_url
      }));

      carouselElementPreviewingBlock.prepend(giImage);
      carouselElementPreviewingBlockMobile.prepend(gimImage);

      //init
      usanetwork_aspot_giui_setup_draggable_elements();
      usanetwork_aspot_giui_setup_draggable_background();

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
          usanetwork_aspot_giui_fill_draggable_items_input();
          var value = backgroundPreviewingBlock.css('backgroundPosition').split(' ');
          $("#field-aspot-preview-bg-offset-add-more-wrapper input").val(value[0].replace('px', ''));
        }
      });

      $("#field-aspot-preview-bg-offset-add-more-wrapper input").bind('change', function () {
        usanetwork_aspot_giui_fill_draggable_items_input();
        backgroundPreviewingBlock.css({
          'background-position': $(this).val() + 'px 0px'
        });
      });

      var draggableOptions = {
        grid: [8, 8],
        appendTo: '#edit-field-aspot-enabled-gi',
        containment: "parent",
        refreshPositions: true,
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
          var mobileItemElement = carouselElementPreviewingBlockMobile.find($('#mobile-' + itemElement.attr('id')));
          //desktop
          var mapCX = Math.round(carouselElementPreviewingBlock.width() / 2);
          var mapCY = Math.round(carouselElementPreviewingBlock.height() / 2);
          var currentElementCX = Math.round(parseInt(itemElement.css('left')) + itemElement.width() / 2);
          var currentElementCY = Math.round(parseInt(itemElement.css('top')) + itemElement.height() / 2);
          var invertX = currentElementCX > mapCX ? true : false;
          var invertY = currentElementCY > mapCY ? true : false;
          var widthPercent = Math.round(parseInt(itemElement.css('left')) / carouselElementPreviewingBlock.width() * 100);
          var heightPercent = Math.round(parseInt(itemElement.css('top')) / carouselElementPreviewingBlock.height() * 100);
          if (widthPercent < 0) {
            widthPercent = 0;
          }
          if (heightPercent < 0) {
            heightPercent = 0;
          }
          //mobile
          var map_mCX = Math.round(carouselElementPreviewingBlockMobile.width() / 2);
          var map_mCY = Math.round(carouselElementPreviewingBlockMobile.height() / 2);
          var currentElement_mCX = Math.round(parseInt(mobileItemElement.css('left')) + mobileItemElement.width() / 2);
          var currentElement_mCY = Math.round(parseInt(mobileItemElement.css('top')) + mobileItemElement.height() / 2);
          var invert_mX = currentElement_mCX > map_mCX ? true : false;
          var invert_mY = currentElement_mCY > map_mCY ? true : false;
          var widthPercent_m = Math.round(parseInt(mobileItemElement.css('left')) / carouselElementPreviewingContainer.width() * 100);
          var heightPercent_m = Math.round(parseInt(mobileItemElement.css('top')) / carouselElementPreviewingContainer.height() * 100);
          if (widthPercent_m < 0) {
            widthPercent_m = 0;
          }
          if (heightPercent_m < 0) {
            heightPercent_m = 0;
          }

          //offset
          var value = backgroundPreviewingBlock.css('backgroundPosition').split(' '),
              imgWidth = backgroundPreviewingBlock.attr('data-img-width'),
              offset_px_X = value[0].replace('px', ''),
              offset_percent_X = null;

          if (imgWidth === 0) {
            offset_percent_X = 0;
          } else {
            offset_percent_X = Math.round(parseInt(offset_px_X) / imgWidth * 100);
          }

          elementsMeta[itemElement.data('rel')] = {
            'elementId': itemElement.attr('id'),
            'dataRel': itemElement.data('rel'),
            'left': itemElement.css('left'),
            'top': itemElement.css('top'),
            'leftM': mobileItemElement.css('left'),
            'topM': mobileItemElement.css('top'),
            'percentX': widthPercent,
            'percentY': heightPercent,
            'percentMX': widthPercent_m,
            'percentMY': heightPercent_m,
            'invertX': invertX,
            'invertY': invertY,
            'invertMX': invert_mX,
            'invertMY': invert_mY
          };
          elementsMeta.aspot_offset_percent = {
            shiftPercent: offset_percent_X
          };
          console.info(elementsMeta);
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
        $('#mobile-aspot-draggable-' + inputElementName).show();
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
        $('#mobile-aspot-draggable-' + inputElementName).hide();
      }

      /**
       * Setups draggable elements according settings that sent to JS.
       */
      function usanetwork_aspot_giui_setup_draggable_elements() {
        var draggableElementsObject = document.getElementById('edit-field-aspot-enabled-gi-preview');
        var draggableElementsObjectMobile = document.getElementById('edit-field-aspot-enabled-gi-preview-mobile');
        if ((draggableElementsObject == null) && (draggableElementsObjectMobile == null)) {
          carouselElementPreviewingContainer.prepend(carouselElementPreviewingBlock);
          carouselElementPreviewingContainer.prepend(carouselElementPreviewingBlockMobile);
        } else {
          carouselElementPreviewingBlock = $('#edit-field-aspot-enabled-gi-preview');
          carouselElementPreviewingBlockMobile = $('#edit-field-aspot-enabled-gi-preview-mobile');
        }
        var draggableElementsData = Object.keys(settings.giui_settings.aspot_elements);
        // At the beginning when it's debugging some deprecated elements could presents in view. All the
        // deprecated elements must be removed. This function only for early stage of development but can
        // be featured for future.
        draggableElementsData = usanetwork_aspot_giui_remove_deprecated_draggable_elements(draggableElementsData);
        $.each(draggableElementsData, function (index, itemElement) {
          var draggableElementId = 'aspot-draggable-' + itemElement;
          var draggableElement = null,
              draggableElementMobile = null;
          if (draggableElementsObject == null) {
            draggableElement = $('<div id="' + draggableElementId + '" class="aspot-draggable-element" data-rel="' +
            itemElement + '">' + settings.giui_settings.aspot_elements[itemElement].value + '</div>');
            if (usanetwork_aspot_giui_is_cta_element(itemElement)) {
              draggableElement.addClass('aspot-draggable-cta-button');
            }
            carouselElementPreviewingBlock.append(draggableElement);
            draggableElementMobile = draggableElement.clone();
            createMobileDraggableElem(draggableElementMobile, itemElement);
          } else {
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
          draggableElements.push(draggableElement);
          if (draggableElementsObject !== null) {
            carouselElementPreviewingBlock.append(draggableElement);
            draggableElementMobile = draggableElement.clone();
            createMobileDraggableElem(draggableElementMobile, itemElement);
          }
          if (settings.giui_settings.aspot_elements[itemElement].enabled) {
            usanetwork_aspot_giui_enable_element(itemElement);
          }
          else {
            usanetwork_aspot_giui_disable_element(itemElement);
          }
        });
      }

      function createMobileDraggableElem(draggableElementMobile, itemElement) {
        var currentId = draggableElementMobile.attr('id');
        draggableElementMobile.attr('id', 'mobile-' + currentId).addClass('mobile');
        carouselElementPreviewingBlockMobile.append(draggableElementMobile);
        if (settings.giui_settings.aspot_elements[itemElement].leftM) {
          draggableElementMobile.css({
            'left': settings.giui_settings.aspot_elements[itemElement].leftM
          });
        }
        if (settings.giui_settings.aspot_elements[itemElement].topM) {
          draggableElementMobile.css({
            'top': settings.giui_settings.aspot_elements[itemElement].topM
          });
        }

      };

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
        backgroundPreviewingContainer.find('input[type="number"]').val(settings.giui_settings.desktop.bg_offset_value);
        backgroundPreviewingBlock.css({
          'background-image': 'url("' + settings.giui_settings.desktop.bg_offset_image_url + '")',
          'background-position': settings.giui_settings.desktop.bg_offset_value + 'px 0'
        });
      }
    }
  };
}(jQuery));
