// SELECT LIST-LIKE DROP DOWN MENUS
(function ($) {
  Drupal.behaviors.video_dropdowns = {

   attach: function (context, settings) {

    // all shows menu toggle

    $('.usa-secondary-menu .shows > li.first').click(function() {
        $(this).find('.item-list').toggle();
    });

    $('.usa-secondary-menu .categories > li.more').hover(function() {
        $(this).find('.item-list .more').toggle();
        $(this).toggleClass('open');
    });

    // $(document).on('click', '#block-usanetwork-video-usa-global-video-nav .shows > li.first', function (){
    //     $('#block-usanetwork-video-usa-global-video-nav .shows > li.first').toggleClass('hello');
    //     return false;
    // });


    // video items toggler

    $expandable_container = $('.view.expandable-container');
    $container = $('.view.expandable-container .view-content');
    $toggler = $('.view.expandable-container .expandable-toggle li');

    var i = 0;

    if($toggler.text() != 'more') {
      $toggler.addClass('less').text('close');
      $expandable_container.addClass('expanded');
      i = 1;
    }

    $toggler.click(function() {
      //console.log(i);
      if($toggler.text() == 'close') {
        i = 1;
        $container.find('.item-list').hide();
        $container.find('.item-list:first-child').css('display','block');
        $toggler.text('more');
        $expandable_container.removeClass('expanded');
      } else if ($toggler.text() == 'more') {
        $container.find('.item-list:first-child').css('display','block');
        $count = $container.find('.item-list').length - 1;
        $container.find('.item-list:eq('+ i + ')').show();

        if($count == i) {
          $toggler.text('close');
          $expandable_container.addClass('expanded');
          i = 1;
        }
        i++;
      }
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
