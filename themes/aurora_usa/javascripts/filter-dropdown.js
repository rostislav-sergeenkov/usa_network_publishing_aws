// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.filterDropdown = {
    attach: function (context, settings) {
      $filter_menus = $('.view-usa-episodes.view-display-id-panel_pane_3, .view-id-usa_episodes.view-display-id-panel_pane_1');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $active_item = $(this).find('.active');
        $menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';
        $(this).find('.view-content').addClass('filter-menu').before($menu_label);
        // clicking the lable toggles an 'open' class on .filter-menu
        $(this).click(function () {
          $filter_menus.not($(this)).removeClass("open");
          $(this).toggleClass("open");
        });
      });

      dropdown_class_toggle();
      $(window).resize(function(){
        dropdown_class_toggle();
      });
      function dropdown_class_toggle() {
        $drop_elements = $(".view-id-usa_episodes.view-display-id-panel_pane_1");
        if ($drop_elements.css("font-size") != "20px" ){
          $drop_elements.removeClass("filter-dropdown");
        } else {
          $drop_elements.addClass("filter-dropdown");
        }
      }

    },
  };

}(jQuery));
