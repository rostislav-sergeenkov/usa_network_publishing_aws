// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.video_dropdowns = {

   attach: function (context, settings) {

    // all shows menu toggle

    $('#block-usanetwork-video-usa-global-video-show-nav li.first').click(function() {
        $(this).find('.item-list').toggle();
    });

      $filter_menus = $('#block-usanetwork-video-usa-global-video-show-nav .content > .item-list > ul > li.first');
      $filter_menus.each(function(index, value){
        $filter_menu = $(this);
        $filter_menu.addClass('filter-dropdown')
        // grab active item and copy it as a lable
        // create a div classed 'filter-menu' to contain the options
        $active_item = $(this).find('a');
        //$menu_label = '<div class="menu-label">' + $active_item.text() + '</div>';

        $($filter_menu).find('ul').addClass('filter-menu');
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
        $change_element = $('#block-usanetwork-video-usa-global-video-show-nav.usa-secondary-menu');
        $drop_elements = $('#block-usanetwork-video-usa-global-video-show-nav .content > .item-list > ul > li.first');
        //$menu = $('#block-usanetwork-video-usa-global-video-show-nav .menu-label');
        if ($drop_elements.css("font-size") == "20px" ){
          //$menu.hide();
          $drop_elements.find('ul').removeClass('filter-menu');
          $drop_elements.removeClass('filter-dropdown');
        } else {
          //$menu.show();
          $drop_elements.find('ul').addClass('filter-menu');
          $drop_elements.addClass('filter-dropdown');
        }
      }
    },
 };

}(jQuery));
