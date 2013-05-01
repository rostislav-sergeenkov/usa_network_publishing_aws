// MEDIA GALLERY TABS
(function ($) {
  Drupal.behaviors.mediaGalleryTabs = {
    attach: function (context, settings) {
      $tabCount = 0;
      $tabs = $('<ul class="gallery-tabs"></ul>');
      $('.gallery-tab-group').once('gallery-tabs', function() {
        // grab all the gallery pane title headings
        // create an unordered list from them
        $(this).each(function(index, value) {
          $tabCount++;
          $(this).attr('id', 'tab-' + $tabCount);
          $thisHeader = $(this).find('header').hide();
          $thisTab = '<li class="tab"><a href="#tab-'+ $tabCount +'">' + $thisHeader.html() + '</a></li>';
          $tabs.append($thisTab);
        });
      });
      // hide all the gallery panes
      $('.gallery-tab-group').hide()
      $('.pane-usa-gallery-panel-pane-1').before($tabs);
      $('#tab-1').show();
      // clicking a tab will set classes to hide all gallery panes,
      // and show one associated with that tab
      $('.tab a[href="#tab-1"]').addClass('selected');
      $('.tab a').click(function() {
        $('.tab a').removeClass('selected');
        $(this).addClass('selected');
        $('.gallery-tab-group').hide().filter(this.hash).show();
        return false;
      });
    },
  };

}(jQuery));
