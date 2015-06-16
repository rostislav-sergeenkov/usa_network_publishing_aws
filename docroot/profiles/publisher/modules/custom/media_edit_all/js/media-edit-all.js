(function($, Drupal) {
  Drupal.behaviors.mediaEditAll = {
    url: '/admin/content/file/media-edit-all/ajax/',
    $mediaWrapper: null,
    /**
     * getFids: Returns all fids in media items.
     */
    getFids: function () {
      var fids = [];
      var $media_items = $('.media-item-check', Drupal.behaviors.mediaEditAll.$mediaWrapper);
      $.each($media_items, function (i, val) {
        fids.push($(val).data('fid'));
      });
      return fids;
    },
    /**
     * getSelectedFids: Returns selected media items.
     *
     * In case no media items are selected, returns all media items.
     */
    getSelectedFids: function() {
      var fids = [];
      var $media_items = $('.media-item-check', Drupal.behaviors.mediaEditAll.$mediaWrapper);
      $.each($media_items, function (i, val) {
        if ($(val).is(":checked")) {
          fids.push($(val).data('fid'));
        }
      });
      // If nothing is checked, then return all fids.
      if (fids.length == 0) {
        fids = Drupal.behaviors.mediaEditAll.getFids();
      }
      return fids;
    },
    /**
     * getUrl: Returns the URL for multiform edit.
     */
    getUrl: function() {
      return Drupal.behaviors.mediaEditAll.url + Drupal.behaviors.mediaEditAll.getSelectedFids().join(" ");
    },
    /**
     * addCheckboxes: Adds checkboxes to each media item.
     *
     * Also adds a check-all checkbox to the table header.
     */
    addCheckboxes: function() {
      var $media_items = $('.media-item', Drupal.behaviors.mediaEditAll.$mediaWrapper);
      var first = true;
      // Add select checkbox for each media item.
      $.each($media_items, function (i, val) {
        if (first) {
          // Add table header checkbox for "Select all".
          var check_all = $('<input type="checkbox" id="media-item-check-all" class="media-item-check-all">');
          if (!$(val).parents('table').first().find("th .media-item-check-all").length) {
            $(val).parents('table').first().find('thead tr th').first().prepend(check_all);
          }
          first = false;
        }
        var fid = $(val).data('fid');
        var check = $('<input type="checkbox" class="media-item-check" id="media-item-check-' + fid + '" data-fid="' + fid + '">');
        // Ensure there is no checkbox already existing before adding.
        if (!$(val).parents('td').first().find("#media-item-check-" + fid).length) {
          $(val).parents('td').first().prepend(check);
        }
      });
      // Handler for check-all checkbox.
      $(".media-item-check-all").click(function() {
        if ($(this).is(':checked')) {
          // Check all checkboxes.
          $(".media-item-check").prop('checked', true);
          // If there are other check-all checkboxes (due to sticky header), check them also.
          $(".media-item-check-all").prop('checked', true);
        }
        else {
          // Uncheck all checkboxes.
          $(".media-item-check").prop('checked', false);
          // If there are other check-all checkboxes (due to sticky header), uncheck them also.
          $(".media-item-check-all").prop('checked', false);
        }
        $("#media-edit-all-button").text(Drupal.t('Edit All'));
      });
      // Handler for media item checkbox.
      $(".media-item-check").click(function() {
        Drupal.behaviors.mediaEditAll.alterEditLabel();
      });
    },
    /**
     * alterEditLabel: Toggles the Edit all label with Edit Selected label.
     */
    alterEditLabel: function() {
      var allSelected = true;
      var noneSelected = true;
      $(".media-item-check").each(function() {
        if ($(this).is(":checked")) {
          noneSelected = false;
        }
        else {
          allSelected = false;
        }
      });
      if (allSelected) {
        // If all media items are checked, check the check-all.
        $(".media-item-check-all").prop('checked', true);
      }
      else {
        $(".media-item-check-all").prop('checked', false);
      }
      if (allSelected || noneSelected) {
        $("#media-edit-all-button").text(Drupal.t('Edit All'));
      }
      else {
        $("#media-edit-all-button").text(Drupal.t('Edit Selected'));
      }
    },
    /**
     * attach: The Drupal behavior attach.
     */
    attach: function(context, settings) {
      // Determine if a media field exists in the given context.
      if ($(".media-edit-all-field", context).length > 0) {
        Drupal.behaviors.mediaEditAll.$mediaWrapper = $(".media-edit-all-field", context);
        // Add checkboxes to each row.
        Drupal.behaviors.mediaEditAll.addCheckboxes();
        // Add "Edit All" button if at least one file exists.
        if (this.getFids().length >= 1) {
          // First removing any buttons already added.
          $('.media-edit-all-field #media-edit-all-button', context).remove();
          var $editAll = $('<a class="media-edit-all button" id="media-edit-all-button">').text(Drupal.t('Edit All'));
          // Handle both media multiselect and media browser.
          if ($('.multi-browse', context).length) {
            $('.media-edit-all-field  .multi-browse', context).after($editAll);
          }
          else {
            $('.media-edit-all-field .browse.button', context).after($editAll);
          }
          // Handler for Edit All button.
          $editAll.click(function(e) {
            e.preventDefault();
            // Add fids to the URL before ctools opens the modal dialog.
            var url = Drupal.behaviors.mediaEditAll.getUrl();
            var newbutton = $("<a></a>").attr('href', url).hide().addClass('ctools-use-modal');
            $editAll.after(newbutton);
            Drupal.attachBehaviors($editAll.parent());
            newbutton.click();
          });
        }
      }
    }
  }
})(jQuery, Drupal);
