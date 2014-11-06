(function ($) {
  Drupal.behaviors.usanetwork_tv_episode = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getEpisodeDetails('pageload');
      
      $tv_episode_controls = $("#edit-title, #edit-field-seo-h1 input," +
                                " #edit-field-show select, #edit-field-season select");

      $tv_episode_controls.on("change", function() {
        getEpisodeDetails('event');
      });

      $("#edit-field-season select").on("blur", function() {
        getEpisodeDetails('event');
      });

      $("#edit-field-seo-page-title input").on("change", function() {
        getEpisodeDetails('pageload');
      });

      function getEpisodeDetails(argument) {
        var tv_episode_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';

        var tv_episode_h1 = $("#edit-field-seo-h1 input").val() != ''
                          ? $("#edit-field-seo-h1 input").val()
                          : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? ' ' + $("#edit-field-show select option:selected").text() + ' |'
                    : '';

        var season = ($("#edit-field-season select").val() != '_none')
                    ? '- ' + $("#edit-field-season select option:selected").text() + ' '
                    : '';

        var episode_title = '';
        if (tv_episode_title != '' && tv_episode_h1 == '') {
          episode_title = tv_episode_title;
        }
        else {
          episode_title = tv_episode_h1;
        }

        var page_title = '';
        if (episode_title != '' || season != '' || show != '') {
          page_title = Drupal.t('@title @season| Episode Guide |@show USA Network', {
            '@title' : episode_title.trim(),
            '@season' : season,
            '@show' : show
          });
        }
        if (argument == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (episode_title != '' || season != '' || show != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                                Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title + 
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT').toUpperCase() + ': ' + page_title);
            }
          }
          else {
            if ($('#edit-field-seo-page-title .description').length > 0) {
              $("#edit-field-seo-page-title .description").html('');
            }
          }
        }
        else {
          if ($('#edit-field-seo-page-title .description').length > 0) {
            $("#edit-field-seo-page-title .description").html('');
          }
        }

      }
    }
  }
})(jQuery);
