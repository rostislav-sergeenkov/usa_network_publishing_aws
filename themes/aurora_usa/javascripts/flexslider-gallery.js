// FLEXSLIDER FOR MEDIA GALLERIES
(function ($) {
  Drupal.behaviors.flexslidergallery = {
    attach: function (context, settings) {
      $slideshow_selector = $('.field-name-field-media-items');
      $counter_selector = $('.slide-meta h1').after('<span class="counter"></span>').siblings('.counter');
      $count = $slideshow_selector.find('li').length;
      $counter = 1;
      $current = $counter;
      $slideshow_selector
        .addClass('slides')
        .wrap('<div class="flexslider"></div>')
        .parent()
        .flexslider({
          animation: "slide",
          useCSS: true,
          touch: true,
          smoothHeight: false,
          start: function(){
            update_counter();
          },
          after: function(){
            update_counter();
          }
        });
        function update_counter() {
          $current = ($counter > $count)? 1 : $counter++;
          $counter_output = $current + "/" + $count;
          $counter_selector.html($counter_output);
        }
    },
  };

}(jQuery));
