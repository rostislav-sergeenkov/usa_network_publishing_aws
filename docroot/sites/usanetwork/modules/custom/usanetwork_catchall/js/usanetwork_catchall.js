(function ($) {
  Drupal.behaviors.usanetwork_catchall = {
    attach: function(context){

      $catchall_controls = $("#edit-title, #edit-path-alias, #edit-field-show select");

      $catchall_controls.on("change", function() {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

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
        $("#edit-field-seo-page-title input").val(Drupal.t('@title ' + catchall_type + '| USA Network', {
          '@title' : title.trim(),
          '@show' : show
        }));
      });
    }
  }
})(jQuery);