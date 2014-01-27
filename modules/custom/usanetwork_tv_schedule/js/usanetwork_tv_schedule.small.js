(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_small = {
    attach: function(context) {
      $('.schedule-day-small').each(function() {
        var $slider = $(this);
        var onNow = $slider.find('.schedule-item').index($slider.find('.schedule-item-on-now'));
        $slider.touchSlider({
          prev: '.schedule-navigation-prev',
          next: '.schedule-navigation-next',
          viewport: '.schedule-viewport',
          margin: 0,
          continuous: false,
          page: onNow
        });
      });
    }
  }
})(jQuery);
