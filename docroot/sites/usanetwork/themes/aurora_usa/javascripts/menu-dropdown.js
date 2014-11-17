(function ($) {
  Drupal.behaviors.usanetwork_menu_dropdown = {
    attach: function(context){
      var tabNavHandler = function (e) {
        console.log(1);
        e.preventDefault();

        var tab = $(this),
            tabs = $('header .tab .no-refresh'),
            tab_containers = $('header .tab-item'),
            tab_container_act = $('header .tab-item.active'),
            index = $(".tab .no-refresh").index(tab),
            animation_speed = 350;

        var openTab = function() {
          $(".tab .no-refresh").unbind('click');

          tab.addClass('active').attr('data-state', 'active');
          tab_containers.eq(index).hide().slideDown(animation_speed, function() {
            $(".tab .no-refresh").bind('click', tabNavHandler);
          }).addClass('active');

          // HIDE 'SHOW MENU' WHEN OPEN THIS
          $(".menu-open a").parent().removeClass('active');
          $(".menu-open a").removeClass('active');
          $('.show-menu-tab').slideUp(350).removeClass('active');

          // HIDE SEARCH BLOCK
          $('.search-input-block, .search a').removeClass('active');
        };
        if (window.innerWidth >= 769) {
          if (tab.attr('data-state') == 'active') {
            tab.removeClass('active').attr('data-state', '');
            tab_containers.eq(index).slideUp(animation_speed).removeClass('active');
          } else {
            tabs.removeClass('active').attr('data-state', '');
            if (tab_container_act.length) {
              $(".tab .no-refresh").unbind('click');
              tab_container_act
                  .slideUp(animation_speed, function() { $(".tab .no-refresh").unbind('click'); openTab(); })
                  .removeClass('active');
            } else {
              openTab();
            }
          }
        }
        if (window.innerWidth < 769 && $(this).parent().hasClass('expanded')) {
          if (!$(this).hasClass('active')) {
            $(this).parent().addClass('active');
            $(this).addClass('active');
          } else {
            $(this).parent().removeClass('active');
            $(this).removeClass('active');
          }
        }
      };

      var menuOpenHandler = function (e) {
        e.preventDefault();

        var menu_link = $(this),
            menu_link_container = $(this).parent(),
            usa_logo = $('.usa-logo'),
            search_container = $('.search'),
            search_link = $('.search a'),
            search_input_block = $('.search-input-block'),
            title_wrapper = $('.show-title-wrapper'),
            menu = $('header .nav-bar-tabs');

        // Open main menu action
        var openMainMenu = function() {
          menu_link_container.addClass('active');
          menu_link.addClass('active');
          search_link.addClass('active');
          search_container.addClass('active');
          search_input_block.addClass('active');
          //usa_logo.addClass('active');
          menu.addClass('active');
          if ($('body').hasClass('show-page')) {
            menu_link.addClass('show-color');
          }
          title_wrapper.toggle();
        };

        // Close main menu action
        var closeMainMenu = function() {
          menu_link_container.removeClass('active');
          menu_link.removeClass('active show-color');
          search_link.removeClass('active');
          search_container.removeClass('active');
          search_input_block.removeClass('active');
          //usa_logo.removeClass('active');
          menu.removeClass('active');
          title_wrapper.toggle();
        };

        if (!menu_link.hasClass('active')) {
          openMainMenu();
        } else {
          closeMainMenu();
        }
      };

      $(".tab .no-refresh").bind('click', tabNavHandler);
      $('.nav-bar-tabs .expanded > a:not(.no-refresh)').bind('click', tabNavHandler);
      $(".main-menu-open a").bind('click', menuOpenHandler);

    }
  }
})(jQuery);
