// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.video_dropdowns = {

   attach: function (context, settings) {

    // all shows menu toggle

    $('.usa-secondary-menu .shows > li.first').click(function() {
        $(this).find('.item-list').toggle();
    });

      $filter_menus = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown_v2')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $menu_item = $(this).find('.categories .active');
        if($menu_item.text() == '') {
          $menu_item = $(this).find('.categories > li.first span');
        }
        $menu_label = '<div class="menu-label">' + $menu_item.text() + '</div>';

        $($filter_menu).find('.categories').addClass('filter-menu').before($menu_label);

        $(this).click(function () {
          $filter_menus.not($(this)).removeClass("open");
          $(this).toggleClass("open");
        });
      });

      video_dropdown_class_toggle();
      $(window).resize(function(){
        video_dropdown_class_toggle();
      });
      function video_dropdown_class_toggle() {
        $drop_elements = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
        if ($drop_elements.css("font-size") == "20px" ){
          $drop_elements.find('ul').removeClass('filter-menu');
          $drop_elements.removeClass('filter-dropdown_v2');
        } else {
          $drop_elements.find('ul').addClass('filter-menu');
          $drop_elements.addClass('filter-dropdown_v2');
        }
      }
    },
 };

}(jQuery));
