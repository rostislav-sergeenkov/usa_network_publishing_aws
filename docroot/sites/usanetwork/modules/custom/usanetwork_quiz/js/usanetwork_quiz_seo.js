(function ($) {
  Drupal.behaviors.usanetwork_quiz_seo = {
    attach: function(context){

      $quiz_controls = $("#edit-title, #edit-field-seo-h1 input, #edit-field-show select");

      $quiz_controls.on("change", function() {
        var title = $("#edit-title").val() != ''
                    ? $("#edit-title").val()
                    : '';

        var h1 = $("#edit-field-seo-h1 input").val() != ''
                  ? $("#edit-field-seo-h1 input").val()
                  : '';

        var show = ($("#edit-field-show select").val() != '_none')
                    ? $("#edit-field-show select option:selected").text() + ' -'
                    : '';

        var quiz_title = '';
        if (title != '' && h1 == '') {
          quiz_title = title;
        }
        else {
          quiz_title = h1;
        }

        $("#edit-field-seo-page-title input").val(Drupal.t('@show @title | USA Network', {
          '@title' : quiz_title.trim(),
          '@show' : show
        }).trim());
      });
    }
  }
})(jQuery);