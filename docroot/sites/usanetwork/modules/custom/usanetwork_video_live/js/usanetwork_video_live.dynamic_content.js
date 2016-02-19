(function($) {
  Drupal.behaviors.usanetwork_video_live = {
    showName: '',
    galleryName: '',
    reset_right_rail: function() {
      $('.consum-sidebar').removeClass('sticky-sidebar footer-visible').removeAttr('style');
    },
    right_rail: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-right-rail/' + timezoneOffset,
        success: function(data) {
          if ( data != null && typeof data != 'undefined') {
            $('.consum-sidebar .items-block').remove();
            $('.consum-sidebar .more-items').remove();
            videoBlock.removeClass('show-app');
            $('.consum-sidebar .download-app').after(data.rendered);

            Drupal.behaviors.bxslider_carousels.initVSliders();

            var slideItemLength = $('.episodes-list-slider.horizontal .slide-item').length;
            if(slideItemLength > 3) {
              if (window.matchMedia("(max-width: " + window_size_mobile_640 + "px)").matches){
                $('.episodes-list-slider.horizontal').addClass('destroy');
                $('.episodes-list-slider.horizontal:not(.no-hidden-items) > ul > li:gt(4)').addClass('hidden');
              } else {
                Drupal.behaviors.bxslider_carousels.initHSliders();
              }
            }
          } else {
            $('.consum-sidebar .items-block').remove();
            $('.consum-sidebar .more-items').remove();
            videoBlock.addClass('show-app');
          }
        },
        error: function () {
          console.info('error');
          $('.consum-sidebar .items-block').remove();
          $('.consum-sidebar .more-items').remove();
          videoBlock.addClass('show-app');
        }
      });
    },
    related_content: function () {
      var timezoneOffset = usanetwork_menu_get_user_timezone_offset(),
          videoBlock = $('.video-block');

      $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: Drupal.settings.basePath + 'ajax/render-video-live-related/' + timezoneOffset,
        success: function(data) {
          if (data != null && typeof data != 'undefined') {
            $('h2.section-title').remove();
            $('.gallery-wrapper').remove();
            if (!videoBlock.hasClass('show-gallery')) {
              videoBlock.addClass('show-gallery');
            }
            $('.consum-sidebar').after(data.rendered);
            $('.consum-sidebar').after('<h2 class="section-title"><span class="section-title-wrapper show-border secondary">Related content</span></h2>');

            if (data.showName != null && typeof data.showName != 'undefined') {
              Drupal.behaviors.usanetwork_video_live.showName = data.showName;
            }
            if (data.galleryName != null && typeof data.galleryName != 'undefined') {
              Drupal.behaviors.usanetwork_video_live.galleryName = data.galleryName;
            }

            $('.gallery-wrapper').usaGallery();

            if ($('body').hasClass('sub-menu-is-sticky') && !$('.consum-sidebar').hasClass('sticky-sidebar')) {
              $('.consum-sidebar').addClass('sticky-sidebar');
            }
            Drupal.behaviors.consumptionator_right_rail.rightRailPosition();
          } else {
            $('h2.section-title').remove();
            $('.gallery-wrapper').remove();
            Drupal.behaviors.usanetwork_video_live.showName = '';
            Drupal.behaviors.usanetwork_video_live.galleryName = '';
            videoBlock.removeClass('show-gallery');
            Drupal.behaviors.usanetwork_video_live.reset_right_rail();
          }
        },
        error: function () {
          console.info('error');
          $('h2.section-title').remove();
          $('.gallery-wrapper').remove();
          Drupal.behaviors.usanetwork_video_live.showName = '';
          Drupal.behaviors.usanetwork_video_live.galleryName = '';
          videoBlock.removeClass('show-gallery');
          Drupal.behaviors.usanetwork_video_live.reset_right_rail();
        }
      });
    },
    attach: function (context, settings) {
      $('body').once(function () {
        Drupal.behaviors.usanetwork_video_live.right_rail();
        Drupal.behaviors.usanetwork_video_live.related_content();
      })
    }
  };
})(jQuery);
