// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.video_dropdowns = {

   attach: function (context, settings) {

    // all shows menu toggle

    $('.usa-secondary-menu .shows > li.first').click(function() {
        $(this).find('.item-list').toggle();
    });

    $('.usa-secondary-menu .categories > li.more').click(function() {
        $(this).find('.item-list .more').toggle();
        $(this).toggleClass('open');
    });

      $filter_menus = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown_v2')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $menu_item = $(this).find('.categories > li > a.active');
        if($menu_item.text() == '') {
          $menu_item = $(this).find('.categories > li.first span');
        }

        $filter_menu.find('.menu-label').remove();
        $menu_label = '<div class="menu-label">' + $menu_item.text() + '</div>';

        $($filter_menu).find('.categories').addClass('filter-menu').before($menu_label);

        $(this).find('.menu-label').click(function () {
          $filter_menus.not($(this)).parent().removeClass("open");
          $(this).parent().toggleClass("open");
        });
      });

      video_dropdown_class_toggle();
      $(window).resize(function(){
        video_dropdown_class_toggle();
      });
      function video_dropdown_class_toggle() {
        $drop_elements = $('.usa-secondary-menu .content > .item-list:nth-child(2)');
        if ($drop_elements.css("font-size") == "20px" ){
          $drop_elements.find('.categories').removeClass('filter-menu');
          $drop_elements.removeClass('filter-dropdown_v2');
        } else {
          $drop_elements.find('.categories').addClass('filter-menu');
          $drop_elements.addClass('filter-dropdown_v2');
        }
      }
    },
 };

}(jQuery));
