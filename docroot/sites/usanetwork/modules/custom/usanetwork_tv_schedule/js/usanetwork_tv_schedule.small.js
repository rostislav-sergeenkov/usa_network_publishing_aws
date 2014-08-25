(function ($) {
  Drupal.behaviors.usanetwork_tv_schedule_small = {
    attach: function(context) {
      $('.schedule-day-small').each(function() {
        var $container = $(this).children('.schedule-viewport');
        var swiper = $container.swiper({
          slidesPerView: 'auto',
          wrapperClass: 'schedule-items',
          slideClass: 'schedule-item',
          onSwiperCreated: function(swiper) {
            var $container = $(swiper.container);
            // swipe to "ON NOW" item
            var onNow = $container.find('.schedule-item').index($container.find('.schedule-item-on-now'));
            swiper.swipeTo(onNow);

            // bind navigation events
            var $navigation = $container.parents('.schedule-day-small').find('.schedule-navigation');
            $navigation.children('.schedule-navigation-prev').click(function() {
              swiper.swipePrev();
              return false;
            });
            $navigation.children('.schedule-navigation-next').click(function() {
              swiper.swipeNext();
              return false;
            });
          }
        });
      });
    }
  }
})(jQuery);
