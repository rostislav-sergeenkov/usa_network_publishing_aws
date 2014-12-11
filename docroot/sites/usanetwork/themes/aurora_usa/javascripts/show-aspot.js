(function ($) {
  Drupal.behaviors.show_aspot = {
    attach: function (context, settings) {

      $('.more-button a').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('more')) {
          $(this).removeClass('more');
          $(this).addClass('less');
          $('.episodes-list ul').addClass('open');
        } else {
          $(this).removeClass('less');
          $(this).addClass('more');
          $('.episodes-list ul').removeClass('open');
        }
      });

    }
  };

}(jQuery));

