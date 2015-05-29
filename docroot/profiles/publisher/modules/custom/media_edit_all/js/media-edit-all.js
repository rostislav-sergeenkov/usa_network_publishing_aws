(function($, Drupal) {
  Drupal.behaviors.mediaEditAll = {
    url: '/admin/content/file/media-edit-all/ajax/',
    $mediaWrapper: null,
    getFids: function () {
      var fids = [];
      var $media_items = $('.media-item', Drupal.behaviors.mediaEditAll.$mediaWrapper);
      $.each($media_items, function (i, val) {
        fids.push($(val).data('fid'));
      });
      return fids;
    },
    getUrl: function() {
      return Drupal.behaviors.mediaEditAll.url + Drupal.behaviors.mediaEditAll.getFids().join(" ");
    },
    attach: function(context, settings) {
      if (this.getFids().length >=2) {
        // 1st we must add our "Edit All" button, after removing any buttons already added.
        $('#media-edit-all-button', context).remove();
        var $editAll = $('<a class="media-edit-all button ctools-use-modal" id="media-edit-all-button">').text(Drupal.t('Edit All'));
        // Always add the new fids.
        $editAll.attr('href', Drupal.behaviors.mediaEditAll.getUrl());
        // Handle both media multiselect and media browser.
        if ($('.multi-browse', context).length) {
          $('.multi-browse', context).after($editAll);
        }
        else {
          $('.browse.button', context).after($editAll);
        }
      }
    }
  }
})(jQuery, Drupal);
