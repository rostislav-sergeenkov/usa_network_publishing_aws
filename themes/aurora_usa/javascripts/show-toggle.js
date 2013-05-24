// Show toggle
(function ($) {

  Drupal.behaviors.show_more_toggle = {
    attach: function (context, settings) {
      $promo = $('.promo-panel');
      $content = $('.promo-panel .pane-content');
      $toggle = $('.promo-panel .expandable-toggle');
      $more = $('.promo-panel .expandable-toggle .more');
      $less = $('.promo-panel .expandable-toggle .less');
      $content.height(269);

      $('.promo-panel .expandable-toggle').click(function() {
        if($more.css('display') == 'block') {
          $promo.addClass('expanded');
          $content.css('height','100%');
          $more.hide();
          $more.siblings('.less').show();
        } else {
          $promo.removeClass('expanded');
          $content.height(269);
          $less.hide();
          $less.siblings('.more').show();
        }
     });

    },
};

}(jQuery));
