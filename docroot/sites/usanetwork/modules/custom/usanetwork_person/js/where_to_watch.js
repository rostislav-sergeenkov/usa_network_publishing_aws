(function ($) {
  Drupal.behaviors.where_to_watch = {
    attach: function (context, settings) {
      var currentUrlElements = customParseURL(window.location.href);
      if(currentUrlElements.hash == 'where-to-watch'){
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
      }
      if (currentUrlElements.params['show'] != 'undefined' && currentUrlElements.params['show'] == 'wheretowatch') {
        if ('scrollRestoration' in history) {
          history.scrollRestoration = 'manual';
        }
        var target = document.getElementById('where-to-watch');
        target.scrollIntoView();
      }
    }
  }
}(jQuery));
