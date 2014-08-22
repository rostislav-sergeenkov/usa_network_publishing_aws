// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.social_filterDropdown = {

    attach: function (context, settings) {
      $filter_menus = $('#block-usanetwork-social-usa-show-social-tab-nav');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $active_item = $(this).find('.active');
        $menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';
        $(this).find('.item-list').addClass('filter-menu').before($menu_label);
        // clicking the lable toggles an 'open' class on .filter-menu
        $(this).click(function () {
          $filter_menus.not($(this)).removeClass("open");
          $(this).toggleClass("open");
        });
      });

      social_dropdown_class_toggle();
      $(window).resize(function(){
        social_dropdown_class_toggle();
      });
      function social_dropdown_class_toggle() {
        $drop_elements = $('#block-usanetwork-social-usa-show-social-tab-nav.usa-secondary-menu');
        $menu = $('#block-usanetwork-social-usa-show-social-tab-nav .menu-label');
        if ($drop_elements.css("font-size") == "20px" ){
          $menu.hide();
          $drop_elements.removeClass('filter-dropdown');
        } else {
          $menu.show();
          $drop_elements.addClass('filter-dropdown');
        }
      }
    },
  };

}(jQuery));
