// FLEXSLIDER FOR MEDIA GALLERIES
(function ($) {
  Drupal.behaviors.flexslidergallery = {
    attach: function (context, settings) {
      $('.field-name-field-media-items')
        .addClass('slides')
        .wrap('<div class="flexslider"></div>')
        .parent()
        .flexslider({
          animation: "slide",
          useCSS: true,
          touch: true,
          smoothHeight: true
        });
    },
  };

}(jQuery));
