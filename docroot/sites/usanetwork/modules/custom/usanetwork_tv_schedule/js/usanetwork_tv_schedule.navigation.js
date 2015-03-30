(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_navigation = {
    attach: function(context) {
      // move slider to the initial week
      var currentItem = $(".schedule-header-navigation").find('.touchslider-item').index($(".schedule-header-navigation").find('.touchslider-item.current-week'));
      if (currentItem < 0) {
        currentItem = 0;
      }
      // init touch slider
      $(".schedule-header-navigation").touchSlider({
        continuous: false,
        page: currentItem
      });
    }
  }
})(jQuery);
