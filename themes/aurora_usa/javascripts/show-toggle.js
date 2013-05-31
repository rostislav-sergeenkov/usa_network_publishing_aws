// Show toggle
// TODO:  cleanup
(function ($) {

  Drupal.behaviors.show_more_toggle = {
    attach: function (context, settings) {
      $promo = $('.promo-ads-panel');
      $promo_toggle_wrap = $('.promo-ads-panel .expandable-toggle-wrap');
      $promo_toggle = $('.promo-ads-panel .expandable-toggle');

      $promos = $('.expandable-container');

      $video_promo = $('.video-promo-panel');
      $video_promo_toggle_wrap = $('.video-promo-panel .expandable-toggle-wrap');
      $video_promo_toggle = $('.video-promo-panel .expandable-toggle');
      $target_pane = '.expandable-content > div:first-child .pane-content';

      $promos.find($target_pane).height(269);

      $promos_count = $promos.find('.pane-node-field-usa-tv-promo ul li').length;
      $videos_count = $video_promo.find('.pane-node-field-usa-tv-promo-vids ul li').length;


      function video_count_check() {
        if($videos_count <= 4 && $('.usa-tv-show #main').css('width') == '1245px' ) {
          $video_promo_toggle.hide();
          $video_promo_toggle_wrap.addClass('off');
        } else if ($videos_count <= 3 && $('.usa-tv-show #main').css('width') == '930px' ) {
          $video_promo_toggle.hide();
          $video_promo_toggle_wrap.addClass('off');
        } else if ($videos_count <= 2 && $('.usa-tv-show #main').css('width') == '615px' ) {
          $video_promo_toggle.hide();
          $video_promo_toggle_wrap.addClass('off');
        } else if ($videos_count <= 1 && $('.usa-tv-show #main').css('width') == '304px' ) {
          $video_promo_toggle.hide();
          $video_promo_toggle_wrap.addClass('off');
        } else {
          $video_promo_toggle.show();
          $video_promo_toggle_wrap.removeClass('off');
        }
      }

      function promo_count_check() {
        if($promos_count <= 3 && $('.usa-tv-show #main').css('width') == '1245px' ) {
          $promo_toggle.hide();
          $promo_toggle_wrap.addClass('off');
        } else if ($promos_count <= 2 && $('.usa-tv-show #main').css('width') == '930px' ) {
          $promo_toggle.hide();
          $promo_toggle_wrap.addClass('off');
        } else if ($promos_count <= 1 && $('.usa-tv-show #main').css('width') == '615px' ) {
          $promo_toggle.hide();
          $promo_toggle_wrap.addClass('off');
        } else if ($promos_count <= 1 && $('.usa-tv-show #main').css('width') == '304px' ) {
          $promo_toggle.hide();
          $promo_toggle_wrap.addClass('off');
        } else {
          $promo_toggle.show();
          $promo_toggle_wrap.removeClass('off');
        }
      }

      $(window).resize(function() {
        video_count_check();
        promo_count_check();
      });

      $promo_toggle.click(function() {
        if($promo.find('.more').css('display') == 'block') {
          $promo.addClass('expanded');
          $promo.find($target_pane).css('height','100%');
          $promo.find('.more').hide();
          $promo.find('.less').show();
        } else {
          $promo.removeClass('expanded');
          $promo.find($target_pane).height(269);
          $promo.find('.less').hide();
          $promo.find('.more').show();
        }
     });

      $video_promo_toggle.click(function() {
        if($video_promo.find('.more').css('display') == 'block') {
          $video_promo.addClass('expanded');
          $video_promo.find($target_pane).css('height','100%');
          $video_promo.find('.more').hide();
          $video_promo.find('.less').show();
        } else {
          ;
          $video_promo.removeClass('expanded');
          $video_promo.find($target_pane).height(269);
          $video_promo.find('.less').hide();
          $video_promo.find('.more').show();
        }
     });

    },
};

}(jQuery));
