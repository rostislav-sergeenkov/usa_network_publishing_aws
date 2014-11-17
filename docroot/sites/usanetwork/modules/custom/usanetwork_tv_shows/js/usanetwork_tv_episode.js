(function ($) {
  Drupal.behaviors.usanetwork_tv_episode = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      $(".node-form").once('episodeform', function() {
        getEpisodeDetails('pageload');
      });

      $tv_episode_controls = $("#edit-title, #edit-field-show select, #edit-field-season select");

      if ($("input[name=changed]").val() == '') {
        $tv_episode_controls.on("change", function() {
          getEpisodeDetails('event');
        });

        $("#edit-field-season select").on("blur", function() {
          getEpisodeDetails('event');
        });
      }
      
      function getEpisodeDetails(event_type) {
        var defaultString = Drupal.t('Default').toUpperCase();
        var titleSuffix = Drupal.t('USA Network');      
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var season = ($("#edit-field-season select").val() != '_none')
                    ? '- ' + $("#edit-field-season select option:selected").text() + ' '
                    : '';

        var inputDefaultValue = title.trim() + ' ' + season + '| Episode Guide |' + show + ' ' + titleSuffix;
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
