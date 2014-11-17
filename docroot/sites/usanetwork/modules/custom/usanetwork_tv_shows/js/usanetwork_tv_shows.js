(function ($) {
  Drupal.behaviors.usanetwork_tv_shows = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      $(".node-form").once('tvshowform', function() {
        getTvShowDetails('pageload');
      });

      if ($("input[name=changed]").val() == '') {
        $("#edit-title").on("change", function() {
          getTvShowDetails('event');
        });
      }

      function getTvShowDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');        
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var inputDefaultValue = title.trim() + ' | ' + titleSuffix;
        if (event_type == 'event') {
          $("#edit-field-seo-page-title input").val(inputDefaultValue);
        }
        /* Display default value for page title field */
        if (inputDefaultValue != '' && event_type != 'event' && $("input[name=changed]").val() != '') {
          $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                            defaultString + ': ' + inputDefaultValue +
                                                            '</div>');
        }
      }
    }
  }
})(jQuery);
