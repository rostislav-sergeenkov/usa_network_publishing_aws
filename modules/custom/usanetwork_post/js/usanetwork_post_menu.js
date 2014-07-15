// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.usanetwork_post_menu = {
    attach: function (context, settings) {
      $('body').once('usaVideo', function() {
        var $filter_menus = $('.blog-header .category-menu > .item-list');
        $filter_menus.each(function(index, value){
          var $filter_menu = $(this);
          // grab active item and copy it as a lable
          // create a div classed 'filter-menu' to contain the options
          var $menu_item = $filter_menu.find('li.active-trail > a');
          if ($menu_item.length > 0) {
            $menu_item = $menu_item.first();
          }
          else {
            $menu_item = $filter_menu.find('li.active > a');
          }

          if($menu_item.text() == '') {
            $menu_item = $filter_menu.find('li.first > a').first();
          }

          $filter_menu.find('.menu-label').remove();
          var $menu_label = '<div class="menu-label">' + $menu_item.text() + '</div>';

          $($filter_menu).children('ul').addClass('filter-menu').before($menu_label);

          $(this).find('.menu-label').click(function () {
            $(this).parent().toggleClass("open");
          });
        });
      });
    }
  };
}(jQuery));
