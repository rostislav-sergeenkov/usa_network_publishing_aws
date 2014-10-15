(function ($) {
  Drupal.behaviors.usanetwork_catchall = {
    attach: function(context){

      $catchall_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-path-alias");

      $catchall_controls.on("change", function() {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text()
                    : '';
                    
        var path = $("#edit-path-alias").val() != ''
                  ? $("#edit-path-alias").val()
                  : '';

        var catchall_title = '';
        if (title != '' && h1 == '') {
          catchall_title = title;
        }
        else {
          catchall_title = h1;
        }
        
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
        $("#edit-field-seo-page-title input").val(Drupal.t('@title ' + catchall_type + '| USA Network', {
          '@title' : catchall_title.trim(),
          '@show' : show
        }));
      });
    }
  }
})(jQuery);
