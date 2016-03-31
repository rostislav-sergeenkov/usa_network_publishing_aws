(function($) {

  Drupal.behaviors.usanetwork_news = {
    attach: function (context, settings) {
      $('#block-usanetwork-news-landing').click( function(e){
        var target = $(e.target);
        if(target.hasClass('open-description')){
          var current_item = target.closest('.episode-landing-list-item');
          if(current_item.hasClass('active')){
            current_item.removeClass('active');
          } else {
            current_item.addClass('active');
          }
        }
      });
    }
  }

})(jQuery);

