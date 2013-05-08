// MEDIA GALLERY TABS
(function ($) {
  Drupal.behaviors.mediaGalleryTabs = {
    attach: function (context, settings) {
      $tabCount = 0;
      $tabs = $('<div class="gallery-tabs grid-container-small"><ul></ul></div>');
      $tabs_ul = $tabs.find('ul');
      $('.gallery-tab-group').once('gallery-tabs', function() {
        // grab all the gallery pane title headings
        // create an unordered list from them
        $(this).each(function(index, value) {
          $tabCount++;
          $(this).attr('id', 'tab-' + $tabCount);
          $thisHeader = $(this).find('header').hide();
          $thisTab = '<li class="tab"><a href="#tab-'+ $tabCount +'">' + $thisHeader.html() + '</a></li>';
          $tabs_ul.append($thisTab);
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
        $('.filter-dropdown').removeClass('open');
        return false;
      });

      ///// FILTER TABS FOR MEDIA GALLERY PAGE /////
      $filter_menus = $('.gallery-tabs');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown').find('li').addClass('menu-item');
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $active_item = $(this).find('.selected');
        $menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';
        $(this).find('ul').addClass('filter-menu');
        $(this).prepend($menu_label);
        // clicking the lable toggles an 'open' class on .filter-menu
        $('.menu-label').click(function () {
          // $filter_menus.not($(this).parent()).removeClass("open");
          $(this).parent().toggleClass("open");
        });
      });
      dropdown_class_toggle();
      $(window).resize(function(){
        dropdown_class_toggle();
      });
      function dropdown_class_toggle() {
        $drop_elements = $(".gallery-tabs");
        if ($drop_elements.css("background-color") != "rgb(61, 61, 61)" ){
          $drop_elements.removeClass("filter-dropdown");
        } else {
          $drop_elements.addClass("filter-dropdown");
        }
      }
    },
  };

}(jQuery));
