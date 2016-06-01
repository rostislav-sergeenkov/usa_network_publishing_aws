(function ($) {

  Drupal.behaviors.usanetwork_new_menu_dropdown = {

    attach: function (context) {

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

        $(window)
            .on('resize', function (e) {
              clearTimeout(timer_id);
              timer_id = setTimeout(function () {
                if (window.matchMedia("(min-width: " + window_size_tablet_portrait + "px)").matches) {
                  if ($(".menu-open-button").hasClass('active')) {
                    newMenuOpenHandler();
                  }
                }
              }, 300);
            })
            .on('scroll', function (e) {
              $('#usa-newsletter-subscription.active').hide().removeClass('active');
              $('#header .menu-sign-up.active-link').removeClass('active-link');
            });

        // usa newsletter subscription
        $('#usa-newsletter-subscription .close-form').on('click', function (e) {

          var $menuSignUp = $('#header .menu-sign-up'),
              $formBlock = $('#usa-newsletter-subscription'),
              classActiveLink = 'active-link',
              classAnimating = 'velocity-animating';

          if ($formBlock.hasClass(classAnimating)) {
            $formBlock.velocity('finish');
          }

          if ($menuSignUp.hasClass(classActiveLink)) {
            $formBlock.velocity('slideUp', {
              duration: 400,
              complete: function(elem) {
                $menuSignUp.removeClass(classActiveLink);
                $formBlock.removeClass('active');
              }
            });
          }
        });

        $('#header .menu-sign-up').on('click', function (e) {

          e.preventDefault();

          var $menuSignUp = $(this),
              $formBlock = $('#usa-newsletter-subscription'),
              classActiveLink = 'active-link',
              classAnimating = 'velocity-animating';

          if ($formBlock.hasClass(classAnimating)) {
            $formBlock.velocity('finish');
          }

          if ($menuSignUp.hasClass(classActiveLink)) {
            $formBlock.velocity('slideUp', {
              duration: 400,
              complete: function(elem) {
                $menuSignUp.removeClass(classActiveLink);
                $formBlock.removeClass('active');
              }
            });
          } else {
            $menuSignUp.addClass(classActiveLink);
            $formBlock.velocity('slideDown', {
              duration: 400,
              complete: function(elem) {
                $formBlock.addClass('active');
              }
            });
          }
        });


      });
    }
  }
})(jQuery);
