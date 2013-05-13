// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.social_filterDropdown = {

    attach: function (context, settings) {
      $('.usa-social .secondary').wrap('<div class="social-tabs" />');
      $filter_menus = $('.social-tabs');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $(this).find('.active a').children().remove();
        $active_item = $(this).find('.active a');
        $menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';
        $(this).find('.secondary').addClass('filter-menu').before($menu_label);
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
        $drop_elements = $('.social-tabs .secondary li');
        $menu = $('.social-tabs .menu-label');
        if ($drop_elements.css("display") != "block" ){
          $menu.hide();
          $drop_elements.parent().parent().removeClass('filter-dropdown');
          $drop_elements.parent().removeClass('filter-menu');
        } else {
          $menu.show();
          $drop_elements.parent().parent().addClass('filter-dropdown');
          $drop_elements.parent().addClass('filter-menu');
        }
      }
    },
  };

}(jQuery));
