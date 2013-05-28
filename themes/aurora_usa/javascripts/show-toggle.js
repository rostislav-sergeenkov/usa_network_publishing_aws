// Show toggle
// TODO:  cleanup
(function ($) {

  Drupal.behaviors.show_more_toggle = {
    attach: function (context, settings) {
      $promo = $('.promo-ads-panel');
      $promo_toggle = $('.promo-ads-panel .expandable-toggle');

      $promos = $('.expandable-container');

      $video_promo = $('.video-promo-panel');
      $video_promo_toggle = $('.video-promo-panel .expandable-toggle');
      $target_pane = '.expandable-content > div:first-child .pane-content';

      $promos.find($target_pane).height(269);

      $promo_toggle.click(function() {
        if($promo.find('.more').css('display') == 'block') {
          $promo.addClass('expanded');
          $promo.find($target_pane).css('height','100%');
          //alert($promo.find('.pane-content').height());
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
