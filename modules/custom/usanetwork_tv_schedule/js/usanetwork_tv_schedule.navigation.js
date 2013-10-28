(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_naviation = {
    attach: function(context) {
      $(".schedule-header-navigation").touchSlider({
        mouseTouch: false
      });

      // move slider to the initial week
      var currentItem = $(".schedule-header-navigation").find('.touchslider-item').index($(".schedule-header-navigation").find('.touchslider-item.current-week'));
      $(".schedule-header-navigation").data("touchslider").step(currentItem, function() {});
    }
  }
})(jQuery);