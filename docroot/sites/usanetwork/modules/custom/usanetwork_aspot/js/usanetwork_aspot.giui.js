var homeAspot, showAspot;

(function ($) {

  Drupal.behaviors.usanetwork_aspot_giui = {

    defaultSettings: {
      aspot_elements: {
        title_prefix: {
          dataRel: "title_prefix",
          alignLeft: 3,
          alignLeftM: 3,
          left: '78px',
          top: '249px',
          leftM: '37px',
          topM: '254px'
        },
        title: {
          dataRel: "title",
          alignLeft: 0,
          alignLeftM: 0,
          left: '75px',
          top: '275px',
          leftM: '34px',
          topM: '281px'
        },
        aspot_description: {
          dataRel: "aspot_description",
          alignLeft: 3,
          alignLeftM: 3,
          left: '78px',
          top: '353px',
          leftM: '37px',
          topM: '353px'
        },
        cta_button_0: {
          dataRel: "cta_button_0",
          alignLeft: 4,
          alignLeftM: -1,
          left: '79px',
          top: '409px',
          leftM: '36px',
          topM: '402px'
        },
        cta_button_1: {
          dataRel: "cta_button_1",
          alignLeft: 4,
          alignLeftM: -1,
          left: '79px',
          top: '484px',
          leftM: '36px',
          topM: '462px'
        },
        cta_button_2: {
          dataRel: "cta_button_2",
          alignLeft: 409,
          alignLeftM: -1,
          left: '335px',
          top: '484px',
          leftM: '36px',
          topM: '505px'
        }
      },
      tvs_aspot_elements: {
        title_prefix: {
          dataRel: "title_prefix",
          alignLeft: 3,
          alignLeftM: 2,
          left: '43px',
          top: '268px',
          leftM: '56px',
          topM: '285px'
        },
        title: {
          dataRel: "title",
          alignLeft: 0,
          alignLeftM: 0,
          left: '40px',
          top: '291px',
          leftM: '54px',
          topM: '314px'
        },
        aspot_description: {
          dataRel: "aspot_description",
          alignLeft: 6,
          alignLeftM: 4,
          left: '46px',
          top: '364px',
          leftM: '58px',
          topM: '382px'
        },
        cta_button_0: {
          dataRel: "cta_button_0",
          alignLeft: 5,
          alignLeftM: 1,
          left: '45px',
          top: '416px',
          leftM: '55px',
          topM: '441px'
        },
        cta_button_1: {
          dataRel: "cta_button_1",
          alignLeft: 5,
          alignLeftM: 1,
          left: '45px',
          top: '485px',
          leftM: '55px',
          topM: '495px'
        }
      }
    },

    initAspot: function (prefix, block, second_block, draggableId, pageName) {

      if (draggableId != '') {
        draggableId += '-'
      }

      var backgroundPreviewingContainer = $('#edit-field-aspot-preview-' + prefix + 'bg-offset'),
          backgroundPreviewingBlock = $('<div id="edit-field-aspot-preview-' + prefix + 'bg-offset-preview" class="draggable-background desktop"></div>'),
          carouselElementPreviewingContainer = $('#edit-field-aspot-enabled-' + prefix + 'gi'),
          PreviewingBlockWrapper = $('<div id="preview-' + prefix + 'gi-wrapper" class="wrapper-desktop"></div>'),
          PreviewingBlockWrapperMobile = $('<div id="preview-' + prefix + 'gi-wrapper-mobile" class="wrapper-mobile"></div>'),
          carouselElementPreviewingBlock = $('<div id="edit-field-aspot-enabled-' + prefix + 'gi-preview" class="draggable-area desktop"></div>'),
          carouselElementPreviewingBlockMobile = $('<div id="edit-field-aspot-enabled-' + prefix + 'gi-preview-mobile" class="draggable-area mobile"></div>'),
          aspotElementsCheckboxes = $('#edit-field-aspot-enabled-' + prefix + 'gi-und input.form-checkbox'),
          nameOffset = '<h2>Peek-ahead strip</h2>',
          draggableElements = [],
          defaultSettings = Drupal.behaviors.usanetwork_aspot_giui.defaultSettings;

      var bg_offset_value, bg_offset_image_url, bg_offset_image_url_mobile, aspot_elements;

      $('#edit-field-aspot-' + prefix + 'gi-draggable-data').hide();

      if (prefix === '') {
        aspot_elements = Drupal.settings.giui_settings.aspot_elements;
        bg_offset_value = Drupal.settings.giui_settings.desktop.bg_offset_value;
        bg_offset_image_url = Drupal.settings.giui_settings.desktop.bg_offset_image_url;
        bg_offset_image_url_mobile = Drupal.settings.giui_settings.mobile.bg_offset_image_url;
      } else if (prefix === 't') {
        aspot_elements = Drupal.settings.giui_settings.tvs_aspot_elements;
        bg_offset_value = Drupal.settings.giui_settings.tvs_desktop.bg_offset_value;
        bg_offset_image_url = Drupal.settings.giui_settings.tvs_desktop.bg_offset_image_url;
        bg_offset_image_url_mobile = Drupal.settings.giui_settings.tvs_mobile.bg_offset_image_url;
      }

      var giImage = ($('<img>', {
        id: '' + prefix + 'gi-image',
        style: 'max-width: 100%; height: auto;',
        src: bg_offset_image_url
      })).load(function () {
            backgroundPreviewingBlock.attr('data-img-width', this.width);
            backgroundPreviewingBlock.css({
              'height': this.height,
              'width': this.width * 0.1
            });
          });

      var gimImage = ($('<img>', {
        id: '' + prefix + 'gim-image',
        style: 'max-width: 100%; height: auto;',
        src: bg_offset_image_url_mobile
      }));

      carouselElementPreviewingBlock.prepend(giImage);
      carouselElementPreviewingBlockMobile.prepend(gimImage);

      block.append('<div id="' + draggableId + 'aspot_draggable_items_data"  class="aspot_draggable_items_data" style="display: none"></div>');

      // init
      if (prefix === '') {
        usanetwork_aspot_giui_setup_draggable_background();
      }
      usanetwork_aspot_giui_setup_draggable_elements();

      aspotElementsCheckboxes.change(function () {
        if ($(this).is(':checked')) {
          usanetwork_aspot_giui_enable_element($(this).val());
        }
        else {
          usanetwork_aspot_giui_disable_element($(this).val());
        }
        usanetwork_aspot_giui_fill_draggable_items_input();
      });

      var draggableOptions = {
        grid: [1, 1],
        appendTo: '#edit-field-aspot-enabled-gi',
        containment: "parent",
        //snap: true,
        cursor: "move",
        zIndex: 100,
        stop: function () {
          usanetwork_aspot_giui_fill_draggable_items_input();
          usanetwork_aspot_giui_lock_ajax_form_submits();
        }
      };
      block.find('.aspot-draggable-element')
          .draggable(draggableOptions)
          .css("position", "absolute");
      block.find('[data-rel=title_prefix]').resizable({
        containment: "parent",
        stop: function () {
          usanetwork_aspot_giui_fill_draggable_items_input();
          usanetwork_aspot_giui_lock_ajax_form_submits();
        }
        /*
         ui.helper
         ui.originalPosition
         ui.originalSize
         ui.position
         ui.size
         */

        //start: function(e, ui) {},
        //resize: function(e, ui) {},
        //stop: function(e, ui) {}

      });
      block.find('[data-rel=title]').resizable({
        containment: "parent",
        stop: function () {
          usanetwork_aspot_giui_fill_draggable_items_input();
          usanetwork_aspot_giui_lock_ajax_form_submits();
        }
      });

      block.find('[data-rel=aspot_description]').resizable({
        containment: "parent",
        stop: function () {
          usanetwork_aspot_giui_fill_draggable_items_input();
          usanetwork_aspot_giui_lock_ajax_form_submits();
        }
      });

      /**
       * Enables draggable element (connection of checkbox and element visibility).
       */
      function usanetwork_aspot_giui_enable_element(inputElementName) {
        var targetCheckboxElement = $('#edit-field-aspot-enabled-' + prefix + 'gi input[value="' + inputElementName + '"]');
        if (!targetCheckboxElement.is(':checked')) {
          targetCheckboxElement.prop('checked', true);
        }
        if (inputElementName === 'cta_button') {
          block.find('.aspot-draggable-cta-button').show();
        }

        $('#aspot-draggable-' + draggableId + inputElementName).show();
        $('#mobile-aspot-draggable-' + draggableId + inputElementName).show();

      }

      /**
       * Disables draggable element (connection of checkbox and element visibility).
       */
      function usanetwork_aspot_giui_disable_element(inputElementName) {
        var targetCheckboxElement = $('#edit-field-aspot-enabled-' + prefix + 'gi input[value="' + inputElementName + '"]');
        if (targetCheckboxElement.is(':checked')) {
          targetCheckboxElement.prop('checked', true);
        }
        if (inputElementName === 'cta_button') {
          block.find('.aspot-draggable-cta-button').hide();
        }

        $('#aspot-draggable-' + draggableId + inputElementName).hide();
        $('#mobile-aspot-draggable-' + draggableId + inputElementName).hide();

      }

      /**
       * Collects draggable elements, calculates positions and saves data in form field.
       *
       */

      function vw(target, bp) {
        var $vw_context = bp * 0.01;
        return target / $vw_context + 'vw';
      }

      function usanetwork_aspot_giui_fill_draggable_items_input() {

        var elementsMeta = {};

        $.each(draggableElements, function (index, itemElement) {

          var mobileItemElement = carouselElementPreviewingBlockMobile.find($('#mobile-' + itemElement.attr('id')));
          //var fieldWidth = Math.abs(itemElement.css('width').replace('px', '')).toFixed(2);
          //var fieldWidthM = Math.abs(mobileItemElement .css('width').replace('px', '')).toFixed(2);
          var fieldWidth = itemElement.innerWidth();
          var fieldWidthM = mobileItemElement.innerWidth();

          //desktop
          var mapCX = Math.round(carouselElementPreviewingBlock.width() / 2);
          var mapCY = Math.round(carouselElementPreviewingBlock.height() / 2);
          var currentElementCX = Math.round(parseInt(itemElement.css('left')) + itemElement.width() / 2);
          var currentElementCY = Math.round(parseInt(itemElement.css('top')) + itemElement.height() / 2);
          var invertX = currentElementCX > mapCX ? true : false;
          var invertY = currentElementCY > mapCY ? true : false;
          var widthPercent = (parseInt(itemElement.css('left')) / carouselElementPreviewingBlock.width() * 100).toFixed(1);
          var heightPercent = (parseInt(itemElement.css('top')) / carouselElementPreviewingBlock.height() * 100).toFixed(1);
          var fieldWidthPercent = (fieldWidth / carouselElementPreviewingBlock.width() * 100).toFixed(1);

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
          var widthPercent_m = Math.round(parseInt(mobileItemElement.css('left')) / carouselElementPreviewingBlockMobile.width() * 100).toFixed(1);
          var heightPercent_m = Math.round(parseInt(mobileItemElement.css('top')) / carouselElementPreviewingBlockMobile.height() * 100).toFixed(1);
          var fieldWidthPercentM = (fieldWidthM / carouselElementPreviewingBlockMobile.width() * 100).toFixed(1);

          if (widthPercent_m < 0) {
            widthPercent_m = 0;
          }
          if (heightPercent_m < 0) {
            heightPercent_m = 0;
          }

          if (itemElement.hasClass('aspot-draggable-cta-button')) {
            fieldWidthPercent = 'auto';
            fieldWidthPercentM = 'auto';
          }

          elementsMeta[itemElement.data('rel')] = {
            'elementId': itemElement.attr('id'),
            'dataRel': itemElement.data('rel'),
            'display': itemElement.css('display'),
            'left': itemElement.css('left'),
            'top': itemElement.css('top'),
            'width': fieldWidthPercent,
            'leftM': mobileItemElement.css('left'),
            'topM': mobileItemElement.css('top'),
            'widthM': fieldWidthPercentM,
            'percentX': widthPercent,
            'percentY': heightPercent,
            'percentMX': widthPercent_m,
            'percentMY': heightPercent_m,
            'invertX': invertX,
            'invertY': invertY,
            'invertMX': invert_mX,
            'invertMY': invert_mY
          };

          if (block.attr('id') == ('edit-group_usa_aspot_ui')) {

            //offset
            var value = backgroundPreviewingBlock.css('backgroundPosition').split(' '),
                imgWidth = backgroundPreviewingBlock.attr('data-img-width'),
                offset_px_X = value[0].replace('px', ''),
                offset_percent_X = null;

            if (imgWidth === 0) {
              offset_percent_X = 0;
            } else {
              offset_percent_X = ((parseInt(offset_px_X) / imgWidth * 100) / 0.9).toFixed(2);
            }

            if (offset_percent_X < 0 && offset_percent_X < -100) {
              offset_percent_X = 0;
            } else if (offset_percent_X > 0) {
              offset_percent_X = 0;
            }

            elementsMeta.aspot_offset_percent = {
              dataRel: 'aspot_offset_percent',
              shiftPercent: offset_percent_X
            };
          } else {
            elementsMeta.aspot_offset_percent = {
              dataRel: 'aspot_offset_percent',
              shiftPercent: null
            };
          }
        });

        block.find('#' + draggableId + 'aspot_draggable_items_data').empty().text(JSON.stringify(elementsMeta));

      }


      /*
       * Setups draggable elements according settings that sent to JS.
       */
      function usanetwork_aspot_giui_setup_draggable_elements() {
        var draggableElementsObject = document.getElementById('edit-field-aspot-enabled-' + prefix + 'gi-preview');
        var draggableElementsObjectMobile = document.getElementById('edit-field-aspot-enabled-' + prefix + 'gi-preview-mobile');

        if ((draggableElementsObject == null) && (draggableElementsObjectMobile == null)) {
          carouselElementPreviewingContainer.prepend(PreviewingBlockWrapper.append(carouselElementPreviewingBlock));
          carouselElementPreviewingContainer.prepend(PreviewingBlockWrapperMobile.append(carouselElementPreviewingBlockMobile));
        } else {
          carouselElementPreviewingBlock = $('#edit-field-aspot-enabled-' + prefix + 'gi-preview');
          carouselElementPreviewingBlockMobile = $('#edit-field-aspot-enabled-' + prefix + 'gi-preview-mobile');
        }

        carouselElementPreviewingBlock = $('#edit-field-aspot-enabled-' + prefix + 'gi-preview');
        carouselElementPreviewingBlockMobile = $('#edit-field-aspot-enabled-' + prefix + 'gi-preview-mobile');

        // add title for draggable aria
        carouselElementPreviewingBlock
            .before('<h2>' + pageName + ' Desktop Version</h2>')
            .after('<div class="buttons-wrapper"><div class="button" data-button="position">Reset to Default</div><div class="button" data-button="align">Align lefts to Title</div></div>');
        carouselElementPreviewingBlockMobile
            .before('<h2>' + pageName + ' Mobile Version</h2>')
            .after('<div class="buttons-wrapper"><div class="button" data-button="position">Reset to Default</div><div class="button" data-button="align">Align lefts to Title</div></div>'
        );

        var draggableElementsData = Object.keys(aspot_elements);
        // At the beginning when it's debugging some deprecated elements could presents in view. All the
        // deprecated elements must be removed. This function only for early stage of development but can
        // be featured for future.
        draggableElementsData = usanetwork_aspot_giui_remove_deprecated_draggable_elements(draggableElementsData);

        $.each(draggableElementsData, function (index, itemElement) {
          var draggableElementId = 'aspot-draggable-' + draggableId + itemElement;
          var draggableElement = null,
              draggableElementMobile = null;
          if (draggableElementsObject == null) {
            draggableElement = $('<div id="' + draggableElementId + '" class="aspot-draggable-element" data-rel="' +
                itemElement + '">' + aspot_elements[itemElement].value + '</div>');
            if (usanetwork_aspot_giui_is_cta_element(itemElement)) {
              draggableElement.addClass('aspot-draggable-cta-button');
            }
            carouselElementPreviewingBlock.append(draggableElement);
            draggableElementMobile = draggableElement.clone();
            createMobileDraggableElem(draggableElementMobile, itemElement);
          } else {
            draggableElement = $('#' + draggableElementId);
          }

          if (aspot_elements[itemElement].left) {
            draggableElement.css({
              'left': aspot_elements[itemElement].left
            });
          }
          if (aspot_elements[itemElement].top) {
            draggableElement.css({
              'top': aspot_elements[itemElement].top
            });
          }
          if (aspot_elements[itemElement].width) {
            draggableElement.css({
              'width': aspot_elements[itemElement].width + '%'
            });
          }

          draggableElements.push(draggableElement);
          if (draggableElementsObject !== null) {
            carouselElementPreviewingBlock.append(draggableElement);
            draggableElementMobile = draggableElement.clone();
            createMobileDraggableElem(draggableElementMobile, itemElement);
          }

          if (aspot_elements[itemElement].enabled) {
            usanetwork_aspot_giui_enable_element(itemElement);
          }
          else {
            usanetwork_aspot_giui_disable_element(itemElement);
          }
        })
      }

      /**
       * Detects if the element name is CTA button related.
       */
      function usanetwork_aspot_giui_is_cta_element(inputElementName) {
        return (inputElementName.indexOf('cta_button_') != -1) ? true : false;
      }

      /**
       * Сreate Mobile Draggable Elem
       */
      function createMobileDraggableElem(draggableElementMobile, itemElement) {
        var currentId = draggableElementMobile.attr('id');
        draggableElementMobile.attr('id', 'mobile-' + currentId).addClass('mobile');
        carouselElementPreviewingBlockMobile.append(draggableElementMobile);
        if (aspot_elements[itemElement].leftM) {
          draggableElementMobile.css({
            'left': aspot_elements[itemElement].leftM
          });
        }
        if (aspot_elements[itemElement].topM) {
          draggableElementMobile.css({
            'top': aspot_elements[itemElement].topM
          });
        }
        if (aspot_elements[itemElement].widthM) {
          draggableElementMobile.css({
            'width': aspot_elements[itemElement].widthM + '%'
          });
        }
      }

      /**
       * Locks ajax forms. The function must be used if elements must be saved first.
       */
      function usanetwork_aspot_giui_lock_ajax_form_submits() {
        var noticeMessage = Drupal.t('This form could not be submitted now. Please save the page before.');
        var submitFormIds = [
          'edit-field-aspot-' + prefix + 'gi-cta'
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
       * Setups draggable background element.
       */
      function usanetwork_aspot_giui_setup_draggable_background() {
        var backgroundPreviewObject = document.getElementById('edit-field-aspot-preview-' + prefix + 'bg-offset-preview');
        if (backgroundPreviewObject == null) {
          backgroundPreviewingContainer.prepend(backgroundPreviewingBlock);
          backgroundPreviewingContainer.prepend(nameOffset);
        } else {
          backgroundPreviewingBlock = $('#edit-field-aspot-preview-' + prefix + 'bg-offset-preview');
        }
        backgroundPreviewingContainer.find('input[type="number"]').val(bg_offset_value);
        backgroundPreviewingBlock.css({
          'background-image': 'url("' + bg_offset_image_url + '")',
          'background-position': bg_offset_value + 'px 0'
        });

        backgroundPreviewingBlock.backgroundDraggable({
          axis: "x",
          done: function () {
            usanetwork_aspot_giui_fill_draggable_items_input();
            var value = backgroundPreviewingBlock.css('backgroundPosition').split(' ');
            $('#field-aspot-preview-' + prefix + 'bg-offset-add-more-wrapper input').val(value[0].replace('px', ''));
          }
        });

        $('#field-aspot-preview-' + prefix + 'bg-offset-add-more-wrapper input').bind('change', function () {

          var bg_offset = $(this).val();

          if (bg_offset < 0 && bg_offset < -2592) {
            $(this).val(-2592);
          } else if (bg_offset > 0) {
            $(this).val(0);
          }

          backgroundPreviewingBlock.css({
            'background-position': $(this).val() + 'px 0px'
          });
          usanetwork_aspot_giui_fill_draggable_items_input();
        });
      }

      // set default positions
      function setDefaultPositions(container) {

        var el = container.find('.aspot-draggable-element'),
            containerClass = container.attr('class'),
            self, elName, settingsAspot;

        // check section
        if (block.attr('id') === 'edit-group_usa_aspot_ui') {
          settingsAspot = defaultSettings.aspot_elements;
        } else if (block.attr('id') === 'edit-group_usa_tv_aspot_ui') {
          settingsAspot = defaultSettings.tvs_aspot_elements;
        }

        $.each(el, function (index, itemElement) {

          self = $(itemElement);
          elName = self.data('rel');

          if (settingsAspot[elName] === undefined) {
            return;
          }

          if (containerClass === 'wrapper-mobile') {
            self.css({
              left: settingsAspot[elName].leftM,
              top: settingsAspot[elName].topM
            })
          } else if (containerClass === 'wrapper-desktop') {
            self.css({
              left: settingsAspot[elName].left,
              top: settingsAspot[elName].top
            })
          }
        });

        // set positions
        usanetwork_aspot_giui_fill_draggable_items_input();
      }

      // set align To Title
      function setAlignToTitle(container) {

        var el = container.find('.aspot-draggable-element'),
            containerClass = container.attr('class'),
            titleLeft = Math.abs(container.find('[data-rel=title]').css('left').replace('px', '')),
            self, elName, settingsAspot;

        // check section
        if (block.attr('id') === 'edit-group_usa_aspot_ui') {
          settingsAspot = defaultSettings.aspot_elements;
        } else if (block.attr('id') === 'edit-group_usa_tv_aspot_ui') {
          settingsAspot = defaultSettings.tvs_aspot_elements;
        }

        $.each(el, function (index, itemElement) {

          self = $(itemElement);
          elName = self.data('rel');

          if (elName === 'aspot_offset_percent' || elName === 'social_meter' || elName === 'title') {
            return;
          }

          if (containerClass === 'wrapper-mobile') {
            self.css({
              left: titleLeft + settingsAspot[elName].alignLeftM + 'px'
            });
          } else if (containerClass === 'wrapper-desktop') {
            self.css({
              left: titleLeft + settingsAspot[elName].alignLeft + 'px'
            });
          }
        });

        // set positions
        usanetwork_aspot_giui_fill_draggable_items_input();
      }

      // default settings for draggable elements on cklick
      carouselElementPreviewingContainer.find('.buttons-wrapper .button').on('click', function () {

        var self = $(this), container, settingsAspot;

        if (self.closest('.wrapper-mobile').length > 0) {
          container = self.closest('.wrapper-mobile');
        } else if (self.closest('.wrapper-desktop').length > 0) {
          container = self.closest('.wrapper-desktop');
        }

        // check data attribute
        if (self.data('button') === 'position') {
          setDefaultPositions(container);
        } else if (self.data('button') === 'align') {
          setAlignToTitle(container);
        }

      });

      return {
        setPosition: usanetwork_aspot_giui_fill_draggable_items_input
      };
    },
    attach: function (context, settings) {

      var homePrefixId = '',
          showPrefiksId = 't',
          homeDraggeblePrefix = '',
          showDraggeblePrefix = 'tv_show',
          homePage = 'Homepage',
          showPage = 'TV Show',
          homeUi = $('#edit-group_usa_aspot_ui'),
          showUi = $('#edit-group_usa_tv_aspot_ui');

      // init aspot
      homeAspot = Drupal.behaviors.usanetwork_aspot_giui.initAspot(homePrefixId, homeUi, showUi, homeDraggeblePrefix, homePage);
      showAspot = Drupal.behaviors.usanetwork_aspot_giui.initAspot(showPrefiksId, showUi, homeUi, showDraggeblePrefix, showPage);

      $('#usanetwork-aspot-node-form').submit(function () {

        var headTextarea = $('#edit-field-aspot-gi-draggable-data-und-0-value'),
            headInput = $('input[name="aspot_draggable_items_data"]').eq(0),
            homeUiPositions = homeUi.find('#aspot_draggable_items_data').text(),
            showUiPositions = showUi.find('#tv_show-aspot_draggable_items_data').text(),
            aspot_elements = Drupal.settings.giui_settings.aspot_elements,
            tvs_aspot_elements = Drupal.settings.giui_settings.tvs_aspot_elements,
            homeUiPositionsVal, showUiPositionsVal;

        if ((homeUiPositions == '') && (showUiPositions == '')) {
          headInput.val(headTextarea.text());
        } else {

          if (homeUiPositions != '') {
            homeUiPositionsVal = JSON.parse(homeUiPositions);
          } else {
            homeUiPositionsVal = getParams(aspot_elements);
          }

          if (showUiPositions != '') {
            showUiPositionsVal = JSON.parse(showUiPositions);
          } else {
            showUiPositionsVal = getParams(tvs_aspot_elements);
          }

          var myData = {
            data: {
              aspot_elements: homeUiPositionsVal,
              tvs_aspot_elements: showUiPositionsVal
            }
          };
          headInput.val(JSON.stringify(myData));
        }
      });

      function getParams(obj) {

        var dataPosition = {};

        $.each(obj, function (index, itemElem) {

          var name = itemElem.dataRel;

          if (name === 'aspot_offset_percent') {
            dataPosition[name] = {
              "shiftPercent": itemElem.shiftPercent
            }
          } else {
            dataPosition[name] = {
              "elementId": itemElem.elementId,
              "dataRel": itemElem.dataRel,
              "display": itemElem.display,
              "left": itemElem.left,
              "top": itemElem.top,
              'width': itemElem.width,
              "leftM": itemElem.leftM,
              "topM": itemElem.topM,
              'widthM': itemElem.widthM,
              "percentX": itemElem.percentX,
              "percentY": itemElem.percentY,
              "percentMX": itemElem.percentMX,
              "percentMY": itemElem.percentMY,
              "invertX": itemElem.invertX,
              "invertY": itemElem.invertY,
              "invertMX": itemElem.invertMX,
              "invertMY": itemElem.invertMY
            }
          }

        });

        return dataPosition;
      }
    }
  };
}(jQuery));
