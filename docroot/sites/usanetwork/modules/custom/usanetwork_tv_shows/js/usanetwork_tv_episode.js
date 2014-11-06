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
      
      function getEpisodeDetails(t) {
        var tv_episode_title = $("#edit-title").val() != ''
                            ? $("#edit-title").val()
                            : '';

        /* Display default value of title field */
        if (tv_episode_title != '') {
          if ($('#display_readonly_title').length == 0) {
            $("#edit-field-seo-h1").prepend('<div class="form-item" id="display_readonly_title">' + 
                                              '<label>Title</label><div class="readonly_title">' + 
                                              Drupal.t('@title', {'@title' : tv_episode_title}) + 
                                              '</div></div>');
          }
          else {
            $("#display_readonly_title .readonly_title").html(Drupal.t('@title', {'@title' : tv_episode_title}));
          }
        }
        else {
          $("#display_readonly_title .readonly_title").html('');
        }

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

        /* Display default value for h1 field */
        if (episode_title != '' && tv_episode_h1 == '') {
          if ($('#edit-field-seo-h1 .description').length == 0) {
            $("#edit-field-seo-h1 input").after('<div class="description">' + 
                                                Drupal.t('DEFAULT: @h1', {'@h1' : episode_title}) + 
                                                '</div>');
          }
          else {
            $("#edit-field-seo-h1 .description").html(Drupal.t('DEFAULT: @h1', {'@h1' : episode_title}));
          }
        }
        else {
          if ($('#edit-field-seo-h1 .description').length > 0) {
            $("#edit-field-seo-h1 .description").html('');
          }
        }

        var page_title = '';
        if (episode_title != '' || season != '' || show != '') {
          page_title = Drupal.t('@title @season| Episode Guide |@show USA Network', {
            '@title' : episode_title.trim(),
            '@season' : season,
            '@show' : show
          });
        }
        if (t == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (episode_title != '' || season != '' || show != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title .form-item").append('<div class="description">' + 
                                                                Drupal.t('DEFAULT: ') + page_title + 
                                                                '</div>');
            }
            else {
              $("#edit-field-seo-page-title .description").html(Drupal.t('DEFAULT: ') + page_title);
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
