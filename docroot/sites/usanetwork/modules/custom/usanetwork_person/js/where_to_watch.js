(function ($) {
  Drupal.behaviors.where_to_watch = {
    attach: function (context, settings) {
      var currentUrlElements = customParseURL(window.location.href);
      if(currentUrlElements.hash == 'where-to-watch'){
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
      }
      $(window).load(function(){
        if (currentUrlElements.params['show'] != 'undefined' && currentUrlElements.params['show'] == 'wheretowatch') {
          if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          var offsetHeight = $('#head-leaderboard').height() + $('.header-nav-bar').height(),
              target = $('#where-to-watch');
          $('html, body').animate({
            scrollTop: target.position().top + offsetHeight
          }, 1000);
        }
      });
    }
  }
}(jQuery));
