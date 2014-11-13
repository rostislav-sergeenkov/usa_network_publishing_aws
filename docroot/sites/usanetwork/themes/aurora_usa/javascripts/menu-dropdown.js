(function ($) {
  Drupal.behaviors.usanetwork_menu_dropdown = {
    attach: function(context){
      var tabNavHandler = function (e) {
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
      };

      $(".tab .no-refresh").bind('click', tabNavHandler);
    }
  }
})(jQuery);
