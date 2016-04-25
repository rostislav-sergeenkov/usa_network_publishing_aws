(function ($) {
  Drupal.behaviors.usanetwork_new_menu_dropdown = {


    attach: function(context){

      var timer_id;

      $(document.body).once('window-events', function () {
        var tablet = false;

        if (window.matchMedia("(max-width: " + window_size_tablet_portrait_768 + "px)").matches) {
          tablet = true;
        }

        var newMenuOpenHandler = function (e) {

          var menu_link = $(".menu-open-button"),
              menu_container = $('#block-usanetwork-tv-shows-usanetwork-tv-shows-nd-menu');

          // Open main menu action
          var openMenu = function () {
            menu_link.addClass('active');
            menu_container.addClass('active');
          };

          // Close main menu action
          var closeMenu = function () {
            menu_link.removeClass('active');
            menu_container.removeClass('active');
          };

          if (!menu_link.hasClass('active')) {
            openMenu();
          } else {
            closeMenu();
          }
        };

        $(".menu-open-button").bind('click', newMenuOpenHandler);

        $(window).on('resize', function (e) {
          clearTimeout(timer_id);
          timer_id = setTimeout(function() {

          }, 300);
        });

      });
    }
  }
})(jQuery);
