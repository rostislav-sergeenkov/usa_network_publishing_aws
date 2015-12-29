(function ($) {

  'use strict';

  function adminAspotService(options) {

    // vars
    var fontSettings = Drupal.behaviors.usanetwork_aspot_giui.defaultFontSettings,
        fontStepUpDown = fontSettings.stepUpDown,
        fontDefaultStepPosition = fontSettings.defaultStepPosition,
        aspot_elements, draggableElementsData, draggableAreaDesktop_tpl, draggableAreaDesktopMobile_tpl,
        draggableAreaDesktopId, draggableAreaDesktopMobileId, draggableElements, draggableElementsMobile,
        sericeApi, allParams, pageName, defaultParams, mainBlock, bgOffsetBlock, aspotPreviewBlock, aspotElemCheckboxes,
        isShowBgOffset, bgPreviewingBlock, bgPreviewingBlock_tpl, bgPreviewingBlockId, bgPreviewingBlockTitle_tpl, desktopImg_tpl, mobileImg_tpl, desktopImgId, mobileImgId,
        PreviewBlockWrapper_tpl, PreviewBlockWrapperMobile_tpl, PreviewBlockWrapperTitle_tpl, PreviewBlockWrapperMobileTitle_tpl, PreviewBlockWrapperId,
        PreviewBlockWrapperMobileId, defaultFontSize, defaultElemPosition, aspotDraggableItemsData, aspotDraggableItemsDataId, aspotDraggableItemsData_tpl,
        timeOutDataSave, PreviewBlock, PreviewBlockMobile, PreviewBlockWrapper, PreviewBlockWrapperMobile,
        ctaButtonClass;

    // default params value
    defaultParams = {
      showBgOffset: false
    };

    // generate all params
    allParams = $.extend({}, defaultParams, options);

    // sets vars value
    aspot_elements = allParams.aspot_elements;
    draggableElementsData = Object.keys(aspot_elements);
    mainBlock = $('#' + allParams.mainBlockId);
    bgOffsetBlock = $('#edit-field-aspot-preview-bg-offset');
    aspotPreviewBlock = mainBlock.find('[id^=edit-field-aspot-enabled-].form-wrapper');
    aspotElemCheckboxes = aspotPreviewBlock.find('.form-checkboxes input.form-checkbox');
    pageName = allParams.pageName;
    isShowBgOffset = allParams.showBgOffset;
    defaultFontSize = allParams.defaultFontSize;
    defaultElemPosition = allParams.defaultElemPosition;
    draggableElements = [];
    //draggableElementsMobile = [];

    // generate Ids
    PreviewBlockWrapperId = 'preview-' + pageName + '-wrapper';
    PreviewBlockWrapperMobileId = 'preview-' + pageName + '-wrapper-mobile';
    desktopImgId = pageName + '-image';
    mobileImgId = pageName + '-image-mobile';
    bgPreviewingBlockId = pageName + '-edit-field-aspot-preview-bg-offset-preview';
    draggableAreaDesktopId = 'edit-field-aspot-enabled-' + pageName + '-preview';
    draggableAreaDesktopMobileId = 'edit-field-aspot-enabled-' + pageName + '-preview-mobile';
    aspotDraggableItemsDataId = pageName + '-aspot_draggable_items_data';
    ctaButtonClass = 'aspot-draggable-cta-button';

    // templates
    aspotDraggableItemsData_tpl = $('<div>', {
      id: aspotDraggableItemsDataId,
      style: 'display: none'
    });

    bgPreviewingBlockTitle_tpl = $('<h2>', {
      text: 'Peek-ahead strip'
    });

    bgPreviewingBlock_tpl = $('<div>', {
      id: bgPreviewingBlockId,
      class: 'desktop'
    });

    desktopImg_tpl = $('<img>', {
      id: desktopImgId,
      style: mobileImgId,
      src: allParams.bg_offset_image_url
    }).load(function () {
      bgPreviewingBlock_tpl.attr('data-img-width', this.width);
      bgPreviewingBlock_tpl.css({
        'height': this.height,
        'width': this.width * 0.1
      });
    });

    mobileImg_tpl = $('<img>', {
      id: pageName + 'gi-image',
      style: 'max-width: 100%; height: auto;',
      src: allParams.bg_offset_image_url_mobile
    });

    PreviewBlockWrapperTitle_tpl = $('<h2>', {
      text: pageName + ' Desktop Version'
    });

    PreviewBlockWrapperMobileTitle_tpl = $('<h2>', {
      text: pageName + ' Mobile Version'
    });

    PreviewBlockWrapper_tpl = $('<div>', {
      id: PreviewBlockWrapperId,
      class: 'wrapper-desktop'
    });

    PreviewBlockWrapperMobile_tpl = $('<div>', {
      id: PreviewBlockWrapperMobileId,
      class: 'wrapper-mobile'
    });

    draggableAreaDesktop_tpl = $('<div>', {
      id: draggableAreaDesktopId,
      class: "draggable-area desktop"
    });

    draggableAreaDesktopMobile_tpl = $('<div>', {
      id: draggableAreaDesktopMobileId,
      class: "draggable-area mobile"
    });

    function createDraggableElement(elParams) {
      return $('<div>', {
        id: elParams.id,
        class: elParams.class,
        'data-rel': elParams.dataRel,
        html: elParams.value
      });
    }

    function addSetElempositionNav_tpl() {
      return $('<div class="buttons-wrapper">' +
          '<h2>Change Elements Position</h2>' +
          '<div class="button" data-button="position">Reset to Default</div>' +
          '<div class="button" data-button="align">Align lefts to Title</div>' +
          '</div>');
    }

    function addFontSizeNav_tpl(deviceVer) {
      return $('<div class="edit-font-wrapper">' +
          '<h2>Change font size</h2>' +
          '<div class="edit-field-size" data-field-name="title_prefix">' +
          '<span class="name">Title prefix</span>' +
          '<button class="decrease-font font-button">-</button>' +
          '<span class="field-font-size" ' +
          'data-default-font-size="' + deviceVer.title_prefix.default_font_size + '" ' +
          'data-font-size-step="' + deviceVer.title_prefix.step + '" ' +
          'data-step-counter=""></span>' +
          '<button class="increase-font font-button">+</button>' +
          '<button class="reset-font font-button">Reset Defaults</button>' +
          '</div>' +
          '<div class="edit-field-size" data-field-name="title">' +
          '<span class="name">Title</span>' +
          '<button class="decrease-font font-button">-</button>' +
          '<span class="field-font-size" ' +
          'data-default-font-size="' + deviceVer.title.default_font_size + '" ' +
          'data-font-size-step="' + deviceVer.title.step + '" ' +
          'data-step-counter=""></span>' +
          '<button class="increase-font font-button">+</button>' +
          '<button class="reset-font font-button">Reset Defaults</button>' +
          '</div>' +
          '<div class="edit-field-size" data-field-name="aspot_description">' +
          '<span class="name">Description</span>' +
          '<button class="decrease-font font-button">-</button>' +
          '<span class="field-font-size" ' +
          'data-default-font-size="' + deviceVer.aspot_description.default_font_size + '" ' +
          'data-font-size-step="' + deviceVer.aspot_description.step + '" ' +
          'data-step-counter=""></span>' +
          '<button class="increase-font font-button">+</button>' +
          '<button class="reset-font font-button">Reset Defaults</button>' +
          '</div>' +
          '</div>'
      );
    }

    // private methods
    sericeApi = {

      addBgOffsetDraggable: function () {
        var offsetContainer = $('#' + bgPreviewingBlockId),
            inputNum = $('#edit-field-aspot-preview-bg-offset-und-0-value');

        offsetContainer
            .css({
              'background-image': 'url("' + allParams.bg_offset_image_url + '")',
              'background-position': allParams.bg_offset_value + 'px 0'
            })
            .backgroundDraggable({
              axis: "x",
              done: function () {
                sericeApi.saveDraggableItemsData();
                var value = offsetContainer.css('backgroundPosition').split(' ');
                inputNum.val(value[0].replace('px', ''));
              }
            });

        inputNum.bind('change', function () {
          var bg_offset = $(this).val();

          if (bg_offset < 0 && bg_offset < -2592) {
            $(this).val(-2592);
          } else if (bg_offset > 0) {
            $(this).val(0);
          }

          offsetContainer.css({
            'background-position': $(this).val() + 'px 0px'
          });

          sericeApi.saveDraggableItemsData();
        });
      },

      createBgOffset: function () {
        bgOffsetBlock
            .prepend(bgPreviewingBlock_tpl)
            .prepend(bgPreviewingBlockTitle_tpl);

        sericeApi.addBgOffsetDraggable();
      },

      createDraggableElem: function () {
        PreviewBlock = $('#' + draggableAreaDesktopId);
        PreviewBlockMobile = $('#' + draggableAreaDesktopMobileId);
        PreviewBlockWrapper = $('#' + PreviewBlockWrapperId);
        PreviewBlockWrapperMobile = $('#' + PreviewBlockWrapperMobileId);

        // At the beginning when it's debugging some deprecated elements could presents in view. All the
        // deprecated elements must be removed. This function only for early stage of development but can
        // be featured for future.
        draggableElementsData = sericeApi.removeDeprecatedDraggableElements(draggableElementsData);

        $.each(draggableElementsData, function (index, itemElement) {
          var draggableElementId = 'aspot-draggable-' + pageName + '-' + itemElement,
              draggableElementMobileId = 'mobile-aspot-draggable-' + pageName + '-' + itemElement,
              draggableElement, draggableElementMobile,
              elParams = {
                id: draggableElementId,
                class: 'aspot-draggable-element ',
                dataRel: itemElement,
                value: aspot_elements[itemElement].value
              },
              elParamsMob = {
                id: draggableElementMobileId,
                class: 'aspot-draggable-element mobile ',
                dataRel: itemElement,
                value: aspot_elements[itemElement].value
              }, options;

          if (sericeApi.checkIsCTA_element(itemElement)) {
            elParams.class += ctaButtonClass;
            elParamsMob.class += ctaButtonClass;
          }

          PreviewBlock.append(createDraggableElement(elParams));
          PreviewBlockMobile.append(createDraggableElement(elParamsMob));

          draggableElement = $('#' + draggableElementId);
          draggableElementMobile = $('#' + draggableElementMobileId);

          options = {
            PreviewBlockWrapper: PreviewBlockWrapper,
            PreviewBlockWrapperMobile: PreviewBlockWrapperMobile,
            draggableElement: draggableElement,
            draggableElementMobile: draggableElementMobile,
            itemElement: itemElement
          };

          draggableElements.push(draggableElement);
          //draggableElementsMobile.push(draggableElementMobile);

          sericeApi.setDraggableElemPosition(options);
        });

        sericeApi.enableDraggableElem();
      },

      /**
       * Detects if the element name is CTA button related.
       */
      checkIsCTA_element: function (inputElementName) {
        return (inputElementName.indexOf('cta_button_') != -1) ? true : false;
      },

      /**
       * Removed deprecated element from deaggable elements array. Function exists only at early stage of development,
       * but could be featured in future.
       */
      removeDeprecatedDraggableElements: function (draggableElementsData) {
        var deprecatedElements = ['cta_button'];
        $.each(deprecatedElements, function (index, elementItem) {
          var deprecatedElementIndex = draggableElementsData.indexOf(elementItem);
          if (deprecatedElementIndex != -1) {
            draggableElementsData.splice(deprecatedElementIndex, 1);
          }
        });
        return draggableElementsData;
      },

      enableDraggableElem: function () {
        var draggableOptions = {
          grid: [1, 1],
          appendTo: '#edit-field-aspot-enabled-gi',
          containment: "parent",
          //snap: true,
          cursor: "move",
          zIndex: 100,
          stop: function () {
            sericeApi.saveDraggableItemsData();
          }
        };
        mainBlock.find('.aspot-draggable-element')
            .draggable(draggableOptions)
            .css("position", "absolute");
        mainBlock.find('[data-rel=title_prefix], [data-rel=title], [data-rel=aspot_description]').resizable({
          containment: "parent",
          stop: function () {
            sericeApi.saveDraggableItemsData();
          }
        });
      },

      createDataSaveBlock: function () {
        aspotPreviewBlock.append(aspotDraggableItemsData_tpl);
        aspotDraggableItemsData = $('#' + aspotDraggableItemsDataId);
      },

      createPreviewingBlocks: function () {
        aspotPreviewBlock
            .prepend(PreviewBlockWrapper_tpl.append(PreviewBlockWrapperTitle_tpl, draggableAreaDesktop_tpl.append(desktopImg_tpl), addSetElempositionNav_tpl(), addFontSizeNav_tpl(defaultFontSize.desktop)))
            .prepend(PreviewBlockWrapperMobile_tpl.append(PreviewBlockWrapperMobileTitle_tpl, draggableAreaDesktopMobile_tpl.append(mobileImg_tpl), addSetElempositionNav_tpl(), addFontSizeNav_tpl(defaultFontSize.mobile)));
      },

      onOffDraggableElem: function (inputElementName, elem) {

        var pattern = /cta_button/, targetCheckboxElement, currentElements,
            ctaButtonCheckboxElement, ctaButtonElements;

        if (pattern.exec(inputElementName) != null) {
          ctaButtonCheckboxElement = aspotElemCheckboxes.filter('[value=cta_button]');
          ctaButtonElements = mainBlock.find('.' + ctaButtonClass);

          if (ctaButtonCheckboxElement.is(':checked')) {
            ctaButtonElements.show();
          } else {
            ctaButtonElements.hide();
          }
        } else {
          targetCheckboxElement = elem || aspotElemCheckboxes.filter('[value=' + inputElementName + ']');
          currentElements = mainBlock.find('.aspot-draggable-element[data-rel=' + inputElementName + ']');

          if (targetCheckboxElement.is(':checked')) {
            currentElements.show();
          } else {
            currentElements.hide();
          }
        }
      },

      setDraggableElemPosition: function (options) {

        var draggableElement = options.draggableElement,
            draggableElementMobile = options.draggableElementMobile,
            itemElement = options.itemElement;

        sericeApi.onOffDraggableElem(itemElement);
        sericeApi.setFieldFontSizeValue(options);

        // for desktop version
        if (aspot_elements[itemElement].fontSize) {
          draggableElement.css({
            'fontSize': aspot_elements[itemElement].fontSize
          });
        }
        if (aspot_elements[itemElement].left) {
          draggableElement.css({
            'left': aspot_elements[itemElement].left
          });
        }
        if (aspot_elements[itemElement].top) {
          draggableElement.css({
            'top': aspot_elements[itemElement].top === 'auto' ? 0 : aspot_elements[itemElement].top
          });
        }
        if (aspot_elements[itemElement].width) {
          draggableElement.css({
            'width': aspot_elements[itemElement].width + '%'
          });
        }

        // for mobile version
        if (aspot_elements[itemElement].fontSizeM) {
          draggableElementMobile.css({
            'fontSize': aspot_elements[itemElement].fontSizeM
          });
        }
        if (aspot_elements[itemElement].leftM) {
          draggableElementMobile.css({
            'left': aspot_elements[itemElement].leftM
          });
        }
        if (aspot_elements[itemElement].topM) {
          draggableElementMobile.css({
            'top': aspot_elements[itemElement].topM === 'auto' ? 0 : aspot_elements[itemElement].topM
          });
        }
        if (aspot_elements[itemElement].widthM) {
          draggableElementMobile.css({
            'width': aspot_elements[itemElement].widthM + '%'
          });
        }
      },

      setFieldFontSizeValue: function (options) {

        var PreviewBlockWrapper = options.PreviewBlockWrapper,
            PreviewBlockWrapperMobile = options.PreviewBlockWrapperMobile,
            itemElement = options.itemElement,
            editFieldFontSize = PreviewBlockWrapper.find('.edit-field-size[data-field-name=' + itemElement + '] .field-font-size'),
            editFieldFontSizeMobile = PreviewBlockWrapperMobile.find('.edit-field-size[data-field-name=' + itemElement + '] .field-font-size');

        // data-step-counter

        // for desktop version
        if (editFieldFontSize.length > 0) {
          if (aspot_elements[itemElement].fontSize) {
            editFieldFontSize.text(aspot_elements[itemElement].fontSize + 'px');
          } else {
            editFieldFontSize.text(defaultFontSize.desktop[itemElement].default_font_size + 'px');
          }
          if (aspot_elements[itemElement].stepCounter) {
            editFieldFontSize.attr('data-step-counter', aspot_elements[itemElement].stepCounter);
          } else {
            editFieldFontSize.attr('data-step-counter', fontDefaultStepPosition);
          }
        }

        // for mobile version
        if (editFieldFontSizeMobile.length > 0) {
          if (aspot_elements[itemElement].fontSizeM) {
            editFieldFontSizeMobile.text(aspot_elements[itemElement].fontSizeM + 'px');
          } else {
            editFieldFontSizeMobile.text(defaultFontSize.mobile[itemElement].default_font_size + 'px');
          }
          if (aspot_elements[itemElement].stepCounterM) {
            editFieldFontSizeMobile.attr('data-step-counter', aspot_elements[itemElement].stepCounterM);
          } else {
            editFieldFontSizeMobile.attr('data-step-counter', fontDefaultStepPosition);
          }
        }
      },

      setDefaultPositions: function (container) {

        var elements = container.find('.aspot-draggable-element');

        $.each(elements, function (index, itemElement) {
          var self = $(itemElement),
              selfName = self.data('rel');

          if (defaultElemPosition[selfName] === undefined) {
            return;
          }

          if (container.hasClass('wrapper-mobile')) {
            self.css({
              left: defaultElemPosition[selfName].leftM,
              top: defaultElemPosition[selfName].topM
            })
          } else if (container.hasClass('wrapper-desktop')) {
            self.css({
              left: defaultElemPosition[selfName].left,
              top: defaultElemPosition[selfName].top
            })
          }
        });

        sericeApi.saveDraggableItemsData();
      },

      setAlignToTitle: function (container) {

        var elements = container.find('.aspot-draggable-element'),
            titleLeft = parseFloat(container.find('[data-rel=title]').css('left').replace('px', ''));

        $.each(elements, function (index, itemElement) {

          var self = $(itemElement),
              selfName = self.attr('data-rel');

          if (selfName === 'aspot_offset_percent' || selfName === 'social_meter' || selfName === 'title') {
            return;
          }

          if (container.hasClass('wrapper-mobile')) {
            self.css({
              left: titleLeft + defaultElemPosition[selfName].alignLeftM + 'px'
            })
          } else if (container.hasClass('wrapper-desktop')) {
            self.css({
              left: titleLeft + defaultElemPosition[selfName].alignLeft + 'px'
            })
          }
        });

        sericeApi.saveDraggableItemsData();
      },

      setPositionDraggableElement: function (el, direction, step) {
        var currentPosition = parseInt(el.css(direction)) + step;

        if (currentPosition < 0) {
          currentPosition = 0
        }
        el.css(direction, currentPosition + 'px');

        sericeApi.saveDraggableItemsData();
      },

      resetDraggableElement: function () {
        $('.aspot-draggable-element').removeClass('active');
        $(document).unbind('keydown');

        sericeApi.saveDraggableItemsData();
      },

      changePositionDraggableElement: function (el) {
        $(document).keydown(function (event) {
          event.preventDefault();
          switch (event.keyCode) {
            case 37: // left
              sericeApi.setPositionDraggableElement(el, 'left', -1);
              break;
            case 38: // top
              sericeApi.setPositionDraggableElement(el, 'top', -1);
              break;
            case 39: // right
              sericeApi.setPositionDraggableElement(el, 'left', 1);
              break;
            case 40: // bottom
              sericeApi.setPositionDraggableElement(el, 'top', 1);
              break;
            case 27: // ESC
              sericeApi.resetDraggableElement();
              break;
            default :
              break;
          }
        });
      },

      saveDraggableItemsData: function () {
        var elementsMeta = {},
            bgPreviewingBlock = $('#' + bgPreviewingBlockId);

        $.each(draggableElements, function (index, itemElement) {

          var dataRel = itemElement.data('rel'),
              itemElementMobile = PreviewBlockMobile.find('[data-rel=' + dataRel + ']'),
              dataItem, dataItemM;

          dataItem = sericeApi.saveDataHelper({
            parentWrap: PreviewBlockWrapper,
            parent: PreviewBlock,
            item: itemElement,
            dataRel: dataRel,
            version: 'desktop'
          });
          dataItemM = sericeApi.saveDataHelper({
            parentWrap: PreviewBlockWrapperMobile,
            parent: PreviewBlockMobile,
            item: itemElementMobile,
            dataRel: dataRel,
            version: 'mobile'
          });

          elementsMeta[dataRel] = {
            // main data
            elementId: itemElement.attr('id'),
            dataRel: itemElement.data('rel'),
            display: itemElement.css('display'),
            // desktop data=
            left: itemElement.css('left'),
            top: itemElement.css('top'),
            stepCounter: dataItem.params.stepCounter,
            fontSize: dataItem.params.fontSize,
            width: dataItem.params.width,
            percentX: dataItem.params.percentX,
            percentY: dataItem.params.percentY,
            // mobile data
            leftM: dataItemM.params.leftM,
            topM: dataItemM.params.topM,
            stepCounterM: dataItemM.params.stepCounterM,
            fontSizeM: dataItemM.params.fontSizeM,
            widthM: dataItemM.params.widthM,
            percentMX: dataItemM.params.percentMX,
            percentMY: dataItemM.params.percentMY
          };
        });

        if (bgPreviewingBlock.length > 0) {

          //offset
          var value = bgPreviewingBlock.css('backgroundPosition').split(' '),
              imgWidth = bgPreviewingBlock.attr('data-img-width'),
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

        // set aspotDraggableItemsData value
        aspotDraggableItemsData.empty().text(JSON.stringify(elementsMeta));
      },

      convert_px_to_vw: function (target, bp) {
        var $vw_context = bp * 0.01;
        return target / $vw_context + 'vw';
      },

      saveDataHelper: function (options) {

        // PreviewBlock, PreviewBlockMobile
        var parentWrap = options.parentWrap,
            parent = options.parent,
            item = options.item,
            dataRel = options.dataRel,
            version = options.version,
            parrentWidth = parent.width(),
            parrentHeight = parent.height(),
            fieldWidth = item.innerWidth(),
            fieldFontSize = parentWrap.find('.edit-field-size[data-field-name=' + dataRel + '] .field-font-size'),
        // params
            itemLeft = item.css('left'),
            itemTop = item.css('top'),
            percentX = (parseInt(itemLeft) / parrentWidth * 100).toFixed(1),
            percentY = (parseInt(itemTop) / parrentHeight * 100).toFixed(1),
            stepCounter = fieldFontSize.attr('data-step-counter'),
            fontSize = parseFloat(fieldFontSize.text()),
            fieldWidthPercent = (fieldWidth / parrentWidth * 100).toFixed(1),
            params;

        if (percentX < 0) {
          percentX = 0;
        }
        if (percentY < 0) {
          percentY = 0;
        }

        if (item.hasClass(ctaButtonClass)) {
          fieldWidthPercent = 'auto';
        }

        if (version === 'desktop') {
          params = {
            stepCounter: stepCounter,
            fontSize: fontSize,
            width: fieldWidthPercent,
            percentX: percentX,
            percentY: percentY
          }
        } else if (version === 'mobile') {
          params = {
            leftM: itemLeft,
            topM: itemTop,
            stepCounterM: stepCounter,
            fontSizeM: fontSize,
            widthM: fieldWidthPercent,
            percentMX: percentX,
            percentMY: percentY
          }
        }

        return {
          params: params
        }
      },

      mathNewFontSize: function (currentFontSize, fontSizeStep) {
        return Math.round((currentFontSize * 100 + fontSizeStep * 100)) / 100;
      },

      init: function () {
        if (isShowBgOffset) {
          sericeApi.createBgOffset();
        }
        sericeApi.createDataSaveBlock();
        sericeApi.createPreviewingBlocks();
        sericeApi.createDraggableElem();
      }
    };

    // set event

    // click for on || off changePositionDraggableElement
    $(document).click(function (event) {
      if ($(event.target).closest(".aspot-draggable-element").length < 1) {
        if ($(".aspot-draggable-element").hasClass('active')) {
          sericeApi.resetDraggableElement();
        }
      }
    });

    // event on mainBlock click
    mainBlock
        .on('click', '.aspot-draggable-element', function (e) {
          var _self = $(event.target).closest(".aspot-draggable-element");
          sericeApi.resetDraggableElement();
          sericeApi.changePositionDraggableElement(_self);
          _self.addClass('active');
        })
        // change aspot elements font size
        .on('click', '.edit-field-size', function (e) {
          e.preventDefault();

          var activeItem = $(e.target),
              activeItemParent = $(e.currentTarget),
              activeItemName = activeItemParent.data('field-name'),
              draggableArea = activeItemParent.parent('.edit-font-wrapper').siblings('.draggable-area'),
              currentField = draggableArea.find('.aspot-draggable-element').filter('[data-rel=' + activeItemName + ']'),
              fieldFontSize = activeItemParent.find('.field-font-size'),
              fontSizeStep = parseFloat(fieldFontSize.attr('data-font-size-step')),
              stepCounterNum = parseFloat(fieldFontSize.attr('data-step-counter')),
              defaultFontSize = parseFloat(fieldFontSize.attr('data-default-font-size')),
              currentFontSize = parseFloat(fieldFontSize.text()),
              newCounter, newFontSize;

          if (activeItem.hasClass('increase-font')) {
            if (stepCounterNum < 13) {
              newCounter = stepCounterNum + fontStepUpDown;
              newFontSize = sericeApi.mathNewFontSize(currentFontSize, fontSizeStep);

              fieldFontSize
                  .text(newFontSize + 'px') // update value font size
                  .attr('data-step-counter', newCounter); // update step counter

              // update field font size
              currentField.css('fontSize', newFontSize + 'px');
            }
          } else if (activeItem.hasClass('decrease-font')) {
            if (stepCounterNum > 1) {
              newCounter = stepCounterNum - fontStepUpDown;
              newFontSize = sericeApi.mathNewFontSize(currentFontSize, -fontSizeStep);

              fieldFontSize
                  .text(newFontSize + 'px') // update value font size
                  .attr('data-step-counter', newCounter); // update step counter

              // update field font size
              currentField.css('fontSize', newFontSize + 'px');
            }
          } else if (activeItem.hasClass('reset-font')) {
            fieldFontSize
                .text(defaultFontSize + 'px') // update value font size
                .attr('data-step-counter', fontDefaultStepPosition); // update step counter

            // update field font size
            currentField.css('fontSize', defaultFontSize + 'px');
          }

          sericeApi.saveDraggableItemsData();
        })
        // default settings for draggable elements on cklick
        .on('click', '.buttons-wrapper .button', function (e) {
          e.preventDefault();

          var self = $(e.target),
              container;

          if (self.closest('.wrapper-mobile').length > 0) {
            container = self.closest('.wrapper-mobile');
          } else if (self.closest('.wrapper-desktop').length > 0) {
            container = self.closest('.wrapper-desktop');
          }

          // check data attribute
          if (self.data('button') === 'position') {
            sericeApi.setDefaultPositions(container);
          } else if (self.data('button') === 'align') {
            sericeApi.setAlignToTitle(container);
          }
        });

    // event on change checkboxs
    aspotElemCheckboxes.change(function () {
      var self = $(this);
      sericeApi.onOffDraggableElem(self.val(), self);
    });

    // init service api
    sericeApi.init();

    return {
      aspotDraggableItemsDataId: aspotDraggableItemsDataId
    };
  }

  Drupal.behaviors.usanetwork_aspot_giui = {
    defaultFontSettings: {
      stepUpDown: 1,
      defaultStepPosition: 7, // min value 1, max value 12
      homePage: {
        mobile: {
          title_prefix: {
            default_font_size: 17.28,
            step: 1
          },
          title: {
            default_font_size: 66.56,
            step: 4
          },
          aspot_description: {
            default_font_size: 20,
            step: 1.5
          }
        },
        desktop: {
          title_prefix: {
            default_font_size: 14.08,
            step: 1
          },
          title: {
            default_font_size: 76.8,
            step: 4
          },
          aspot_description: {
            default_font_size: 24,
            step: 1.5
          }
        }
      },
      showPage: {
        mobile: {
          title_prefix: {
            default_font_size: 17.28,
            step: 1
          },
          title: {
            default_font_size: 66.56,
            step: 4
          },
          aspot_description: {
            default_font_size: 20,
            step: 1.5
          }
        },
        desktop: {
          title_prefix: {
            default_font_size: 14.08,
            step: 1
          },
          title: {
            default_font_size: 76.8,
            step: 4
          },
          aspot_description: {
            default_font_size: 24,
            step: 1.5
          }
        }
      }
    },
    defaultElemPosition: {
      aspot_elements: {
        title_prefix: {
          dataRel: 'title_prefix',
          alignLeft: 3,
          alignLeftM: 3,
          left: '78px',
          top: '249px',
          leftM: '37px',
          topM: '254px'
        },
        title: {
          dataRel: 'title',
          alignLeft: 0,
          alignLeftM: 0,
          left: '75px',
          top: '275px',
          leftM: '34px',
          topM: '281px'
        },
        aspot_description: {
          dataRel: 'aspot_description',
          alignLeft: 3,
          alignLeftM: 3,
          left: '78px',
          top: '353px',
          leftM: '37px',
          topM: '353px'
        },
        cta_button_0: {
          dataRel: 'cta_button_0',
          alignLeft: 4,
          alignLeftM: -1,
          left: '79px',
          top: '409px',
          leftM: '36px',
          topM: '402px'
        },
        cta_button_1: {
          dataRel: 'cta_button_1',
          alignLeft: 4,
          alignLeftM: -1,
          left: '79px',
          top: '484px',
          leftM: '36px',
          topM: '462px'
        },
        cta_button_2: {
          dataRel: 'cta_button_2',
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
          dataRel: 'title_prefix',
          alignLeft: 3,
          alignLeftM: 2,
          left: '43px',
          top: '268px',
          leftM: '56px',
          topM: '285px'
        },
        title: {
          dataRel: 'title',
          alignLeft: 0,
          alignLeftM: 0,
          left: '40px',
          top: '291px',
          leftM: '54px',
          topM: '314px'
        },
        aspot_description: {
          dataRel: 'aspot_description',
          alignLeft: 6,
          alignLeftM: 4,
          left: '46px',
          top: '364px',
          leftM: '58px',
          topM: '382px'
        },
        cta_button_0: {
          dataRel: 'cta_button_0',
          alignLeft: 5,
          alignLeftM: 1,
          left: '45px',
          top: '416px',
          leftM: '55px',
          topM: '441px'
        },
        cta_button_1: {
          dataRel: 'cta_button_1',
          alignLeft: 5,
          alignLeftM: 1,
          left: '45px',
          top: '485px',
          leftM: '55px',
          topM: '495px'
        }
      }
    },
    attach: function (context, settings) {
      $(document.body).once(function () {

        var globalSettings = settings.giui_settings,
            aspotSettings = Drupal.behaviors.usanetwork_aspot_giui,
            aspot_draggable_items_data = $('#aspot_draggable_items_data'),
            homeAspot, showAspot, homeOptions, showOptions;

        // sets homeAspot options
        homeOptions = {
          aspot_elements: globalSettings.aspot_elements,
          bg_offset_value: globalSettings.desktop.bg_offset_value,
          bg_offset_image_url: globalSettings.desktop.bg_offset_image_url,
          bg_offset_image_url_mobile: globalSettings.mobile.bg_offset_image_url,
          defaultFontSize: aspotSettings.defaultFontSettings.homePage,
          defaultElemPosition: aspotSettings.defaultElemPosition.aspot_elements,
          mainBlockId: 'edit-group_usa_aspot_ui',
          pageName: 'homepage',
          showBgOffset: true // false default value
        };

        // sets homeAspot options
        showOptions = {
          aspot_elements: globalSettings.tvs_aspot_elements,
          bg_offset_value: globalSettings.tvs_desktop.bg_offset_value,
          bg_offset_image_url: globalSettings.tvs_desktop.bg_offset_image_url,
          bg_offset_image_url_mobile: globalSettings.tvs_mobile.bg_offset_image_url,
          defaultFontSize: aspotSettings.defaultFontSettings.showPage,
          defaultElemPosition: aspotSettings.defaultElemPosition.tvs_aspot_elements,
          mainBlockId: 'edit-group_usa_tv_aspot_ui',
          pageName: 'showpage',
          showBgOffset: false // false default value
        };

        // init Aspots
        homeAspot = adminAspotService(homeOptions);
        showAspot = adminAspotService(showOptions);

        $('#usanetwork-aspot-node-form').submit(function () {

          var headTextarea = $('#edit-field-aspot-gi-draggable-data-und-0-value'),
              headInput = $('input[name="aspot_draggable_items_data"]').eq(0),
              homeUiPositions = $('#' + homeAspot.aspotDraggableItemsDataId).text(),
              showUiPositions = $('#' + showAspot.aspotDraggableItemsDataId).text(),
              aspot_elements = globalSettings.aspot_elements,
              tvs_aspot_elements = globalSettings.tvs_aspot_elements,
              homeUiPositionsVal, showUiPositionsVal;

          if ((homeUiPositions == '') && (showUiPositions == '')) {
            headInput.val(headTextarea.text());
          } else {

            if (homeUiPositions != '') {
              homeUiPositionsVal = JSON.parse(homeUiPositions);
            } else {
              homeUiPositionsVal = aspot_elements;
            }

            if (showUiPositions != '') {
              showUiPositionsVal = JSON.parse(showUiPositions);
            } else {
              showUiPositionsVal = tvs_aspot_elements;
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
      });
    }
  }
}(jQuery));
