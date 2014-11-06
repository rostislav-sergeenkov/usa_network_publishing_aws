(function ($) {
  Drupal.behaviors.usanetwork_catchall = {
    attach: function(context){
      /* Trigger this function on page load to display text annotation for edit page */
      getCatchallDetails('pageload');

      $catchall_controls = $("#edit-title, #edit-path-alias, #edit-field-show select");

      $catchall_controls.on("change", function() {
        getCatchallDetails('event');
      });
      $("#edit-field-seo-page-title input").on("change", function() {
        getCatchallDetails('pageload');
      });

      function getCatchallDetails(t) {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        /* Display default value of title field */
        if (title != '') {
          if ($('#display_readonly_title').length == 0) {
            $("#edit-field-seo-page-title").prepend('<div class="form-item" id="display_readonly_title">' +
                                                    '<label>Title</label><div class="readonly_title">' + 
                                                    Drupal.t('@title', {'@title' : title}) + 
                                                    '</div></div>');
          }
          else {
            $("#display_readonly_title .readonly_title").html(Drupal.t('@title', {'@title' : title}));
          }
        }
        else {
          $("#display_readonly_title .readonly_title").html('');
        }

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text()
                    : '';
                    
        var path = $("#edit-path-alias").val() != ''
                  ? $("#edit-path-alias").val()
                  : '';

        var catchall_type = '';
        if (path != '') {
          var path_array = path.split("/");

          if (path_array.length > 1 && path_array[1] !== undefined) {
            if (path_array[1] == 'features') {
              catchall_type = '| Features | @show ';
            }
            else if (path_array[1] == 'quizzes') {
              catchall_type = '| Quizzes | @show ';
            }
            else if (path_array[1] == 'games') {
              catchall_type = '| Games | @show ';
            }          
          }
        }

        var page_title = '';
        if (title != '') {
          page_title = Drupal.t('@title ' + catchall_type + '| USA Network', {
            '@title' : title.trim(),
            '@show' : show
          });
        }
        if (t == 'event') {
          $("#edit-field-seo-page-title input").val(page_title);
        }

        /* Display default value for page title field */
        var seo_page_title = $("#edit-field-seo-page-title input").val();
        if (seo_page_title == '') {
          if (title != '' || show != '') {
            if ($('#edit-field-seo-page-title .description').length == 0) {
              $("#edit-field-seo-page-title input").after('<div class="description">' + 
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
